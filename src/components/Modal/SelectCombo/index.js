import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  Fragment,
  useState,
  useEffect
} from 'react'
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
      // Modal Render
      modalRender,

      // Combo Render
      comboRender,
      comboStyle,
      comboClassName,

      // Input
      leftIcon,
      rightIcon,

      // Combo
      value,
      onBeforeChange,
      onChange,
      allowClear,
      multiple,
      formatter,
      autoSize,
      separator,
      mode,
      readOnly,
      disabled,
      placeholder,
      onBeforeOpen,
      clearRender,
      onVisibleChange
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
    const modalRef = useRef(null)
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
        },
        ...modalRef?.current,
        close: () => {
          setVisible(false)
        },
        open: () => {
          setVisible(true)
        }
      }
    })

    // 控制Modal显隐
    const [visible, setVisible] = useState(null)

    useEffect(() => {
      if (visible === null) return
      // Removed modalProps.onVisibleChange handling
      typeof onVisibleChange === 'function' && onVisibleChange(visible)

      // eslint-disable-next-line
    }, [visible])

    // 点击文本框
    async function handleInputClick(e) {
      e.stopPropagation()
      if (readOnly || disabled) return
      if (!visible && typeof onBeforeOpen === 'function') {
        let goOn = await onBeforeOpen()
        if (goOn === false) return
      }

      setVisible(!visible)
    }

    // 文本框修改值
    async function handleChange(newValue) {
      // 修改前校验
      if (typeof onBeforeChange === 'function') {
        let goOn = await onBeforeChange(newValue)
        if (goOn === false) return

        // 修改值
        if (typeof goOn === 'object') {
          // eslint-disable-next-line
          newValue = goOn
        }
      }
      onChange && onChange(newValue)
    }

    // 渲染清空按钮
    function clearRender(clearParams) {
      // 只读不显示清空按钮
      if (readOnly || disabled) {
        return null
      }

      // 自定义清空按钮
      if (typeof clearRender === 'function') {
        return clearRender({ ...clearParams, value: value, readOnly: readOnly })
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
          visible,
          style: comboStyle,
          className: DOMUtil.classNames(visible ? 'expand' : '', comboClassName),
          onClick: handleInputClick,
          value,
          allowClear,
          multiple,
          onChange: handleChange
        })
      }

      if (mode === 'tags') {
        return (
          <Tags
            separator={separator}
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            className={comboClassName}
            style={comboStyle}
            clearRender={clearRender}
            placeholder={placeholder}
            readOnly={readOnly}
            disabled={disabled}
            allowClear={allowClear}
            value={value}
            onAdd={() => setVisible(true)}
            onEdit={() => setVisible(true)}
            onChange={handleChange}
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
          className={comboClassName}
          style={comboStyle}
          clear={clearRender}
          onClick={handleInputClick}
          onChange={async (text) => {
            // 清空操作
            if (!text) {
              let currentValue = null
              // 修改前校验
              if (typeof onBeforeChange === 'function') {
                let goOn = await onBeforeChange(currentValue)
                if (goOn === false) return

                // 修改值
                if (typeof goOn === 'object') {
                  currentValue = goOn
                }
              }
              onChange && onChange(null)
            }
          }}
          ref={comboRef}
        />
      )
    }
    const ComboNode = getComboNode()

    return (
      <Fragment>
        {/* Combo */}
        {ComboNode}

        {/* Modal */}
        {typeof modalRender === 'function' &&
          modalRender({
            modalRef: modalRef,
            getComboDOM: () => {
              return comboRef.current
            },
            value: value,
            allowClear,
            multiple,
            onChange: handleChange,
            onVisibleChange: setVisible,
            visible: visible
          })}
      </Fragment>
    )
  }
)

export default Combo
