import React, { forwardRef, useRef, useImperativeHandle } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

// 评分组件
const Rate = forwardRef(
  (
    { icon, value = 0, min = 0, max = 5, step = 0.5, readOnly, disabled, onChange, ...props },
    ref
  ) => {
    const rootRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    function handleChange(e) {
      if (disabled || readOnly) return
      let newValue = e.currentTarget.value

      if (newValue) newValue = Number(newValue || 0)
      if (onChange) {
        onChange(newValue)
      }
    }

    function getItemActiveWidth(itemValue) {
      // 当前项位于整数位
      if (itemValue <= value) {
        return '100%'
      }
      // 当前项位于小数位
      if (itemValue === Math.ceil(value)) {
        return `${(value - Math.floor(value)) * 100}%`
      }
      // 当前项超出
      return '0%'
    }

    return (
      <div
        {...props}
        className={DOMUtil.classNames(
          'seed-input-rate',
          props.className,
          readOnly ? 'readOnly' : '',
          disabled ? ' disabled' : ''
        )}
        ref={rootRef}
      >
        <input
          readOnly={readOnly}
          disabled={disabled}
          type="range"
          className={`seed-input-rate-input`}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
        />

        {new Array(max).fill(1).map((item, index) => {
          return (
            <div className="seed-input-rate-item" key={index}>
              {icon ? (
                DOMUtil.getIconNode(icon, {
                  className: 'seed-input-rate-item-icon'
                })
              ) : (
                <div className={'seed-input-rate-item-icon default'}></div>
              )}

              {icon ? (
                DOMUtil.getIconNode(icon, {
                  className: 'seed-input-rate-item-icon-active',
                  style: { width: getItemActiveWidth(index + 1) }
                })
              ) : (
                <div
                  className={'seed-input-rate-item-icon-active default'}
                  style={{ width: getItemActiveWidth(index + 1) }}
                ></div>
              )}
            </div>
          )
        })}
      </div>
    )
  }
)

export default Rate
