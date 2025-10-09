import React from 'react'
import _ from 'lodash'
import getSelectorOptions from './../../RangeMain/getSelectorOptions'

// 内库使用-start
import Selector from './../../../Selector'
// 内库使用-end

/* 测试使用-start
import { Selector } from 'lyrixi-design-mobile'
测试使用-end */

// 日期快捷选择
function Buttons({
  // Main properties
  value,
  onChange,
  rangeId,
  ranges,
  allowClear
}) {
  return (
    <>
      {/* 快捷选择 */}
      <Selector
        columns={3}
        allowClear={allowClear}
        value={[{ id: rangeId }]}
        list={getSelectorOptions(ranges)}
        onChange={(newRange) => {
          if (_.isEmpty(newRange)) {
            onChange &&
              onChange(null, {
                rangeId: null
              })
            return
          }

          let newRangeId = newRange?.[0]?.id || ''
          let newValue =
            newRangeId && Array.isArray(ranges[newRangeId]) && ranges[newRangeId].length === 2
              ? ranges[newRangeId]
              : value

          onChange &&
            onChange(newValue, {
              rangeId: newRangeId
            })
        }}
      />
    </>
  )
}

export default Buttons
