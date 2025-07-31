// 官方文档: https://open.dingtalk.com/document/isvapp/read-before-development
// API总览: https://open.dingtalk.com/document/orgapp/jsapi-overview-client-org
// 鉴权: https://open.dingtalk.com/document/orgapp/jsapi-authentication

import _ from 'lodash'
import BridgeBase from './../base'
import back from './../utils/back'
import ready from './../utils/ready'
import coordToFit from './../utils/coordToFit'
import compressImage from './compressImage'

// 内库使用-start
import LocaleUtil from './../../LocaleUtil'
import GeoUtil from './../../GeoUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, GeoUtil } from 'lyrixi-design-mobile'
测试使用-end */

let Bridge = {
  ...BridgeBase,
  ready: function (callback, options) {
    ready(callback, options, this.platform)
  },
  back: function (backLvl, options) {
    back(backLvl, options, Bridge)
  },
  /**
   * 定制功能
   */
  // 关闭窗口
  closeWindow: function () {
    window.top.dd.closePage({
      fail: (error) => {
        console.error('DingTalk closeWindow fail:', error)
      }
    })
  },
  // 返回监听
  onHistoryBack: function (params) {
    console.log('钉钉不支持监听物理返回')
  },
  /**
   * 修改原生标题
   * @param {Object} params {title: '自定义标题'}
   */
  setTitle: function (params) {
    if (typeof params?.title === 'string') {
      window.top.dd.setNavigationTitle({
        title: params?.title
      })
    }
  },
  // 地图查看
  openLocation: function (params) {
    if (_.isEmpty(params)) return
    let newParams = coordToFit(params)
    console.log('调用钉钉地图...', newParams)

    window.top.dd.openLocation({
      title: newParams.name || '',
      address: newParams.address || '',
      latitude: newParams.latitude,
      longitude: newParams.longitude,
      fail: (error) => {
        console.error('DingTalk openLocation fail:', error)
      }
    })
  },
  /**
   * 钉钉定位需要鉴权, 获取当前地理位置
   * @param {Object} params
   * params: {
   * type {String}: 'wgs84'|'gcj02'坐标类型微信默认使用国际坐标'wgs84',
   * }
   * @returns {Object} {latitude: '纬度', longitude: '经度', speed:'速度', accuracy:'位置精度'}
   */
  getLocation: function (params = {}) {
    // 钉钉定位需要鉴权, 使用浏览器定位代替
    // BridgeBase.getBrowserLocation(params)
    const { type, success, fail } = params || {}
    let targetType = type || 'gcj02'
    console.log('调用钉钉定位...', params)
    window.top.dd.getLocation({
      type: 0,
      useCache: false,
      coordinate: '1', // 高德定位
      cacheTimeout: 20,
      withReGeocode: false,
      targetAccuracy: '200',
      success: (res) => {
        console.log('钉钉定位完成', res)
        let latitude = res.latitude
        let longitude = res.longitude
        if (!longitude || !latitude) {
          console.error('钉钉定位失败', res)
          if (fail) {
            fail({
              errCode: res.errorCode,
              errMsg: res.errorMessage
            })
          }
          return
        }
        let currentType = 'gcj02'
        let isInChina = GeoUtil.isInChina([longitude, latitude])
        if (isInChina) {
          currentType = 'gcj02'
        } else {
          currentType = 'wgs84'
        }

        const points = GeoUtil.coordtransform([longitude, latitude], currentType, targetType)
        longitude = points[0]
        latitude = points[1]

        let result = {
          errMsg: 'getLocation:ok',
          type: targetType,
          latitude: latitude,
          longitude: longitude,
          accuracy: res.accuracy
        }
        console.log('转换后坐标', result)
        if (success) success(result)
      },
      fail: (err) => {
        console.error('钉钉定位失败', err)
        if (fail) {
          fail({
            errCode: err.errorCode,
            errMsg: err.errorMessage
          })
        }
      }
    })
  },
  /**
   * 扫码
   * @param {Object} params
   * @returns {Object} {latitude: '纬度', longitude: '经度', speed:'速度', accuracy:'位置精度'}
   */
  scanQRCode(params = {}) {
    const { scanType, success, fail } = params || {}

    let type = 'all'
    if (scanType.length === 1) {
      if (scanType.includes('qrCode')) {
        type = 'qrCode'
      } else if (scanType.includes('barCode')) {
        type = 'barCode'
      }
    }
    window.top.dd.biz.util.scan({
      type: type,
      onSuccess: function (res) {
        success && success({ resultStr: res.text })
      },
      onFail: function (res) {
        if (fail) {
          fail({
            errCode: res.errorCode,
            errMsg: res.errorMessage
          })
        }
      }
    })
  },
  // https://open.dingtalk.com/document/isvapp/jsapi-choose-image
  chooseImage: function (params) {
    let count = params?.count || 9
    // 当sourceType参数内只有camera时，count只能传1，否则会报错。
    if (params?.sourceType?.length === 1 && params.sourceType.includes('camera') && count > 1) {
      count = 1
    }
    window.top.dd.chooseImage({
      count: count,
      secret: false,
      position: 'back',
      sourceType: params?.sourceType || ['camera', 'album'],
      success: async (res) => {
        let localFiles = []
        for (let item of res?.files) {
          // 构建localFiles
          let newItem = {
            // https://resource/MzNjMmEwN2FjMjg0YTBkYTI4NTdlYmJhNTI3NDhlZWU=.image
            filePath: item.path,
            // After testing, fileName useless when uploadImage
            // fileName: item.path.substring(item.path.lastIndexOf('/') + 1) + `.${item.fileType}`,
            fileType: item.fileType
            // fileSize: item.size // 本地文件大小，单位 B, 压缩后不返回文件大于, 所以此属性不能用。
          }

          // 压缩图片
          if (params?.sizeType?.indexOf?.('compressed') >= 0) {
            newItem = await compressImage(newItem)
          }

          localFiles.push(newItem)
        }

        params?.success && params.success({ localFiles: localFiles })
      },
      fail: (error) => {
        // Cancel: ios返回"11"; android拍照返回11,相册返回-1; 鸿蒙相册返回"-1";
        if (
          error?.errorCode === '11' ||
          error?.errorCode === '-1' ||
          error?.errorCode === 11 ||
          error?.errorCode === -1
        ) {
          params?.cancel && params.cancel()
        } else {
          console.error('钉钉uploadImage失败:', error)
          params?.fail && params.fail({ errMsg: `chooseImage:fail ${error?.errorCode || ''}` })
        }
      },
      complete: params?.complete
    })
  },
  // https://open.dingtalk.com/document/orgapp/jsapi-upload-file?spm=ding_open_doc.document.0.0.8e3325c7MejZDb
  uploadImage: function ({
    localFile,
    url,
    header = {},
    formData = {},
    success,
    fail,
    complete
  } = {}) {
    // Determine whether the params are valid
    if (!localFile?.fileType || !localFile?.filePath) {
      fail &&
        fail({
          errMsg: `uploadImage:fail localFile error`
        })
      return
    }
    if (!url || typeof url !== 'string') {
      fail &&
        fail({
          errMsg: `uploadImage:fail url error`
        })
      return
    }

    console.log('调用钉钉uploadImage:', {
      url: url,
      header: header,
      // Hard coding is fine
      fileName: 'file',
      filePath: localFile.filePath,
      fileType: localFile.fileType,
      formData: formData
    })

    window.top.dd.uploadFile({
      url: url,
      header: header,
      fileName: 'file',
      filePath: localFile.filePath,
      fileType: localFile.fileType,
      formData: formData,
      success: (res) => {
        console.log('钉钉uploadImage成功:', res)
        const { data, statusCode } = res
        // 官方文档写的String, 但实际返回是Number类型
        if (statusCode !== 200) {
          fail &&
            fail({
              errMsg: `uploadImage:fail ${LocaleUtil.locale(
                '网络异常，上传失败',
                'SeedsUI_upload_network_error'
              )}`
            })
          return
        }

        let result = data
        if (typeof data === 'string') {
          try {
            result = JSON.parse(data)
          } catch (e) {}
        }

        success && success(result)
      },
      fail: (error) => {
        console.error('钉钉uploadImage失败:', error)
        if (fail) fail({ errMsg: `uploadImage:fail ${error?.errorCode || ''}` })
      },
      complete: complete
    })
  },
  /**
   * 照片预览
   * @param {Object} params
     {
       index: 0, // 当前显示图片索引，默认 0
       current: '', // 当前显示图片的http链接
       urls: [] // 需要预览的图片http链接列表
     }
   */
  previewImage: function (params) {
    let index = params?.index || 0
    if (typeof params?.index !== 'number' && typeof params?.current === 'string') {
      index = params?.urls.indexOf?.(params?.current)
      if (index < 0) index = 0
    }

    window.top.dd.previewImage({
      urls: params?.urls,
      current: index,
      fail: (error) => {
        console.log('钉钉previewImage失败:', error)
      }
    })
  }
}

export default Bridge
