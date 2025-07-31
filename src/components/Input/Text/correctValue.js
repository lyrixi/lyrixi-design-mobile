import { maxLengthFormatter, minMaxFormatter, precisionFormatter } from './utils'

// 矫正最大长度和小数位截取
function correctValue(val, { min, max, maxLength, trim, precision }) {
  if (val === undefined || val === '') return val
  if (typeof val !== 'string' && typeof val !== 'number') return ''

  // 最大最小值矫正
  // eslint-disable-next-line
  val = minMaxFormatter(val, { min, max })

  // 小数位截取
  // eslint-disable-next-line
  val = precisionFormatter(val, { precision, trim })

  // 最大长度载取
  // eslint-disable-next-line
  val = maxLengthFormatter(val, { maxLength })

  return val
}

export default correctValue
