import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import TopContainer from './TopContainer'
import isBottom from './utils/isBottom'
import topRefreshOk from './utils/topRefreshOk.js'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import LocaleUtil from './../../../utils/LocaleUtil'
import SafeArea from './../../SafeArea'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, LocaleUtil, SafeArea } from 'lyrixi-design-mobile'
测试使用-start */

// 下拉刷新容器
const Main = forwardRef(
  (
    {
      safeArea,
      threshold = 50,
      touchStopPropagation = true,
      onTopRefresh,
      onBottomRefresh,
      onScroll,
      children,
      ...props
    },
    ref
  ) => {
    const rootRef = useRef(null)
    const isLoadingRef = useRef(null)
    const topContainerRef = useRef(null)

    // Expose api
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    /* ----------------------
    Events
    ---------------------- */
    // Touch信息
    let touchesRef = useRef({
      isTop: true,
      startY: 0,
      currentY: 0,
      diffY: 0
    })

    function handleTouchStart(e) {
      touchStopPropagation && e.stopPropagation()
      if (isLoadingRef.current) return

      // 如果不在顶部，则不触发
      if (e.currentTarget.scrollTop <= 0) touchesRef.current.isTop = true
      else touchesRef.current.isTop = false

      topContainerRef.current.style.webkitTransitionDuration = '0ms'

      touchesRef.current.startY = e.clientY || e.touches[0].clientY
      touchesRef.current.diffY = 0
    }
    // 标识头部正在拖动
    function handleTouchMove(e) {
      touchStopPropagation && e.stopPropagation()
      if (isLoadingRef.current) return
      if (!touchesRef.current.isTop) return

      touchesRef.current.currentY = e.clientY || e.touches[0].clientY
      touchesRef.current.diffY = touchesRef.current.currentY - touchesRef.current.startY

      // 向下滚动
      if (touchesRef.current.diffY < 20) {
        return
      }

      // 拉动高度
      if (touchesRef.current.diffY > 100) touchesRef.current.diffY = 100
      topContainerRef.current.style.height = touchesRef.current.diffY + 'px'
      let topIcon = topContainerRef.current?.querySelector?.('.layout-main-pull-push-icon')
      let topText = topContainerRef.current?.querySelector?.('.layout-main-pull-push-text')
      if (touchesRef.current.diffY >= threshold) {
        if (topIcon) topIcon.classList.add('layout-main-pull-push-icon-down')
        if (topText)
          topText.innerHTML = LocaleUtil.locale('释放立即刷新', 'SeedsUI_release_refresh')
      } else {
        if (topIcon) topIcon.classList.remove('layout-main-pull-push-icon-down')
        if (topText)
          topText.innerHTML = LocaleUtil.locale('下拉可以刷新', 'SeedsUI_pull_down_refresh')
      }
    }
    async function handleTouchEnd(e) {
      touchStopPropagation && e.stopPropagation()
      if (isLoadingRef.current) return
      if (!touchesRef.current.isTop) return

      topContainerRef.current.style.webkitTransitionDuration = '150ms'

      // 拉动幅度过小则收起
      if (touchesRef.current.diffY <= threshold) {
        topContainerRef.current.style.height = '0'
      }
      // 反之展示
      else {
        let topIcon = topContainerRef.current?.querySelector?.('.layout-main-pull-push-icon')
        let topText = topContainerRef.current?.querySelector?.('.layout-main-pull-push-text')
        topContainerRef.current.style.height = threshold + 'px'
        if (topIcon) topIcon.classList.remove('layout-main-pull-push-icon-down')
        if (topIcon) topIcon.classList.add('layout-main-pull-push-icon-loading')
        if (topText) topText.innerHTML = `${LocaleUtil.locale('加载中', 'SeedsUI_refreshing')}...`

        // Trigger Events
        if (onTopRefresh) {
          isLoadingRef.current = true
          let isOk = await onTopRefresh()
          // 头部显示
          await topRefreshOk(topContainerRef.current, isOk)
          isLoadingRef.current = false
        }
      }
    }

    async function handleScroll(e) {
      if (onScroll) onScroll(e)
      if (!onBottomRefresh || isLoadingRef.current) return
      if (isBottom(rootRef.current)) {
        isLoadingRef.current = true
        await onBottomRefresh()
        isLoadingRef.current = false
      }
    }

    return (
      <main
        {...props}
        className={DOMUtil.classNames(
          'layout-main',
          SafeArea.getSafeAreaClassName(safeArea),
          props.className
        )}
        ref={rootRef}
        onTouchStart={onTopRefresh ? handleTouchStart : undefined}
        onTouchMove={onTopRefresh ? handleTouchMove : undefined}
        onTouchEnd={onTopRefresh ? handleTouchEnd : undefined}
        // onClick={(e) => {
        //   e.stopPropagation()
        // }}
        onScroll={onScroll || onBottomRefresh ? handleScroll : undefined}
      >
        {/* 头部刷新 */}
        <TopContainer ref={topContainerRef} />
        {/* 内容 */}
        {children}
      </main>
    )
  }
)

export default Main
