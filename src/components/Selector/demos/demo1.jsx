import React, { useState } from 'react'
import { Page, Selector, Divider } from 'lyrixi-design-mobile'

export default () => {
  const [value, setValue] = useState([
    {
      id: '1',
      name: '选项1'
    }
  ])

  const [value2, setValue2] = useState([
    {
      id: '1',
      name: '选项1'
    }
  ])

  return (
    <Page className="full bg-white">
      <Page.Main>
        <Divider>基础示例</Divider>
        <Selector
          columns={3}
          // multiple
          allowClear
          placeholder="Please select"
          value={value}
          list={[
            {
              id: '1',
              name: '选项1'
            },
            {
              id: '2',
              name: 'Option 2 is very very very very very long'
            },
            {
              id: '3',
              name: '选项3'
            },
            {
              id: '4',
              name: '选项4'
            },
            {
              id: '5',
              name: '选项5'
            }
          ]}
          // multiple={true}
          onChange={setValue}
        />

        <Divider>带省略功能</Divider>
        <Selector
          columns={3}
          allowClear
          placeholder="Please select"
          value={value2}
          list={[
            {
              id: '1',
              name: '选项1'
            },
            {
              id: '2',
              name: '选项2'
            },
            {
              id: '3',
              name: '选项3'
            },
            {
              id: '4',
              name: '选项4'
            },
            {
              id: '5',
              name: '选项5'
            },
            {
              id: '6',
              name: '选项6'
            },
            {
              id: '7',
              name: '选项7'
            },
            {
              id: '8',
              name: '选项8'
            },
            {
              id: '9',
              name: '选项9'
            },
            {
              id: '10',
              name: '选项10'
            }
          ]}
          ellipsis={{ max: 5 }}
          onChange={setValue2}
        />
      </Page.Main>
    </Page>
  )
}
