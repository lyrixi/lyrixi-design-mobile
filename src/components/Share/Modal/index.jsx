import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import Main from './../Main'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import DOMUtil from './../../../utils/DOMUtil'
import BaseModal from './../../Modal'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Modal as BaseModal, SafeArea } from 'lyrixi-design-mobile'
测试使用-end */

const Modal = forwardRef(
  (
    {
      // Main
      mainProps,
      shareTo,
      onError,
      onSuccess,

      // Modal
      animation = 'slideUp',
      className,
      onOpen,
      onClose,
      ...props
    },
    ref
  ) => {
    // 节点
    const modalRef = useRef(null)
    const mainRef = useRef(null)

    useImperativeHandle(ref, () => {
      return {
        ...modalRef?.current,
        ...mainRef?.current
      }
    })

    return (
      <BaseModal
        {...props}
        ref={modalRef}
        onOpen={onOpen}
        onClose={onClose}
        animation={animation}
        className={DOMUtil.classNames('share-modal', className)}
      >
        <div className="share-modal-title">{LocaleUtil.locale('分享到', 'SeedsUI_share_to')}</div>
        <div className="share-modal-main">
          <Main
            {...(mainProps || {})}
            ref={mainRef}
            shareTo={shareTo}
            onError={onError}
            onSuccess={onSuccess}
          />
        </div>
        <div
          className="share-modal-footer-button-cancel"
          onClick={() => {
            onClose && onClose()
          }}
        >
          {LocaleUtil.locale('取消', 'SeedsUI_cancel')}
        </div>
      </BaseModal>
    )
  }
)

export default Modal
