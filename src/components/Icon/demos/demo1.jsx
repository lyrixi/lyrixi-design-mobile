import React from 'react'
import { Page, Icon } from 'lyrixi-design-mobile'

export default () => {
  return (
    <Page>
      <Page.Main>
        <p>Don't use seeds-icons, cause that className often changes</p>
        <Icon className="seeds-icons seeds-icon-signature" size={100}></Icon>
      </Page.Main>
    </Page>
  )
}
