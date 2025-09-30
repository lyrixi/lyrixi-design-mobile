import React, { forwardRef } from 'react'
import Modal from './../Modal'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import Page from './../../Page'
import NavBar from './../../NavBar'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Page, NavBar } from 'lyrixi-design-mobile'
测试使用-start */

// 侧边查询
function FilterModal(
  {
    // Modal fixed properties
    visible,
    onVisibleChange,
    onCancel,
    footer,
    children,
    ...props
  },
  ref
) {
  return (
    <Modal
      ref={ref}
      animation="slideLeft" // slideLeft | slideRight | slideUp | slideDown | zoom | fade
      {...props}
      maskClassName={props?.maskClassName}
      maskStyle={props?.maskStyle}
      onMaskClick={() => {
        // Set maskClosable false (default is true)
        if (props?.maskClosable !== undefined && !props?.maskClosable) return
        onCancel && onCancel()
      }}
      className={DOMUtil.classNames('modal-filtermodal', props?.className)}
      visible={visible}
      onVisibleChange={onVisibleChange}
    >
      <Page className="full modal-filtermodal-layout">
        <Page.Header>
          <NavBar className="modal-filtermodal-navbar">
            <NavBar.Button
              onClick={() => {
                onCancel && onCancel()
                onVisibleChange && onVisibleChange(false)
              }}
            >
              {LocaleUtil.locale('取消', 'SeedsUI_cancel')}
            </NavBar.Button>
            <NavBar.Title>{LocaleUtil.locale('筛选', 'SeedsUI_filter')}</NavBar.Title>
            <NavBar.Button>&nbsp;&nbsp;</NavBar.Button>
          </NavBar>
        </Page.Header>
        <Page.Main>{children}</Page.Main>
        {/* 底部 */}
        {footer && typeof footer === 'function'
          ? footer({ close: () => onVisibleChange && onVisibleChange(false) })
          : footer}
      </Page>
    </Modal>
  )
}

export default forwardRef(FilterModal)
