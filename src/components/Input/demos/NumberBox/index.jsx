import React, { useState } from 'react'
import { MathUtil, Input } from 'lyrixi-design-mobile'

export default () => {
  const [value, setValue] = useState('2.10')
  return (
    <>
      <Input.NumberBox
        className="xl"
        placeholder="Size xl"
        value={value}
        onChange={setValue}
        precision={2}
        maxLength={8}
        min={0.1}
        trim={true}
        allowClear
      />
      <Input.NumberBox
        className="l"
        placeholder="Size l"
        value={value}
        onChange={setValue}
        precision={2}
        maxLength={8}
        min={0.1}
        trim={true}
        allowClear
      />
      <Input.NumberBox
        placeholder="Size m"
        value={value}
        onChange={setValue}
        precision={2}
        maxLength={8}
        min={0.1}
        trim={true}
        allowClear
        formatter={(num) => {
          return '$' + MathUtil.thousands(Number(num).toFixed(2))
        }}
        // onChange={(val) => {
        //   console.log('得到的值:', val)
        //   setValue(val)
        // }}
      />
      <Input.NumberBox
        className="s"
        placeholder="Size s"
        value={value}
        onChange={setValue}
        precision={2}
        maxLength={8}
        min={0.1}
        trim={true}
        // allowClear
      />
    </>
  )
}
