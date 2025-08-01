import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
// 内库使用-end

/* 测试使用-start
import { DOMUtil,SafeArea } from 'lyrixi-design-mobile'
测试使用-end */

const Aside = forwardRef(({ safeArea, children, ...props }, ref) => {
  const rootRef = useRef(null)

  // 节点
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current
    }
  })

  return (
    <aside
      {...props}
      className={DOMUtil.classNames(
        'layout-aside',
        SafeArea.getSafeAreaClassName(safeArea),
        props.className
      )}
      ref={rootRef}
    >
      {children}
    </aside>
  )
})

export default Aside
