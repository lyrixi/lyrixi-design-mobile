import React, { useState, useRef } from 'react'
import { Page, Modal } from 'lyrixi-design-mobile'

export default () => {
  const modalRef = useRef(null)
  const [open, setOpen] = useState(false)
  function handleToggle() {
    setOpen(!open)
  }

  return (
    <div id="root" className="position-relative" style={{ height: '300px' }}>
      <Page>
        <Page.Header className="text-center">Modal</Page.Header>
        <Page.Main className="bg-white">
          <div className="demo-title" onClick={handleToggle}>
            Modal open toggle
          </div>
          <Modal
            // 这里可以更换动画方向
            animation="slideDown"
            ref={modalRef}
            open={open}
            onClose={() => setOpen(false)}
          >
            <div className="bg-white" style={{ height: '300px' }}>
              Test
            </div>
          </Modal>
        </Page.Main>
      </Page>
    </div>
  )
}
