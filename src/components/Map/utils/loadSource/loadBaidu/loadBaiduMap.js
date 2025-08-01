// 内库使用-start
import LocaleUtil from './../../../../../utils/LocaleUtil'
import AssetUtil from './../../../../../utils/AssetUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, AssetUtil } from 'lyrixi-design-mobile'
测试使用-end */

// 加载BMap地图资源
function loadBMap(key) {
  return new Promise((resolve) => {
    if (window.BMap) {
      resolve(window.BMap)
      return
    }

    // Delete old script
    const scriptTag = document.getElementById('bmap-map-js')
    if (scriptTag) {
      scriptTag.parentNode.removeChild(scriptTag)
    }

    // Load js
    AssetUtil.loadJs(
      `https://api.map.baidu.com/api?v=3.0&ak=${key}&callback=&callback=onBMapLoad`,
      {
        id: 'bmap-map-js',
        success: () => {
          window.onBMapLoad = function () {
            if (window.BMap) {
              resolve(window.BMap)
            } else {
              resolve(LocaleUtil.locale(`地图库加载失败, 请稍后再试`, 'SeedsUI_map_js_load_failed'))
            }
          }
        },
        fail: () => {
          resolve(LocaleUtil.locale(`地图库加载失败, 请稍后再试`, 'SeedsUI_map_js_load_failed'))
        }
      }
    )
  })
}

export default loadBMap
