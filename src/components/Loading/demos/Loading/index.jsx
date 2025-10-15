import React, { useState, useEffect } from 'react'
import { Page } from 'lyrixi-design-mobile'
// import { Loading } from 'lyrixi-design-mobile'
import Loading from './../../Loading/index.js'

export default () => {
  const [open, setOpen] = useState(true)
  // useEffect(() => {
  //   setTimeout(() => {
  //     Loading.show({
  //       captionProps: {
  //         caption: ''
  //       },
  //       onOpen: () => {
  //         console.log('open:', true)
  //         setTimeout(() => {
  //           Loading.hide()
  //         }, 3000)
  //       },
  //       onClose: () => {
  //         console.log('open:', false)
  //       }
  //     })
  //   }, 2000)
  // }, [])

  return (
    <Page>
      <Page.Header className="text-center">Loading</Page.Header>
      <Page.Main className="bg-white">
        <Loading.SpinFade />
        <Loading.Ouroboros />
        <Loading.BallWave />
        <Loading
          // 自定义图标和内容
          icon={<Loading.Ouroboros />}
          content="自定义内容"
        />
      </Page.Main>
    </Page>
  )
}
