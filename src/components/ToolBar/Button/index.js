import React, { useRef, forwardRef, useImperativeHandle } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Button from './../../Button'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Button } from 'lyrixi-design-mobile'
测试使用-end */

const ToolBarButton = forwardRef(
  ({ variant, color, shape, className, style, children, onClick }, ref) => {
    const rootRef = useRef(null)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    return (
      <Button
        style={style}
        className={DOMUtil.classNames('toolbar-button', className)}
        size="s"
        radius="s"
        variant={variant}
        color={color}
        shape={shape}
        onClick={onClick}
        ref={rootRef}
      >
        {children}
      </Button>
    )
  }
)

// Component Name, for compact
ToolBarButton.componentName = 'ToolBar.Button'

export default ToolBarButton
