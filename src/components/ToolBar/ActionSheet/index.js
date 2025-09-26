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
  titleRender,
  arrowRender = () => <i className="seed-button-icon toolbar-dropdown-combo-arrow"></i>,
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

  // 获取标题节点
  function getTitleNode(visible) {
    if (typeof titleRender === 'function') {
      return titleRender({
        className: 'toolbar-dropdown-combo-title',
        active: visible,
        value: value?.[0]?.name
      })
    }
    return <span className="toolbar-dropdown-combo-title">{title || value?.[0]?.name}</span>
  }

  // 获取箭头节点
  function getArrowNode(visible) {
    if (typeof arrowRender === 'function') {
      return arrowRender({ active: visible })
    }
    return <i className="seed-button-icon toolbar-dropdown-combo-arrow"></i>
  }

  // 获取Combo节点
  function getComboNode() {
    return ({ visible, comboRef, onClick }) => (
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
        {getTitleNode(visible)}
        {getArrowNode(visible)}
      </Button>
    )
  }

  return (
    <ActionSheet.Combo
      portal={portal}
      maskClassName={maskClassName}
      maskStyle={maskStyle}
      comboRender={getComboNode}
      value={value?.[0]}
      list={list}
      onChange={handleChange}
    />
  )
}

// Component Name, for compact
ToolBarActionSheet.componentName = 'ToolBar.ActionSheet'

export default ToolBarActionSheet
