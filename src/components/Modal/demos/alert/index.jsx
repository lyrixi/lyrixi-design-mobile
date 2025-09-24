import React from 'react'
import { Layout, Message, Button } from 'lyrixi-design-mobile'

export default () => {
  function handleToggle() {
    Message.open({
      content: 'alert content',
      buttons: [{
        name: '确定',
        className: 'primary',
        onClick: () => true
      }]
    })
  }

  return (
    <Layout className="full">
      <Layout.Header className="text-center">Message.open</Layout.Header>
      <Layout.Main className="bg-white">
        <Button className="flex" color="primary" size="l" onClick={handleToggle}>
          Message visible toggle
        </Button>
      </Layout.Main>
    </Layout>
  )
}
