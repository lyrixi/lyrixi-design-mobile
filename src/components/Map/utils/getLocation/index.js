// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
import Bridge from './../../../../utils/Bridge'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Bridge } from 'lyrixi-design-mobile'
测试使用-end */

// 定位
function getLocation(options) {
  const type = options?.type || 'wgs84'

  // eslint-disable-next-line
  return new Promise(async (resolve) => {
    let defaultGetLocation = window?.getLocationDefault || window?.APILoaderConfig?.getLocation
    if (typeof defaultGetLocation === 'function') {
      let result = await defaultGetLocation({
        type: type
      })
      resolve(result)
      return
    }

    // 开始定位
    Bridge.getLocation({
      type: type,
      success: async (data) => {
        console.log('Lyrixi location success:', data)
        resolve(data)
      },
      fail: (error) => {
        console.error('Lyrixi location fail:', error)
        // 赋值
        resolve(LocaleUtil.locale('定位失败, 请检查定位权限是否开启', 'SeedsUI_location_failed'))
      }
    })
  })
}

export default getLocation
