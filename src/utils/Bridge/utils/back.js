import _ from 'lodash'

// 内库使用-start
import LocaleUtil from './../../LocaleUtil'
import Device from './../../Device'
import Message from './../../../components/Message'
// 内库使用-end

/* 测试使用-start
import { Device, Message, LocaleUtil } from 'lyrixi-design-mobile'
测试使用-end */

// 客户端默认返回控制
async function back(backLvl, options, Bridge) {
  const { onSuccess, onError } = options || {}
  // 返回操作对象与返回层级
  let _backLvl = backLvl || -1

  // 清空无效的h5返回
  if (
    Object.prototype.toString.call(window.onHistoryBacks) !== '[object Object]' ||
    _.isEmpty(window.onHistoryBacks)
  ) {
    window.onHistoryBacks = null
  }

  let isFromApp = Device.getUrlParameter('isFromApp') || ''

  // 自定义返回
  if (typeof window.onMonitorBack === 'function') {
    console.log('back:window.onMonitorBack自定义返回')
    let monitor = await window.onMonitorBack()
    let isBack = monitor || false
    if (isBack) {
      onSuccess && onSuccess()
    } else {
      onError &&
        onError({
          status: 'error',
          message: 'back:window.onMonitorBack'
        })
    }
    return isBack
  }
  // 关闭返回
  else if (isFromApp === '1') {
    console.log('back:', Bridge.closeWindow)
    // 关闭当前页面
    try {
      Bridge.closeWindow()
    } catch (error) {
      console.log(error)
    }
    onSuccess && onSuccess()
    return true
  }
  // 返回首页
  else if (isFromApp === 'home') {
    console.log('back, home:', Bridge.goHome)
    try {
      Bridge.goHome()
    } catch (error) {
      console.log(error)
    }
    onSuccess && onSuccess()
    return true
  }
  // 提示后，关闭返回，或者历史返回
  else if (isFromApp.indexOf('confirm-close') !== -1 || isFromApp.indexOf('confirm') !== -1) {
    // 默认提示信息
    let confirmCaption = LocaleUtil.locale('您确定要离开此页面吗?', 'SeedsUI_quit_page_confirm')
    // 地址栏动态提示信息
    if (isFromApp.indexOf('confirm-close:') !== -1) {
      let newConfirmCaption = isFromApp.replace('confirm-close:', '')
      if (newConfirmCaption) {
        confirmCaption = decodeURIComponent(decodeURIComponent(newConfirmCaption))
      }
    } else if (isFromApp.indexOf('confirm:') !== -1) {
      let newConfirmCaption = isFromApp.replace('confirm:', '')
      if (newConfirmCaption) {
        confirmCaption = decodeURIComponent(decodeURIComponent(newConfirmCaption))
      }
    }

    Message.open({
      content: confirmCaption,
      buttons: [
        {
          name: '取消',
          onClick: () => {
            onError && onError()
            return true
          }
        },
        {
          name: '确定',
          className: 'primary',
          onClick: () => {
            // 提示后关闭当前页面
            if (isFromApp.indexOf('confirm-close') !== -1) {
              console.log('back:confirm-close', Bridge.closeWindow)
              Bridge.closeWindow()
            }
            // 提示后返回上一页
            else {
              console.log('back:confirm, history')
              window.history.go(_backLvl)
            }
            onSuccess && onSuccess()
            return true
          }
        }
      ]
    })
  }
  // 返回上一页
  else {
    window.history.go(_backLvl)
    onSuccess && onSuccess()
    return true
  }
}

export default back
