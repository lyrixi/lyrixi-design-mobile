import React, { useEffect, useState, useRef } from 'react'
import { MathUtil, Input } from 'lyrixi-design-mobile'

export default () => {
  const inputNumberRef = useRef(null)
  const [value, setValue] = useState(1)

  useEffect(() => {
    console.log(inputNumberRef.current)
  }, [])
  return (
    <>
      <Input.Number
        ref={inputNumberRef}
        // inputMode="numeric"
        // inputMode="decimal"
        // pattern="[0-9]+"
        placeholder="Input"
        value={value}
        precision={0}
        maxLength={18}
        trim={true}
        allowClear
        clear={({ clearable, triggerClear }) => {
          return clearable ? <Input.IconClear onClick={triggerClear} /> : <Input.IconRightArrow />
        }}
        formatter={(currentValue) => {
          return '$' + MathUtil.thousands(currentValue)
        }}
        onChange={(val) => {
          console.log('得到的值:', val)
          setValue(val)
        }}
      />
    </>
  )
}
