import React, { useRef } from 'react'

import Dropdown from './../Dropdown'
import List from './List'

// 列表下拉
function ToolBarList({
  // Combo Style
  variant,
  color,
  shape,
  comboStyle,
  comboClassName,

  // Mask
  maskClassName,
  maskStyle,

  // Modal
  portal,
  offset,
  left,
  right,

  // Combo Value
  title,
  arrowRender,
  value,
  list,
  onChange
}) {
  const dropdownRef = useRef(null)
  // 修改
  async function handleChange(newValue) {
    if (onChange) {
      let goOn = await onChange(newValue)
      if (goOn === false) return
    }

    // 关闭下拉
    dropdownRef.current?.close?.()
  }

  return (
    <Dropdown
      portal={portal}
      offset={offset}
      left={left}
      right={right}
      variant={variant}
      color={color}
      shape={shape}
      comboStyle={comboStyle}
      comboClassName={comboClassName}
      maskClassName={maskClassName}
      maskStyle={maskStyle}
      title={title || value?.[0]?.name}
      arrowRender={arrowRender}
      ref={dropdownRef}
    >
      <List value={value} list={list} onChange={handleChange} />
    </Dropdown>
  )
}

// Component Name, for compact
ToolBarList.componentName = 'ToolBar.List'

export default ToolBarList
