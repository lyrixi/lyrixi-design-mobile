import React, { useState, useRef } from 'react'
import { Page, Modal, Button } from 'lyrixi-design-mobile'

export default () => {
  const [open, setOpen] = useState(false)

  function handleToggle() {
    setOpen(!open)
  }

  return (
    <Page>
      <Page.Header className="text-center">Modal</Page.Header>
      <Page.Main className="bg-white">
        <div className="demo-title" onClick={handleToggle}>
          Modal open toggle
        </div>
        <Modal open={open} onClose={() => setOpen(false)} animation="zoom" maskClosable={true}>
          <div className="bg-white" style={{ height: '300px', width: '300px' }}>
            Content
          </div>
        </Modal>
      </Page.Main>
    </Page>
  )
}
