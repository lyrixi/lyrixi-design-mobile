import React, { useState } from 'react'
import { Input } from 'lyrixi-design-mobile'

export default () => {
  const [value, setValue] = useState('abcdefgAbcd$')
  return (
    <>
      <Input.PasswordStrength
        value={value}
        onChange={(val) => {
          console.log(val)
          setValue(val)
        }}
      />
    </>
  )
}
