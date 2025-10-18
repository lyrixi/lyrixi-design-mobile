import React, { useState, useRef } from 'react'
import { Page, Modal, Button } from 'lyrixi-design-mobile'

export default () => {
  const referenceRef = useRef(null)
  const [open, setOpen] = useState(false)

  function handleToggle() {
    setOpen(!open)
  }

  return (
    <Page>
      <Page.Header className="text-center">DropdownModal</Page.Header>
      <Page.Main className="bg-white">
        <div ref={referenceRef} className="demo-title" onClick={handleToggle}>
          DropdownModal open toggle
        </div>
        <Modal.DropdownModal
          open={open}
          onClose={() => setOpen(false)}
          referenceDOM={referenceRef.current}
          animation="slideDown"
        >
          <div style={{ height: '150px' }}>Content</div>
        </Modal.DropdownModal>
      </Page.Main>
    </Page>
  )
}
