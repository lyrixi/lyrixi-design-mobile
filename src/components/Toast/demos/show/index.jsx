import React from 'react'
import { Page, Toast } from 'lyrixi-design-mobile'

export default () => {
  function handleToggle() {
    // Toast.defaultProps = {
    //   style: { backgroundColor: 'blue' },
    //   maskStyle: { backgroundColor: 'red' }
    // }
    let toast = Toast.show({
      style: { backgroundColor: 'blue', color: 'green' },
      maskStyle: { backgroundColor: 'red' },
      position: 'middle',
      content: 'show toast',
      duration: 2000,
      maskClickable: false,
      onVisibleChange: (visible) => {
        console.log('custom visible:', visible)
      }
    })
    console.log(toast)

    setTimeout(() => {
      Toast.show({
        content: 'hh',
        onVisibleChange: (visible) => {
          console.log('hh visible:', visible)
        }
      })
    }, 1000)
  }

  return (
    <Page>
      <Page.Header className="text-center">Toast.show</Page.Header>
      <Page.Main className="bg-white">
        <div className="demo-title" onClick={handleToggle}>
          Toast visible toggle
        </div>
      </Page.Main>
    </Page>
  )
}
