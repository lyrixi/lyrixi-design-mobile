import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

const ProgressBar = forwardRef(({ percent = 0, ...props }, ref) => {
  const rootRef = useRef(null)

  // Expose
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current
    }
  })

  // 确保percent在0-100范围内
  const availablePercent = Math.max(0, Math.min(100, percent))

  return (
    <div
      {...props}
      className={DOMUtil.classNames('seed-progress-bar', props.className)}
      ref={rootRef}
    >
      <div
        className="seed-progress-bar-fill"
        style={{
          width: `${availablePercent}%`
        }}
      />
    </div>
  )
})

export default ProgressBar
