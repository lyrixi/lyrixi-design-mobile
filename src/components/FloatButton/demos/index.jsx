import React, { useEffect } from 'react'
import { SafeArea, FloatButton, Page, Divider, Storage } from 'lyrixi-design-mobile'

export default () => {
  useEffect(() => {}, [])

  return (
    <Page>
      <Page.Header className="text-center">FloatButton</Page.Header>
      <Page.Main className="bg-white">
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
            {
              id: '1',
              iconRender: () => <i className="float-button-icon float-button-icon-more"></i>
            },
            {
              id: '2',
              name: '2',
              className: 'bg-primary color-white',
              iconRender: () => (
                <i className="seeds-icon seeds-icon-plus" style={{ opacity: '0.5' }}></i>
              )
            },
            {
              id: '3',
              name: '3',
              iconRender: () => <i className="seeds-icon seeds-icon-plus"></i>
            },
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
      </Page.Main>
      <Page.Footer style={{ height: '100px' }}></Page.Footer>
    </Page>
  )
}
