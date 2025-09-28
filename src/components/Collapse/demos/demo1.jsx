import React, { useState } from 'react'
import { Divider, Layout, Card, Button, Collapse } from 'lyrixi-design-mobile'

export default () => {
  const [value, setValue] = useState(null)

  return (
    <Layout className="full">
      <Layout.Main>
        <Card>
          <Divider>Group(Controlled component)</Divider>
          <Button
            className="flex"
            color="primary"
            style={{ margin: '12px' }}
            onClick={() => setValue(2)}
          >
            Open Third
          </Button>
          {/* Group only allow single item appear */}
          <Collapse.Group value={value} style={{ margin: '0 12px' }} onChange={setValue}>
            <Collapse.Item title="One">
              <div className="flex flex-center flex-middle border-b" style={{ height: 100 }}>
                First Text
              </div>
            </Collapse.Item>
            <Collapse.Item title="Two">
              <div className="flex flex-center flex-middle border-b" style={{ height: 100 }}>
                Second Text
              </div>
            </Collapse.Item>
            <Collapse.Item title="Three">
              <div className="flex flex-center flex-middle border-b" style={{ height: 100 }}>
                Third Text
              </div>
            </Collapse.Item>
            <Collapse.Item title="Four">
              <div className="flex flex-center flex-middle border-b" style={{ height: 100 }}>
                Fourth Text
              </div>
            </Collapse.Item>
          </Collapse.Group>
        </Card>

        <Card>
          <Divider>Group</Divider>
          {/* Group only allow single item appear */}
          <Collapse.Group style={{ margin: '0 12px' }}>
            <Collapse.Item title="One">
              <div className="flex flex-center flex-middle border-b" style={{ height: 100 }}>
                First Text
              </div>
            </Collapse.Item>
            <Collapse.Item title="Two">
              <div className="flex flex-center flex-middle border-b" style={{ height: 100 }}>
                Second Text
              </div>
            </Collapse.Item>
            <Collapse.Item title="Three">
              <div className="flex flex-center flex-middle border-b" style={{ height: 100 }}>
                Third Text
              </div>
            </Collapse.Item>
            <Collapse.Item title="Four">
              <div className="flex flex-center flex-middle border-b" style={{ height: 100 }}>
                Fourth Text
              </div>
            </Collapse.Item>
          </Collapse.Group>
        </Card>

        <Card>
          <Divider>Item(Controlled component)</Divider>
          <div style={{ margin: '0 12px' }}>
            <Collapse.Item
              title="One"
              visible={value === 0}
              onVisibleChange={(visible) => setValue(visible ? 0 : null)}
            >
              <div className="flex flex-center flex-middle border-b" style={{ height: 100 }}>
                First Text
              </div>
            </Collapse.Item>
          </div>
        </Card>

        <Card>
          <Divider>Left Arrow</Divider>
          <div style={{ margin: '0 12px' }}>
            <Collapse.Item title="One" arrowPosition="left">
              <div className="flex flex-center flex-middle border-b" style={{ height: 100 }}>
                First Text
              </div>
            </Collapse.Item>
            <Collapse.Item visible={false} title="Two" arrowPosition="left">
              <div className="flex flex-center flex-middle border-b" style={{ height: 100 }}>
                Second Text
              </div>
            </Collapse.Item>
            <Collapse.Item visible={false} title="Three" arrowPosition="left">
              <div className="flex flex-center flex-middle border-b" style={{ height: 100 }}>
                Third Text
              </div>
            </Collapse.Item>
            <Collapse.Item visible={false} title="Four" arrowPosition="left">
              <div className="flex flex-center flex-middle border-b" style={{ height: 100 }}>
                Fourth Text
              </div>
            </Collapse.Item>
          </div>
        </Card>

        <Card>
          <Divider>Custom Arrow</Divider>
          <div style={{ margin: '0 12px' }}>
            <Collapse.Item
              arrowRender={() => <i className="seeds-icon seeds-icon-star-fill" />}
              title="Arrow ClassName"
            >
              <div className="flex flex-center flex-middle border-b" style={{ height: 100 }}>
                Arrow ClassName
              </div>
            </Collapse.Item>
            <Collapse.Item
              visible={false}
              arrowRender={() => {
                return (
                  <i
                    className="seeds-icon-star-fill"
                    style={{
                      fontSize: '14px',
                      color: '#f90'
                    }}
                  ></i>
                )
              }}
              title="Arrow Node"
            >
              <div className="flex flex-center flex-middle border-b" style={{ height: 100 }}>
                Arrow Node
              </div>
            </Collapse.Item>
          </div>
        </Card>

        <Card>
          <Divider>Custom Header</Divider>
          <div style={{ margin: '0 12px' }}>
            <Collapse.Item
              visible={false}
              headerRender={({ visible }) => {
                return (
                  <div
                    className="flex flex-middle"
                    style={{ height: 40, borderBottom: visible ? '1px solid #e8e8e8' : 'none' }}
                  >
                    <div className="flex-1">Custom Header</div>
                    {visible ? '^' : 'v'}
                  </div>
                )
              }}
            >
              <div className="flex flex-center flex-middle border-b" style={{ height: 100 }}>
                First Text
              </div>
            </Collapse.Item>
          </div>
        </Card>
      </Layout.Main>
    </Layout>
  )
}
