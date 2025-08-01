// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
import Request from './../../../../utils/Request'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Request } from 'lyrixi-design-mobile'
测试使用-end */

function loadCountryRegions(countryId = '86') {
  return new Promise((resolve) => {
    const language = window.seedsLocaleLanguage || 'zh_CN'

    // 测试，后台完成后删除此段
    // window.countryProvinces = {
    //   86: require('library/components/Cascader/utils/data/chinaData')
    // }

    // 优先读取缓存
    window.countryProvinces =
      window.countryProvinces ||
      JSON.parse(window.sessionStorage.getItem('countryProvinces') || '{}')
    if (window.countryProvinces?.[countryId]) {
      resolve(window.countryProvinces[countryId])
      return
    }

    // 加载语言对应的文件
    Request.get(`https://url/${language}/${countryId}.json`)
      .then(function (list) {
        // 存到缓存中
        window.countryProvinces = JSON.parse(
          window.sessionStorage.getItem('countryProvinces') || '{}'
        )
        window.countryProvinces[countryId] = list || []
        window.sessionStorage.setItem('countryProvinces', JSON.stringify(window.countryProvinces))
        resolve(window.countryProvinces[countryId])
      })
      .catch(() => {
        resolve(LocaleUtil.locale('获取省市区数据失败', 'SeedsUI_cascader_countryRegions_error'))
      })
  })
}

export default loadCountryRegions
