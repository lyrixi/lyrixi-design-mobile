import React, { useState } from 'react'
import Type from './../Type'
import Guide from './Guide'

// 内库使用-start
import Toast from './../../../Toast'
// 内库使用-end

/* 测试使用-start
import { Toast } from 'lyrixi-design-mobile'
测试使用-end */

// 微信只支持分享到微信和朋友圈
function WeChat({ shareTo }) {
  const [visible, setVisible] = useState(false)
  if (shareTo?.wechat) {
    let { title, description, url, imageUrl, onSuccess, onFail } = shareTo?.wechat || {}
    return (
      <>
        <Type
          type="wechat"
          onClick={() => {
            window.top.wx.updateAppMessageShareData({
              title: title || '',
              desc: description || '',
              link: url || '',
              imgUrl: imageUrl || '',
              success: function (res) {
                setVisible(true)
                onSuccess && onSuccess()
              },
              fail: function (err) {
                console.log('WeChat Share fail:', err)
                Toast.show({
                  content: err?.errMsg || '分享失败'
                })
                onFail &&
                  onFail({
                    errMsg: err?.errMsg || '分享失败'
                  })
              }
            })
          }}
        />
        <Guide visible={visible} onVisibleChange={setVisible} />
      </>
    )
  }
  return null
}

export default WeChat
