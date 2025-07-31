import React, { forwardRef, useState } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import LocaleUtil from './../../../utils/LocaleUtil'
import Toast from './../../Toast'
import DatePicker from './../../DatePicker'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, LocaleUtil, Toast, DatePicker } from 'lyrixi-design-mobile'
测试使用-end */

const getDefaultRanges = DatePicker.getDefaultRanges

const DateRangeBar = (
  { portal, title, arrow = <i className="toolbar-list-combo-arrow"></i>, ranges, ...props },
  ref
) => {
  if (ranges === undefined) {
    // eslint-disable-next-line
    ranges = getDefaultRanges()
  }
  const [active, setActive] = useState(false)
  return (
    <DatePicker.RangeCombo
      ref={ref}
      portal={portal}
      ranges={ranges}
      titles={{
        custom: LocaleUtil.locale('自定义选择', 'SeedsUI_date_range_custom_title'),
        selector: LocaleUtil.locale('快捷选择', 'SeedsUI_date_range_selector_title')
      }}
      onVisibleChange={(visible) => {
        props?.onBeforeChange && props?.onBeforeChange?.(visible)

        let toolbarDOM = ref.current?.comboDOM?.closest?.('.toolbar')
        if (!toolbarDOM) return

        if (visible) {
          toolbarDOM.classList.add('active')
        } else {
          toolbarDOM.classList.remove('active')
        }
      }}
      // 自定义渲染
      combo={({ displayValue }) => {
        return (
          <>
            <span className="toolbar-list-combo-title">
              {title ||
                displayValue ||
                LocaleUtil.locale('自定义区间', 'SeedsUI_toolbar_date_range_default_display_value')}
            </span>
            {arrow}
          </>
        )
      }}
      modalProps={{
        maskProps: {
          className: 'toolbar-list-modal-mask',
          style: {
            zIndex: 99
          }
        },
        onVisibleChange: (visible) => {
          setActive(visible)
        }
      }}
      onError={(err) =>
        Toast.show({
          content: err.errMsg || '',
          maskClickable: true
        })
      }
      {...props}
      className={DOMUtil.classNames(
        'toolbar-list-combo',
        active ? ' active' : '',
        props?.className
      )}
    ></DatePicker.RangeCombo>
  )
}

export default forwardRef(DateRangeBar)
