import React, { useState, useEffect } from 'react'
import { Icon, Layout, Confirm, Button } from 'lyrixi-design-mobile'

export default () => {
  return (
    <Layout>
      <Layout.Main>
        <Confirm.Combo
          // icon={<Icon className="seeds-icon-config color-primary" size={80}></Icon>}
          icon="seeds-icon-config color-primary"
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
          <Button className="flex primary">Click to show confirm</Button>
        </Confirm.Combo>
      </Layout.Main>
    </Layout>
  )
}
