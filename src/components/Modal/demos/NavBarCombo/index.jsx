import React from 'react'
import { Page, Modal, Card, Divider } from 'lyrixi-design-mobile'

export default () => {
  const navBarComboRef = React.useRef(null)
  console.log('navBarComboRef', navBarComboRef)
  return (
    <Page>
      <Page.Header className="text-center">Modal</Page.Header>
      <Page.Main className="bg-white">
        <Card>
          <Divider>Only Title</Divider>
          <Modal.NavBarCombo
            ref={navBarComboRef}
            comboChildren={() => 'Click to show NavModal'}
            title="Title"
            ok={null}
            cancel={null}
            onOk={({ close }) => {
              console.log('Ok')
              close()
            }}
            onCancel={() => {
              console.log('Cancel')
            }}
            onOpen={() => {
              console.log('open:', true)
            }}
            onClose={() => {
              console.log('open:', false)
            }}
          >
            <div className="bg-white" style={{ height: '300px' }}>
              Modal Content
            </div>
          </Modal.NavBarCombo>
        </Card>
        <Card>
          <Divider>Only Cancel</Divider>
          <Modal.NavBarCombo
            comboChildren={() => 'Click to show NavModal'}
            title="Title"
            ok={null}
            onOk={({ close }) => {
              console.log('Ok')
              close()
            }}
            onCancel={() => {
              console.log('Cancel')
            }}
          >
            <div className="bg-white" style={{ height: '300px' }}>
              Modal Content
            </div>
          </Modal.NavBarCombo>
        </Card>
        <Card>
          <Divider>Ok and Cancel</Divider>
          <Modal.NavBarCombo
            comboChildren={() => 'Click to show NavModal'}
            title="Title"
            onOk={({ close }) => {
              console.log('Ok')
              close()
            }}
            onCancel={() => {
              console.log('Cancel')
            }}
          >
            <div className="bg-white" style={{ height: '300px' }}>
              Modal Content
            </div>
          </Modal.NavBarCombo>
        </Card>
      </Page.Main>
    </Page>
  )
}
