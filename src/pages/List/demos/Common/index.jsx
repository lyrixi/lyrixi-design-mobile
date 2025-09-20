import React, { useState, useRef } from 'react'
// 第三方库导入
import { Layout } from 'lyrixi-design-mobile'

// 公共组件导入

// 内部组件导入
import { queryData } from './api'
import Header from './Header'
import Main from './Main'

// 样式图片等资源文件导入
import './index.less'

// 普通列表
const Common = () => {
  const mainRef = useRef(null)
  let [queryParams, setQueryParams] = useState(null)

  return (
    <Layout className="full">
      {/* 搜索栏 */}
      <Header
        queryParams={queryParams}
        onSearch={(newQueryParams) => {
          queryParams = newQueryParams
          setQueryParams(newQueryParams)
          mainRef.current.reload()
        }}
      />

      {/* 列表 */}
      <Main
        ref={mainRef}
        loadList={({ page, action }) => {
          console.log('action:', action)
          return queryData({ page: page, rows: 20, ...queryParams })
        }}
        // value={value}
        onChange={() => {
          console.log('onChange:', arguments)
        }}
      />
    </Layout>
  )
}

export default Common
