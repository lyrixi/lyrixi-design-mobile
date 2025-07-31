import React, { useRef, useState } from 'react'
import { Layout, List } from 'lyrixi-design-mobile'
import listData from './../listData'
import VConsole from 'vconsole'

new VConsole()
export default () => {
  const mainRef = useRef(null)
  const [value, setValue] = useState(null)

  console.log(mainRef.current)
  return (
    <Layout className="full">
      <Layout.Header className="text-center">Layout vertical</Layout.Header>
      <List.Main
        ref={mainRef}
        layout="vertical"
        // true: 默认Card包裹Item
        wrapper={true}
        // pagination
        value={value}
        reload={true}
        loadList={() => {
          return listData
          // return 'errror message'
        }}
        onChange={(value) => {
          console.log(value)
          setValue(value)
        }}
      />
      <Layout.Header className="text-center">Layout horizontal</Layout.Header>
      <List.Main
        ref={mainRef}
        prepend={({ list, value, onChange, pagination }) => {
          // console.log({ list, value, onChange, pagination })
          return <div>Custom prepend</div>
        }}
        layout="horizontal"
        // true: 默认Card包裹Item
        wrapper={true}
        // pagination
        value={value}
        reload={true}
        loadList={() => {
          return listData
          // return 'errror message'
        }}
        onChange={(value) => {
          console.log(value)
          setValue(value)
        }}
      />
    </Layout>
  )
}
