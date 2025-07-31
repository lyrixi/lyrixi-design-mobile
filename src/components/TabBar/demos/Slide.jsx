import React, { useState } from 'react'
import { Layout, Divider, TabBar } from 'lyrixi-design-mobile'

export default () => {
  const list = [
    {
      id: 'Fruit',
      name: 'Fruit'
    },
    { id: 'Vegetable', name: 'Vegetable', disabled: true },
    { id: 'Animal', name: 'Animal' }
  ]
  const [value, setValue] = useState({ name: 'Vegetable', id: 'Vegetable' })

  function handleChange(value) {
    setValue(value)
  }
  return (
    <Layout className="full">
      <Layout.Main style={{ backgroundColor: 'white' }}>
        <Divider>OverFlow</Divider>
        <TabBar.Slide
          list={[
            {
              id: 'Fruit',
              name: 'Fruit'
            },
            {
              id: 'Vegetable',
              name: 'Vegetable Vegetable Vegetable Vegetable Vegetable Vegetable Vegetable Vegetable '
            },
            { id: 'Animal', name: 'Animal' }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
        />

        <Divider>Disabled</Divider>
        <TabBar.Slide
          list={[
            {
              id: 'Fruit',
              name: 'Fruit'
            },
            {
              id: 'Vegetable',
              name: 'Vegetable',
              disabled: true
            },
            { id: 'Animal', name: 'Animal' }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
        />

        <Divider>Icon</Divider>
        <TabBar.Slide
          list={[
            {
              icon: <i className="seeds-icon-file-text"></i>,
              id: 'Fruit',
              name: 'Fruit'
            },
            {
              icon: <i className="seeds-icon-file-text"></i>,
              id: 'Vegetable',
              name: 'Vegetable'
            },
            { icon: <i className="seeds-icon-file-text"></i>, id: 'Animal', name: 'Animal' }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
        />

        <Divider>Children</Divider>
        <TabBar.Slide
          list={[
            {
              icon: <i className="seeds-icon-file-text"></i>,
              id: 'Fruit',
              name: 'Fruit',
              description: 'description',
              content: 'content'
            },
            {
              icon: <i className="seeds-icon-file-text"></i>,
              id: 'Vegetable',
              name: 'Vegetable',
              description: 'description',
              content: 'content'
            },
            {
              icon: <i className="seeds-icon-file-text"></i>,
              id: 'Animal',
              name: 'Animal',
              description: 'description',
              content: 'content'
            }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
        />

        <Divider>Size s</Divider>
        <TabBar.Slide
          list={list}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            handleChange(newValue)
          }}
          className="s"
        />
      </Layout.Main>
    </Layout>
  )
}
