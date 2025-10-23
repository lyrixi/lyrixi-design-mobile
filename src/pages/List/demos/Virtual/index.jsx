import React, { useState, useRef } from 'react'
// 第三方库导入
import { Page } from 'lyrixi-design-mobile'

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
    <Page className="full">
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
        loadData={async ({ list, action }) => {
          console.log('action:', action)
          const newList = await queryData({ page: 1, rows: 20, ...queryParams })
          // 兼容老的 queryData 返回数组，这里转换为新结构
          return {
            status: Array.isArray(newList) && newList.length === 0 ? 'empty' : undefined,
            message: '',
            list: Array.isArray(newList) ? newList : []
          }
        }}
      />
    </Page>
  )
}

export default Virtual
