import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import getDisplayValue from './formatter'

import InputText from './../Text'
import InputAutoFit from './../AutoFit'
import IconRightArrow from './../Icon/RightArrow'
import IconClear from './../Icon/Clear'
import Tags from './Tags'

// 内库使用-start
import ObjectUtil from './../../../utils/ObjectUtil'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil } from 'lyrixi-design-mobile'
测试使用-end */

// 基础Combo: 仅渲染Input
const Combo = forwardRef(
  (
    {
      // Style
      style,
      className,

      // 图标
      leftIcon,
      rightIcon,
      clearRender: customClearRender,

      // 值
      value,
      allowClear,
      readOnly,
      disabled,
      placeholder,

      // Display Value
      formatter,
      autoSize,
      separator,
      mode,

      // 事件
      onChange,
      onClick
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
        <IconRightArrow />
      ) : (
        <IconClear onClick={clearParams?.triggerClear} />
      )
    }

    // 文本框
    let InputNode = InputText
    if (autoSize) {
      InputNode = InputAutoFit
    }

    if (mode === 'tags') {
      return (
        <Tags
          separator={separator}
          readOnly={readOnly}
          disabled={disabled}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          className={className}
          style={style}
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
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        className={className}
        style={style}
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
