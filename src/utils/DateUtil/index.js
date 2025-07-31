import plugin from './plugin'
import toDate from './toDate'
import startOrEnd from './startOrEnd'
import getWeekDates from './getWeekDates'
import getDaysInMonth from './getDaysInMonth'

import compare from './compare'
import diff from './diff'
import add from './add'
import format from './format'
import quarter from './quarter'
import betweenTimeZones from './utc/betweenTimeZones.js'
import utcToTimeZone from './utc/utcToTimeZone.js'
import timeZoneToUtc from './utc/timeZoneToUtc.js'
import utcOffset from './utc/utcOffset'
import parseUtcOffset from './utc/parseUtcOffset'
import stringifyUtcOffset from './utc/stringifyUtcOffset'

// 与add功能重复, 但为了兼容旧版本, 保留
import previousWeek from './previousWeek'
import nextWeek from './nextWeek'

// 初始化插件, 没有插件无法使用此库
plugin()

// 日期工具类
const dateUtil = {
  plugin: plugin,
  // 转为日期格式
  toDate: toDate,
  // 边界时间, 支持: 'year', 'quarter', 'month', 'week', 'date'
  startOrEnd: startOrEnd,
  // 周操作
  getWeekDates: getWeekDates,
  previousWeek: previousWeek,
  nextWeek: nextWeek,
  // 月操作
  getDaysInMonth: getDaysInMonth,
  // 比较年月日,大于返回1,等于返回0,小于返回-1,错误返回undefined
  compare: compare,
  diff: diff,
  add: add,
  // 格式化日期
  format: format,
  // 获取当前季度
  quarter: quarter,
  // 当前时区地址名称
  timeZonePlaceName: () => {
    return typeof Intl?.DateTimeFormat === 'function'
      ? new Intl.DateTimeFormat().resolvedOptions().timeZone
      : ''
  },
  // 当前UTC偏移量: 分钟数是国际时区标准
  utcOffset: utcOffset,
  // 将 UTC 转为指定时区
  utcToTimeZone: (utcDate, offset) => {
    if (utcDate && offset) {
      return utcToTimeZone(utcDate, offset)
    }
    return utcDate || new Date()
  },
  // 在两个时区间转换
  betweenTimeZones: (utcDate, fromOffset, toOffset) => {
    if (utcDate && fromOffset && toOffset) {
      return betweenTimeZones(utcDate, fromOffset, toOffset)
    }
    return utcDate || new Date()
  },
  // 将指定时区时间转为 UTC
  timeZoneToUtc: (date, offset) => {
    if (date && offset) {
      return timeZoneToUtc(date, offset)
    }
    return date || new Date()
  },
  // 解析UTC偏移量
  parseUtcOffset: parseUtcOffset,
  // 时区字符串化
  stringifyUtcOffset: stringifyUtcOffset
}

export default dateUtil
