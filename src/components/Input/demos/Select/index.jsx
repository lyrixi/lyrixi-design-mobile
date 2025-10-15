import React from 'react'
import { Page, Input, Card, Divider } from 'lyrixi-design-mobile'

export default () => {
  const selectRef = React.useRef(null)
  console.log('selectRef', selectRef)
  return (
    <Page>
      <Page.Header className="text-center">Modal</Page.Header>
      <Page.Main className="bg-white">
        <Card>
          <Divider>Only Title</Divider>
          <Input.Select
            ref={selectRef}
            allowClear
            value={[{ id: '1', name: '1', allowClear: true }]}
          />
        </Card>
      </Page.Main>
    </Page>
  )
}
