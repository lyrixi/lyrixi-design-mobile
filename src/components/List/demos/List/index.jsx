import React, { useRef, useState } from 'react'
import { Layout, List, Checkbox, Button } from 'lyrixi-design-mobile'
import Wrapper from './Wrapper'
import listData from './../listData'

export default () => {
  const listRef = useRef(null)
  const [value, setValue] = useState(null)

  console.log(listRef.current)
  return (
    <Layout className="full">
      <Layout.Main>
        <List
          ref={listRef}
          checkable
          checkboxPosition="right"
          checkboxProps={{
            icon: 'tick'
          }}
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
          // checkbox={({ checked }) => {
          //   return <Checkbox checked={checked} />
          // }}
          // true: 默认Card包裹Item
          wrapper={true}
          // wrapper={Wrapper}
          // wrapper={function ({ children }) {
          //   return <div className="list-wrapper-custom">{children}</div>
          // }}
        />
      </Layout.Main>
    </Layout>
  )
}
