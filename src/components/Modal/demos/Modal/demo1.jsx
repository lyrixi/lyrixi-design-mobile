import React, { useState, useRef } from 'react'
import { Page, Modal, Button } from 'lyrixi-design-mobile'

export default () => {
  const modalRef = useRef(null)
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
        <Modal
          ref={modalRef}
          open={open}
          onClose={() => setOpen(false)}
          animation="zoom"
          maskClosable={true}
        >
          <div className="bg-white p-4" style={{ minHeight: '200px' }}>
            <h3 className="mb-3">Modal 标题</h3>
            <p className="mb-4">这是一个基础的 Modal 示例，支持多种动画效果和遮罩点击关闭。</p>
            <div className="d-flex justify-content-end">
              <Button className="me-2" onClick={() => setOpen(false)}>
                取消
              </Button>
              <Button type="primary" onClick={() => setOpen(false)}>
                确定
              </Button>
            </div>
          </div>
        </Modal>
      </Page.Main>
    </Page>
  )
}
