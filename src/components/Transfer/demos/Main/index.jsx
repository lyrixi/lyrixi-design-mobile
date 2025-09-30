import React, { useState } from 'react'
import { Page } from 'lyrixi-design-mobile'
import { Transfer } from 'lyrixi-design-mobile'
// import Transfer from 'library/components/Transfer'

export default () => {
  const [value, setValue] = useState([
    { id: '1', name: '1' },
    { id: '2', name: '2' }
  ])
  return (
    <Page>
      <Page.Header className="text-center">Transfer.Main</Page.Header>
      <div className="demo-title">Transfer List</div>
      <Transfer.Main
        list={[
          { id: '1', name: '1' },
          { id: '2', name: '2' },
          { id: '3', name: '3' },
          { id: '4', name: '4' },
          { id: '5', name: '5' },
          { id: '6', name: '6' }
        ]}
        value={value}
        titles={['标题1', '标题2']}
        onChange={(newValue) => {
          console.log(newValue)
          setValue(newValue)
        }}
      />
    </Page>
  )
}
