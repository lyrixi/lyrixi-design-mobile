import React, { useState } from 'react'
import { Picker } from 'lyrixi-design-mobile'

export default () => {
  const list = [
    { id: '1', name: '1' },
    { id: '2', name: '2' }
  ]
  const [value, setValue] = useState(null)
  return (
    <>
      <Picker.Main
        value={value}
        list={list}
        onChange={(newValue) => {
          console.log('onChange:', newValue)
          setValue(newValue)
        }}
      />
    </>
  )
}
