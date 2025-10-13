import React from 'react'

import { Page, Divider, Button, Icon } from 'lyrixi-design-mobile'

const buttonStyle = {
  margin: 'var(--seed-space-m)'
}

export default () => {
  return (
    <Page style={{ backgroundColor: 'white' }}>
      <Page.Main>
        <Divider>Color & Background & Border</Divider>
        <div style={{ marginTop: 'var(--seed-space-l)' }}>
          <Button bg="white" radius="m" style={buttonStyle}>
            bg="white"
          </Button>
          <Button bg="white" radius="m" disabled style={buttonStyle}>
            disabled
          </Button>
          <br />
          <Button bg="default" border="none" radius="m" style={buttonStyle}>
            bg="default" border="none"
          </Button>
          <Button bg="default" border="solid" radius="m" style={buttonStyle}>
            bg="default" border="solid"
          </Button>
          <Button bg="default" border="dashed" radius="m" style={buttonStyle}>
            bg="default" border="dashed"
          </Button>
          <br />
          <Button bg="transparent" border="none" radius="m" style={buttonStyle}>
            bg="transparent" border="none"
          </Button>
          <Button bg="transparent" border="solid" radius="m" style={buttonStyle}>
            bg="transparent" border="solid"
          </Button>
          <Button bg="transparent" border="dashed" radius="m" style={buttonStyle}>
            bg="transparent" border="dashed"
          </Button>
        </div>

        <div style={{ marginTop: 'var(--seed-space-l)' }}>
          <Button color="white" bg="primary" radius="m" style={buttonStyle}>
            color="white" bg="primary"
          </Button>
          <br />
          <Button color="primary" bg="primary-lighten" border="none" radius="m" style={buttonStyle}>
            color="primary" bg="primary-lighten"
          </Button>
          <Button
            color="primary"
            bg="primary-lighten"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            color="primary" bg="primary-lighten" border="solid"
          </Button>
          <Button
            color="primary"
            bg="primary-lighten"
            border="dashed"
            radius="m"
            style={buttonStyle}
          >
            color="primary" bg="primary-lighten" border="dashed"
          </Button>
          <br />
          <Button color="primary" bg="transparent" border="none" radius="m" style={buttonStyle}>
            color="primary" bg="transparent" border="none"
          </Button>
          <Button color="primary" bg="transparent" border="solid" radius="m" style={buttonStyle}>
            color="primary" bg="transparent" border="solid"
          </Button>
          <Button color="primary" bg="transparent" border="dashed" radius="m" style={buttonStyle}>
            color="primary" bg="transparent" border="dashed"
          </Button>
        </div>

        <div style={{ marginTop: 'var(--seed-space-l)' }}>
          <Button color="white" bg="link" radius="m" style={buttonStyle}>
            color="white" bg="link"
          </Button>
          <br />
          <Button color="link" bg="link-lighten" border="none" radius="m" style={buttonStyle}>
            color="link" bg="link-lighten"
          </Button>
          <Button color="link" bg="link-lighten" border="solid" radius="m" style={buttonStyle}>
            color="link" bg="link-lighten" border="solid"
          </Button>
          <Button color="link" bg="link-lighten" border="dashed" radius="m" style={buttonStyle}>
            color="link" bg="link-lighten" border="dashed"
          </Button>
          <br />
          <Button color="link" bg="transparent" border="none" radius="m" style={buttonStyle}>
            color="link" bg="transparent" border="none"
          </Button>
          <Button color="link" bg="transparent" border="solid" radius="m" style={buttonStyle}>
            color="link" bg="transparent" border="solid"
          </Button>
          <Button color="link" bg="transparent" border="dashed" radius="m" style={buttonStyle}>
            color="link" bg="transparent" border="dashed"
          </Button>
        </div>

        <div style={{ marginTop: 'var(--seed-space-l)' }}>
          <Button color="white" bg="warning" radius="m" style={buttonStyle}>
            color="white" bg="warning"
          </Button>
          <br />
          <Button color="warning" bg="warning-lighten" border="none" radius="m" style={buttonStyle}>
            color="warning" bg="warning-lighten"
          </Button>
          <Button
            color="warning"
            bg="warning-lighten"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            color="warning" bg="warning-lighten" border="solid"
          </Button>
          <Button
            color="warning"
            bg="warning-lighten"
            border="dashed"
            radius="m"
            style={buttonStyle}
          >
            color="warning" bg="warning-lighten" border="dashed"
          </Button>
          <br />
          <Button color="warning" bg="transparent" border="none" radius="m" style={buttonStyle}>
            color="warning" bg="transparent" border="none"
          </Button>
          <Button color="warning" bg="transparent" border="solid" radius="m" style={buttonStyle}>
            color="warning" bg="transparent" border="solid"
          </Button>
          <Button color="warning" bg="transparent" border="dashed" radius="m" style={buttonStyle}>
            color="warning" bg="transparent" border="dashed"
          </Button>
        </div>

        <div style={{ marginTop: 'var(--seed-space-l)' }}>
          <Button color="white" bg="danger" radius="m" style={buttonStyle}>
            color="white" bg="danger"
          </Button>
          <br />
          <Button color="danger" bg="danger-lighten" border="none" radius="m" style={buttonStyle}>
            color="danger" bg="danger-lighten"
          </Button>
          <Button color="danger" bg="danger-lighten" border="solid" radius="m" style={buttonStyle}>
            color="danger" bg="danger-lighten" border="solid"
          </Button>
          <Button color="danger" bg="danger-lighten" border="dashed" radius="m" style={buttonStyle}>
            color="danger" bg="danger-lighten" border="dashed"
          </Button>
          <br />
          <Button color="danger" bg="transparent" border="none" radius="m" style={buttonStyle}>
            color="danger" bg="transparent" border="none"
          </Button>
          <Button color="danger" bg="transparent" border="solid" radius="m" style={buttonStyle}>
            color="danger" bg="transparent" border="solid"
          </Button>
          <Button color="danger" bg="transparent" border="dashed" radius="m" style={buttonStyle}>
            color="danger" bg="transparent" border="dashed"
          </Button>
        </div>

        <div style={{ marginTop: 'var(--seed-space-l)' }}>
          <Button color="white" bg="success" radius="m" style={buttonStyle}>
            color="white" bg="success"
          </Button>
          <br />
          <Button color="success" bg="success-lighten" border="none" radius="m" style={buttonStyle}>
            color="success" bg="success-lighten"
          </Button>
          <Button
            color="success"
            bg="success-lighten"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            color="success" bg="success-lighten" border="solid"
          </Button>
          <Button
            color="success"
            bg="success-lighten"
            border="dashed"
            radius="m"
            style={buttonStyle}
          >
            color="success" bg="success-lighten" border="dashed"
          </Button>
          <br />
          <Button color="success" bg="transparent" border="none" radius="m" style={buttonStyle}>
            color="success" bg="transparent" border="none"
          </Button>
          <Button color="success" bg="transparent" border="solid" radius="m" style={buttonStyle}>
            color="success" bg="transparent" border="solid"
          </Button>
          <Button color="success" bg="transparent" border="dashed" radius="m" style={buttonStyle}>
            color="success" bg="transparent" border="dashed"
          </Button>
        </div>

        <br />

        <Divider>Shape</Divider>
        <div>
          <Button shape="round" color="white" bg="primary" style={buttonStyle}>
            Round
          </Button>
          <Button shape="circle" size="s" style={buttonStyle}>
            <Icon className="seeds-icons seeds-icon-barcode"></Icon>
          </Button>
          <Button shape="square" size="s" radius="m" style={buttonStyle}>
            <Icon className="seeds-icons seeds-icon-barcode"></Icon>
          </Button>
          <br />

          <Divider>Flex</Divider>
          <Button color="white" bg="primary" radius="m" className="flex" style={buttonStyle}>
            primary flex
          </Button>
        </div>
        <br />

        <Divider>Size & radius</Divider>
        <Button color="white" bg="primary" size="xxs" radius="xxs" style={buttonStyle}>
          primary xxs
        </Button>
        <Button color="white" bg="primary" size="xs" radius="xs" style={buttonStyle}>
          primary xs
        </Button>
        <Button color="white" bg="primary" size="s" radius="s" style={buttonStyle}>
          primary s
        </Button>
        <Button color="white" bg="primary" size="m" radius="m" style={buttonStyle}>
          primary m
        </Button>
        <Button color="white" bg="primary" size="l" radius="l" style={buttonStyle}>
          primary l
        </Button>
        <Button color="white" bg="primary" size="xl" radius="xl" style={buttonStyle}>
          primary xl
        </Button>
      </Page.Main>
    </Page>
  )
}
