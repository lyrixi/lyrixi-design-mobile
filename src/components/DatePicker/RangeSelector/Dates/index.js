import React from 'react'
import RangeCombo from './../../RangeCombo'
// 使用自定义InputText显示
import InputText from './InputText'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
import Input from './../../../Input'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Input } from 'lyrixi-design-mobile'
测试使用-end */

// 自定义日期选择弹窗: 两框选择
export default function CustomDates({
  portal,
  type,
  value,
  min,
  max,
  hourStep,
  minuteStep,
  disabledStart,
  disabledEnd,
  allowClear,
  onChange,

  // Modal props
  maskClassName,
  maskStyle,
  modalClassName,
  modalStyle
}) {
  return (
    <div className="datepicker-rangeselector-date">
      <RangeCombo
        ranges={null}
        maskClassName={maskClassName}
        maskStyle={maskStyle}
        modalClassName={modalClassName}
        modalStyle={modalStyle}
        portal={portal}
        // 使用自定义InputText显示
        combo={(comboProps) => {
          return <InputText type={type} {...comboProps} />
        }}
        type={type}
        value={value}
        disabledStart={disabledStart}
        disabledEnd={disabledEnd}
        min={min}
        max={max}
        separator="-"
        hourStep={hourStep}
        minuteStep={minuteStep}
        onChange={onChange}
        placeholder={LocaleUtil.locale('请选择', 'SeedsUI_placeholder_select')}
        allowClear={allowClear}
        clear={({ clearable, triggerClear }) => {
          return clearable ? <Input.IconClear onClick={triggerClear} /> : <Input.IconRightArrow />
        }}
      />
    </div>
  )
}
