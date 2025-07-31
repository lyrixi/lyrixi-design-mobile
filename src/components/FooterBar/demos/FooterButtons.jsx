import React from 'react'
import { Icon, Layout, Divider, FooterBar } from 'lyrixi-design-mobile'

export default () => {
  return (
    <Layout safeArea className="full">
      <Layout.Main>
        <Divider>Text Button</Divider>
        <FooterBar
          type="text"
          buttons={[
            {
              type: 'tab',
              more: [
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
              ]
            },
            {
              type: 'tab',
              icon: <Icon className="seeds-icon-config"></Icon>,
              onClick: (e) => {
                console.log(e)
              }
            },
            {
              name: 'Ok',
              className: 'primary',
              onClick: (e) => {
                console.log(e)
              }
            },
            {
              name: 'Cancel',
              onClick: (e) => {
                console.log(e)
              }
            }
          ]}
        />

        <Divider>Text Button disabled</Divider>
        <FooterBar
          type="text"
          buttons={[
            {
              type: 'tab',
              more: [
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
              ]
            },
            {
              type: 'tab',
              disabled: true,
              icon: <Icon className="seeds-icon-config"></Icon>,
              onClick: (e) => {
                console.log(e)
              }
            },
            {
              type: 'tab',
              disabled: true,
              more: [
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
              ]
            },
            {
              name: 'Ok',
              disabled: true,
              className: 'primary',
              onClick: (e) => {
                console.log(e)
              }
            },
            {
              name: 'Cancel',
              disabled: true,
              onClick: (e) => {
                console.log(e)
              }
            }
          ]}
        />

        <Divider>Button</Divider>
        <FooterBar
          buttons={[
            {
              type: 'tab',
              name: 'More',
              more: [
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
              ]
            },
            {
              type: 'tab',
              icon: <Icon className="seeds-icon-config"></Icon>,
              name: 'Config',
              onClick: (e) => {
                console.log(e)
              }
            },
            {
              name: 'Cancel',
              onClick: (e) => {
                console.log(e)
              }
            },
            {
              name: 'Ok',
              className: 'primary',
              onClick: (e) => {
                console.log(e)
              }
            }
          ]}
        />

        <Divider>Button disabled</Divider>
        <FooterBar
          buttons={[
            {
              type: 'tab',
              name: 'More',
              more: [
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
              ]
            },
            {
              type: 'tab',
              disabled: true,
              icon: <Icon className="seeds-icon-config"></Icon>,
              name: 'Config',
              onClick: (e) => {
                console.log(e)
              }
            },
            {
              name: 'Cancel',
              disabled: true,
              onClick: (e) => {
                console.log(e)
              }
            },
            {
              name: 'Ok',
              disabled: true,
              className: 'primary',
              onClick: (e) => {
                console.log(e)
              }
            }
          ]}
        />
      </Layout.Main>
    </Layout>
  )
}
