import React, { useState, useRef, useEffect } from 'react'
import _ from 'lodash'
import { Layout, Input } from 'lyrixi-design-mobile'

export default () => {
  const [value, setValue] = useState('keyword')

  return (
    <Layout className="full">
      <Layout.Main>
        <Input.Search
          trim
          precision={2}
          placeholder="Search"
          value={value}
          allowClear
          onSearch={(val) => {
            console.log(val)
            setValue(val)
          }}
        />
        Your search keyword: {value}
      </Layout.Main>
    </Layout>
  )
}
