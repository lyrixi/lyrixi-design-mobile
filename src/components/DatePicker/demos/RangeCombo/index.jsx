import React, { useState } from 'react'
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
                  content: `Are you sure?`,
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
