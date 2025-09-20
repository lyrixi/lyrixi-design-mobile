import React, { useState, useRef } from 'react'
// 第三方库导入
import { Layout } from 'lyrixi-design-mobile'

// 公共组件导入

// 内部组件导入
import { queryData } from './../Common/api'
import Header from './../Common/Header'
import Main from './../Common/Main'

// 样式图片等资源文件导入
import './../Common/index.less'

// 虚拟滚动列表
const Virtual = () => {
  let [queryParams, setQueryParams] = useState(null)

  // Expose
  const mainRef = useRef(null)

  return (
    <Layout className="full">
      {/* 搜索栏 */}
      <Header
        queryParams={queryParams}
        onSearch={(newQueryParams) => {
          queryParams = newQueryParams
          setQueryParams(queryParams)
          mainRef.current.reload()
        }}
      />

      {/* 列表 */}
      <Main
        ref={mainRef}
        virtual={{
          getItemHeight: (item) => {
            if (item?.virtualData?.type === 'group') {
              return 33
            }
            return 71
          }
        }}
        loadList={({ page, action }) => {
          console.log('action:', action)
          return queryData({ page: page, ...queryParams })
        }}
      />
    </Layout>
  )
}

export default Virtual
