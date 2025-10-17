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
    headerRender,
    title,
    arrowRender = 'collapse-item-header-arrow-icon',
    arrowPosition = 'right',
    open: externalOpen = true,
    onOpen,
    onClose,
    children,
    ...props
  },
  ref
) => {
  const rootRef = useRef(null)

  const [open, setOpen] = useState(externalOpen)

  // Controlled component
  useEffect(() => {
    if (typeof externalOpen === 'boolean' && (onOpen || onClose)) {
      setOpen(externalOpen)
    }
    // eslint-disable-next-line
  }, [externalOpen])

  // Expose
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current,
      open: () => {
        if (onOpen) {
          onOpen()
        } else {
          setOpen(true)
        }
      },
      close: () => {
        if (onClose) {
          onClose()
        } else {
          setOpen(false)
        }
      }
    }
  })

  const handleClick = () => {
    const newOpen = !open
    if (newOpen) {
      if (onOpen) {
        onOpen()
      } else {
        setOpen(true)
      }
    } else {
      if (onClose) {
        onClose()
      } else {
        setOpen(false)
      }
    }
  }

  // 获取箭头节点
  function getArrowNode() {
    if (typeof arrowRender !== 'function') return null

    return <div className="collapse-item-header-arrow">{arrowRender({ open })}</div>
  }

  const ArrowNode = getArrowNode()

  // 获取Header节点
  function getHeaderNode() {
    // 默认Header
    if (typeof headerRender !== 'function') {
      return (
        <div className="collapse-item-header-wrapper">
          {arrowPosition === 'left' && ArrowNode}
          <div className="collapse-item-header-title">{title}</div>
          {arrowPosition === 'right' && ArrowNode}
        </div>
      )
    }

    return headerRender({
      open
    })
  }
  const HeaderNode = getHeaderNode()

  return (
    <div
      ref={rootRef}
      {...props}
      className={DOMUtil.classNames('collapse-item', props?.className, open ? 'active' : '')}
    >
      <div className="collapse-item-header" onClick={handleClick}>
        {getHeaderNode()}
      </div>
      <CollapseTransition open={open}>
        <div className="collapse-item-main">{children}</div>
      </CollapseTransition>
    </div>
  )
}

export default forwardRef(CollapseItem)
