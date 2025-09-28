import _ from 'lodash'
import React from 'react'
import IconClear from './../Icon/Clear'

// 渲染清除按钮
function getClearNode({ clearRender, allowClear, disabled, readOnly, value, onClear, onTouchStart }) {
  // 禁用时不显示清空按钮
  if (disabled) return null

  let clearable = allowClear && (!_.isEmpty(value) || typeof value === 'number') ? true : false

  // 自定义渲染清空按钮
  if (typeof clearRender === 'function') {
    let clearNode = clearRender({
      allowClear,
      clearable: clearable,
      readOnly,
      value,
      triggerClear: onClear,
      onTouchStart: onTouchStart
    })

    if (clearNode !== undefined) return clearNode
  }

  // 默认渲染
  if (!clearable) return null
  return <IconClear onTouchStart={onTouchStart} onClick={onClear} />
}

export default getClearNode
