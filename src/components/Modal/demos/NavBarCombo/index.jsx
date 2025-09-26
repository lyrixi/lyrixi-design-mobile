import React from 'react'
import { Layout, Modal, Card, Divider } from 'lyrixi-design-mobile'

export default () => {
  const navBarComboRef = React.useRef(null)
  console.log('navBarComboRef', navBarComboRef)
  return (
    <Layout className="full">
      <Layout.Header className="text-center">Modal</Layout.Header>
      <Layout.Main className="bg-white">
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
            onVisibleChange={(visible) => {
              console.log('visible:', visible)
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
      </Layout.Main>
    </Layout>
  )
}
