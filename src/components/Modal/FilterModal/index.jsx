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
    portal,
    open,
    // Style
    maskClosable,
    maskClassName,
    maskStyle,
    modalClassName,
    modalStyle,

    // Components
    footerRender,
    children,

    // Events
    onOpen,
    onClose,
    onCancel
  },
  ref
) {
  return (
    <Modal
      ref={ref}
      portal={portal}
      open={open}
      animation="slideLeft"
      // Style
      maskClosable={maskClosable}
      maskClassName={DOMUtil.classNames('filterModal-mask', maskClassName)}
      maskStyle={maskStyle}
      modalClassName={DOMUtil.classNames('filterModal', modalClassName)}
      modalStyle={modalStyle}
      // Events
      onOpen={onOpen}
      onClose={onClose}
    >
      <Page className="full bg-white">
        <Page.Header className="bg-default">
          <NavBar className="filterModal-navbar">
            <NavBar.Button
              onClick={(e) => {
                e.stopPropagation()

                onCancel && onCancel()
                onClose && onClose()
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
        {typeof footerRender === 'function'
          ? footerRender({ close: () => onClose && onClose() })
          : null}
      </Page>
    </Modal>
  )
}

export default forwardRef(FilterModal)
