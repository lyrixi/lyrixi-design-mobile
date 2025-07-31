import React from 'react'
import { Layout, Chat } from 'lyrixi-design-mobile'

export default () => {
  return (
    <Layout className="full">
      <Layout.Main>
        <Chat.Item
          avatar={'https://api.dicebear.com/7.x/miniavs/svg?seed=3'}
          id="1"
          name="1"
          content="content"
          position="left"
          time={new Date()}
        />
      </Layout.Main>
    </Layout>
  )
}
