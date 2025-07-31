import React from 'react'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import Layout from './../../Layout'
import FooterBar from './../../FooterBar'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Layout, FooterBar } from 'lyrixi-design-mobile'
测试使用-start */

// 侧边查询底部按钮
export default function FilterFooter({
  onVisibleChange,
  // 需要换成FooterBar里的按钮
  buttons: externalButtons,
  onConfig,
  onReset,
  onOk
}) {
  const buttons = []
  if (onConfig) {
    buttons.push({
      type: 'tab',
      id: 'config',
      icon: 'seeds-icon-config',
      name: LocaleUtil.locale('设置', 'SeedsUI_config'),
      onClick: () => {
        onConfig({ close: () => onVisibleChange && onVisibleChange(false) })
      }
    })
  }
  if (onReset) {
    buttons.push({
      id: 'reset',
      name: LocaleUtil.locale('重置', 'SeedsUI_reset'),
      onClick: () => {
        onReset({ close: () => onVisibleChange && onVisibleChange(false) })
      }
    })
  }
  if (onOk) {
    buttons.push({
      id: 'ok',
      className: 'primary',
      name: LocaleUtil.locale('确定', 'SeedsUI_ok'),
      onClick: () => {
        onOk({ close: () => onVisibleChange && onVisibleChange(false) })
      }
    })
  }

  return (
    <Layout.Footer>
      <FooterBar
        buttons={[
          ...(buttons || []),
          ...(externalButtons || []).map((button) => {
            return {
              ...button,
              onClick: () => {
                button?.onClick &&
                  button.onClick({ close: () => onVisibleChange && onVisibleChange(false) })
              }
            }
          })
        ]}
      />
    </Layout.Footer>
  )
}
