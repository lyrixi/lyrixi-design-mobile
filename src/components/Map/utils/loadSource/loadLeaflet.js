// 内库使用-start
import AssetUtil from '../../../../utils/AssetUtil'
// 内库使用-end

/* 测试使用-start
import { AssetUtil } from 'lyrixi-design-mobile'
测试使用-end */

// 加载地图资源
function loadLeaflet({ css, js } = {}) {
  return new Promise((resolve) => {
    if (window.L) {
      resolve(window.L)
      return
    }

    // Delete old css
    const cssTag = document.getElementById('leaflet-css')
    if (cssTag) {
      cssTag.parentNode.removeChild(cssTag)
    }

    // Load css
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    // 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    link.href =
      css ||
      'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/plugin/leaflet/css/leaflet.css'
    link.id = 'leaflet-css'
    document.head.appendChild(link)

    // Delete old script
    const scriptTag = document.getElementById('leaflet-js')
    if (scriptTag) {
      scriptTag.parentNode.removeChild(scriptTag)
    }

    // Load js
    // 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
    AssetUtil.loadJs(
      js || 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/plugin/leaflet/js/leaflet.js',
      {
        id: 'leaflet-js',
        // integrity: 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=',
        // crossorigin: '',
        onSuccess: () => {
          resolve(window.L)
        },
        onError: () => {
          resolve(`leaflet加载失败`)
        }
      }
    )
  })
}

export default loadLeaflet
