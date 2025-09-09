import React, { useImperativeHandle, useRef, forwardRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import getClassNameByAnimation from './../api/getClassNameByAnimation'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
import Tooltip from './../../Tooltip'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, SafeArea, Tooltip } from 'lyrixi-design-mobile'
测试使用-end */

const Modal = forwardRef(
  (
    {
      safeArea,
      portal,
      animation = 'zoom', // none | slideLeft | slideRight | slideUp | slideDown | zoom | fade
      // 自动调整位置
      referenceDOM: externalReferenceDOM = null,
      offset = null,

      visible,
      maskClosable = true,
      onVisibleChange,
      onClose,

      maskProps = {},

      children,
      ...props
    },
    ref
  ) => {
    // 增加保护
    // eslint-disable-next-line
    if (!maskProps) maskProps = {}

    const modalRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        modalDOM: modalRef.current,
        getModalDOM: () => {
          return modalRef.current
        }
      }
    })

    useEffect(() => {
      // 更新模态框位置对齐目标元素
      updateModalPosition()
      // eslint-disable-next-line
    }, [visible])

    // 受控显隐时, 需要更新容器位置
    function updateModalPosition() {
      let maskDOM = modalRef?.current

      // 参考元素
      let referenceDOM =
        typeof externalReferenceDOM === 'function' ? externalReferenceDOM() : externalReferenceDOM

      if (!referenceDOM || !maskDOM) return
      if (
        visible &&
        referenceDOM &&
        maskDOM &&
        [undefined, null].includes(maskProps?.style?.top) &&
        [undefined, null].includes(maskProps?.style?.bottom)
      ) {
        Tooltip.updatePositionByReferenceDOM(maskDOM, {
          referenceDOM: referenceDOM,
          parentDOM: portal,
          animation: animation,
          offset: offset,
          left: maskProps?.style?.left,
          right: maskProps?.style?.right
        })
      }
    }

    // 构建动画
    let animationClassName = getClassNameByAnimation(animation)

    // 点击遮罩
    function handleMaskClick(e) {
      if (maskProps?.onClick) maskProps.onClick(e)
      if (maskClosable) {
        onVisibleChange && onVisibleChange(false)
        onClose && onClose(e)
      }
      e.stopPropagation()
    }

    // 点击模态框
    function handleModalClick(e) {
      e.stopPropagation()
    }

    // 获取激活状态样式
    function getActiveClass() {
      return visible ? ' active' : ''
    }

    let ModalNode = (
      <div
        data-animation={animation}
        {...maskProps}
        className={`mask modal-mask${
          maskProps?.className ? ' ' + maskProps.className : ''
        }${getActiveClass()}`}
        onClick={handleMaskClick}
        ref={modalRef}
      >
        <div
          {...props}
          className={DOMUtil.classNames(
            'modal-animation modal',
            SafeArea.getSafeAreaClassName(safeArea),
            animationClassName ? ' ' + animationClassName : '',
            props.className,
            getActiveClass()
          )}
          data-animation={animation}
          onClick={handleModalClick}
        >
          {children}
        </div>
      </div>
    )

    if (portal === null || portal === false) {
      return ModalNode
    }
    return createPortal(ModalNode, portal || document.getElementById('root') || document.body)
  }
)

export default Modal
