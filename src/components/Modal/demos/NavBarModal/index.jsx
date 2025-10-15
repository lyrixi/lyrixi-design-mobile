import React, { useState, useRef } from 'react'
import { Page, Modal } from 'lyrixi-design-mobile'

export default () => {
  const referenceRef = useRef(null)
  const modalRef = useRef(null)
  const [open, setOpen] = useState(false)
  function handleToggle() {
    setOpen(!open)
  }

  return (
    <Page>
      <Page.Header className="text-center">Modal</Page.Header>
      <Page.Main className="bg-white">
        <div ref={referenceRef} className="demo-title" onClick={handleToggle}>
          Modal open toggle
        </div>
        <Modal.NavBarModal
          open={open}
          onOk={() => {
            console.log('Ok')
          }}
          onCancel={() => {
            console.log('Cancel')
          }}
          onOpen={() => {
            console.log(true)
            setOpen(true)
          }}
          onClose={() => {
            console.log(false)
            setOpen(false)
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
