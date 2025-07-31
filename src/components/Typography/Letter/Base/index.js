import React, { useState, useImperativeHandle, forwardRef, useRef, useEffect } from 'react'
// Ellipsis
import getEllipsisVisibleContent from './getEllipsisVisibleContent'
import getEllipsisOverflow from './getEllipsisOverflow'
// Highlight
import getHighlightNode from './getHighlightNode'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

const Base = forwardRef(({ highlight, ellipsis, children, ...props }, ref) => {
  const rootRef = useRef(null)

  // Ellipsis expanded and toggle button
  const [expanded, setExpanded] = useState(ellipsis?.expanded ?? ellipsis?.rows ? false : true)
  const [toggleVisible, setToggleVisible] = useState(false)
  const [visibleContent, setVisibleContent] = useState('')

  // Expose
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current,
      // Ellipsis
      toggleEllipsis: () => {
        let newExpanded = !expanded
        setExpanded(newExpanded)
        return newExpanded
      },
      hasEllipsis: () => () => {
        return getEllipsisOverflow({
          rows: ellipsis?.rows,
          rowHeight: ellipsis?.rowHeight,
          containerDOM: rootRef.current
        })
      }
    }
  })

  useEffect(() => {
    // 如果没有展开收起按钮, 不需要计算溢出, 用样式控制即可
    if (ellipsis?.rows && ellipsis?.expandable && typeof children === 'string') {
      updateEllipsis()
    }
    // eslint-disable-next-line
  }, [ellipsis?.rows, ellipsis?.expandable, children])

  // 更新Ellipsis的toggleVisible和visibleContent
  function updateEllipsis() {
    // 判断是否显示展开收起按钮
    let newToggleVisible = getEllipsisOverflow({
      rows: ellipsis?.rows,
      rowHeight: ellipsis?.rowHeight,
      containerDOM: rootRef.current
    })
    setToggleVisible(newToggleVisible)
    if (!newToggleVisible) return
    // 有展开或者收起按钮时, 需要计算内容
    let newContent = getEllipsisVisibleContent({
      content: children,
      rows: ellipsis?.rows,
      rowHeight: ellipsis?.rowHeight,
      containerDOM: rootRef.current
    })
    setVisibleContent(newContent)
  }

  return (
    <div
      {...props}
      className={DOMUtil.classNames(
        typeof ellipsis?.rows === 'number' ? ' typography-ellipsis' : '',
        props.className
      )}
      style={{
        WebkitLineClamp: expanded ? undefined : ellipsis?.rows,
        height: expanded ? undefined : ellipsis?.rows * (ellipsis?.rowHeight || 20) + 'px',
        ...props?.style
      }}
      ref={rootRef}
    >
      {getHighlightNode(
        expanded === false && visibleContent ? visibleContent : children,
        highlight
      )}
      {/* Ellipsis expand button */}
      {toggleVisible && (
        <div
          className="typography-ellipsis-toggle"
          onClick={(e) => {
            e.stopPropagation()
            setExpanded(!expanded)
          }}
        >
          {expanded
            ? LocaleUtil.locale('收起', 'SeedsUI_typography_ellipsis_toggle_collapse')
            : LocaleUtil.locale('展开', 'SeedsUI_typography_ellipsis_toggle_expand')}
        </div>
      )}
    </div>
  )
})

export default Base
