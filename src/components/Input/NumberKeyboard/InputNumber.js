import React, { forwardRef, useImperativeHandle, useRef, useEffect } from 'react'
import { splitInputStyle, correctValue as _correctValue } from './../Text/utils'
import getClearNode from './../Text/getClearNode'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

// 内部显示div
const InputNumber = (
  {
    type = 'text',
    id,
    style: externalStyle,
    className,

    // 值控制
    value,
    onChange,
    onClick,
    onFocus,
    onBlur,

    // 数值校验
    min,
    max,
    maxLength,
    trim,
    precision,

    // 输入框配置
    formatter,
    placeholder,
    leftIcon,
    rightIcon,
    clear,
    allowClear,
    disabled,
    readOnly,

    // 光标控制属性, null: 不控制, false: 不显示, true: 显示
    cursor = null
  },
  ref
) => {
  const displayValue = typeof formatter === 'function' ? formatter(value) : null

  // InputStyle
  const { style, inputStyle } = splitInputStyle(externalStyle)

  // DOM
  const rootRef = useRef(null)
  const inputRef = useRef(null)

  // Expose
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      inputDOM: inputRef.current,
      getRootDOM: () => {
        return rootRef.current
      },
      getInputDOM: () => {
        return inputRef.current
      },
      correctValue: correctValue,
      focus: () => {}
    }
  })

  // Initialize
  useEffect(() => {
    if (!value) return

    // 矫正为正确的值
    let val = ''
    val = correctValue(value)
    if (val !== value) {
      onChange(val)
    }
    // eslint-disable-next-line
  }, [])

  // onFocus & onBlur
  useEffect(() => {
    if (typeof cursor !== 'boolean') return

    if (cursor) {
      onFocus &&
        onFocus({
          target: inputRef.current,
          currentTarget: inputRef.current
        })
    } else {
      handleBlur()
    }
    // eslint-disable-next-line
  }, [cursor])

  function handleBlur() {
    if (readOnly || disabled) {
      return
    }

    let val = value

    // trim
    if (trim && val && typeof val === 'string' && val.trim() !== val) {
      val = val.trim()
    }

    // 数值框失焦时需要矫正数值
    if (type === 'number') {
      // 正常输入：矫正最大最小值、小数点、最大长度
      if (val && !isNaN(val)) {
        // 纠正数字
        val = correctValue(val)
      }
      // 输入错误或真的为空：用于解决ios可以输入字母中文等问题
      else {
        val = ''
      }
    }

    // 修改完回调
    if (val !== value) {
      if (onChange) onChange(val, { action: 'blur' })
    }

    if (onBlur)
      onBlur({
        target: inputRef.current,
        currentTarget: inputRef.current
      })
  }

  // 矫正最大长度和小数位截取
  function correctValue(val) {
    return _correctValue(val, { type, min, max, maxLength, trim, precision })
  }

  // 点击清除
  async function handleClear(e) {
    e && e?.stopPropagation?.()

    // Callback
    typeof onChange === 'function' && onChange('', { action: 'clickClear' })
  }

  // 渲染内容
  function getText() {
    // 有显示值
    if (displayValue) {
      return <span>&nbsp;</span>
    }
    // 无显示值, 显示value
    if (value && typeof value !== 'object') {
      return (
        <>
          <div className="seed-input-text-value">{value}</div>
          {cursor ? <div className="seed-input-cursor"></div> : null}
        </>
      )
    }
    // 无显示值, 无value, 显示placeholder
    if (placeholder) {
      return (
        <>
          {cursor ? <div className="seed-input-cursor"></div> : null}
          <div className="seed-input-placeholder">{placeholder}</div>
        </>
      )
    }

    // 啥都没有, 显示空白
    return <span>&nbsp;</span>
  }

  return (
    <div
      id={id}
      style={style}
      className={DOMUtil.classNames(
        `seed-input`,
        className,
        displayValue ? 'seed-has-formatter' : '',
        disabled ? ' disabled' : '',
        readOnly ? ' readonly' : ''
      )}
      onClick={(e) => {
        e.stopPropagation()

        if (disabled) return
        onClick && onClick(e)
      }}
      ref={rootRef}
    >
      {/* Left */}
      {typeof leftIcon === 'function' ? leftIcon({ value }) : leftIcon}

      <div
        className={DOMUtil.classNames(
          'seed-input-node',
          disabled ? 'disabled' : '',
          readOnly ? 'readOnly' : ''
        )}
      >
        {/* Main */}
        <div ref={inputRef} className="seed-input-text" style={inputStyle}>
          {getText()}
        </div>

        {/* Blur display value */}
        {displayValue ? <div className={`seed-input-formatter`}>{displayValue}</div> : null}
      </div>

      {/* Clear Icon */}
      {getClearNode({
        clear,
        allowClear,
        disabled,
        readOnly,
        value,
        onClear: handleClear
      })}

      {/* Right */}
      {typeof rightIcon === 'function' ? rightIcon({ value }) : rightIcon}
    </div>
  )
}

export default forwardRef(InputNumber)
