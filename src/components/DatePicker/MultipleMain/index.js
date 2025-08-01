import React, { forwardRef, useRef, useImperativeHandle, useEffect, useState } from 'react'
import getTitleByType from './../utils/getTitleByType'
import Main from './../Main'
import formatValue from './formatValue'
import getActiveTab from './getActiveTab'

// 内库使用-start
import DateUtil from './../../../utils/DateUtil'
import TabBar from './../../TabBar'
// 内库使用-end

/* 测试使用-start
import { DateUtil, TabBar } from 'lyrixi-design-mobile'
测试使用-end */

// 日期多选
function MultipleMain(
  {
    visible = true,

    separator,
    // Main fixed properties
    value,
    type = 'date', // year | quarter | month | date | time | datetime | week
    allowClear,
    min,
    max,
    hourStep,
    minuteStep,
    onChange
  },
  ref
) {
  // 格式化数据
  let tabsRef = useRef(null)
  tabsRef.current = formatValue(value, type)
  let [activeTab, setActiveTab] = useState(null)

  // Expose tools
  const mainRef = useRef(null)
  useImperativeHandle(ref, () => {
    return {
      mainDOM: mainRef.current,
      getMainDOM: () => mainRef.current,
      // 获取标题
      getTitle: () => {
        return getTitleByType(type)
      },
      getValue: () => {
        return tabsRef.current
      }
    }
  })

  useEffect(() => {
    if (activeTab) return
    setActiveTab(getActiveTab(tabsRef.current))
    // eslint-disable-next-line
  }, [value])

  return (
    <div ref={mainRef} className="picker-multiple-main">
      {Array.isArray(tabsRef.current) && tabsRef.current.length ? (
        <>
          <TabBar.Tabs
            className="picker-tabs"
            separator={separator}
            descriptionPosition="top"
            list={tabsRef.current}
            value={activeTab}
            onChange={setActiveTab}
          />

          {tabsRef.current.map((tab, index) => {
            // 主体内容(wrapper)是否显示
            let contentVisible = tab?.id === activeTab?.id
            if (!contentVisible) return null
            return (
              <Main
                key={tab.id || index}
                value={tab.value}
                type={type}
                min={min}
                max={max}
                hourStep={hourStep}
                minuteStep={minuteStep}
                className={tab.disabled ? 'disabled' : ''}
                onChange={(date) => {
                  tab.value = date
                  tab.name = DateUtil.format(tab.value, type)
                  onChange && onChange(tabsRef.current)
                }}
              />
            )
          })}
        </>
      ) : null}
    </div>
  )
}

export default forwardRef(MultipleMain)
