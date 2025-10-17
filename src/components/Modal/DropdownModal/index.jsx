import React, { forwardRef } from 'react'
import Modal from './../Modal'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

// DropdownModal
const DropdownModal = forwardRef(
  (
    {
      portal,
      open,

      // Style
      maskClosable,
      maskClassName,
      maskStyle,
      modalClassName,
      modalStyle,

      // Offset
      referenceDOM,
      offset,
      left,
      right,

      // Content
      children,

      // Events
      onOpen,
      onClose
    },
    ref
  ) => {
    function getAnimation() {
      if (![undefined, null].includes(left)) {
        return 'slideDownLeft'
      }
      if (![undefined, null].includes(right)) {
        return 'slideDownRight'
      }
      return 'slideDown'
    }

    return (
      <Modal
        ref={ref}
        portal={portal}
        referenceDOM={referenceDOM}
        offset={offset}
        open={open}
        animation={getAnimation()}
        className={DOMUtil.classNames(
          modalClassName,
          ![undefined, null].includes(left) || ![undefined, null].includes(right)
            ? 'seed-modal-dropdown-side'
            : 'seed-modal-dropdown-center'
        )}
        style={modalStyle}
        maskClassName={DOMUtil.classNames(
          maskClassName,
          ![undefined, null].includes(left) || ![undefined, null].includes(right)
            ? 'seed-mask-dropdown-side'
            : 'seed-mask-dropdown-center'
        )}
        maskStyle={{
          ...maskStyle,
          ...(![undefined, null].includes(left) ? { left: left } : {}),
          ...(![undefined, null].includes(right) ? { right: right } : {})
        }}
        onOpen={onOpen}
        onClose={onClose}
      >
        {children}
      </Modal>
    )
  }
)

export default DropdownModal
