import React, { useState } from 'react'
import { Input } from 'lyrixi-design-mobile'

export default () => {
  const [value, setValue] = useState('')
  return (
    <>
      <Input.Textarea
        value={value}
        allowClear
        formatter={(newValue) => {
          return '$' + newValue
        }}
        style={{ backgroundColor: '#f8f8f8' }}
        onChange={(val) => {
          console.log(val)
          setValue(val)
        }}
      />
    </>
  )
}
