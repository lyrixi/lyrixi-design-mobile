import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import LocaleUtil from './../../../utils/LocaleUtil'
import SafeArea from './../../SafeArea'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, LocaleUtil, SafeArea } from 'lyrixi-design-mobile'
测试使用-end */

const Modal = forwardRef(
  (
    {
      safeArea = true,

      allowClear,
      // 通用属性
      portal,
      getComboDOM,
      value,
      list,
      onOk,

      open = false,
      maskClosable = true,
      onClose,

      // 定制属性
      title,
      cancel,
      maskClassName,
      maskStyle,
      groupClassName,
      groupStyle,
      optionClassName,
      optionStyle,
      animation = 'slideUp', // slideLeft | slideRight | slideUp | slideDown | zoom | fade
      ...props
    },
    ref
  ) => {
    // 过滤非法数据
    // eslint-disable-next-line
    list = list.filter((item) => {
      if (!item || (!item.id && !item.name)) return false
      return true
    })

    const rootRef = useRef(null)

    // 节点
    useImperativeHandle(ref, () => {
      return {
        modalDOM: rootRef.current,
        getModalDOM: () => rootRef.current
      }
    })

    // 点击选项
    async function handleChange(item) {
      let currentValue = item
      if (allowClear) {
        if (item.id === value?.id) {
          currentValue = null
        }
      }

      // 触发onOk事件
      if (onOk) {
        let goOn = await onOk(currentValue)
        if (goOn === false) return
      }
      if (onClose) onClose()
    }

    // 点击遮罩
    async function handleClickMask(e) {
      e.stopPropagation()

      if (maskClosable && onClose) onClose()
    }

    // 获取取消按钮节点
    function getCancelNode() {
      if (typeof cancel === 'function') {
        return cancel()
      }

      return (
        <div
          className={`actionsheet-cancel`}
          onClick={() => {
            if (onClose) onClose()
          }}
        >
          {LocaleUtil.locale('取消', 'SeedsUI_cancel')}
        </div>
      )
    }
    return createPortal(
      <div
        style={maskStyle}
        className={DOMUtil.classNames(
          'mask actionsheet-mask',
          maskClassName,
          open ? ' active' : ''
        )}
        onClick={handleClickMask}
        ref={rootRef}
      >
        <div
          data-animation={animation}
          onClick={(e) => e.stopPropagation()}
          {...props}
          className={DOMUtil.classNames(
            'modal-animation actionsheet-modal',
            props?.className,
            open ? ' active' : ''
          )}
        >
          {title && (
            <div className="actionsheet-header">
              <div className="actionsheet-header-title">{title}</div>
            </div>
          )}
          <div
            style={groupStyle}
            className={DOMUtil.classNames('actionsheet-main', groupClassName)}
          >
            {list &&
              list.map((item, index) => {
                return (
                  <div
                    style={optionStyle}
                    className={DOMUtil.classNames(
                      'actionsheet-option',
                      optionClassName,
                      item?.disabled ? 'disabled' : '',
                      value?.[item.id] ? 'active' : ''
                    )}
                    key={index}
                    data-index={index}
                    onClick={(e) => {
                      e.stopPropagation()
                      item?.onClick && item.onClick(e)
                      handleChange(item)
                    }}
                  >
                    {item.name}
                  </div>
                )
              })}
          </div>
          {getCancelNode()}
          {safeArea === true && <SafeArea />}
        </div>
      </div>,
      portal || document.getElementById('root') || document.body
    )
  }
)

export default Modal
