import React, { useState, useRef } from 'react'
import { Layout, Modal } from 'lyrixi-design-mobile'

export default () => {
  const referenceRef = useRef(null)
  const modalRef = useRef(null)
  const [visible, setVisible] = useState(false)
  function handleToggle() {
    setVisible(!visible)
  }

  return (
    <Layout className="full">
      <Layout.Header className="text-center">Modal</Layout.Header>
      <Layout.Main className="bg-white">
        <div ref={referenceRef} className="demo-title" onClick={handleToggle}>
          Modal visible toggle
        </div>
        <Modal.NavBarModal
          visible={visible}
          onOk={() => {
            console.log('Ok')
          }}
          onCancel={() => {
            console.log('Cancel')
          }}
          onVisibleChange={(visible) => {
            console.log(visible)
            setVisible(visible)
          }}
        >
          <div className="bg-white" style={{ height: '300px' }}>
            Test
          </div>
        </Modal.NavBarModal>
      </Layout.Main>
    </Layout>
  )
}
