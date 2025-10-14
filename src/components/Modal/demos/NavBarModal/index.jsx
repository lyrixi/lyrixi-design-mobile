import React, { useState, useRef } from 'react'
import { Page, Modal } from 'lyrixi-design-mobile'

export default () => {
  const referenceRef = useRef(null)
  const modalRef = useRef(null)
  const [visible, setVisible] = useState(false)
  function handleToggle() {
    setVisible(!visible)
  }

  return (
    <Page>
      <Page.Header className="text-center">Modal</Page.Header>
      <Page.Main className="bg-white">
        <div ref={referenceRef} className="demo-title" onClick={handleToggle}>
          Modal visible toggle
        </div>
        <Modal.NavBarModal
          open={visible}
          onOk={() => {
            console.log('Ok')
          }}
          onCancel={() => {
            console.log('Cancel')
          }}
          onOpen={() => {
            console.log(true)
            setVisible(true)
          }}
          onClose={() => {
            console.log(false)
            setVisible(false)
          }}
        >
          <div className="bg-white" style={{ height: '300px' }}>
            Test
          </div>
        </Modal.NavBarModal>
      </Page.Main>
    </Page>
  )
}
