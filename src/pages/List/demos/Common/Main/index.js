import React, { forwardRef } from 'react'
// 第三方库导入
import { List } from 'lyrixi-design-mobile'

// 公共组件导入

// 内部组件导入
import mainLoadingRender from './mainLoadingRender'

// 普通列表
const Main = (
  {
    // 虚拟滚动条(不常用)
    virtual,
    // 缓存(不常用)
    cache,
    // 加载完成事件(不常用)
    onLoad,
    // 必传参数
    loadList
  },
  ref
) => {
  return (
    <List.Main
      ref={ref}
      className="list-pageName"
      virtual={virtual}
      cache={cache}
      loading={mainLoadingRender}
      // 初始化不发请求, 可自行决定请求的时机:mainRef.current.reload('load'), 通常用于Modal中, 显示再发请求
      // pageinitialLoad={false}
      // 开启分页, 并传入每页条数
      pagination={{
        rows: 20
      }}
      loadList={loadList}
      onLoad={onLoad}
    />
  )
}

export default forwardRef(Main)
