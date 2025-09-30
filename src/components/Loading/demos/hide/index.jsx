import React from 'react'
import { Page, Loading } from 'lyrixi-design-mobile'

export default () => {
  function handleToggle() {
    Loading.show()
    setTimeout(() => {
      Loading.hide()
    }, 500)
  }

  return (
    <Page>
      <Page.Header className="text-center">Loading.hide</Page.Header>
      <Page.Main className="bg-white">
        <div className="demo-title" onClick={handleToggle}>
          Loading visible toggle
        </div>
      </Page.Main>
    </Page>
  )
}
