import React, { useRef, forwardRef, useImperativeHandle } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Button from './../../Button'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Button } from 'lyrixi-design-mobile'
测试使用-end */

const ToolBarButton = forwardRef(
  (
    {
      comboColor,
      comboBackgroundColor,
      comboShape,
      comboBorder,
      comboRadius,
      comboSize,
      comboClassName,
      comboStyle,
      children,
      onClick
    },
    ref
  ) => {
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
        style={comboStyle}
        className={DOMUtil.classNames('toolbar-button', comboClassName)}
        size={comboSize || 's'}
        radius={comboRadius || 's'}
        color={comboColor}
        backgroundColor={comboBackgroundColor}
        border={comboBorder}
        shape={comboShape}
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
