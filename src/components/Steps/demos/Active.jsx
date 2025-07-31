import React from 'react'

import { Layout, Divider, Steps, Icon, Card } from 'lyrixi-design-mobile'

const list = [
  {
    id: 'finish',
    title: 'Finished',
    description: 'This is a description.'
  },
  {
    id: 'progress',
    title: 'In Progress',
    description: 'This is a description.'
  },
  {
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
          <Divider>Active by Index</Divider>
          <Steps value={{ index: 1 }} list={list} direction="horizontal" />
        </Card>

        <Card>
          <Divider>Active by Id</Divider>
          <Steps value={{ id: 'progress' }} list={list} direction="vertical" />
        </Card>

        <Card>
          <Divider>Active Status</Divider>
          <Steps
            value={{ id: 'progress', status: 'error' }}
            list={list}
            align="left"
            direction="horizontal"
          />
        </Card>

        <Card>
          <Divider>Active Icon</Divider>
          <Steps
            value={{
              id: 'progress',
              status: 'error',
              icon: <Icon className="seeds-icons seeds-icon-signature"></Icon>
            }}
            list={list}
            align="left"
            direction="vertical"
          />
        </Card>
      </Layout.Main>
    </Layout>
  )
}
