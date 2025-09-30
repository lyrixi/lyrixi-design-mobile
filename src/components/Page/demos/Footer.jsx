import React from 'react'
import { Page, Divider } from 'lyrixi-design-mobile'

const list = []
for (let i = 0; i < 100; i++) {
  list.push({
    id: i,
    name: '测试数据' + i
  })
}

export default () => {
  return (
    <Page safeArea>
      <Page.Main>
        <Divider>Text Button</Divider>
        <Page.Footer
          onChange={(newValue) => {
            console.log(newValue)
          }}
        />

        <Divider>Text Button disabled</Divider>
        <Page.Footer
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
        <Page.Footer
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
        <Page.Footer
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
      </Page.Main>
    </Page>
  )
}
