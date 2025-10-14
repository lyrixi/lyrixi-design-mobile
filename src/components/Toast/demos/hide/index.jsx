import React from 'react'
import { Page, Toast } from 'lyrixi-design-mobile'

export default () => {
  function handleToggle() {
    Toast.show({
      content: 'show toast',
      onOpen: () => {
        console.log('visible:', true)
      },
      onClose: () => {
        console.log('visible:', false)
      }
    })
    setTimeout(() => {
      Toast.hide()
    }, 500)
  }

  return (
    <Page>
      <Page.Header className="text-center">Toast.hide</Page.Header>
      <Page.Main className="bg-white">
        <div className="demo-title" onClick={handleToggle}>
          Toast visible toggle
        </div>
      </Page.Main>
    </Page>
  )
}
