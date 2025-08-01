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
    <div id="root" className="position-relative" style={{ height: '300px' }}>
      <Layout className="full">
        <Layout.Header className="text-center">Modal</Layout.Header>
        <Layout.Main className="bg-white">
          <div ref={referenceRef} className="demo-title" onClick={handleToggle}>
            Modal visible toggle
          </div>
          <Modal
            referenceDOM={referenceRef.current}
            // 这里可以更换动画方向
            animation="slideDown"
            ref={modalRef}
            visible={visible}
            onVisibleChange={setVisible}
          >
            <div className="bg-white" style={{ height: '300px' }}>
              Test
            </div>
          </Modal>
        </Layout.Main>
      </Layout>
    </div>
  )
}
