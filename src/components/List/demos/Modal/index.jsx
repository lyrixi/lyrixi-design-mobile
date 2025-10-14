import React, { useState } from 'react'
import { Page, List } from 'lyrixi-design-mobile'
import list from './../data'

export default () => {
  const [value, setValue] = useState(null)
  return (
    <Page>
      <Page.Header className="text-center">List.Modal</Page.Header>
      <Page.Main>
        <List.Modal
          open={true}
          pagination
          value={value}
          loadList={() => list}
          onChange={(value) => {
            console.log(value)
            setValue(value)
          }}
          onClose={() => {
            console.log('onClose')
          }}
          onOpen={() => {
            console.log('onOpen')
          }}
        />
      </Page.Main>
    </Page>
  )
}
