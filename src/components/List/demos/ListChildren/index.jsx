import React, { useRef, useState } from 'react'
import { Page, List } from 'lyrixi-design-mobile'
import listData from './listData'

export default () => {
  const listRef = useRef(null)
  const [value, setValue] = useState(null)

  console.log(listRef.current)
  return (
    <Page>
      <Page.Main>
        <List
          ref={listRef}
          checkable
          allowClear
          multiple={true}
          value={value}
          list={listData}
          onChange={(newValue) => {
            console.log('onChange:', newValue)
            setValue(newValue)
          }}
          // Item 配置
          layout="vertical"
        />
      </Page.Main>
    </Page>
  )
}
