import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import getDisplayValue from './formatter'

import Input from './../../Input'

import Tags from './Tags'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import ObjectUtil from './../../../utils/ObjectUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, ObjectUtil } from 'lyrixi-design-mobile'
测试使用-end */

// Combo
const Combo = forwardRef(
  (
    {
      // Combo Render
      comboRender,
      comboStyle,
      comboClassName,

      // Input
      value,
      onChange,
      allowClear,
      readOnly,
      disabled,
      placeholder,
      clearRender: customClearRender,
      leftIcon,
      rightIcon,
      className,
      style,
      onClick,

      // Combo

      multiple,
      formatter,
      autoSize,
      separator,
      mode,

      ...props
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

    function getComboNode() {
      if (typeof comboRender === 'function') {
        return comboRender({
          comboRef,
          style: comboStyle || style,
          className: DOMUtil.classNames(comboClassName, className),
          onClick: handleInputClick,
          value,
          allowClear,
          multiple,
          onChange: onChange
        })
      }

      if (mode === 'tags') {
        return (
          <Tags
            separator={separator}
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            className={DOMUtil.classNames(comboClassName, className)}
            style={comboStyle || style}
            clearRender={clearRender}
            placeholder={placeholder}
            readOnly={readOnly}
            disabled={disabled}
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
          allowClear={allowClear}
          value={displayValue}
          readOnly
          placeholder={placeholder}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          className={DOMUtil.classNames(comboClassName, className)}
          style={comboStyle || style}
          clear={clearRender}
          onClick={handleInputClick}
          // 强制只读的控件, 只会清空时触发
          onChange={onChange}
          ref={comboRef}
          {...props}
        />
      )
    }
    const ComboNode = getComboNode()

    return ComboNode
  }
)

export default Combo
