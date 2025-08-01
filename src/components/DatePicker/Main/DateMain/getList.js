// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
import DateUtil from './../../../../utils/DateUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, DateUtil } from 'lyrixi-design-mobile'
测试使用-end */

// 数据
function getList(value, type, { hourStep, minuteStep }) {
  if (!hourStep || typeof hourStep !== 'number') {
    // eslint-disable-next-line
    hourStep = 1
  }
  if (!minuteStep || typeof minuteStep !== 'number') {
    // eslint-disable-next-line
    minuteStep = 1
  }

  // Year
  let years = []
  for (let item = new Date().getFullYear() - 120; item <= new Date().getFullYear() + 120; item++) {
    years.push({
      id: item,
      name: LocaleUtil.locale(`${item}年`, 'datepicker_unit_year', [String(item)])
    })
  }

  // Month
  let months = []
  for (let item = 1; item <= 12; item++) {
    months.push({
      id: item,
      name: LocaleUtil.locale(`${item}月`, 'datepicker_unit_month', [String(item)])
    })
  }

  // Date
  let dates = []
  for (let item = 1; item <= DateUtil.getDaysInMonth(value); item++) {
    dates.push({
      id: item,
      name: LocaleUtil.locale(`${item}日`, 'datepicker_unit_date', [String(item)])
    })
  }

  // Hour
  let hours = []
  for (let item = 0; item <= 23; item += hourStep) {
    hours.push({
      id: item,
      name: LocaleUtil.locale(`${item}时`, 'datepicker_unit_hour', [String(item)])
    })
  }

  // Minute
  let minutes = []
  for (let item = 0; item <= 59; item += minuteStep) {
    minutes.push({
      id: item,
      name: LocaleUtil.locale(`${item}分`, 'datepicker_unit_minute', [String(item)])
    })
  }

  // Quarter
  let quarters = []
  for (let item = 1; item <= 4; item++) {
    quarters.push({
      id: item,
      name: 'Q' + item
    })
  }

  if (type === 'year') {
    return [years]
  }
  if (type === 'quarter') {
    return [years, quarters]
  }
  if (type === 'month') {
    return [years, months]
  }
  if (type === 'date') {
    return [years, months, dates]
  }
  if (type === 'datetime') {
    return [years, months, dates, hours, minutes]
  }
  if (type === 'time') {
    return [hours, minutes]
  }

  return null
}

export default getList
