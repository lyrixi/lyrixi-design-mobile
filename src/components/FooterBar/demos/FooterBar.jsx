import React from 'react'
import { Icon, Layout, Divider, FooterBar } from 'lyrixi-design-mobile'

export default () => {
  return (
    <Layout safeArea className="full">
      <Layout.Main>
        <Divider>Text Button</Divider>
        <FooterBar type="text">
          <FooterBar.Tab
            name=""
            more={[
              {
                id: 'option1',
                name: 'Option 1',
                onClick: (e) => {
                  console.log(e)
                }
              },
              {
                id: 'option2',
                name: 'Option 2',
                onClick: (e) => {
                  console.log(e)
                }
              }
            ]}
          />
          <FooterBar.Tab
            icon={<Icon className="seeds-icon-config"></Icon>}
            onClick={(e) => {
              console.log(e)
            }}
          />

          <FooterBar.Button
            className="primary"
            onClick={(e) => {
              console.log(e)
            }}
          >
            Ok
          </FooterBar.Button>
          <FooterBar.Button
            onClick={(e) => {
              console.log(e)
            }}
          >
            Cancel
          </FooterBar.Button>
        </FooterBar>

        <Divider>Text Button disabled</Divider>
        <FooterBar type="text">
          <FooterBar.Tab
            more={[
              {
                disabled: true,
                id: 'option1',
                name: 'Option 1',
                onClick: (e) => {
                  console.log(e)
                }
              },
              {
                id: 'option2',
                name: 'Option 2',
                onClick: (e) => {
                  console.log(e)
                }
              }
            ]}
          />
          <FooterBar.Tab
            disabled
            icon={<Icon className="seeds-icon-config"></Icon>}
            onClick={(e) => {
              console.log(e)
            }}
          />
          <FooterBar.Tab
            disabled
            more={[
              {
                id: 'option1',
                name: 'Option 1',
                onClick: (e) => {
                  console.log(e)
                }
              },
              {
                id: 'option2',
                name: 'Option 2',
                onClick: (e) => {
                  console.log(e)
                }
              }
            ]}
          />
          <FooterBar.Button
            disabled
            className="primary"
            onClick={(e) => {
              console.log(e)
            }}
          >
            Ok
          </FooterBar.Button>
          <FooterBar.Button
            disabled
            onClick={(e) => {
              console.log(e)
            }}
          >
            Cancel
          </FooterBar.Button>
        </FooterBar>

        <Divider>Button</Divider>
        <FooterBar>
          <FooterBar.Tab
            name="More"
            more={[
              {
                id: 'option1',
                name: 'Option 1',
                onClick: (e) => {
                  console.log(e)
                }
              },
              {
                id: 'option2',
                name: 'Option 2',
                onClick: (e) => {
                  console.log(e)
                }
              }
            ]}
          />
          <FooterBar.Tab
            icon={<Icon className="seeds-icon-config"></Icon>}
            name="Config"
            onClick={(e) => {
              console.log(e)
            }}
          />
          <FooterBar.Button
            onClick={(e) => {
              console.log(e)
            }}
          >
            Cancel
          </FooterBar.Button>
          <FooterBar.Button
            className="primary"
            onClick={(e) => {
              console.log(e)
            }}
          >
            Ok
          </FooterBar.Button>
        </FooterBar>

        <Divider>Button disabled</Divider>
        <FooterBar>
          <FooterBar.Tab
            name="More"
            more={[
              {
                disabled: true,
                id: 'option1',
                name: 'Option 1',
                onClick: (e) => {
                  console.log(e)
                }
              },
              {
                id: 'option2',
                name: 'Option 2',
                onClick: (e) => {
                  console.log(e)
                }
              }
            ]}
          />
          <FooterBar.Tab
            disabled
            icon={<Icon className="seeds-icon-config"></Icon>}
            name="Config"
            onClick={(e) => {
              console.log(e)
            }}
          />
          <FooterBar.Button
            disabled
            onClick={(e) => {
              console.log(e)
            }}
          >
            Cancel
          </FooterBar.Button>
          <FooterBar.Button
            disabled
            className="primary"
            onClick={(e) => {
              console.log(e)
            }}
          >
            Ok
          </FooterBar.Button>
        </FooterBar>
      </Layout.Main>
    </Layout>
  )
}
