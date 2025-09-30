import React from 'react'

import { Card, Page, Modal, Divider } from 'lyrixi-design-mobile'

export default () => {
  return (
    <Page>
      <Page.Main>
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
      </Page.Main>
    </Page>
  )
}
