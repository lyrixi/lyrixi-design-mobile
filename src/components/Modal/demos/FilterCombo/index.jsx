import React, { useRef } from 'react'
import { Layout, ToolBar, Card, Divider, Icon } from 'lyrixi-design-mobile'

export default () => {
  const filterRef = useRef(null)

  return (
    <Layout className="full">
      <Layout.Header className="text-center">Modal</Layout.Header>
      <Layout.Main>
        <Card>
          <Divider>Filter</Divider>
          <div
            onClick={() => {
              filterRef.current?.open()
            }}
          >
            Click to toggle visible
          </div>
          <ToolBar.Filter
            color="primary"
            shape="square"
            icon={<Icon className="toolbar-button-icon seeds-icons seeds-icon-search" />}
            onOk={({ close }) => {
              console.log('submit')
              close()
            }}
          >
            <div className="bg-white" style={{ height: '300px' }}>
              Modal Content
            </div>
          </ToolBar.Filter>
          <ToolBar.Filter
            ref={filterRef}
            variant="default"
            shape="square"
            onOk={({ close }) => {
              console.log('submit')
              close()
            }}
          >
            <div className="bg-white" style={{ height: '300px' }}>
              Modal Content
            </div>
          </ToolBar.Filter>
        </Card>
      </Layout.Main>
    </Layout>
  )
}
