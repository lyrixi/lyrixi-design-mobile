import React from 'react'

import { Layout, Divider, Button, Icon } from 'lyrixi-design-mobile'

const buttonStyle = {
  margin: 'var(--seed-space-m)'
}

export default () => {
  return (
    <Layout className="full">
      <Layout.Main className="bg-white">
        <Divider>Color & Variant</Divider>
        <div className="flex">
          <Button radius="m" style={buttonStyle}>
            default
          </Button>
          <Button variant="outline" radius="m" style={buttonStyle}>
            outline
          </Button>
          <Button variant="fill" radius="m" style={buttonStyle}>
            fill
          </Button>
          <Button variant="text" radius="m" style={buttonStyle}>
            text
          </Button>
        </div>
        <div className="flex">
          <Button color="primary" radius="m" style={buttonStyle}>
            primary
          </Button>
          <Button color="primary" variant="outline" radius="m" style={buttonStyle}>
            outline
          </Button>
          <Button color="primary" variant="fill" radius="m" style={buttonStyle}>
            fill
          </Button>
          <Button color="primary" variant="text" radius="m" style={buttonStyle}>
            text
          </Button>
        </div>

        <div className="flex">
          <Button color="link" radius="m" style={buttonStyle}>
            link
          </Button>
          <Button color="link" variant="outline" radius="m" style={buttonStyle}>
            outline
          </Button>
          <Button color="link" variant="fill" radius="m" style={buttonStyle}>
            fill
          </Button>
          <Button color="link" variant="text" radius="m" style={buttonStyle}>
            text
          </Button>
        </div>

        <div className="flex">
          <Button color="warning" radius="m" style={buttonStyle}>
            warning
          </Button>
          <Button color="warning" variant="outline" radius="m" style={buttonStyle}>
            outline
          </Button>
          <Button color="warning" variant="fill" radius="m" style={buttonStyle}>
            fill
          </Button>
          <Button color="warning" variant="text" radius="m" style={buttonStyle}>
            text
          </Button>
        </div>

        <div className="flex">
          <Button color="danger" radius="m" style={buttonStyle}>
            danger
          </Button>
          <Button color="danger" variant="outline" radius="m" style={buttonStyle}>
            outline
          </Button>
          <Button color="danger" variant="fill" radius="m" style={buttonStyle}>
            fill
          </Button>
          <Button color="danger" variant="text" radius="m" style={buttonStyle}>
            text
          </Button>
        </div>

        <div className="flex">
          <Button color="success" radius="m" style={buttonStyle}>
            success
          </Button>
          <Button color="success" variant="outline" radius="m" style={buttonStyle}>
            outline
          </Button>
          <Button color="success" variant="fill" radius="m" style={buttonStyle}>
            fill
          </Button>
          <Button color="success" variant="text" radius="m" style={buttonStyle}>
            text
          </Button>
        </div>

        <br />

        <Divider>Disabled</Divider>
        <div className="flex">
          <Button disabled radius="m" style={buttonStyle}>
            default
          </Button>
          <Button disabled variant="outline" radius="m" style={buttonStyle}>
            outline
          </Button>
          <Button disabled variant="fill" radius="m" style={buttonStyle}>
            fill
          </Button>
          <Button disabled variant="text" radius="m" style={buttonStyle}>
            text
          </Button>
        </div>
        <div className="flex">
          <Button disabled color="primary" radius="m" style={buttonStyle}>
            primary
          </Button>
          <Button disabled color="primary" variant="outline" radius="m" style={buttonStyle}>
            outline
          </Button>
          <Button disabled color="primary" variant="fill" radius="m" style={buttonStyle}>
            fill
          </Button>
          <Button disabled color="primary" variant="text" radius="m" style={buttonStyle}>
            text
          </Button>
        </div>
        <br />

        <Divider>Shape</Divider>
        <div className="bg-body">
          <Button shape="round" color="primary" style={buttonStyle}>
            Round
          </Button>
          <Button shape="circle" size="s" color="primary" style={buttonStyle}>
            <Icon className="seeds-icons seeds-icon-barcode"></Icon>
          </Button>
          <Button shape="square" size="s" radius="m" style={buttonStyle}>
            <Icon className="seeds-icons seeds-icon-barcode"></Icon>
          </Button>
          <br />

          <Divider>Flex</Divider>
          <Button color="primary" radius="m" className="flex" style={buttonStyle}>
            primary flex
          </Button>
        </div>
        <br />

        <Divider>Size & radius</Divider>
        <Button color="primary" size="xxs" radius="xxs" variant="outline" style={buttonStyle}>
          primary xxs
        </Button>
        <Button color="primary" size="xs" radius="xs" style={buttonStyle}>
          primary xs
        </Button>
        <Button color="primary" size="s" radius="s" style={buttonStyle}>
          primary s
        </Button>
        <Button color="primary" size="m" radius="m" style={buttonStyle}>
          primary m
        </Button>
        <Button color="primary" size="l" radius="l" style={buttonStyle}>
          primary l
        </Button>
        <Button color="primary" size="xl" radius="xl" style={buttonStyle}>
          primary xl
        </Button>
      </Layout.Main>
    </Layout>
  )
}
