import React, { forwardRef, useRef, useImperativeHandle, useEffect } from 'react'
import InputNumber from './../Number'

// 内库使用-start
import MathUtil from './../../../utils/MathUtil'
// 内库使用-end

/* 测试使用-start
import { MathUtil } from 'lyrixi-design-mobile'
测试使用-end */

// 数值框
const NumberBox = forwardRef(
  (
    {
      // 加减号
      plusProps = {},
      minusProps = {},
      stepFocus, // 点击加减按钮获取焦点

      // 文本框
      // 容器
      type = 'text', // 类型: text | number | tel | password
      autoFit, // 自动高度文本框
      readOnly,
      disabled,
      // 文本框
      inputProps = {},
      value,
      formatter,
      // 小数精度, 只有数值框才生效
      precision,
      // 小数位补0, true: 不补0; false: 补0;
      trim,
      max,
      min,
      placeholder,
      maxLength,
      // 自动获取焦点
      autoFocus, // 渲染时自动获取焦点
      autoSelect, // 渲染时自动选中
      // 左右图标
      leftIcon,
      rightIcon,
      // 清除按键
      clear,
      allowClear,
      // 子内容
      children,
      // 事件
      onClick,
      onCompositionStart, // 输入开始时
      onCompositionUpdate, // 输入进行中
      onCompositionEnd, // 输入完成时
      onInput,
      onChange,
      onBlur,
      onFocus,

      ...props
    },
    ref
  ) => {
    const rootRef = useRef(null)
    const inputRef = useRef(null)

    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        inputDOM: inputRef?.current,
        getRootDOM: () => {
          return rootRef.current
        },
        getInputDOM: inputRef?.current?.getInputDOM,
        getInputRef: () => {
          return inputRef
        }
      }
    })

    useEffect(() => {
      let inputDOM = _getInputDOM()
      let val = (inputDOM?.value ? inputDOM.value : value) || ''
      updateState(val)
    }, [value]) // eslint-disable-line

    // 获取文本框
    function _getInputDOM() {
      if (inputRef?.current?.getInputDOM) {
        return inputRef.current.getInputDOM()
      }
      return null
    }

    // 更新禁用状态
    function updateState(val) {
      let minus = rootRef.current?.querySelector?.('.seed-numberbox-button-minus')
      let plus = rootRef.current?.querySelector?.('.seed-numberbox-button-plus')
      if (!isNaN(min) && !isNaN(val) && Number(val) <= Number(min)) {
        minus.setAttribute('disabled', 'true')
      } else {
        minus.removeAttribute('disabled')
      }
      if (!isNaN(max) && !isNaN(val) && Number(val) >= Number(max)) {
        plus.setAttribute('disabled', 'true')
      } else {
        plus.removeAttribute('disabled')
      }
    }

    // 修改值回调
    function handleChange(val) {
      if (disabled) return
      let inputDOM = _getInputDOM()
      if (!inputDOM) return

      // 非受控组件需要操作DOM
      if (value === undefined) {
        inputDOM.value = val
        updateState(val)
      }
      if (onChange) onChange(val)
    }

    // 点击减
    function handleMinus(e) {
      e.stopPropagation()
      if (disabled) return

      let inputDOM = _getInputDOM()
      if (!inputDOM) return
      let val = inputRef?.current?.correctValue(
        MathUtil.strip(Number(inputDOM.value || 0) - 1),
        'blur'
      )
      // Callback
      handleChange(val)
      if (minusProps.onClick) minusProps.onClick(e, val)
      if (stepFocus) {
        inputDOM.focus()
      }
    }

    // 点击加
    function handlePlus(e) {
      e.stopPropagation()
      if (disabled) return

      let inputDOM = _getInputDOM()
      if (!inputDOM) return
      if (isNaN(inputDOM?.value)) return
      let val = inputRef?.current?.correctValue(
        MathUtil.strip(Number(inputDOM.value || 0) + 1),
        'blur'
      )
      // Callback
      handleChange(val)
      if (plusProps.onClick) plusProps.onClick(e, val)
      if (stepFocus) {
        inputDOM.focus()
      }
    }

    // render
    function getInputDOM() {
      return (
        <InputNumber
          ref={inputRef}
          className="seed-numberbox-input"
          type="number"
          readOnly={readOnly}
          disabled={disabled}
          inputProps={inputProps}
          value={value}
          formatter={formatter}
          precision={precision}
          trim={trim}
          max={max}
          min={min}
          placeholder={placeholder}
          maxLength={maxLength}
          autoFocus={autoFocus} // 渲染时自动获取焦点
          autoSelect={autoSelect} // 渲染时自动选中
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          allowClear={allowClear}
          clear={clear}
          onClick={onClick}
          onCompositionStart={onCompositionStart} // 输入开始时
          onCompositionUpdate={onCompositionUpdate} // 输入进行中
          onCompositionEnd={onCompositionEnd} // 输入完成时
          onInput={onInput}
          onChange={handleChange}
          onBlur={onBlur}
          onFocus={onFocus}
        >
          {children}
        </InputNumber>
      )
    }

    return (
      <div
        {...props}
        disabled={(!isNaN(min) && !isNaN(max) ? Number(min) >= Number(max) : false) || disabled}
        className={`seed-numberbox${props.className ? ' ' + props.className : ''}`}
        ref={rootRef}
      >
        <div
          // disabled={minDisabled}
          {...minusProps}
          type="button"
          className={`seed-numberbox-button seed-numberbox-button-minus${
            minusProps.className ? ' ' + minusProps.className : ''
          }`}
          onClick={handleMinus}
        >
          <i className="seed-numberbox-button-minus-icon"></i>
        </div>
        {getInputDOM()}
        <div
          // disabled={maxDisabled}
          {...plusProps}
          type="button"
          className={`seed-numberbox-button seed-numberbox-button-plus${
            plusProps.className ? ' ' + plusProps.className : ''
          }`}
          onClick={handlePlus}
        >
          <i className="seed-numberbox-button-plus-icon"></i>
        </div>
      </div>
    )
  }
)

export default NumberBox
