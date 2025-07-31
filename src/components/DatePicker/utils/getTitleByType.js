// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-design-mobile'
测试使用-end */

function getTitleByType(type) {
  if (type === 'year') {
    return LocaleUtil.locale('选择年', 'SeedsUI_date_modal_title_year')
  }
  if (type === 'quarter') {
    return LocaleUtil.locale('选择季', 'SeedsUI_date_modal_title_quarter')
  }
  if (type === 'month') {
    return LocaleUtil.locale('选择年月', 'SeedsUI_date_modal_title_month')
  }
  if (type === 'date') {
    return LocaleUtil.locale('选择日期', 'SeedsUI_date_modal_title_date')
  }
  if (type === 'time') {
    return LocaleUtil.locale('选择时间', 'SeedsUI_date_modal_title_time')
  }
  if (type === 'datetime') {
    return LocaleUtil.locale('选择日期时间', 'SeedsUI_date_modal_title_datetime')
  }
  if (type === 'week') {
    return LocaleUtil.locale('选择周', 'SeedsUI_date_modal_title_week')
  }
}

export default getTitleByType
