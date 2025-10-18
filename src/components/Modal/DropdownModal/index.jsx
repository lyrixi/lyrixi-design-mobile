import React, { forwardRef, useEffect, useRef, useImperativeHandle } from 'react'
import Modal from './../Modal'
import getAnimation from './getAnimation'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Tooltip from './../../Tooltip'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Tooltip } from 'lyrixi-design-mobile'
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
      referenceDOM: externalReferenceDOM,
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
    // 构建动画
    const animation = getAnimation(left, right)

    const modalRef = useRef(null)

    // 继续向外暴露与 Modal 相同的实例能力
    useImperativeHandle(ref, () => modalRef.current)

    useEffect(() => {
      // 更新模态框位置对齐目标元素
      updateModalPosition()
      // eslint-disable-next-line
    }, [open])

    // 受控显隐时, 需要更新容器位置
    function updateModalPosition() {
      let maskDOM = modalRef?.current?.maskDOM

      // 参考元素
      let referenceDOM =
        typeof externalReferenceDOM === 'function' ? externalReferenceDOM() : externalReferenceDOM

      if (!referenceDOM || !maskDOM) return
      if (
        open &&
        referenceDOM &&
        maskDOM &&
        [undefined, null].includes(maskStyle?.top) &&
        [undefined, null].includes(maskStyle?.bottom)
      ) {
        Tooltip.updatePositionByReferenceDOM(maskDOM, {
          referenceDOM: referenceDOM,
          parentDOM: portal,
          animation: animation,
          offset: offset,
          left: maskStyle?.left,
          right: maskStyle?.right
        })
      }
    }

    return (
      <Modal
        ref={modalRef}
        portal={portal}
        open={open}
        animation={animation}
        // Style
        maskClosable={maskClosable}
        maskClassName={DOMUtil.classNames(
          maskClassName,
          ![undefined, null].includes(left) || ![undefined, null].includes(right)
            ? 'dropdownModal-mask-side'
            : 'dropdownModal-mask-center'
        )}
        maskStyle={{
          ...maskStyle,
          ...(![undefined, null].includes(left) ? { left: left } : {}),
          ...(![undefined, null].includes(right) ? { right: right } : {})
        }}
        modalStyle={modalStyle}
        modalClassName={DOMUtil.classNames(
          modalClassName,
          ![undefined, null].includes(left) || ![undefined, null].includes(right)
            ? 'dropdownModal-side'
            : 'dropdownModal-center'
        )}
        // Events
        onOpen={onOpen}
        onClose={onClose}
      >
        {children}
      </Modal>
    )
  }
)

export default DropdownModal
