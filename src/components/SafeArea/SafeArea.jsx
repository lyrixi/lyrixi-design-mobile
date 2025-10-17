import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'seedsui-react'
测试使用-end */

// 安全区域
const SafeArea = forwardRef(({ safeArea, className, ...props }, ref) => {
  const rootRef = useRef(null)

  // Expose
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
        safeArea === 'auto' ? 'auto-safe-area' : 'safe-area',
        'height-bottom',
        className
      )}
      ref={rootRef}
    ></div>
  )
})

export default SafeArea
