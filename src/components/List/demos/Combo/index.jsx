import React, { useRef, useState } from 'react'
import { Layout, List, Card, Divider, Checkbox, Message, ToolBar } from 'lyrixi-design-mobile'
import listData from './../data'

export default () => {
  const listRef = useRef(null)
  const [keyword, setKeyword] = useState('')
  const [list, setList] = useState(listData)
  const [value, setValue] = useState(null)

  console.log(listRef)
  return (
    <Layout className="full">
      <Layout.Header className="text-center">List.Combo</Layout.Header>
      <Layout.Main>
        <Card>
          <Divider>Default Select</Divider>
          <List.Combo
            style={{ margin: '0 12px' }}
            placeholder="Default Select"
            title="Default Select"
            value={value}
            onChange={setValue}
            loadList={() => list}
          />
        </Card>

        <Card>
          <Divider>Single Select</Divider>
          <List.Combo
            style={{ margin: '0 12px' }}
            placeholder="Single Select"
            allowClear
            multiple={false}
            value={value}
            onChange={setValue}
            loadList={() => list}
            checkable
          />
        </Card>

        <Card>
          <Divider>Single Select, allow modal clear</Divider>
          <List.Combo
            style={{ margin: '0 12px' }}
            placeholder="Single Select"
            allowClear
            value={value}
            onChange={setValue}
            loadList={() => list}
            checkable
          />
        </Card>

        <Card>
          <Divider>Multiple Select</Divider>
          <List.Combo
            style={{ margin: '0 12px' }}
            placeholder="Multiple Select"
            multiple
            allowClear
            value={value}
            onChange={setValue}
            loadList={() => list}
            checkable
          />
        </Card>

        <Card>
          <Divider>Multiple Select tags</Divider>
          <List.Combo
            style={{ margin: '0 12px' }}
            placeholder="Multiple Select"
            multiple={'tags'}
            allowClear
            value={value}
            onChange={setValue}
            loadList={() => list}
            checkable
          />
        </Card>

        <Card>
          <Divider>Checkbox</Divider>
          <List.Combo
            style={{ margin: '0 12px' }}
            placeholder="Single Select"
            allowClear
            multiple={false}
            value={value}
            onChange={setValue}
            checkbox={({ checked }) => {
              return <Checkbox checked={checked} />
            }}
            checkboxPosition="left"
            loadList={() => list}
            checkable
          />
        </Card>

        <Card>
          <Divider>Layout</Divider>
          <List.Combo
            style={{ margin: '0 12px' }}
            placeholder="Layout"
            multiple={false}
            title="Select"
            header={() => {
              return <p>Header</p>
            }}
            footer={() => {
              return <p>Footer</p>
            }}
            allowClear
            value={value}
            list={list}
            onChange={setValue}
            loadList={() => list}
            checkable
          />
        </Card>

        <Card>
          <Divider>onBeforeChange</Divider>
          <List.Combo
            style={{ margin: '0 12px' }}
            placeholder="onBeforeChange"
            allowClear
            multiple={false}
            value={value}
            // multiple
            // onBeforeChecked is valid when multiple
            onBeforeChecked={(newValue) => {
              console.log('onBeforeChange', newValue)
              return new Promise((resolve) => {
                Message.open({
                  title: '你确定要修改吗？',
                  content: `你确定要修改吗`,
                  buttons: [
                    {
                      name: '取消',
                      onClick: () => {
                        resolve(false)
                        return true
                      }
                    },
                    {
                      name: '确定',
                      className: 'primary',
                      onClick: () => {
                        resolve(true)
                        return true
                      }
                    }
                  ]
                })
              })
            }}
            onBeforeChange={(newValue) => {
              console.log('onBeforeChange', newValue)
              return new Promise((resolve) => {
                Message.open({
                  title: '你确定要修改吗？',
                  content: `你确定要修改吗`,
                  buttons: [
                    {
                      name: '取消',
                      onClick: () => {
                        resolve(false)
                        return true
                      }
                    },
                    {
                      name: '确定',
                      className: 'primary',
                      onClick: () => {
                        resolve(true)
                        return true
                      }
                    }
                  ]
                })
              })
            }}
            onChange={setValue}
            loadList={() => list}
            checkable
          />
        </Card>

        <Card>
          <Divider>Search</Divider>
          <List.Combo
            style={{ margin: '0 12px' }}
            placeholder="Search"
            multiple={false}
            title="Select"
            header={() => {
              return (
                <ToolBar invert>
                  <ToolBar.Search
                    value={keyword}
                    onSearch={(newKeyword) => {
                      setKeyword(newKeyword)
                      setList(List.searchList(listData, newKeyword))
                    }}
                  />
                </ToolBar>
              )
            }}
            allowClear
            value={value}
            onChange={setValue}
            loadList={() => list}
            checkable
          />
        </Card>
      </Layout.Main>
    </Layout>
  )
}
