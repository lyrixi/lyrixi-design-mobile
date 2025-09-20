import React, { forwardRef, useImperativeHandle, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

// 组件
import ButtonNumber from './ButtonNumber'
import ButtonAction from './ButtonAction'
import ButtonQuick from './ButtonQuick'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import DOMUtil from './../../../utils/DOMUtil'
import Layout from '../../Layout'
import Icon from './../../Icon'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, DOMUtil, Layout, Icon } from 'lyrixi-design-mobile'
测试使用-end */

const KeyboardNumber = forwardRef(
  (
    {
      // 值控制
      value = '',
      onChange,

      // 按钮配置
      dot, // 小数点按钮
      minus, // 负号按钮
      ok,
      cancel,
      onOk,
      onCancel,

      // 遮罩配置
      maskStyle,
      maskClassName,
      maskClosable = true,

      // 显示控制
      open,
      onOpen,
      onClose,

      // 传递给容器的属性
      ...props
    },
    ref
  ) => {
    const isDeleteInMainRef = useRef(false)
    const rootRef = useRef(null)

    // 暴露给父组件的方法
    useImperativeHandle(ref, () => ({
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current
    }))

    // 处理open变化
    useEffect(() => {
      if (open && onOpen) {
        onOpen()
      }
    }, [open, onOpen])

    // 处理数字按键点击
    const handleNumber = (num) => {
      let newValue = value + num
      if (onChange) {
        onChange(newValue, { action: 'number' })
      }
    }

    // 处理小数点
    const handleDot = () => {
      const currentValue = value || ''
      const newValue = currentValue + '.'
      if (onChange) {
        onChange(newValue, { action: 'dot' })
      }
    }

    // 处理负号
    const handleMinus = () => {
      const currentValue = value || ''
      const newValue = currentValue + '-'
      if (onChange) {
        onChange(newValue, { action: 'minus' })
      }
    }

    // 处理删除按键
    const handleDelete = () => {
      const currentValue = value || ''
      if (currentValue.length > 0) {
        const newValue = currentValue.slice(0, -1)
        if (onChange) {
          onChange(newValue, { action: 'delete' })
        }
      }
    }

    // 处理确定按钮
    const handleOk = (e) => {
      if (onOk) {
        onOk(value)
      }
      if (onClose) {
        onClose()
      }
      e.stopPropagation()
    }

    // 处理取消按钮
    const handleCancel = (e) => {
      if (onCancel) {
        onCancel()
      }
      if (onClose) {
        onClose(false)
      }
      e.stopPropagation()
    }

    // 处理遮罩点击
    const handleMaskClick = (e) => {
      if (maskClosable) {
        handleCancel(e)
      }
      e.stopPropagation()
    }

    // 处理键盘容器点击
    const handleKeyboardClick = (e) => {
      e.stopPropagation()
    }

    // 第四行 根据配置动态布局
    function getOperateRowNode() {
      isDeleteInMainRef.current = true
      // 当ok、dot、minus都没有时, 删除按钮放在右下角
      if (ok === null && !dot && !minus) {
        return (
          <>
            <ButtonNumber className="empty">{/* 空位 */}</ButtonNumber>
            <ButtonNumber onClick={handleNumber}>0</ButtonNumber>
            <ButtonNumber onClick={handleDelete}>
              <Icon className="seed-keyboard-icon seeds-icon-keyboard-delete" />
            </ButtonNumber>
          </>
        )
      }
      // 当没有ok, 但dot和minus有一个时, 删除按钮放在右下角, 其他按钮放在左下角
      if (ok === null && ((dot && !minus) || (!dot && minus))) {
        return (
          <>
            {dot && <ButtonNumber onClick={handleDot}>.</ButtonNumber>}
            {minus && <ButtonNumber onClick={handleMinus}>-</ButtonNumber>}
            <ButtonNumber onClick={handleNumber}>0</ButtonNumber>
            <ButtonNumber onClick={handleDelete}>
              <Icon className="seed-keyboard-icon seeds-icon-keyboard-delete" />
            </ButtonNumber>
          </>
        )
      }

      isDeleteInMainRef.current = false
      // 全都有时, 键盘区不显示删除按钮
      return (
        <>
          {dot ? (
            <ButtonNumber onClick={handleDot}>.</ButtonNumber>
          ) : (
            <ButtonNumber className="empty"></ButtonNumber>
          )}
          <ButtonNumber onClick={handleNumber}>0</ButtonNumber>
          {minus ? (
            <ButtonNumber onClick={handleMinus}>-</ButtonNumber>
          ) : (
            <ButtonNumber className="empty"></ButtonNumber>
          )}
        </>
      )
    }

    // 构建键盘节点
    const KeyboardNode = (
      <div
        ref={rootRef}
        className={DOMUtil.classNames(
          'mask seed-keyboard-number-mask',
          maskClassName,
          open ? 'active' : ''
        )}
        style={maskStyle}
        onClick={handleMaskClick}
        {...props}
      >
        <Layout
          animation="slideUp"
          className={DOMUtil.classNames(
            'modal-animation bottom-center seed-keyboard-number-container',
            open ? 'active' : '',
            ok !== null ? 'seed-keyboard-has-ok' : ''
          )}
          onClick={handleKeyboardClick}
        >
          {/* 顶部操作栏 */}
          <Layout.Header>
            {cancel !== null && (
              <ButtonQuick onClick={handleCancel}>
                {cancel !== null ? (
                  <Icon className="seed-keyboard-icon seeds-icon-arrow-down" />
                ) : (
                  cancel
                )}
              </ButtonQuick>
            )}
          </Layout.Header>

          {/* 键盘主体 */}
          <Layout>
            <Layout.Main>
              {/* 第一行 1-3 */}
              <div className="seed-keyboard-main-row">
                <ButtonNumber onClick={handleNumber}>1</ButtonNumber>
                <ButtonNumber onClick={handleNumber}>2</ButtonNumber>
                <ButtonNumber onClick={handleNumber}>3</ButtonNumber>
              </div>

              {/* 第二行 4-6 */}
              <div className="seed-keyboard-main-row">
                <ButtonNumber onClick={handleNumber}>4</ButtonNumber>
                <ButtonNumber onClick={handleNumber}>5</ButtonNumber>
                <ButtonNumber onClick={handleNumber}>6</ButtonNumber>
              </div>

              {/* 第三行 7-9 */}
              <div className="seed-keyboard-main-row">
                <ButtonNumber onClick={handleNumber}>7</ButtonNumber>
                <ButtonNumber onClick={handleNumber}>8</ButtonNumber>
                <ButtonNumber onClick={handleNumber}>9</ButtonNumber>
              </div>

              {/* 第四行 根据配置动态布局 */}
              <div className="seed-keyboard-main-row">{getOperateRowNode()}</div>
            </Layout.Main>

            <Layout.Aside className="flex flex-vertical">
              {/* 删除键 - 只在有确定按钮时显示在侧边栏 */}
              {isDeleteInMainRef.current === false && (
                <ButtonAction className="delete" onClick={handleDelete}>
                  <Icon className="seed-keyboard-icon seeds-icon-keyboard-delete" />
                </ButtonAction>
              )}

              {/* 确定按钮 */}
              {ok !== null && (
                <ButtonAction className="ok" onClick={handleOk}>
                  {ok || LocaleUtil.locale('确定', 'SeedsUI_ok')}
                </ButtonAction>
              )}
            </Layout.Aside>
          </Layout>
        </Layout>
      </div>
    )

    // 渲染到body
    return createPortal(KeyboardNode, document.body)
  }
)

export default KeyboardNumber
