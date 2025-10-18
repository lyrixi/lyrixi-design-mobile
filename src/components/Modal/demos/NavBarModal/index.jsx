import React, { useState, useRef } from 'react'
import { Page, Modal, Button, Input } from 'lyrixi-design-mobile'

export default () => {
  const modalRef = useRef(null)
  const [open, setOpen] = useState(false)

  function handleToggle() {
    setOpen(!open)
  }

  function handleOk({ close }) {
    console.log('确定按钮被点击')
    close()
  }

  function handleCancel() {
    console.log('取消按钮被点击')
    setOpen(false)
  }

  return (
    <Page>
      <Page.Header className="text-center">NavBarModal</Page.Header>
      <Page.Main className="bg-white">
        <div className="demo-title" onClick={handleToggle}>
          NavBarModal open toggle
        </div>
        <Modal.NavBarModal
          ref={modalRef}
          open={open}
          onClose={() => setOpen(false)}
          title="编辑信息"
          ok="保存"
          cancel="取消"
          onOk={handleOk}
          onCancel={handleCancel}
          animation="slideUp"
        >
          <div className="bg-white p-4" style={{ minHeight: '300px' }}>
            <div className="mb-3">
              <label className="form-label">姓名</label>
              <Input placeholder="请输入姓名" />
            </div>
            <div className="mb-3">
              <label className="form-label">邮箱</label>
              <Input type="email" placeholder="请输入邮箱" />
            </div>
            <div className="mb-3">
              <label className="form-label">电话</label>
              <Input type="tel" placeholder="请输入电话号码" />
            </div>
            <div>
              <label className="form-label">备注</label>
              <textarea className="form-control" rows="3" placeholder="请输入备注信息" />
            </div>
          </div>
        </Modal.NavBarModal>
      </Page.Main>
    </Page>
  )
}
