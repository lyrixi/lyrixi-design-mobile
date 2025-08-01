import React, { useRef } from 'react'
import { Share, Layout } from 'lyrixi-design-mobile'

export default () => {
  const shareComboRef = useRef(null)
  console.log(shareComboRef)
  return (
    <Layout className="full">
      <Layout.Header>When this platform is not supported, nothing will appear</Layout.Header>
      <Layout.Main className="bg-white">
        <Share.Combo
          ref={shareComboRef}
          shareTo={{
            wechat: {
              title: '标题',
              description: '描述',
              imageUrl: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
              url: 'https://www.baidu.com'
            },
            wecom: {
              title: '标题',
              description: '描述',
              imageUrl: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
              url: 'https://www.baidu.com'
            },
            dingtalk: {
              title: '标题',
              description: '描述',
              imageUrl: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
              url: 'https://www.baidu.com'
            },
            lark: {
              title: '标题',
              description: '描述',
              imageUrl: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
              url: 'https://www.baidu.com'
            }
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
