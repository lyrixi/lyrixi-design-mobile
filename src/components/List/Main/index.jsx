import React, { useImperativeHandle, forwardRef, useRef, useEffect } from 'react'
import mergeGroups from './utils/mergeGroups'
import isGroups from './utils/isGroups'
import hasMoreItems from './utils/hasMoreItems'
import scrollToTop from './utils/scrollToTop'
import InfiniteScroll from './../InfiniteScroll'
import Loading from './components/Loading'
import List from './List'
import VirtualList from './VirtualList'

// 内库使用-start
import Device from './../../../utils/Device'
import LocaleUtil from './../../../utils/LocaleUtil'
import Storage from './../../../utils/Storage'
import Result from './../../Result'
import Button from './../../Button'
// 内库使用-end

/* 测试使用-start
import { Device, LocaleUtil, Storage, Result, Button } from 'lyrixi-design-mobile'
测试使用-end */

const Main = forwardRef(
  (
    {
      // Modal
      open = true,

      // Main: common
      initialLoad = true, // 默认加载
      reload,
      allowClear,
      multiple,
      value,
      onChange,
      onScroll,
      // 显示
      loading,
      // 请求属性
      // loadData: (params: { page: number, action: 'load'|'reload'|'topRefresh'|'bottomRefresh'|'retry', rows?: number }) => Promise<{
      //   status?: 'empty'|'500', // 'empty' 无数据, '500' 异常
      //   message?: string,       // 失败或异常时的提示信息
      //   page?: number,          // 当前页数
      //   rows?: number,          // 每页请求条数
      //   list: Array<any>,       // 列表数据(必填)
      //   totalPage?: number,     // 总页数(与 totalRows 二选一传递即可)
      //   totalRows?: number      // 总条数(与 totalPage 二选一传递即可)
      // }>
      loadData,
      pull = true, // 是否允许下拉刷新
      onLoad,

      // List config
      itemRender,
      itemLayout,
      checkable,

      // Render
      prepend,
      append,
      cache,
      // Virtual list config
      virtual,
      /*
      {
        getItemHeight: () => Number
      }
      */
      ...props
    },
    ref
  ) => {
    // 滚动节流定时器
    const scrollThrottleRef = useRef(null)

    // 容器
    const mainRef = useRef(null)
    // 分页
    const pageRef = useRef(1)

    const [list, setList] = Storage.useCacheState(
      null,
      cache?.name ? { name: cache?.name + ':list', persist: cache?.persist } : null
    )
    // 全屏提示: {status: 'empty|500', title: ''}
    const [mainStatus, setMainStatus] = Storage.useCacheState(
      null,
      cache?.name ? { name: cache?.name + ':mainStatus', persist: cache?.persist } : null
    )
    // 底部提示: loading | noMore | error
    const [bottomStatus, setBottomStatus] = Storage.useCacheState(
      '',
      cache?.name ? { name: cache?.name + ':bottomStatus', persist: cache?.persist } : null
    )
    // 加载显示: load | reload | topRefresh | bottomRefresh
    const [loadAction, setLoadAction] = Storage.useCacheState(
      '',
      cache?.name ? { name: cache?.name + ':loadAction', persist: cache?.persist } : null
    )

    // Expose
    useImperativeHandle(ref, () => {
      return {
        mainDOM: mainRef?.current?.rootDOM,
        getMainDOM: mainRef?.current?.getRootDOM,
        // IndexBar
        getAnchors: mainRef?.current?.getAnchors,
        scrollToAnchor: mainRef?.current?.scrollToAnchor,
        // 重新加载
        reload: (action) => {
          if (action === 'load') {
            init()
          } else {
            _loadData(action || 'reload')
          }
        },
        // 获取设置列表
        getList: () => {
          return list
        }
      }
    })

    // 渲染完成执行onLoad
    useEffect(() => {
      onLoad && onLoad()
      // eslint-disable-next-line
    }, [list])

    // 默认加载
    useEffect(() => {
      if (!initialLoad) return

      init()
      // eslint-disable-next-line
    }, [])

    // 初始化
    function init() {
      // 有缓存数据, 直接渲染
      if (cache?.name && Array.isArray(list) && list.length) {
        // 滚动条位置
        if (mainRef?.current?.rootDOM) {
          mainRef.current.rootDOM.scrollTop =
            window[`${cache.name}:scrollTop`] || Storage.getCache(`${cache.name}:scrollTop`) || 0
        }
        return
      }

      // 没有缓存直接再次查询
      _loadData('load')
    }

    // 顶部刷新和初始化, action: 'load | reload | topRefresh'
    async function _loadData(action) {
      // Scroll to top
      scrollToTop(mainRef.current?.rootDOM)

      // Query List
      let result = null
      pageRef.current = 1

      setLoadAction(action)
      result = await loadData({ page: pageRef.current, action: action })
      setLoadAction('')

      // 结果处理
      const resultList = Array.isArray(result?.list) ? result.list : []
      const resultStatus = result?.status
      const resultMessage = result?.message

      // 成功: 有数据
      if (resultList.length) {
        setList(resultList)
        setMainStatus(null)

        // 当前为第一页, 检查是否还有下一页
        if (
          hasMoreItems({
            list: resultList,
            currentList: resultList,
            pagination: {
              page: result?.page || 1,
              rows: result?.rows,
              totalPages: result?.totalPage,
              totalItems: result?.totalRows
            }
          }) === false
        ) {
          setBottomStatus('noMore')
        } else {
          setBottomStatus('loading')
        }
      }
      // 成功: 无数据 或 显示空态
      else if (result && (resultStatus === 'empty' || resultList.length === 0)) {
        setList(null)
        setBottomStatus('')
        setMainStatus({
          status: 'empty'
        })
      }
      // 失败
      else {
        setList(null)
        setMainStatus({
          status: '500',
          title: typeof resultMessage === 'string' ? resultMessage : ''
        })
      }

      return true
    }

    // 底部刷新
    async function handleBottomRefresh() {
      // 全局有报错, 或者无数据了不再底部加载
      if (mainStatus || bottomStatus === 'noMore') return

      // 底部加载
      pageRef.current++
      let action = 'bottomRefresh'
      setLoadAction(action)
      let result = await loadData({ page: pageRef.current, action: action })
      setLoadAction(action)

      const nextList = Array.isArray(result?.list) ? result.list : []
      const isError = result?.status === '500'

      // 成功: 下一页有数据
      if (!isError && nextList.length) {
        // 非分组列表直接合并, 分组列表合并分组
        let newList = isGroups(list) ? mergeGroups(list, nextList) : list.concat(nextList)
        setList(newList)

        // 检查是否还有下一页
        if (
          hasMoreItems({
            list: newList,
            currentList: nextList,
            pagination: {
              page: result?.page || pageRef.current,
              rows: result?.rows,
              totalPages: result?.totalPage,
              totalItems: result?.totalRows
            }
          }) === false
        ) {
          setBottomStatus('noMore')
        } else {
          setBottomStatus('loading')
        }
      } else if (!isError && nextList.length === 0) {
        // 成功: 下一页无数据, 到底了
        setBottomStatus('noMore')
      } else {
        // 失败
        pageRef.current--
        setBottomStatus(
          result?.message && typeof result?.message === 'string' ? result.message : 'error'
        )
      }

      return true
    }

    // 获取重试按钮
    function getReloadButton() {
      if (reload === true) {
        return (
          <Button className="result-button" color="primary" onClick={() => _loadData('retry')}>
            {LocaleUtil.locale('重试', 'SeedsUI_retry')}
          </Button>
        )
      }
      if (typeof reload === 'function') {
        return reload()
      }
      if (React.isValidElement(reload)) {
        return reload
      }
      return null
    }

    const ListNode = virtual?.getItemHeight ? VirtualList : List

    return (
      <ListNode
        ref={mainRef}
        {...props}
        virtual={virtual}
        className={`list-main${props.className ? ' ' + props.className : ''}`}
        // Request
        onTopRefresh={pull && typeof loadData === 'function' ? () => _loadData('topRefresh') : null}
        onBottomRefresh={typeof loadData === 'function' ? handleBottomRefresh : undefined}
        // Main: common
        allowClear={allowClear}
        multiple={multiple}
        value={value}
        onChange={onChange}
        onScroll={(e) => {
          // Callback
          onScroll && onScroll(e)

          // ios滚动过程中不允许点击tab，否则可能会局部白屏
          document.documentElement.classList.add(`${Device.os}-scrolling`)

          if (scrollThrottleRef.current) {
            window.clearTimeout(scrollThrottleRef.current)
          }
          scrollThrottleRef.current = setTimeout(() => {
            document.documentElement.classList.remove(`${Device.os}-scrolling`)
            // 记录滚动条位置
            if (cache?.name && typeof e?.target?.scrollTop === 'number') {
              Storage.setCache(`${cache.name}:scrollTop`, e.target.scrollTop, {
                persist: cache?.persist
              })
            }
          }, 500)
        }}
        // List config
        itemRender={itemRender}
        itemLayout={itemLayout}
        checkable={checkable}
        // Render
        prepend={prepend}
        list={list}
        append={append}
      >
        {/* 底部错误提示 */}
        {typeof loadData === 'function' && <InfiniteScroll status={bottomStatus} />}
        {/* 页面级错误提示 */}
        {mainStatus && (
          <Result
            className="list-main-result"
            status={mainStatus?.status}
            title={mainStatus?.title}
          >
            {mainStatus?.status !== 'empty' ? getReloadButton() : null}
          </Result>
        )}
        {/* 页面加载遮罩 */}
        <Loading type={loadAction} loading={loading} />
      </ListNode>
    )
  }
)

export default Main
