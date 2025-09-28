// 内库使用-start
import Input from './../../../Input'
// 内库使用-end

/* 测试使用-start
import { Input } from 'lyrixi-design-mobile'
测试使用-end */

// 渲染清除按钮
function getClearNode({ clearRender, allowClear, disabled, readOnly, value, onClear }) {
  // 禁用时不显示清空按钮
  if (disabled || readOnly) return null

  let clearable = allowClear && (value || typeof value === 'number') ? true : false

  // 自定义渲染清空按钮
  if (typeof clearRender === 'function') {
    let clearNode = clearRender({
      allowClear,
      clearable: clearable,
      readOnly,
      value,
      triggerClear: onClear
    })

    if (clearNode !== undefined) return clearNode
  }

  // 默认渲染
  if (!clearable) return null
  return <Input.IconClear onClick={onClear} />
}

export default getClearNode
