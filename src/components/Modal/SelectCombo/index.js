import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  Fragment,
  useState,
  useEffect
} from 'react'
import getDisplayValue from './displayValueFormatter'

import Input from './../../Input'

import ComboWrapper from './ComboWrapper'
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
      // Modal
      value,
      onBeforeChange,
      onBeforeChecked,
      onChange,
      modal: ModalNode,
      title,
      modalProps,

      // Combo
      displayValueFormatter,
      autoSize,
      allowClear,
      separator,
      mode,
      multiple,
      readOnly,
      disabled,
      placeholder,
      onClick,
      onBeforeOpen,
      combo,
      clear = ({ triggerClear }) => {
        return ObjectUtil.isEmpty(value) || !allowClear ? (
          <Input.IconRightArrow />
        ) : (
          <Input.IconClear onClick={triggerClear} />
        )
      },
      onVisibleChange,

      children,
      ...props
    },
    ref
  ) => {
    // 显示文本格式化
    if (typeof displayValueFormatter !== 'function') {
      // eslint-disable-next-line
      displayValueFormatter = getDisplayValue
    }
    let displayValue = displayValueFormatter(value, { separator })

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
      typeof modalProps?.onVisibleChange === 'function' && modalProps.onVisibleChange(visible)
      typeof onVisibleChange === 'function' && onVisibleChange(visible)

      // eslint-disable-next-line
    }, [visible])

    // 点击文本框
    async function handleInputClick(e) {
      if (readOnly || disabled) return
      if (!visible && typeof onBeforeOpen === 'function') {
        let goOn = await onBeforeOpen()
        if (goOn === false) return
      }
      if (typeof onClick === 'function') {
        onClick(e)
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
      if (typeof clear === 'function') {
        return clear({ ...clearParams, value: value, readOnly: readOnly })
      }

      return undefined
    }

    // 文本框
    let InputNode = Input.Text
    if (autoSize) {
      InputNode = Input.AutoFit
    }

    function getComboNode() {
      if (typeof combo === 'function') {
        return (
          <ComboWrapper {...props} onClick={handleInputClick} ref={comboRef}>
            {combo({
              // ...props,
              // Paasive properties
              autoSize,
              allowClear,
              separator,
              mode,
              multiple,
              readOnly,
              disabled,
              placeholder,

              // Value
              value,
              displayValue,

              // Input
              clear: clearRender,
              onChange: handleChange
              // onClick: handleInputClick,
              // comboRef: comboRef
            })}
          </ComboWrapper>
        )
      }

      if (children) {
        return (
          <ComboWrapper {...props} onClick={handleInputClick} ref={comboRef}>
            {children}
          </ComboWrapper>
        )
      }

      if (mode === 'tags') {
        return (
          <Tags
            separator={separator}
            leftIcon={props?.leftIcon}
            rightIcon={props?.rightIcon}
            clear={clearRender}
            className={props?.className}
            style={props?.style}
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
          {...props}
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
    return (
      <Fragment>
        {/* Combo */}
        {getComboNode()}

        {/* Modal */}
        {ModalNode && (
          <ModalNode
            ref={modalRef}
            getComboDOM={() => {
              return comboRef.current
            }}
            value={value}
            onBeforeChange={onBeforeChange}
            onBeforeChecked={onBeforeChecked}
            onChange={onChange}
            allowClear={allowClear}
            multiple={multiple}
            title={title}
            {...modalProps}
            onVisibleChange={setVisible}
            visible={visible}
          />
        )}
      </Fragment>
    )
  }
)

export default Combo
