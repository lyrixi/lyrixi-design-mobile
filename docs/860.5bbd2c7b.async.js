"use strict";(self.webpackChunklyrixi_design_mobile=self.webpackChunklyrixi_design_mobile||[]).push([[860],{58233:function(e,n){n.Z=`import React, { forwardRef } from 'react'
import Modal from './../Modal'

// \u5185\u5E93\u4F7F\u7528-start
import Combo from './../../Modal/SelectCombo'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { BaseModal } from 'lyrixi-design-mobile'
const Combo = BaseModal.SelectCombo
\u6D4B\u8BD5\u4F7F\u7528-end */

// \u5361\u7247\u9009\u62E9
const ActionSheetCombo = (
  {
    // Modal
    modalProps,

    title,
    list,
    ...props
  },
  ref
) => {
  return (
    <Combo
      ref={ref}
      {...props}
      // Modal
      modal={Modal}
      modalProps={{
        ...modalProps,
        title: title,
        list: list
      }}
    />
  )
}

export default forwardRef(ActionSheetCombo)
`},68815:function(e,n){n.Z=`import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
import LocaleUtil from './../../../utils/LocaleUtil'
import SafeArea from './../../SafeArea'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil, LocaleUtil, SafeArea } from 'lyrixi-design-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const Modal = forwardRef(
  (
    {
      safeArea = true,

      allowClear,
      // \u901A\u7528\u5C5E\u6027
      portal,
      getComboDOM,
      value,
      list,
      onBeforeChange,
      onBeforeChecked,
      onChange,

      visible = false,
      maskClosable = true,
      onVisibleChange,

      // \u5B9A\u5236\u5C5E\u6027
      title,
      cancel,
      maskProps = {},
      groupProps = {},
      optionProps = {},
      animation = 'slideUp', // slideLeft | slideRight | slideUp | slideDown | zoom | fade
      ...props
    },
    ref
  ) => {
    // \u8FC7\u6EE4\u975E\u6CD5\u6570\u636E
    // eslint-disable-next-line
    list = list.filter((item) => {
      if (!item || (!item.id && !item.name)) return false
      return true
    })

    const rootRef = useRef(null)

    // \u8282\u70B9
    useImperativeHandle(ref, () => {
      return {
        modalDOM: rootRef.current,
        getModalDOM: () => rootRef.current
      }
    })

    // \u70B9\u51FB\u9009\u9879
    async function handleChange(item) {
      let currentValue = item
      if (allowClear) {
        if (item.id === value?.id) {
          currentValue = null
        }
      }

      // \u4FEE\u6539\u63D0\u793A
      if (typeof onBeforeChange === 'function') {
        let goOn = await onBeforeChange(currentValue)
        if (goOn === false) return

        // \u4FEE\u6539\u503C
        if (typeof goOn === 'object') {
          currentValue = goOn
        }
      }
      // \u89E6\u53D1onChange\u4E8B\u4EF6
      if (onChange) onChange(currentValue)
      if (onVisibleChange) onVisibleChange(false)
    }

    // \u70B9\u51FB\u906E\u7F69
    async function handleClickMask(e) {
      e.stopPropagation()

      if (maskProps.onClick) {
        let goOn = maskProps.onClick(e)
        if (goOn === false) {
          return
        }
      }
      if (maskClosable && onVisibleChange) onVisibleChange(false)
    }

    // \u83B7\u53D6\u53D6\u6D88\u6309\u94AE\u8282\u70B9
    function getCancelNode() {
      if (typeof cancel === 'function') {
        return cancel()
      }

      return (
        <div
          className={\`actionsheet-cancel\`}
          onClick={() => {
            if (onVisibleChange) onVisibleChange(false)
          }}
        >
          {LocaleUtil.locale('\u53D6\u6D88', 'SeedsUI_cancel')}
        </div>
      )
    }
    return createPortal(
      <div
        {...maskProps}
        className={DOMUtil.classNames(
          'mask actionsheet-mask',
          maskProps?.className,
          visible ? ' active' : ''
        )}
        onClick={handleClickMask}
        ref={rootRef}
      >
        <div
          data-animation={animation}
          onClick={(e) => e.stopPropagation()}
          {...props}
          className={DOMUtil.classNames(
            'modal-animation actionsheet-modal',
            SafeArea.getSafeAreaClassName(safeArea),
            props?.className,
            visible ? ' active' : ''
          )}
        >
          {title && (
            <div className="actionsheet-header">
              <div className="actionsheet-header-title">{title}</div>
            </div>
          )}
          <div
            {...groupProps}
            className={DOMUtil.classNames('actionsheet-main', groupProps?.className)}
          >
            {list &&
              list.map((item, index) => {
                return (
                  <div
                    {...optionProps}
                    className={DOMUtil.classNames(
                      'actionsheet-option',
                      item?.disabled ? 'disabled' : '',
                      value?.[item.id] ? 'active' : ''
                    )}
                    key={index}
                    data-index={index}
                    onClick={(e) => {
                      e.stopPropagation()
                      item?.onClick && item.onClick(e)
                      handleChange(item)
                    }}
                  >
                    {item.name}
                  </div>
                )
              })}
          </div>
          {getCancelNode()}
        </div>
      </div>,
      portal || document.getElementById('root') || document.body
    )
  }
)

export default Modal
`},62232:function(e,n){n.Z=`import React, { useEffect, useState } from 'react'
import { Layout, Device, ActionSheet, SafeArea } from 'lyrixi-design-mobile'

export default () => {
  const list = [
    { id: '1', name: '\u6D4B\u8BD5Node' },
    { id: '2', name: '\u6D4B\u8BD51' },
    { id: '3', name: '\u6D4B\u8BD52' },
    { id: '4', name: '\u6D4B\u8BD53' },
    { id: '5', name: '\u6D4B\u8BD54' },
    { id: '6', name: '\u6D4B\u8BD54' },
    { id: '7', name: '\u6D4B\u8BD55' },
    { id: '8', name: '\u6D4B\u8BD56' },
    { id: '9', name: '\u6D4B\u8BD57' },
    { id: '10', name: '\u6D4B\u8BD58' },
    { id: '11', name: '\u6D4B\u8BD59' },
    { id: '12', name: '\u6D4B\u8BD510' },
    { id: '13', name: '\u6D4B\u8BD511' },
    { id: '14', name: '\u6D4B\u8BD512' },
    { id: '15', name: '\u6D4B\u8BD513' },
    { id: '16', name: '\u6D4B\u8BD514' }
  ]
  const [value, setValue] = useState(null)

  useEffect(() => {
    if (Device.os === 'ios' && Device.compareVersion(Device.osVersion, '17') < 1) {
      alert('bad ios' + Device.osVersion)
    }
    if (Device.os === 'android' && Device.compareVersion(Device.osVersion, '9') < 1) {
      alert('bad android' + Device.osVersion)
    }
    if (Device.os === 'harmony' && Device.compareVersion(Device.osVersion, '19') < 1) {
      alert('bad harmony' + Device.osVersion)
    }
    SafeArea.autoSafeArea({ debug: true })
  }, [])

  return (
    <Layout className="full">
      <Layout.Main>
        <ActionSheet.Combo
          placeholder="Please select"
          value={value}
          title="Please select"
          list={list}
          onChange={(newValue) => {
            console.log('onChange:', newValue)
            setValue(newValue)
          }}
          onVisibleChange={(visible) => {
            console.log('visible:', visible)
          }}
          // style={{ height: '100px', backgroundColor: '#f8f8f8' }}
          modalProps={
            {
              // safeArea: true
              // cancel: null
            }
          }
        />
      </Layout.Main>
    </Layout>
  )
}
`},5368:function(e,n){n.Z=`import React, { useEffect, useState } from 'react'
import { Layout, ActionSheet, SafeArea } from 'lyrixi-design-mobile'

export default () => {
  const list = [
    { id: '1', name: '\u6D4B\u8BD5Node' },
    { id: '2', name: '\u6D4B\u8BD51' },
    { id: '3', name: '\u6D4B\u8BD52' },
    { id: '4', name: '\u6D4B\u8BD53' },
    { id: '5', name: '\u6D4B\u8BD54' },
    { id: '6', name: '\u6D4B\u8BD54' },
    { id: '7', name: '\u6D4B\u8BD55' },
    { id: '8', name: '\u6D4B\u8BD56' },
    { id: '9', name: '\u6D4B\u8BD57' },
    { id: '10', name: '\u6D4B\u8BD58' },
    { id: '11', name: '\u6D4B\u8BD59' },
    { id: '12', name: '\u6D4B\u8BD510' },
    { id: '13', name: '\u6D4B\u8BD511' },
    { id: '14', name: '\u6D4B\u8BD512' },
    { id: '15', name: '\u6D4B\u8BD513' },
    { id: '16', name: '\u6D4B\u8BD514' }
  ]
  const [value, setValue] = useState(null)

  useEffect(() => {
    SafeArea.autoSafeArea()
  }, [])

  return (
    <Layout className="full">
      <Layout.Main>
        {JSON.stringify(value)}
        <ActionSheet.Modal
          visible={true}
          value={value}
          list={list}
          onChange={(newValue) => {
            console.log('onChange:', newValue)
            setValue(newValue)
          }}
          onVisibleChange={(visible) => {
            console.log('visible:', visible)
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
`},61206:function(e,n){n.Z=`import Combo from './Combo'
import Modal from './Modal'

const ActionSheet = {
  Combo: Combo,
  Modal: Modal
}

export default ActionSheet
`},65127:function(e,n){n.Z=`import React from 'react'

import { Layout, Divider, Button, Icon } from 'lyrixi-design-mobile'

const buttonStyle = {
  margin: 'var(--space-m)'
}

export default () => {
  return (
    <Layout className="full">
      <Layout.Main className="bg-white">
        <Divider>Color & Variant</Divider>
        <div className="flex">
          <Button className="radius-m" style={buttonStyle}>
            default
          </Button>
          <Button className="radius-m radius-m outline" style={buttonStyle}>
            outline
          </Button>
          <Button className="radius-m radius-m text fill outline" style={buttonStyle}>
            fill
          </Button>
          <Button className="radius-m text fill" style={buttonStyle}>
            fill
          </Button>
          <Button className="radius-m text" style={buttonStyle}>
            text
          </Button>
        </div>
        <div className="flex">
          <Button className="radius-m primary" style={buttonStyle}>
            primary
          </Button>
          <Button className="radius-m primary radius-m outline" style={buttonStyle}>
            outline
          </Button>
          <Button className="radius-m primary radius-m text fill outline" style={buttonStyle}>
            fill
          </Button>
          <Button className="radius-m primary text fill" style={buttonStyle}>
            fill
          </Button>
          <Button className="radius-m primary text" style={buttonStyle}>
            text
          </Button>
        </div>

        <div className="flex">
          <Button className="radius-m link" style={buttonStyle}>
            link
          </Button>
          <Button className="radius-m link radius-m outline" style={buttonStyle}>
            outline
          </Button>
          <Button className="radius-m link radius-m text fill outline" style={buttonStyle}>
            fill
          </Button>
          <Button className="radius-m link text fill" style={buttonStyle}>
            fill
          </Button>
          <Button className="radius-m link text" style={buttonStyle}>
            text
          </Button>
        </div>

        <div className="flex">
          <Button className="radius-m warning" style={buttonStyle}>
            link
          </Button>
          <Button className="radius-m warning radius-m outline" style={buttonStyle}>
            outline
          </Button>
          <Button className="radius-m warning radius-m text fill outline" style={buttonStyle}>
            fill
          </Button>
          <Button className="radius-m warning text fill" style={buttonStyle}>
            fill
          </Button>
          <Button className="radius-m warning text" style={buttonStyle}>
            text
          </Button>
        </div>

        <div className="flex">
          <Button className="radius-m danger" style={buttonStyle}>
            danger
          </Button>
          <Button className="radius-m danger radius-m outline" style={buttonStyle}>
            outline
          </Button>
          <Button className="radius-m danger radius-m text fill outline" style={buttonStyle}>
            fill
          </Button>
          <Button className="radius-m danger text fill" style={buttonStyle}>
            fill
          </Button>
          <Button className="radius-m danger text" style={buttonStyle}>
            text
          </Button>
        </div>

        <div className="flex">
          <Button className="radius-m success" style={buttonStyle}>
            success
          </Button>
          <Button className="radius-m success radius-m outline" style={buttonStyle}>
            outline
          </Button>
          <Button className="radius-m success radius-m text fill outline" style={buttonStyle}>
            fill
          </Button>
          <Button className="radius-m success text fill" style={buttonStyle}>
            fill
          </Button>
          <Button className="radius-m success text" style={buttonStyle}>
            text
          </Button>
        </div>

        <br />

        <Divider>Disabled</Divider>
        <div className="flex">
          <Button className="disabled radius-m" style={buttonStyle}>
            default
          </Button>
          <Button className="disabled radius-m radius-m outline" style={buttonStyle}>
            outline
          </Button>
          <Button className="disabled radius-m radius-m text fill outline" style={buttonStyle}>
            fill
          </Button>
          <Button className="disabled radius-m text fill" style={buttonStyle}>
            fill
          </Button>
          <Button className="disabled radius-m text" style={buttonStyle}>
            text
          </Button>
        </div>
        <div className="flex">
          <Button className="disabled radius-m primary" style={buttonStyle}>
            primary
          </Button>
          <Button className="disabled radius-m primary radius-m outline" style={buttonStyle}>
            outline
          </Button>
          <Button
            className="disabled radius-m primary radius-m text fill outline"
            style={buttonStyle}
          >
            fill
          </Button>
          <Button className="disabled radius-m primary text fill" style={buttonStyle}>
            fill
          </Button>
          <Button className="disabled radius-m primary text" style={buttonStyle}>
            text
          </Button>
        </div>
        <br />

        <Divider>Shape</Divider>
        <div className="bg-body">
          <Button shape="round" className="primary" style={buttonStyle}>
            Round
          </Button>
          <Button shape="circle" className="s primary" style={buttonStyle}>
            <Icon className="seeds-icons seeds-icon-barcode"></Icon>
          </Button>
          <Button shape="square" className="s radius-m" style={buttonStyle}>
            <Icon className="seeds-icons seeds-icon-barcode"></Icon>
          </Button>
          <br />

          <Divider>Flex</Divider>
          <Button className="primary flex radius-m" style={buttonStyle}>
            primary flex
          </Button>
        </div>
        <br />

        <Divider>Size & radius</Divider>
        <Button className="primary xxs radius-xxs outline fill" style={buttonStyle}>
          primary xxs
        </Button>
        <Button className="primary xs radius-xs" style={buttonStyle}>
          primary xs
        </Button>
        <Button className="primary s radius-s" style={buttonStyle}>
          primary s
        </Button>
        <Button className="primary m radius-m" style={buttonStyle}>
          primary m
        </Button>
        <Button className="primary l radius-l" style={buttonStyle}>
          primary l
        </Button>
        <Button className="primary xl radius-xl" style={buttonStyle}>
          primary xl
        </Button>
      </Layout.Main>
    </Layout>
  )
}
`},34586:function(e,n){n.Z=`import Button from './Button.js'

export default Button
`},13718:function(e,n){n.Z=`import React, { useRef, useState } from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import { Layout, Calendar } from 'lyrixi-design-mobile'
import DateUtil from '../../../utils/DateUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import Calendar from 'library/components/Calendar'
import { Layout, DateUtil } from 'lyrixi-design-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const selectionMode = 'range' // range
const weekStart = 'Monday' // Monday

export default () => {
  const calendarRef = useRef(null)
  const [data, setData] = useState([])
  const [value, setValue] = useState()

  function handleChange(newValue) {
    console.log('\u4FEE\u6539', newValue)
    // \u8BBE\u7F6E\u4E00\u5468\u7684\u6570\u636E
    // if (Array.isArray(newValue) && newValue.length === 2) {
    //   let weekDates = Calendar.getWeekDates(newValue[0], weekStart)
    //   if (Calendar.isDisabledDate(weekDates[0], { min: new Date() })) {
    //     console.log('\u7981\u6B62\u8BBF\u95EE' + DateUtil.format(weekDates[0], 'YYYY\u5E74MM\u6708DD\u65E5') + '\u524D\u7684\u65E5\u671F')
    //     return
    //   }
    //   // eslint-disable-next-line
    //   newValue = [weekDates[0], weekDates[6]]
    // }
    setValue(newValue)
  }

  return (
    <Layout className="full">
      <Layout.Main
        onTopRefresh={() => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(true)
            }, 2000)
          })
        }}
      >
        <Calendar
          type="week"
          // min={new Date()}
          // max={new Date('2024-12-17')}
          ref={calendarRef}
          weekStart={weekStart}
          // selectionMode={selectionMode}
          value={value}
          // titleFormatter="YYYY-MM-DD W\u5468"
          titleFormatter={(date, info) => {
            // if (Array.isArray(value) && value.length === 2) {
            //   return DateUtil.format(value[0], 'YYYY-W\u5468')
            // }
            if (info.type === 'month') {
              return DateUtil.format(date, 'YYYY\u5E74MM\u6708')
            }
            return DateUtil.format(date, \`YYYY\u5E74MM\u6708DD\u65E5 d \u7B2CW\u5468\`)
          }}
          dateRender={(date, { isSelected, isDisabled, isCurrent }) => {
            console.log({ date, isSelected, isDisabled, isCurrent })
            return (
              <div className="calendar-date-num">
                {date.getDate()}
                {isCurrent && <span className="calendar-date-dot"></span>}
                {data[DateUtil.format(date, 'YYYY-MM-DD')] ? 'M' : ''}
              </div>
            )
          }}
          onChange={handleChange}
          onSlideChange={(drawDate, { action, type, monthDates }) => {
            console.log('\u89C6\u56FE\u53D8\u5316:', { data: drawDate, action, type, monthDates })
            setData({ '2024-04-10': '1' })
          }}
          onLoad={(drawDate, { action, type, monthDates }) => {
            console.log('\u65E5\u5386\u521D\u59CB\u5316', { data: drawDate, action, type, monthDates })
          }}
        />
        <div
          onClick={() => {
            calendarRef.current.slidePrevious()
          }}
        >
          \u4E0A\u4E00\u9875
        </div>
        <div
          onClick={() => {
            calendarRef.current.slideNext()
          }}
        >
          \u4E0B\u4E00\u9875
        </div>
        <div
          onClick={() => {
            calendarRef.current.slideExpand()
          }}
        >
          \u5C55\u5F00
        </div>
        <div
          onClick={() => {
            calendarRef.current.slideCollapse()
          }}
        >
          \u6536\u7F29
        </div>
      </Layout.Main>
    </Layout>
  )
}
`},96384:function(e,n){n.Z=`import React from 'react'
import { Layout, Card } from 'lyrixi-design-mobile'

export default () => {
  return (
    <Layout className="full">
      <Layout.Main>
        <Card>1000</Card>
      </Layout.Main>
    </Layout>
  )
}
`},13391:function(e,n){n.Z=`import React, { useState } from 'react'
import { Layout, Cascader, Loading, Input } from 'lyrixi-design-mobile'

export default () => {
  const [value, setValue] = useState(null)

  // \u52A0\u8F7D\u8857\u9053
  function loadData(tabs) {
    return new Promise((resolve) => {
      if (!Array.isArray(tabs) || !tabs.length) {
        resolve(null)
        return
      }
      let lastTab = tabs[tabs.length - 1]
      if (lastTab.id !== '1-1') {
        resolve(null)
        return
      }
      Loading.show()
      let streets = [
        {
          name: '\u5B59\u5B50\u8282\u70B9',
          id: '1-1-1'
        }
      ]
      setTimeout(() => {
        Loading.hide()
      }, 100)
      if (typeof streets === 'string') {
        Toast.show({ content: streets })
      }
      resolve(streets)
    })
  }

  return (
    <Layout className="full">
      <Layout.Main>
        <Cascader.Combo
          allowClear
          // multiple={false}
          list={[
            {
              id: '1',
              name: '\u6839\u8282\u70B9',
              children: [
                {
                  id: '1-1',
                  name: '\u5B50\u8282\u70B9'
                }
              ]
            }
          ]}
          loadData={loadData}
          value={value}
          placeholder={\`Select\`}
          onChange={(newValue) => {
            console.log('\u4FEE\u6539:', newValue)
            setValue(newValue)
          }}
          modalProps={{
            safeArea: true,
            title: '\u7EA7\u8054\u9009\u62E9'
          }}
          onVisibleChange={(visible) => {
            console.log('visible:', visible)
          }}
          clear={({ clearable, triggerClear }) => {
            return clearable ? <Input.IconClear onClick={triggerClear} /> : <Input.IconRightArrow />
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
`},48332:function(e,n){n.Z=`const cityIds = [
  '110000',
  '120000',
  '310000',
  '500000',
  '810000',
  '820000',
  '130100',
  '130200',
  '130300',
  '130400',
  '130500',
  '130600',
  '130700',
  '130800',
  '130900',
  '131000',
  '131100',
  '140100',
  '140200',
  '140300',
  '140400',
  '140500',
  '140600',
  '140700',
  '140800',
  '140900',
  '141000',
  '141100',
  '150100',
  '150200',
  '150300',
  '150400',
  '150500',
  '150600',
  '150700',
  '150800',
  '150900',
  '152200',
  '152500',
  '152900',
  '210100',
  '210200',
  '210300',
  '210400',
  '210500',
  '210600',
  '210700',
  '210800',
  '210900',
  '211000',
  '211100',
  '211200',
  '211300',
  '211400',
  '220100',
  '220200',
  '220300',
  '220400',
  '220500',
  '220600',
  '220700',
  '220800',
  '222400',
  '230100',
  '230200',
  '230300',
  '230400',
  '230500',
  '230600',
  '230700',
  '230800',
  '230900',
  '231000',
  '231100',
  '231200',
  '232700',
  '320100',
  '320200',
  '320300',
  '320400',
  '320500',
  '320600',
  '320700',
  '320800',
  '320900',
  '321000',
  '321100',
  '321200',
  '321300',
  '330100',
  '330200',
  '330300',
  '330400',
  '330500',
  '330600',
  '330700',
  '330800',
  '330900',
  '331000',
  '331100',
  '340100',
  '340200',
  '340300',
  '340400',
  '340500',
  '340600',
  '340700',
  '340800',
  '341000',
  '341100',
  '341200',
  '341300',
  '341500',
  '341600',
  '341700',
  '341800',
  '350100',
  '350200',
  '350300',
  '350400',
  '350500',
  '350600',
  '350700',
  '350800',
  '350900',
  '360100',
  '360200',
  '360300',
  '360400',
  '360500',
  '360600',
  '360700',
  '360800',
  '360900',
  '361000',
  '361100',
  '370100',
  '370200',
  '370300',
  '370400',
  '370500',
  '370600',
  '370700',
  '370800',
  '370900',
  '371000',
  '371100',
  '371300',
  '371400',
  '371500',
  '371600',
  '371700',
  '410100',
  '410200',
  '410300',
  '410400',
  '410500',
  '410600',
  '410700',
  '410800',
  '410900',
  '411000',
  '411100',
  '411200',
  '411300',
  '411400',
  '411500',
  '411600',
  '411700',
  '419001',
  '420100',
  '420200',
  '420300',
  '420500',
  '420600',
  '420700',
  '420800',
  '420900',
  '421000',
  '421100',
  '421200',
  '421300',
  '422800',
  '429004',
  '429005',
  '429006',
  '429021',
  '430100',
  '430200',
  '430300',
  '430400',
  '430500',
  '430600',
  '430700',
  '430800',
  '430900',
  '431000',
  '431100',
  '431200',
  '431300',
  '433100',
  '440100',
  '440200',
  '440300',
  '440400',
  '440500',
  '440600',
  '440700',
  '440800',
  '440900',
  '441200',
  '441300',
  '441400',
  '441500',
  '441600',
  '441700',
  '441800',
  '441900',
  '442000',
  '445100',
  '445200',
  '445300',
  '450100',
  '450200',
  '450300',
  '450400',
  '450500',
  '450600',
  '450700',
  '450800',
  '450900',
  '451000',
  '451100',
  '451200',
  '451300',
  '451400',
  '460100',
  '460200',
  '460300',
  '460400',
  '469001',
  '469002',
  '469005',
  '469006',
  '469007',
  '469021',
  '469022',
  '469023',
  '469024',
  '469025',
  '469026',
  '469027',
  '469028',
  '469029',
  '469030',
  '510100',
  '510300',
  '510400',
  '510500',
  '510600',
  '510700',
  '510800',
  '510900',
  '511000',
  '511100',
  '511300',
  '511400',
  '511500',
  '511600',
  '511700',
  '511800',
  '511900',
  '512000',
  '513200',
  '513300',
  '513400',
  '520100',
  '520200',
  '520300',
  '520400',
  '520500',
  '520600',
  '522300',
  '522600',
  '522700',
  '530100',
  '530300',
  '530400',
  '530500',
  '530600',
  '530700',
  '530800',
  '530900',
  '532300',
  '532500',
  '532600',
  '532800',
  '532900',
  '533100',
  '533300',
  '533400',
  '540100',
  '540200',
  '540300',
  '540400',
  '540500',
  '540600',
  '542500',
  '610100',
  '610200',
  '610300',
  '610400',
  '610500',
  '610600',
  '610700',
  '610800',
  '610900',
  '611000',
  '620100',
  '620200',
  '620300',
  '620400',
  '620500',
  '620600',
  '620700',
  '620800',
  '620900',
  '621000',
  '621100',
  '621200',
  '622900',
  '623000',
  '630100',
  '630200',
  '632200',
  '632300',
  '632500',
  '632600',
  '632700',
  '632800',
  '640100',
  '640200',
  '640300',
  '640400',
  '640500',
  '650100',
  '650200',
  '650400',
  '650500',
  '652300',
  '652700',
  '652800',
  '652900',
  '653000',
  '653100',
  '653200',
  '654000',
  '654200',
  '654300',
  '659001',
  '659002',
  '659003',
  '659004',
  '659005',
  '659006',
  '659007',
  '659008',
  '659009',
  '659010',
  '710100',
  '710200',
  '710300',
  '710400',
  '710500',
  '710600',
  '710700',
  '710800',
  '710900',
  '711000',
  '711100',
  '711200',
  '711300',
  '711400',
  '711500',
  '711600',
  '711700',
  '711800',
  '711900',
  '712000',
  '712100',
  '712200',
  '712300'
]
export default cityIds
`},56923:function(e,n){n.Z=`const countryIds = [
  '86',
  '938100',
  '912300',
  '910500',
  '943000',
  '937900',
  '912400',
  '912500',
  '938900',
  '950200',
  '937000',
  '950000',
  '939300',
  '912600',
  '935900',
  '930500',
  '944400',
  '910100',
  '951100',
  '930400',
  '945500',
  '930300',
  '910200',
  '930700',
  '910600',
  '943900',
  '950100',
  '950400',
  '942500',
  '938500',
  '943100',
  '945000',
  '912700',
  '937400',
  '942700',
  '938000',
  '912800',
  '930900',
  '940300',
  '941600',
  '943600',
  '941900',
  '950600',
  '912900',
  '913000',
  '947900',
  '913100',
  '941300',
  '941700',
  '910700',
  '946300',
  '913200',
  '931000',
  '930800',
  '943800',
  '913300',
  '910300',
  '910400',
  '939600',
  '917500',
  '910800',
  '938400',
  '913400',
  '941800',
  '913500',
  '913700',
  '937100',
  '951200',
  '943300',
  '942400',
  '943500',
  '945200',
  '942900',
  '943700',
  '942600',
  '947700',
  '947200',
  '937300',
  '944200',
  '942200',
  '914200',
  '930200',
  '948200',
  '933700',
  '913800',
  '941000',
  '947500',
  '946500',
  '914300',
  '913900',
  '914000',
  '930600',
  '914400',
  '940100',
  '914500',
  '914700',
  '940000',
  '914600',
  '949700',
  '946100',
  '914800',
  '910900',
  '938800',
  '949300',
  '914900',
  '915000',
  '940800',
  '938700',
  '935700',
  '940600',
  '937800',
  '915100',
  '915200',
  '949200',
  '938200',
  '911000',
  '936000',
  '915300',
  '915400',
  '915500',
  '940400',
  '947000',
  '935500',
  '930100',
  '911100',
  '911200',
  '911300',
  '917600',
  '939000',
  '915600',
  '939400',
  '915700',
  '942800',
  '915800',
  '915900',
  '939900',
  '945400',
  '911400',
  '942300',
  '916000',
  '916100',
  '946200',
  '941500',
  '946000',
  '937700',
  '950500',
  '947600',
  '941400',
  '940700',
  '942100',
  '939800',
  '916200',
  '916300',
  '938300',
  '916400',
  '911500',
  '916500',
  '936700',
  '939500',
  '911600',
  '940900',
  '940200',
  '917700',
  '916700',
  '944000',
  '945700',
  '916800',
  '911700',
  '947100',
  '945600',
  '916900',
  '931100',
  '948600',
  '951000',
  '917000',
  '946800',
  '946700',
  '945800',
  '942000',
  '912200',
  '945300',
  '917100',
  '939700',
  '944100',
  '947300',
  '937600',
  '944800',
  '946600',
  '944700',
  '938600',
  '946400',
  '937200',
  '911800',
  '931200',
  '939100',
  '949900',
  '940500',
  '949600',
  '950900',
  '911900',
  '912000',
  '941200',
  '950300',
  '949400',
  '912100',
  '917200',
  '933900',
  '917300',
  '943200',
  '917400'
]

export default countryIds
`},86586:function(e,n){n.Z=`const districtIds = null
export default districtIds
`},45465:function(e,n){n.Z=`const municipalityIds = ['110000', '120000', '310000', '500000', '710000', '820000', '810000']
export default municipalityIds
`},8424:function(e,n){n.Z=`const prefectureIds = [
  '419001',
  '429004',
  '429005',
  '429006',
  '429021',
  '441900',
  '442000',
  '460400',
  '469001',
  '469002',
  '469005',
  '469006',
  '469007',
  '469007',
  '469021',
  '469022',
  '469023',
  '469024',
  '469025',
  '469026',
  '469027',
  '469028',
  '469029',
  '469030',
  '620200',
  '659001',
  '659002',
  '659003',
  '659004',
  '659005',
  '659006',
  '659007',
  '659008',
  '659009',
  '659010'
]

export default prefectureIds
`},7042:function(e,n){n.Z=`const provinceIds = [
  '110000',
  '120000',
  '130000',
  '140000',
  '150000',
  '210000',
  '220000',
  '230000',
  '310000',
  '320000',
  '330000',
  '340000',
  '350000',
  '360000',
  '370000',
  '410000',
  '420000',
  '430000',
  '440000',
  '450000',
  '460000',
  '500000',
  '510000',
  '520000',
  '530000',
  '540000',
  '610000',
  '620000',
  '630000',
  '640000',
  '650000',
  '710000',
  '810000',
  '820000'
]

export default provinceIds
`},67940:function(e,n){n.Z=`const streetIds = null
export default streetIds
`},43969:function(e,n){n.Z=`import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import { Layout, Cascader, Input } from 'lyrixi-design-mobile'

// \u5224\u65AD\u7701\u5E02\u533A\u7684\u6570\u636E
import countryIds from './data/countryIds'
import provinceIds from './data/provinceIds'
import municipalityIds from './data/municipalityIds'
import cityIds from './data/cityIds'
import prefectureIds from './data/prefectureIds'
import districtIds from './data/districtIds'
import streetIds from './data/streetIds'

// \u5224\u65AD\u7701\u5E02\u533A\u7684\u6570\u636E
window.countryIds = countryIds
window.provinceIds = provinceIds
window.municipalityIds = municipalityIds
window.cityIds = cityIds
window.prefectureIds = prefectureIds
window.districtIds = districtIds
window.streetIds = streetIds

export default () => {
  // \u63A7\u4EF6\u5C06\u4F1A\u8865\u5145parentid\u548CisDistrict, \u6240\u4EE5\u987A\u5E8F\u4E0D\u80FD\u4F20\u9519
  const [value, setValue] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setValue([
        {
          name: '\u4E2D\u56FD',
          id: '86'
        },
        {
          name: '\u5317\u4EAC\u5E02',
          id: '110000'
        },
        {
          name: '\u4E1C\u57CE\u533A',
          id: '110101'
        }
        // {
        //   name: '\u4E1C\u534E\u95E8\u8857\u9053',
        //   id: '110101001'
        // }
      ])
    }, 2000)
  }, [])
  return (
    <Layout className="full">
      <Layout.Main>
        <Cascader.DistrictCombo
          // readOnly
          // type="a"
          startType={'country'}
          // multiple
          // type="country"
          // type="province"
          // type="city"
          type="district"
          // type="street"
          min="province"
          editableOptions={
            {
              // country: { editable: false },
              // province: { editable: false }
              // city: { editable: true },
              // district: { editable: true },
              // street: { editable: true }
            }
          }
          value={value}
          onChange={(newValue) => {
            console.log('\u4FEE\u6539: ', newValue)
            setValue(newValue)
          }}
          placeholder={'\u70B9\u51FB\u9009\u62E9'}
          allowClear
          clear={({ clearable, triggerClear }) => {
            return clearable ? <Input.IconClear onClick={triggerClear} /> : <Input.IconRightArrow />
          }}
          modalProps={{ maskProps: { style: { zIndex: '9' } } }}
        />
      </Layout.Main>
    </Layout>
  )
}
`},91816:function(e,n){n.Z=`import React, { useState } from 'react'
import _ from 'lodash'
import { Layout, Divider, DatePicker, DateUtil, Modal, Card, Toast } from 'lyrixi-design-mobile'

export default () => {
  const [value, setValue] = useState(null)
  return (
    <Layout className="full">
      <Layout.Main>
        <Card>
          <Divider>Year</Divider>
          <DatePicker.Combo
            style={{ margin: '0 12px' }}
            type="year"
            placeholder="Year"
            value={value}
            onChange={setValue}
          />
        </Card>

        <Card>
          <Divider>Month</Divider>
          <DatePicker.Combo
            style={{ margin: '0 12px' }}
            type="month"
            placeholder="Month"
            value={value}
            onChange={setValue}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Date</Divider>
          <DatePicker.Combo
            style={{ margin: '0 12px' }}
            type="date"
            placeholder="Date"
            value={value}
            onChange={setValue}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Time</Divider>
          <DatePicker.Combo
            style={{ margin: '0 12px' }}
            type="time"
            placeholder="Time"
            value={value}
            onChange={setValue}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Datetime</Divider>
          <DatePicker.Combo
            style={{ margin: '0 12px' }}
            type="datetime"
            placeholder="Datetime"
            value={value}
            onChange={setValue}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Week</Divider>
          <DatePicker.Combo
            style={{ margin: '0 12px' }}
            type="week"
            placeholder="Week"
            value={value}
            onChange={setValue}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Limit</Divider>
          <DatePicker.Combo
            style={{ margin: '0 12px' }}
            min={new Date()}
            max={DateUtil.add(new Date(), 30, 'day')}
            placeholder="Limit"
            value={value}
            onChange={setValue}
            allowClear
          />
        </Card>

        <Card>
          <Divider>onError</Divider>
          <DatePicker.Combo
            style={{ margin: '0 12px' }}
            min={new Date()}
            max={DateUtil.add(new Date(), 30, 'day')}
            placeholder="onError"
            value={value}
            onChange={setValue}
            onError={(error) => {
              Toast.show({ content: error.errMsg })
            }}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Custom</Divider>
          <DatePicker.Combo
            style={{ margin: '0 12px' }}
            placeholder="Step"
            title="Custom Title"
            value={value}
            onChange={setValue}
            allowClear
          />
        </Card>

        <Card>
          <Divider>onBeforeChange</Divider>
          <DatePicker.Combo
            style={{ margin: '0 12px' }}
            placeholder="onBeforeChange"
            value={value}
            onBeforeChange={(newValue) => {
              console.log('onBeforeChange', newValue)
              return new Promise((resolve) => {
                Modal.confirm({
                  title: 'Warning',
                  content: \`Are you sure?\`,
                  onOk() {
                    resolve(true)
                  },
                  onCancel() {
                    resolve(false)
                  }
                })
              })
            }}
            onChange={setValue}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Step</Divider>
          <DatePicker.Combo
            style={{ margin: '0 12px' }}
            placeholder="Step"
            type="datetime"
            hourStep={5}
            minuteStep={5}
            value={value}
            onChange={setValue}
            allowClear
          />
        </Card>
      </Layout.Main>
    </Layout>
  )
}
`},4918:function(e,n){n.Z=`import React, { useState } from 'react'
import { DatePicker, Toast } from 'lyrixi-design-mobile'

export default () => {
  const [mulValue, setMulValue] = useState([
    {
      id: 'start',
      description: 'Start',
      value: new Date()
      // disabled: true
    },
    {
      id: 'middle',
      description: 'Middle',
      value: new Date()
    },
    {
      id: 'end',
      description: 'End',
      value: new Date()
    }
  ])

  return (
    <>
      <DatePicker.MultipleCombo
        placeholder="Please select MultipleCombo"
        // defaultPickerValue={mulValue}
        value={mulValue}
        // year | quarter | month | date | time | datetime | week
        type="datetime"
        onChange={(newValue) => {
          console.log(newValue)
          setMulValue(newValue)
        }}
        modalProps={{
          // title: '\u9009\u62E9\u65E5\u671F',
          onVisibleChange: (visible) => {
            console.log('visible:', visible)
          }
        }}
        allowClear
        min={new Date()}
        hourStep={5}
        minuteStep={5}
        onError={(err) =>
          Toast.show({
            content: err.errMsg || '',
            maskClickable: true
          })
        }
      />
    </>
  )
}
`},85238:function(e,n){n.Z=`import React, { useState } from 'react'
import _ from 'lodash'
import { Layout, Divider, DatePicker, DateUtil, Modal, Card, Toast } from 'lyrixi-design-mobile'

export default () => {
  const [value, setValue] = useState([null, new Date()])
  // const [value, setValue] = useState([new Date(), null])
  // const [value, setValue] = useState([null, null])
  return (
    <Layout className="full">
      <Layout.Main>
        <Card>
          <Divider>Year</Divider>
          <DatePicker.RangeCombo
            // allowClear
            style={{ margin: '0 12px' }}
            type="year"
            placeholder="Year"
            ranges={null}
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
          />
        </Card>

        <Card>
          <Divider>Month</Divider>
          <DatePicker.RangeCombo
            style={{ margin: '0 12px' }}
            type="month"
            placeholder="Month"
            ranges={null}
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Date</Divider>
          <DatePicker.RangeCombo
            style={{ margin: '0 12px' }}
            type="date"
            placeholder="Date"
            ranges={null}
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Time</Divider>
          <DatePicker.RangeCombo
            style={{ margin: '0 12px' }}
            type="time"
            placeholder="Time"
            ranges={null}
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Datetime</Divider>
          <DatePicker.RangeCombo
            style={{ margin: '0 12px' }}
            type="datetime"
            placeholder="Datetime"
            ranges={null}
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Week</Divider>
          <DatePicker.RangeCombo
            style={{ margin: '0 12px' }}
            type="week"
            placeholder="Week"
            ranges={null}
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Quick Select</Divider>
          <DatePicker.RangeCombo
            style={{ margin: '0 12px' }}
            placeholder="Quick Select"
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Limit</Divider>
          <DatePicker.RangeCombo
            style={{ margin: '0 12px' }}
            min={new Date()}
            max={DateUtil.add(new Date(), 30, 'day')}
            placeholder="Limit"
            ranges={null}
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
            allowClear
          />
        </Card>

        <Card>
          <Divider>onError</Divider>
          <DatePicker.RangeCombo
            style={{ margin: '0 12px' }}
            min={new Date()}
            max={DateUtil.add(new Date(), 30, 'day')}
            placeholder="onError"
            ranges={null}
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
            onError={(error) => {
              Toast.show({ content: error.errMsg })
            }}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Custom</Divider>
          <DatePicker.RangeCombo
            style={{ margin: '0 12px' }}
            placeholder="Step"
            title="Custom Title"
            ranges={null}
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
            allowClear
          />
        </Card>

        <Card>
          <Divider>onBeforeChange</Divider>
          <DatePicker.RangeCombo
            style={{ margin: '0 12px' }}
            placeholder="onBeforeChange"
            value={value}
            onBeforeChange={(newValue) => {
              console.log('onBeforeChange', newValue)
              return new Promise((resolve) => {
                Modal.confirm({
                  title: 'Warning',
                  content: \`Are you sure?\`,
                  onOk() {
                    resolve(true)
                  },
                  onCancel() {
                    resolve(false)
                  }
                })
              })
            }}
            onChange={setValue}
            allowClear
          />
        </Card>

        <Card>
          <Divider>Step</Divider>
          <DatePicker.RangeCombo
            style={{ margin: '0 12px' }}
            placeholder="Step"
            type="datetime"
            hourStep={5}
            minuteStep={5}
            ranges={null}
            value={value}
            onChange={(newValue) => {
              console.log(newValue)
              setValue(newValue)
            }}
            allowClear
          />
        </Card>
      </Layout.Main>
    </Layout>
  )
}
`},34082:function(e,n){n.Z=`import React, { useState } from 'react'
import _ from 'lodash'
import { DatePicker, Layout, DateUtil, LocaleUtil } from 'lyrixi-design-mobile'

export default () => {
  const [rangeId, setRangeId] = useState(null)
  const [value, setValue] = useState([new Date(), new Date()])
  return (
    <Layout className="full">
      <Layout.Header className="text-center">\u65E5\u671F\u5FEB\u6377\u9009\u62E9</Layout.Header>
      <Layout.Main className="bg-white">
        <DatePicker.RangeMain
          // style={{ padding: 0 }}
          // allowClear
          // titles={{
          //   custom: '\u81EA\u5B9A\u4E49\u9009\u62E9',
          //   selector: '\u5FEB\u6377\u9009\u62E9'
          // }}
          // type="datetime"
          // ranges={{
          //   [LocaleUtil.locale('\u81EA\u5B9A\u4E49')]: 10
          // }}
          // ranges={{
          //   ['\u4ECA\u65E5']: [dayjs().toDate(), dayjs().toDate()],
          //   ['\u672A\u6765\u4E00\u4E2A\u6708']: [new Date(), dayjs().add(29, 'day').toDate()],

          //   ['\u672A\u6765\u4E09\u4E2A\u6708']: [new Date(), dayjs().add(89, 'day').toDate()],

          //   ['\u81EA\u5B9A\u4E49']: 365
          // }}
          // min={new Date('2023-08-08')}
          // max={new Date()}
          rangeId={rangeId}
          value={value}
          // onError={(error) => {
          //   console.log(error)
          // }}
          onChange={(newValue, { rangeId }) => {
            console.log('\u4FEE\u6539:', newValue)
            setValue(newValue)
            setRangeId(rangeId)
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
`},60582:function(e,n){n.Z=`import React, { useState } from 'react'
import { DatePicker, LocaleUtil } from 'lyrixi-design-mobile'
import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
import quarterOfYear from 'dayjs/plugin/quarterOfYear'
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(isoWeek)
dayjs.extend(quarterOfYear)
dayjs.extend(advancedFormat)

export default () => {
  const [value, setValue] = useState()

  return (
    <>
      <DatePicker.Types
        value={value}
        list={[
          {
            type: 'date',
            id: 'date',
            name: LocaleUtil.locale('\u65E5', 'datetype_unit_date')
          },
          {
            type: 'month',
            id: 'month',
            name: LocaleUtil.locale('\u6708', 'datetype_unit_month')
          },
          {
            type: 'quarter',
            id: 'quarter',
            name: LocaleUtil.locale('\u5B63', 'datetype_unit_quarter')
          },
          {
            type: 'year',
            id: 'year',
            name: LocaleUtil.locale('\u5E74', 'datetype_unit_year')
          },
          {
            type: 'week',
            id: 'week',
            name: LocaleUtil.locale('\u5468', 'datetype_unit_week')
          }
        ]}
        onChange={(newValue) => {
          console.log('\u4FEE\u6539:', newValue)
          setValue(newValue)
        }}
        // TabsProps={{ className: 'hide' }}
        contentProps={{ className: 'flex flex-left' }}
        // pickerRender={(tab, { onChange }) => {
        //   if (tab.type === 'week') {
        //     return <div onClick={() => onChange && onChange(new Date('2022-12-12'))}>\u70B9\u6211</div>
        //   }
        // }}
      />
    </>
  )
}
`},85093:function(e,n){n.Z=`import React, { useEffect, useRef, useState } from 'react'
import { DatePicker } from 'lyrixi-design-mobile'
import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(isoWeek)
dayjs.extend(advancedFormat)

export default () => {
  const date1Ref = useRef(null)
  const date2Ref = useRef(null)
  const [value, setValue] = useState(null)

  useEffect(() => {
    date1Ref.current.open()
  }, [])

  return (
    <>
      <DatePicker.WeekCombo
        ref={date1Ref}
        className="border-b"
        placeholder="Please select WeekCombo"
        type="datetime"
        allowClear
        // min={new Date()}
        // max={new Date()}
        // maskClosable={false}
        onBeforeOpen={() => {
          if (document.querySelector('.mask.active')) {
            date1Ref.current.close()
            date2Ref.current.close()
            return false
          }
          return true
        }}
        onVisibleChange={(visible) => {
          console.log('visible:', visible)
        }}
        modalProps={{
          maskProps: {
            style: {
              zIndex: 999
            }
          }
        }}
        onChange={(newValue) => {
          setValue(newValue)
        }}
        value={value}
        defaultPickerValue={new Date('2022-08-22 00:00')}
      />
    </>
  )
}
`},80760:function(e,n){n.Z=`import React, { useImperativeHandle, forwardRef, useRef } from 'react'

const Icon = forwardRef(({ size, children, ...props }, ref) => {
  const rootRef = useRef(null)

  // Expose
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current
    }
  })

  return (
    <i
      style={
        typeof size === 'number'
          ? {
              width: \`\${size}px\`,
              height: \`\${size}px\`,
              fontSize: \`\${size}px\`
            }
          : {}
      }
      {...props}
      ref={rootRef}
    >
      {children}
    </i>
  )
})

export default Icon
`},6719:function(e,n){n.Z=`import React from 'react'
import { Layout, Icon } from 'lyrixi-design-mobile'

export default () => {
  return (
    <Layout className="full">
      <Layout.Main>
        <p>Don't use seeds-icons, cause that className often changes</p>
        <Icon className="seeds-icons seeds-icon-signature" size={100}></Icon>
      </Layout.Main>
    </Layout>
  )
}
`},25906:function(e,n){n.Z=`import Icon from './Icon.js'

export default Icon
`},26362:function(e,n){n.Z=`import React, { Fragment, useEffect, useState } from 'react'
import { Layout, IndexBar } from 'lyrixi-design-mobile'

export default () => {
  const [list, setList] = useState([])

  useEffect(() => {
    // Mock request list
    setTimeout(() => {
      let newList = queryList(['A', 'B', 'C'])
      setList(newList)
    }, 1000)

    // eslint-disable-next-line
  }, [])

  // \u83B7\u53D6A-Z
  function queryList(letter) {
    let newList = []
    for (let i = 0; i < letter.length; i++) {
      for (let j = 0; j < 15; j++) {
        newList.push({
          letter: letter[i],
          name: \`\${letter[i]}\u59D3\u4EBA\u540D\`
        })
      }
    }
    return newList
  }

  console.log('list:', list)

  // Render list
  function getListNodes() {
    let letter = {}
    return list.map((item, index) => {
      if (!letter[item.letter]) {
        letter[item.letter] = true
        return (
          <Fragment key={index}>
            <IndexBar.Anchor name={item.letter}>
              <li>{item.letter}</li>
            </IndexBar.Anchor>
            <li>{item.name}</li>
          </Fragment>
        )
      }
      return <li key={index}>{item.name}</li>
    })
  }
  return (
    <Layout className="full">
      <IndexBar>
        <Layout.Main
          onBottomRefresh={() => {
            return new Promise((resolve) => {
              setTimeout(() => {
                let newList = queryList([
                  'A',
                  'B',
                  'C',
                  'D',
                  'E',
                  'F',
                  'G',
                  'H',
                  'I',
                  'J',
                  'K',
                  'L',
                  'M',
                  'N',
                  'O',
                  'P',
                  'Q',
                  'R',
                  'S',
                  'T',
                  'U',
                  'V',
                  'W',
                  'X',
                  'Y',
                  'Z'
                ])
                setList(newList)
                resolve(true)
              }, 2000)
            })
          }}
        >
          <ul>{getListNodes()}</ul>
        </Layout.Main>
      </IndexBar>
    </Layout>
  )
}
`},44097:function(e,n){n.Z=`import React, { forwardRef } from 'react'
import InputText from './../Text'

const AutoFit = forwardRef(({ ...props }, ref) => {
  return <InputText ref={ref} {...props} type="autoFit" />
})

export default AutoFit
`},7460:function(e,n){n.Z=`import React, { forwardRef } from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import Icon from './../../Icon'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { Icon } from 'lyrixi-design-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const Clear = forwardRef(({ name, size, ...props }, ref) => {
  return (
    <Icon
      {...props}
      className={\`seed-input-icon seed-input-icon-clear\${
        props.className ? ' ' + props.className : ' seed-right-icon'
      }\`}
      ref={ref}
    />
  )
})

export default Clear
`},29450:function(e,n){n.Z=`import React, { forwardRef } from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import Icon from './../../Icon'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { Icon } from 'lyrixi-design-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const IconLeftArrow = forwardRef(({ name, size, ...props }, ref) => {
  return (
    <Icon
      {...props}
      className={\`seed-input-icon seed-input-icon-left-arrow\${
        props.className ? ' ' + props.className : ' seed-left-icon'
      }\`}
      ref={ref}
    />
  )
})

export default IconLeftArrow
`},3467:function(e,n){n.Z=`import React, { forwardRef } from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import Icon from './../../Icon'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { Icon } from 'lyrixi-design-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const RightArrow = forwardRef(({ name, size, ...props }, ref) => {
  return (
    <Icon
      {...props}
      className={\`seed-input-icon seed-input-icon-right-arrow\${
        props.className ? ' ' + props.className : ' seed-right-icon'
      }\`}
      ref={ref}
    />
  )
})

export default RightArrow
`},17908:function(e,n){n.Z=`import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import getClearNode from './../Text/getClearNode'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil } from 'lyrixi-design-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// \u5185\u90E8\u663E\u793Adiv
const InputNode = (
  {
    type = 'text',
    id,
    style,
    className,
    value,
    formatter, // \u6307\u5B9A\u8F93\u5165\u6846\u5C55\u793A\u503C\u7684\u683C\u5F0F
    placeholder,
    leftIcon,
    rightIcon,
    clear,
    allowClear,
    disabled,
    readOnly,
    onChange,
    onClick
  },
  ref
) => {
  const displayValue = typeof formatter === 'function' ? formatter(value) : null

  // DOM
  const rootRef = useRef(null)
  const inputRef = useRef(null)

  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      inputDOM: inputRef.current,
      getRootDOM: () => {
        return rootRef.current
      },
      getInputDOM: () => {
        return inputRef.current
      },
      correctValue: () => {},
      focus: () => {}
    }
  })

  // \u70B9\u51FB\u6E05\u9664
  async function handleClear(e) {
    e && e?.stopPropagation?.()

    // Callback
    typeof onChange === 'function' && onChange('', { action: 'clickClear' })
  }

  // \u6E32\u67D3\u5185\u5BB9
  function getText() {
    // \u6709\u663E\u793A\u503C
    if (displayValue) {
      return <span>&nbsp;</span>
    }
    // \u65E0\u663E\u793A\u503C, \u663E\u793Avalue
    if (value && typeof value !== 'object') {
      return value
    }
    // \u65E0\u663E\u793A\u503C, \u65E0value, \u663E\u793Aplaceholder
    if (placeholder) {
      return <div className="seed-input-placeholder">{placeholder}</div>
    }

    // \u5565\u90FD\u6CA1\u6709, \u663E\u793A\u7A7A\u767D
    return <span>&nbsp;</span>
  }
  return (
    <div
      id={id}
      style={style}
      className={DOMUtil.classNames(
        \`seed-input\`,
        className,
        displayValue ? 'seed-has-formatter' : '',
        disabled ? ' disabled' : '',
        readOnly ? ' readonly' : ''
      )}
      onClick={onClick}
      ref={rootRef}
    >
      {/* Left */}
      {typeof leftIcon === 'function' ? leftIcon({ value }) : leftIcon}

      <div
        className={DOMUtil.classNames(
          'seed-input-node',
          type,
          disabled ? 'disabled' : '',
          readOnly ? 'readOnly' : ''
        )}
      >
        {/* Main */}
        <div ref={inputRef} className="seed-input-text">
          {getText()}
        </div>

        {/* Blur display value */}
        {displayValue ? <div className={\`seed-input-formatter\`}>{displayValue}</div> : null}
      </div>

      {/* Clear Icon */}
      {getClearNode({
        clear,
        allowClear,
        disabled,
        readOnly,
        value,
        onClear: handleClear
      })}

      {/* Right */}
      {typeof rightIcon === 'function' ? rightIcon({ value }) : rightIcon}
    </div>
  )
}

export default forwardRef(InputNode)
`},84514:function(e,n){n.Z=`import React, { forwardRef } from 'react'
import InputText from './../Text'

const Number = forwardRef(({ ...props }, ref) => {
  return <InputText ref={ref} {...props} type="number" />
})

export default Number
`},62458:function(e,n){n.Z=`import React, { forwardRef, useRef, useImperativeHandle, useEffect } from 'react'
import InputNumber from './../Number'

// \u5185\u5E93\u4F7F\u7528-start
import MathUtil from './../../../utils/MathUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { MathUtil } from 'lyrixi-design-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// \u6570\u503C\u6846
const NumberBox = forwardRef(
  (
    {
      // \u52A0\u51CF\u53F7
      plusProps = {},
      minusProps = {},
      stepFocus, // \u70B9\u51FB\u52A0\u51CF\u6309\u94AE\u83B7\u53D6\u7126\u70B9

      // \u6587\u672C\u6846
      // \u5BB9\u5668
      type = 'text', // \u7C7B\u578B: text | number | tel | password
      autoFit, // \u81EA\u52A8\u9AD8\u5EA6\u6587\u672C\u6846
      readOnly,
      disabled,
      // \u6587\u672C\u6846
      inputProps = {},
      value,
      formatter,
      // \u5C0F\u6570\u7CBE\u5EA6, \u53EA\u6709\u6570\u503C\u6846\u624D\u751F\u6548
      precision,
      // \u5C0F\u6570\u4F4D\u88650, true: \u4E0D\u88650; false: \u88650;
      trim,
      max,
      min,
      placeholder,
      maxLength,
      // \u81EA\u52A8\u83B7\u53D6\u7126\u70B9
      autoFocus, // \u6E32\u67D3\u65F6\u81EA\u52A8\u83B7\u53D6\u7126\u70B9
      autoSelect, // \u6E32\u67D3\u65F6\u81EA\u52A8\u9009\u4E2D
      // \u5DE6\u53F3\u56FE\u6807
      leftIcon,
      rightIcon,
      // \u6E05\u9664\u6309\u952E
      clear,
      allowClear,
      // \u5B50\u5185\u5BB9
      children,
      // \u4E8B\u4EF6
      onClick,
      onCompositionStart, // \u8F93\u5165\u5F00\u59CB\u65F6
      onCompositionUpdate, // \u8F93\u5165\u8FDB\u884C\u4E2D
      onCompositionEnd, // \u8F93\u5165\u5B8C\u6210\u65F6
      onInput,
      onChange,
      onBlur,
      onFocus,

      ...props
    },
    ref
  ) => {
    const rootRef = useRef(null)
    const inputRef = useRef(null)

    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        inputDOM: inputRef?.current,
        getRootDOM: () => {
          return rootRef.current
        },
        getInputDOM: inputRef?.current?.getInputDOM,
        getInputRef: () => {
          return inputRef
        }
      }
    })

    useEffect(() => {
      let inputDOM = _getInputDOM()
      let val = (inputDOM?.value ? inputDOM.value : value) || ''
      updateState(val)
    }, [value]) // eslint-disable-line

    // \u83B7\u53D6\u6587\u672C\u6846
    function _getInputDOM() {
      if (inputRef?.current?.getInputDOM) {
        return inputRef.current.getInputDOM()
      }
      return null
    }

    // \u66F4\u65B0\u7981\u7528\u72B6\u6001
    function updateState(val) {
      let minus = rootRef.current?.querySelector?.('.seed-numberbox-button-minus')
      let plus = rootRef.current?.querySelector?.('.seed-numberbox-button-plus')
      if (!isNaN(min) && !isNaN(val) && Number(val) <= Number(min)) {
        minus.setAttribute('disabled', 'true')
      } else {
        minus.removeAttribute('disabled')
      }
      if (!isNaN(max) && !isNaN(val) && Number(val) >= Number(max)) {
        plus.setAttribute('disabled', 'true')
      } else {
        plus.removeAttribute('disabled')
      }
    }

    // \u4FEE\u6539\u503C\u56DE\u8C03
    function handleChange(val) {
      if (disabled) return
      let inputDOM = _getInputDOM()
      if (!inputDOM) return

      // \u975E\u53D7\u63A7\u7EC4\u4EF6\u9700\u8981\u64CD\u4F5CDOM
      if (value === undefined) {
        inputDOM.value = val
        updateState(val)
      }
      if (onChange) onChange(val)
    }

    // \u70B9\u51FB\u51CF
    function handleMinus(e) {
      e.stopPropagation()
      if (disabled) return

      let inputDOM = _getInputDOM()
      if (!inputDOM) return
      let val = inputRef?.current?.correctValue(
        MathUtil.strip(Number(inputDOM.value || 0) - 1),
        'blur'
      )
      // Callback
      handleChange(val)
      if (minusProps.onClick) minusProps.onClick(e, val)
      if (stepFocus) {
        inputDOM.focus()
      }
    }

    // \u70B9\u51FB\u52A0
    function handlePlus(e) {
      e.stopPropagation()
      if (disabled) return

      let inputDOM = _getInputDOM()
      if (!inputDOM) return
      if (isNaN(inputDOM?.value)) return
      let val = inputRef?.current?.correctValue(
        MathUtil.strip(Number(inputDOM.value || 0) + 1),
        'blur'
      )
      // Callback
      handleChange(val)
      if (plusProps.onClick) plusProps.onClick(e, val)
      if (stepFocus) {
        inputDOM.focus()
      }
    }

    // render
    function getInputDOM() {
      return (
        <InputNumber
          ref={inputRef}
          className="seed-numberbox-input"
          type="number"
          readOnly={readOnly}
          disabled={disabled}
          inputProps={inputProps}
          value={value}
          formatter={formatter}
          precision={precision}
          trim={trim}
          max={max}
          min={min}
          placeholder={placeholder}
          maxLength={maxLength}
          autoFocus={autoFocus} // \u6E32\u67D3\u65F6\u81EA\u52A8\u83B7\u53D6\u7126\u70B9
          autoSelect={autoSelect} // \u6E32\u67D3\u65F6\u81EA\u52A8\u9009\u4E2D
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          allowClear={allowClear}
          clear={clear}
          onClick={onClick}
          onCompositionStart={onCompositionStart} // \u8F93\u5165\u5F00\u59CB\u65F6
          onCompositionUpdate={onCompositionUpdate} // \u8F93\u5165\u8FDB\u884C\u4E2D
          onCompositionEnd={onCompositionEnd} // \u8F93\u5165\u5B8C\u6210\u65F6
          onInput={onInput}
          onChange={handleChange}
          onBlur={onBlur}
          onFocus={onFocus}
        >
          {children}
        </InputNumber>
      )
    }

    return (
      <div
        {...props}
        disabled={(!isNaN(min) && !isNaN(max) ? Number(min) >= Number(max) : false) || disabled}
        className={\`seed-numberbox\${props.className ? ' ' + props.className : ''}\`}
        ref={rootRef}
      >
        <div
          // disabled={minDisabled}
          {...minusProps}
          type="button"
          className={\`seed-numberbox-button seed-numberbox-button-minus\${
            minusProps.className ? ' ' + minusProps.className : ''
          }\`}
          onClick={handleMinus}
        >
          <i className="seed-numberbox-button-minus-icon"></i>
        </div>
        {getInputDOM()}
        <div
          // disabled={maxDisabled}
          {...plusProps}
          type="button"
          className={\`seed-numberbox-button seed-numberbox-button-plus\${
            plusProps.className ? ' ' + plusProps.className : ''
          }\`}
          onClick={handlePlus}
        >
          <i className="seed-numberbox-button-plus-icon"></i>
        </div>
      </div>
    )
  }
)

export default NumberBox
`},72886:function(e,n){n.Z=`import React, { forwardRef } from 'react'
import InputText from './../Text'

const InputPassword = forwardRef(({ ...props }, ref) => {
  return <InputText ref={ref} {...props} type="password" />
})

export default InputPassword
`},78935:function(e,n){n.Z=`function getStrength(password) {
  if (password.length === 0) return 0

  let matches = 0
  password.match(/[a-z]/g) && matches++
  password.match(/[A-Z]/g) && matches++
  password.match(/[0-9]/g) && matches++
  password.match(/[^a-zA-Z0-9]/g) && matches++

  if (matches === 3) {
    return 2
  }

  if (matches > 3) {
    if (password.length > 8) return 3
    return 2
  }

  return 1
}

export default getStrength
`},99769:function(e,n){n.Z=`import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import getStrength from './getStrength'

// \u5185\u5E93\u4F7F\u7528-start
import LocaleUtil from './../../../utils/LocaleUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { LocaleUtil } from 'lyrixi-design-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const PasswordStrength = ({ value = '', ...props }, ref) => {
  let strength = getStrength(value)

  const rootRef = useRef(null)
  // Expose
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => {
        return rootRef.current
      },
      getStrength: (newValue) => {
        return getStrength(newValue || value)
      }
    }
  })

  return (
    <ul
      {...props}
      className={\`seed-input-password-strength level\${strength}\${
        props.className ? ' ' + props.className : ''
      }\`}
      ref={rootRef}
    >
      <li className="seed-input-password-strength-item level1">
        <div className="seed-input-password-strength-progress"></div>
        <span className="seed-input-password-strength-text">
          {LocaleUtil.locale('\u5F31', 'SeedsUI_password_weak')}
        </span>
      </li>
      <li className="seed-input-password-strength-item level2">
        <div className="seed-input-password-strength-progress level2"></div>
        <span className="seed-input-password-strength-text">
          {LocaleUtil.locale('\u4E2D', 'SeedsUI_password_medium')}
        </span>
      </li>
      <li className="seed-input-password-strength-item level3">
        <div className="seed-input-password-strength-progress level3"></div>
        <span className="seed-input-password-strength-text">
          {LocaleUtil.locale('\u5F3A', 'SeedsUI_password_strong')}
        </span>
      </li>
    </ul>
  )
}

export default forwardRef(PasswordStrength)
`},86980:function(e,n){n.Z=`// \u5F53\u524D\u503C\u6240\u5360\u767E\u5206\u6BD4
function getPercent({ min, max, value }) {
  if (typeof min !== 'number' || typeof max !== 'number' || typeof value !== 'number') {
    return 0
  }

  let percent = ((value - min) / (max - min)) * 100
  return percent
}

export default getPercent
`},73914:function(e,n){n.Z=`function hideTooltip(tooltipDOM) {
  tooltipDOM.style.visibility = 'hidden'
}

export default hideTooltip
`},22327:function(e,n){n.Z=`import React, { forwardRef, useRef, useImperativeHandle, useEffect } from 'react'
import getPercent from './getPercent'
import showTooltip from './showTooltip'
import hideTooltip from './hideTooltip'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil } from 'lyrixi-design-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const Range = forwardRef(
  ({ value = 0, min = 0, max = 100, step = 1, readOnly, disabled, onChange, ...props }, ref) => {
    const rootRef = useRef(null)
    const tooltipRef = useRef(null)
    const handleRef = useRef(null)
    const railRef = useRef(null)

    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    useEffect(() => {
      updateContainer()
      hideTooltip(tooltipRef.current)
      // eslint-disable-next-line
    }, [])

    function handleChange(e) {
      if (disabled || readOnly) return
      let newValue = e.currentTarget.value

      if (newValue) newValue = Number(newValue || 0)
      if (onChange) {
        onChange(newValue)
      }

      // \u66F4\u65B0\u4F4D\u7F6E
      updateContainer(newValue)
    }

    // \u663E\u793Atooltip
    function handleTouchStart() {
      updateContainer()
      showTooltip(tooltipRef.current)
    }

    function handleTouchEnd() {
      hideTooltip(tooltipRef.current)
    }

    function updateContainer(newValue) {
      let currentValue = newValue ?? value ?? 0
      let percent = getPercent({ min, max, value: currentValue })
      handleRef.current.style.left = \`calc(\${percent}% - 8px)\`
      tooltipRef.current.style.left = \`calc(\${percent}% - 12px)\`
      railRef.current.style.width = \`\${percent}%\`
      tooltipRef.current.innerHTML = currentValue
    }

    return (
      <div
        {...props}
        className={DOMUtil.classNames(
          'seed-input-range',
          props?.className,
          readOnly ? 'readOnly' : '',
          disabled ? ' disabled' : ''
        )}
        ref={rootRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <input
          readOnly={readOnly}
          disabled={disabled}
          type="range"
          className={\`seed-input-range-input\`}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
        />
        <div className="seed-input-range-rail">
          <div className="seed-input-range-rail-active" ref={railRef}></div>
        </div>
        <div ref={handleRef} className="seed-input-range-handle">
          <div className="seed-input-range-handle-icon"></div>
        </div>
        <div ref={tooltipRef} className={\`seed-input-range-tooltip\`}>
          {value}
        </div>
      </div>
    )
  }
)

export default Range
`},10396:function(e,n){n.Z=`function showToolTip(tooltipDOM) {
  tooltipDOM.style.visibility = 'visible'
}

export default showToolTip
`},86067:function(e,n){n.Z=`import React, { forwardRef, useRef, useImperativeHandle } from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil } from 'lyrixi-design-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// \u8BC4\u5206\u7EC4\u4EF6
const Rate = forwardRef(
  (
    { icon, value = 0, min = 0, max = 5, step = 0.5, readOnly, disabled, onChange, ...props },
    ref
  ) => {
    const rootRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    function handleChange(e) {
      if (disabled || readOnly) return
      let newValue = e.currentTarget.value

      if (newValue) newValue = Number(newValue || 0)
      if (onChange) {
        onChange(newValue)
      }
    }

    function getItemActiveWidth(itemValue) {
      // \u5F53\u524D\u9879\u4F4D\u4E8E\u6574\u6570\u4F4D
      if (itemValue <= value) {
        return '100%'
      }
      // \u5F53\u524D\u9879\u4F4D\u4E8E\u5C0F\u6570\u4F4D
      if (itemValue === Math.ceil(value)) {
        return \`\${(value - Math.floor(value)) * 100}%\`
      }
      // \u5F53\u524D\u9879\u8D85\u51FA
      return '0%'
    }

    return (
      <div
        {...props}
        className={DOMUtil.classNames(
          'seed-input-rate',
          props.className,
          readOnly ? 'readOnly' : '',
          disabled ? ' disabled' : ''
        )}
        ref={rootRef}
      >
        <input
          readOnly={readOnly}
          disabled={disabled}
          type="range"
          className={\`seed-input-rate-input\`}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
        />

        {new Array(max).fill(1).map((item, index) => {
          return (
            <div className="seed-input-rate-item" key={index}>
              {icon ? (
                DOMUtil.getIconNode(icon, {
                  className: 'seed-input-rate-item-icon'
                })
              ) : (
                <div className={'seed-input-rate-item-icon default'}></div>
              )}

              {icon ? (
                DOMUtil.getIconNode(icon, {
                  className: 'seed-input-rate-item-icon-active',
                  style: { width: getItemActiveWidth(index + 1) }
                })
              ) : (
                <div
                  className={'seed-input-rate-item-icon-active default'}
                  style={{ width: getItemActiveWidth(index + 1) }}
                ></div>
              )}
            </div>
          )
        })}
      </div>
    )
  }
)

export default Rate
`},67113:function(e,n){n.Z=`import React, { forwardRef, useState, useEffect } from 'react'
import InputText from './../Text'

const Search = forwardRef(({ value, onChange, onSearch, ...props }, ref) => {
  // No onChange, use keyword
  const [keyword, setKeyword] = useState(value)

  useEffect(() => {
    setKeyword(value)
    // eslint-disable-next-line
  }, [value])

  return (
    <InputText
      ref={ref}
      // \u79FB\u52A8\u7AEF\u4F18\u5316\u5C5E\u6027
      {...props}
      inputProps={{
        enterKeyHint: 'search',
        autoComplete: 'off',
        autoCorrect: 'off',
        spellCheck: false,
        ...props?.inputProps
      }}
      onPressEnter={(e) => {
        props?.onPressEnter && props.onPressEnter(e)
        e?.target?.blur?.()
        onSearch && onSearch(typeof onChange === 'function' ? value : keyword)
      }}
      value={typeof onChange === 'function' ? value : keyword}
      onChange={typeof onChange === 'function' ? onChange : setKeyword}
      type="search"
    />
  )
})

export default Search
`},85931:function(e,n){n.Z=`import React, { forwardRef } from 'react'
import InputText from './../Text'

const InputTel = forwardRef(({ ...props }, ref) => {
  return <InputText ref={ref} {...props} type="tel" />
})

export default InputTel
`},62808:function(e,n){n.Z=`import { maxLengthFormatter, minMaxFormatter, precisionFormatter } from './utils'

// \u77EB\u6B63\u6700\u5927\u957F\u5EA6\u548C\u5C0F\u6570\u4F4D\u622A\u53D6
function correctValue(val, { min, max, maxLength, trim, precision }) {
  if (val === undefined || val === '') return val
  if (typeof val !== 'string' && typeof val !== 'number') return ''

  // \u6700\u5927\u6700\u5C0F\u503C\u77EB\u6B63
  // eslint-disable-next-line
  val = minMaxFormatter(val, { min, max })

  // \u5C0F\u6570\u4F4D\u622A\u53D6
  // eslint-disable-next-line
  val = precisionFormatter(val, { precision, trim })

  // \u6700\u5927\u957F\u5EA6\u8F7D\u53D6
  // eslint-disable-next-line
  val = maxLengthFormatter(val, { maxLength })

  return val
}

export default correctValue
`},57746:function(e,n){n.Z=`import _ from 'lodash'
import React from 'react'
import IconClear from './../Icon/Clear'

// \u6E32\u67D3\u6E05\u9664\u6309\u94AE
function getClearNode({ clear, allowClear, disabled, readOnly, value, onClear, onTouchStart }) {
  // \u7981\u7528\u65F6\u4E0D\u663E\u793A\u6E05\u7A7A\u6309\u94AE
  if (disabled) return null

  let clearable = allowClear && (!_.isEmpty(value) || typeof value === 'number') ? true : false

  // \u81EA\u5B9A\u4E49\u6E32\u67D3\u6E05\u7A7A\u6309\u94AE
  if (typeof clear === 'function') {
    let clearNode = clear({
      allowClear,
      clearable: clearable,
      readOnly,
      value,
      triggerClear: onClear,
      onTouchStart: onTouchStart
    })

    if (clearNode !== undefined) return clearNode
  }

  // \u9ED8\u8BA4\u6E32\u67D3
  if (!clearable) return null
  return <IconClear onTouchStart={onTouchStart} onClick={onClear} />
}

export default getClearNode
`},41923:function(e,n){n.Z=`import React, { forwardRef, useRef, useImperativeHandle, useEffect } from 'react'
import { maxLengthFormatter, minMaxFormatter, precisionFormatter } from './utils'
import getClearNode from './getClearNode'
import _correctValue from './correctValue'

// \u5185\u5E93\u4F7F\u7528-start
import MathUtil from './../../../utils/MathUtil'
import DOMUtil from './../../../utils/DOMUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { MathUtil, DOMUtil } from 'lyrixi-design-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const InputText = (
  {
    id,
    name,
    // \u5BB9\u5668
    type = 'text', // \u7C7B\u578B: text | number | tel | password | search | autoFit
    style,
    className,
    readOnly,
    disabled,
    // \u6587\u672C\u6846
    value = '',
    inputMode,
    formatter, // \u6307\u5B9A\u8F93\u5165\u6846\u5C55\u793A\u503C\u7684\u683C\u5F0F
    // \u5C0F\u6570\u7CBE\u5EA6, \u53EA\u6709\u6570\u503C\u6846\u624D\u751F\u6548
    precision,
    // [Number\u6846]\u5C0F\u6570\u4F4D\u88650, true: \u4E0D\u88650; false: \u88650\u3002 [Text\u6846]\u5F71\u54CD\u5DE6\u53F3\u7A7A\u683C;
    trim,
    max,
    min,
    placeholder,
    maxLength,
    // \u81EA\u52A8\u83B7\u53D6\u7126\u70B9
    autoFocus, // \u6E32\u67D3\u65F6\u81EA\u52A8\u83B7\u53D6\u7126\u70B9
    autoSelect, // \u6E32\u67D3\u65F6\u81EA\u52A8\u9009\u4E2D
    // \u81EA\u5B9A\u4E49\u6E32\u67D3\u6587\u672C\u6846
    input,
    // \u5DE6\u53F3\u56FE\u6807
    leftIcon,
    rightIcon,
    // \u6E05\u9664\u6309\u952E
    clear,
    allowClear,
    // events
    onClick,
    onChange,
    onBlur,
    onFocus,
    onKeyDown,
    onPressEnter,

    // \u8BA1\u5212\u5E9F\u5F03inputProps, \u4F7F\u7528props\u4EE3\u66FF
    inputProps = {},
    ...props
  },
  ref
) => {
  // \u8F93\u5165\u6846\u5C55\u793A\u503C
  const displayValue = typeof formatter === 'function' ? formatter(value) : null

  // \u6570\u503C\u6846\u9ED8\u8BA4inputMode
  if (type === 'number' && !inputMode) {
    // eslint-disable-next-line
    inputMode = precision === 0 ? 'numeric' : 'decimal'
  }

  // DOM
  const rootRef = useRef(null)
  const inputRef = useRef(null)

  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      inputDOM: inputRef.current,
      getRootDOM: () => {
        return rootRef.current
      },
      getInputDOM: () => {
        return inputRef.current
      },
      correctValue: correctValue,
      focus: focus
    }
  })

  useEffect(() => {
    if (!inputRef.current) return
    // \u81EA\u52A8\u83B7\u53D6\u7126\u70B9
    if (autoFocus) {
      focus()
    }

    if (!value) return

    let val = ''

    // \u77EB\u6B63\u4E3A\u6B63\u786E\u7684\u503C
    val = correctValue(value)

    // \u77EB\u6B63\u540E\u7684\u503C\u548C\u77EB\u6B63\u524D\u7684\u503C\u4E0D\u4E00\u81F4, \u9700\u8981\u5F3A\u5236\u4FEE\u6539\u6587\u672C\u6846\u5185\u7684\u503C
    if (val !== value) {
      onChange(val)
    }
  }, []) // eslint-disable-line

  // \u77EB\u6B63\u6700\u5927\u957F\u5EA6\u548C\u5C0F\u6570\u4F4D\u622A\u53D6
  function correctValue(val) {
    return _correctValue(val, { min, max, maxLength, trim, precision })
  }

  // \u83B7\u53D6\u7126\u70B9
  function focus() {
    if (disabled || readOnly || !inputRef.current) return
    inputRef.current.focus()
    // \u53EA\u6709\u83B7\u53D6\u7126\u70B9\u4EE5\u540E\u624D\u80FD\u9009\u4E2D
    if (autoSelect) {
      inputRef.current.select()
    }
    // \u8BBE\u7F6E\u5149\u6807\u4F4D\u7F6E\u5230\u6587\u672C\u672B\u5C3E
    else if (inputRef.current.value.length && inputRef.current.setSelectionRange) {
      const length = inputRef.current.value.length
      try {
        inputRef.current.setSelectionRange(length, length)
      } catch (e) {
        console.log(e)
      }
    }
  }

  // \u83B7\u53D6\u7126\u70B9\u65F6, \u5982\u679CreadOnly\u6216\u8005disabled\u65F6, \u9700\u8981\u7ACB\u5373\u5931\u53BB\u7126\u70B9, \u89E3\u51B3ios\u4F1A\u51FA\u73B0\u5E95\u680F\u7684\u95EE\u9898
  function handleFocus(e) {
    if (readOnly || disabled) {
      e.target.blur()
      return
    }
    if (onFocus) onFocus(e)
  }

  // \u4FEE\u6539\u503C
  async function handleChange(e) {
    let target = e.target
    let val = target.value
    // \u6B64\u5904\u4E0D\u5B9C\u7528target?.validity?.badInput\u77EB\u6B63\u6570\u503C, \u56E0\u4E3Aios\u4E0A.\u4E5F\u8FD4\u56DE\u7A7A

    // \u77EB\u6B63\u6570\u503C
    if (type === 'number' && /^-?\\d*\\.?$/.test(val) === false) {
      val = MathUtil.extractNumber(val)
    }

    // \u77EB\u6B63maxLength\u548C\u5C0F\u6570\u70B9\u4F4D\u6570(\u4E0D\u80FD\u77EB\u6B63\u5176\u5B83\u6846\uFF0C\u56E0\u4E3A\u77EB\u6B63\u5C06\u65E0\u6CD5\u8F93\u5165\u4E2D\u6587)
    if (MathUtil.isNumber(val)) {
      // \u4E0D\u80FD\u6821\u9A8C\u6700\u5C0F\u503C\uFF0C\u56E0\u4E3Amin={0.1}\u65F6\uFF0C\u65E0\u6CD5\u5220\u9664
      val = minMaxFormatter(val, { max })
      val = precisionFormatter(val, { precision, trim: false })
      val = maxLengthFormatter(val, { maxLength })
      if (target.value !== val) {
        target.value = val
      }
    }

    // \u89E6\u53D1onChange: \u4F7F\u7528defaultValue\u65F6, \u5220\u9664\u5230\u70B9\u65F6\u4F1A\u76F4\u63A5\u628A\u70B9\u6E05\u7A7A
    if (onChange) onChange(val, { action: 'change' })
  }

  // \u6570\u503C\u6846\u5931\u53BB\u7126\u70B9, \u6821\u9A8C\u6700\u5927\u503C\u548C\u6700\u5C0F\u503C
  function handleBlur(e) {
    if (readOnly || disabled) {
      return
    }
    let target = e.target
    let val = target.value

    // \u6570\u503C\u6846\u5931\u7126\u65F6\u9700\u8981\u77EB\u6B63\u6570\u503C
    if (MathUtil.isNumber(val)) {
      // \u6B63\u5E38\u8F93\u5165\uFF1A\u77EB\u6B63\u6700\u5927\u6700\u5C0F\u503C\u3001\u5C0F\u6570\u70B9\u3001\u6700\u5927\u957F\u5EA6
      if (val && !isNaN(val)) {
        // \u7EA0\u6B63\u6570\u5B57
        val = correctValue(val)
      }
      // \u8F93\u5165\u9519\u8BEF\u6216\u771F\u7684\u4E3A\u7A7A\uFF1A\u7528\u4E8E\u89E3\u51B3ios\u53EF\u4EE5\u8F93\u5165\u5B57\u6BCD\u4E2D\u6587\u7B49\u95EE\u9898
      else {
        val = ''
      }
    }

    // trim
    if (trim && val && typeof val === 'string' && val.trim() !== val) {
      val = val.trim()
    }

    // \u4FEE\u6539\u5B8C\u56DE\u8C03
    if (val !== value) {
      target.value = val
      if (onChange) onChange(val, { action: 'blur' })
    }

    if (!inputRef.current?.preventBlur) {
      if (onBlur) onBlur(e)
    }
  }

  // \u70B9\u51FB\u6E05\u9664(blur\u751F\u6548)
  async function handleClear(e) {
    e && e?.stopPropagation?.()

    // \u5220\u9664\u963B\u6B62blur
    delete inputRef?.current?.preventBlur

    // \u83B7\u53D6\u7126\u70B9
    focus()

    // Callback
    typeof onChange === 'function' && onChange('', { action: 'clickClear' })
  }

  function handleKeyDown(e) {
    onKeyDown && onKeyDown(e)
    if (typeof onPressEnter !== 'function') return
    // \u76D1\u542C Enter \u952E\uFF08keyCode 13 \u6216 'Enter'\uFF09
    if (e.key === 'Enter' || e.keyCode === 13) {
      // \u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A\uFF08\u9632\u6B62\u8868\u5355\u63D0\u4EA4\u5BFC\u81F4\u7684\u9875\u9762\u5237\u65B0\uFF09
      e.preventDefault()

      // \u5931\u7126\u6536\u8D77\u952E\u76D8\uFF08\u79FB\u52A8\u7AEF\uFF09
      e.target.blur()

      // \u6267\u884C\u641C\u7D22
      onPressEnter(e)
    }
  }

  // render
  function getInputNode() {
    if (typeof input === 'function') {
      return input({
        inputRef,
        id,
        name,
        inputMode,
        autoFocus,
        value,
        maxLength,
        readOnly,
        disabled,
        placeholder,
        onChange: handleChange,
        onBlur: handleBlur,
        onFocus: handleFocus,
        onKeyDown: handleKeyDown
      })
    }

    // autoFit\u7C7B\u578B
    if (type === 'autoFit') {
      return (
        <div className={\`seed-input-autofit\`}>
          <textarea
            ref={inputRef}
            id={id}
            name={name}
            inputMode={inputMode}
            {...inputProps}
            className={\`seed-input-autofit-textarea\${
              inputProps?.className ? ' ' + inputProps?.className : ''
            }\`}
            autoFocus={autoFocus}
            value={value}
            maxLength={maxLength}
            readOnly={readOnly}
            disabled={disabled}
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeyDown}
          ></textarea>
          <pre
            style={inputProps?.style}
            className={\`seed-input-autofit-pre\${
              inputProps?.className ? ' ' + inputProps?.className : ''
            }\`}
          >
            <span>{value}</span>
          </pre>
        </div>
      )
    }
    // textarea\u7C7B\u578B
    if (type === 'textarea') {
      // \u5982\u679C\u503C\u7ED1\u5B9A\u5C5E\u6027,\u5219\u53EA\u6709\u901A\u8FC7\u7236\u7EC4\u4EF6\u7684prop\u6765\u6539\u53D8\u503C
      return (
        <textarea
          ref={inputRef}
          id={id}
          name={name}
          inputMode={inputMode}
          {...inputProps}
          autoFocus={autoFocus}
          value={value}
          maxLength={maxLength}
          readOnly={readOnly}
          disabled={disabled}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          className={\`seed-input-text\${inputProps.className ? ' ' + inputProps.className : ''}\`}
        ></textarea>
      )
    }

    // \u5176\u5B83\u7C7B\u578B
    return (
      <input
        ref={inputRef}
        id={id}
        name={name}
        type={type === 'number' ? 'text' : type} // number\u7C7B\u578B\u9700\u8981text\uFF0C\u5426\u5219focus\u65E0\u6CD5\u8BBE\u7F6E\u5149\u6807\u5230\u672B\u5C3E
        inputMode={inputMode}
        {...inputProps}
        className={\`seed-input-text\${inputProps.className ? ' ' + inputProps.className : ''}\`}
        value={value}
        min={typeof min === 'number' ? min : ''}
        max={typeof max === 'number' ? max : ''}
        maxLength={maxLength}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        onChange={handleChange}
        autoFocus={autoFocus}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
      />
    )
  }

  return (
    <div
      {...props}
      style={style}
      className={DOMUtil.classNames(
        \`seed-input\`,
        className,
        \`seed-type-\${type}\`,
        displayValue ? 'seed-has-formatter' : '',
        disabled ? ' disabled' : '',
        readOnly ? ' readonly' : ''
      )}
      onClick={onClick}
      ref={rootRef}
    >
      {/* Left */}
      {typeof leftIcon === 'function' ? leftIcon({ value }) : leftIcon}

      <div
        className={DOMUtil.classNames(
          'seed-input-node',
          disabled ? 'disabled' : '',
          readOnly ? 'readOnly' : ''
        )}
      >
        {/* Main */}
        {getInputNode()}

        {/* Blur display value */}
        {displayValue ? (
          <div
            className={DOMUtil.classNames(\`seed-input-formatter\`, inputProps?.className)}
            style={inputProps?.style}
            // Click to focus text
            onClick={() => {
              focus()
            }}
          >
            {displayValue}
          </div>
        ) : null}
      </div>

      {/* Clear Icon */}
      {getClearNode({
        clear,
        allowClear,
        disabled,
        readOnly,
        value,
        onClear: handleClear,
        onTouchStart: (e) => {
          inputRef.current.preventBlur = true
        }
      })}

      {/* Right */}
      {typeof rightIcon === 'function' ? rightIcon({ value }) : rightIcon}
    </div>
  )
}

export default forwardRef(InputText)
`},85216:function(e,n){n.Z=`import maxLengthFormatter from './maxLengthFormatter'
import minMaxFormatter from './minMaxFormatter'
import precisionFormatter from './precisionFormatter'

export { maxLengthFormatter, minMaxFormatter, precisionFormatter }
`},51714:function(e,n){n.Z=`// \u77EB\u6B63\u6700\u5927\u957F\u5EA6\u4E0E\u5C0F\u6570\u4F4D
function maxLengthFormatter(val, { maxLength }) {
  // eslint-disable-next-line
  if (typeof val === 'number') val = String(val)

  // \u6700\u5927\u957F\u5EA6
  if (maxLength && val && val.length > maxLength) {
    // eslint-disable-next-line
    val = val.substring(0, maxLength)
  }
  return val
}

export default maxLengthFormatter
`},49661:function(e,n){n.Z=`// \u77EB\u6B63\u6700\u5927\u503C\u548C\u6700\u5C0F\u503C
function minMaxFormatter(val, { min, max }) {
  if (val && !isNaN(val) && val !== (null || '')) {
    if (typeof max === 'number') {
      // eslint-disable-next-line
      if (Number(val) > max) val = max
    }
    if (typeof min === 'number') {
      // eslint-disable-next-line
      if (Number(val) < min) val = min
    }
  }
  return val
}

export default minMaxFormatter
`},15760:function(e,n){n.Z=`// \u5185\u5E93\u4F7F\u7528-start
import MathUtil from './../../../../utils/MathUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { MathUtil } from 'lyrixi-design-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// \u77EB\u6B63\u5C0F\u6570\u4F4D\u622A\u53D6
function precisionFormatter(value, { precision, trim }) {
  let val = value
  // \u7B26\u5408\u622A\u53D6\u6761\u4EF6\u65F6
  if (typeof precision === 'number' && !isNaN(val) && val !== (null || '')) {
    if (trim) {
      val = Number(val || 0)
    }
    val = MathUtil.fixed(val, precision)
  }
  return val
}

export default precisionFormatter
`},42193:function(e,n){n.Z=`import React, { forwardRef } from 'react'
import InputText from './../Text'

const Textarea = forwardRef(({ ...props }, ref) => {
  return <InputText ref={ref} {...props} type="textarea" />
})

export default Textarea
`},94829:function(e,n){n.Z=`import React, { forwardRef } from 'react'
import InputText from './../Text'

// \u5185\u5E93\u4F7F\u7528-start
import LocaleUtil from './../../../utils/LocaleUtil'
import Clipboard from './../../../utils/Clipboard'
import Toast from './../../Toast'
// \u76F4\u63A5\u5F15\u5165Modal\u4F1A\u6B7B\u5FAA\u73AF, \u56E0\u4E3AModal\u91CC\u5F15\u5165\u4E86Input
import alert from './../../Modal/api/alert'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { LocaleUtil, Clipboard, Toast, Modal } from 'lyrixi-design-mobile'
const alert = Modal.alert
\u6D4B\u8BD5\u4F7F\u7528-end */

const Url = forwardRef(
  (
    {
      onClick,
      onPreview, // \u662F\u5426\u652F\u6301\u5355\u51FB\u9884\u89C8, readOnly\u4E3Atrue\u65F6\u624D\u751F\u6548
      type,
      ...props
    },
    ref
  ) => {
    function copyLink(url) {
      Clipboard.copy(url, {
        success: () => {
          Toast.show({
            content: LocaleUtil.locale('\u94FE\u63A5\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F', 'SeedsUI_link_copy_success')
          })
        },
        fail: () => {
          alert({
            maskProps: {
              style: {
                zIndex: 100
              }
            },
            title: LocaleUtil.locale('\u63D0\u793A', 'SeedsUI_alert_title'),
            content:
              LocaleUtil.locale('\u94FE\u63A5\u590D\u5236\u5230\u526A\u8D34\u677F\u5931\u8D25, \u8BF7\u957F\u6309\u590D\u5236', 'SeedsUI_link_copy_error') +
              \`<br/>\${url}\`
          })
        }
      })
    }

    const handleClick = async (e) => {
      // \u53EA\u8BFB\u624D\u53EF\u4EE5\u590D\u5236\u8FDE\u63A5
      if (!props?.readOnly && !props?.disabled) return

      // \u7F51\u5740\u4E0D\u518D\u9700\u8981\u534F\u8BAE\u524D\u7F00 \u6709\u524D\u7F00\u5219\u4FDD\u7559\uFF0C\u65E0\u524D\u7F00\u5219\u624B\u52A8\u62FC\u63A5http\u534F\u8BAE\u4F5C\u4E3A\u524D\u7F00
      let value = e.target.value
      let url = /^(https|http)?:\\/\\//.test(value) ? value : \`http://\${value}\`

      // \u81EA\u5B9A\u4E49\u9884\u89C8
      if (typeof onPreview === 'function') {
        let goOn = await onPreview(value)
        if (goOn === false) return
      }

      copyLink(url)
    }

    return <InputText ref={ref} {...props} onClick={handleClick} type="url" />
  }
)

export default Url
`},57939:function(e,n){n.Z=`import React, { useState } from 'react'
import { Layout, Divider, Input } from 'lyrixi-design-mobile'

export default () => {
  const [value, setValue] = useState('')
  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>Common</Divider>
        <Input.AutoFit
          placeholder="AutoFit"
          inputProps={{
            style: {
              maxHeight: '500px'
            }
          }}
          style={{ backgroundColor: '#f8f8f8' }}
          value={value}
          onChange={setValue}
          allowClear={true}
          onBlur={() => {
            console.log('\u89E6\u53D1blur')
          }}
        />

        <Divider>Formatter</Divider>
        <Input.AutoFit
          placeholder="AutoFit"
          inputProps={{
            style: {
              maxHeight: '500px'
            }
          }}
          formatter={(newValue) => {
            return '$' + newValue
          }}
          style={{ backgroundColor: '#f8f8f8' }}
          value={value}
          onChange={setValue}
          allowClear={true}
          onBlur={() => {
            console.log('\u89E6\u53D1blur')
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
`},29592:function(e,n){n.Z=`import React, { useEffect, useState, useRef } from 'react'
import { MathUtil, Input } from 'lyrixi-design-mobile'

export default () => {
  const inputNumberRef = useRef(null)
  const [value, setValue] = useState(1)

  useEffect(() => {
    console.log(inputNumberRef.current)
  }, [])
  return (
    <>
      <Input.Number
        ref={inputNumberRef}
        // inputMode="numeric"
        // inputMode="decimal"
        // pattern="[0-9]+"
        placeholder="Input"
        value={value}
        precision={0}
        maxLength={18}
        trim={true}
        allowClear
        clear={({ clearable, triggerClear }) => {
          return clearable ? <Input.IconClear onClick={triggerClear} /> : <Input.IconRightArrow />
        }}
        formatter={(currentValue) => {
          return '$' + MathUtil.thousands(currentValue)
        }}
        onChange={(val) => {
          console.log('\u5F97\u5230\u7684\u503C:', val)
          setValue(val)
        }}
      />
    </>
  )
}
`},34951:function(e,n){n.Z=`import React, { useState } from 'react'
import { MathUtil, Input } from 'lyrixi-design-mobile'

export default () => {
  const [value, setValue] = useState('2.10')
  return (
    <>
      <Input.NumberBox
        className="xl"
        placeholder="Size xl"
        value={value}
        onChange={setValue}
        precision={2}
        maxLength={8}
        min={0.1}
        trim={true}
        allowClear
      />
      <Input.NumberBox
        className="l"
        placeholder="Size l"
        value={value}
        onChange={setValue}
        precision={2}
        maxLength={8}
        min={0.1}
        trim={true}
        allowClear
      />
      <Input.NumberBox
        placeholder="Size m"
        value={value}
        onChange={setValue}
        precision={2}
        maxLength={8}
        min={0.1}
        trim={true}
        allowClear
        formatter={(num) => {
          return '$' + MathUtil.thousands(Number(num).toFixed(2))
        }}
        // onChange={(val) => {
        //   console.log('\u5F97\u5230\u7684\u503C:', val)
        //   setValue(val)
        // }}
      />
      <Input.NumberBox
        className="s"
        placeholder="Size s"
        value={value}
        onChange={setValue}
        precision={2}
        maxLength={8}
        min={0.1}
        trim={true}
        // allowClear
      />
    </>
  )
}
`},44515:function(e,n){n.Z=`import React, { useState } from 'react'
import { Input } from 'lyrixi-design-mobile'

export default () => {
  const [value, setValue] = useState('')
  return (
    <>
      <Input.Password
        placeholder="Select"
        value={value}
        allowClear
        onChange={(val) => {
          console.log(val)
          setValue(val)
        }}
      />
    </>
  )
}
`},55243:function(e,n){n.Z=`import React, { useState } from 'react'
import { Input } from 'lyrixi-design-mobile'

export default () => {
  const [value, setValue] = useState('abcdefgAbcd$')
  return (
    <>
      <Input.PasswordStrength
        value={value}
        onChange={(val) => {
          console.log(val)
          setValue(val)
        }}
      />
    </>
  )
}
`},51829:function(e,n){n.Z=`import React, { useState } from 'react'
import { Input } from 'lyrixi-design-mobile'

export default () => {
  const [value, setValue] = useState('')
  return (
    <>
      <Input.Range
        style={{ marginTop: '50px' }}
        value={value}
        // disabled
        onChange={(val) => {
          console.log(val)
          setValue(val)
        }}
      />
    </>
  )
}
`},22342:function(e,n){n.Z=`import React, { useState } from 'react'
import { Input } from 'lyrixi-design-mobile'

export default () => {
  const [value, setValue] = useState('')
  return (
    <>
      <Input.Tel
        value={value}
        onChange={(val) => {
          console.log(val)
          setValue(val)
        }}
      />
    </>
  )
}
`},30522:function(e,n){n.Z=`import React, { useState, useRef, useEffect } from 'react'
import _ from 'lodash'
import { Layout, Divider, Input } from 'lyrixi-design-mobile'

export default () => {
  const inputTextRef = useRef(null)
  const [value, setValue] = useState('\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u4E2D\u534E\u4EBA\u6C11\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u4E2D\u534E\u4EBA\u6C11')

  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>Common</Divider>
        <Input.Text
          trim
          ref={inputTextRef}
          precision={2}
          // readOnly
          value={value}
          // maxLength={10}
          rightIcon={({ value }) => {
            return value ? null : <Input.IconRightArrow />
          }}
          allowClear
          clear={({ triggerClear }) => {
            return !_.isEmpty(value) ? (
              <Input.IconClear onClick={triggerClear} />
            ) : (
              <Input.IconRightArrow />
            )
          }}
          onChange={(val) => {
            console.log(val)
            setValue(val)
          }}
        />

        <Divider>Formatter</Divider>
        <Input.Text
          value={value}
          allowClear
          onChange={(val) => {
            console.log(val)
            setValue(val)
          }}
          formatter={(currentValue) => {
            return '$' + currentValue
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
`},39900:function(e,n){n.Z=`import React, { useState } from 'react'
import { Input } from 'lyrixi-design-mobile'

export default () => {
  const [value, setValue] = useState('')
  return (
    <>
      <Input.Textarea
        value={value}
        allowClear
        inputProps={{
          style: {
            padding: '12px'
          }
        }}
        formatter={(newValue) => {
          return '$' + newValue
        }}
        style={{ backgroundColor: '#f8f8f8' }}
        onChange={(val) => {
          console.log(val)
          setValue(val)
        }}
      />
    </>
  )
}
`},37018:function(e,n){n.Z=`import AutoFit from './AutoFit'
import Number from './Number'
import NumberBox from './NumberBox'
import Password from './Password'
import PasswordStrength from './PasswordStrength'
import Range from './Range'
import Rate from './Rate'
import Tel from './Tel'
import Text from './Text'
import Node from './Node'
import Search from './Search'
import Textarea from './Textarea'

import Url from './Url'
import IconClear from './Icon/Clear'
import IconRightArrow from './Icon/RightArrow'
import IconLeftArrow from './Icon/LeftArrow'

// eslint-disable-next-line
export default {
  AutoFit: AutoFit,
  Number: Number,
  NumberBox: NumberBox,
  Password: Password,
  PasswordStrength: PasswordStrength,
  Range: Range,
  Rate: Rate,
  Tel: Tel,
  Text: Text,
  Node: Node,
  Search: Search,
  Textarea: Textarea,
  Url: Url,
  IconClear: IconClear,
  IconRightArrow: IconRightArrow,
  IconLeftArrow: IconLeftArrow
}
`},42397:function(e,n){n.Z=`import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil,SafeArea } from 'lyrixi-design-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const Aside = forwardRef(({ safeArea, children, ...props }, ref) => {
  const rootRef = useRef(null)

  // \u8282\u70B9
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current
    }
  })

  return (
    <aside
      {...props}
      className={DOMUtil.classNames(
        'layout-aside',
        SafeArea.getSafeAreaClassName(safeArea),
        props.className
      )}
      ref={rootRef}
    >
      {children}
    </aside>
  )
})

export default Aside
`},89815:function(e,n){n.Z=`import React from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../../utils/DOMUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil } from 'lyrixi-design-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// \u5E95\u90E8\u6309\u94AE
export default function FooterButton({ disabled, type, id, name, primary, onChange }) {
  function handleClick() {
    onChange && onChange({ type, id, name, primary })
  }
  return (
    <div
      className={DOMUtil.classNames(
        'layout-footer-button',
        primary ? 'layout-footer-button-primary' : 'layout-footer-button-default',
        disabled ? 'disabled' : ''
      )}
      onClick={handleClick}
    >
      {name}
    </div>
  )
}
`},72119:function(e,n){n.Z=`import React, { useState } from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../../utils/DOMUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil } from 'lyrixi-design-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// \u5185\u5E93\u4F7F\u7528-start
import ActionSheet from './../../../ActionSheet'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { ActionSheet } from 'lyrixi-design-mobile'
\u6D4B\u8BD5\u4F7F\u7528-start */

// \u56FE\u6587\u7EC4\u5408
export default function Tab({ disabled, icon, type, id, name, childrenList, onChange }) {
  // ActionSheet
  const [visible, setVisible] = useState(false)
  function handleClick() {
    if (Array.isArray(childrenList) && childrenList.length) {
      setVisible(true)
      return
    }
    onChange && onChange({ type, id, name })
  }

  // \u83B7\u53D6\u9009\u4E2D\u72B6\u6001\u7684Node
  function getIconNode() {
    if (typeof icon === 'string') {
      return <i className={icon} />
    }
    if (typeof icon === 'function') {
      return icon({ type, id, name })
    }
    if (React.isValidElement(icon)) {
      return icon
    }

    return <i className={\`layout-footer-tab-icon-more\`} />
  }

  return (
    <>
      <div
        className={DOMUtil.classNames('layout-footer-tab', disabled ? 'disabled' : '')}
        onClick={handleClick}
      >
        <span className={\`layout-footer-tab-icon\`}>{getIconNode()}</span>
        <div className="layout-footer-tab-name">{name}</div>
      </div>

      {Array.isArray(childrenList) && childrenList.length ? (
        <ActionSheet.Modal
          visible={visible}
          list={childrenList}
          onChange={(newValue) => {
            onChange && onChange(newValue)
            setVisible(false)
          }}
          onVisibleChange={setVisible}
        />
      ) : null}
    </>
  )
}
`},32547:function(e,n){n.Z=`import React from 'react'
import Tab from './Tab'
import Button from './Button'

// \u5E9F\u5F03: \u4F7F\u7528FooterBar\u4EE3\u66FF
export default function Buttons({ buttons, onChange }) {
  return (
    <>
      {buttons &&
        buttons.map((button, index) => {
          if (button.type === 'tab' || button.children) {
            return (
              <Tab
                key={button?.id || index}
                disabled={button?.disabled}
                icon={button?.icon}
                type={button?.type}
                id={button?.id}
                name={button?.name}
                childrenList={button?.children}
                onChange={onChange}
              />
            )
          }
          return (
            <Button
              key={button?.id || index}
              disabled={button?.disabled}
              type={button?.type}
              id={button?.id}
              name={button?.name}
              primary={button?.primary}
              onChange={onChange}
            />
          )
        })}
    </>
  )
}
`},68259:function(e,n){n.Z=`import React, { useImperativeHandle, forwardRef, useRef } from 'react'
import Buttons from './Buttons'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil, SafeArea } from 'lyrixi-design-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const Footer = forwardRef(
  (
    {
      safeArea,
      // \u5E9F\u5F03 start: \u4F7F\u7528FooterBar\u4EE3\u66FF
      buttons,
      buttonsType, // default: \u9ED8\u8BA4; text: \u6587\u672C;
      onChange,
      // \u5E9F\u5F03 end
      children,
      ...props
    },
    ref
  ) => {
    const rootRef = useRef(null)

    // Expose tools
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    let hasButtons = Array.isArray(buttons) && buttons.length

    return (
      <footer
        {...props}
        className={DOMUtil.classNames(
          'layout-footer',
          hasButtons
            ? buttonsType
              ? 'layout-footer-buttons layout-footer-buttons-' + buttonsType
              : 'layout-footer-buttons layout-footer-buttons-default'
            : '',
          SafeArea.getSafeAreaClassName(safeArea),
          props.className
        )}
        ref={rootRef}
      >
        {hasButtons ? <Buttons buttons={buttons} onChange={onChange} /> : null}
        {children}
      </footer>
    )
  }
)

export default Footer
`},94339:function(e,n){n.Z=`import React, { useImperativeHandle, forwardRef, useRef } from 'react'

const Header = forwardRef(({ safeArea, children, ...props }, ref) => {
  const rootRef = useRef(null)

  // Expose
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current
    }
  })

  return (
    <header
      {...props}
      className={\`layout-header\${props.className ? ' ' + props.className : ''}\`}
      ref={rootRef}
    >
      {children}
    </header>
  )
})

export default Header
`},91041:function(e,n){n.Z=`import React, { useImperativeHandle, forwardRef, useRef, useEffect } from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil, SafeArea } from 'lyrixi-design-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// [safeArea] true: \u81EA\u52A8\u5B89\u5168\u533A; false: \u5F3A\u5236\u53D6\u6D88\u5B89\u5168\u533A
const Layout = forwardRef(({ safeArea, animation, children, ...props }, ref) => {
  const rootRef = useRef(null)

  // Expose
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current
    }
  })

  useEffect(() => {
    if (!rootRef.current) return
    // \u5B50\u7EA7\u6709aside\u5219\u589E\u52A0\u6837\u5F0Flayout-has-aside
    let aside = null
    if (rootRef.current.children) {
      for (let child of rootRef.current.children) {
        if (child.classList.contains('layout-aside')) {
          aside = true
        }
      }
    }
    if (aside) {
      rootRef.current.classList.add('layout-has-aside')
    } else {
      rootRef.current.classList.remove('layout-has-aside')
    }
    // eslint-disable-next-line
  }, [children])

  return (
    <section
      {...props}
      className={DOMUtil.classNames(
        'layout',
        SafeArea.getSafeAreaClassName(safeArea),
        props.className
      )}
      data-animation={animation}
      ref={rootRef}
    >
      {children}
    </section>
  )
})

export default Layout
`},90429:function(e,n){n.Z=`import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import LocaleUtil from './../../../utils/LocaleUtil'

const TopContainer = forwardRef((props, ref) => {
  const rootRef = useRef(null)
  useImperativeHandle(ref, () => {
    return rootRef.current
  })
  return (
    <div ref={rootRef} className="layout-main-pull-push">
      <div className="layout-main-pull-push-wrapper">
        <div className="layout-main-pull-push-icon"></div>
        <div className="layout-main-pull-push-text">
          {LocaleUtil.locale('\u4E0B\u62C9\u53EF\u4EE5\u5237\u65B0', 'SeedsUI_pull_down_refresh')}
        </div>
      </div>
    </div>
  )
})

export default TopContainer
`},34657:function(e,n){n.Z=`import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import TopContainer from './TopContainer'
import isBottom from './utils/isBottom'
import topRefreshOk from './utils/topRefreshOk.js'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
import LocaleUtil from './../../../utils/LocaleUtil'
import SafeArea from './../../SafeArea'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil, LocaleUtil, SafeArea } from 'lyrixi-design-mobile'
\u6D4B\u8BD5\u4F7F\u7528-start */

// \u4E0B\u62C9\u5237\u65B0\u5BB9\u5668
const Main = forwardRef(
  (
    {
      safeArea,
      threshold = 50,
      touchStopPropagation = true,
      onTopRefresh,
      onBottomRefresh,
      onScroll,
      children,
      ...props
    },
    ref
  ) => {
    const rootRef = useRef(null)
    const isLoadingRef = useRef(null)
    const topContainerRef = useRef(null)

    // Expose api
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    /* ----------------------
    Events
    ---------------------- */
    // Touch\u4FE1\u606F
    let touchesRef = useRef({
      isTop: true,
      startY: 0,
      currentY: 0,
      diffY: 0
    })

    function handleTouchStart(e) {
      touchStopPropagation && e.stopPropagation()
      if (isLoadingRef.current) return

      // \u5982\u679C\u4E0D\u5728\u9876\u90E8\uFF0C\u5219\u4E0D\u89E6\u53D1
      if (e.currentTarget.scrollTop <= 0) touchesRef.current.isTop = true
      else touchesRef.current.isTop = false

      topContainerRef.current.style.webkitTransitionDuration = '0ms'

      touchesRef.current.startY = e.clientY || e.touches[0].clientY
      touchesRef.current.diffY = 0
    }
    // \u6807\u8BC6\u5934\u90E8\u6B63\u5728\u62D6\u52A8
    function handleTouchMove(e) {
      touchStopPropagation && e.stopPropagation()
      if (isLoadingRef.current) return
      if (!touchesRef.current.isTop) return

      touchesRef.current.currentY = e.clientY || e.touches[0].clientY
      touchesRef.current.diffY = touchesRef.current.currentY - touchesRef.current.startY

      // \u5411\u4E0B\u6EDA\u52A8
      if (touchesRef.current.diffY < 20) {
        return
      }

      // \u62C9\u52A8\u9AD8\u5EA6
      if (touchesRef.current.diffY > 100) touchesRef.current.diffY = 100
      topContainerRef.current.style.height = touchesRef.current.diffY + 'px'
      let topIcon = topContainerRef.current?.querySelector?.('.layout-main-pull-push-icon')
      let topText = topContainerRef.current?.querySelector?.('.layout-main-pull-push-text')
      if (touchesRef.current.diffY >= threshold) {
        if (topIcon) topIcon.classList.add('layout-main-pull-push-icon-down')
        if (topText)
          topText.innerHTML = LocaleUtil.locale('\u91CA\u653E\u7ACB\u5373\u5237\u65B0', 'SeedsUI_release_refresh')
      } else {
        if (topIcon) topIcon.classList.remove('layout-main-pull-push-icon-down')
        if (topText)
          topText.innerHTML = LocaleUtil.locale('\u4E0B\u62C9\u53EF\u4EE5\u5237\u65B0', 'SeedsUI_pull_down_refresh')
      }
    }
    async function handleTouchEnd(e) {
      touchStopPropagation && e.stopPropagation()
      if (isLoadingRef.current) return
      if (!touchesRef.current.isTop) return

      topContainerRef.current.style.webkitTransitionDuration = '150ms'

      // \u62C9\u52A8\u5E45\u5EA6\u8FC7\u5C0F\u5219\u6536\u8D77
      if (touchesRef.current.diffY <= threshold) {
        topContainerRef.current.style.height = '0'
      }
      // \u53CD\u4E4B\u5C55\u793A
      else {
        let topIcon = topContainerRef.current?.querySelector?.('.layout-main-pull-push-icon')
        let topText = topContainerRef.current?.querySelector?.('.layout-main-pull-push-text')
        topContainerRef.current.style.height = threshold + 'px'
        if (topIcon) topIcon.classList.remove('layout-main-pull-push-icon-down')
        if (topIcon) topIcon.classList.add('layout-main-pull-push-icon-loading')
        if (topText) topText.innerHTML = \`\${LocaleUtil.locale('\u52A0\u8F7D\u4E2D', 'SeedsUI_refreshing')}...\`

        // Trigger Events
        if (onTopRefresh) {
          isLoadingRef.current = true
          let isOk = await onTopRefresh()
          // \u5934\u90E8\u663E\u793A
          await topRefreshOk(topContainerRef.current, isOk)
          isLoadingRef.current = false
        }
      }
    }

    async function handleScroll(e) {
      if (onScroll) onScroll(e)
      if (!onBottomRefresh || isLoadingRef.current) return
      if (isBottom(rootRef.current)) {
        isLoadingRef.current = true
        await onBottomRefresh()
        isLoadingRef.current = false
      }
    }

    return (
      <main
        {...props}
        className={DOMUtil.classNames(
          'layout-main',
          SafeArea.getSafeAreaClassName(safeArea),
          props.className
        )}
        ref={rootRef}
        onTouchStart={onTopRefresh ? handleTouchStart : undefined}
        onTouchMove={onTopRefresh ? handleTouchMove : undefined}
        onTouchEnd={onTopRefresh ? handleTouchEnd : undefined}
        // onClick={(e) => {
        //   e.stopPropagation()
        // }}
        onScroll={onScroll || onBottomRefresh ? handleScroll : undefined}
      >
        {/* \u5934\u90E8\u5237\u65B0 */}
        <TopContainer ref={topContainerRef} />
        {/* \u5185\u5BB9 */}
        {children}
      </main>
    )
  }
)

export default Main
`},40434:function(e,n){n.Z=`// \u5224\u65AD\u6EDA\u52A8\u6761\u662F\u5426\u5728\u5E95\u90E8
function isBottom(container) {
  if (!container) return false

  let clientHeight = container.clientHeight // || window.innerHeight
  let scrollHeight = container.scrollHeight
  let scrollTop =
    container === document.body ? document.documentElement.scrollTop : container.scrollTop
  // console.log(clientHeight + ':' + scrollHeight + ':' + scrollTop)
  if (scrollTop + clientHeight >= scrollHeight - 2) {
    return true
  }
  return false
}
export default isBottom
`},86859:function(e,n){n.Z=`// \u5185\u5E93\u4F7F\u7528-start
import LocaleUtil from './../../../../utils/LocaleUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { LocaleUtil } from 'lyrixi-design-mobile'
\u6D4B\u8BD5\u4F7F\u7528-start */

// \u5237\u65B0\u5B8C\u6210
function topRefreshOk(topContainer, isOk) {
  return new Promise((resolve) => {
    let topText = topContainer?.querySelector?.('.layout-main-pull-push-text')

    // \u5B8C\u6210\u63D0\u793A\u4FE1\u606F
    let finishMsg = ''
    // \u5931\u8D25
    if (isOk === false) {
      finishMsg = LocaleUtil.locale('\u5237\u65B0\u5931\u8D25', 'SeedsUI_refresh_failed')
    }
    // \u81EA\u5B9A\u4E49\u63D0\u793A\u4FE1\u606F
    else if (typeof isOk === 'string') {
      finishMsg = isOk
    }
    // \u6210\u529F
    else {
      finishMsg = LocaleUtil.locale('\u5237\u65B0\u6210\u529F', 'SeedsUI_refresh_success')
    }
    if (topText) topText.innerHTML = finishMsg

    setTimeout(() => {
      // \u91CD\u7F6E\u6837\u5F0F
      let topIcon = topContainer?.querySelector?.('.layout-main-pull-push-icon')
      if (topIcon) {
        topIcon.classList.remove('layout-main-pull-push-icon-down')
        topIcon.classList.remove('layout-main-pull-push-icon-loading')
      }
      if (topContainer) topContainer.style.height = '0'

      resolve(true)
    }, 1000)
  })
}

export default topRefreshOk
`},42561:function(e,n){n.Z=`import Layout from './Layout'

import Header from './Header'
import Aside from './Aside'
import Main from './Main'
import Footer from './Footer'

Layout.Header = Header
Layout.Aside = Aside
Layout.Main = Main
Layout.Footer = Footer

export default Layout
`},13937:function(e,n){n.Z=`import React, { forwardRef, useRef, useImperativeHandle } from 'react'

const BallWave = (props, ref) => {
  const rootRef = useRef(null)
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => {
        return rootRef.current
      }
    }
  })
  return (
    <div
      {...props}
      className={\`loading-ballwave\${props?.className ? ' ' + props.className : ''}\`}
      ref={rootRef}
    >
      <svg viewBox="20 0 60 40">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-100.000000, -71.000000)">
            <g transform="translate(95.000000, 71.000000)">
              <g transform="translate(5.000000, 0.000000)">
                {[0, 1, 2].map((i) => (
                  <rect
                    key={i}
                    fill="currentColor"
                    x={20 + i * 26}
                    y="16"
                    width="8"
                    height="8"
                    rx="2"
                  >
                    <animate
                      attributeName="y"
                      from="16"
                      to="16"
                      dur="2s"
                      begin={\`\${i * 0.2}s\`}
                      repeatCount="indefinite"
                      values="16; 6; 26; 16; 16"
                      keyTimes="0; 0.1; 0.3; 0.4; 1"
                    />
                  </rect>
                ))}
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  )
}

export default forwardRef(BallWave)
`},95048:function(e,n){n.Z=`import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'
import SpinFade from './../SpinFade'

// \u5185\u5E93\u4F7F\u7528-start
import LocaleUtil from './../../../utils/LocaleUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { LocaleUtil } from 'lyrixi-design-mobile'
\u6D4B\u8BD5\u4F7F\u7528-start */

const Loading = forwardRef(
  ({ portal, visible = true, maskProps = {}, icon, content, children, ...props }, ref) => {
    const rootRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => {
          return rootRef.current
        }
      }
    })

    // render icon
    function getIconNode() {
      if (typeof icon === 'function') {
        return icon()
      }
      if (React.isValidElement(icon)) {
        return icon
      }

      // Default Status
      return <SpinFade />
    }

    // \u7EC4\u5408Node
    let Node = (
      <div
        {...maskProps}
        className={\`loading-mask mask \${visible ? ' active' : ''}\${
          maskProps.className ? ' ' + maskProps.className : ''
        }\`}
        ref={rootRef}
      >
        {children !== undefined ? (
          children
        ) : (
          <div className="loading" {...props}>
            <div className="loading-icon">{getIconNode()}</div>
            <div className="loading-content">
              {content || \`\${LocaleUtil.locale('\u52A0\u8F7D\u4E2D', 'SeedsUI_refreshing')}...\`}
            </div>
          </div>
        )}
      </div>
    )

    if (portal) {
      return createPortal(Node, portal)
    }
    return Node
  }
)

export default Loading
`},99155:function(e,n){n.Z=`import React, { forwardRef, useRef, useImperativeHandle } from 'react'

const Ouroboros = (props, ref) => {
  const rootRef = useRef(null)
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => {
        return rootRef.current
      }
    }
  })
  return (
    <div
      {...props}
      className={\`loading-ouroboros\${props?.className ? ' ' + props.className : ''}\`}
      ref={rootRef}
    >
      <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20"></circle>
      </svg>
    </div>
  )
}

export default forwardRef(Ouroboros)
`},21826:function(e,n){n.Z=`import React, { forwardRef, useRef, useImperativeHandle } from 'react'

const SpinFade = (props, ref) => {
  const rootRef = useRef(null)
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => {
        return rootRef.current
      }
    }
  })
  return (
    <div
      {...props}
      className={\`loading-spinfade\${props?.className ? ' ' + props.className : ''}\`}
      ref={rootRef}
    >
      <div className="loading-spinfade-item"></div>
      <div className="loading-spinfade-item"></div>
      <div className="loading-spinfade-item"></div>
      <div className="loading-spinfade-item"></div>
      <div className="loading-spinfade-item"></div>
      <div className="loading-spinfade-item"></div>
      <div className="loading-spinfade-item"></div>
      <div className="loading-spinfade-item"></div>
      <div className="loading-spinfade-item"></div>
      <div className="loading-spinfade-item"></div>
      <div className="loading-spinfade-item"></div>
      <div className="loading-spinfade-item"></div>
    </div>
  )
}

export default forwardRef(SpinFade)
`},10356:function(e,n){n.Z=`import React, { useState, useEffect } from 'react'
import { Layout } from 'lyrixi-design-mobile'
// import { Loading } from 'lyrixi-design-mobile'
import Loading from './../../Loading/index.js'

export default () => {
  const [visible, setVisible] = useState(true)
  // useEffect(() => {
  //   setTimeout(() => {
  //     Loading.show({
  //       captionProps: {
  //         caption: ''
  //       },
  //       onVisibleChange: (visible) => {
  //         console.log('visible:', visible)
  //         setTimeout(() => {
  //           Loading.hide()
  //         }, 3000)
  //       }
  //     })
  //   }, 2000)
  // }, [])

  return (
    <Layout className="full">
      <Layout.Header className="text-center">Loading</Layout.Header>
      <Layout.Main className="bg-white">
        <Loading.SpinFade />
        <Loading.Ouroboros />
        <Loading.BallWave />
        <Loading
          // \u81EA\u5B9A\u4E49\u56FE\u6807\u548C\u5185\u5BB9
          icon={<Loading.Ouroboros />}
          content="\u81EA\u5B9A\u4E49\u5185\u5BB9"
        />
      </Layout.Main>
    </Layout>
  )
}
`},40475:function(e,n){n.Z=`import React from 'react'
import { Layout, Loading } from 'lyrixi-design-mobile'

export default () => {
  function handleToggle() {
    Loading.show()
    setTimeout(() => {
      Loading.hide()
    }, 500)
  }

  return (
    <Layout className="full">
      <Layout.Header className="text-center">Loading.hide</Layout.Header>
      <Layout.Main className="bg-white">
        <div className="demo-title" onClick={handleToggle}>
          Loading visible toggle
        </div>
      </Layout.Main>
    </Layout>
  )
}
`},5673:function(e,n){n.Z=`import React from 'react'
import { Layout } from 'lyrixi-design-mobile'
// import { Loading } from 'lyrixi-design-mobile'
import Loading from './../../../Loading/index.js'

export default () => {
  function handleToggle() {
    // Loading.defaultProps = {
    //   style: { backgroundColor: 'blue' },
    //   maskProps: { style: { backgroundColor: 'red' } }
    // }

    let loading = Loading.show({
      style: { backgroundColor: 'blue' },
      maskProps: { style: { backgroundColor: 'red' } },
      className: 'abc',
      content: '\u81EA\u5B9A\u4E49\u52A0\u8F7D'
    })
    console.log(loading)
    setTimeout(() => {
      Loading.show()
    }, 3000)
    setTimeout(() => {
      Loading.hide()
    }, 6000)
  }

  return (
    <Layout className="full">
      <Layout.Header className="text-center">Loading.show</Layout.Header>
      <Layout.Main className="bg-white">
        <div className="demo-title" onClick={handleToggle}>
          Loading visible toggle
        </div>
      </Layout.Main>
    </Layout>
  )
}
`},15021:function(e,n){n.Z=`// Loading\u662F\u5426\u5B58\u5728
// eslint-disable-next-line
export default function (props) {
  let modal = document.getElementById(props?.id || '__SeedsUI_loading_mask__')
  if (modal) return true
  return false
}
`},33200:function(e,n){n.Z=`// \u79FB\u9664Loading
// eslint-disable-next-line
export default function destroy(props) {
  let loadingId = props?.id || '__SeedsUI_loading_mask__'
  let mask = document.getElementById(loadingId)

  if (mask) {
    mask.parentNode.removeChild(mask)
  }
}
`},78094:function(e,n){n.Z=`import Loading from './Loading'
import SpinFade from './SpinFade'
import Ouroboros from './Ouroboros'
import BallWave from './BallWave'
import show from './show'
import hide from './hide'
import exists from './exists'

Loading.SpinFade = SpinFade
Loading.Ouroboros = Ouroboros
Loading.BallWave = BallWave
Loading.show = show
Loading.hide = hide
Loading.exists = exists

export default Loading
`},29058:function(e,n){n.Z=`// \u5185\u5E93\u4F7F\u7528-start
import LocaleUtil from './../../utils/LocaleUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { LocaleUtil } from 'lyrixi-design-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// \u663E\u793ALoading
// eslint-disable-next-line
export default function (props) {
  const { id, maskProps, className, style, content, onVisibleChange } = {
    ...(this?.defaultProps || {}),
    ...(props || {})
  }

  // \u6E32\u67D3
  function render() {
    let loadingId = id || '__SeedsUI_loading_mask__'
    let mask = document.getElementById(loadingId)

    // \u5982\u679C\u6CA1\u751F\u6210\u6210\u529F, \u5219\u5F3A\u5236\u751F\u6210
    if (!mask) {
      mask = document.createElement('div')
      mask.innerHTML = \`<div class="loading">
          <div class="loading-icon loading-spinfade">
            <div class="loading-spinfade-item"></div>
            <div class="loading-spinfade-item"></div>
            <div class="loading-spinfade-item"></div>
            <div class="loading-spinfade-item"></div>
            <div class="loading-spinfade-item"></div>
            <div class="loading-spinfade-item"></div>
            <div class="loading-spinfade-item"></div>
            <div class="loading-spinfade-item"></div>
            <div class="loading-spinfade-item"></div>
            <div class="loading-spinfade-item"></div>
            <div class="loading-spinfade-item"></div>
            <div class="loading-spinfade-item"></div>
          </div>
          <div class="loading-content"></div>
        </div>\`

      // \u6DFB\u52A0\u5230dom\u4E0A
      let root = document.getElementById('root') || document.body
      root.appendChild(mask)
    }

    // \u66F4\u65B0mask
    mask.setAttribute(
      'class',
      \`loading-mask mask active\${maskProps?.className ? ' ' + maskProps?.className : ''}\`
    )
    mask.setAttribute('id', loadingId)
    mask.setAttribute('style', '')
    for (let key in maskProps?.style || {}) {
      mask.style[key] = maskProps?.style[key]
    }

    // \u66F4\u65B0container
    let container = mask.querySelector('.loading')
    if (container) {
      container?.setAttribute('class', \`loading\${className ? ' ' + className : ''}\`)
      container?.setAttribute('style', '')
      for (let key in style || {}) {
        container.style[key] = style[key]
      }
    }

    let caption = content
    caption =
      typeof caption === 'string'
        ? caption
        : \`\${LocaleUtil.locale('\u52A0\u8F7D\u4E2D', 'SeedsUI_refreshing')}...\`
    mask.querySelector('.loading-content').innerHTML = caption

    // \u663E\u793A
    mask.classList.add('active')

    if (typeof onVisibleChange === 'function') {
      onVisibleChange(true)
    }

    return mask
  }
  return render()
}
`},56433:function(e,n){n.Z=`import React, { useState, useRef, useEffect } from 'react'
import { Bridge, Location, Input } from 'lyrixi-design-mobile'
import VConsole from 'vconsole'
import Footer from './Footer'
// window.getAddressDefault = function (data) {
//   if (data?.value) {
//     console.log(data)
//     return data
//   }
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         longitude: 118.74,
//         latitude: 31.99,
//         province: '\u6C5F\u82CF',
//         provinceNumber: '',
//         city: '\u5357\u4EAC',
//         cityNumber: '',
//         district: '\u5EFA\u90BA',
//         districtNumber: '',
//         street: '\u8857\u9053',
//         streetNumber: '',
//         address: '\u6C5F\u82CF\u7701\u5357\u4EAC\u5E02\u5EFA\u90BA\u533A\u4E91\u9F99\u5C71\u8DEF88\u53F7\u70FD\u706B\u79D1\u6280\u5927\u53A6'
//       })
//     }, 1000)
//   })
// }

export default () => {
  // Bridge.debug = true
  const comboRef = useRef(null)
  const [value, setValue] = useState({
    // latitude: 34.007479447064824,
    // longitude: -118.5000352126432,
    // type: 'wgs84',
    // address: '\u592A\u5E73\u6D0B\u516C\u56ED'

    // latitude: 39.909187,
    // longitude: 116.397451,
    // type: 'gcj02',
    // address: '\u5929\u5B89\u95E8'

    // latitude: 39.907783490367706,
    // longitude: 116.39120737493609,
    // type: 'wgs84',
    // address: '\u5929\u5B89\u95E8',

    latitude: 31.990374883871525,
    longitude: 118.73769931504451,
    type: 'gcj02',
    address: '\u5357\u4EAC\u70FD\u706B\u79D1\u6280'
  })
  // const [value, setValue] = useState({
  //   errMsg: 'getLocation:ok',
  //   longitude: 118.74,
  //   latitude: 31.99,
  //   longitude: '116.397451',
  //   latitude: '39.909187',
  //   title: '\u5929\u5B89\u95E8',
  //   value: '\u5317\u4EAC\u5E02\u4E1C\u57CE\u533A\u4E2D\u534E\u8DEF\u753210\u53F7\u4E2D\u56FD\u5929\u5B89\u95E8\u5E7F\u573A\u5357\u8FB9100\u7C73\u5DE6\u53F3'
  //   // longitude: 118.73,
  //   // latitude: 31.98,
  //   // value: '\u5357\u4EAC\u5E02\u56FD\u5BB6\u5E7F\u544A\u4EA7\u4E1A\u56ED'
  // })
  useEffect(() => {
    new VConsole()
    Bridge.ready(() => {
      console.log('\u52A0\u8F7D\u6865\u63A5')
    })
  }, [])

  return (
    <>
      <Location.Combo
        // editable
        // \u83B7\u53D6\u5B9A\u4F4D\u548C\u5730\u5740\u5DE5\u5177\u7C7B
        type="wgs84"
        config={{
          key: '7b6e260fc45a67b31a265e22575f1c5e',
          type: 'bmap'
        }}
        // config={{
        //   key: '',
        //   type: 'google'
        // }}
        // getLocation={({ type }) => {
        //   return { longitude: 116.397451, latitude: 39.909187, type: type }
        // }}
        // getAddress={(data) => {
        //   if (data?.value) {
        //     console.log(data)
        //     return data
        //   }
        //   return new Promise((resolve) => {
        //     setTimeout(() => {
        //       resolve({
        //         longitude: 118.74,
        //         latitude: 31.99,
        //         province: '\u6C5F\u82CF',
        //         provinceNumber: '',
        //         city: '\u5357\u4EAC',
        //         cityNumber: '',
        //         district: '\u5EFA\u90BA',
        //         districtNumber: '',
        //         street: '\u8857\u9053',
        //         streetNumber: '',
        //         address: '\u6C5F\u82CF\u7701\u5357\u4EAC\u5E02\u5EFA\u90BA\u533A\u4E91\u9F99\u5C71\u8DEF88\u53F7\u70FD\u706B\u79D1\u6280\u5927\u53A6'
        //       })
        //     }, 1000)
        //   })
        // }}
        modalProps={{
          safeArea: true,
          footer: ({ visible, triggerOk }) => {
            return visible === 'choose' ? (
              <Footer
                onOk={() => {
                  triggerOk()
                }}
                onClear={() => {
                  triggerOk(null)
                }}
              />
            ) : null
          },
          mainProps: {
            // autoLocation: false,
            zoom: 16
          }
        }}
        // disabled
        allowClear
        autoFit
        // autoLocation
        clickAction="choose"
        // editable
        previewVisible
        chooseVisible
        // allowClear
        ref={comboRef}
        value={value}
        // \u70B9\u51FB\u6574\u884C\u89E6\u53D1\u7684\u52A8\u4F5C: location | choose | preview
        onChange={(val) => {
          console.log('\u4FEE\u6539:', val)
          setValue(val)
        }}
        onVisibleChange={(visible) => {
          console.log('\u663E\u9690:', visible)
        }}
        onLocationStatusChange={(status) => {
          console.log('\u5B9A\u4F4D\u72B6\u6001:', status)
        }}
      />
      <Input.Text value="aaaa" />
    </>
  )
}
`},49240:function(e,n){n.Z=`import React, { useState, useRef, useEffect } from 'react'
import { Bridge, Location } from 'lyrixi-design-mobile'

export default () => {
  Bridge.debug = true
  const comboRef = useRef(null)
  const [value, setValue] = useState(null)

  useEffect(() => {
    // \u5EF6\u8FDF\u8BBE\u7F6E\u503C
    setTimeout(() => {
      setValue({
        address: '\u6C5F\u82CF\u7701\u5357\u4EAC\u5E02\u96E8\u82B1\u53F0\u533A\u7389\u5170\u8DEF98\u53F7',
        value: '\u6C5F\u82CF\u7701\u5357\u4EAC\u5E02\u96E8\u82B1\u53F0\u533A\u7389\u5170\u8DEF98\u53F7',
        longitude: 118.7979252979065,
        latitude: 31.968667296242337
      })
    }, 5000)
  }, [])
  return (
    <>
      <div>1</div>
      <Location.Main
        ref={comboRef}
        ak={''}
        style={{ height: '400px' }}
        type="choose"
        autoLocation={false}
        value={value}
        onChange={(val) => {
          console.log('\u4FEE\u6539:', val)
          setValue(val)
        }}
      />
    </>
  )
}
`},25257:function(e,n){n.Z=`import React, { useRef, useState } from 'react'
import { Map, Bridge } from 'lyrixi-design-mobile'
const { APILoader, MapChoose, coordsToWgs84 } = Map

// \u751F\u6210\u968F\u673A\u70B9
// import getPoints from './getPoints'

export default ({ map }) => {
  console.log('map:', map)

  return (
    <div
      style={{
        position: 'absolute',
        top: '100px',
        left: '100px',
        zIndex: '999',
        backgroundColor: 'white'
      }}
    >
      12342134
    </div>
  )
}
`},61991:function(e,n){n.Z=`// \u751F\u6210\u968F\u673A\u70B9
/*
points = getPoints({
  center: value,
  // \u534A\u5F845000000\u7C73
  radius: 1000,
  // \u751F\u621010\u4E07\u4E2A\u70B9
  count: 100
})
*/
function getPoints({ center, radius = 1000, count = 110 } = {}) {
  let latitude = center?.latitude || 31.990374883871525
  let longitude = center?.longitude || 118.73769931504451

  const points = []

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2 // \u968F\u673A\u89D2\u5EA6
    const distance = Math.random() * radius // \u968F\u673A\u534A\u5F84
    const lat = latitude + (distance / 111300) * Math.sin(angle) // \u7EAC\u5EA6\u53D8\u5316
    const lng =
      longitude + ((distance / 111300) * Math.cos(angle)) / Math.cos((latitude * Math.PI) / 180) // \u7ECF\u5EA6\u53D8\u5316
    points.push({
      latitude: lat,
      longitude: lng,
      name: '\u968F\u673A\u70B9' + i,
      address: \`\u968F\u673A\u5730\u5740\${i}\`,
      type: 'gcj02'
    })
  }

  return points
}

export default getPoints
`},67979:function(e,n){n.Z=`import React, { useRef, useState } from 'react'

// \u5185\u5E93\u4F7F\u7528
import { Layout, Map, Loading } from 'lyrixi-design-mobile'

// \u6D4B\u8BD5\u4F7F\u7528
// import Map from 'library/components/Map'

const { APILoader, MapChoose, coordsToWgs84 } = Map
import CustomChild from './CustomChild'

// \u751F\u6210\u968F\u673A\u70B9
// import getPoints from './getPoints'
// const points = getPoints()

export default () => {
  const mapRef = useRef(null)
  // Bridge.debug = true
  let [value, setValue] = useState({
    // address: '\u7F8E\u56FD\u767D\u5BAB',
    // latitude: 38.8976763,
    // longitude: -77.0365298,
    // type: 'wgs84'
    // latitude: 34.007479447064824,
    // longitude: -118.5000352126432,
    // type: 'wgs84',
    // address: '\u592A\u5E73\u6D0B\u516C\u56ED'
    // latitude: 39.909187,
    // longitude: 116.397451,
    // type: 'gcj02',
    // address: '\u5929\u5B89\u95E8'
    // latitude: 39.907783490367706,
    // longitude: 116.39120737493609,
    // type: 'wgs84',
    // address: '\u5929\u5B89\u95E8'
    latitude: 31.990374883871525,
    longitude: 118.73769931504451,
    type: 'gcj02',
    address: '\u5357\u4EAC\u70FD\u706B\u79D1\u6280'
  })
  /*
  useState()
  useState({
    latitude: 39.907783490367706,
    longitude: 116.39120737493609,
    address: '\u5929\u5B89\u95E8'
  })
  */

  return (
    <Layout className="full">
      <Layout.Main>
        <APILoader
          loading={<Loading content="Loading..." />}
          config={{
            key: '7b6e260fc45a67b31a265e22575f1c5e',
            type: 'bmap',
            markerIcons: {
              centerMarkerIcon: {
                iconUrl: \`//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-custom-shop.png\`,
                iconRetinaUrl: \`//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-custom-shop.png\`,
                shadowUrl: \`//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-shadow.png\`,
                shadowRetinaUrl: \`//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-shadow.png\`
              },
              markerIcon: {
                iconUrl: \`//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-icon.png\`,
                iconRetinaUrl: \`//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-icon-2x.png\`,
                shadowUrl: \`//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-shadow.png\`,
                shadowRetinaUrl: \`//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-shadow.png\`
              }
            }
          }}
          // config={{
          //   key: '',
          //   type: 'google'
          // }}
          onSuccess={() => {
            console.log('\u5730\u56FE\u52A0\u8F7D\u6210\u529F')
          }}
          // onError={(error) => {
          //   console.log('\u5730\u56FE\u52A0\u8F7D\u5931\u8D25', error)
          //   return <div>{error.errMsg}</div>
          // }}
        >
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <MapChoose
              ref={mapRef}
              // readOnly
              // autoLocation={false}
              zoom={16}
              value={coordsToWgs84(value)}
              onChange={(newValue) => {
                console.log('newValue:', newValue)
                setValue(newValue)
              }}
              onMarkerClick={(e) => {
                console.log('\u70B9\u51FBmarker:', e)
                console.log(mapRef.current)
                // e.remove()
                let newMarkerIcon = window.L.icon({
                  active: true,
                  iconUrl: \`https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/plugin/leaflet/images/marker-icon.bak.png\`,
                  iconRetinaUrl: \`https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/plugin/leaflet/images/marker-icon.bak.png\`,
                  shadowUrl: \`https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/plugin/leaflet/images/marker-shadow.png\`,
                  shadowRetinaUrl: \`https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/plugin/leaflet/images/marker-shadow.png\`,
                  shadowSize: [33, 33],
                  iconSize: [20, 33],
                  iconAnchor: [10, 16]
                })
                e.setIcon(newMarkerIcon, { multiple: false })
              }}
              // getLocation={(data) => {
              //   console.log(data)
              //   return { latitude: 35.689487, longitude: 139.691706 }
              // }}
              // getAddress={(data) => {
              //   return new Promise((resolve) => {
              //     setTimeout(() => {
              //       resolve({
              //         ...data,
              //         province: '\u6C5F\u82CF\u7701',
              //         provinceNumber: 100010,
              //         address: '\u6C5F\u82CF\u770111'
              //       })
              //     }, 1000)
              //   })
              // }}
              // queryNearby={({ map, keyword, longitude, latitude, radius }) => {
              //   console.log('\u641C\u7D22\u9644\u8FD1:', map, keyword, longitude, latitude, radius)
              //   return [
              //     {
              //       address: '\u4E0A\u6D77\u5E02\u5357\u4EAC\u4E1C\u8DEF831\u53F7',
              //       latitude: 31.237415229632834,
              //       longitude: 121.47015544295395,
              //       name: '\u5E02\u767E\u4E00\u5E97'
              //     },
              //     {
              //       address: '\u4E0A\u6D77\u5E02\u5357\u4EAC\u4E1C\u8DEF832\u53F7',
              //       latitude: 31.237415229632834,
              //       longitude: 121.47015544295395,
              //       name: '\u5E02\u767E\u4E8C\u5E97'
              //     }
              //   ]
              // }}
              // \u751F\u6210\u968F\u673A\u70B9
              // queryNearby={() => points}
            />
          </div>
        </APILoader>
      </Layout.Main>
    </Layout>
  )
}
`},46973:function(e,n){n.Z=`import React, { useRef, useState, useEffect } from 'react'

// \u5185\u5E93\u4F7F\u7528
import { Layout, Map } from 'lyrixi-design-mobile'

// \u6D4B\u8BD5\u4F7F\u7528
// import Map from 'library/components/Map'

// \u751F\u6210\u968F\u673A\u70B9
const { APILoader, MapMarkers, LocationControl, Circles, coordsToWgs84 } = Map
import getPoints from './getPoints'

// \u968F\u673A\u751F\u6210\u70B9, \u7528\u4E8E\u6D4B\u8BD5\u6027\u80FD
const currentPoints = coordsToWgs84(
  getPoints({
    center: {
      latitude: 39.907783490367706,
      longitude: 116.39120737493609
    },
    // \u534A\u5F845000000\u7C73
    radius: 1000,
    // \u751F\u6210\u70B9\u6570
    count: 101
  })
)

// This coordsToWgs84 just example, no practical use
const points = coordsToWgs84([
  {
    address: '\u56FD\u5BB6\u5E7F\u544A\u4EA7\u4E1A\u56ED\u5317\u533A',
    latitude: 31.981827992209773,
    longitude: 118.73498038509915,
    type: 'gcj02'
  },
  {
    latitude: 31.990433909567244,
    longitude: 118.7376115295504,
    type: 'gcj02',
    address: '\u5357\u4EAC\u70FD\u706B\u79D1\u6280',
    icon: {
      html: '<div style="width:100px;background-color:red;">\u5357\u4EAC\u70FD\u706B\u79D1\u6280</div>'
    }
  },
  {
    latitude: 31.98768,
    longitude: 118.751785,
    type: 'gcj02',
    address: '\u5C0F\u884C'
  },
  {
    address: '\u56FD\u5BB6\u5E7F\u544A\u4EA7\u4E1A\u56ED\u5317\u533A',
    latitude: 31.981827992209773,
    longitude: 118.73498038509915,
    type: 'gcj02'
  }
])

export default () => {
  const mapRef = useRef(mapRef)
  // const [points, setPoints] = useState(null)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setPoints(currentPoints)
  //   }, 5000)
  // }, [])

  return (
    <Layout className="full">
      <Layout.Main>
        <APILoader
          config={{
            key: '7b6e260fc45a67b31a265e22575f1c5e',
            type: 'bmap',
            markerIcons: {
              centerMarkerIcon: {
                iconUrl: \`//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-custom-shop.png\`,
                iconRetinaUrl: \`//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-custom-shop.png\`,
                shadowUrl: \`//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-shadow.png\`,
                shadowRetinaUrl: \`//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-shadow.png\`
              },
              markerIcon: {
                iconUrl: \`//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-icon.png\`,
                iconRetinaUrl: \`//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-icon-2x.png\`,
                shadowUrl: \`//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-shadow.png\`,
                shadowRetinaUrl: \`//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-shadow.png\`
              }
            }
          }}
          onSuccess={() => {
            console.log('\u5730\u56FE\u52A0\u8F7D\u6210\u529F')
          }}
          // onError={(errMsg) => {
          //   console.log('\u5730\u56FE\u52A0\u8F7D\u5931\u8D25:', errMsg)
          //   return '\u9519\u8BEF\u5730\u5740'
          // }}
        >
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <MapMarkers
              ref={mapRef}
              // \u8F6C\u6362\u4E3Awgs84\u5750\u6807
              ZoomControlProps={{
                style: { bottom: '20px' }
              }}
              // \u6807\u6CE8
              markers={points}
              // \u6298\u7EBF
              polyline={points}
              PolylineProps={{
                color: '#ff8800'
              }}
              // \u5706\u5708
              circles={[
                {
                  latitude: 31.981827992209773,
                  longitude: 118.73498038509915,
                  type: 'gcj02',
                  radius: 500
                  // color: '#ff8800'
                }
              ]}
              CirclesProps={{
                color: '#ff8800'
              }}
              onMarkerClick={(e) => {
                console.log('\u70B9\u51FBmarker:', e)
                console.log(mapRef.current)
                // e.remove()
                let newMarkerIcon = window.L.icon({
                  active: true,
                  iconUrl: \`https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/plugin/leaflet/images/marker-icon.bak.png\`,
                  iconRetinaUrl: \`https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/plugin/leaflet/images/marker-icon.bak.png\`,
                  shadowUrl: \`https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/plugin/leaflet/images/marker-shadow.png\`,
                  shadowRetinaUrl: \`https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/plugin/leaflet/images/marker-shadow.png\`,
                  shadowSize: [33, 33],
                  iconSize: [20, 33],
                  iconAnchor: [10, 16]
                })
                e.setIcon(newMarkerIcon, { multiple: true })
              }}
              // onMarkerClick={(e) => {
              //   console.log('\u70B9\u51FBmarker:', e)
              //   // e.remove()
              //   let newMarkerIcon = window.L.icon({
              //     active: true,
              //     iconUrl: \`https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/plugin/leaflet/images/marker-icon.bak.png\`,
              //     iconRetinaUrl: \`https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/plugin/leaflet/images/marker-icon.bak.png\`,
              //     shadowUrl: \`https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/plugin/leaflet/images/marker-shadow.png\`,
              //     shadowRetinaUrl: \`https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/plugin/leaflet/images/marker-shadow.png\`,
              //     shadowSize: [33, 33],
              //     iconSize: [20, 33],
              //     iconAnchor: [10, 16]
              //   })
              //   e.setIcon(newMarkerIcon, { multiple: false })

              //   console.log(mapRef.current.leafletMap)
              //   let popup = window.L.popup()
              //     .setLatLng([e.latitude, e.longitude])
              //     .setContent('I am a standalone popup.')
              //     .openOn(mapRef.current.leafletMap)
              // }}
              onLoad={(map) => {
                let currentZoom = map.getZoom()
                map.setZoom(currentZoom - 1)
              }}
            >
              <LocationControl
                style={{ bottom: '20px' }}
                onChange={(result) => {
                  mapRef.current.panTo(result)
                }}
              />
            </MapMarkers>
          </div>
        </APILoader>
      </Layout.Main>
    </Layout>
  )
}
`},24398:function(e,n){n.Z=`import React from 'react'
import { Layout, Mark, Divider } from 'lyrixi-design-mobile'

const titleStyle = {
  padding: '12px 12px 8px',
  color: '#697b8c',
  fontSize: '14px',
  backgroundColor: 'rgba(250,251,252)'
}
const buttonStyle = {
  margin: '8px'
}
export default () => {
  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>Fill Mode</Divider>
        <Mark className="default" style={buttonStyle}>
          default
        </Mark>
        <Mark className="primary" style={buttonStyle}>
          primary
        </Mark>
        <Mark className="link" style={buttonStyle}>
          link
        </Mark>
        <Mark className="warning" style={buttonStyle}>
          warning
        </Mark>
        <Mark className="danger" style={buttonStyle}>
          danger
        </Mark>
        <Mark className="success" style={buttonStyle}>
          success
        </Mark>

        <Divider>Outline</Divider>
        <Mark className="default outline" style={buttonStyle}>
          default outline
        </Mark>
        <Mark className="primary outline" style={buttonStyle}>
          primary outline
        </Mark>
        <Mark className="link outline" style={buttonStyle}>
          link outline
        </Mark>
        <Mark className="warning outline" style={buttonStyle}>
          warning outline
        </Mark>
        <Mark className="danger outline" style={buttonStyle}>
          danger outline
        </Mark>
        <Mark className="success outline" style={buttonStyle}>
          success outline
        </Mark>

        <Divider>light-outline</Divider>
        <Mark className="default light-outline" style={buttonStyle}>
          default light-outline
        </Mark>
        <Mark className="primary light-outline" style={buttonStyle}>
          primary light-outline
        </Mark>
        <Mark className="link light-outline" style={buttonStyle}>
          link light-outline
        </Mark>
        <Mark className="warning light-outline" style={buttonStyle}>
          warning light-outline
        </Mark>
        <Mark className="danger light-outline" style={buttonStyle}>
          danger light-outline
        </Mark>
        <Mark className="success light-outline" style={buttonStyle}>
          success light-outline
        </Mark>
      </Layout.Main>
    </Layout>
  )
}
`},5179:function(e,n){n.Z=`import React, { forwardRef, useImperativeHandle, useRef } from 'react'

// \u81EA\u5B9A\u4E49\u5B50\u5185\u5BB9
const ChildrenWrapper = forwardRef(({ id, style, className, onClick, children }, ref) => {
  const rootRef = useRef(null)

  // Expose, As Input.Text expose
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current
    }
  })

  return (
    <div id={id} style={style} className={className} onClick={onClick} ref={rootRef}>
      {children}
    </div>
  )
})

export default ChildrenWrapper
`},27815:function(e,n){n.Z=`import React from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../../utils/DOMUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil } from 'lyrixi-design-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// \u6807\u7B7E
const Tag = ({ style, className, name, readOnly, disabled, allowClear, onEdit, onDelete }) => {
  return (
    <div
      className={DOMUtil.classNames('select-combo-tags-item', className)}
      style={style}
      onClick={
        readOnly || disabled
          ? undefined
          : (e) => {
              onEdit && onEdit()
              e.stopPropagation()
            }
      }
    >
      {name}
      {readOnly || disabled || !allowClear ? null : (
        <i
          className="select-combo-tags-item-clear"
          onClick={(e) => {
            onDelete && onDelete()
            e.stopPropagation()
          }}
        ></i>
      )}
    </div>
  )
}

export default Tag
`},46684:function(e,n){n.Z=`// \u5185\u5E93\u4F7F\u7528-start
import Input from './../../../Input'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { Input } from 'lyrixi-design-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// \u6E32\u67D3\u6E05\u9664\u6309\u94AE
function getClearNode({ clear, allowClear, disabled, readOnly, value, onClear }) {
  // \u7981\u7528\u65F6\u4E0D\u663E\u793A\u6E05\u7A7A\u6309\u94AE
  if (disabled || readOnly) return null

  let clearable = allowClear && (value || typeof value === 'number') ? true : false

  // \u81EA\u5B9A\u4E49\u6E32\u67D3\u6E05\u7A7A\u6309\u94AE
  if (typeof clear === 'function') {
    let clearNode = clear({
      allowClear,
      clearable: clearable,
      readOnly,
      value,
      triggerClear: onClear
    })

    if (clearNode !== undefined) return clearNode
  }

  // \u9ED8\u8BA4\u6E32\u67D3
  if (!clearable) return null
  return <Input.IconClear onClick={onClear} />
}

export default getClearNode
`},84054:function(e,n){n.Z=`import React, { Fragment } from 'react'
import getClearNode from './getClearNode'
import Tag from './Tag'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../../utils/DOMUtil'
import LocaleUtil from './../../../../utils/LocaleUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil, LocaleUtil } from 'lyrixi-design-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// \u6807\u7B7E\u6A21\u5F0F
const Tags = ({
  // \u5206\u9694\u7B26
  separator,
  // \u5DE6\u53F3\u56FE\u6807
  leftIcon,
  rightIcon,
  // \u6E05\u9664\u6309\u952E
  clear,
  className,
  style,
  contentProps,
  placeholder,
  readOnly,
  disabled,
  allowClear,
  value,
  onAdd,
  onEdit,
  onChange
}) => {
  return (
    <>
      <div
        className={DOMUtil.classNames(
          'select-combo-tags',
          className,
          readOnly ? 'readOnly' : '',
          disabled ? ' disabled' : ''
        )}
        style={style}
        onClick={onAdd}
      >
        {typeof leftIcon === 'function' ? leftIcon({ value }) : leftIcon}
        {/* \u4E3B\u4F53 */}
        <div
          {...contentProps}
          className={\`select-combo-tags-content\${
            contentProps?.className ? ' ' + contentProps.className : ''
          }\`}
        >
          {Array.isArray(value)
            ? value.map((item, index) => {
                return (
                  <Fragment key={item.id || index}>
                    <Tag
                      className={item.className}
                      style={item.style}
                      name={item.name}
                      readOnly={item.readOnly}
                      disabled={item.disabled}
                      allowClear={item.allowClear}
                      onEdit={() => {
                        onEdit && onEdit(item)
                      }}
                      onDelete={() => {
                        let currentValue = value.filter((valueItem) => valueItem.id !== item.id)
                        onChange && onChange(currentValue, { action: 'clickDelete' })
                      }}
                    />
                    {index < value.length - 1 && separator ? separator : null}
                  </Fragment>
                )
              })
            : null}
          {(!Array.isArray(value) || !value?.length) && (
            <div className="select-combo-tags-placeholder">
              {placeholder || LocaleUtil.locale('Please Select', 'SeedsUI_select_placeholder')}
            </div>
          )}
        </div>
        {getClearNode({
          clear,
          allowClear,
          disabled,
          readOnly,
          value,
          onClear: (e) => {
            e && e?.stopPropagation?.()
            typeof onChange === 'function' && onChange('', { action: 'clickClear' })
          }
        })}
        {typeof rightIcon === 'function' ? rightIcon({ value }) : rightIcon}
      </div>
    </>
  )
}

export default Tags
`},47605:function(e,n){n.Z=`import _ from 'lodash'
// \u663E\u793A\u540D\u79F0
function getDisplayValue(value, { separator } = {}) {
  if (typeof value !== 'object') {
    return value
  }
  // \u7EAF\u5BF9\u8C61
  if (_.isPlainObject(value)) {
    return value?.name || ''
  }
  // \u6570\u7EC4
  else if (Array.isArray(value)) {
    let displayValues = value.map((item) => item?.name || '')
    displayValues = displayValues.filter((item) => item)
    return displayValues.join(separator && typeof separator === 'string' ? separator : ',')
  }

  return ''
}

export default getDisplayValue
`},38763:function(e,n){n.Z=`import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  Fragment,
  useState,
  useEffect
} from 'react'
import getDisplayValue from './displayValueFormatter'

import Input from './../../Input'

import ComboWrapper from './ComboWrapper'
import Tags from './Tags'

// \u5185\u5E93\u4F7F\u7528-start
import ObjectUtil from './../../../utils/ObjectUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { ObjectUtil } from 'lyrixi-design-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// Combo
const Combo = forwardRef(
  (
    {
      // Modal
      value,
      onBeforeChange,
      onBeforeChecked,
      onChange,
      modal: ModalNode,
      title,
      modalProps,

      // Combo
      displayValueFormatter,
      autoSize,
      allowClear,
      separator,
      mode,
      multiple,
      readOnly,
      disabled,
      placeholder,
      onClick,
      onBeforeOpen,
      combo,
      clear = ({ triggerClear }) => {
        return ObjectUtil.isEmpty(value) || !allowClear ? (
          <Input.IconRightArrow />
        ) : (
          <Input.IconClear onClick={triggerClear} />
        )
      },
      onVisibleChange,

      children,
      ...props
    },
    ref
  ) => {
    // \u663E\u793A\u6587\u672C\u683C\u5F0F\u5316
    if (typeof displayValueFormatter !== 'function') {
      // eslint-disable-next-line
      displayValueFormatter = getDisplayValue
    }
    let displayValue = displayValueFormatter(value, { separator })

    // Expose methods
    const comboRef = useRef(null)
    const modalRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        // \u663E\u793A\u6587\u672C
        displayValue: displayValue,
        getDisplayValue: (newValue) => {
          return displayValue
        },
        comboDOM: comboRef?.current?.getRootDOM ? comboRef.current.getRootDOM() : comboRef.current,
        getComboDOM: () => {
          // div
          let comboDOM = comboRef?.current
          // Input.Text
          if (comboRef?.current?.getRootDOM) {
            comboDOM = comboRef.current.getRootDOM()
          }
          return comboDOM
        },
        ...modalRef?.current,
        close: () => {
          setVisible(false)
        },
        open: () => {
          setVisible(true)
        }
      }
    })

    // \u63A7\u5236Modal\u663E\u9690
    const [visible, setVisible] = useState(null)

    useEffect(() => {
      if (visible === null) return
      typeof modalProps?.onVisibleChange === 'function' && modalProps.onVisibleChange(visible)
      typeof onVisibleChange === 'function' && onVisibleChange(visible)

      // eslint-disable-next-line
    }, [visible])

    // \u70B9\u51FB\u6587\u672C\u6846
    async function handleInputClick(e) {
      if (readOnly || disabled) return
      if (!visible && typeof onBeforeOpen === 'function') {
        let goOn = await onBeforeOpen()
        if (goOn === false) return
      }
      if (typeof onClick === 'function') {
        onClick(e)
      }

      setVisible(!visible)
    }

    // \u6587\u672C\u6846\u4FEE\u6539\u503C
    async function handleChange(newValue) {
      // \u4FEE\u6539\u524D\u6821\u9A8C
      if (typeof onBeforeChange === 'function') {
        let goOn = await onBeforeChange(newValue)
        if (goOn === false) return

        // \u4FEE\u6539\u503C
        if (typeof goOn === 'object') {
          // eslint-disable-next-line
          newValue = goOn
        }
      }
      onChange && onChange(newValue)
    }

    // \u6E32\u67D3\u6E05\u7A7A\u6309\u94AE
    function clearRender(clearParams) {
      // \u53EA\u8BFB\u4E0D\u663E\u793A\u6E05\u7A7A\u6309\u94AE
      if (readOnly || disabled) {
        return null
      }

      // \u81EA\u5B9A\u4E49\u6E05\u7A7A\u6309\u94AE
      if (typeof clear === 'function') {
        return clear({ ...clearParams, value: value, readOnly: readOnly })
      }

      return undefined
    }

    // \u6587\u672C\u6846
    let InputNode = Input.Text
    if (autoSize) {
      InputNode = Input.AutoFit
    }

    function getComboNode() {
      if (typeof combo === 'function') {
        return (
          <ComboWrapper {...props} onClick={handleInputClick} ref={comboRef}>
            {combo({
              // ...props,
              // Paasive properties
              autoSize,
              allowClear,
              separator,
              mode,
              multiple,
              readOnly,
              disabled,
              placeholder,

              // Value
              value,
              displayValue,

              // Input
              clear: clearRender,
              onChange: handleChange
              // onClick: handleInputClick,
              // comboRef: comboRef
            })}
          </ComboWrapper>
        )
      }

      if (children) {
        return (
          <ComboWrapper {...props} onClick={handleInputClick} ref={comboRef}>
            {children}
          </ComboWrapper>
        )
      }

      if (mode === 'tags') {
        return (
          <Tags
            separator={separator}
            leftIcon={props?.leftIcon}
            rightIcon={props?.rightIcon}
            clear={clearRender}
            className={props?.className}
            style={props?.style}
            placeholder={placeholder}
            readOnly={readOnly}
            disabled={disabled}
            allowClear={allowClear}
            value={value}
            onAdd={() => setVisible(true)}
            onEdit={() => setVisible(true)}
            onChange={handleChange}
          />
        )
      }

      return (
        <InputNode
          disabled={disabled}
          allowClear={allowClear}
          value={displayValue}
          readOnly
          placeholder={placeholder}
          {...props}
          clear={clearRender}
          onClick={handleInputClick}
          onChange={async (text) => {
            // \u6E05\u7A7A\u64CD\u4F5C
            if (!text) {
              let currentValue = null
              // \u4FEE\u6539\u524D\u6821\u9A8C
              if (typeof onBeforeChange === 'function') {
                let goOn = await onBeforeChange(currentValue)
                if (goOn === false) return

                // \u4FEE\u6539\u503C
                if (typeof goOn === 'object') {
                  currentValue = goOn
                }
              }
              onChange && onChange(null)
            }
          }}
          ref={comboRef}
        />
      )
    }
    return (
      <Fragment>
        {/* Combo */}
        {getComboNode()}

        {/* Modal */}
        {ModalNode && (
          <ModalNode
            ref={modalRef}
            getComboDOM={() => {
              return comboRef.current
            }}
            value={value}
            onBeforeChange={onBeforeChange}
            onBeforeChecked={onBeforeChecked}
            onChange={onChange}
            allowClear={allowClear}
            multiple={multiple}
            title={title}
            {...modalProps}
            onVisibleChange={setVisible}
            visible={visible}
          />
        )}
      </Fragment>
    )
  }
)

export default Combo
`},91913:function(e,n){n.Z=`import confirm from './../confirm'

// \u5F39\u51FAalert\u6846
let alert = (props) => {
  return confirm({ cancel: null, ...props })
}
export default alert
`},69636:function(e,n){n.Z=`const globalModalId = '__SeedsUI_global_modal_mask__'

export default globalModalId
`},48615:function(e,n){n.Z=`import destroy from './../destroy'

import showMask from './showMask'
import updateAttribute from './updateAttribute'

// \u5F39\u51FA\u5BF9\u8BDD\u6846
export default function confirm({
  portal,

  maskClosable,
  onVisibleChange,

  // \u906E\u7F69
  maskProps,

  // \u6807\u9898
  title,
  titleProps,

  // \u5185\u5BB9
  content,
  contentProps,

  // \u5E95\u90E8
  footerProps,

  // \u786E\u5B9A, \u9ED8\u8BA4\u663E\u793A\u786E\u5B9A\u6309\u94AE
  ok,
  onOk,
  okProps,

  // \u53D6\u6D88, confirm\u9ED8\u8BA4\u663E\u793A\u53D6\u6D88\u6309\u94AE
  cancel,
  onCancel,
  cancelProps
}) {
  let mask = null

  // \u70B9\u51FB\u906E\u7F69
  function handleMaskClick(e) {
    e.stopPropagation()

    // \u70B9\u51FB\u786E\u5B9A\u6216\u53D6\u6D88\u6309\u94AE
    if (e.target.classList.contains('modal-cancel') || e.target.classList.contains('modal-ok')) {
      handleButtonClick(e)
      return
    }

    // \u70B9\u51FB\u906E\u7F69
    if (e.target.classList.contains('mask')) {
      // \u8BFB\u53D6\u66F4\u65B0\u540E\u7684\u5C5E\u6027
      const maskClosable = mask?.maskClosable
      const onVisibleChange = mask?.onVisibleChange

      if (maskClosable) {
        if (onVisibleChange) onVisibleChange(false)
        destroy(e.currentTarget)
      }
    }
  }

  // \u70B9\u51FB\u786E\u5B9A\u6216\u8005\u53D6\u6D88\u6309\u94AE
  function handleButtonClick(e) {
    let isOk = e.target.classList.contains('modal-ok')

    // \u8BFB\u53D6\u66F4\u65B0\u540E\u7684\u5C5E\u6027
    const onClick = isOk ? mask?.onOk : mask?.onCancel
    const onVisibleChange = mask?.onVisibleChange

    if (typeof onClick === 'function') {
      let close = onClick() ?? true
      if (close) {
        if (onVisibleChange) onVisibleChange(false)
        destroy(e.currentTarget.closest('.modal-mask'))
      }
    } else {
      if (onVisibleChange) onVisibleChange(false)
      destroy(e.currentTarget.closest('.modal-mask'))
    }
    e.stopPropagation()
  }

  // \u6E32\u67D3\u4E0E\u7ED1\u5B9A\u4E8B\u4EF6
  mask = showMask({
    portal,
    onMaskClick: handleMaskClick
  })

  // \u66F4\u65B0\u5C5E\u6027
  updateAttribute(mask, {
    portal,

    maskClosable,
    onVisibleChange,

    // \u906E\u7F69
    maskProps,

    // \u6807\u9898
    title,
    titleProps,

    // \u5185\u5BB9
    content,
    contentProps,

    // \u5E95\u90E8
    footerProps,

    // \u786E\u5B9A, \u9ED8\u8BA4\u663E\u793A\u786E\u5B9A\u6309\u94AE
    ok,
    onOk,
    okProps,

    // \u53D6\u6D88, confirm\u9ED8\u8BA4\u663E\u793A\u53D6\u6D88\u6309\u94AE
    cancel,
    onCancel,
    cancelProps
  })

  return mask
}
`},19224:function(e,n){n.Z=`import globalModalId from './globalModalId'

// \u6E32\u67D3
function showMask({ portal, onMaskClick }) {
  // \u5982\u679C\u6CA1\u751F\u6210\u6210\u529F, \u5219\u5F3A\u5236\u751F\u6210
  let mask = document.querySelector('#' + globalModalId)
  if (!mask) {
    // \u521B\u5EFAdom
    mask = document.createElement('div')
    mask.setAttribute('class', \`mask modal-mask\`)
    mask.setAttribute('id', globalModalId)
    mask.innerHTML = \`
      <div class="modal-animation modal modal-alert middle" data-animation="zoom">
        <div class="modal-body">
          <div class="modal-title hide"></div>
          <div class="modal-content"></div>
        </div>
        <div class="modal-footer">
          <div class="modal-cancel"></div>
          <div class="modal-ok"></div>
        </div>
      </div>
    \`

    // \u6DFB\u52A0\u5230dom\u4E0A
    ;(portal || document.getElementById('root') || document.body).appendChild(mask)

    // \u7ED1\u5B9A\u4E8B\u4EF6
    mask.removeEventListener('click', onMaskClick, false)
    mask.addEventListener('click', onMaskClick, false)
  }

  // \u6E32\u67D3\u5B8C\u6210\u540E\u8865\u5145active, \u89E3\u51B3\u6E32\u67D3\u540E\u52A8\u753B\u4E0D\u751F\u6548\u7684\u95EE\u9898
  setTimeout(() => {
    mask = document.querySelector('#' + globalModalId)
    if (!mask) return
    // \u5982\u679C\u6B63\u5728\u79FB\u9664\uFF0C\u5219\u505C\u6B62\u79FB\u9664
    if (mask.timeout) {
      window.clearTimeout(mask.timeout)
    }
    // \u52A8\u753B\u663E\u793A
    mask.classList.add('active')
    mask.querySelector('.modal-alert').classList.add('active')
  }, 10)

  return mask
}

export default showMask
`},17961:function(e,n){n.Z=`import updateStyle from './updateStyle'

// \u5185\u5E93\u4F7F\u7528-start
import LocaleUtil from './../../../../utils/LocaleUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { LocaleUtil } from 'lyrixi-design-mobile'
\u6D4B\u8BD5\u4F7F\u7528-start */

// \u66F4\u65B0\u5C5E\u6027
function updateAttribute(
  mask,
  {
    portal,

    maskClosable,
    onVisibleChange,

    // \u906E\u7F69
    maskProps,

    // \u6807\u9898
    title,
    titleProps,

    // \u5185\u5BB9
    content,
    contentProps,

    // \u5E95\u90E8
    footerProps,

    // \u786E\u5B9A, \u9ED8\u8BA4\u663E\u793A\u786E\u5B9A\u6309\u94AE
    ok,
    onOk,
    okProps,

    // \u53D6\u6D88, confirm\u9ED8\u8BA4\u663E\u793A\u53D6\u6D88\u6309\u94AE
    cancel,
    onCancel,
    cancelProps
  }
) {
  // \u66F4\u65B0\u906E\u7F69
  updateStyle(mask, { ...maskProps, baseClassName: 'mask modal-mask' })

  // \u66F4\u65B0\u6807\u9898
  let titleDOM = mask.querySelector('.modal-title')
  updateStyle(titleDOM, { ...titleProps, baseClassName: 'modal-title' })
  if (title) {
    titleDOM?.classList?.remove?.('hide')
    titleDOM.innerHTML = title
  } else {
    titleDOM?.classList?.add?.('hide')
  }

  // \u66F4\u65B0\u5185\u5BB9
  let contentDOM = mask.querySelector('.modal-content')
  updateStyle(contentDOM, { ...contentProps, baseClassName: 'modal-content' })
  if (content) {
    contentDOM.innerHTML = content
  } else {
    contentDOM.innerHTML = ''
  }

  // \u66F4\u65B0\u5E95\u90E8
  let footerDOM = mask.querySelector('.modal-footer')
  updateStyle(footerDOM, { ...footerProps, baseClassName: 'modal-footer' })

  // \u63D0\u4EA4\u6309\u94AE
  let okDOM = mask.querySelector('.modal-ok')
  updateStyle(okDOM, { ...okProps, baseClassName: 'modal-ok' })
  okDOM.innerHTML = ok || LocaleUtil.locale('\u786E\u5B9A', 'SeedsUI_ok')

  // \u53D6\u6D88\u6309\u94AE
  let cancelDOM = mask.querySelector('.modal-cancel')
  updateStyle(cancelDOM, { ...cancelProps, baseClassName: 'modal-cancel' })
  cancelDOM.innerHTML = cancel || LocaleUtil.locale('\u53D6\u6D88', 'SeedsUI_cancel')

  if (cancel === null) {
    cancelDOM?.classList?.add?.('hide')
  } else {
    cancelDOM?.classList?.remove?.('hide')
  }

  // \u66F4\u65B0\u4E8B\u4EF6\u4E2D\u7528\u5230\u7684\u5C5E\u6027\uFF08\u5426\u5219\u4E8B\u4EF6\u4E2D\u5C06\u6C38\u8FDC\u8BFB\u53D6\u5230\u7684\u662F\u95ED\u5305\u4E2D\u7684\u5C5E\u6027\uFF0C\u5373\u4E0A\u6B21\u7684\u5C5E\u6027\uFF09
  mask.maskClosable = maskClosable
  mask.onOk = onOk
  mask.onCancel = onCancel
  mask.onVisibleChange = onVisibleChange

  // dom\u900F\u4F20
  if (toString.call(portal).indexOf('HTML') !== -1) {
    portal.appendChild(mask)
  } else {
    ;(document.getElementById('root') || document.body).appendChild(mask)
  }
}

export default updateAttribute
`},6530:function(e,n){n.Z=`// \u66F4\u65B0class\u548Cstyle
function updateStyle(target, { style, className, baseClassName }) {
  if (!target) return

  // \u8FD8\u539F\u6837\u5F0F
  target.setAttribute('style', '')
  target.setAttribute('class', baseClassName)

  // \u589E\u52A0\u6837\u5F0F
  if (style) {
    for (let stylePropName in style) {
      target.style[stylePropName] = style[stylePropName]
    }
  }
  if (className) {
    target.className = \`\${baseClassName}\${className ? ' ' + className : ''}\`
  }
}

export default updateStyle
`},55155:function(e,n){n.Z=`import globalModalId from './../confirm/globalModalId'

// \u79FB\u9664Modal
function destroy(mask) {
  if (!mask) {
    // eslint-disable-next-line
    mask = document.getElementById(globalModalId)
  }
  if (mask) {
    // \u52A8\u753B\u79FB\u9664
    mask.classList.remove('active')
    mask.querySelector('.modal-alert').classList.remove('active')

    // DOM\u79FB\u9664
    if (mask.timeout) window.clearTimeout(mask.timeout)
    mask.timeout = setTimeout(() => {
      mask?.parentNode?.removeChild?.(mask)
    }, 300)
  }
}

export default destroy
`},81910:function(e,n){n.Z=`import React, { useEffect, useRef, useState } from 'react'
import { Picker } from 'lyrixi-design-mobile'

export default () => {
  const pickerRef = useRef(null)
  const [list, setList] = useState([])
  // const list = [
  //   { id: '1', name: '1' },
  //   { id: '2', name: '2' },
  //   { id: '3', name: '3' },
  //   { id: '4', name: '4' },
  //   { id: '5', name: '5' },
  //   { id: '6', name: '6' },
  //   { id: '7', name: '7' },
  //   { id: '8', name: '8' },
  //   { id: '9', name: '9' },
  //   { id: '10', name: '10' }
  // ]
  const [value, setValue] = useState(null)
  useEffect(() => {
    // pickerRef.current.open()
    setTimeout(() => {
      console.log('pickerRef:', pickerRef)
      setList([
        { id: '1', name: '1' },
        { id: '2', name: '2' },
        { id: '3', name: '3' },
        { id: '4', name: '4' },
        { id: '5', name: '5' },
        { id: '6', name: '6' },
        { id: '7', name: '7' },
        { id: '8', name: '8' },
        { id: '9', name: '9' },
        { id: '10', name: '10' }
      ])
      setValue([{ id: '2', name: '2' }])
    }, 2000)
  }, [])
  return (
    <>
      <Picker.Combo
        ref={pickerRef}
        allowClear
        modalProps={{
          safeArea: true,
          title: '\u6807\u9898',
          cancel: null,
          ok: ''
        }}
        placeholder="Please select"
        value={value}
        list={list}
        onChange={(newValue) => {
          console.log('onChange:', newValue)
          setValue(newValue)
        }}
        onVisibleChange={(visible) => {
          console.log('visible:', visible)
        }}
      />
    </>
  )
}
`},40215:function(e,n){n.Z=`import React, { useState } from 'react'
import { Picker } from 'lyrixi-design-mobile'

export default () => {
  const list = [
    { id: '1', name: '1' },
    { id: '2', name: '2' }
  ]
  const [value, setValue] = useState(null)
  return (
    <>
      <Picker.Main
        value={value}
        list={list}
        onChange={(newValue) => {
          console.log('onChange:', newValue)
          setValue(newValue)
        }}
      />
    </>
  )
}
`},29538:function(e,n){n.Z=`import React, { useEffect, useState } from 'react'
import { Picker } from 'lyrixi-design-mobile'

export default () => {
  const [list, setList] = useState([])
  const [value, setValue] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setList([
        {
          name: '0507-\u6253\u5370',
          id: '8571532967972181136'
        },
        {
          name: '0507-\u6253\u5370_\u526F\u672C',
          id: '8421508242493921754'
        }
      ])
    }, 3000)
  }, [])
  return (
    <>
      <Picker.Modal
        visible={true}
        value={'8571532967972181136'}
        list={list}
        onChange={(newValue) => {
          console.log('onChange:', newValue)
          // setValue(newValue)
        }}
      />
    </>
  )
}
`},78939:function(e,n){n.Z=`import React, { useState, useEffect } from 'react'
import { QRCode } from 'lyrixi-design-mobile'

const Logo = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  width: '50px',
  height: '50px',
  marginLeft: '-25px',
  marginTop: '-25px'
}
export default () => {
  const [url, setUrl] = useState('')
  useEffect(() => {
    setTimeout(() => {
      setUrl('abc')
    }, 1000)
  }, [])
  return (
    <>
      <QRCode text={url} style={{ width: '300px', height: '300px' }}>
        <img
          style={Logo}
          alt=""
          src="https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png"
        />
      </QRCode>
    </>
  )
}
`},51970:function(e,n){n.Z=`import React from 'react'

import { Layout, Divider, Row } from 'lyrixi-design-mobile'

export default () => {
  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>Each row has twenty-four columns</Divider>
        <Row>
          <Row.Col
            span={8}
            className="color-white"
            style={{
              backgroundColor: 'var(--primary)',
              padding: 'var(--space-m)',
              border: '1px solid white',
              boxSizing: 'border-box'
            }}
          >
            Name:
          </Row.Col>
          <Row.Col
            span={16}
            className="color-white"
            style={{
              backgroundColor: 'var(--primary)',
              padding: 'var(--space-m)',
              border: '1px solid white',
              boxSizing: 'border-box'
            }}
          >
            Morpheus
          </Row.Col>
          <Row.Col
            span={8}
            className="color-white"
            style={{
              backgroundColor: 'var(--primary)',
              padding: 'var(--space-m)',
              border: '1px solid white',
              boxSizing: 'border-box'
            }}
          >
            Age:
          </Row.Col>
          <Row.Col
            span={16}
            className="color-white"
            style={{
              backgroundColor: 'var(--primary)',
              padding: 'var(--space-m)',
              border: '1px solid white',
              boxSizing: 'border-box'
            }}
          >
            Twenty-eight
          </Row.Col>
        </Row>
      </Layout.Main>
    </Layout>
  )
}
`},55285:function(e,n){n.Z=`import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// \u5B89\u5168\u533A\u57DF
const SafeArea = forwardRef(({ safeArea, ...props }, ref) => {
  const rootRef = useRef(null)

  // Expose
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current
    }
  })

  return (
    <div
      {...props}
      className={\`\${safeArea === 'auto' ? 'auto-safe-area' : 'safe-area'}\${
        props.className ? ' ' + props.className : ' height-bottom'
      }\`}
      ref={rootRef}
    ></div>
  )
})

export default SafeArea
`},80658:function(e,n){n.Z=`import React, { useEffect } from 'react'
import { SafeArea } from 'lyrixi-design-mobile'

export default () => {
  useEffect(() => {
    SafeArea.autoSafeArea()
    console.log('\u662F\u5426\u9700\u8981\u5B89\u5168\u533A:', SafeArea.needsSafeArea())
  }, [])

  return (
    <div
      className="flex position-absolute full"
      data-safe-area="auto-border-bottom"
      style={{ backgroundColor: 'green', borderColor: 'red' }}
    >
      You can test it on mobile, if you can see a red rectangle, the mobile needs a safe area
      <SafeArea style={{ backgroundColor: 'red' }} />
      Use root stage safe area
      <div>{\`1. If you want to adapt to the safe area, you can invoke: SafeArea.autoSafeArea()\`}</div>
      <div>{\`2. If you want to root safe area, you can invoke: SafeArea.autoSafeArea('auto-safe-area-root')\`}</div>
      <div>{\`3. If you want to custom safe area, you can extend class: .auto-safe-area-children {...your class}\`}</div>
    </div>
  )
}
`},51389:function(e,n){n.Z=`import SafeArea from './SafeArea'
import getSafeAreaClassName from './utils/getSafeAreaClassName'
import autoSafeArea from './utils/autoSafeArea'
import needsSafeArea from './utils/needsSafeArea'
import onResize from './utils/onResize'

SafeArea.getSafeAreaClassName = getSafeAreaClassName
SafeArea.autoSafeArea = autoSafeArea
SafeArea.needsSafeArea = needsSafeArea
SafeArea.onResize = onResize

export default SafeArea
`},87070:function(e,n){n.Z=`import needsSafeArea from './needsSafeArea'
// import onResize from './onResize'

// Set global safe area
function autoSafeArea({ className = 'auto-safe-area-children', isSafeArea, debug } = {}) {
  if (typeof isSafeArea === 'function') {
    window.seedsIsSafeArea = isSafeArea
  }
  if (debug) {
    document.documentElement.classList.add(className)
    document.documentElement.style.setProperty('--safe-area-inset-top', '44px')
    document.documentElement.style.setProperty('--safe-area-inset-bottom', '34px')
    return
  }
  if (needsSafeArea()) {
    document.documentElement.classList.add(className)
  } else {
    document.documentElement.classList.remove(className)
  }
}

function init(config) {
  autoSafeArea(config)
  // \u76D1\u542C\u8DEF\u7531\u53D8\u5316\u65F6\u6839\u636E\u5206\u8FA8\u7387\u9002\u914D\u5B89\u5168\u533A, \u5C4F\u5E55\u5BBD\u9AD8\u9891\u7E41\u53D8\u5316(viewport\u4E0D\u7EDF\u4E00\u5BFC\u81F4, \u4F8B\u5982\u5165\u53E3\u662Fcontain\u91CC\u9762\u662Fcover)
  // onResize(() => {
  //   autoSafeArea(config)
  // })
}

export default init
`},2921:function(e,n){n.Z=`// getSafeAreaClassName by safeArea
function getSafeAreaClassName(safeArea) {
  return (
    // (safeArea === 'auto' && ' autoSafeArea') ||
    (safeArea === true && 'autoSafeArea') || (safeArea === false && 'clearSafeArea') || ''
  )
}

export default getSafeAreaClassName
`},8212:function(e,n){n.Z=`// \u5185\u5E93\u4F7F\u7528-start
import Device from './../../../utils/Device'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { Device } from 'lyrixi-design-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// Determine whether a safe area is needed
function needsSafeArea() {
  let customNeedsSafeArea = window.seedsIsSafeArea?.()
  if (typeof customNeedsSafeArea === 'boolean') {
    return customNeedsSafeArea
  }
  if (Device.platform === 'wechatMiniprogram' || Device.platform === 'alipayMiniprogram') {
    return true
  }
  if (Device.platform === 'wework') {
    return true
  }
  // \u9489\u9489\u4F1A\u81EA\u52A8\u52A0\u5B89\u5168\u533A, \u4E5F\u4F1A\u81EA\u5DF1\u53BB\u6389\u5B89\u5168\u533A\uFF0C\u6240\u4EE5\u53EA\u80FD\u6839\u636E\u5206\u8FA8\u7387\u5224\u65AD
  // if (
  //   Device.os === 'ios' &&
  //   (Device.platform === 'wechat' || Device.platform === 'wework' || Device.platform === 'dingtalk')
  // ) {
  //   // iPhoneX
  //   if (window.innerWidth === 375 && window.innerHeight === 724) {
  //     return true
  //   }
  //   // iPhone11promax
  //   if (window.innerWidth === 414 && window.innerHeight === 808) {
  //     return true
  //   }
  //   // iPhone13min
  //   if (window.innerWidth === 375 && window.innerHeight === 718) {
  //     return true
  //   }
  //   // iPhone12, iPhone13pro, iPhone14
  //   if (window.innerWidth === 390 && window.innerHeight === 753) {
  //     return true
  //   }
  //   // iPhone14pro, iPhone15, iPhone15pro
  //   if (window.innerWidth === 393 && window.innerHeight === 754) {
  //     return true
  //   }
  //   // iPhone14promax,iPhone15promax
  //   if (window.innerWidth === 430 && window.innerHeight === 834) {
  //     return true
  //   }
  //   // iPhone16pro
  //   if (window.innerWidth === 402 && window.innerHeight === 774) {
  //     return true
  //   }
  //   // iPhone16promax
  //   if (window.innerWidth === 430 && window.innerHeight === 833) {
  //     return true
  //   }
  //   if (window.innerWidth === 440 && window.innerHeight === 856) {
  //     return true
  //   }
  //   return false
  // }
  return false
}

export default needsSafeArea
`},45218:function(e,n){n.Z=`// popsate run latest window.autoSafeAreaResizeHandle
function handleAutoSafeAreaPopState() {
  window.autoSafeAreaResizeHandle()
}

// Singleton reize event
function onResize(fn) {
  if (typeof fn !== 'function') return

  // Update fn to window.autoSafeAreaResizeHandle
  window.autoSafeAreaResizeHandle = fn

  // Singleton
  if (!window.autoSafeAreaResizeEvent) {
    window.autoSafeAreaResizeEvent = true

    // Press physical back keying, history.back
    window.removeEventListener('popstate', handleAutoSafeAreaPopState, false)
    window.addEventListener('popstate', handleAutoSafeAreaPopState, false)

    // \u6539\u5199\u539F\u578B, \u82E5\u4E0D\u5355\u4F8B, \u6539\u5199\u4E24\u6B21\u76F8\u540C\u7684\u65B9\u6CD5\u5C06\u4F1A\u6B7B\u5FAA\u73AF
    // history.push
    let originalPushState = window.history.pushState
    window.history.pushState = function () {
      handleAutoSafeAreaPopState()
      originalPushState.apply(window.history, arguments)
    }

    // Page init, history.replace
    let originalReplaceState = window.history.replaceState
    window.history.replaceState = function () {
      handleAutoSafeAreaPopState()
      originalReplaceState.apply(window.history, arguments)
    }
  }
}

export default onResize
`},46902:function(e,n){n.Z=`import React, { useState, useRef } from 'react'
import _ from 'lodash'
import { Layout, Divider, Select, List, Checkbox, Modal, Card, ToolBar } from 'lyrixi-design-mobile'
import list from './listSimple'
import listData from './listData'

export default () => {
  const [keyword, setKeyword] = useState('')
  const [value, setValue] = useState([
    {
      allowClear: true,
      id: '1',
      // name: 'Option',
      name: <div>Option1</div>
    },
    {
      id: '2',
      name: 'Option2',
      style: {
        color: 'red',
        padding: 0,
        backgroundColor: 'transparent'
      }
    },
    {
      id: '3',
      name: 'Option3',
      disabled: true,
      allowClear: true
    }
  ])
  return (
    <Layout className="full">
      <Layout.Main>
        <Card>
          <Divider>Single Select</Divider>
          <Select.Combo
            modalProps={{
              title: 'Select',
              // \u6709\u4E9B\u4E1A\u52A1\u5F39\u7A97\u540E\u5C31\u4F1A\u53D8\u7684\u5F02\u5E38\u5361\u987F, \u89E3\u51B3\u65B9\u5F0F\u5982\u4E0B:
              // 1.visibility\u6539\u4E3Adisplay\u80FD\u89E3\u51B3
              // 2.\u4E0D\u7528root\u6362\u4EFB\u610F\u4E00\u4E2Adiv\u90FD\u662F\u597D\u7684, root\u5E94\u8BE5\u88AB\u6076\u610F\u4FEE\u6539\u5BFC\u81F4
              // 3.\u6302\u8F7D\u5230body\u4E0B\u4E5F\u80FD\u89E3\u51B3
              portal: document.body
            }}
            style={{ margin: '0 12px' }}
            placeholder="Single Select"
            allowClear
            multiple={false}
            list={list}
            value={value}
            onChange={setValue}
          />
        </Card>

        <Card>
          <Divider>Single Select, allow modal clear</Divider>
          <Select.Combo
            modalProps={{
              title: 'Select'
            }}
            style={{ margin: '0 12px' }}
            placeholder="Single Select"
            allowClear
            list={list}
            value={value}
            onChange={setValue}
          />
        </Card>

        <Card>
          <Divider>Multiple Select</Divider>
          <Select.Combo
            modalProps={{
              title: 'Select'
            }}
            style={{ margin: '0 12px' }}
            placeholder="Multiple Select"
            multiple
            allowClear
            list={list}
            value={value}
            onChange={setValue}
          />
        </Card>

        <Card>
          <Divider>Multiple Select separator</Divider>
          <Select.Combo
            modalProps={{
              title: 'Select'
            }}
            style={{ margin: '0 12px' }}
            placeholder="Multiple Select"
            multiple
            separator="|"
            allowClear
            list={list}
            value={value}
            onChange={setValue}
          />
        </Card>

        <Card>
          <Divider>Single tags</Divider>
          <Select.Combo
            modalProps={{
              title: 'Select'
            }}
            style={{ margin: '0 12px' }}
            placeholder="Multiple Select"
            mode={'tags'}
            multiple={false}
            // disabled
            allowClear
            list={list}
            value={value}
            onChange={setValue}
          />
        </Card>

        <Card>
          <Divider>Multiple Tags</Divider>
          <Select.Combo
            modalProps={{
              title: 'Select'
            }}
            style={{ margin: '0 12px' }}
            placeholder="Multiple Select"
            mode={'tags'}
            multiple
            // disabled
            allowClear
            list={list}
            value={value}
            onChange={setValue}
          />
        </Card>

        <Card>
          <Divider>Multiple Tags separator</Divider>
          <Select.Combo
            modalProps={{
              title: 'Select'
            }}
            style={{ margin: '0 12px' }}
            placeholder="Multiple Select"
            mode={'tags'}
            separator=","
            multiple
            // disabled
            allowClear
            list={list}
            value={value}
            onChange={setValue}
          />
        </Card>

        <Card>
          <Divider>Checkbox</Divider>
          <Select.Combo
            modalProps={{
              title: 'Select'
            }}
            style={{ margin: '0 12px' }}
            placeholder="Single Select"
            allowClear
            multiple={false}
            list={list}
            value={value}
            onChange={setValue}
            checkbox={({ checked }) => {
              return <Checkbox checked={checked} />
            }}
            checkboxPosition="left"
          />
        </Card>

        <Card>
          <Divider>Layout</Divider>
          <Select.Combo
            style={{ margin: '0 12px' }}
            placeholder="Layout"
            multiple={false}
            modalProps={{
              title: 'Select',
              header: () => {
                return <p>Header</p>
              },
              footer: () => {
                return <p>Footer</p>
              }
            }}
            allowClear
            value={value}
            list={list}
            onChange={setValue}
          />
        </Card>

        <Card>
          <Divider>onBeforeChange</Divider>
          <Select.Combo
            modalProps={{
              title: 'Select'
            }}
            style={{ margin: '0 12px' }}
            placeholder="onBeforeChange"
            allowClear
            multiple={false}
            value={value}
            list={list}
            onChange={setValue}
            onBeforeChange={(newValue) => {
              console.log('onBeforeChange', newValue)
              return new Promise((resolve) => {
                Modal.confirm({
                  title: '\u4F60\u786E\u5B9A\u8981\u4FEE\u6539\u5417\uFF1F',
                  content: \`\u4F60\u786E\u5B9A\u8981\u4FEE\u6539\u5417\`,
                  onOk() {
                    resolve(true)
                  },
                  onCancel() {
                    resolve(false)
                  }
                })
              })
            }}
          />
        </Card>

        <Card>
          <Divider>List count more than 15, show Search</Divider>
          <Select.Combo
            modalProps={{
              title: 'Select'
            }}
            style={{ margin: '0 12px' }}
            placeholder="Search"
            multiple={false}
            allowClear
            value={value}
            list={listData}
            onChange={(newValue) => {
              console.log('onChange:', newValue)
              setValue(newValue)
            }}
          />
        </Card>

        <Card>
          <Divider>Custom Header</Divider>
          <Select.Combo
            style={{ margin: '0 12px' }}
            placeholder="Search"
            multiple={false}
            modalProps={{
              title: 'Select',
              header: () => {
                return (
                  <ToolBar invert>
                    <ToolBar.Search
                      value={keyword}
                      onSearch={(newKeyword) => {
                        setKeyword(newKeyword)
                      }}
                    />
                  </ToolBar>
                )
              }
            }}
            allowClear
            value={value}
            list={List.searchList(list, keyword)}
            onChange={(newValue) => {
              console.log('onChange:', newValue)
              setValue(newValue)
            }}
          />
        </Card>
      </Layout.Main>
    </Layout>
  )
}
`},47321:function(e,n){n.Z=`export default [
  {
    avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=3',
    id: 'Option',
    name: 'Option',
    description: 'Description',
    content: 'Custom Content'
  },
  {
    name: 'This is group title',
    // description: '\u5206\u7EC4\u63CF\u8FF0',
    children: [
      {
        id: 'Group-Option',
        name: 'Group-Option',
        description: '\u5206\u7EC4\u5185\u90E8\u63CF\u8FF0'
      },
      {
        id: 'Group-Option2',
        name: 'Group-Option2'
      }
    ]
  },
  {
    id: 'Option2',
    name: 'Option2',
    content: '+86'
  },
  {
    id: '3',
    name: 'Option5'
  },
  {
    id: '4',
    name: 'Option5'
  },
  {
    id: '5',
    name: 'Option5'
  },
  {
    id: '6',
    name: 'Option6'
  },
  {
    id: '7',
    name: 'Option7'
  },
  {
    id: '8',
    name: 'Option8'
  },
  {
    id: '9',
    name: 'Option9'
  },
  {
    id: '10',
    name: 'Option10'
  },
  {
    id: '11',
    name: 'Option11'
  },
  {
    id: '12',
    name: 'Option12'
  },
  {
    id: '13',
    name: 'Option13'
  },
  {
    id: '14',
    name: 'Option14'
  },
  {
    id: '15',
    name: 'Option15'
  },
  {
    id: '16',
    name: 'Option16'
  },
  {
    id: '17',
    name: 'Option17'
  },
  {
    id: '18',
    name: 'Option18'
  },
  {
    id: '19',
    name: 'Option19'
  },
  {
    id: '20',
    name: 'Option20'
  },
  {
    id: '21',
    name: 'Option21'
  }
]
`},9525:function(e,n){n.Z=`import React from 'react'
export default [
  {
    allowClear: true,
    id: '1',
    name: <div>Option1</div>
  },
  {
    id: '2',
    name: 'Option2',
    style: {
      color: 'red',
      padding: 0,
      backgroundColor: 'transparent'
    }
  },
  {
    id: '3',
    name: 'Option3',
    disabled: true
  },
  {
    id: '4',
    name: 'Option4'
  },
  {
    id: '5',
    name: 'Option5'
  },
  {
    id: '6',
    name: 'Option6'
  },
  {
    id: '7',
    name: 'Option7'
  },
  {
    id: '8',
    name: 'Option8'
  },
  {
    id: '9',
    name: 'Option9'
  },
  {
    id: '10',
    name: 'Option10'
  },
  {
    id: '11',
    name: 'Option11'
  },
  {
    id: '12',
    name: 'Option12'
  },
  {
    id: '13',
    name: 'Option13'
  },
  {
    id: '14',
    name: 'Option14'
  },
  {
    id: '15',
    name: 'Option15'
  }
]
`},75560:function(e,n){n.Z=`import React, { useRef, useState } from 'react'
import { Select } from 'lyrixi-design-mobile'

export default () => {
  const selectRef = useRef(null)
  const [value, setValue] = useState([
    {
      id: '1',
      name: '\u9009\u98791'
    }
  ])
  return (
    <>
      <Select.Main
        ref={selectRef}
        multiple={false}
        value={value}
        list={[
          {
            id: '1',
            name: '\u9009\u98791'
          },
          {
            id: '2',
            name: '\u9009\u98792'
          }
        ]}
        onChange={(newValue) => {
          console.log('onChange:', newValue)
          setValue(newValue)
        }}
      />
    </>
  )
}
`},24980:function(e,n){n.Z=`import React, { useRef, useState } from 'react'
import { Select } from 'lyrixi-design-mobile'

export default () => {
  const selectRef = useRef(null)
  const [value, setValue] = useState([
    {
      id: '1',
      name: '\u9009\u98791'
    }
  ])
  return (
    <>
      <Select.Modal
        ref={selectRef}
        value={value}
        list={[
          {
            id: '1',
            name: '\u9009\u98791'
          },
          {
            id: '2',
            name: '\u9009\u98792'
          }
        ]}
        visible={true}
        onChange={(newValue) => {
          console.log('onChange:', newValue)
          setValue(newValue)
        }}
        onVisibleChange={(visible) => {
          console.log(visible)
        }}
      />
    </>
  )
}
`},96e3:function(e,n){n.Z=`import React, { useState } from 'react'
import { Layout, Selector } from 'lyrixi-design-mobile'

export default () => {
  const [value, setValue] = useState([
    {
      id: '1',
      name: '\u9009\u98791'
    }
  ])

  return (
    <Layout className="full bg-white">
      <Layout.Main>
        <Selector
          columns={3}
          // multiple
          allowClear
          placeholder="Please select"
          value={value}
          list={[
            {
              id: '1',
              name: '\u9009\u98791'
            },
            {
              id: '2',
              name: 'Option 2 is very very very very very long'
            },
            {
              id: '3',
              name: '\u9009\u98793'
            },
            {
              id: '4',
              name: '\u9009\u98794'
            },
            {
              id: '5',
              name: '\u9009\u98795'
            }
          ]}
          // multiple={true}
          onChange={setValue}
        />
      </Layout.Main>
    </Layout>
  )
}
`},79326:function(e,n){n.Z=`import React, { useRef } from 'react'
import { Share, Layout } from 'lyrixi-design-mobile'

export default () => {
  const shareComboRef = useRef(null)
  console.log(shareComboRef)
  return (
    <Layout className="full">
      <Layout.Header>When this platform is not supported, nothing will appear</Layout.Header>
      <Layout.Main className="bg-white">
        <Share.Combo
          ref={shareComboRef}
          shareTo={{
            wechat: {
              title: '\u6807\u9898',
              description: '\u63CF\u8FF0',
              imageUrl: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
              url: 'https://www.baidu.com'
            },
            wecom: {
              title: '\u6807\u9898',
              description: '\u63CF\u8FF0',
              imageUrl: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
              url: 'https://www.baidu.com'
            },
            dingtalk: {
              title: '\u6807\u9898',
              description: '\u63CF\u8FF0',
              imageUrl: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
              url: 'https://www.baidu.com'
            },
            lark: {
              title: '\u6807\u9898',
              description: '\u63CF\u8FF0',
              imageUrl: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
              url: 'https://www.baidu.com'
            }
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
`},57826:function(e,n){n.Z=`import React from 'react'
import { Share, Layout } from 'lyrixi-design-mobile'

export default () => {
  return (
    <Layout className="full">
      <Layout.Header className="text-center">Share To</Layout.Header>
      <Layout.Main className="bg-white">
        <Share.Main
          shareTo={{
            wechat: {
              title: '\u6807\u9898',
              description: '\u63CF\u8FF0',
              imageUrl: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
              url: 'https://www.baidu.com'
            },
            wecom: {
              title: '\u6807\u9898',
              description: '\u63CF\u8FF0',
              imageUrl: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
              url: 'https://www.baidu.com'
            },
            dingtalk: {
              title: '\u6807\u9898',
              description: '\u63CF\u8FF0',
              imageUrl: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
              url: 'https://www.baidu.com'
            },
            lark: {
              title: '\u6807\u9898',
              description: '\u63CF\u8FF0',
              imageUrl: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
              url: 'https://www.baidu.com'
            }
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
`},81616:function(e,n){n.Z=`import React from 'react'
import { Share, Layout } from 'lyrixi-design-mobile'

export default () => {
  return (
    <Layout className="full">
      <Layout.Header className="text-center">Share To</Layout.Header>
      <Layout.Main className="bg-white">
        <Share.Modal
          visible
          shareTo={{
            wechat: {
              title: '\u6807\u9898',
              description: '\u63CF\u8FF0',
              imageUrl: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
              url: 'https://www.baidu.com'
            },
            wecom: {
              title: '\u6807\u9898',
              description: '\u63CF\u8FF0',
              imageUrl: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
              url: 'https://www.baidu.com'
            },
            dingtalk: {
              title: '\u6807\u9898',
              description: '\u63CF\u8FF0',
              imageUrl: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
              url: 'https://www.baidu.com'
            },
            lark: {
              title: '\u6807\u9898',
              description: '\u63CF\u8FF0',
              imageUrl: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
              url: 'https://www.baidu.com'
            }
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
`},50114:function(e,n){n.Z=`import React, { useEffect, useState } from 'react'
import { Signature, Layout, Toast, Device, Bridge } from 'lyrixi-design-mobile'

// Test safe area
// import { SafeArea } from 'lyrixi-design-mobile'
// SafeArea.autoSafeArea({ debug: true })

export default () => {
  const [value, setValue] = useState(
    'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png'
  )

  useEffect(() => {
    Bridge.ready()
  }, [])

  return (
    <Layout className="full">
      <Layout.Header className="text-center">\u624B\u5199\u7B7E\u540D</Layout.Header>
      <Layout.Main className="bg-white">
        <Signature.Combo
          // color="#000000"
          // backgroundColor="white"
          // disabled={true}
          value={value}
          modalProps={{
            safeArea: 'auto'
          }}
          onChange={(newVal) => {
            console.log(newVal)
            setValue(newVal)
          }}
          onPreview={(src) => {
            // Not video
            if (
              Device.device === 'mobile' &&
              (Bridge.platform === 'wechat' ||
                Bridge.platform === 'wework' ||
                Bridge.platform === 'alipay' ||
                Bridge.platform === 'dingtalk' ||
                Bridge.platform === 'lark' ||
                Bridge.platform === 'wechatMiniprogram' ||
                Bridge.platform === 'weworkMiniprogram' ||
                Bridge.platform === 'alipayMiniprogram')
            ) {
              return 'nativeImage'
            }

            // Video
            if (Bridge.platform === 'wq' || Bridge.platform === 'dinghuo') {
              Bridge.previewImage({
                urls: [src],
                current: src,
                index: 0
              })
              return false
            }

            // Video or image
            return 'browser'
          }}
          onBeforeChange={(newVal) => {
            if (!newVal) {
              Toast.show({
                content: '\u7B7E\u540D\u4E0D\u80FD\u4E3A\u7A7A'
              })
              return false
            }
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
`},84848:function(e,n){n.Z=`import React, { useRef, useState } from 'react'
import { Signature, Layout } from 'lyrixi-design-mobile'

export default () => {
  return (
    <Layout className="full">
      <Layout.Header className="text-center">\u624B\u5199\u7B7E\u540D</Layout.Header>
      <Layout.Main className="bg-white">
        <Signature.Main
          onChange={(base64) => {
            console.log(base64)
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
`},458:function(e,n){n.Z=`import React, { useRef, useState } from 'react'
import { Signature, Layout } from 'lyrixi-design-mobile'

export default () => {
  return (
    <Layout className="full">
      <Layout.Header className="text-center">\u624B\u5199\u7B7E\u540D</Layout.Header>
      <Layout.Main className="bg-white">
        <Signature.Modal
          visible={true}
          onChange={(base64) => {
            console.log(base64)
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
`},90515:function(e,n){n.Z=`import React from 'react'

// \u5185\u5E93\u4F7F\u7528
import { Skeleton } from 'lyrixi-design-mobile'

// \u6D4B\u8BD5\u4F7F\u7528
// import Skeleton from 'library/components/Skeleton'

export default () => {
  return (
    <>
      <Skeleton.Detail />
    </>
  )
}
`},97214:function(e,n){n.Z=`import React from 'react'

// \u5185\u5E93\u4F7F\u7528
import { Skeleton } from 'lyrixi-design-mobile'

// \u6D4B\u8BD5\u4F7F\u7528
// import Skeleton from 'library/components/Skeleton'

export default () => {
  return (
    <>
      <Skeleton.Edit />
    </>
  )
}
`},75167:function(e,n){n.Z=`import React from 'react'

// \u5185\u5E93\u4F7F\u7528
import { Skeleton } from 'lyrixi-design-mobile'

// \u6D4B\u8BD5\u4F7F\u7528
// import Skeleton from 'library/components/Skeleton'

export default () => {
  return (
    <>
      <Skeleton.List divider="line" animated={false} />
    </>
  )
}
`},44982:function(e,n){n.Z=`import React from 'react'
import { Layout, Divider, Space } from 'lyrixi-design-mobile'

export default () => {
  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>Space</Divider>
        <Space>1000</Space>
      </Layout.Main>
    </Layout>
  )
}
`},52701:function(e,n){n.Z=`import React, { useState } from 'react'
import { Layout, Divider, Switch } from 'lyrixi-design-mobile'

export default () => {
  const [checked, setChecked] = useState(false)
  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>Size m</Divider>
        <Switch
          // disabled
          checked={checked}
          onChange={setChecked}
        />
        <Switch
          // disabled
          checked={checked}
          on="On On On On"
          off="Off"
          onChange={setChecked}
        />
        <Divider>Size s</Divider>
        <Switch
          size="s"
          // disabled
          checked={checked}
          onChange={setChecked}
        />
        <Switch
          size="s"
          // disabled
          checked={checked}
          on="On"
          off="Off"
          onChange={setChecked}
        />
      </Layout.Main>
    </Layout>
  )
}
`},45909:function(e,n){n.Z=`// \u79FB\u9664Toast
function hide(props) {
  let toastId = '__SeedsUI_toast_el__'
  let mask = document.getElementById(toastId)

  if (mask) {
    if (mask.timeout) window.clearTimeout(mask.timeout)
    mask.timeout = setTimeout(() => {
      mask?.parentNode?.removeChild?.(mask)
      props?.onVisibleChange && props?.onVisibleChange(false)
    }, 300)
  }
}

export default hide
`},90752:function(e,n){n.Z=`import show from './show'
import hide from './hide'

const Toast = {
  show,
  hide
}

export default Toast
`},20349:function(e,n){n.Z=`import hide from './hide'

// \u663E\u793AToast
// eslint-disable-next-line
function show(props) {
  const {
    // Visible duration
    duration,
    maskClickable,
    // Pop position: top\u3001middle\u3001bottom
    position,
    id,
    maskProps,
    className,
    style,
    // Content html text
    content,
    onVisibleChange
  } = {
    ...(this?.defaultProps || {}),
    ...(props || {})
  }

  // \u6E32\u67D3
  function render() {
    let toastId = id || '__SeedsUI_toast_el__'
    // \u5982\u679C\u6CA1\u751F\u6210\u6210\u529F, \u5219\u5F3A\u5236\u751F\u6210
    let mask = document.getElementById(toastId)
    if (!mask) {
      // Create mask
      mask = document.createElement('div')

      mask.innerHTML = \`<div class="toast">
        <div class="toast-wrapper">
          <div class="toast-content"></div>
        </div>
      </div>\`
      // \u6DFB\u52A0\u5230dom\u4E0A
      ;(document.getElementById('root') || document.body).appendChild(mask)
    }

    // Update mask
    mask.setAttribute(
      'class',
      \`mask toast-mask\${maskProps?.className ? ' ' + maskProps?.className : ''}\${
        maskClickable !== false ? ' toast-propagation' : ''
      }\`
    )
    mask.setAttribute('id', toastId)
    mask.setAttribute('style', '')
    for (let key in maskProps?.style || {}) {
      mask.style[key] = maskProps?.style[key]
    }

    // Update container
    let container = mask.querySelector('.toast')
    if (container) {
      container?.setAttribute('class', \`toast \${position || 'middle'}\`)
    }

    // Update wrapper
    let wrapper = mask.querySelector('.toast-wrapper')
    if (wrapper) {
      wrapper?.setAttribute('class', \`toast-wrapper \${className ? ' ' + className : ''}\`)
      wrapper?.setAttribute('style', '')
      for (let key in style || {}) {
        wrapper.style[key] = style[key]
      }
    }

    // Update content
    let contentDOM = mask.querySelector('.toast-content')
    if (contentDOM) {
      contentDOM.innerHTML = content || ''
    }

    // Open toast
    mask.classList.add('active')
    mask.childNodes[0].classList.add('active')

    if (typeof onVisibleChange === 'function') {
      onVisibleChange(true)
    }

    // \u663E\u793A\u6570\u79D2\u540E\u9690\u85CF
    if (mask.showTimeout) window.clearTimeout(mask.showTimeout)
    mask.showTimeout = setTimeout(
      () => {
        hide({ onVisibleChange: onVisibleChange })
      },
      typeof duration === 'number' ? duration : 2000
    )

    // \u8FD4\u56DE\u8282\u70B9
    return mask
  }
  return render()
}

export default show
`},40176:function(e,n){n.Z=`import React from 'react'
import { Tooltip } from 'lyrixi-design-mobile'

export default () => {
  return (
    <>
      <Tooltip
        content={<p>123412341234</p>}
        onVisibleChange={(visible) => {
          console.log('visible:', visible)
        }}
      >
        <div style={{ margin: 100 }}>\u70B9\u51FB</div>
      </Tooltip>
    </>
  )
}
`},14529:function(e,n){n.Z=`import React, { useRef, useState } from 'react'
import { Layout, Button } from 'lyrixi-design-mobile'
import { Transfer } from 'lyrixi-design-mobile'
// import Transfer from 'library/components/Transfer'

export default () => {
  const transferRef = useRef(null)
  const [value, setValue] = useState([
    { id: '1', name: '1' },
    { id: '2', name: '2' }
  ])
  return (
    <Layout className="full">
      <Layout.Header className="text-center">Transfer.Combo</Layout.Header>
      <Layout.Main className="bg-white">
        <div className="demo-title">Transfer Combo</div>
        <Transfer.Combo
          ref={transferRef}
          className="border-b"
          placeholder="Select"
          allowClear
          list={[
            { id: '1', name: '1' },
            { id: '2', name: '2' },
            { id: '3', name: '3' },
            { id: '4', name: '4' },
            { id: '5', name: '5' },
            { id: '6', name: '6' },
            { id: '7', name: '7' },
            { id: '8', name: '8' },
            { id: '9', name: '9' },
            { id: '10', name: '10' },
            { id: '11', name: '11' },
            { id: '12', name: '12' },
            { id: '13', name: '13' },
            { id: '14', name: '14' },
            { id: '15', name: '15' },
            { id: '16', name: '16' },
            { id: '17', name: '17' },
            { id: '18', name: '18' },
            { id: '19', name: '19' }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            setValue(newValue)
          }}
          modalProps={{
            footer: ({ value, triggerOk }) => {
              return (
                <Layout.Footer
                  onClick={() => {
                    triggerOk()
                  }}
                >
                  <Button className="listpicker-footer-submit primary">\u786E\u5B9A</Button>
                </Layout.Footer>
              )
            },
            mainProps: {
              titles: { selected: '\u6807\u98981', unSelected: '\u6807\u98982' }
            }
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
`},26018:function(e,n){n.Z=`import React, { useState } from 'react'
import { Layout } from 'lyrixi-design-mobile'
import { Transfer } from 'lyrixi-design-mobile'
// import Transfer from 'library/components/Transfer'

export default () => {
  const [value, setValue] = useState([
    { id: '1', name: '1' },
    { id: '2', name: '2' }
  ])
  return (
    <Layout className="full">
      <Layout.Header className="text-center">Transfer.Main</Layout.Header>
      <div className="demo-title">Transfer List</div>
      <Transfer.Main
        list={[
          { id: '1', name: '1' },
          { id: '2', name: '2' },
          { id: '3', name: '3' },
          { id: '4', name: '4' },
          { id: '5', name: '5' },
          { id: '6', name: '6' }
        ]}
        value={value}
        titles={['\u6807\u98981', '\u6807\u98982']}
        onChange={(newValue) => {
          console.log(newValue)
          setValue(newValue)
        }}
      />
    </Layout>
  )
}
`},3304:function(e,n){n.Z=`import React, { useState } from 'react'
import { Layout } from 'lyrixi-design-mobile'
import { Transfer } from 'lyrixi-design-mobile'
// import Transfer from 'library/components/Transfer'

export default () => {
  const [value, setValue] = useState([
    { id: '1', name: '1' },
    { id: '2', name: '2' }
  ])
  return (
    <Layout className="full">
      <Layout.Header className="text-center">Transfer.Modal</Layout.Header>
      <Layout.Main className="bg-white">
        <div className="demo-title">Transfer Modal</div>
        <Transfer.Modal
          visible
          list={[
            { id: '1', name: '1' },
            { id: '2', name: '2' },
            { id: '3', name: '3' },
            { id: '4', name: '4' },
            { id: '5', name: '5' },
            { id: '6', name: '6' }
          ]}
          value={value}
          titles={['\u6807\u98981', '\u6807\u98982']}
          onChange={(newValue) => {
            console.log('newValue:', newValue)
            setValue(newValue)
          }}
        />
      </Layout.Main>
    </Layout>
  )
}
`},25468:function(e,n){n.Z=`import React, { useRef, useEffect } from 'react'
import { Layout, VideoPlayer, Button } from 'lyrixi-design-mobile'

export default () => {
  const videoPlayerRef = useRef(null)
  return (
    <Layout className="full">
      <Layout.Main>
        <VideoPlayer
          ref={videoPlayerRef}
          poster={'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png'}
          src={'https://player.alicdn.com/video/aliyunmedia.mp4'}
          autoPlay={false}
          header={
            <div
              className="videoplayer-header-close"
              onClick={() => {
                alert('close')
              }}
            ></div>
          }
        />
      </Layout.Main>
      <Layout.Footer>
        <Button
          onClick={() => {
            videoPlayerRef.current.play()
          }}
        >
          Play
        </Button>
        <Button
          onClick={() => {
            videoPlayerRef.current.pause()
          }}
        >
          Pause
        </Button>
      </Layout.Footer>
    </Layout>
  )
}
`},72275:function(e,n){n.Z=`import React, { useState } from 'react'
import { Vott, Button } from 'lyrixi-design-mobile'
import mockData from './mockData'
import mock from './mock.jpg'

export default () => {
  const [data, setData] = useState([])
  const [readOnly, setReadOnly] = useState(true)
  const [params, setParams] = useState({})

  function handleAll() {
    setData(convertData(mockData.data.skuList))
  }
  function handle1() {
    let typeData = mockData.data.skuList.filter(
      (item) => item.skuId === 'rio_qingshuang_qingputao_sleencan330ml'
    )
    setData(convertData(typeData))
  }
  function handle2() {
    let typeData = mockData.data.skuList.filter(
      (item) => item.skuId === 'posm_rio_qinshuang_jiageqian'
    )
    setData(convertData(typeData))
  }
  function handleReadOnly() {
    setReadOnly(!readOnly)
  }
  function handleBlue() {
    setParams({
      shapeAttributes: {
        style: 'stroke:blue;',
        className: 'blue',
        id: 'blue',
        custom: '\u81EA\u5B9A\u4E49blue'
      }
    })
  }
  function convertData(skuList) {
    return skuList.map((item) => {
      return {
        polygon: [
          [item.x2, item.y1],
          [item.x1, item.y1],
          [item.x1, item.y2],
          [item.x2, item.y2]
        ],
        style: 'stroke:red;',
        className: 'default',
        id: 'default',
        custom: '\u81EA\u5B9A\u4E49\u5C5E\u6027'
      }
    })
  }
  function handleChange(list, others) {
    console.log(list, others)
  }

  return (
    <div id="root" className="position-relative" style={{ height: '300px' }}>
      <Vott
        style={{ height: '469px' }}
        data={data}
        readOnly={readOnly}
        src={mock}
        params={params}
        onChange={handleChange}
        preview
      />
      <Button className="flex danger" onClick={handleReadOnly}>
        \u53EA\u8BFB\u4E0E\u7ED8\u5236(
        {readOnly ? '\u53EA\u8BFB' : '\u7ED8\u5236'})
      </Button>
      <Button className="flex link" onClick={handleBlue}>
        \u4FEE\u6539\u6807\u6CE8\u989C\u8272\u4E3A\u84DD\u8272
      </Button>

      <Button className="flex primary" onClick={handleAll}>
        \u5168\u90E8\u6807\u6CE8
      </Button>

      <Button className="flex success" onClick={handle1}>
        \u6807\u6CE8\u6E05\u723D\u9633\u5149\u73AB\u7470\u8461\u8404
      </Button>

      <Button className="flex danger" onClick={handle2}>
        \u6807\u6CE8\u6E05\u723D\u9633\u5149\u73AB\u7470\u8461\u8404\u4EF7\u683C\u7B7E
      </Button>
    </div>
  )
}
`},12195:function(e,n){n.Z=`export default {
  bizId: '8248217089401331397',
  catlogs: [],
  data: {
    shopRecruitment: {
      bpShop: [],
      jpShop: []
    },
    dateTime: '2023-09-01 17:43:43',
    skuPriceTagList: [],
    imageId: '8901464828137340152',
    skuList: [
      {
        score: 0.884,
        repeat: 0,
        y1: 764,
        x1: 1188,
        y2: 1140,
        x2: 1534,
        serial_num: 0,
        layer: 1,
        skuId: 'All_SKU',
        isBottom: 0
      },
      {
        score: 0.322,
        repeat: 0,
        y1: 975,
        x1: 882,
        y2: 1476,
        x2: 1160,
        serial_num: 0,
        layer: 1,
        skuId: 'all_sku',
        isBottom: 0
      },
      {
        score: 0.914,
        repeat: 0,
        y1: 1094,
        x1: 1563,
        y2: 1478,
        x2: 1955,
        serial_num: 0,
        layer: 1,
        skuId: 'All_SKU',
        isBottom: 0
      },
      {
        score: 0.725,
        repeat: 0,
        y1: 1140,
        x1: 1980,
        y2: 1551,
        x2: 2173,
        serial_num: 0,
        layer: 1,
        skuId: 'All_SKU',
        isBottom: 0
      },
      {
        score: 0.999,
        repeat: 0,
        y1: 908,
        x1: 2173,
        y2: 1627,
        x2: 2468,
        serial_num: 0,
        layer: 1,
        skuId: 'rio_weixun_grape_sleekcan330ml',
        isBottom: 1
      },
      {
        score: 0.999,
        repeat: 0,
        y1: 1129,
        x1: 24,
        y2: 1685,
        x2: 323,
        serial_num: 0,
        layer: 1,
        skuId: 'All_SKU',
        isBottom: 0
      },
      {
        score: 1,
        repeat: 0,
        y1: 1135,
        x1: 348,
        y2: 1704,
        x2: 677,
        serial_num: 0,
        layer: 1,
        skuId: 'All_SKU',
        isBottom: 0
      },
      {
        score: 0.992,
        repeat: 0,
        y1: 1178,
        x1: 2481,
        y2: 1773,
        x2: 2841,
        serial_num: 0,
        layer: 1,
        skuId: 'kekoukele_kele_005',
        isBottom: 1
      },
      {
        score: 0.835,
        repeat: 0,
        y1: 1224,
        x1: 2842,
        y2: 1788,
        x2: 2990,
        serial_num: 0,
        layer: 1,
        skuId: 'kekoukel_xuebi_002',
        isBottom: 1
      },
      {
        score: 0.999,
        repeat: 0,
        y1: 1713,
        x1: 13,
        y2: 2282,
        x2: 316,
        serial_num: 0,
        layer: 1,
        skuId: 'All_SKU',
        isBottom: 0
      },
      {
        score: 1,
        repeat: 0,
        y1: 1725,
        x1: 339,
        y2: 2291,
        x2: 648,
        serial_num: 0,
        layer: 1,
        skuId: 'All_SKU',
        isBottom: 0
      },
      {
        score: 0.999,
        repeat: 0,
        y1: 1475,
        x1: 1340,
        y2: 2314,
        x2: 1668,
        serial_num: 0,
        layer: 1,
        skuId: 'rio_qiangshuang_peach_can500ml',
        isBottom: 0
      },
      {
        score: 0.992,
        repeat: 0,
        y1: 1457,
        x1: 675,
        y2: 2324,
        x2: 1006,
        serial_num: 0,
        layer: 1,
        skuId: 'rio_qiangshuang_apple_can500ml',
        isBottom: 0
      },
      {
        score: 0.999,
        repeat: 0,
        y1: 1468,
        x1: 1007,
        y2: 2326,
        x2: 1342,
        serial_num: 0,
        layer: 1,
        skuId: 'rio_qiangshuang_grape_can500ml',
        isBottom: 0
      },
      {
        score: 0.995,
        repeat: 0,
        y1: 1577,
        x1: 1676,
        y2: 2343,
        x2: 1957,
        serial_num: 0,
        layer: 1,
        skuId: 'rio_qingshuang_baitao_sleencan330ml',
        isBottom: 1
      },
      {
        score: 0.988,
        repeat: 0,
        y1: 1629,
        x1: 2237,
        y2: 2352,
        x2: 2440,
        serial_num: 0,
        layer: 1,
        skuId: 'rio_qingshuang_qingputao_sleencan330ml',
        isBottom: 1
      },
      {
        score: 0.995,
        repeat: 0,
        y1: 1594,
        x1: 1958,
        y2: 2355,
        x2: 2236,
        serial_num: 0,
        layer: 1,
        skuId: 'rio_qingshuang_baitao_sleencan330ml',
        isBottom: 0
      },
      {
        score: 0.976,
        repeat: 0,
        y1: 1810,
        x1: 2804,
        y2: 2360,
        x2: 2989,
        serial_num: 0,
        layer: 1,
        skuId: 'kekoukel_xuebi_002',
        isBottom: 0
      },
      {
        score: 0.994,
        repeat: 0,
        y1: 1792,
        x1: 2447,
        y2: 2364,
        x2: 2793,
        serial_num: 0,
        layer: 1,
        skuId: 'kekoukele_kele_005',
        isBottom: 0
      },
      {
        score: 0.969,
        repeat: 0,
        y1: 2380,
        x1: 1810,
        y2: 2594,
        x2: 2379,
        serial_num: 0,
        layer: 1,
        skuId: 'posm_rio_qinshuang_jiageqian',
        isBottom: 0
      },
      {
        score: 0.999,
        repeat: 0,
        y1: 2588,
        x1: 371,
        y2: 3690,
        x2: 675,
        serial_num: 0,
        layer: 2,
        skuId: 'All_SKU',
        isBottom: 0
      },
      {
        score: 0.999,
        repeat: 0,
        y1: 2580,
        x1: 710,
        y2: 3704,
        x2: 1007,
        serial_num: 0,
        layer: 2,
        skuId: 'All_SKU',
        isBottom: 0
      },
      {
        score: 0.999,
        repeat: 0,
        y1: 2568,
        x1: 1061,
        y2: 3729,
        x2: 1339,
        serial_num: 0,
        layer: 2,
        skuId: 'All_SKU',
        isBottom: 0
      },
      {
        score: 1,
        repeat: 0,
        y1: 2553,
        x1: 15,
        y2: 3748,
        x2: 327,
        serial_num: 0,
        layer: 2,
        skuId: 'All_SKU',
        isBottom: 0
      },
      {
        score: 0.998,
        repeat: 0,
        y1: 2648,
        x1: 1719,
        y2: 3758,
        x2: 1993,
        serial_num: 0,
        layer: 2,
        skuId: 'All_SKU',
        isBottom: 0
      },
      {
        score: 0.999,
        repeat: 0,
        y1: 2662,
        x1: 2032,
        y2: 3763,
        x2: 2290,
        serial_num: 0,
        layer: 2,
        skuId: 'All_SKU',
        isBottom: 0
      },
      {
        score: 0.998,
        repeat: 0,
        y1: 2605,
        x1: 1376,
        y2: 3774,
        x2: 1674,
        serial_num: 0,
        layer: 2,
        skuId: 'All_SKU',
        isBottom: 0
      },
      {
        score: 0.999,
        repeat: 0,
        y1: 2671,
        x1: 2329,
        y2: 3795,
        x2: 2609,
        serial_num: 0,
        layer: 2,
        skuId: 'All_SKU',
        isBottom: 0
      },
      {
        score: 0.999,
        repeat: 0,
        y1: 2703,
        x1: 2659,
        y2: 3804,
        x2: 2953,
        serial_num: 0,
        layer: 2,
        skuId: 'All_SKU',
        isBottom: 0
      }
    ],
    disStandardScore: {
      score: null
    },
    groundPile: {
      area: '',
      recognizeArea: '',
      lengthRemark: '',
      length: '',
      width: '',
      recognizeNum: '',
      widthRemark: ''
    },
    productDetail: {
      jpDetail: [
        {
          originalNum: '',
          facingRate: '7%',
          code: 'kekoukele_kele_005',
          belongTab: [],
          originalPrice: null,
          unitName: '\u74F6',
          facingNum: 2,
          changeType: '',
          discountPrice: null,
          label: null,
          type: '\u6C34',
          productName: '\u53EF\u53E3\u53EF\u4E50005',
          spec: '',
          layerNum: [1],
          is_base: null,
          product_id: 5842312601974420000,
          ranking: 1,
          brand: '',
          skuId: 'kekoukele_kele_005'
        }
      ],
      bpDetail: [
        {
          originalNum: '',
          facingRate: '4%',
          code: 'rio_qiangshuang_apple_can500ml',
          belongTab: [],
          originalPrice: null,
          unitName: '\u74F6',
          facingNum: 1,
          changeType: '',
          discountPrice: null,
          label: null,
          type: '\u672A\u5206\u7C7B',
          productName: '\u5F3A\u723D\u82F9\u679C',
          spec: '',
          layerNum: [1],
          is_base: null,
          product_id: 5777510754420536000,
          ranking: 1,
          brand: '\u9510\u6FB3',
          skuId: 'rio_qiangshuang_apple_can500ml'
        },
        {
          originalNum: '',
          facingRate: '4%',
          code: 'rio_qingshuang_qingputao_sleencan330ml',
          belongTab: [],
          originalPrice: null,
          unitName: '\u74F6',
          facingNum: 1,
          changeType: '',
          discountPrice: null,
          label: null,
          type: 'syhcs',
          productName: '\u6E05\u723D\u9633\u5149\u73AB\u7470\u8461\u8404',
          spec: '',
          layerNum: [1],
          is_base: null,
          product_id: 4931714019257304000,
          ranking: 2,
          brand: 'AI\u672C\u54C1',
          skuId: 'rio_qingshuang_qingputao_sleencan330ml'
        },
        {
          originalNum: '',
          facingRate: '3%',
          code: 'rio_weixun_grape_sleekcan330ml',
          belongTab: [],
          originalPrice: null,
          unitName: '\u74F6',
          facingNum: 1,
          changeType: '',
          discountPrice: null,
          label: null,
          type: '\u672A\u5206\u7C7B',
          productName: '\u5FAE\u91BA3\u5EA6\u8461\u8404\uFF08\u7EC6\u7F50\uFF09',
          spec: '',
          layerNum: [1],
          is_base: null,
          product_id: 7353946461110332000,
          ranking: 3,
          brand: '\u9510\u6FB3',
          skuId: 'rio_weixun_grape_sleekcan330ml'
        },
        {
          originalNum: '',
          facingRate: '3%',
          code: 'putao001',
          belongTab: [],
          originalPrice: null,
          unitName: '\u74F6',
          facingNum: 1,
          changeType: '',
          discountPrice: null,
          label: null,
          type: '\u672A\u5206\u7C7B',
          productName: '\u5F3A\u723D\u8461\u8404\uFF08\u5408\u5E76\u5546\u54C1\uFF09',
          spec: '',
          layerNum: [1],
          is_base: null,
          product_id: 5518745267327535000,
          ranking: 4,
          brand: '\u9510\u6FB3',
          skuId: 'rio_qiangshuang_grape_can500ml'
        }
      ],
      disPlayTab: []
    },
    boxs: {
      unknownBoxs: [
        'All_SKU',
        'kekoukel_xuebi_002',
        'rio_qingshuang_baitao_sleencan330ml',
        'rio_qiangshuang_peach_can500ml',
        'all_sku'
      ],
      priceTagBoxs: ['price_tag'],
      bpBoxs: [
        'rio_qiangshuang_grape_can500ml',
        'rio_weixun_grape_sleekcan330ml',
        'posm_rio_qinshuang_jiageqian',
        'rio_qingshuang_qingputao_sleencan330ml',
        'rio_qiangshuang_apple_can500ml'
      ],
      jpBoxs: ['kekoukele_kele_005']
    },
    stackBox: {
      cutboxSum: 0,
      cutboxCol: '',
      cutBoxInfoList: []
    },
    layersNumber: {
      bpPosNum: [1],
      total: 1
    },
    brandStatistics: {
      brandList: [
        {
          name: '\u9510\u6FB3',
          key: 'bp',
          bp: {
            condition: 3,
            facingNum: 3
          }
        },
        {
          name: 'AI\u672C\u54C1',
          key: 'bp',
          bp: {
            condition: 1,
            facingNum: 1
          }
        }
      ]
    },
    correctiveFeedback: {
      errMsg: null
    },
    sku_price_tag_enabl: true,
    originalImageUrl: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
    materials: {
      jpMaDetail: [],
      maDetail: [
        {
          productId: 8725863909239391000,
          unitName: '\u4E2A',
          originalPrice: null,
          hasPriceTag: false,
          num: 1,
          priceTag: null,
          discountPrice: null,
          spec: '',
          aiProductCode: 'posm_rio_qinshuang_jiageqian',
          productCode: 'RIO06',
          bjpType: '0',
          rate: 100,
          // \u4E0D\u5B58\u5728\u7684\u56FE\u7247
          imageUrl:
            'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/list/avatar-default.jpg',
          name: '\u6E05\u723D\u4EF7\u683C\u7B7E',
          layers: [1],
          rank: 1,
          ranking: 1,
          class: 'RIO\u7269\u6599',
          brand: null,
          materialsName: '\u6E05\u723D\u4EF7\u683C\u7B7E',
          skuId: 'posm_rio_qinshuang_jiageqian'
        }
      ]
    },
    refrigerator: {
      purity: 14,
      plumpness: 100
    },
    widthEnable: false,
    dashboard: {
      bp_facingNum: 4,
      bp_facingRate: '14%',
      jp_facingRate: '7%',
      bp_condition: 4,
      jp_facingNum: 2,
      jp_condition: 1,
      unidentified_facingRate: '79%',
      unidentified_condition: '',
      empty_facingRate: '0%',
      unidentified_facingNum: 22,
      empty_condition: '',
      empty_facingNum: 0
    },
    categoryStatistics: {
      categoryList: [
        {
          jp: {
            condition: 0,
            facingNum: 0
          },
          name: '\u672A\u5206\u7C7B',
          isTogether: '\u5426',
          bp: {
            condition: 3,
            facingNum: 3
          }
        },
        {
          jp: {
            condition: 1,
            facingNum: 2
          },
          name: '\u6C34',
          isTogether: '\u5426',
          bp: {
            condition: 0,
            facingNum: 0
          }
        },
        {
          jp: {
            condition: 0,
            facingNum: 0
          },
          name: 'syhcs',
          isTogether: '\u5426',
          bp: {
            condition: 1,
            facingNum: 1
          }
        }
      ]
    },
    fridgeType: ''
  },
  details: [],
  displayType: '1',
  errMsg: '',
  errReport: '',
  funcId: 12,
  id: '8901464828137340152',
  imageUrl: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
  jpLstDoorInfo: [],
  lstDoorInfo: [],
  next: '',
  pgRange: '1',
  prev: '',
  score: '',
  specialDealed: 'false',
  specialRuleId: '',
  status: '1',
  sum: 0
}
`},10665:function(e,n){n.Z=`// Clipboard \u526A\u8D34\u677F
import LocaleUtil from './../LocaleUtil' // \u56FD\u9645\u5316\u6570\u636E

const Clipboard = {
  // \u9009\u62E9\u5143\u7D20\u7684\u5185\u5BB9
  selectContent: function (element) {
    // \u9996\u5148\u521B\u5EFA\u4E00\u4E2A\u8303\u56F4
    let rangeToSelect = document.createRange()
    rangeToSelect.selectNodeContents(element)

    // \u9009\u62E9\u5185\u5BB9
    let selection = window.getSelection()
    selection.removeAllRanges()
    selection.addRange(rangeToSelect)
  },
  // \u4E3AexecCommand\u65B9\u6CD5\u521B\u5EFA\u4E00\u4E2A\u4E34\u65F6\u5143\u7D20
  createElementForExecCommand: function (textToClipboard) {
    let forExecElement = document.createElement('div')
    // \u653E\u7F6E\u5728\u53EF\u89C1\u533A\u57DF\u4E4B\u5916
    forExecElement.style.position = 'absolute'
    forExecElement.style.left = '-10000px'
    forExecElement.style.top = '-10000px'
    // \u5C06\u5FC5\u8981\u7684\u6587\u672C\u5199\u5165\u5143\u7D20\u5E76\u8FFD\u52A0\u5230\u6587\u6863\u4E2D
    forExecElement.textContent = textToClipboard
    document.body.appendChild(forExecElement)
    // contentEditable\u6A21\u5F0F\u5BF9\u4E8EFirefox\u4E2D\u7684execCommand\u65B9\u6CD5\u662F\u5FC5\u9700\u7684
    forExecElement.contentEditable = true

    return forExecElement
  },
  // \u590D\u5236\u5230\u526A\u8D34\u677F
  copy: function (input, params = {}) {
    let textToClipboard = input

    let success = true
    if (window.clipboardData) {
      // Internet Explorer
      window.clipboardData.setData('Text', textToClipboard)
    } else {
      // \u4E3AexecCommand\u65B9\u6CD5\u521B\u5EFA\u4E00\u4E2A\u4E34\u65F6\u5143\u7D20
      let forExecElement = this.createElementForExecCommand(textToClipboard)

      // \u9009\u62E9\u5143\u7D20\u7684\u5185\u5BB9 ('copy'\u65B9\u6CD5\u7684execCommand\u5728\u9009\u62E9\u4E0A\u8D77\u4F5C\u7528)
      this.selectContent(forExecElement)

      // UniversalXPConnect\u662FFirefox\u4E2D\u526A\u8D34\u677F\u8BBF\u95EE\u6240\u5FC5\u9700\u7684
      try {
        if (window.netscape && window.netscape.security) {
          window.netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect')
        }
        // \u5C06\u9009\u5B9A\u5185\u5BB9\u590D\u5236\u5230\u526A\u8D34\u677F
        // \u9002\u7528\u4E8EFirefox\u548CSafari 5\u4E4B\u524D\u7684\u7248\u672C
        success = document.execCommand('copy', false, null)
      } catch (e) {
        success = false
      }

      // \u5220\u9664\u4E34\u65F6\u5143\u7D20
      document.body.removeChild(forExecElement)
    }

    if (success) {
      if (params && params.success)
        params.success(
          params.successMsg ||
            LocaleUtil.locale('\u590D\u5236\u5230\u526A\u8D34\u677F\u6210\u529F', 'SeedsUI_copy_clipboard_success')
        )
    } else {
      if (params && params.fail)
        params.fail({
          errMsg:
            params.errorMsg ||
            LocaleUtil.locale('\u5F53\u524D\u8BBE\u5907\u4E0D\u5141\u8BB8\u8BBF\u95EE\u526A\u8D34\u677F', 'SeedsUI_copy_clipboard_refuse')
        })
    }
  }
}

export default Clipboard
`},14947:function(e,n){n.Z=`import Clipboard from './Clipboard.js'

export default Clipboard
`},91111:function(e,n){n.Z=`const hasOwn = {}.hasOwnProperty

export default function classNames() {
  let classes = ''

  for (let i = 0; i < arguments.length; i++) {
    const arg = arguments[i]
    if (arg) {
      classes = appendClass(classes, parseValue(arg))
    }
  }

  return classes
}

function parseValue(arg) {
  if (typeof arg === 'string') {
    return arg.trim()
  }

  if (typeof arg !== 'object') {
    return ''
  }

  if (Array.isArray(arg)) {
    return classNames.apply(null, arg)
  }

  if (
    arg.toString !== Object.prototype.toString &&
    !arg.toString.toString().includes('[native code]')
  ) {
    return arg.toString()
  }

  let classes = ''

  for (const key in arg) {
    if (hasOwn.call(arg, key) && arg[key]) {
      classes = appendClass(classes, key)
    }
  }

  return classes
}

function appendClass(value, newClass) {
  if (!newClass) {
    return value
  }

  return value ? value + ' ' + newClass : newClass
}
`},51904:function(e,n){n.Z=`import React from 'react'
import classNames from './classNames'

// Convert node to a React element
function getIconNode(
  node,
  {
    ParentNode,
    children,
    // Add base class when node is string
    className,
    style,
    // When node is function
    ...params
  } = {}
) {
  let Icon = getIcon(node, {
    children,
    // Add base class when node is string
    className,
    style,
    // When node is function
    ...params
  })

  if (Icon && ParentNode) {
    return <ParentNode>{Icon}</ParentNode>
  }

  return Icon
}

// Generate Icon
function getIcon(
  node,
  {
    children,
    // Add base class when node is string
    className,
    style,
    // When node is function
    ...params
  } = {}
) {
  if (typeof node === 'function') {
    let newNode = node({ children, className, style, ...params })
    if (newNode !== undefined) return newNode
  }

  if (React.isValidElement(node)) {
    return node
  }

  if (node && typeof node === 'string') {
    return (
      <div className={classNames(className, node)} style={style}>
        {children}
      </div>
    )
  }

  return null
}

export default getIconNode
`},92449:function(e,n){n.Z=`import React from 'react'

// Convert node to a React element
function getTextNode(
  text,
  {
    // Add base class when node is string
    className,
    style,
    // When node is function
    ...params
  } = {}
) {
  if (typeof text === 'function') {
    let newNode = text({ className, style, ...params })
    if (newNode !== undefined) return newNode
  }

  if (React.isValidElement(text)) {
    return text
  }

  if (typeof text === 'string' && (className || style)) {
    return (
      <div className={className} style={style}>
        {text}
      </div>
    )
  }

  if (typeof text === 'string') {
    return text
  }

  return null
}

export default getTextNode
`},64575:function(e,n){n.Z=`import preventDefault from './preventDefault'
import classNames from './classNames'
import getIconNode from './getIconNode'
import getTextNode from './getTextNode'

const DOMUtil = {
  preventDefault: preventDefault,
  classNames: classNames,
  getIconNode: getIconNode,
  getTextNode: getTextNode
}

export default DOMUtil
`},61242:function(e,n){n.Z=`function preventDefault(e) {
  e.preventDefault()
}

export default preventDefault
`},49738:function(e,n){n.Z=`import dayjs from 'dayjs'

function add(date, count, type) {
  if (count === 0 || typeof count !== 'number') return date

  if (type === 'date') {
    // eslint-disable-next-line
    type = 'day'
  }

  if (count > 0) {
    return dayjs(date).add(count, type).toDate()
  }

  return dayjs(date).subtract(Math.abs(count), type).toDate()
}

export default add
`},59032:function(e,n){n.Z=`// \u6BD4\u8F83\u5E74\u6708\u65E5,\u5927\u4E8E\u8FD4\u56DE1,\u7B49\u4E8E\u8FD4\u56DE0,\u5C0F\u4E8E\u8FD4\u56DE-1
function compareDate(d1, d2) {
  const year1 = d1.getFullYear()
  const month1 = d1.getMonth() // \u6CE8\u610F\uFF1A\u6708\u662F\u4ECE0\u5F00\u59CB\u7684
  const day1 = d1.getDate()

  const year2 = d2.getFullYear()
  const month2 = d2.getMonth()
  const day2 = d2.getDate()

  if (year1 !== year2) {
    return year1 > year2 ? 1 : -1
  } else if (month1 !== month2) {
    return month1 > month2 ? 1 : -1
  } else {
    if (day1 === day2) return 0
    return day1 > day2 ? 1 : -1
  }
}

export default compareDate
`},58141:function(e,n){n.Z=`// \u6BD4\u8F83\u5E74\u6708\u65E5\u65F6\uFF0C\u5927\u4E8E\u8FD4\u56DE1,\u7B49\u4E8E\u8FD4\u56DE0,\u5C0F\u4E8E\u8FD4\u56DE-1
function compareHour(d1, d2) {
  let date1 = new Date(d1)
  let date2 = new Date(d2)
  date1.setMinutes(0, 0, 0)
  date2.setMinutes(0, 0, 0)
  let t1 = date1.getTime()
  let t2 = date2.getTime()

  if (t1 === t2) return 0
  return t1 > t2 ? 1 : -1
}

export default compareHour
`},84567:function(e,n){n.Z=`// \u6BD4\u8F83\u5E74\u6708\u65E5\u65F6\u5206\uFF0C\u5927\u4E8E\u8FD4\u56DE1,\u7B49\u4E8E\u8FD4\u56DE0,\u5C0F\u4E8E\u8FD4\u56DE-1
function compareMinute(d1, d2) {
  let date1 = new Date(d1)
  let date2 = new Date(d2)
  date1.setSeconds(0, 0)
  date2.setSeconds(0, 0)
  let t1 = date1.getTime()
  let t2 = date2.getTime()

  if (t1 === t2) return 0
  return t1 > t2 ? 1 : -1
}

export default compareMinute
`},49717:function(e,n){n.Z=`// \u6BD4\u8F83\u5E74\u6708,\u5927\u4E8E\u8FD4\u56DE1,\u7B49\u4E8E\u8FD4\u56DE0,\u5C0F\u4E8E\u8FD4\u56DE-1
function compareMonth(d1, d2) {
  let year1 = d1.getFullYear()
  let year2 = d2.getFullYear()
  let month1 = d1.getMonth()
  let month2 = d2.getMonth()

  if (year1 !== year2) {
    return year1 > year2 ? 1 : -1
  } else {
    if (month1 === month2) return 0
    return month1 > month2 ? 1 : -1
  }
}

export default compareMonth
`},70017:function(e,n){n.Z=`import quarter from '../quarter'
// \u6BD4\u8F83\u5E74\u5B63\u5EA6,\u5927\u4E8E\u8FD4\u56DE1,\u7B49\u4E8E\u8FD4\u56DE0,\u5C0F\u4E8E\u8FD4\u56DE-1
function compareQuarter(d1, d2) {
  let year1 = d1.getFullYear()
  let year2 = d2.getFullYear()
  let q1 = quarter(d1)
  let q2 = quarter(d2)

  if (year1 !== year2) {
    return year1 > year2 ? 1 : -1
  } else {
    if (q1 === q2) return 0
    return q1 > q2 ? 1 : -1
  }
}

export default compareQuarter
`},42932:function(e,n){n.Z=`// \u6BD4\u8F83\u5E74\u6708\u65E5\u65F6\u5206\u79D2\uFF0C\u5927\u4E8E\u8FD4\u56DE1,\u7B49\u4E8E\u8FD4\u56DE0,\u5C0F\u4E8E\u8FD4\u56DE-1
function compareSecond(d1, d2) {
  let date1 = new Date(d1)
  let date2 = new Date(d2)
  date1.setMilliseconds(0)
  date2.setMilliseconds(0)
  let t1 = date1.getTime()
  let t2 = date2.getTime()

  if (t1 === t2) return 0
  return t1 > t2 ? 1 : -1
}

export default compareSecond
`},7823:function(e,n){n.Z=`import dayjs from 'dayjs'

// \u6BD4\u8F83\u5468\u6570,\u5927\u4E8E\u8FD4\u56DE1,\u7B49\u4E8E\u8FD4\u56DE0,\u5C0F\u4E8E\u8FD4\u56DE-1
function compareWeek(d1, d2) {
  let year1 = d1.getFullYear()
  let year2 = d2.getFullYear()
  let week1 = dayjs(d1).week()
  let week2 = dayjs(d2).week()

  if (year1 !== year2) {
    return year1 > year2 ? 1 : -1
  } else {
    if (week1 === week2) return 0
    return week1 > week2 ? 1 : -1
  }
}

export default compareWeek
`},27622:function(e,n){n.Z=`// \u6BD4\u8F83\u5E74\u4EFD,\u5927\u4E8E\u8FD4\u56DE1,\u7B49\u4E8E\u8FD4\u56DE0,\u5C0F\u4E8E\u8FD4\u56DE-1
function compareYear(d1, d2) {
  let year1 = d1.getFullYear()
  let year2 = d2.getFullYear()

  if (year1 === year2) return 0
  return year1 > year2 ? 1 : -1
}

export default compareYear
`},29822:function(e,n){n.Z=`import compareYear from './compareYear'
import compareQuarter from './compareQuarter'
import compareMonth from './compareMonth'
import compareWeek from './compareWeek'
import compareDate from './compareDate'
import compareHour from './compareHour'
import compareMinute from './compareMinute'
import compareSecond from './compareSecond'
// Partial compare
import partCompareHourMinute from './partCompareHourMinute'

// \u6BD4\u8F83\u5E74\u6708\u65E5,\u5927\u4E8E\u8FD4\u56DE1,\u7B49\u4E8E\u8FD4\u56DE0,\u5C0F\u4E8E\u8FD4\u56DE-1, compareUnit: 'year|quarter|month|week|date|day|hour|minute|second|partHourMinute'
function compare(d1, d2, compareUnit) {
  if (d1 instanceof Date === false || d2 instanceof Date === false) {
    return undefined
  }
  if (compareUnit === 'year') {
    return compareYear(d1, d2)
  }
  if (compareUnit === 'quarter') {
    return compareQuarter(d1, d2)
  }
  if (compareUnit === 'month') {
    return compareMonth(d1, d2)
  }
  if (compareUnit === 'week') {
    return compareWeek(d1, d2)
  }
  if (compareUnit === 'date') {
    return compareDate(d1, d2)
  }
  if (compareUnit === 'hour') {
    return compareHour(d1, d2)
  }
  if (compareUnit === 'minute' || compareUnit === 'datetime') {
    return compareMinute(d1, d2)
  }
  if (compareUnit === 'second') {
    return compareSecond(d1, d2)
  }
  // Partial compare hour minute
  if (compareUnit === 'partHourMinute' || compareUnit === 'time') {
    return partCompareHourMinute(d1, d2)
  }

  return compareDate(d1, d2)
}

export default compare
`},82537:function(e,n){n.Z=`// \u6BD4\u8F83\u65F6\u5206,\u683C\u5F0F:hh:mm,\u5927\u4E8E\u8FD4\u56DE1,\u7B49\u4E8E\u8FD4\u56DE0,\u5C0F\u4E8E\u8FD4\u56DE-1
function compareTime(d1, d2) {
  let hour1 = d1.getHours()
  let hour2 = d2.getHours()
  let minute1 = d1.getMinutes()
  let minute2 = d2.getMinutes()

  if (hour1 !== hour2) {
    return hour1 > hour2 ? 1 : -1
  } else {
    if (minute1 === minute2) return 0
    return minute1 > minute2 ? 1 : -1
  }
}

export default compareTime
`},34896:function(e,n){n.Z=`import dayjs from 'dayjs'

function diffDate(d1, d2) {
  return dayjs(d1).diff(dayjs(d2), 'day')
}

export default diffDate
`},24013:function(e,n){n.Z=`import dayjs from 'dayjs'

function diffHour(d1, d2) {
  return dayjs(d1).diff(dayjs(d2), 'hour')
}

export default diffHour
`},4896:function(e,n){n.Z=`import dayjs from 'dayjs'

function diffMinute(d1, d2) {
  return dayjs(d1).diff(dayjs(d2), 'minute')
}

export default diffMinute
`},85971:function(e,n){n.Z=`import dayjs from 'dayjs'

function diffMonth(d1, d2) {
  return dayjs(d1).diff(dayjs(d2), 'month')
}

export default diffMonth
`},9316:function(e,n){n.Z=`import dayjs from 'dayjs'

function diffQuarter(d1, d2) {
  return dayjs(d1).diff(dayjs(d2), 'quarter')
}

export default diffQuarter
`},29094:function(e,n){n.Z=`import dayjs from 'dayjs'

function diffSecond(d1, d2) {
  return dayjs(d1).diff(dayjs(d2), 'second')
}

export default diffSecond
`},4101:function(e,n){n.Z=`import dayjs from 'dayjs'

function diffYear(d1, d2) {
  return dayjs(d1).diff(dayjs(d2), 'year')
}

export default diffYear
`},3346:function(e,n){n.Z=`import diffYear from './diffYear'
import diffQuarter from './diffQuarter'
import diffMonth from './diffMonth'
import diffDate from './diffDate'
import diffHour from './diffHour'
import diffMinute from './diffMinute'
import diffSecond from './diffSecond'
// Partial diff
import partDiffHourMinute from './partDiffHourMinute'

// \u6BD4\u8F83\u5E74\u6708\u65E5,\u5927\u4E8E\u8FD4\u56DE1,\u7B49\u4E8E\u8FD4\u56DE0,\u5C0F\u4E8E\u8FD4\u56DE-1, diffUnit: 'year|quarter|month|week|date|day|hour|minute|second|partHourMinute'
function diff(d1, d2, diffUnit) {
  if (d1 instanceof Date === false || d2 instanceof Date === false) {
    return undefined
  }
  if (diffUnit === 'year') {
    return diffYear(d1, d2)
  }
  if (diffUnit === 'quarter') {
    return diffQuarter(d1, d2)
  }
  if (diffUnit === 'month') {
    return diffMonth(d1, d2)
  }
  if (diffUnit === 'hour') {
    return diffHour(d1, d2)
  }
  if (diffUnit === 'minute' || diffUnit === 'datetime') {
    return diffMinute(d1, d2)
  }
  if (diffUnit === 'second') {
    return diffSecond(d1, d2)
  }
  // Partial diff hour minute
  if (diffUnit === 'partHourMinute' || diffUnit === 'time') {
    return partDiffHourMinute(d1, d2)
  }

  return diffDate(d1, d2)
}

export default diff
`},67901:function(e,n){n.Z=`import dayjs from 'dayjs'

function diffTime(d1, d2) {
  let date1 = new Date(d1)
  date1.setYear(0)
  date1.setMonth(0, 0)
  date1.setSeconds(0, 0)

  let date2 = new Date(d2)
  date2.setYear(0)
  date2.setMonth(0, 0)
  date2.setSeconds(0, 0)

  return dayjs(date1).diff(dayjs(date2), 'minute')
}

export default diffTime
`},65962:function(e,n){n.Z=`// \u683C\u5F0F\u5316\u6587\u6863\u53C2\u8003: https://momentjs.cn/docs/#/displaying/

import dayjs from 'dayjs'

// \u5165\u53E3: \u683C\u5F0F\u5316\u65E5\u671F
function format(date, type) {
  if (date instanceof Date === false) {
    return ''
  }
  if (!type || typeof type !== 'string') {
    return dayjs(date).format('YYYY-MM-DD')
  }

  if (type === 'year') {
    return dayjs(date).format('YYYY')
  } else if (type === 'quarter') {
    return dayjs(date).format('YYYY-[Q]Q')
  } else if (type === 'month') {
    return dayjs(date).format('YYYY-MM')
  } else if (type === 'date') {
    return dayjs(date).format('YYYY-MM-DD')
  } else if (type === 'datetime') {
    return dayjs(date).format('YYYY-MM-DD HH:mm')
  } else if (type === 'time') {
    return dayjs(date).format('HH:mm')
  } else if (type === 'week') {
    return dayjs(date).format('YYYY-wo')
  }

  return dayjs(date).format(type)
}

export default format
`},19692:function(e,n){n.Z=`// \u83B7\u53D6\u5F53\u6708\u5929\u6570
function getDaysInMonth(date) {
  const currentDate = new Date(date instanceof Date ? date : null)
  const year = currentDate.getFullYear() // \u83B7\u53D6\u5F53\u524D\u5E74\u4EFD
  const month = currentDate.getMonth() // \u83B7\u53D6\u5F53\u524D\u6708\u4EFD\uFF080-11\uFF09

  // \u521B\u5EFA\u4E0B\u4E2A\u6708\u7684\u7B2C\u4E00\u5929\uFF0C\u5E76\u8BBE\u7F6E\u65E5\u671F\u4E3A0\uFF0C\u8FD9\u6837\u53EF\u4EE5\u83B7\u53D6\u4E0A\u4E2A\u6708\u7684\u6700\u540E\u4E00\u5929
  const lastDayOfCurrentMonth = new Date(year, month + 1, 0)

  // \u8FD4\u56DE\u5F53\u6708\u7684\u5929\u6570
  return lastDayOfCurrentMonth.getDate()
}

export default getDaysInMonth
`},42777:function(e,n){n.Z=`// \u83B7\u53D6\u5F53\u54687\u5929
function getWeekDates(currentDate, weekStart) {
  if (currentDate instanceof Date === false) return null

  const weekData = []
  const startOfWeek = new Date(currentDate)
  const dayOfWeek = startOfWeek.getDay() // \u83B7\u53D6\u5F53\u524D\u65E5\u671F\u662F\u661F\u671F\u51E0

  // \u8BA1\u7B97\u672C\u5468\u7684\u5468\u4E00
  if (weekStart === 'Monday') {
    const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek
    startOfWeek.setDate(currentDate.getDate() + mondayOffset)
  }
  // \u8BBE\u5B9A\u4E3A\u672C\u5468\u7684\u7B2C\u4E00\u5929\uFF08\u5468\u65E5\uFF09
  else {
    startOfWeek.setDate(currentDate.getDate() - dayOfWeek)
  }

  for (let i = 0; i < 7; i++) {
    const weekDay = new Date(startOfWeek)
    weekDay.setDate(startOfWeek.getDate() + i)
    weekData.push(weekDay)
  }

  return weekData
}

export default getWeekDates
`},53338:function(e,n){n.Z=`import plugin from './plugin'
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

// \u4E0Eadd\u529F\u80FD\u91CD\u590D, \u4F46\u4E3A\u4E86\u517C\u5BB9\u65E7\u7248\u672C, \u4FDD\u7559
import previousWeek from './previousWeek'
import nextWeek from './nextWeek'

// \u521D\u59CB\u5316\u63D2\u4EF6, \u6CA1\u6709\u63D2\u4EF6\u65E0\u6CD5\u4F7F\u7528\u6B64\u5E93
plugin()

// \u65E5\u671F\u5DE5\u5177\u7C7B
const dateUtil = {
  plugin: plugin,
  // \u8F6C\u4E3A\u65E5\u671F\u683C\u5F0F
  toDate: toDate,
  // \u8FB9\u754C\u65F6\u95F4, \u652F\u6301: 'year', 'quarter', 'month', 'week', 'date'
  startOrEnd: startOrEnd,
  // \u5468\u64CD\u4F5C
  getWeekDates: getWeekDates,
  previousWeek: previousWeek,
  nextWeek: nextWeek,
  // \u6708\u64CD\u4F5C
  getDaysInMonth: getDaysInMonth,
  // \u6BD4\u8F83\u5E74\u6708\u65E5,\u5927\u4E8E\u8FD4\u56DE1,\u7B49\u4E8E\u8FD4\u56DE0,\u5C0F\u4E8E\u8FD4\u56DE-1,\u9519\u8BEF\u8FD4\u56DEundefined
  compare: compare,
  diff: diff,
  add: add,
  // \u683C\u5F0F\u5316\u65E5\u671F
  format: format,
  // \u83B7\u53D6\u5F53\u524D\u5B63\u5EA6
  quarter: quarter,
  // \u5F53\u524D\u65F6\u533A\u5730\u5740\u540D\u79F0
  timeZonePlaceName: () => {
    return typeof Intl?.DateTimeFormat === 'function'
      ? new Intl.DateTimeFormat().resolvedOptions().timeZone
      : ''
  },
  // \u5F53\u524DUTC\u504F\u79FB\u91CF: \u5206\u949F\u6570\u662F\u56FD\u9645\u65F6\u533A\u6807\u51C6
  utcOffset: utcOffset,
  // \u5C06 UTC \u8F6C\u4E3A\u6307\u5B9A\u65F6\u533A
  utcToTimeZone: (utcDate, offset) => {
    if (utcDate && offset) {
      return utcToTimeZone(utcDate, offset)
    }
    return utcDate || new Date()
  },
  // \u5728\u4E24\u4E2A\u65F6\u533A\u95F4\u8F6C\u6362
  betweenTimeZones: (utcDate, fromOffset, toOffset) => {
    if (utcDate && fromOffset && toOffset) {
      return betweenTimeZones(utcDate, fromOffset, toOffset)
    }
    return utcDate || new Date()
  },
  // \u5C06\u6307\u5B9A\u65F6\u533A\u65F6\u95F4\u8F6C\u4E3A UTC
  timeZoneToUtc: (date, offset) => {
    if (date && offset) {
      return timeZoneToUtc(date, offset)
    }
    return date || new Date()
  },
  // \u89E3\u6790UTC\u504F\u79FB\u91CF
  parseUtcOffset: parseUtcOffset,
  // \u65F6\u533A\u5B57\u7B26\u4E32\u5316
  stringifyUtcOffset: stringifyUtcOffset
}

export default dateUtil
`},52736:function(e,n){n.Z=`// \u4E0B\u5468
function nextWeek(currentDate) {
  const nextWeekDate = new Date(currentDate)
  nextWeekDate.setDate(currentDate.getDate() + 7)
  return nextWeekDate
}

export default nextWeek
`},18488:function(e,n){n.Z=`import dayjs from 'dayjs'
// dayjs\u56FD\u9645\u5316, \u5E38\u7528\u63D2\u4EF6: https://day.js.org/docs/en/plugin/plugin
import isoWeek from 'dayjs/plugin/isoWeek'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import quarterOfYear from 'dayjs/plugin/quarterOfYear'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import utc from 'dayjs/plugin/utc'

// Add plugin
function plugin() {
  if (!window.dayjsPlugin) window.dayjsPlugin = []
  if (window.dayjsPlugin.includes('isoWeek')) return

  dayjs.extend(isoWeek) // \u7528\u4E8E\u89E3\u51B3format\u65F6\u62A5\u9519:isoWeek
  dayjs.extend(weekOfYear) // \u7528\u4E8E\u89E3\u51B3format\u65F6\u62A5\u9519:week
  dayjs.extend(quarterOfYear)
  dayjs.extend(advancedFormat) // \u652F\u6301\u9AD8\u7EA7format
  dayjs.extend(utc)
  window.dayjsPlugin.push('isoWeek', 'weekOfYear', 'quarterOfYear', 'advancedFormat')
}

export default plugin
`},86292:function(e,n){n.Z=`// \u4E0A\u5468
function previousWeek(currentDate) {
  const previousWeekDate = new Date(currentDate)
  previousWeekDate.setDate(currentDate.getDate() - 7)
  return previousWeekDate
}

export default previousWeek
`},54537:function(e,n){n.Z=`// \u83B7\u53D6\u5F53\u524D\u5B63\u5EA6
function quarter(date) {
  if (date instanceof Date === false) {
    return undefined
  }
  return Math.ceil((date.getMonth() + 1) / 3)
}

export default quarter
`},15361:function(e,n){n.Z=`import dayjs from 'dayjs'

// \u8FB9\u754C\u65F6\u95F4: 00:00:00\u621623:59:59
function startOrEnd(date, type, boundary = 'start') {
  if (boundary === 'start') {
    if (['year', 'quarter', 'month'].includes(type)) {
      return dayjs(date).startOf(type).toDate()
    }
    if (type === 'week') {
      return dayjs(date).startOf('isoWeek').toDate()
    }
    if (type === 'date') {
      return dayjs(date).startOf('day').toDate()
    }
    if (type === 'datetime') {
      date.setSeconds(0)
      return date
    }
    return date
  }

  if (boundary === 'end') {
    if (['year', 'quarter', 'month'].includes(type)) {
      return dayjs(date).endOf(type).toDate()
    }
    if (type === 'week') {
      return dayjs(date).endOf('isoWeek').toDate()
    }
    if (type === 'date') {
      return dayjs(date).endOf('day').toDate()
    }
    if (type === 'datetime') {
      date.setSeconds(59)
      return date
    }
    return date
  }

  return date
}

export default startOrEnd
`},80287:function(e,n){n.Z=`import dayjs from 'dayjs'

// \u8F6C\u4E3A\u65E5\u671F\u683C\u5F0F
function toDate(date) {
  // If date is time, convert to date with current date
  if (typeof date === 'string' && /^(\\d{1,2}:\\d{2})(:\\d{2})?$/.test(date)) {
    return dayjs(\`\${dayjs().format('YYYY-MM-DD')} \${date}\`).toDate()
  }
  return dayjs(date).toDate()
}

export default toDate
`},13491:function(e,n){n.Z=`// \u5728\u4E24\u4E2A\u65F6\u533A\u95F4\u8F6C\u6362
function betweenTimeZones(utcDate, fromOffset, toOffset) {
  if (!(utcDate instanceof Date) || isNaN(utcDate)) {
    return null
  }

  if (typeof fromOffset !== 'number' || typeof toOffset !== 'number') {
    return utcDate
  }

  const offsetDiff = toOffset - fromOffset

  const result = new Date(utcDate.getTime())
  result.setMinutes(result.getMinutes() + offsetDiff)

  return result
}

export default betweenTimeZones
`},18514:function(e,n){n.Z=`// \u89E3\u6790UTC\u504F\u79FB\u91CF
function parseUtcOffset(utcDescription) {
  const match = /^UTC([+-])(\\d{2}):(\\d{2})$/.exec(utcDescription)
  if (!match) {
    return null
  }
  const sign = match[1] === '+' ? 1 : -1
  const hours = parseInt(match[2], 10)
  const minutes = parseInt(match[3], 10)
  return sign * (hours * 60 + minutes)
}

export default parseUtcOffset
`},43213:function(e,n){n.Z=`// \u65F6\u533A\u5B57\u7B26\u4E32\u5316
function stringifyUtcOffset(utcOffset) {
  // \u6B63\u5411\u6216\u53CD\u5411\u504F\u79FB
  const sign = utcOffset >= 0 ? '+' : '-'

  // \u6BEB\u79D2\u6570\u8F6C\u6210\u65F6\u5206
  const totalMinutes = utcOffset
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  // \u683C\u5F0F\u5316\u8F93\u51FA\uFF08\u82E5\u5206\u949F\u4E3A0\u5219\u7701\u7565\uFF09UTC+08:00
  return \`UTC\${sign}\${hours.toString().padStart(2, '0')}:\${minutes.toString().padStart(2, '0')}\`
}
export default stringifyUtcOffset
`},43968:function(e,n){n.Z=`// \u5C06\u6307\u5B9A\u65F6\u533A\u65F6\u95F4\u8F6C\u4E3A UTC
function timeZoneToUtc(utcDate, offset) {
  // \u68C0\u67E5\u53C2\u6570
  if (!(utcDate instanceof Date) || isNaN(utcDate)) {
    return null
  }

  if (typeof offset !== 'number') {
    return utcDate
  }

  // \u590D\u5236\u539F date\uFF0C\u907F\u514D\u4FEE\u6539\u539F\u59CB\u5BF9\u8C61
  const result = new Date(utcDate.getTime())

  // \u8C03\u6574\u65F6\u95F4
  result.setMinutes(result.getMinutes() - offset)

  return result
}

export default timeZoneToUtc
`},8010:function(e,n){n.Z=`import dayjs from 'dayjs'
// UTC\u504F\u79FB\u91CF: \u5206\u949F\u6570\u662F\u56FD\u9645\u65F6\u533A\u6807\u51C6
function utcOffset() {
  return dayjs().utcOffset()
}

export default utcOffset
`},76691:function(e,n){n.Z=`// \u5C06 UTC \u8F6C\u4E3A\u6307\u5B9A\u65F6\u533A
function utcToTimeZone(utcDate, offset) {
  // \u68C0\u67E5\u53C2\u6570
  if (!(utcDate instanceof Date) || isNaN(utcDate)) {
    return null
  }

  if (typeof offset !== 'number') {
    return utcDate
  }

  // \u590D\u5236\u539F date\uFF0C\u907F\u514D\u4FEE\u6539\u539F\u59CB\u5BF9\u8C61
  const result = new Date(utcDate.getTime())

  // \u8C03\u6574\u65F6\u95F4
  result.setMinutes(result.getMinutes() + offset)

  return result
}

export default utcToTimeZone
`},79162:function(e,n){n.Z=`// Device
let Device = (function () {
  let userAgent = navigator.userAgent
  let ua = userAgent.toLowerCase()
  // \u5185\u6838
  let kernel = ''
  if (ua.indexOf('trident') > -1) {
    kernel = 'trident'
  } else if (ua.indexOf('presto') > -1) {
    kernel = 'presto'
  } else if (ua.indexOf('applewebkit') > -1) {
    kernel = 'webkit'
  } else if (ua.indexOf('gecko') > -1 && ua.indexOf('khtml') === -1) {
    kernel = 'gecko'
  }
  // \u8BBE\u5907
  let device = ''
  if (ua.match(/applewebkit.*mobile.*/)) {
    device = 'mobile'
  } else {
    device = 'pc'
  }
  // \u7CFB\u7EDF
  let os = ''
  let osVersion = ''
  let androidExp = ua.match(/android\\s*(\\d*\\.*\\d*)/)
  let iosExp = ua.match(/cpu iphone os (.*?) like mac os/)
  let harmonyExp = ua.match(/openharmony\\s*(\\d*\\.*\\d*)/)
  if (androidExp) {
    os = 'android'
    osVersion = androidExp[1]
  } else if (iosExp) {
    os = 'ios'
    osVersion = iosExp[1]
  } else if (harmonyExp) {
    os = 'harmony'
    osVersion = harmonyExp[1]
  }

  // \u5E73\u53F0
  let platform = ''
  let platformVersion = ''
  let platformMatch = null
  function updatePlatform() {
    // \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F
    if (ua.indexOf('miniprogram') > -1 && ua.indexOf('micromessenger') > -1) {
      if (ua.indexOf('wxwork') > -1) {
        platform = 'weworkMiniprogram'
        platformMatch = ua.match(/wxwork\\/([\\w.]*)/)
      } else if (ua.indexOf('micromessenger') > -1) {
        platform = 'wechatMiniprogram'
        platformMatch = ua.match(/micromessenger\\/([\\w.]*)/)
      }
      if (platformMatch && platformMatch[1]) platformVersion = platformMatch[1]
    }
    // \u4F01\u4E1A\u5FAE\u4FE1
    else if (ua.indexOf('wxwork') > -1) {
      platform = 'wework'
      platformMatch = ua.match(/wxwork\\/([\\w.]*)/)
      if (platformMatch && platformMatch[1]) platformVersion = platformMatch[1]
    }
    // \u5FAE\u4FE1
    else if (ua.indexOf('micromessenger') > -1) {
      platform = 'wechat'
      platformMatch = ua.match(/micromessenger\\/([\\w.]*)/)
      if (platformMatch && platformMatch[1]) platformVersion = platformMatch[1]
    }
    // \u652F\u4ED8\u5B9D
    else if (ua.indexOf('alipay') > -1) {
      platform = 'alipay'
      if (ua.indexOf('miniprogram') > -1) {
        platform = 'alipayMiniprogram'
      }
      platformMatch = ua.match(/alipayclient\\/([\\w.]*)/)
      if (platformMatch && platformMatch[1]) platformVersion = platformMatch[1]
    }
    // \u9489\u9489
    else if (ua.indexOf('dingtalk') > -1) {
      platform = 'dingtalk'
      platformMatch = ua.match(/dingtalk\\/([\\w.]*)/)
      if (platformMatch && platformMatch[1]) platformVersion = platformMatch[1]
    }
    // \u98DE\u4E66
    else if (ua.indexOf('lark') > -1) {
      platform = 'lark'
      platformMatch = ua.match(/lark\\/([\\w.]*)/)
      if (platformMatch && platformMatch[1]) platformVersion = platformMatch[1]
    }
    // QQ
    else if (ua.indexOf('mqqbrowser') > -1) {
      platform = 'qq'
    }
    // UC
    else if (ua.indexOf('ucbrowser') > -1) {
      platform = 'uc'
    }
    // \u5176\u5B83\u6D4F\u89C8\u5668
    else {
      platform = 'browser'
      const platformMatch = ua.match(/version\\/([\\d.]+)/)
      platformVersion = platformMatch?.[1] || ''
    }
  }
  updatePlatform()

  // \u4EE5\u4E0B\u4E24\u4E2A\u65B9\u6CD5\u90FD\u4E0D\u51C6\u5907
  // \u83B7\u5F97\u82F9\u679C\u673A\u578B
  function appleModel() {
    // \u83B7\u53D6\u8BBE\u5907\u578B\u53F7
    if (ua && /(iphone|ipad|ipod|ios)/i.test(ua)) {
      let m = ua.match(/mobile\\/([\\w.]*)/)
      if (m && m[1]) {
        return m[1]
      }
    }
    return ''
  }
  // \u83B7\u53D6\u82F9\u679C\u8BBE\u5907\u540D\u79F0
  function getAppleDevice() {
    // iPhoneX | iPhoneXS
    if (/iphone/gi.test(ua) && window.screen.height === 812 && window.screen.width === 375)
      return 'iPhoneX'
    // iPhoneXSM | iPhoneXSR
    if (/iphone/gi.test(ua) && window.screen.height === 896 && window.screen.width === 414)
      return 'iPhoneXSM'
    let model = appleModel()
    switch (model) {
      case '15b150':
        return 'iPhone6s'
      case '15b202':
        return 'iPhone6'
      case '13g36':
        return 'iPhone5SE'
      case '14e304':
        return 'iPhone6P'
      default:
        return ''
    }
  }

  // \u7F51\u7EDC\u76D1\u542C
  let onLineCallback
  function handleOnline(e) {
    onLineCallback(true)
  }
  function handleOffline(e) {
    onLineCallback(false)
  }
  function onLine(callback) {
    onLineCallback = callback
    window.removeEventListener('online', handleOnline, false)
    window.removeEventListener('offline', handleOffline, false)
    window.addEventListener('online', handleOnline, false)
    window.addEventListener('offline', handleOffline, false)
  }

  // \u83B7\u53D6\u5730\u5740\u680F\u53C2\u6570
  function getUrlParameter(argName, argSearch) {
    let url = window.location.href
    if (argSearch) url = argSearch
    let params = {}
    // \u5982\u679Curl\u4E2D\u5305\u542B?\u8BF4\u660E\u6709\u53C2\u6570
    if (url?.indexOf?.('?') !== -1) {
      if (!argName) return '?' + url.split('?')[1]
      // \u83B7\u53D6\u6240\u6709\u53C2\u6570options: \u5982?a=1&b=2\u8F6C\u4E3A['a=1','b=2']
      let options = url.split('?')[1]?.split('&')
      if (options?.length) {
        for (let i = 0; i < options.length; i++) {
          // \u83B7\u53D6\u5355\u9879option: \u5982'a=1'\u8F6C\u4E3A['a', '1']
          let option = options[i].split('=')
          if (option.length === 2) {
            if (argName) {
              if (argName === option[0]) return option[1]
            } else {
              params[option[0]] = option[1]
            }
          }
        }
      }
    }
    if (Object.keys(params).length) return params
    return ''
  }
  // \u83B7\u53D6\u5C4F\u5E55\u5BBD\u9AD8
  function getScreenWidth() {
    if (window.innerWidth) return window.innerWidth
    if (window.screen.width) return window.screen.width
    if (window.screen.availWidth) return window.screen.availWidth
  }
  function getScreenHeight() {
    if (window.innerHeight) return window.innerHeight
    if (window.screen.height) return window.screen.height
    if (window.screen.availHeight) return window.screen.availHeight
  }
  // \u83B7\u53D6\u624B\u673A\u578B\u53F7(ios\u8FD4\u56DE\u7248\u672C\u53F7, \u56E0\u4E3Aios\u53D6\u4E0D\u5230\u578B\u53F7)
  function getModel() {
    let model = ''
    if (userAgent.toLowerCase().match(/android\\s*(\\d*\\.*\\d*)/)) {
      let infos = userAgent.split(';')
      for (let info of infos) {
        if (info.indexOf('Build') !== -1) {
          info = info.trim()
          model = info.substring(0, info.indexOf(' Build'))
          break
        }
      }
      if (!model) model = ''
    } else {
      let iosVersion = ''
      let iosExp = userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/)
      if (iosExp && iosExp[1]) {
        iosVersion = iosExp[1].replace(/_/gim, '.')
      }
      model = \`iPhone \${iosVersion}\`
    }
    return model
  }

  return {
    /**
     * @deprecated since version 5.2.8
     * \u8BF7\u52FF\u4F7F\u7528\u6B64\u5C5E\u6027
     */
    appleDevice: getAppleDevice(),
    /**
     * @deprecated since version 5.2.8
     * \u8BF7\u52FF\u4F7F\u7528\u6B64\u5C5E\u6027
     */
    appVersion: window.navigator.appVersion,
    /**
     * @deprecated since version 5.2.8
     * \u8BF7\u52FF\u4F7F\u7528\u6B64\u5C5E\u6027
     */
    onLine: onLine,
    /**
     * @deprecated since version 5.2.8
     * \u8BF7\u52FF\u4F7F\u7528\u6B64\u5C5E\u6027
     */
    ua: ua,

    // \u5E94\u7528\u7A0B\u5E8F\u5224\u65AD
    language: (window.navigator.browserLanguage || window.navigator.language).toLowerCase(),
    protocol: window.location.protocol,
    host: window.location.host,
    domain: window.location.protocol + '//' + window.location.host,
    kernel: kernel,
    device: device,
    os: os,
    osVersion: osVersion,
    model: getModel(),
    platform: platform,
    platformVersion: platformVersion,
    isOnLine: window.navigator.onLine || true,
    userAgent: ua,
    getUrlParameter: getUrlParameter,
    screenWidth: getScreenWidth(),
    screenHeight: getScreenHeight(),
    // \u6BD4\u8F83\u7248\u672C\u53F7, -1\u5C0F\u4E8E 0\u7B49\u4E8E 1\u5927\u4E8E
    compareVersion: function (v1, v2, separator = '.') {
      // Comaptiable with IOS version
      if (v1.indexOf(separator) === -1 && v1.indexOf('_') !== -1) {
        // eslint-disable-next-line
        v1 = v1.replace(/_/gim, separator)
      }
      if (v2.indexOf(separator) === -1 && v2.indexOf('_') !== -1) {
        // eslint-disable-next-line
        v2 = v2.replace(/_/gim, separator)
      }

      const v1Parts = v1.split(separator).map(Number)
      const v2Parts = v2.split(separator).map(Number)

      const length = Math.max(v1Parts.length, v2Parts.length)

      for (let i = 0; i < length; i++) {
        const part1 = v1Parts[i] || 0 // \u5982\u679C\u6CA1\u6709\u8BE5\u90E8\u5206\uFF0C\u9ED8\u8BA4\u4E3A0
        const part2 = v2Parts[i] || 0 // \u5982\u679C\u6CA1\u6709\u8BE5\u90E8\u5206\uFF0C\u9ED8\u8BA4\u4E3A0

        if (part1 < part2) return -1
        if (part1 > part2) return 1
      }

      return 0 // \u5982\u679C\u6240\u6709\u90E8\u5206\u90FD\u76F8\u7B49
    }
  }
})()

export default Device
`},9658:function(e,n){n.Z=`import Device from './Device.js'

export default Device
`},51118:function(e,n){n.Z=`import locale from './locale'
import languageMap from './languageMap'
import setLocale from './setLocale'

const LocaleUtil = {
  locale: locale,
  languageMap: languageMap,
  setLocale: setLocale
}

export default LocaleUtil
`},95601:function(e,n){n.Z=`// United language list
// dayjs: https://github.com/iamkun/dayjs/tree/dev/src/locale
const languageMap = {
  // \u963F\u62C9\u4F2F\u8BED
  ar_EG: { dayjs: 'ar', translate: { google: 'ar', bing: 'ar' } },
  // \u963F\u585E\u62DC\u7586\u8BED
  az_AZ: { dayjs: 'az', translate: { google: 'az', bing: 'az' } },
  // \u4FDD\u52A0\u5229\u4E9A\u8BED
  bg_BG: { dayjs: 'bg', translate: { google: 'bg', bing: 'bg' } },
  // \u5B5F\u52A0\u62C9\u8BED\uFF08\u5B5F\u52A0\u62C9\u56FD\uFF09
  bn_BD: { dayjs: 'bn', translate: { google: 'bn', bing: 'bn' } },
  // \u767D\u4FC4\u7F57\u65AF\u8BED
  by_BY: { dayjs: 'by', translate: { google: 'by', bing: 'by' } },
  // \u52A0\u6CF0\u7F57\u5C3C\u4E9A\u8BED
  ca_ES: { dayjs: 'ca', translate: { google: 'ca', bing: 'ca' } },
  // \u6377\u514B\u8BED
  cs_CZ: { dayjs: 'cs', translate: { google: 'cs', bing: 'cs' } },
  // \u4E39\u9EA6\u8BED
  da_DK: { dayjs: 'da', translate: { google: 'da', bing: 'da' } },
  // \u5FB7\u8BED
  de_DE: { dayjs: 'de', translate: { google: 'de', bing: 'de' } },
  // \u5E0C\u814A\u8BED
  el_GR: { dayjs: 'el', translate: { google: 'el', bing: 'el' } },
  // \u82F1\u8BED
  en_GB: { dayjs: 'en-gb', translate: { google: 'en', bing: 'en' } },
  // \u82F1\u8BED\uFF08\u7F8E\u5F0F\uFF09
  en_US: { dayjs: 'en', translate: { google: 'en', bing: 'en' } },
  // \u897F\u73ED\u7259\u8BED
  es_ES: { dayjs: 'es', translate: { google: 'es', bing: 'es' } },
  // \u5DF4\u65AF\u514B\u8BED
  eu_ES: { dayjs: 'eu', translate: { google: 'eu', bing: 'eu' } },
  // \u7231\u6C99\u5C3C\u4E9A\u8BED
  et_EE: { dayjs: 'et', translate: { google: 'et', bing: 'et' } },
  // \u6CE2\u65AF\u8BED
  fa_IR: { dayjs: 'fa', translate: { google: 'fa', bing: 'fa' } },
  // \u82AC\u5170\u8BED
  fi_FI: { dayjs: 'fi', translate: { google: 'fi', bing: 'fi' } },
  // \u6CD5\u8BED\uFF08\u6BD4\u5229\u65F6\uFF09
  fr_BE: { dayjs: 'fr', translate: { google: 'fr', bing: 'fr' } },
  // \u6CD5\u8BED\uFF08\u52A0\u62FF\u5927\uFF09
  fr_CA: { dayjs: 'fr-ca', translate: { google: 'fr', bing: 'fr' } },
  // \u6CD5\u8BED\uFF08\u6CD5\u56FD\uFF09
  fr_FR: { dayjs: 'fr', translate: { google: 'fr', bing: 'fr' } },
  // \u7231\u5C14\u5170\u8BED
  ga_IE: { dayjs: 'ga', translate: { google: 'ga', bing: 'ga' } },
  // \u52A0\u5229\u897F\u4E9A\u8BED\uFF08\u897F\u73ED\u7259\uFF09
  gl_ES: { dayjs: 'gl', translate: { google: 'gl', bing: 'gl' } },
  // \u5E0C\u4F2F\u6765\u8BED
  he_IL: { dayjs: 'he', translate: { google: 'he', bing: 'he' } },
  // \u5370\u5730\u8BED
  hi_IN: { dayjs: 'hi', translate: { google: 'hi', bing: 'hi' } },
  // \u514B\u7F57\u5730\u4E9A\u8BED
  hr_HR: { dayjs: 'hr', translate: { google: 'hr', bing: 'hr' } },
  // \u5308\u7259\u5229\u8BED
  hu_HU: { dayjs: 'hu', translate: { google: 'hu', bing: 'hu' } },
  // \u4E9A\u7F8E\u5C3C\u4E9A
  hy_AM: { dayjs: 'hy', translate: { google: 'hy', bing: 'hy' } },
  // \u5370\u5EA6\u5C3C\u897F\u4E9A\u8BED
  id_ID: { dayjs: 'id', translate: { google: 'id', bing: 'id' } },
  // \u610F\u5927\u5229\u8BED
  it_IT: { dayjs: 'it', translate: { google: 'it', bing: 'it' } },
  // \u51B0\u5C9B\u8BED
  is_IS: { dayjs: 'is', translate: { google: 'is', bing: 'is' } },
  // \u65E5\u8BED
  ja_JP: { dayjs: 'ja', translate: { google: 'ja', bing: 'ja' } },
  // \u683C\u9C81\u5409\u4E9A\u8BED
  ka_GE: { dayjs: 'ka', translate: { google: 'ka', bing: 'ka' } },
  // \u9AD8\u68C9\u8BED
  km_KH: { dayjs: 'km', translate: { google: 'km', bing: 'km' } },
  // \u5317\u5E93\u5C14\u5FB7\u8BED
  kmr_IQ: { dayjs: 'kmr', translate: { google: 'kmr', bing: 'kmr' } },
  // \u5361\u7EB3\u8FBE\u8BED
  kn_IN: { dayjs: 'kn', translate: { google: 'kn', bing: 'kn' } },
  // \u54C8\u8428\u514B\u8BED
  kk_KZ: { dayjs: 'kk', translate: { google: 'kk', bing: 'kk' } },
  // \u97E9\u8BED/\u671D\u9C9C\u8BED
  ko_KR: { dayjs: 'ko', translate: { google: 'ko', bing: 'ko' } },
  // \u7ACB\u9676\u5B9B\u8BED
  lt_LT: { dayjs: 'lt', translate: { google: 'lt', bing: 'lt' } },
  // \u62C9\u8131\u7EF4\u4E9A\u8BED
  lv_LV: { dayjs: 'lv', translate: { google: 'lv', bing: 'lv' } },
  // \u9A6C\u5176\u987F\u8BED
  mk_MK: { dayjs: 'mk', translate: { google: 'mk', bing: 'mk' } },
  // \u9A6C\u62C9\u96C5\u62C9\u59C6\u8BED
  ml_IN: { dayjs: 'ml', translate: { google: 'ml', bing: 'ml' } },
  // \u8499\u53E4\u8BED
  mn_MN: { dayjs: 'mn', translate: { google: 'mn', bing: 'mn' } },
  // \u9A6C\u6765\u8BED (\u9A6C\u6765\u897F\u4E9A)
  ms_MY: { dayjs: 'ms', translate: { google: 'ms', bing: 'ms' } },
  // \u7F05\u7538\u8BED
  my_MM: { dayjs: 'my', translate: { google: 'my', bing: 'my' } },
  // \u632A\u5A01\u8BED
  nb_NO: { dayjs: 'nb', translate: { google: 'nb', bing: 'nb' } },
  // \u5C3C\u6CCA\u5C14\u8BED
  ne_NP: { dayjs: 'ne', translate: { google: 'ne', bing: 'ne' } },
  // \u8377\u5170\u8BED\uFF08\u6BD4\u5229\u65F6\uFF09
  nl_BE: { dayjs: 'nl-be', translate: { google: 'nl', bing: 'nl' } },
  // \u8377\u5170\u8BED
  nl_NL: { dayjs: 'nl', translate: { google: 'nl', bing: 'nl' } },
  // \u6CE2\u5170\u8BED
  pl_PL: { dayjs: 'pl', translate: { google: 'pl', bing: 'pl' } },
  // \u8461\u8404\u7259\u8BED(\u5DF4\u897F)
  pt_BR: { dayjs: 'pt-br', translate: { google: 'pt', bing: 'pt' } },
  // \u8461\u8404\u7259\u8BED
  pt_PT: { dayjs: 'pt', translate: { google: 'pt', bing: 'pt' } },
  // \u7F57\u9A6C\u5C3C\u4E9A\u8BED
  ro_RO: { dayjs: 'ro', translate: { google: 'ro', bing: 'ro' } },
  // \u4FC4\u7F57\u65AF\u8BED
  ru_RU: { dayjs: 'ru', translate: { google: 'ru', bing: 'ru' } },
  // \u50E7\u4F3D\u7F57\u8BED
  si_LK: { dayjs: 'si', translate: { google: 'si', bing: 'si' } },
  // \u65AF\u6D1B\u4F10\u514B\u8BED
  sk_SK: { dayjs: 'sk', translate: { google: 'sk', bing: 'sk' } },
  // \u585E\u5C14\u7EF4\u4E9A\u8BED
  sr_RS: { dayjs: 'sr', translate: { google: 'sr', bing: 'sr' } },
  // \u65AF\u6D1B\u6587\u5C3C\u4E9A\u8BED
  sl_SI: { dayjs: 'sl', translate: { google: 'sl', bing: 'sl' } },
  // \u745E\u5178\u8BED
  sv_SE: { dayjs: 'sv', translate: { google: 'sv', bing: 'sv' } },
  // \u6CF0\u7C73\u5C14\u8BED
  ta_IN: { dayjs: 'ta', translate: { google: 'ta', bing: 'ta' } },
  // \u6CF0\u8BED
  th_TH: { dayjs: 'th', translate: { google: 'th', bing: 'th' } },
  // \u571F\u8033\u5176\u8BED
  tr_TR: { dayjs: 'tr', translate: { google: 'tr', bing: 'tr' } },
  // \u571F\u5E93\u66FC
  tk_TK: { dayjs: 'tk', translate: { google: 'tk', bing: 'tk' } },
  // \u4E4C\u5C14\u90FD\u8BED (\u5DF4\u57FA\u65AF\u5766)
  ur_PK: { dayjs: 'ur', translate: { google: 'ur', bing: 'ur' } },
  // \u4E4C\u514B\u5170\u8BED
  uk_UA: { dayjs: 'uk', translate: { google: 'uk', bing: 'uk' } },
  // \u4E4C\u5179\u522B\u514B\u8BED\uFF08\u62C9\u4E01\u5B57\u6BCD\uFF09
  uz_UZ: { dayjs: 'uz', translate: { google: 'uz', bing: 'uz' } },
  // \u8D8A\u5357\u8BED
  vi_VN: { dayjs: 'vi', translate: { google: 'vi', bing: 'vi' } },
  // \u7B80\u4F53\u4E2D\u6587
  zh_CN: { dayjs: 'zh-cn', translate: { google: 'zh-CN', bing: 'zh-CN' } },
  // \u7E41\u4F53\u4E2D\u6587\uFF08\u4E2D\u56FD\u9999\u6E2F\uFF09
  zh_HK: { dayjs: 'zh-hk', translate: { google: 'zh-HK', bing: 'zh-HK' } },
  // \u7E41\u4F53\u4E2D\u6587\uFF08\u4E2D\u56FD\u53F0\u6E7E\uFF09
  zh_TW: { dayjs: 'zh-tw', translate: { google: 'zh-TW', bing: 'zh-TW' } }
}

module.exports = languageMap
`},84593:function(e,n){n.Z=`import { isValidElement } from 'react'

// Whether has React Node
function hasNode(nodes) {
  if (Array.isArray(nodes) && nodes.length) {
    for (let node of nodes) {
      if (isValidElement(node)) return true
    }
    return false
  }
  return isValidElement(nodes)
}

export default hasNode
`},8624:function(e,n){n.Z=`import React from 'react'
import hasNode from './hasNode'
import splitValue from './splitValue'

// values ['text', 'variable:0'], variables [1000], replace variable to text1000
function valuesToText(values, variables) {
  return values.map((value) => {
    // Replace variable
    if (value.startsWith('variable:')) {
      let variableName = value.replace('variable:', '')
      let newValue = variables?.[variableName]
      if (typeof newValue === 'number' || typeof newValue === 'boolean') {
        newValue = String(newValue)
      }
      return newValue || ''
    }

    // \u5982\u679C\u4E0D\u662Fvariable, \u76F4\u63A5\u8FD4\u56DE
    return value
  })
}

/**
 * \u56FD\u9645\u5316\u51FD\u6570
 * @param {String} remark '\u5171\u6709{0}\u4E2A\u5546\u54C1, \u5171\u67E5\u5230{1}\u9875'
 * @param {String} key resources\u4E2D\u7684key
 * @param {Array} variables {0: <div><div>}
 * @return {Node} \u8FD4\u56DEreactDOM
 */
function locale(remark, key, variables) {
  // Get key's value
  let localeData = window.seedsLocaleData || {}
  let value = key && typeof key === 'string' ? localeData[key || ''] : ''
  if (!value && typeof remark === 'string') {
    value = remark
  }

  // If no key's value, return the original remark
  if (!value) {
    return remark
  }

  // Split value('text{0}') to ['text', 'variable:0']
  let values = splitValue(value)

  // No node, return string
  if (!hasNode(variables)) {
    return valuesToText(values, variables).join('')
  }

  // Has node, return node
  return <>{valuesToText(values, variables)}</>
}

export default locale
`},89866:function(e,n){n.Z=`/**
 * Split value by variable: {0}{1}...
 * @param {String} value '\u5171\u6709{0}\u4E2A\u5546\u54C1, \u5171\u67E5\u5230{1}\u9875, \u6BCF\u9875{0}\u4E2A\u5546\u54C1'
 * @return {String} ['\u5171\u6709', 'variable:0', '\u4E2A\u5546\u54C1, \u5171\u67E5\u5230', 'variable:1', '\u9875, \u6BCF\u9875', 'variable:0', '\u4E2A\u5546\u54C1']
 */
function splitValue(value) {
  // \u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u6240\u6709\u7684 {\u5B57\u6BCD\u6570\u503C}\uFF0C\u5E76\u5C06\u5176\u66FF\u6362\u4E3A variable:\u5B57\u6BCD\u6570\u503C
  const result = value.split(/{(\\d+)}/).map((part, index) => {
    if (index % 2 === 1) {
      // \u5982\u679C\u662F\u5360\u4F4D\u7B26\u90E8\u5206\uFF0C\u683C\u5F0F\u5316\u4E3A 'variable:\u5B57\u6BCD\u6570\u503C'
      return \`variable:\${part}\`
    }
    // \u5982\u679C\u662F\u666E\u901A\u6587\u672C\u90E8\u5206\uFF0C\u4FDD\u6301\u539F\u6837
    return part
  })
  return result
}

export default splitValue
`},9446:function(e,n){n.Z=`import languageMap from '../languageMap'

// Set locale
function setLocale(language, data) {
  if (languageMap?.[language]) {
    window.seedsLocaleLanguage = language
    window.seedsLocaleData = data
  }
}

export default setLocale
`},63261:function(e,n){n.Z=`// \u662F\u5426\u4E3A\u5408\u6CD5\u6570\u503C
function isNumber(str) {
  // 1. \u57FA\u7840\u68C0\u67E5\uFF1A\u7A7A\u503C/\u7A7A\u767D\u5B57\u7B26
  if (typeof str !== 'string' || str.trim() === '') return false

  // 2. \u6B63\u5219\u5339\u914D\u6570\u503C\u683C\u5F0F\uFF08\u542B\u79D1\u5B66\u8BA1\u6570\u6CD5\uFF09
  const numericRegex = /^[-+]?(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?$/
  if (!numericRegex.test(str)) return false

  // 3. \u8F6C\u6362\u540E\u9A8C\u8BC1\uFF08\u6392\u9664BigInt\u548C\u7279\u6B8A\u503C\uFF09
  const num = Number(str)
  return !isNaN(num) && isFinite(num)
}

// \u63D0\u53D6\u6570\u503C
function extractNumber(str) {
  // \u5339\u914D\u5305\u542B\u5C0F\u6570\u70B9\u7684\u8FDE\u7EED\u6570\u503C
  const match = str.match(/-?\\d+(?:\\.\\d+)?/)
  return match ? match[0] : ''
}

/**
 * \u6570\u5B57\u5343\u5206\u4F4D/\u5C0F\u6570\u4F4D\u8865\u5145\u4E24\u4F4D
 * @param {Number} number
 * @param {Boolean} decimalThousands \u5C0F\u6570\u662F\u5426\u9700\u8981\u5343\u5206\u4F4D
 */
function thousands(number, decimalThousands) {
  // \u5C0F\u6570\u4F4D\u4E5F\u8981\u5343\u5206\u4F4D
  if (decimalThousands) {
    return String(number).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')
  }
  // \u5C0F\u6570\u4F4D\u4E0D\u8981\u5343\u5206\u4F4D
  let parts = String(number).split('.')
  parts[0] = parts[0].replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')
  return parts.join('.')
}

/**
 * \u5C0F\u6570\u56DB\u820D\u4E94\u5165 fixed(1.005, 2) = 1.00
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
 * \u5C0F\u6570\u56DB\u820D\u4E94\u5165 round(1.005, 2) = 1.01
 * @param {Number} number
 * @param {Number} precision
 * @returns
 */
function round(number, precision) {
  return Math.round(+number + 'e' + precision) / Math.pow(10, precision)
}

/**
 * \u6570\u5B57\u7CBE\u5EA6\u4E22\u5931
 * @param {Number} number
 * @param {Number} precision
 * @returns
 */
function strip(number, precision = 12) {
  return +parseFloat(number.toPrecision(precision))
}

/**
 * \u53CD\u5343\u5206\u4F4D
 * @param {Number} number
 * @returns
 */
function antiThousands(number) {
  return \`\${number || ''}\`.replace(/,/g, '')
}

/**
 * \u8BA1\u7B97\u60EF\u6027
 * @param {Number} cellSize \u5355\u9879\u9AD8\u5EA6
 * @param {Number} distance \u6EDA\u52A8\u7684\u603B\u8DDD\u79BB, \u8D1F\u6570\u4E3A\u53CD\u5411\u6ED1\u52A8
 * @param {Number} duration \u6EDA\u52A8\u7684\u603B\u65F6\u957F
 * @param {Number} currentPosition \u5F53\u524D\u4F4D\u7F6E
 * @param {Number} minPosition \u6700\u5C0F\u4F4D\u7F6E
 * @param {Number} maxPosition \u6700\u5927\u4F4D\u7F6E
 * @returns
 */
function inertia({ cellSize, distance, duration, currentPosition, minPosition, maxPosition }) {
  // \u6469\u64E6\u529B
  let friction = 0.002

  // \u60EF\u6027\u52A8\u753B\u65F6\u957F: \u6ED1\u52A8\u65F6\u957F \u548C \u6ED1\u52A8\u8DDD\u79BB
  let inertiaDuration = Math.abs((2 * distance) / duration / friction)

  // \u60EF\u6027\u8DDD\u79BB: \u4F7F\u7528\u516C\u5F0F\u7B97\u51FAoffset(\u65B0\u8DDD\u79BB)
  let inertiaRange = (friction / 2) * (inertiaDuration * inertiaDuration)
  if (distance < 0) {
    inertiaRange = -inertiaRange
  }

  // \u60EF\u6027\u4F4D\u7F6E: \u5F53\u524D\u4F4D\u7F6E + \u60EF\u6027\u8DDD\u79BB
  let inertiaPosition = Number(Math.abs(currentPosition)) + Number(inertiaRange || 0)

  // \u77EB\u6B63\u4F4D\u7F6E\u4E0E\u65F6\u957F
  // \u6700\u4E0A\u9762
  if (typeof minPosition === 'number' && inertiaPosition < minPosition) {
    // Math.abs(Math.round(inertiaPosition)) - Math.abs(Math.round(minPosition))
    inertiaDuration = 300
    inertiaPosition = minPosition
  }
  // \u6700\u4E0B\u9762
  else if (typeof maxPosition === 'number' && inertiaPosition > maxPosition) {
    inertiaDuration = 300
    inertiaPosition = maxPosition
  }
  // \u5728\u4E2D\u95F4
  else {
    let remainder = inertiaPosition % cellSize
    if (remainder !== 0) {
      // \u7B97\u51FA\u6BD4\u4F8B
      let divided = Math.round(inertiaPosition / cellSize)
      // \u5BF9\u51C6\u4F4D\u7F6E
      inertiaPosition = cellSize * divided
    }
  }

  // \u8FD4\u56DE\u503C
  return {
    duration: Math.round(inertiaDuration),
    position: Math.round(inertiaPosition),
    index: Math.abs(inertiaPosition / cellSize)
  }
}

// eslint-disable-next-line
const MathUtil = { isNumber, extractNumber, round, fixed, strip, thousands, antiThousands, inertia }

export default MathUtil
`},74698:function(e,n){n.Z=`import MathUtil from './MathUtil.js'

export default MathUtil
`},93149:function(e,n){n.Z=`import isEmpty from './isEmpty'

const ObjectUtil = {
  isEmpty
}

export default ObjectUtil
`},9006:function(e,n){n.Z=`import _ from 'lodash'

function isEmpty(value) {
  // \u5904\u7406 Date \u7C7B\u578B\uFF1A\u68C0\u67E5\u662F\u5426\u4E3A\u65E0\u6548\u65E5\u671F
  if (value instanceof Date) {
    return isNaN(value.getTime())
  }
  // \u5176\u4ED6\u7C7B\u578B\u4F7F\u7528 Lodash \u7684\u9ED8\u8BA4\u903B\u8F91
  return _.isEmpty(value)
}

export default isEmpty
`}}]);
