import React from 'react'

// 内库使用-start
import List from './../../List'
// 内库使用-end

/* 测试使用-start
import { List } from 'lyrixi-design-mobile'
测试使用-end */

function ListBar({ value, list, onChange }) {
  return (
    <List
      value={value}
      list={list}
      checkable
      checkbox={() => <i className="toolbar-list-item-checkbox"></i>}
      checkboxPosition="right"
      onChange={onChange}
    />
  )
}
export default ListBar
