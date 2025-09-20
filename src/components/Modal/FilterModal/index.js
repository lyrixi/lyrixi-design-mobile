import React, { forwardRef } from 'react'
import Modal from './../Modal'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import Layout from './../../Layout'
import NavBar from './../../NavBar'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Layout, NavBar } from 'lyrixi-design-mobile'
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
      maskProps={{
        ...props?.maskProps,
        onClick: () => {
          // Set maskClosable false (default is true)
          if (props?.maskClosable !== undefined && !props?.maskClosable) return
          onCancel && onCancel()
        }
      }}
      className={`modal-filtermodal${props?.className ? ' ' + props.className : ''}`}
      visible={visible}
      onVisibleChange={onVisibleChange}
    >
      <Layout className="full modal-filtermodal-layout">
        <Layout.Header>
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
        </Layout.Header>
        <Layout.Main>{children}</Layout.Main>
        {/* 底部 */}
        {footer && typeof footer === 'function'
          ? footer({ close: () => onVisibleChange && onVisibleChange(false) })
          : footer
        }
      </Layout>
    </Modal>
  )
}

export default forwardRef(FilterModal)
