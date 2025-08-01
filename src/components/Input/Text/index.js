import React, { forwardRef, useRef, useImperativeHandle, useEffect } from 'react'
import { maxLengthFormatter, minMaxFormatter, precisionFormatter } from './utils'
import getClearNode from './getClearNode'
import _correctValue from './correctValue'

// 内库使用-start
import MathUtil from './../../../utils/MathUtil'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { MathUtil, DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

const InputText = (
  {
    id,
    name,
    // 容器
    type = 'text', // 类型: text | number | tel | password | search | autoFit
    style,
    className,
    readOnly,
    disabled,
    // 文本框
    value = '',
    inputMode,
    formatter, // 指定输入框展示值的格式
    // 小数精度, 只有数值框才生效
    precision,
    // [Number框]小数位补0, true: 不补0; false: 补0。 [Text框]影响左右空格;
    trim,
    max,
    min,
    placeholder,
    maxLength,
    // 自动获取焦点
    autoFocus, // 渲染时自动获取焦点
    autoSelect, // 渲染时自动选中
    // 自定义渲染文本框
    input,
    // 左右图标
    leftIcon,
    rightIcon,
    // 清除按键
    clear,
    allowClear,
    // events
    onClick,
    onChange,
    onBlur,
    onFocus,
    onKeyDown,
    onPressEnter,

    // 计划废弃inputProps, 使用props代替
    inputProps = {},
    ...props
  },
  ref
) => {
  // 输入框展示值
  const displayValue = typeof formatter === 'function' ? formatter(value) : null

  // 数值框默认inputMode
  if (type === 'number' && !inputMode) {
    // eslint-disable-next-line
    inputMode = precision === 0 ? 'numeric' : 'decimal'
  }

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
      correctValue: correctValue,
      focus: focus
    }
  })

  useEffect(() => {
    if (!inputRef.current) return
    // 自动获取焦点
    if (autoFocus) {
      focus()
    }

    if (!value) return

    let val = ''

    // 矫正为正确的值
    val = correctValue(value)

    // 矫正后的值和矫正前的值不一致, 需要强制修改文本框内的值
    if (val !== value) {
      onChange(val)
    }
  }, []) // eslint-disable-line

  // 矫正最大长度和小数位截取
  function correctValue(val) {
    return _correctValue(val, { min, max, maxLength, trim, precision })
  }

  // 获取焦点
  function focus() {
    if (disabled || readOnly || !inputRef.current) return
    inputRef.current.focus()
    // 只有获取焦点以后才能选中
    if (autoSelect) {
      inputRef.current.select()
    }
    // 设置光标位置到文本末尾
    else if (inputRef.current.value.length && inputRef.current.setSelectionRange) {
      const length = inputRef.current.value.length
      try {
        inputRef.current.setSelectionRange(length, length)
      } catch (e) {
        console.log(e)
      }
    }
  }

  // 获取焦点时, 如果readOnly或者disabled时, 需要立即失去焦点, 解决ios会出现底栏的问题
  function handleFocus(e) {
    if (readOnly || disabled) {
      e.target.blur()
      return
    }
    if (onFocus) onFocus(e)
  }

  // 修改值
  async function handleChange(e) {
    let target = e.target
    let val = target.value
    // 此处不宜用target?.validity?.badInput矫正数值, 因为ios上.也返回空

    // 矫正数值
    if (type === 'number' && /^-?\d*\.?$/.test(val) === false) {
      val = MathUtil.extractNumber(val)
    }

    // 矫正maxLength和小数点位数(不能矫正其它框，因为矫正将无法输入中文)
    if (MathUtil.isNumber(val)) {
      // 不能校验最小值，因为min={0.1}时，无法删除
      val = minMaxFormatter(val, { max })
      val = precisionFormatter(val, { precision, trim: false })
      val = maxLengthFormatter(val, { maxLength })
      if (target.value !== val) {
        target.value = val
      }
    }

    // 触发onChange: 使用defaultValue时, 删除到点时会直接把点清空
    if (onChange) onChange(val, { action: 'change' })
  }

  // 数值框失去焦点, 校验最大值和最小值
  function handleBlur(e) {
    if (readOnly || disabled) {
      return
    }
    let target = e.target
    let val = target.value

    // 数值框失焦时需要矫正数值
    if (MathUtil.isNumber(val)) {
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

    // trim
    if (trim && val && typeof val === 'string' && val.trim() !== val) {
      val = val.trim()
    }

    // 修改完回调
    if (val !== value) {
      target.value = val
      if (onChange) onChange(val, { action: 'blur' })
    }

    if (!inputRef.current?.preventBlur) {
      if (onBlur) onBlur(e)
    }
  }

  // 点击清除(blur生效)
  async function handleClear(e) {
    e && e?.stopPropagation?.()

    // 删除阻止blur
    delete inputRef?.current?.preventBlur

    // 获取焦点
    focus()

    // Callback
    typeof onChange === 'function' && onChange('', { action: 'clickClear' })
  }

  function handleKeyDown(e) {
    onKeyDown && onKeyDown(e)
    if (typeof onPressEnter !== 'function') return
    // 监听 Enter 键（keyCode 13 或 'Enter'）
    if (e.key === 'Enter' || e.keyCode === 13) {
      // 阻止默认行为（防止表单提交导致的页面刷新）
      e.preventDefault()

      // 失焦收起键盘（移动端）
      e.target.blur()

      // 执行搜索
      onPressEnter(e)
    }
  }

  // render
  function getInputNode() {
    if (typeof input === 'function') {
      return input({
        inputRef,
        id,
        name,
        inputMode,
        autoFocus,
        value,
        maxLength,
        readOnly,
        disabled,
        placeholder,
        onChange: handleChange,
        onBlur: handleBlur,
        onFocus: handleFocus,
        onKeyDown: handleKeyDown
      })
    }

    // autoFit类型
    if (type === 'autoFit') {
      return (
        <div className={`seed-input-autofit`}>
          <textarea
            ref={inputRef}
            id={id}
            name={name}
            inputMode={inputMode}
            {...inputProps}
            className={`seed-input-autofit-textarea${
              inputProps?.className ? ' ' + inputProps?.className : ''
            }`}
            autoFocus={autoFocus}
            value={value}
            maxLength={maxLength}
            readOnly={readOnly}
            disabled={disabled}
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeyDown}
          ></textarea>
          <pre
            style={inputProps?.style}
            className={`seed-input-autofit-pre${
              inputProps?.className ? ' ' + inputProps?.className : ''
            }`}
          >
            <span>{value}</span>
          </pre>
        </div>
      )
    }
    // textarea类型
    if (type === 'textarea') {
      // 如果值绑定属性,则只有通过父组件的prop来改变值
      return (
        <textarea
          ref={inputRef}
          id={id}
          name={name}
          inputMode={inputMode}
          {...inputProps}
          autoFocus={autoFocus}
          value={value}
          maxLength={maxLength}
          readOnly={readOnly}
          disabled={disabled}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          className={`seed-input-text${inputProps.className ? ' ' + inputProps.className : ''}`}
        ></textarea>
      )
    }

    // 其它类型
    return (
      <input
        ref={inputRef}
        id={id}
        name={name}
        type={type === 'number' ? 'text' : type} // number类型需要text，否则focus无法设置光标到末尾
        inputMode={inputMode}
        {...inputProps}
        className={`seed-input-text${inputProps.className ? ' ' + inputProps.className : ''}`}
        value={value}
        min={typeof min === 'number' ? min : ''}
        max={typeof max === 'number' ? max : ''}
        maxLength={maxLength}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        onChange={handleChange}
        autoFocus={autoFocus}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
      />
    )
  }

  return (
    <div
      {...props}
      style={style}
      className={DOMUtil.classNames(
        `seed-input`,
        className,
        `seed-type-${type}`,
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
        {getInputNode()}

        {/* Blur display value */}
        {displayValue ? (
          <div
            className={DOMUtil.classNames(`seed-input-formatter`, inputProps?.className)}
            style={inputProps?.style}
            // Click to focus text
            onClick={() => {
              focus()
            }}
          >
            {displayValue}
          </div>
        ) : null}
      </div>

      {/* Clear Icon */}
      {getClearNode({
        clear,
        allowClear,
        disabled,
        readOnly,
        value,
        onClear: handleClear,
        onTouchStart: (e) => {
          inputRef.current.preventBlur = true
        }
      })}

      {/* Right */}
      {typeof rightIcon === 'function' ? rightIcon({ value }) : rightIcon}
    </div>
  )
}

export default forwardRef(InputText)
