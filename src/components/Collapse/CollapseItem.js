import React, { useEffect, useState, useImperativeHandle, forwardRef, useRef } from 'react'
import CollapseTransition from './CollapseTransition'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

// CollapseItem组件
const CollapseItem = (
  {
    header,
    title,
    arrow = 'collapse-item-header-arrow-icon',
    arrowPosition = 'right',
    visible: externalVisible = true,
    onVisibleChange,
    children,
    ...props
  },
  ref
) => {
  const rootRef = useRef(null)

  const [visible, setVisible] = useState(externalVisible)

  // Controlled component
  useEffect(() => {
    if (typeof externalVisible === 'boolean' && onVisibleChange) {
      setVisible(externalVisible)
    }
    // eslint-disable-next-line
  }, [externalVisible])

  // Expose
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current,
      open: () => {
        if (onVisibleChange) {
          onVisibleChange(true)
        } else {
          setVisible(true)
        }
      },
      close: () => {
        if (onVisibleChange) {
          onVisibleChange(false)
        } else {
          setVisible(false)
        }
      }
    }
  })

  const handleClick = () => {
    if (onVisibleChange) {
      onVisibleChange(!visible)
    } else {
      setVisible(!visible)
    }
  }

  // 箭头
  const ArrowNode = arrow ? (
    <div className="collapse-item-header-arrow">
      {DOMUtil.getIconNode(arrow, {
        visible
      })}
    </div>
  ) : null

  return (
    <div
      ref={rootRef}
      {...props}
      className={DOMUtil.classNames('collapse-item', props?.className, visible ? 'active' : '')}
    >
      <div className="collapse-item-header" onClick={handleClick}>
        {header ? (
          // 自定义Header
          DOMUtil.getTextNode(header, {
            arrow: ArrowNode,
            arrowPosition,
            visible
          })
        ) : (
          // 默认Header
          <div className="collapse-item-header-wrapper">
            {arrowPosition === 'left' && ArrowNode}
            {DOMUtil.getTextNode(title, {
              className: 'collapse-item-header-title',
              visible: visible
            })}
            {arrowPosition === 'right' && ArrowNode}
          </div>
        )}
      </div>
      <CollapseTransition visible={visible}>
        <div className="collapse-item-main">{children}</div>
      </CollapseTransition>
    </div>
  )
}

export default forwardRef(CollapseItem)
