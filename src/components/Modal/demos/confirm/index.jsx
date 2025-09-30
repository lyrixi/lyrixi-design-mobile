import React from 'react'
import { Page, Message, Button } from 'lyrixi-design-mobile'

export default () => {
  function handleToggle() {
    Message.open({
      title: '第一层',
      titleStyle: {
        color: 'red'
      },
      // 透传至外层
      portal: top.document.body,
      content:
        '最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度最大高度',
      contentStyle: {
        color: 'red'
      },
      buttonsLayout: 'vertical',
      buttons: [
        {
          name: '取消',
          style: {
            color: 'red'
          },
          onClick: () => {
            return true
          }
        },
        {
          name: '确定',
          className: 'primary',
          style: {
            color: 'red'
          },
          onClick: () => {
            console.log('第二层')
            Message.open({
              title: '第二层',
              maskClassName: 'aa',
              maskStyle: {
                zIndex: 999
              },
              maskClosable: true,
              content: 'confirm content2',
              buttons: [
                {
                  name: '取消',
                  onClick: () => true
                },
                {
                  name: '确定',
                  className: 'primary',
                  onClick: () => {
                    console.log('第三层')
                    Message.open({
                      portal: document.body,
                      title: '第三层',
                      content: 'confirm content3',
                      buttons: [
                        {
                          name: '确定',
                          className: 'primary',
                          onClick: () => true
                        }
                      ],
                      onVisibleChange: (visible) => {
                        console.log('onVisibleChange:', visible)
                      }
                    })
                    return false
                  }
                }
              ]
            })
            return false
          }
        }
      ]
    })
  }

  return (
    <Page>
      <Page.Header className="text-center">Message.open</Page.Header>
      <Page.Main
        className="bg-white"
        style={{
          backgroundImage:
            'url(https://cdn.pixabay.com/photo/2014/12/16/08/32/cherry-blossoms-570046_1280.jpg)'
        }}
      >
        <Button className="flex" color="primary" size="l" onClick={handleToggle}>
          Message visible toggle
        </Button>
      </Page.Main>
    </Page>
  )
}
