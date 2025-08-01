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
      onBeforeChange,
      onBeforeChecked,
      onChange,

      visible = false,
      maskClosable = true,
      onVisibleChange,

      // 定制属性
      title,
      cancel,
      maskProps = {},
      groupProps = {},
      optionProps = {},
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

      // 修改提示
      if (typeof onBeforeChange === 'function') {
        let goOn = await onBeforeChange(currentValue)
        if (goOn === false) return

        // 修改值
        if (typeof goOn === 'object') {
          currentValue = goOn
        }
      }
      // 触发onChange事件
      if (onChange) onChange(currentValue)
      if (onVisibleChange) onVisibleChange(false)
    }

    // 点击遮罩
    async function handleClickMask(e) {
      e.stopPropagation()

      if (maskProps.onClick) {
        let goOn = maskProps.onClick(e)
        if (goOn === false) {
          return
        }
      }
      if (maskClosable && onVisibleChange) onVisibleChange(false)
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
            if (onVisibleChange) onVisibleChange(false)
          }}
        >
          {LocaleUtil.locale('取消', 'SeedsUI_cancel')}
        </div>
      )
    }
    return createPortal(
      <div
        {...maskProps}
        className={DOMUtil.classNames(
          'mask actionsheet-mask',
          maskProps?.className,
          visible ? ' active' : ''
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
            SafeArea.getSafeAreaClassName(safeArea),
            props?.className,
            visible ? ' active' : ''
          )}
        >
          {title && (
            <div className="actionsheet-header">
              <div className="actionsheet-header-title">{title}</div>
            </div>
          )}
          <div
            {...groupProps}
            className={DOMUtil.classNames('actionsheet-main', groupProps?.className)}
          >
            {list &&
              list.map((item, index) => {
                return (
                  <div
                    {...optionProps}
                    className={DOMUtil.classNames(
                      'actionsheet-option',
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
        </div>
      </div>,
      portal || document.getElementById('root') || document.body
    )
  }
)

export default Modal
