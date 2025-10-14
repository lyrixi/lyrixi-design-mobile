import React from 'react'
import { Page, Modal, Divider } from 'lyrixi-design-mobile'

export default () => {
  return (
    <Page>
      <Page.Main className="bg-white">
        <Modal.DropdownCombo
          comboChildren={<Divider>Modal.DropdownCombo Left</Divider>}
          onClose={() => {
            console.log('onClose')
          }}
          onOpen={() => {
            console.log('onOpen')
          }}
          left={12}
        >
          <div className="bg-white" style={{ height: '300px' }}>
            Modal Content Left
          </div>
        </Modal.DropdownCombo>

        <Modal.DropdownCombo
          comboChildren={<Divider>Modal.DropdownCombo Right</Divider>}
          onClose={() => {
            console.log('onClose')
          }}
          onOpen={() => {
            console.log('onOpen')
          }}
          right={12}
        >
          <div className="bg-white" style={{ height: '300px' }}>
            Modal Content Right
          </div>
        </Modal.DropdownCombo>

        <Modal.DropdownCombo
          comboChildren={<Divider>Modal.DropdownCombo Center</Divider>}
          onClose={() => {
            console.log('onClose')
          }}
          onOpen={() => {
            console.log('onOpen')
          }}
          modalStyle={{
            width: '100%'
          }}
        >
          <div className="bg-white" style={{ height: '300px' }}>
            Modal Content Left
          </div>
        </Modal.DropdownCombo>
      </Page.Main>
    </Page>
  )
}
