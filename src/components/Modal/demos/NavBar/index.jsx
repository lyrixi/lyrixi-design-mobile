import React from 'react'

import { Card, Layout, Modal, Divider } from 'lyrixi-design-mobile'

export default () => {
  return (
    <Layout className="full">
      <Layout.Main>
        <Card>
          <Divider>Only Title</Divider>
          <Modal.NavBar ok={null} cancel={null} title="Title" />
        </Card>
        <Card>
          <Divider>Only Cancel</Divider>
          <Modal.NavBar ok={null} title="Title" />
        </Card>
        <Card>
          <Divider>Ok and Cancel</Divider>
          <Modal.NavBar title="Title" />
        </Card>
      </Layout.Main>
    </Layout>
  )
}
