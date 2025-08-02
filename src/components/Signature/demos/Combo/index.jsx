import React, { useEffect, useState } from 'react'
import { Signature, Layout, Toast, Device, Bridge } from 'lyrixi-design-mobile'

// Test safe area
// import { SafeArea } from 'lyrixi-design-mobile'
// SafeArea.autoSafeArea({ debug: true })

export default () => {
  const [value, setValue] = useState(
    'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png'
  )

  useEffect(() => {
    Bridge.ready()
  }, [])

  return (
    <Layout className="full">
      <Layout.Header className="text-center">手写签名</Layout.Header>
      <Layout.Main className="bg-white">
        <Signature.Combo
          // color="#000000"
          // backgroundColor="white"
          // disabled={true}
          value={value}
          modalProps={{
            safeArea: 'auto'
          }}
          onChange={(newVal) => {
            console.log(newVal)
            setValue(newVal)
          }}
          onPreview={(src) => {
            // Not video
            if (
              Device.device === 'mobile' &&
              (Bridge.platform === 'wechat' ||
                Bridge.platform === 'wework' ||
                Bridge.platform === 'alipay' ||
                Bridge.platform === 'dingtalk' ||
                Bridge.platform === 'lark' ||
                Bridge.platform === 'wechatMiniprogram' ||
                Bridge.platform === 'weworkMiniprogram' ||
                Bridge.platform === 'alipayMiniprogram')
            ) {
              return 'nativeImage'
            }

            // Video
            if (Bridge.platform === 'wq' || Bridge.platform === 'dinghuo') {
              Bridge.previewImage({
                urls: [src],
                current: src,
                index: 0
              })
              return false
            }

            // Video or image
            return 'browser'
          }}
          onBeforeChange={(newVal) => {
            if (!newVal) {
              Toast.show({
                content: '签名不能为空'
              })
              return false
            }
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
