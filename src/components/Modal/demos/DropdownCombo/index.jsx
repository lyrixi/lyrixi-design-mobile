import React from 'react'
import { Layout, Modal, Divider } from 'lyrixi-design-mobile'

export default () => {
  return (
    <Layout className="full">
      <Layout.Main className="bg-white">
        <Modal.DropdownCombo
          comboChildren={<Divider>Modal.DropdownCombo Left</Divider>}
          onVisibleChange={(visible) => {
            console.log('visible:', visible)
          }}
          left={12}
        >
          <div className="bg-white" style={{ height: '300px' }}>
            Modal Content Left
          </div>
        </Modal.DropdownCombo>

        <Modal.DropdownCombo
          comboChildren={<Divider>Modal.DropdownCombo Right</Divider>}
          onVisibleChange={(visible) => {
            console.log('visible:', visible)
          }}
          right={12}
        >
          <div className="bg-white" style={{ height: '300px' }}>
            Modal Content Right
          </div>
        </Modal.DropdownCombo>

        <Modal.DropdownCombo
          comboChildren={<Divider>Modal.DropdownCombo Center</Divider>}
          onVisibleChange={(visible) => {
            console.log('visible:', visible)
          }}
          modalStyle={{
            width: '100%'
          }}
        >
          <div className="bg-white" style={{ height: '300px' }}>
            Modal Content Left
          </div>
        </Modal.DropdownCombo>
      </Layout.Main>
    </Layout>
  )
}
