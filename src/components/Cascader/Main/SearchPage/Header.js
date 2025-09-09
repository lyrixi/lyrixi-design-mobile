import React from 'react'

// 内库使用-start
import Layout from './../../../Layout'
import ToolBar from './../../../ToolBar'
// 内库使用-end

/* 测试使用-start
import { Layout, ToolBar } from 'lyrixi-design-mobile'
测试使用-end */

// 搜索框组件
export default function SearchHeader({
  searchActive,
  setSearchActive,
  value,
  onChange,
  onClick,
  onCancel
}) {
  return (
    <Layout.Header className="cascader-search-header toolbar-invert">
      <ToolBar invert>
        <ToolBar.Search
          value={value}
          readOnly
          allowClear
          onClick={() => {
            setSearchActive(true)
            onClick && onClick()
          }}
        />
        {searchActive && (
          <ToolBar.SearchActive
            value={value}
            allowClear
            onChange={onChange}
            onCancel={() => {
              onCancel && onCancel()
              setSearchActive(false)
            }}
          />
        )}
      </ToolBar>
    </Layout.Header>
  )
}
