import React from 'react'

import { Layout, Divider, Steps, Icon, Card } from 'lyrixi-design-mobile'

const list = [
  {
    icon: <Icon className="seeds-icons seeds-icon-signature"></Icon>,
    id: 'finish',
    title: 'Finished',
    description: 'This is a description.'
  },
  {
    icon: <Icon className="seeds-icons seeds-icon-signature"></Icon>,
    id: 'progress',
    title: 'In Progress',
    description: 'This is a description.'
  },
  {
    icon: <Icon className="seeds-icons seeds-icon-signature"></Icon>,
    id: 'wait',
    title: 'Waiting',
    description: 'This is a description.'
  }
]

export default () => {
  return (
    <Layout className="full">
      <Layout.Main>
        <Card>
          <Divider>Global Icon</Divider>
          <Steps iconSize={32} value={{ index: 1 }} list={list} direction="horizontal" />
        </Card>

        <Card>
          <Divider>Item Icon</Divider>
          <Steps
            iconSize={32}
            value={{ index: 1, icon: <Icon className="seeds-icons seeds-icon-signature"></Icon> }}
            list={list}
            direction="vertical"
          />
        </Card>
      </Layout.Main>
    </Layout>
  )
}
