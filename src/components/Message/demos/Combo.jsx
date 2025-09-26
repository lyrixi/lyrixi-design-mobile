import React, { useState, useEffect } from 'react'
import { Icon, Layout, Message, Button } from 'lyrixi-design-mobile'

export default () => {
  const handleOpenMessage = () => {
    Message.open({
      icon: 'seeds-icon-config color-primary',
      title: 'Title',
      content: '<div>Content</div>',
      buttonsLayout: 'vertical',
      buttons: [
        {
          name: 'Button1',
          onClick: () => {
            console.log('Button1 clicked')
            return true
          }
        },
        {
          name: 'Button2',
          className: 'primary',
          onClick: () => {
            console.log('Button2 clicked')
            return true
          }
        }
      ]
    })
  }

  return (
    <Layout>
      <Layout.Main>
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Using Message.Combo component */}
          <div>
            <h3>Using Message.Combo Component</h3>
            <Message.Combo
              iconRender={<Icon className="seeds-icon-config color-primary" size={80}></Icon>}
              title="Title"
              content={<div>Content</div>}
              buttonsLayout="vertical"
              buttons={[
                {
                  id: 'button1',
                  name: 'Button1',
                  onClick: () => {
                    return true
                  }
                },
                {
                  id: 'button2',
                  name: 'Button2',
                  className: 'primary',
                  onClick: () => {
                    return true
                  }
                }
              ]}
            >
              <Button className="flex" color="primary">
                Click to show message (Combo)
              </Button>
            </Message.Combo>
          </div>

          {/* Using Message.open() API */}
          <div>
            <h3>Using Message.open() API</h3>
            <Button className="flex" color="secondary" onClick={handleOpenMessage}>
              Click to show message (API)
            </Button>
          </div>
        </div>
      </Layout.Main>
    </Layout>
  )
}
