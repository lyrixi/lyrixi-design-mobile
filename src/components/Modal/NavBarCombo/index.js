import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import getDisplayValue from './formatter'

import Input from './../../Input'

import Tags from './Tags'

// 内库使用-start
import ObjectUtil from './../../../utils/ObjectUtil'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil } from 'lyrixi-design-mobile'
测试使用-end */

// Combo
const Combo = forwardRef(
  (
    {
      // Combo Style
      comboStyle,
      comboClassName,
      comboLeftIcon,
      comboRightIcon,

      // Input
      value,
      onChange,
      allowClear,
      readOnly,
      disabled,
      placeholder,
      clearRender: customClearRender,

      onClick,

      // Display Value
      formatter,
      autoSize,
      separator,
      mode
    },
    ref
  ) => {
    // 显示文本格式化
    if (typeof formatter !== 'function') {
      // eslint-disable-next-line
      formatter = getDisplayValue
    }
    let displayValue = formatter(value, { separator })

    // Expose methods
    const comboRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        // 显示文本
        displayValue: displayValue,
        getDisplayValue: (newValue) => {
          return displayValue
        },
        comboDOM: comboRef?.current?.getRootDOM ? comboRef.current.getRootDOM() : comboRef.current,
        getComboDOM: () => {
          // div
          let comboDOM = comboRef?.current
          // Input.Text
          if (comboRef?.current?.getRootDOM) {
            comboDOM = comboRef.current.getRootDOM()
          }
          return comboDOM
        }
      }
    })

    // 点击文本框
    function handleInputClick(e) {
      e.stopPropagation()
      if (readOnly || disabled) return
      onClick && onClick(e)
    }

    // 渲染清空按钮
    function clearRender(clearParams) {
      // 只读不显示清空按钮
      if (readOnly || disabled) {
        return null
      }

      // 自定义清空按钮
      if (typeof customClearRender === 'function') {
        return customClearRender({ ...clearParams, value: value, readOnly: readOnly })
      }

      return ObjectUtil.isEmpty(value) || !allowClear ? (
        <Input.IconRightArrow />
      ) : (
        <Input.IconClear onClick={clearParams?.triggerClear} />
      )
    }

    // 文本框
    let InputNode = Input.Text
    if (autoSize) {
      InputNode = Input.AutoFit
    }

    if (mode === 'tags') {
      return (
        <Tags
          separator={separator}
          readOnly={readOnly}
          disabled={disabled}
          leftIcon={comboLeftIcon}
          rightIcon={comboRightIcon}
          className={comboClassName}
          style={comboStyle}
          clearRender={clearRender}
          placeholder={placeholder}
          allowClear={allowClear}
          value={value}
          onAdd={handleInputClick}
          onEdit={handleInputClick}
          onChange={onChange}
        />
      )
    }

    return (
      <InputNode
        disabled={disabled}
        readOnly
        allowClear={allowClear}
        value={displayValue}
        placeholder={placeholder}
        leftIcon={comboLeftIcon}
        rightIcon={comboRightIcon}
        className={comboClassName}
        style={comboStyle}
        clearRender={clearRender}
        onClick={handleInputClick}
        // 强制只读的控件, 只会清空时触发
        onChange={onChange}
        ref={comboRef}
      />
    )
  }
)

export default Combo
