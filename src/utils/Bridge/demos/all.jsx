import React, { useEffect, useRef, useState } from 'react'
import vconsole from 'vconsole'

import { Loading, Button } from 'lyrixi-design-mobile'

// 内库使用-start
import {
  Bridge,
  Layout,
  Location as DeprecatedLocation,
  Location,
  Image as ImageUploader,
  Image as MediaUploader,
  Share
} from 'lyrixi-design-mobile'
// 内库使用-end

// 测试使用
// import Bridge from 'library/utils/Bridge'
// import Layout from 'library/components/Layout'
// import Location from 'library/components/Location'
// import ImageUploader from 'library/components/ImageUploader'
// import MediaUploader from 'library/components/MediaUploader'
// import Share from 'library/components/Share'
// 测试使用

new vconsole()

export default () => {
  const [videos, setVideos] = useState([
    {
      id: '1',
      thumb: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
      src: 'https://player.alicdn.com/video/aliyunmedia.mp4',
      status: 'success'
    },
    {
      id: '2',
      thumb: 'https://img.zcool.cn/community/01a9a65dfad975a8012165189a6476.jpg',
      src: 'https://player.alicdn.com/video/aliyunmedia.mp4',
      status: 'fail'
    }
  ])
  const [photos, setPhotos] = useState([])
  const [location, setLocation] = useState([])
  const [shareTo, setShareTo] = useState({
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
  })

  const imageLocalIds = useRef(null)
  useEffect(() => {
    setTimeout(() => {
      setLocation({
        latitude: 31.990374883871525,
        longitude: 118.73769931504451,
        type: 'gcj02',
        address: '南京新城科技园'
      })
    }, 5000)
  }, [])

  return (
    <Layout className="full">
      <Layout.Main>
        <h2>组件</h2>
        <p className="demo-title">定位</p>
        <Location.Combo
          // config={{
          //   key: '',
          //   type: 'bmap'
          // }}
          allowClear
          autoFit
          clickAction="location"
          placeholder={'点击定位'}
          value={location}
          previewVisible
          chooseVisible
          onChange={(result) => {
            console.log(result)
            setLocation(result)
          }}
        />

        <p className="demo-title">老定位</p>
        <DeprecatedLocation.Combo
          // config={{
          //   key: '',
          //   type: 'bmap'
          // }}
          allowClear
          autoFit
          clickAction="location"
          placeholder={'点击定位'}
          value={location}
          previewVisible
          chooseVisible
          onChange={(result) => {
            console.log(result)
            setLocation(result)
          }}
        />

        <p className="demo-title">拍照</p>
        <ImageUploader
          uploadPosition="start"
          timeout={2000}
          list={photos}
          count={20}
          // 离北京天安门差不多2.4公里
          watermark={['$address $distance:116.37,39.91', 'aaa', '$address', '$datetime']}
          watermarkConfig={{ showTime: '1', type: '1' }}
          uploadDir={`businessName`}
          onChange={setPhotos}
          onDelete={setPhotos}
        />

        <p className="demo-title">小视频</p>
        <MediaUploader
          enableThumb
          uploadPosition="start"
          timeout={2000}
          list={videos}
          count={4}
          // 离北京天安门差不多2.4公里
          uploadDir={`businessName`}
          onChange={setVideos}
          onDelete={setVideos}
        />

        <h2>界面接口</h2>
        <p className="demo-title">打开新窗口接口</p>
        <Button
          className="primary flex"
          style={{ margin: '12px 10px' }}
          onClick={() => {
            Bridge.openWindow({ title: '测试', url: 'https://www.baidu.com/' })
          }}
        >
          openWindow
        </Button>
        <p className="demo-title">关闭当前网页窗口接口(仅客户端与企微)</p>
        <a href="/#/test?title=test&isFromApp=confirm-close:11">返回提示11, 并关闭webview</a>
        <br />
        <a href="/#/test?title=test&isFromApp=confirm-close">返回提示, 并关闭webview</a>
        <br />
        <a href="/#/test?title=test&isFromApp=confirm:11">返回提示11</a>
        <br />
        <a href="/#/test?title=test&isFromApp=confirm">返回提示</a>
        <br />
        <a href="/#/test?title=test&isFromApp=1">返回时将会关闭webview</a>
        <Button
          className="primary flex"
          style={{ margin: '12px 10px' }}
          onClick={() => {
            Bridge.closeWindow()
          }}
        >
          closeWindow(全平台支持)
        </Button>
        <Button
          className="primary flex"
          style={{ margin: '12px 10px' }}
          onClick={() => {
            Bridge.back()
          }}
        >
          back(全平台支持)
        </Button>
        <p className="demo-title">监听页面返回事件(仅客户端与企微)</p>
        <Button
          className="primary flex"
          style={{ margin: '12px 10px' }}
          onClick={() => {
            Bridge.onHistoryBack(() => {
              console.log('返回监听')
              alert('返回监听')
            })
          }}
        >
          onHistoryBack
        </Button>

        <p className="demo-title">修改页面title</p>
        <Button
          className="primary flex"
          style={{ margin: '12px 10px' }}
          onClick={() => {
            Bridge.setTitle({
              title: '自定义标题'
            })
          }}
        >
          setTitle
        </Button>

        <p className="demo-title">退出至登录页面(仅客户端)</p>
        <Button
          className="primary flex"
          style={{ margin: '12px 10px' }}
          onClick={() => {
            Bridge.logOut()
          }}
        >
          logout
        </Button>

        <p className="demo-title">返回首页(仅订货客户端支持)</p>
        <Button
          className="primary flex"
          style={{ margin: '12px 10px' }}
          onClick={() => {
            Bridge.goHome()
          }}
        >
          goHome
        </Button>

        <h2>扫码接口</h2>
        <p className="demo-title">调用365扫码接口</p>
        <Button
          className="primary flex"
          style={{ margin: '12px 10px' }}
          onClick={() => {
            Bridge.scanQRCode({
              scanType: ['barCode'],
              success: (res) => {
                console.log(res)
                alert(JSON.stringify(res))
              },
              fail: (err) => {
                console.log(err)
                alert(JSON.stringify(err))
              }
            })
          }}
        >
          scanQRCode
        </Button>

        <h2>图像接口</h2>
        <p className="demo-title">拍照或从手机相册中选图接口(仅支持客户端,微信,企微,小程序)</p>
        <Button
          className="primary flex"
          style={{ margin: '12px 10px' }}
          onClick={() => {
            Bridge.chooseImage({
              sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
              sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
              success: (res) => {
                console.log(res)
                alert(JSON.stringify(res))
                imageLocalIds.current = res?.localIds
              },
              fail: (res) => {
                console.log(res)
                alert(JSON.stringify(res))
              },
              cancel: (res) => {
                console.log(res)
                alert(JSON.stringify(res))
              }
            })
          }}
        >
          chooseImage
        </Button>

        <p className="demo-title">上传图片接口(仅支持客户端,微信,企微,小程序)</p>
        <Button
          className="primary flex"
          style={{ margin: '12px 10px' }}
          onClick={() => {
            if (!imageLocalIds.current) {
              console.log('chooseImage first!')
              alert('chooseImage first!')
              return
            }
            Loading.show({
              content: '上传中...'
            })
            Bridge.uploadImage({
              localId: imageLocalIds.current[0],
              isShowProgressTips: 0,
              uploadDir: 'test',
              success: function (res) {
                console.log(res)
                alert(JSON.stringify(res))
                Loading.hide()
              },
              fail: function (res) {
                console.log(res)
                alert(JSON.stringify(res))
                Loading.hide()
              },
              cancel: function (res) {
                console.log(res)
                alert(JSON.stringify(res))
                Loading.hide()
              },
              complete: function () {
                Loading.hide()
              }
            })
          }}
        >
          uploadImage
        </Button>

        <p className="demo-title">预览图片接口</p>
        <Button
          className="primary flex"
          style={{ margin: '12px 10px' }}
          onClick={() => {
            Bridge.previewImage({
              urls: [
                'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
                'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png'
              ],

              index: 0,
              current: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png'
            })
          }}
        >
          previewImage
        </Button>

        <h2>文件接口</h2>
        <p className="demo-title">预览文件接口(仅客户端支持)</p>
        <Button
          className="primary flex"
          style={{ margin: '12px 10px' }}
          onClick={() => {
            Bridge.previewFile({
              url: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png'
            })
          }}
        >
          previewFile
        </Button>

        <h2>地理位置接口</h2>
        <p className="demo-title">查看地理位置接口(客户端、企微、支付宝生活号、飞书、钉钉)</p>
        <Button
          className="primary flex"
          style={{ margin: '12px 10px' }}
          onClick={() => {
            Bridge.openLocation({
              slatitude: 32.02, // 起点纬度
              slongitude: 118.79, // 起点经度
              sname: '起点', // 起点名
              latitude: 39.81, // 纬度，浮点数，范围为90 ~ -90
              longitude: 116.49, // 经度，浮点数，范围为180 ~ -180。
              name: '终点', // 位置名
              address: '终点地址名', // 地址详情说明
              scale: 16 // 地图缩放级别,整形值,范围从1~28。默认为16
            })
          }}
        >
          openLocation
        </Button>

        <p className="demo-title">获取地理位置接口</p>
        <Button
          className="primary flex"
          style={{ margin: '12px 10px' }}
          onClick={() => {
            Loading.show({
              content: '定位中...'
            })
            Bridge.getLocation({
              type: 'gcj02',
              success: (res) => {
                Loading.hide()
                console.log(res)
                alert(JSON.stringify(res))
              },
              fail: (res) => {
                Loading.hide()
                console.log(res)
                alert(JSON.stringify(res))
              }
            })
          }}
        >
          getLocation(gcj02)
        </Button>

        <Button
          className="primary flex"
          style={{ margin: '12px 10px' }}
          onClick={() => {
            Loading.show({
              content: '定位中...'
            })
            Bridge.getLocation({
              type: 'wgs84',
              success: (res) => {
                Loading.hide()
                console.log(res)
                alert(JSON.stringify(res))
              },
              fail: (res) => {
                Loading.hide()
                console.log(res)
                alert(JSON.stringify(res))
              }
            })
          }}
        >
          getLocation(wgs84)
        </Button>

        <p className="demo-title">分享: 支持勤策(ios、android)、微信、企微、小程序、飞书、钉钉</p>
        <Share.Combo
          onBeforeOpen={() => {
            Loading.show({
              content: '获取小程序分享链接'
            })
            return new Promise((resolve) => {
              setTimeout(() => {
                Loading.hide()
                setShareTo({
                  wechat: {
                    title: '标题',
                    description: '描述',
                    imageUrl: 'https://res.waiqin365.com/d/seedsui/logo.png',
                    url: 'https://www.baidu.com'
                  },
                  miniprogram: {
                    title: '标题',
                    description: '描述',
                    imageUrl: 'https://res.waiqin365.com/d/seedsui/logo.png',
                    url: 'https://servicewechat.com/wxascheme/jump_wxa?url=weixin://dl/business/?t=IUGVzjsue7u',
                    miniProgramId: 'gh_00011085b545',
                    miniProgramPath:
                      '/pages/Login/index?sharePath=%2Fpages%2FBlog%2FShareDetail%2Findex%3Finfoid%3D5083717378142702100&tenantid=6019160693176440421'
                  },
                  moments: {
                    title: '标题',
                    description: '描述',
                    imageUrl: 'https://res.waiqin365.com/d/seedsui/logo.png',
                    url: 'https://www.baidu.com'
                  },
                  wecom: {
                    title: '标题',
                    description: '描述',
                    imageUrl: 'https://res.waiqin365.com/d/seedsui/logo.png',
                    url: 'https://www.baidu.com'
                  },
                  dingtalk: {
                    title: '标题',
                    description: '描述',
                    imageUrl: 'https://res.waiqin365.com/d/seedsui/logo.png',
                    url: 'https://www.baidu.com'
                  },
                  lark: {
                    title: '标题',
                    description: '描述',
                    imageUrl: 'https://res.waiqin365.com/d/seedsui/logo.png',
                    url: 'https://www.baidu.com'
                  }
                })
                resolve(true)
              }, 2000)
            })
          }}
          shareTo={shareTo}
        >
          <Button className="primary flex" style={{ margin: '12px 10px' }}>
            分享
          </Button>
        </Share.Combo>
      </Layout.Main>
    </Layout>
  )
}
