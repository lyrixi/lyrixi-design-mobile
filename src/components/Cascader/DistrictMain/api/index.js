import loadCountries from './loadCountries'
import formatCountries from './formatCountries'
import loadCountryRegions from './loadCountryRegions'
import formatCountryRegions from './formatCountryRegions'
import loadStreets from './loadStreets'
import formatStreets from './formatStreets'

const api = {
  // 获取国家
  loadCountries: async function (type) {
    let result = await loadCountries()
    return formatCountries(result, type)
  },
  /**
   * @description: 获取省市区
   * @param {Number} countryId 国家ID
   * @return {[{id: '100200', name: '江苏省', parentid: '86', ...}]}
   */
  loadCountryRegions: async function (countryId) {
    let result = await loadCountryRegions(countryId)
    return formatCountryRegions(result, countryId)
  },
  /**
   * @description: 获取街道
   * @param {Number} id 区ID
   * @return {{id: '100200300', name: '沙洲街道', parentid: '100200', type: ['street'], isLeaf: true}}
   */
  loadStreets: async function (districtId, { parent } = {}) {
    // 非市或区没有街道
    if (!parent?.type?.includes('city') && !parent?.type?.includes('district')) {
      return null
    }
    let result = await loadStreets(districtId)
    return formatStreets(result, districtId)
  }
}

export default api
