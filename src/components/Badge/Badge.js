import React, { forwardRef, useRef, useImperativeHandle } from 'react'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

// 数值标
const Badge = forwardRef(
  (
    {
      children = '0',
      maxLength = 2,
      ellipsis = '+', // 有maxLength属性时ellipsis才生效
      ...props
    },
    ref
  ) => {
    // 节点
    const rootRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    // 标题
    let text = children
    if (maxLength && children && (typeof children === 'string' || typeof children === 'number')) {
      text = text.toString()
      // 数字大于99,则显示99+
      if (!isNaN(text)) {
        text = text.length > maxLength ? '99999'.substring(0, maxLength) + ellipsis : text
      } else {
        text = text.length > maxLength ? text.substring(0, maxLength) + ellipsis : text
      }
    }
    return (
      <span {...props} className={DOMUtil.classNames('badge', props.className)} ref={rootRef}>
        {text}
      </span>
    )
  }
)

export default Badge
