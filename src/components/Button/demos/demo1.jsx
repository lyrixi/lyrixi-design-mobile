import React from 'react'

import { Page, Divider, Button, Icon } from 'lyrixi-design-mobile'

const buttonStyle = {
  margin: 'var(--seed-space-m)'
}

export default () => {
  return (
    <Page style={{ backgroundColor: '#f8f8f8' }}>
      <Page.Main>
        <Divider>Color & Variant</Divider>
        <div style={{ marginTop: 'var(--seed-space-l)' }}>
          <Button color="default" radius="m" style={buttonStyle}>
            default
          </Button>
          <Button color="default" radius="m" border="solid" style={buttonStyle}>
            default
          </Button>
          <br />
          <Button color="default" variant="fill" radius="m" style={buttonStyle}>
            variant="fill"
          </Button>
          <Button color="default" variant="fill" border="solid" radius="m" style={buttonStyle}>
            variant="fill" border="solid"
          </Button>
          <Button color="default" variant="fill" border="dashed" radius="m" style={buttonStyle}>
            variant="fill" border="dashed"
          </Button>
          <Button color="default" variant="text" radius="m" style={buttonStyle}>
            variant="text"
          </Button>
          <Button color="default" variant="text" border="solid" radius="m" style={buttonStyle}>
            variant="text" border="solid"
          </Button>
          <Button color="default" variant="text" border="dashed" radius="m" style={buttonStyle}>
            variant="text" border="dashed"
          </Button>
        </div>
        <div style={{ marginTop: 'var(--seed-space-l)' }}>
          <Button color="primary" radius="m" style={buttonStyle}>
            primary
          </Button>
          <br />
          <Button color="primary" variant="fill" radius="m" style={buttonStyle}>
            variant="fill"
          </Button>
          <Button color="primary" variant="fill" border="solid" radius="m" style={buttonStyle}>
            variant="fill" border="solid"
          </Button>
          <Button color="primary" variant="fill" border="dashed" radius="m" style={buttonStyle}>
            variant="fill" border="dashed"
          </Button>
          <Button color="primary" variant="text" radius="m" style={buttonStyle}>
            variant="text"
          </Button>
          <Button color="primary" variant="text" border="solid" radius="m" style={buttonStyle}>
            variant="text" border="solid"
          </Button>
          <Button color="primary" variant="text" border="dashed" radius="m" style={buttonStyle}>
            variant="text" border="dashed"
          </Button>
        </div>

        <div style={{ marginTop: 'var(--seed-space-l)' }}>
          <Button color="link" radius="m" style={buttonStyle}>
            link
          </Button>
          <br />
          <Button color="link" variant="fill" radius="m" style={buttonStyle}>
            variant="fill"
          </Button>
          <Button color="link" variant="fill" border="solid" radius="m" style={buttonStyle}>
            variant="fill" border="solid"
          </Button>
          <Button color="link" variant="fill" border="dashed" radius="m" style={buttonStyle}>
            variant="fill" border="dashed"
          </Button>
          <Button color="link" variant="text" radius="m" style={buttonStyle}>
            variant="text"
          </Button>
          <Button color="link" variant="text" border="solid" radius="m" style={buttonStyle}>
            variant="text" border="solid"
          </Button>
          <Button color="link" variant="text" border="dashed" radius="m" style={buttonStyle}>
            variant="text" border="dashed"
          </Button>
        </div>

        <div style={{ marginTop: 'var(--seed-space-l)' }}>
          <Button color="warning" radius="m" style={buttonStyle}>
            warning
          </Button>
          <br />
          <Button color="warning" variant="fill" radius="m" style={buttonStyle}>
            variant="fill"
          </Button>
          <Button color="warning" variant="fill" border="solid" radius="m" style={buttonStyle}>
            variant="fill" border="solid"
          </Button>
          <Button color="warning" variant="fill" border="dashed" radius="m" style={buttonStyle}>
            variant="fill" border="dashed"
          </Button>
          <Button color="warning" variant="text" radius="m" style={buttonStyle}>
            variant="text"
          </Button>
          <Button color="warning" variant="text" border="solid" radius="m" style={buttonStyle}>
            variant="text" border="solid"
          </Button>
          <Button color="warning" variant="text" border="dashed" radius="m" style={buttonStyle}>
            variant="text" border="dashed"
          </Button>
        </div>

        <div style={{ marginTop: 'var(--seed-space-l)' }}>
          <Button color="danger" radius="m" style={buttonStyle}>
            danger
          </Button>
          <br />
          <Button color="danger" variant="fill" radius="m" style={buttonStyle}>
            variant="fill"
          </Button>
          <Button color="danger" variant="fill" border="solid" radius="m" style={buttonStyle}>
            variant="fill" border="solid"
          </Button>
          <Button color="danger" variant="fill" border="dashed" radius="m" style={buttonStyle}>
            variant="fill" border="dashed"
          </Button>
          <Button color="danger" variant="text" radius="m" style={buttonStyle}>
            variant="text"
          </Button>
          <Button color="danger" variant="text" border="solid" radius="m" style={buttonStyle}>
            variant="text" border="solid"
          </Button>
          <Button color="danger" variant="text" border="dashed" radius="m" style={buttonStyle}>
            variant="text" border="dashed"
          </Button>
        </div>

        <div style={{ marginTop: 'var(--seed-space-l)' }}>
          <Button color="success" radius="m" style={buttonStyle}>
            success
          </Button>
          <br />
          <Button color="success" variant="fill" radius="m" style={buttonStyle}>
            variant="fill"
          </Button>
          <Button color="success" variant="fill" border="solid" radius="m" style={buttonStyle}>
            variant="fill" border="solid"
          </Button>
          <Button color="success" variant="fill" border="dashed" radius="m" style={buttonStyle}>
            variant="fill" border="dashed"
          </Button>
          <Button color="success" variant="text" radius="m" style={buttonStyle}>
            variant="text"
          </Button>
          <Button color="success" variant="text" border="solid" radius="m" style={buttonStyle}>
            variant="text" border="solid"
          </Button>
          <Button color="success" variant="text" border="dashed" radius="m" style={buttonStyle}>
            variant="text" border="dashed"
          </Button>
        </div>

        <br />

        <Divider>Disabled</Divider>
        <div className="flex">
          <Button disabled radius="m" style={buttonStyle}>
            default
          </Button>
          <Button disabled variant="fill" radius="m" style={buttonStyle}>
            fill
          </Button>
          <Button disabled variant="text" radius="m" style={buttonStyle}>
            text
          </Button>
          <Button disabled variant="text" border="solid" radius="m" style={buttonStyle}>
            border
          </Button>
        </div>
        <div className="flex">
          <Button color="primary" disabled radius="m" style={buttonStyle}>
            primary
          </Button>
          <Button color="primary" disabled variant="fill" radius="m" style={buttonStyle}>
            fill
          </Button>
          <Button color="primary" disabled variant="text" radius="m" style={buttonStyle}>
            text
          </Button>
          <Button
            color="primary"
            disabled
            variant="text"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            border
          </Button>
        </div>
        <br />

        <Divider>Shape</Divider>
        <div>
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
        <Button color="primary" size="xxs" radius="xxs" style={buttonStyle}>
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
      </Page.Main>
    </Page>
  )
}
