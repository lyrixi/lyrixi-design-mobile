import React from 'react'

import { Layout, Divider, Steps, Card, List, Button } from 'lyrixi-design-mobile'

const list = [
  {
    id: 'finish',
    title: <p className="color-tertiary">2025-12-01 12:30:27</p>,
    description: (
      <div className="color-default">
        <List.Item
          avatar="https://api.dicebear.com/7.x/miniavs/svg?seed=3"
          title="Jerry Input"
          className="border-0"
        />
      </div>
    )
  },
  {
    id: 'progress',
    title: <p className="color-tertiary">2025-12-01 12:30:27</p>,
    description: (
      <div className="color-default">
        <List.Item
          avatar="https://api.dicebear.com/7.x/miniavs/svg?seed=3"
          title="Tom Input"
          className="border-0"
        />
      </div>
    )
  },
  {
    id: 'wait',
    title: <p className="color-tertiary">2025-12-01 12:30:27</p>,
    description: (
      <div className="color-default">
        <List.Item
          avatar="https://api.dicebear.com/7.x/miniavs/svg?seed=3"
          title="Morpheus Input"
          className="border-0"
        />
        <p className="font-size-l">Wait for the boss to handle.</p>
        <Button className="s radius-m" style={{ marginTop: '8px' }}>
          View detail
        </Button>
      </div>
    )
  }
]

export default () => {
  return (
    <Layout className="full">
      <Layout.Main>
        <Card>
          <Divider>Center & Vertical</Divider>
          <Steps value={{ index: 1 }} list={list} align="center" direction="vertical" />
        </Card>
      </Layout.Main>
    </Layout>
  )
}
