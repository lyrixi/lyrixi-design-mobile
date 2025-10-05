import React, { useImperativeHandle, forwardRef, useRef, useEffect } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, SafeArea } from 'lyrixi-design-mobile'
测试使用-end */

// [safeArea] true: 自动安全区; false: 强制取消安全区
const Page = forwardRef(({ safeArea, animation, full = true, layout, children, ...props }, ref) => {
  const rootRef = useRef(null)

  // Expose
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current
    }
  })

  return (
    <section
      {...props}
      className={DOMUtil.classNames(
        'page',
        full ? 'full' : '',
        layout ? `flex-${layout}` : '',
        SafeArea.getSafeAreaClassName(safeArea),
        props.className
      )}
      data-animation={animation}
      ref={rootRef}
    >
      {children}
    </section>
  )
})

export default Page
