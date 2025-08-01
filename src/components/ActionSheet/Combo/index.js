import React, { forwardRef } from 'react'
import Modal from './../Modal'

// 内库使用-start
import Combo from './../../Modal/SelectCombo'
// 内库使用-end

/* 测试使用-start
import { BaseModal } from 'lyrixi-design-mobile'
const Combo = BaseModal.SelectCombo
测试使用-end */

// 卡片选择
const ActionSheetCombo = (
  {
    // Modal
    modalProps,

    title,
    list,
    ...props
  },
  ref
) => {
  return (
    <Combo
      ref={ref}
      {...props}
      // Modal
      modal={Modal}
      modalProps={{
        ...modalProps,
        title: title,
        list: list
      }}
    />
  )
}

export default forwardRef(ActionSheetCombo)
