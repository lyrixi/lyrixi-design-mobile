import React, { useState, useRef, useEffect } from 'react'
import _ from 'lodash'
import { Layout, Divider, Input } from 'lyrixi-design-mobile'

export default () => {
  const inputTextRef = useRef(null)
  const [value, setValue] = useState('中华人民共和中华人民中华人民共和中华人民')

  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>Common</Divider>
        <Input.Text
          trim
          ref={inputTextRef}
          precision={2}
          // readOnly
          value={value}
          // maxLength={10}
          rightIcon={({ value }) => {
            return value ? null : <Input.IconRightArrow />
          }}
          allowClear
          clear={({ triggerClear }) => {
            return !_.isEmpty(value) ? (
              <Input.IconClear onClick={triggerClear} />
            ) : (
              <Input.IconRightArrow />
            )
          }}
          onChange={(val) => {
            console.log(val)
            setValue(val)
          }}
        />

        <Divider>Formatter</Divider>
        <Input.Text
          value={value}
          allowClear
          onChange={(val) => {
            console.log(val)
            setValue(val)
          }}
          formatter={(currentValue) => {
            return '$' + currentValue
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
