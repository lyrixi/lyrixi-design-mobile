import React, { useImperativeHandle, forwardRef, useRef } from 'react'
import Buttons from './Buttons'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, SafeArea } from 'lyrixi-design-mobile'
测试使用-end */

const Footer = forwardRef(
  (
    {
      safeArea,
      // 废弃 start: 使用FooterBar代替
      buttons,
      buttonsType, // default: 默认; text: 文本;
      onChange,
      // 废弃 end
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

    let hasButtons = Array.isArray(buttons) && buttons.length

    return (
      <footer
        {...props}
        className={DOMUtil.classNames(
          'layout-footer',
          hasButtons
            ? buttonsType
              ? 'layout-footer-buttons layout-footer-buttons-' + buttonsType
              : 'layout-footer-buttons layout-footer-buttons-default'
            : '',
          SafeArea.getSafeAreaClassName(safeArea),
          props.className
        )}
        ref={rootRef}
      >
        {hasButtons ? <Buttons buttons={buttons} onChange={onChange} /> : null}
        {children}
      </footer>
    )
  }
)

export default Footer
