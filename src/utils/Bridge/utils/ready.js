// 内库使用-start
import LocaleUtil from './../../LocaleUtil'
import AssetUtil from './../../AssetUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, AssetUtil } from 'lyrixi-design-mobile'
测试使用-end */

/**
 * 动态加载桥接库
 * @param {Func} callback 加载完成回调
 * @param {Object} options {wechatLibSrc: '', weworkLibSrc: '', wqCordovaSrc: '', wqSrc: '', fail: func({errMsg: ''})}
 */
function ready(callback, options = {}, platform) {
  // 微信支付宝平台
  if (
    platform === 'wechat' ||
    platform === 'wechatMiniprogram' ||
    platform === 'wework' ||
    platform === 'weworkMiniprogram' ||
    platform === 'alipay' ||
    platform === 'alipayMiniprogram' ||
    platform === 'dingtalk' ||
    platform === 'lark'
  ) {
    // 初始化完成不需要重复加载
    if (window.top.wx || window.top.ap || window.top.dd || (window.top.tt && window.top.h5sdk)) {
      if (callback) callback()
      return
    }

    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.defer = 'defer'

    if (platform === 'wechat') {
      script.src = options.wechatLibSrc || '//res.wx.qq.com/open/js/jweixin-1.6.0.js'
    } else if (platform === 'wechatMiniprogram') {
      script.src = options.wechatMiniprogramLibSrc || '//res.wx.qq.com/open/js/jweixin-1.6.0.js'
    } else if (platform === 'wework') {
      script.src = options.weworkLibSrc || '//res.wx.qq.com/wwopen/js/jsapi/jweixin-1.0.0.js'
    } else if (platform === 'weworkMiniprogram') {
      script.src = options.weworkMiniprogramLibSrc || '//res.wx.qq.com/open/js/jweixin-1.6.0.js'
    } else if (platform === 'alipay' || platform === 'alipayMiniprogram') {
      script.src =
        options.alipayLibSrc ||
        '//gw.alipayobjects.com/as/g/h5-lib/alipayjsapi/3.1.1/alipayjsapi.min.js'
    } else if (platform === 'dingtalk') {
      script.src =
        options.dingtalkLibSrc || '//g.alicdn.com/dingding/dingtalk-jsapi/3.0.25/dingtalk.open.js'
    } else if (platform === 'lark') {
      script.src = options.larkLibSrc || '//lf-scm-cn.feishucdn.com/lark/op/h5-js-sdk-1.5.34.js'
    }

    // 加载完成
    script.onload = async function () {
      // 支付小程序还需要加载一个js
      if (platform === 'alipayMiniprogram') {
        await AssetUtil.loadJs(options.alipayMiniprogramLibSrc || 'https://appx/web-view.min.js')
        if (window.my) {
          window.top.my = window.my
        }
        // js加载失败
        else {
          console.error('支付小程序js加载失败')
          options?.fail?.({
            errMsg: LocaleUtil.locale(
              '支付小程序js加载失败',
              'SeedsUI_alipayMiniProgram_js_load_failed'
            )
          })
        }
      }

      // 微信
      if (window.wx) {
        // eslint-disable-next-line
        window.top.wx = window.wx
      }

      // 支付宝
      if (window.ap) {
        // eslint-disable-next-line
        window.top.ap = window.ap
      }

      // 钉钉
      if (window.dd) {
        // eslint-disable-next-line
        window.top.dd = window.dd
      }

      // 飞书
      if (window.tt && window.h5sdk) {
        // eslint-disable-next-line
        window.top.tt = window.tt
        // eslint-disable-next-line
        window.top.h5sdk = window.h5sdk
      }

      if (callback) callback()
    }
    if (options.fail) {
      script.onerror = function () {
        options.fail({
          errMsg: LocaleUtil.locale('微信js加载失败', 'SeedsUI_weChat_js_load_failed')
        })
      }
    }

    if (script.src) document.body.appendChild(script)
    return
  }

  // 浏览器或其它平台
  if (callback) callback()
}

export default ready
