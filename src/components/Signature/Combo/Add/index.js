import React, { useImperativeHandle, useRef, forwardRef, useState } from 'react'
import Modal from './../../Modal'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-design-mobile'
测试使用-end */

// Combo
const Combo = (
  {
    value,
    onBeforeChange,
    onChange,
    modalProps,
    // 绘画配置
    color,
    backgroundColor,
    ...props
  },
  ref
) => {
  const [visible, setVisible] = useState(false)

  const comboRef = useRef(null)
  const modalRef = useRef(null)
  useImperativeHandle(ref, () => {
    return {
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
      ...modalRef?.current
    }
  })

  // 点击签名
  function handleSign() {
    setVisible(true)
  }

  // 修改签名
  function handleChange(base64) {
    setVisible(false)
    onChange?.(base64)
  }

  // 未签显示签名
  return (
    <>
      <div
        ref={comboRef}
        {...props}
        className={`signature-button${props?.className ? ' ' + props.className : ''}`}
        onClick={handleSign}
      >
        <i className={`signature-button-icon-add`}></i>
        {/* 文字 */}
        <div className="signature-button-label">
          {LocaleUtil.locale('签名', 'SeedsUI_signature')}
        </div>
      </div>
      <Modal
        ref={modalRef}
        visible={visible}
        value={value}
        onBeforeChange={onBeforeChange}
        onChange={handleChange}
        onVisibleChange={(newVisible) => {
          setVisible(newVisible)
        }}
        // 绘画配置
        color={color}
        backgroundColor={backgroundColor}
        {...modalProps}
      />
    </>
  )
}

export default forwardRef(Combo)
