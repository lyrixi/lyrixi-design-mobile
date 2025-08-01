import _ from 'lodash'
// 显示名称
function getDisplayValue(value, { separator } = {}) {
  if (typeof value !== 'object') {
    return value
  }
  // 纯对象
  if (_.isPlainObject(value)) {
    return value?.name || ''
  }
  // 数组
  else if (Array.isArray(value)) {
    let displayValues = value.map((item) => item?.name || '')
    displayValues = displayValues.filter((item) => item)
    return displayValues.join(separator && typeof separator === 'string' ? separator : ',')
  }

  return ''
}

export default getDisplayValue
