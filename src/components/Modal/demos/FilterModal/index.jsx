import React, { useState, useRef } from 'react'
import { Page, Modal, FooterBar } from 'lyrixi-design-mobile'

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
        <Modal.FilterModal
          visible={true}
          footer={({ close }) => (
            <Page.Footer>
              <FooterBar>
                <FooterBar.Tab
                  icon="seeds-icon-config"
                  name="设置"
                  onClick={() => {
                    console.log('setting')
                  }}
                />
                <FooterBar.Button
                  onClick={() => {
                    console.log('reset')
                  }}
                >
                  重置
                </FooterBar.Button>
                <FooterBar.Button
                  className="primary"
                  onClick={() => {
                    console.log('confirm')
                    close()
                  }}
                >
                  确定
                </FooterBar.Button>
              </FooterBar>
            </Page.Footer>
          )}
        >
          <div className="bg-white" style={{ height: '300px' }}>
            Test
          </div>
        </Modal.FilterModal>
      </Page.Main>
    </Page>
  )
}
