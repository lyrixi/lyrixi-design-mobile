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

import ComboWrapper from './ComboWrapper'
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
      // Modal
      portal,
      maskClassName,
      maskStyle,
      modalClassName,
      modalStyle,

      value,
      onBeforeChange,
      onBeforeChecked,
      onChange,
      modal: ModalNode,
      title,

      // Modal props (previously in modalProps)
      list,
      wrapper,
      layout,
      checkable,
      checkbox,
      checkboxPosition,
      multiple,
      loadList,
      pull,
      pagination,

      // ComboNew
      comboRender,
      comboChildren,
      comboStyle,
      comboClassName,

      // Combo
      formatter,
      autoSize,
      allowClear,
      separator,
      mode,
      readOnly,
      disabled,
      placeholder,
      onClick,
      onBeforeOpen,
      clearRender = ({ triggerClear }) => {
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
      if (typeof clearRender === 'function') {
        return clearRender({ ...clearParams, value: value, readOnly: readOnly })
      }

      return undefined
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
          onClick: handleInputClick
        })
      }
      if (comboChildren) {
        return (
          <div
            ref={comboRef}
            style={comboStyle}
            className={DOMUtil.classNames(visible ? 'expand' : '', comboClassName)}
            onClick={handleInputClick}
          >
            {comboChildren}
          </div>
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
            clearRender={clearRender}
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
    const ComboNode = getComboNode()

    return (
      <Fragment>
        {/* Combo */}
        {ComboNode}

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
            portal={portal}
            maskClassName={maskClassName}
            maskStyle={maskStyle}
            className={modalClassName}
            style={modalStyle}
            onVisibleChange={setVisible}
            visible={visible}
            // Modal props (previously in modalProps)
            list={list}
            wrapper={wrapper}
            layout={layout}
            checkable={checkable}
            checkbox={checkbox}
            checkboxPosition={checkboxPosition}
            loadList={loadList}
            pull={pull}
            pagination={pagination}
          />
        )}
      </Fragment>
    )
  }
)

export default Combo
