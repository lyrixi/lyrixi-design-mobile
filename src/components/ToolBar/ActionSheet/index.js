import React, { useRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import ActionSheet from './../../ActionSheet'
import Button from './../../Button'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, ActionSheet, Button } from 'lyrixi-design-mobile'
测试使用-end */

// 操作表下拉
function ToolBarActionSheet({
  // Combo Style
  color = 'default',
  variant = 'text',
  shape,
  comboStyle,
  comboClassName,

  // Modal
  portal,
  maskClassName,
  maskStyle,

  // Combo Value
  title = '',
  arrow = <i className="seed-button-icon toolbar-dropdown-combo-arrow"></i>,
  value,
  list,
  onBeforeChange,
  onChange
}) {
  const dropdownRef = useRef(null)

  // 修改
  async function handleChange(newValue) {
    if (typeof onBeforeChange === 'function') {
      let goOn = await onBeforeChange([newValue])
      if (!goOn) return
    }
    if (onChange) onChange([newValue])

    // 关闭下拉
    dropdownRef.current?.close?.()
  }

  return (
    <ActionSheet.Combo
      portal={portal}
      maskClassName={maskClassName}
      maskStyle={maskStyle}
      comboNew={({ visible, comboRef, onClick }) => {
        return (
          <Button
            ref={comboRef}
            color={color}
            variant={variant}
            size="s"
            radius="s"
            shape={shape}
            className={DOMUtil.classNames(
              'toolbar-dropdown-combo toolbar-button',
              comboClassName,
              visible ? 'expand' : ''
            )}
            style={comboStyle}
            onClick={onClick}
          >
            {DOMUtil.getTextNode(title || value?.[0]?.name, {
              className: 'toolbar-dropdown-combo-title',
              active: visible
            })}
            {DOMUtil.getIconNode(arrow, { active: visible })}
          </Button>
        )
      }}
      value={value?.[0]}
      list={list}
      onChange={handleChange}
    />
  )
}

// Component Name, for compact
ToolBarActionSheet.componentName = 'ToolBar.ActionSheet'

export default ToolBarActionSheet
