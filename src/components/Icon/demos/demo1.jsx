import React from 'react'
import { Layout, Icon } from 'lyrixi-design-mobile'

export default () => {
  return (
    <Layout className="full">
      <Layout.Main>
        <p>Don't use seeds-icons, cause that className often changes</p>
        <Icon className="seeds-icons seeds-icon-signature" size={100}></Icon>
      </Layout.Main>
    </Layout>
  )
}
