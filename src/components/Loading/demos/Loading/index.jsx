import React, { useState, useEffect } from 'react'
import { Layout } from 'lyrixi-design-mobile'
// import { Loading } from 'lyrixi-design-mobile'
import Loading from './../../Loading/index.js'

export default () => {
  const [visible, setVisible] = useState(true)
  // useEffect(() => {
  //   setTimeout(() => {
  //     Loading.show({
  //       captionProps: {
  //         caption: ''
  //       },
  //       onVisibleChange: (visible) => {
  //         console.log('visible:', visible)
  //         setTimeout(() => {
  //           Loading.hide()
  //         }, 3000)
  //       }
  //     })
  //   }, 2000)
  // }, [])

  return (
    <Layout className="full">
      <Layout.Header className="text-center">Loading</Layout.Header>
      <Layout.Main className="bg-white">
        <Loading.SpinFade />
        <Loading.Ouroboros />
        <Loading.BallWave />
        <Loading
          // 自定义图标和内容
          icon={<Loading.Ouroboros />}
          content="自定义内容"
        />
      </Layout.Main>
    </Layout>
  )
}
