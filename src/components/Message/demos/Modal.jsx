import React, { useState, useEffect } from 'react'
import { Layout, Message, Button } from 'lyrixi-design-mobile'

export default () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Layout>
        <Layout.Main>
          <Button className="flex" color="primary" onClick={() => setVisible(true)}>
            Click to show message
          </Button>
        </Layout.Main>
      </Layout>
      <Message.Modal visible={visible} onVisibleChange={setVisible}>
        <Message.Header>
          <Message.Icon className="seeds-icon-config color-primary" />
          <Message.Title>Title</Message.Title>
        </Message.Header>
        <Message.Main>Content</Message.Main>
        <Message.Footer>
          <Message.Button onClick={() => setVisible(false)}>Button1</Message.Button>
          <Message.Button className="primary" onClick={() => setVisible(false)}>
            Button2
          </Message.Button>
        </Message.Footer>
      </Message.Modal>
    </>
  )
}
