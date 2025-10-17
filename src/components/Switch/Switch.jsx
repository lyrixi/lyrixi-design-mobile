import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

// 开关控件
const Switch = forwardRef(
  ({ readOnly, disabled, checked, on, off, size = 'm', onChange, ...props }, ref) => {
    const rootRef = useRef(null)

    // 节点
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    return (
      <div
        {...props}
        className={DOMUtil.classNames(
          'switch',
          size,
          props.className,
          checked ? 'active' : '',
          readOnly ? 'readOnly' : '',
          disabled ? 'disabled' : disabled
        )}
        onClick={(e) => {
          if (onChange) onChange(!checked)
          e.stopPropagation()
        }}
        ref={rootRef}
      >
        <div className="switch-handle"></div>
        <div className="switch-inner">
          <div className="switch-on">{on}</div>
          <div className="switch-off">{off}</div>
        </div>
      </div>
    )
  }
)

export default Switch
