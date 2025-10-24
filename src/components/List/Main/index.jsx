import React, { useImperativeHandle, forwardRef, useRef, useEffect, useState } from 'react'
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
import { Device, LocaleUtil, Result, Button } from 'lyrixi-design-mobile'
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
      loadingRender,
      // 请求属性
      // loadData: (params: { list: 页面已渲染的列表, action: 'load'|'reload'|'topRefresh'|'bottomRefresh'|'retry' }) => Promise<{
      //   status?: 'empty'|'500'|'noMore'|'loading', // 'empty' 无数据, '500' 异常, 'noMore' 没有更多数据, 'loading' 有更多数据
      //   message?: string,       // 对应status的提示
      //   list: Array<any>,       // 修改页面渲染列表
      // }>
      loadData,
      disableTopRefresh = false, // 是否允许下拉刷新
      disableBottomRefresh = false, // 是否允许底部刷新
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

    // 请求结果
    /*
    {
      status: 'empty'|'500'|'noMore'|'loading', // 'empty' 无数据, '500' 异常, 'noMore' 没有更多数据, 'loading' 有更多数据
      message?: string,       // 对应status的提示
      list: Array<any>,       // 修改页面渲染列表
    }
    */
    const [result, setResult] = useState(null)
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
      if (!result?.list) return
      onLoad && onLoad()
      // eslint-disable-next-line
    }, [result])

    // 默认加载
    useEffect(() => {
      if (!initialLoad) return

      init()
      // eslint-disable-next-line
    }, [])

    // 初始化
    function init() {
      loadPage('load')
    }

    // 统一加载方法: 根据 page 判断刷新/底部加载
    async function loadPage(action) {
      if (typeof loadData !== 'function') return

      // Scroll to top in FirstPage
      if (['load', 'reload', 'topRefresh', 'retry'].includes(action)) {
        scrollToTop(mainRef.current?.rootDOM)
      }

      // 请求数据
      setLoadAction(action)
      let newResult = await loadData({ previousResult: result, action: action })
      setResult(newResult)
      setLoadAction('')

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
        onTopRefresh={disableTopRefresh ? null : () => loadPage('topRefresh')}
        onBottomRefresh={disableBottomRefresh ? null : () => loadPage('bottomRefresh')}
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
        list={result?.list}
        append={append}
      >
        {/* 底部错误提示 */}
        {!disableBottomRefresh && ['noMore', 'loading'].includes(result?.status) ? (
          <InfiniteScroll status={result?.status} content={result?.message} />
        ) : null}
        {/* 页面级错误提示 */}
        {['empty', '500'].includes(result?.status) && (
          <Result className="list-main-result" status={result?.status} title={result?.message}>
            {result?.status !== 'empty' ? (
              <Button className="result-button" color="primary" onClick={() => loadPage('retry')}>
                {LocaleUtil.locale('重试', 'SeedsUI_retry')}
              </Button>
            ) : null}
          </Result>
        )}
        {/* 页面加载遮罩 */}
        <Loading type={loadAction} loadingRender={loadingRender} />
      </ListNode>
    )
  }
)

export default Main
