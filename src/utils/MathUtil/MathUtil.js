// 是否为合法数值
function isNumber(str) {
  // 1. 基础检查：空值/空白字符
  if (typeof str !== 'string' || str.trim() === '') return false

  // 2. 正则匹配数值格式（含科学计数法）
  const numericRegex = /^[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?$/
  if (!numericRegex.test(str)) return false

  // 3. 转换后验证（排除BigInt和特殊值）
  const num = Number(str)
  return !isNaN(num) && isFinite(num)
}

// 提取数值
function extractNumber(str) {
  // 匹配包含小数点的连续数值
  const match = str.match(/-?\d+(?:\.\d+)?/)
  return match ? match[0] : ''
}

/**
 * 数字千分位/小数位补充两位
 * @param {Number} number
 * @param {Boolean} decimalThousands 小数是否需要千分位
 */
function thousands(number, decimalThousands) {
  // 小数位也要千分位
  if (decimalThousands) {
    return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  // 小数位不要千分位
  let parts = String(number).split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}

/**
 * 小数四舍五入 fixed(1.005, 2) = 1.00
 * @param {Number} number
 * @param {Number} precision
 * @returns
 */
function fixed(number, precision) {
  let numStr = String(number)
  let decimalIndex = numStr.indexOf('.')
  if (decimalIndex !== -1) {
    // Truncate to specified number of decimal places
    numStr = numStr.substring(0, decimalIndex + precision + 1)
  }
  return numStr
}

/**
 * 小数四舍五入 round(1.005, 2) = 1.01
 * @param {Number} number
 * @param {Number} precision
 * @returns
 */
function round(number, precision) {
  return Math.round(+number + 'e' + precision) / Math.pow(10, precision)
}

/**
 * 数字精度丢失
 * @param {Number} number
 * @param {Number} precision
 * @returns
 */
function strip(number, precision = 12) {
  return +parseFloat(number.toPrecision(precision))
}

/**
 * 反千分位
 * @param {Number} number
 * @returns
 */
function antiThousands(number) {
  return `${number || ''}`.replace(/,/g, '')
}

/**
 * 计算惯性
 * @param {Number} cellSize 单项高度
 * @param {Number} distance 滚动的总距离, 负数为反向滑动
 * @param {Number} duration 滚动的总时长
 * @param {Number} currentPosition 当前位置
 * @param {Number} minPosition 最小位置
 * @param {Number} maxPosition 最大位置
 * @returns
 */
function inertia({ cellSize, distance, duration, currentPosition, minPosition, maxPosition }) {
  // 摩擦力
  let friction = 0.002

  // 惯性动画时长: 滑动时长 和 滑动距离
  let inertiaDuration = Math.abs((2 * distance) / duration / friction)

  // 惯性距离: 使用公式算出offset(新距离)
  let inertiaRange = (friction / 2) * (inertiaDuration * inertiaDuration)
  if (distance < 0) {
    inertiaRange = -inertiaRange
  }

  // 惯性位置: 当前位置 + 惯性距离
  let inertiaPosition = Number(Math.abs(currentPosition)) + Number(inertiaRange || 0)

  // 矫正位置与时长
  // 最上面
  if (typeof minPosition === 'number' && inertiaPosition < minPosition) {
    // Math.abs(Math.round(inertiaPosition)) - Math.abs(Math.round(minPosition))
    inertiaDuration = 300
    inertiaPosition = minPosition
  }
  // 最下面
  else if (typeof maxPosition === 'number' && inertiaPosition > maxPosition) {
    inertiaDuration = 300
    inertiaPosition = maxPosition
  }
  // 在中间
  else {
    let remainder = inertiaPosition % cellSize
    if (remainder !== 0) {
      // 算出比例
      let divided = Math.round(inertiaPosition / cellSize)
      // 对准位置
      inertiaPosition = cellSize * divided
    }
  }

  // 返回值
  return {
    duration: Math.round(inertiaDuration),
    position: Math.round(inertiaPosition),
    index: Math.abs(inertiaPosition / cellSize)
  }
}

// eslint-disable-next-line
const MathUtil = { isNumber, extractNumber, round, fixed, strip, thousands, antiThousands, inertia }

export default MathUtil
