import React, { useState } from 'react'
import { Layout, Card, Divider, Input, Keyboard } from 'lyrixi-design-mobile'

export default () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  return (
    <Layout className="full">
      <Layout.Main>
        <Card>
          <Divider>Common</Divider>
          <Input.Node
            value={value}
            allowClear
            placeholder="Input"
            onClick={() => setOpen(true)}
            onChange={(val) => {
              console.log('onChange:', val)
              setValue(val)
            }}
          />
        </Card>

        <Keyboard.Number
          open={open}
          value={value}
          onChange={(val) => {
            console.log('onChange:', val)
            setValue(val)
          }}
          onOk={(val) => {
            console.log('确定:', val)
            setValue(val)
          }}
          onCancel={() => {
            console.log('取消')
          }}
          onOpen={() => {
            console.log('键盘打开')
          }}
          onClose={() => {
            console.log('键盘关闭')
            setOpen(false)
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
