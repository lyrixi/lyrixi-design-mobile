import React, { useState } from 'react'
import { Layout, Divider, Input } from 'lyrixi-design-mobile'

export default () => {
  const [value, setValue] = useState('')
  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>Common</Divider>
        <Input.AutoFit
          placeholder="AutoFit"
          inputProps={{
            style: {
              maxHeight: '500px'
            }
          }}
          style={{ backgroundColor: '#f8f8f8' }}
          value={value}
          onChange={setValue}
          allowClear={true}
          onBlur={() => {
            console.log('触发blur')
          }}
        />

        <Divider>Formatter</Divider>
        <Input.AutoFit
          placeholder="AutoFit"
          inputProps={{
            style: {
              maxHeight: '500px'
            }
          }}
          formatter={(newValue) => {
            return '$' + newValue
          }}
          style={{ backgroundColor: '#f8f8f8' }}
          value={value}
          onChange={setValue}
          allowClear={true}
          onBlur={() => {
            console.log('触发blur')
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
