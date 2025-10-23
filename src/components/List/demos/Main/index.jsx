import React, { useRef, useState } from 'react'
import { Page, List } from 'lyrixi-design-mobile'
import listData from './../listData'
import VConsole from 'vconsole'

new VConsole()
export default () => {
  const mainRef = useRef(null)
  const [value, setValue] = useState(null)

  console.log(mainRef.current)
  return (
    <Page>
      <Page.Header className="text-center">Layout vertical</Page.Header>
      <List.Main
        ref={mainRef}
        itemLayout="vertical"
        // pagination
        value={value}
        loadData={({ page }) => {
          // 兼容演示：将原有数组封装为新返回结构
          return {
            status: listData?.length ? undefined : 'empty',
            message: '',
            page: page,
            rows: 20,
            list: listData,
            totalPage: undefined,
            totalRows: listData?.length || 0
          }
        }}
        onChange={(value) => {
          console.log(value)
          setValue(value)
        }}
      />
    </Page>
  )
}
