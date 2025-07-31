import React, { forwardRef, useRef, useImperativeHandle } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-start */

// 下拉刷新容器
const Main = forwardRef(({ children, ...props }, ref) => {
  const rootRef = useRef(null)

  // Expose api
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current
    }
  })

  return (
    <main {...props} className={DOMUtil.classNames('confirm-main', props.className)} ref={rootRef}>
      {children}
    </main>
  )
})

export default Main
