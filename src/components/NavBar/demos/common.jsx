import React from 'react'

import { Page, NavBar, Button, Divider } from 'lyrixi-design-mobile'

export default () => {
  return (
    <Page className="full bg-white">
      <Page.Main>
        <Divider>Normal</Divider>
        <NavBar>
          <NavBar.Button icon="seeds-icon-arrow-left">Back</NavBar.Button>
          <NavBar.Title>Title</NavBar.Title>
          <NavBar.Button className="primary">Ok</NavBar.Button>
        </NavBar>

        <Divider>Button Shape</Divider>
        <NavBar>
          <NavBar.Button iconShape="circle" icon="seeds-icon-close" />
          <NavBar.Button iconShape="square" icon="seeds-icon-three-dots" />
        </NavBar>

        <Divider>Title</Divider>
        <NavBar>
          <NavBar.Button iconShape="circle" icon="seeds-icon-close" />
          <NavBar.Title>Title</NavBar.Title>
          <NavBar.Button className="primary">Ok</NavBar.Button>
        </NavBar>
      </Page.Main>
    </Page>
  )
}
