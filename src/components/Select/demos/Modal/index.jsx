import React, { useRef, useState } from 'react'
import { Select } from 'lyrixi-design-mobile'

export default () => {
  const selectRef = useRef(null)
  const [value, setValue] = useState([
    {
      id: '1',
      name: '选项1'
    }
  ])
  return (
    <>
      <Select.Modal
        ref={selectRef}
        value={value}
        list={[
          {
            id: '1',
            name: '选项1'
          },
          {
            id: '2',
            name: '选项2'
          }
        ]}
        visible={true}
        onChange={(newValue) => {
          console.log('onChange:', newValue)
          setValue(newValue)
        }}
        onVisibleChange={(visible) => {
          console.log(visible)
        }}
      />
    </>
  )
}
