import React, { useEffect } from 'react'
import { SafeArea, FloatButton, Layout, Divider, Storage } from 'lyrixi-design-mobile'

export default () => {
  useEffect(() => {
    // SafeArea.autoSafeArea({ debug: true })
  }, [])

  return (
    <Layout className="full">
      <Layout.Header className="text-center">FloatButton</Layout.Header>
      <Layout.Main className="bg-white">
        <Divider>FloatButton</Divider>
        <FloatButton
          draggable
          // gap={{
          //   top: 12,
          //   left: 0,
          //   right: 40,
          //   bottom: 80
          // }}
          style={{
            ...(Storage.getLocalStorage('pos') || {})
          }}
          list={[
            { id: '1', iconRender: () => <i className="float-button-icon float-button-icon-more"></i> },
            {
              id: '2',
              name: '2',
              className: 'bg-primary color-white',
              iconRender: () => <i className="seeds-icon seeds-icon-plus" style={{ opacity: '0.5' }}></i>
            },
            { id: '3', name: '3', iconRender: () => <i className="seeds-icon seeds-icon-plus"></i> },
            {
              id: '4',
              name: '12345678',
              className: 'color-primary',
              children: [
                {
                  id: '3-1',
                  name: '3-1'
                }
              ]
            }
          ]}
          onChange={(value) => {
            console.log(value)
          }}
          onDragEnd={(e) => {
            Storage.setLocalStorage('pos', e.position)
          }}
        />
      </Layout.Main>
      <Layout.Footer style={{ height: '100px' }}></Layout.Footer>
    </Layout>
  )
}
