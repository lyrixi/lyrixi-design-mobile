import React, { useEffect, useState, useRef } from 'react'
import { Layout, MathUtil, Input } from 'lyrixi-design-mobile'
// import VConsole from 'vconsole'

// const vConsole = new VConsole()

export default () => {
  const inputNumberRef = useRef(null)
  const [value, setValue] = useState('1a')

  useEffect(() => {
    console.log(inputNumberRef.current)
  }, [])
  return (
    <Layout className="full">
      <Layout.Main>
        <Input.Number
          ref={inputNumberRef}
          inputMode="numeric"
          // inputMode="decimal"
          // pattern="[0-9]+"
          placeholder="Input"
          value={value}
          // precision={0}
          maxLength={18}
          trim={true}
          allowClear
          clear={({ clearable, triggerClear }) => {
            return clearable ? <Input.IconClear onClick={triggerClear} /> : <Input.IconRightArrow />
          }}
          // formatter={(currentValue) => {
          //   return '$' + MathUtil.thousands(currentValue)
          // }}
          onChange={(val) => {
            console.log('得到的值:', val)
            setValue(val)
          }}
        />

        <Input.Number
          value={value}
          onChange={setValue}
          formatter={(currentValue) => {
            return '$' + MathUtil.thousands(currentValue)
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
