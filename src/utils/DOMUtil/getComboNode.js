import React from 'react'

/**
 * 获取组合节点
 * @param {Object} params - 参数对象
 * @param {React.RefObject} params.comboRef - 组合元素的ref
 * @param {Function} params.combo - 组合函数，接收{comboRef, onClick}参数
 * @param {React.ReactNode} params.comboChildren - 组合元素的子元素
 * @param {Function} params.onClick - 点击事件处理函数
 * @param {string} params.className - CSS类名
 * @param {Object} params.style - 内联样式对象
 * @returns {React.ReactElement} 返回组合节点
 */
const getComboNode = ({
  // 渲染combo
  combo,
  comboRef,
  visible,
  // 渲染comboChildren
  comboChildren,
  id,
  className,
  style,
  // 公用事件
  onClick
}) => {
  if (typeof combo === 'function') {
    return combo({ comboRef, visible, onClick })
  }

  return (
    <div id={id} style={style} className={className} onClick={onClick} ref={comboRef}>
      {comboChildren}
    </div>
  )
}

export default getComboNode
