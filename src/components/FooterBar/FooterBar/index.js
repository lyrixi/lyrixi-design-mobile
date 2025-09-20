import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

const Footer = forwardRef(
  (
    {
      type, // default: 默认; text: 文本;
      children,
      ...props
    },
    ref
  ) => {
    const rootRef = useRef(null)

    // Expose tools
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    return (
      <footer
        {...props}
        className={DOMUtil.classNames(
          type ? 'footerbar footerbar-' + type : 'footerbar footerbar-default',
          props.className
        )}
        ref={rootRef}
      >
        {children}
      </footer>
    )
  }
)

export default Footer
