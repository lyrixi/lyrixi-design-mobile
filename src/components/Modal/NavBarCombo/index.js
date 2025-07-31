import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react'

import NavBarModal from './../NavBarModal'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

const Combo = forwardRef(
  (
    {
      combo,

      // NavBarModal
      portal,
      animation,
      maskProps,
      title,
      titleProps,
      ok,
      onOk,
      okProps,
      cancel,
      onCancel,
      onVisibleChange,
      cancelProps,
      maskClosable,
      modalProps,
      children,
      ...props
    },
    ref
  ) => {
    const rootRef = useRef(null)
    const [visible, setVisible] = useState(false)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current,
        close: () => {
          setVisible(false)
        },
        open: () => {
          setVisible(true)
        }
      }
    })

    useEffect(() => {
      if (visible === null) return
      typeof modalProps?.onVisibleChange === 'function' && modalProps.onVisibleChange(visible)
      typeof onVisibleChange === 'function' && onVisibleChange(visible)

      // eslint-disable-next-line
    }, [visible])

    return (
      <>
        {/* Combo */}
        <div
          {...props}
          className={DOMUtil.classNames('modal-navbar-combo', props.className)}
          onClick={() => {
            setVisible(true)
          }}
          ref={rootRef}
        >
          {combo}
        </div>

        {/* Modal */}
        <NavBarModal
          portal={portal}
          animation={animation}
          maskProps={maskProps}
          title={title}
          titleProps={titleProps}
          ok={ok}
          onOk={onOk}
          okProps={okProps}
          cancel={cancel}
          onCancel={onCancel}
          cancelProps={cancelProps}
          maskClosable={maskClosable}
          {...modalProps}
          onVisibleChange={setVisible}
          visible={visible}
        >
          {children}
        </NavBarModal>
      </>
    )
  }
)

export default Combo
