import React from 'react'
import { Icon, Page, Divider, FooterBar } from 'lyrixi-design-mobile'

export default () => {
  return (
    <Page safeArea>
      <Page.Main>
        <Divider>Text Button</Divider>
        <FooterBar>
          <FooterBar.Icon
            className="seeds-icon-three-dots"
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
          <FooterBar.Icon
            className="seeds-icon-config"
            onClick={(e) => {
              console.log(e)
            }}
          />

          <FooterBar.Button
            color="primary"
            backgroundColor="transparent"
            size="s"
            onClick={(e) => {
              console.log(e)
            }}
          >
            Ok
          </FooterBar.Button>
          <FooterBar.Button
            backgroundColor="transparent"
            size="s"
            onClick={(e) => {
              console.log(e)
            }}
          >
            Cancel
          </FooterBar.Button>
        </FooterBar>

        <Divider>Text Button disabled</Divider>
        <FooterBar>
          <FooterBar.Icon
            disabled
            className="seeds-icon-three-dots"
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
          <FooterBar.Icon
            disabled
            className="seeds-icon-config"
            onClick={(e) => {
              console.log(e)
            }}
          />
          <FooterBar.Button
            disabled
            color="primary"
            backgroundColor="transparent"
            size="s"
            onClick={(e) => {
              console.log(e)
            }}
          >
            Ok
          </FooterBar.Button>
          <FooterBar.Button
            disabled
            backgroundColor="transparent"
            size="s"
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
            iconRender={() => <Icon className="seeds-icon-config"></Icon>}
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
            color="white"
            backgroundColor="primary"
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
            iconRender={() => <Icon className="seeds-icon-config"></Icon>}
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
            color="white"
            backgroundColor="primary"
            onClick={(e) => {
              console.log(e)
            }}
          >
            Ok
          </FooterBar.Button>
        </FooterBar>
      </Page.Main>
    </Page>
  )
}
