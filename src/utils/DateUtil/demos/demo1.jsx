import React from 'react'
import { Layout, Card, Divider, DateUtil } from 'lyrixi-design-mobile'

export default () => {
  return (
    <Layout className="full">
      <Layout.Main>
        <Card>
          <Divider>toDate</Divider>
          <div
            style={{ margin: '0 12px' }}
            onClick={() => {
              console.log(DateUtil.toDate('2023-10-01 12:01:36'))
              console.log(DateUtil.toDate('12:01:36'))
              console.log(DateUtil.toDate('12:01'))
            }}
          >
            Click to Date
          </div>
        </Card>

        <Card>
          <Divider>Get UTC</Divider>
          <div
            style={{ margin: '0 12px' }}
            onClick={() => {
              let zone = DateUtil.timeZonePlaceName()
              console.log('zone:', zone)
              let utcOffset = DateUtil.utcOffset()
              console.log('utcOffset:', utcOffset)
              let utcDescription = DateUtil.stringifyUtcOffset(utcOffset)
              console.log('utcDescription:', utcDescription)
              let currentUtcDate = DateUtil.utcToTimeZone(new Date('2025-05-09 01:01:36'))
              console.log('Current date:', DateUtil.format(currentUtcDate, 'YYYY-MM-DD hh:mm:ss'))
              let utcToTimeZone = DateUtil.utcToTimeZone(
                new Date('2025-05-09 01:01:36'),
                DateUtil.parseUtcOffset('UTC+08:00')
              )
              console.log(
                'Utc to Timezone UTC+8:',
                DateUtil.format(utcToTimeZone, 'YYYY-MM-DD hh:mm:ss')
              )
              let utcToDate2 = DateUtil.betweenTimeZones(
                new Date('2025-05-09 01:01:36'),
                DateUtil.parseUtcOffset('UTC+08:00'),
                DateUtil.parseUtcOffset('UTC+09:00')
              )
              console.log(
                'Between TimeZones UTC+8 To UTC+9:',
                DateUtil.format(utcToDate2, 'YYYY-MM-DD hh:mm:ss')
              )
              let dateToUtc = DateUtil.timeZoneToUtc(
                new Date('2025-05-09 01:01:36'),
                DateUtil.parseUtcOffset('UTC+08:00')
              )
              console.log('Timezone to Utc:', DateUtil.format(dateToUtc, 'YYYY-MM-DD hh:mm:ss'))
            }}
          >
            Click to get UTC infomation
          </div>
        </Card>
      </Layout.Main>
    </Layout>
  )
}
