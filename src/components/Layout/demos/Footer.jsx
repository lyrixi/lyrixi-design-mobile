import React from 'react'
import { Layout, Divider } from 'lyrixi-design-mobile'

const list = []
for (let i = 0; i < 100; i++) {
  list.push({
    id: i,
    name: '测试数据' + i
  })
}

export default () => {
  return (
    <Layout safeArea className="full">
      <Layout.Main>
        <Divider>Text Button</Divider>
        <Layout.Footer
          onChange={(newValue) => {
            console.log(newValue)
          }}
          buttonsType="text"
          buttons={[
            {
              // name: 'More',
              children: [
                {
                  id: 'option1',
                  name: 'Option 1'
                }
              ]
            },
            {
              id: 'ok',
              name: '确定',
              primary: true
            },
            {
              id: 'cancel',
              name: '取消'
            }
          ]}
        />

        <Divider>Text Button disabled</Divider>
        <Layout.Footer
          onChange={(newValue) => {
            console.log(newValue)
          }}
          buttonsType="text"
          buttons={[
            {
              // name: 'More',
              children: [
                {
                  disabled: true,
                  id: 'option1',
                  name: 'Option 1'
                }
              ]
            },
            {
              // name: 'More',
              disabled: true,
              children: [
                {
                  disabled: true,
                  id: 'option1',
                  name: 'Option 1'
                }
              ]
            },
            {
              disabled: true,
              id: 'ok',
              name: '确定',
              primary: true
            },
            {
              disabled: true,
              id: 'cancel',
              name: '取消'
            }
          ]}
        />

        <Divider>Button</Divider>
        <Layout.Footer
          onChange={(newValue) => {
            console.log(newValue)
          }}
          buttons={[
            {
              name: 'More',
              children: [
                {
                  id: 'option1',
                  name: 'Option 1'
                }
              ]
            },
            {
              id: 'cancel',
              name: 'Cancel'
            },
            {
              id: 'ok',
              name: 'Ok',
              primary: true
            }
          ]}
        />

        <Divider>Button disabled</Divider>
        <Layout.Footer
          onChange={(newValue) => {
            console.log(newValue)
          }}
          buttons={[
            {
              name: 'More',
              children: [
                {
                  disabled: true,
                  id: 'option1',
                  name: 'Option 1'
                }
              ]
            },
            {
              name: 'More',
              disabled: true,
              children: [
                {
                  id: 'option1',
                  name: 'Option 1'
                }
              ]
            },
            {
              disabled: true,
              id: 'cancel',
              name: 'Cancel'
            },
            {
              disabled: true,
              id: 'ok',
              name: 'Ok',
              primary: true
            }
          ]}
        />
      </Layout.Main>
    </Layout>
  )
}
