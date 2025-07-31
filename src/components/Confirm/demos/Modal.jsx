import React, { useState, useEffect } from 'react'
import { Layout, Confirm, Button } from 'lyrixi-design-mobile'

export default () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Layout>
        <Layout.Main>
          <Button className="flex primary" onClick={() => setVisible(true)}>
            Click to show confirm
          </Button>
        </Layout.Main>
      </Layout>
      <Confirm.Modal visible={visible} onVisibleChange={setVisible}>
        <Confirm.Header>
          <Confirm.Icon className="seeds-icon-config color-primary" />
          <Confirm.Title>Title</Confirm.Title>
        </Confirm.Header>
        <Confirm.Main>Content</Confirm.Main>
        <Confirm.Footer>
          <Confirm.Button onClick={() => setVisible(false)}>Button1</Confirm.Button>
          <Confirm.Button className="primary" onClick={() => setVisible(false)}>
            Button2
          </Confirm.Button>
        </Confirm.Footer>
      </Confirm.Modal>
    </>
  )
}
