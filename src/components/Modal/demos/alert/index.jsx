import React from 'react'
import { Page, Message, Button } from 'lyrixi-design-mobile'

export default () => {
  function handleToggle() {
    Message.open({
      content: 'alert content',
      buttons: [
        {
          name: '确定',
          className: 'primary',
          onClick: () => true
        }
      ]
    })
  }

  return (
    <Page>
      <Page.Header className="text-center">Message.open</Page.Header>
      <Page.Main className="bg-white">
        <Button className="flex" color="primary" size="l" onClick={handleToggle}>
          Message visible toggle
        </Button>
      </Page.Main>
    </Page>
  )
}
