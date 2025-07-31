import React, { useState, useRef } from 'react'
// 第三方库导入
import { IndexBar, Layout } from 'lyrixi-design-mobile'

// 项目内部模块导入
import { queryData } from './../Common/api'
import Header from './../Common/Header'
import Main from './../Common/Main'

// 样式图片等资源文件导入
import './../Common/index.less'

// IndexBar列表示例
const IndexBarList = () => {
  const mainRef = useRef(null)
  let [queryParams, setQueryParams] = useState(null)
  const [anchors, setAnchors] = useState(null)
  const [indexBarVisible, setIndexBarVisible] = useState(undefined)

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
          return queryData(
            { page: page, rows: 20, ...queryParams },
            {
              // 请求完成, 显示IndexBar
              success: () => {
                setIndexBarVisible(true)
              }
            }
          )
        }}
        onLoad={() => {
          console.log('更新IndexBar数据...')
          // 虚拟滚动获取anchors
          let newAnchors = mainRef?.current?.getAnchors?.()
          setAnchors(newAnchors)
        }}
      />

      {indexBarVisible && (
        <IndexBar
          // 虚拟滚动
          anchors={anchors}
          onTouchAnchor={mainRef?.current?.scrollToAnchor}
          // 实体滚动
          scrollerDOM={mainRef?.current?.rootDOM}
        ></IndexBar>
      )}
    </Layout>
  )
}

export default IndexBarList
