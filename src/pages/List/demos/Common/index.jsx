import React, { useState, useRef } from 'react'
// 第三方库导入
import { Page } from 'lyrixi-design-mobile'

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
    <Page className="full">
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
        loadData={async ({ previousResult, action }) => {
          console.log('action:', action)
          const newList = await queryData({ page: 1, rows: 20, ...queryParams })
          return {
            status: Array.isArray(newList) && newList.length === 0 ? 'empty' : undefined,
            message: '',
            list: Array.isArray(newList) ? newList : []
          }
        }}
        // value={value}
        onChange={() => {
          console.log('onChange:', arguments)
        }}
      />
    </Page>
  )
}

export default Common
