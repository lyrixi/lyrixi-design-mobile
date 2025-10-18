import React, { useState, useRef } from 'react'
import { Icon, Page, Modal, FooterBar, Button } from 'lyrixi-design-mobile'

export default () => {
  const referenceRef = useRef(null)
  const modalRef = useRef(null)
  const [open, setOpen] = useState(false)

  function handleToggle() {
    setOpen(!open)
  }

  return (
    <Page>
      <Page.Header className="text-center">FilterModal</Page.Header>
      <Page.Main className="bg-white">
        <div className="demo-title" onClick={handleToggle}>
          FilterModal open toggle
        </div>
        <Modal.FilterModal
          ref={modalRef}
          open={open}
          onClose={() => setOpen(false)}
          footerRender={({ close }) => (
            <Page.Footer>
              <FooterBar>
                <FooterBar.Tab
                  iconRender={() => <Icon className="seeds-icon-config"></Icon>}
                  name="Setting"
                  onClick={() => {
                    console.log('setting')
                  }}
                />
                <FooterBar.Button
                  onClick={() => {
                    console.log('reset')
                  }}
                >
                  Reset
                </FooterBar.Button>
                <FooterBar.Button
                  className="primary"
                  onClick={() => {
                    console.log('confirm')
                    close()
                  }}
                >
                  Ok
                </FooterBar.Button>
              </FooterBar>
            </Page.Footer>
          )}
        >
          <div className="bg-white p-4" style={{ minHeight: '300px' }}>
            <h3 className="mb-3">筛选条件</h3>
            <div className="mb-3">
              <label className="form-label">价格范围</label>
              <div className="d-flex gap-2">
                <input type="number" className="form-control" placeholder="最低价" />
                <span className="align-self-center">-</span>
                <input type="number" className="form-control" placeholder="最高价" />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">品牌</label>
              <div className="d-flex flex-wrap gap-2">
                <Button size="sm">苹果</Button>
                <Button size="sm">华为</Button>
                <Button size="sm">小米</Button>
                <Button size="sm">三星</Button>
              </div>
            </div>
            <div>
              <label className="form-label">排序</label>
              <select className="form-select">
                <option>默认排序</option>
                <option>价格从低到高</option>
                <option>价格从高到低</option>
                <option>销量优先</option>
              </select>
            </div>
          </div>
        </Modal.FilterModal>
      </Page.Main>
    </Page>
  )
}
