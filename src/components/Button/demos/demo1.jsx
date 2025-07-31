import React from 'react'

import { Layout, Divider, Button, Icon } from 'lyrixi-design-mobile'

const buttonStyle = {
  margin: 'var(--space-m)'
}

export default () => {
  return (
    <Layout className="full">
      <Layout.Main className="bg-white">
        <Divider>Color & Variant</Divider>
        <div className="flex">
          <Button className="radius-m" style={buttonStyle}>
            default
          </Button>
          <Button className="radius-m radius-m outline" style={buttonStyle}>
            outline
          </Button>
          <Button className="radius-m radius-m text fill outline" style={buttonStyle}>
            fill
          </Button>
          <Button className="radius-m text fill" style={buttonStyle}>
            fill
          </Button>
          <Button className="radius-m text" style={buttonStyle}>
            text
          </Button>
        </div>
        <div className="flex">
          <Button className="radius-m primary" style={buttonStyle}>
            primary
          </Button>
          <Button className="radius-m primary radius-m outline" style={buttonStyle}>
            outline
          </Button>
          <Button className="radius-m primary radius-m text fill outline" style={buttonStyle}>
            fill
          </Button>
          <Button className="radius-m primary text fill" style={buttonStyle}>
            fill
          </Button>
          <Button className="radius-m primary text" style={buttonStyle}>
            text
          </Button>
        </div>

        <div className="flex">
          <Button className="radius-m link" style={buttonStyle}>
            link
          </Button>
          <Button className="radius-m link radius-m outline" style={buttonStyle}>
            outline
          </Button>
          <Button className="radius-m link radius-m text fill outline" style={buttonStyle}>
            fill
          </Button>
          <Button className="radius-m link text fill" style={buttonStyle}>
            fill
          </Button>
          <Button className="radius-m link text" style={buttonStyle}>
            text
          </Button>
        </div>

        <div className="flex">
          <Button className="radius-m warning" style={buttonStyle}>
            link
          </Button>
          <Button className="radius-m warning radius-m outline" style={buttonStyle}>
            outline
          </Button>
          <Button className="radius-m warning radius-m text fill outline" style={buttonStyle}>
            fill
          </Button>
          <Button className="radius-m warning text fill" style={buttonStyle}>
            fill
          </Button>
          <Button className="radius-m warning text" style={buttonStyle}>
            text
          </Button>
        </div>

        <div className="flex">
          <Button className="radius-m danger" style={buttonStyle}>
            danger
          </Button>
          <Button className="radius-m danger radius-m outline" style={buttonStyle}>
            outline
          </Button>
          <Button className="radius-m danger radius-m text fill outline" style={buttonStyle}>
            fill
          </Button>
          <Button className="radius-m danger text fill" style={buttonStyle}>
            fill
          </Button>
          <Button className="radius-m danger text" style={buttonStyle}>
            text
          </Button>
        </div>

        <div className="flex">
          <Button className="radius-m success" style={buttonStyle}>
            success
          </Button>
          <Button className="radius-m success radius-m outline" style={buttonStyle}>
            outline
          </Button>
          <Button className="radius-m success radius-m text fill outline" style={buttonStyle}>
            fill
          </Button>
          <Button className="radius-m success text fill" style={buttonStyle}>
            fill
          </Button>
          <Button className="radius-m success text" style={buttonStyle}>
            text
          </Button>
        </div>

        <br />

        <Divider>Disabled</Divider>
        <div className="flex">
          <Button className="disabled radius-m" style={buttonStyle}>
            default
          </Button>
          <Button className="disabled radius-m radius-m outline" style={buttonStyle}>
            outline
          </Button>
          <Button className="disabled radius-m radius-m text fill outline" style={buttonStyle}>
            fill
          </Button>
          <Button className="disabled radius-m text fill" style={buttonStyle}>
            fill
          </Button>
          <Button className="disabled radius-m text" style={buttonStyle}>
            text
          </Button>
        </div>
        <div className="flex">
          <Button className="disabled radius-m primary" style={buttonStyle}>
            primary
          </Button>
          <Button className="disabled radius-m primary radius-m outline" style={buttonStyle}>
            outline
          </Button>
          <Button
            className="disabled radius-m primary radius-m text fill outline"
            style={buttonStyle}
          >
            fill
          </Button>
          <Button className="disabled radius-m primary text fill" style={buttonStyle}>
            fill
          </Button>
          <Button className="disabled radius-m primary text" style={buttonStyle}>
            text
          </Button>
        </div>
        <br />

        <Divider>Shape</Divider>
        <div className="bg-body">
          <Button shape="round" className="primary" style={buttonStyle}>
            Round
          </Button>
          <Button shape="circle" className="s primary" style={buttonStyle}>
            <Icon className="seeds-icons seeds-icon-barcode"></Icon>
          </Button>
          <Button shape="square" className="s radius-m" style={buttonStyle}>
            <Icon className="seeds-icons seeds-icon-barcode"></Icon>
          </Button>
          <br />

          <Divider>Flex</Divider>
          <Button className="primary flex radius-m" style={buttonStyle}>
            primary flex
          </Button>
        </div>
        <br />

        <Divider>Size & radius</Divider>
        <Button className="primary xxs radius-xxs outline fill" style={buttonStyle}>
          primary xxs
        </Button>
        <Button className="primary xs radius-xs" style={buttonStyle}>
          primary xs
        </Button>
        <Button className="primary s radius-s" style={buttonStyle}>
          primary s
        </Button>
        <Button className="primary m radius-m" style={buttonStyle}>
          primary m
        </Button>
        <Button className="primary l radius-l" style={buttonStyle}>
          primary l
        </Button>
        <Button className="primary xl radius-xl" style={buttonStyle}>
          primary xl
        </Button>
      </Layout.Main>
    </Layout>
  )
}
