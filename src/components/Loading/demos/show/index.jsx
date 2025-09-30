import React from 'react'
import { Page } from 'lyrixi-design-mobile'
// import { Loading } from 'lyrixi-design-mobile'
import Loading from './../../../Loading/index.js'

export default () => {
  function handleToggle() {
    // Loading.defaultProps = {
    //   style: { backgroundColor: 'blue' },
    //   maskStyle: { backgroundColor: 'red' }
    // }

    let loading = Loading.show({
      style: { backgroundColor: 'blue' },
      maskStyle: { backgroundColor: 'red' },
      className: 'abc',
      content: '自定义加载'
    })
    console.log(loading)
    setTimeout(() => {
      Loading.show()
    }, 3000)
    setTimeout(() => {
      Loading.hide()
    }, 6000)
  }

  return (
    <Page>
      <Page.Header className="text-center">Loading.show</Page.Header>
      <Page.Main className="bg-white">
        <div className="demo-title" onClick={handleToggle}>
          Loading visible toggle
        </div>
      </Page.Main>
    </Page>
  )
}
