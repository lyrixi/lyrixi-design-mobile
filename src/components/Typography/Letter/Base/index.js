import React, { useState, useImperativeHandle, forwardRef, useRef, useEffect } from 'react'
// Ellipsis
import getEllipsisVisibleContent from './getEllipsisVisibleContent'
import getEllipsisOverflow from './getEllipsisOverflow'
// Highlight
import getHighlightNode from './getHighlightNode'

// 没有展开收起按钮时, 获取省略号样式
import getEllipsisStyle from './getEllipsisStyle'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-design-mobile'
测试使用-end */

const Base = forwardRef(({ style, className, highlight, ellipsis, children, ...props }, ref) => {
  // 最大行数, 行高默认20, 是否显示展开收起按钮
  const { rows, rowHeight, expandable } = ellipsis || {}

  const rootRef = useRef(null)

  // 展开和收缩
  const [expanded, setExpanded] = useState(rows ? ellipsis?.defaultExpanded || false : true)

  // 内容是否溢出
  const [overflow, setOverflow] = useState(false)

  // 溢出时, 显示的内容
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
          rows: rows,
          rowHeight: rowHeight,
          containerDOM: rootRef.current
        })
      }
    }
  })

  useEffect(() => {
    // 如果没有展开收起按钮, 不需要计算溢出, 用样式控制即可
    if (rows && expandable && typeof children === 'string') {
      updateEllipsis()
    }
    // eslint-disable-next-line
  }, [rows, children])

  // 更新Ellipsis的overflow和visibleContent
  function updateEllipsis() {
    // 内容是否溢出
    let newOverflow = getEllipsisOverflow({
      rows: rows,
      rowHeight: rowHeight,
      containerDOM: rootRef.current
    })
    setOverflow(newOverflow)
    if (!newOverflow) return

    // 有展开或者收起按钮时, 需要计算内容
    let newContent = getEllipsisVisibleContent({
      content: children,
      rows: rows,
      rowHeight: rowHeight,
      containerDOM: rootRef.current
    })
    setVisibleContent(newContent)
  }

  // 构建style
  let ellipsisStyle = {}

  // 没有展开收起按钮时, 用样式控制省略号
  if (!expandable && rows && typeof rows === 'number') {
    ellipsisStyle = getEllipsisStyle({
      rows: rows,
      rowHeight: rowHeight,
      expanded: expanded
    })
    if (expanded) {
      delete ellipsisStyle.WebkitLineClamp
      delete ellipsisStyle.maxHeight
    }
  }

  return (
    <div {...props} className={className} style={{ ...style, ...ellipsisStyle }} ref={rootRef}>
      {/* 内容 */}
      {getHighlightNode(
        expanded === false && visibleContent ? visibleContent : children,
        highlight
      )}

      {/* 内容溢出显示展开收起按钮 */}
      {overflow && expandable ? (
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
      ) : null}
    </div>
  )
})

export default Base
