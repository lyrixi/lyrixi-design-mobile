import React, { useEffect, useRef } from 'react'

import Combo from './Combo'
import List from './List'

// 列表下拉
function ToolBarList({
  portal,
  title,

  value,
  list,
  onBeforeChange,
  onChange,
  ...props
}) {
  const dropdownRef = useRef(null)

  // 将所有dropdown合并到一个数组里, 用于全量关闭
  useEffect(() => {
    if (!window.dropdownRefs) window.dropdownRefs = []
    window.dropdownRefs.push(dropdownRef)
    // eslint-disable-next-line
  }, [])

  // 修改
  async function handleChange(newValue) {
    if (typeof onBeforeChange === 'function') {
      let goOn = await onBeforeChange(newValue)
      if (!goOn) return
    }
    if (onChange) onChange(newValue)

    // 关闭下拉
    dropdownRef.current?.close?.()
  }

  return (
    <Combo
      offset={{
        top: 6
      }}
      maskProps={{
        className: 'toolbar-list-modal-mask'
      }}
      portal={portal}
      title={title || value?.[0]?.name}
      {...props}
      onVisibleChange={(visible) => {
        props?.onBeforeChange && props?.onBeforeChange?.(visible)

        let toolbarDOM = dropdownRef.current?.comboDOM?.closest?.('.toolbar')
        if (!toolbarDOM) return

        if (visible) {
          toolbarDOM.classList.add('active')
        } else {
          toolbarDOM.classList.remove('active')
        }
      }}
      ref={dropdownRef}
    >
      <List value={value} list={list} onChange={handleChange} />
    </Combo>
  )
}

// Component Name, for compact
ToolBarList.componentName = 'ToolBar.List'

export default ToolBarList
