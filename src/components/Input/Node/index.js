import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import getClearNode from './../Text/getClearNode'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

// 内部显示div
const InputNode = (
  {
    type = 'text',
    id,
    style,
    className,
    value,
    formatter, // 指定输入框展示值的格式
    placeholder,
    leftIcon,
    rightIcon,
    clear,
    allowClear,
    disabled,
    readOnly,
    onChange,
    onClick
  },
  ref
) => {
  const displayValue = typeof formatter === 'function' ? formatter(value) : null

  // DOM
  const rootRef = useRef(null)
  const inputRef = useRef(null)

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
      correctValue: () => {},
      focus: () => {}
    }
  })

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
      return value
    }
    // 无显示值, 无value, 显示placeholder
    if (placeholder) {
      return <div className="seed-input-placeholder">{placeholder}</div>
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
      onClick={onClick}
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
        <div ref={inputRef} className="seed-input-text">
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

export default forwardRef(InputNode)
