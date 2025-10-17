import React, { forwardRef, useRef, useImperativeHandle, useEffect } from 'react'
import getPercent from './getPercent'
import showTooltip from './showTooltip'
import hideTooltip from './hideTooltip'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

const Range = forwardRef(
  ({ value = 0, min = 0, max = 100, step = 1, readOnly, disabled, onChange, ...props }, ref) => {
    const rootRef = useRef(null)
    const tooltipRef = useRef(null)
    const handleRef = useRef(null)
    const railRef = useRef(null)

    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    useEffect(() => {
      updateContainer()
      hideTooltip(tooltipRef.current)
      // eslint-disable-next-line
    }, [])

    function handleChange(e) {
      if (disabled || readOnly) return
      let newValue = e.currentTarget.value

      if (newValue) newValue = Number(newValue || 0)
      if (onChange) {
        onChange(newValue)
      }

      // 更新位置
      updateContainer(newValue)
    }

    // 显示tooltip
    function handleTouchStart() {
      updateContainer()
      showTooltip(tooltipRef.current)
    }

    function handleTouchEnd() {
      hideTooltip(tooltipRef.current)
    }

    function updateContainer(newValue) {
      let currentValue = newValue ?? value ?? 0
      let percent = getPercent({ min, max, value: currentValue })
      handleRef.current.style.left = `calc(${percent}% - 8px)`
      tooltipRef.current.style.left = `calc(${percent}% - 12px)`
      railRef.current.style.width = `${percent}%`
      tooltipRef.current.innerHTML = currentValue
    }

    return (
      <div
        {...props}
        className={DOMUtil.classNames(
          'seed-input-range',
          props?.className,
          readOnly ? 'readOnly' : '',
          disabled ? ' disabled' : ''
        )}
        ref={rootRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <input
          readOnly={readOnly}
          disabled={disabled}
          type="range"
          className={`seed-input-range-input`}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
        />
        <div className="seed-input-range-rail">
          <div className="seed-input-range-rail-active" ref={railRef}></div>
        </div>
        <div ref={handleRef} className="seed-input-range-handle">
          <div className="seed-input-range-handle-icon"></div>
        </div>
        <div ref={tooltipRef} className={`seed-input-range-tooltip`}>
          {value}
        </div>
      </div>
    )
  }
)

export default Range
