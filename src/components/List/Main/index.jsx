import React, { useImperativeHandle, forwardRef, useRef, useEffect, useState } from 'react'
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
      allowClear,
      multiple,
      value,
      onChange,
      onScroll,
      // 骨架屏
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

    const [list, setList] = useState(null)
    // 全屏提示: {status: 'empty|500', title: ''}
    const [mainResult, setMainResult] = useState(null)
    // 底部提示: loading | noMore | error
    const [bottomResult, setBottomResult] = useState(null)
    // 加载显示: load | reload | topRefresh | bottomRefresh
    const [loadAction, setLoadAction] = useState('')

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
            loadPage(1, action || 'reload')
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
      if (!list) return
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
      loadPage(1, 'load')
    }

    // 统一加载方法: 根据 page 判断刷新/底部加载
    async function loadPage(page, action) {
      if (typeof loadData !== 'function') return

      // Scroll to top in FirstPage
      if (page <= 1) {
        scrollToTop(mainRef.current?.rootDOM)
      }
      // 底部加载, 全局有报错, 或者无数据了不再底部加载
      else if (mainResult || bottomResult) {
        return
      }

      pageRef.current = page
      debugger
      // 请求数据
      setLoadAction(action)
      let result = await loadData({ page: 1, action: action })
      setLoadAction('')

      // 结果处理
      const resultList = Array.isArray(result?.list) ? result.list : []
      const resultStatus = result?.status
      const resultMessage = result?.message

      // 失败: 报错
      if (resultStatus) {
        setList(null)
        setMainResult({
          status: resultStatus,
          message: resultMessage
        })
        return false
      }

      // 成功: 有数据
      // 非分组列表直接合并, 分组列表合并分组
      let newList = isGroups(list) ? mergeGroups(list, resultList) : (list || []).concat(resultList)
      setList(newList)
      setMainResult(null)

      // 判断是否加载完成
      if (
        hasMoreItems({
          list: newList,
          currentList: resultList,
          pagination: {
            page: result?.page || 1,
            rows: result?.rows,
            totalPages: result?.totalPage,
            totalItems: result?.totalRows
          }
        }) === false
      ) {
        setBottomResult({
          status: 'noMore',
          message: LocaleUtil.locale('没有更多了', 'SeedsUI_no_more_data')
        })
      } else {
        setBottomResult({
          status: 'loading',
          message: LocaleUtil.locale('加载中', 'SeedsUI_refreshing')
        })
      }

      return true
    }

    const ListNode = virtual?.getItemHeight ? VirtualList : List

    return (
      <ListNode
        ref={mainRef}
        {...props}
        virtual={virtual}
        className={`list-main${props.className ? ' ' + props.className : ''}`}
        // Request
        onTopRefresh={pull ? () => loadPage(1, 'topRefresh') : null}
        onBottomRefresh={() => loadPage(pageRef.current + 1, 'bottomRefresh')}
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
            // 滚动处理完成
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
        <InfiniteScroll status={bottomResult?.status} content={bottomResult?.message} />
        {/* 页面级错误提示 */}
        {mainResult && (
          <Result
            className="list-main-result"
            status={mainResult?.status}
            title={mainResult?.title}
          >
            {mainResult?.status !== 'empty' ? (
              <Button
                className="result-button"
                color="primary"
                onClick={() => loadPage(1, 'retry')}
              >
                {LocaleUtil.locale('重试', 'SeedsUI_retry')}
              </Button>
            ) : null}
          </Result>
        )}
        {/* 页面加载遮罩 */}
        <Loading type={loadAction} loading={loading} />
      </ListNode>
    )
  }
)

export default Main
