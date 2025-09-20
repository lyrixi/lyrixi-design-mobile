import React from 'react'
import { Logger, Layout, Button, Input, Card, Divider, Form } from 'lyrixi-design-mobile'
import upload from './upload'

export default () => {
  return (
    <Layout className="full">
      <Layout.Main>
        <Card>
          <Divider>Function</Divider>
          <div style={{ margin: '0 12px' }}>
            <Button
              className="margin-vertical-l margin-horizontal-m"
              radius="m"
              onClick={async () => {
                let isOK = await Logger.config({
                  types: ['indexedDB', 'webSQL']
                })
                console.log(`Config successfully:`, isOK)
              }}
            >
              Logger.Config to cover console.info
            </Button>
            <Button
              className="margin-vertical-l margin-horizontal-m"
              radius="m"
              onClick={() => {
                console.info('test log 1')
                console.info('test log 2')
                console.info('test log 3')
              }}
            >
              console.info
            </Button>
            <Button
              className="margin-vertical-l margin-horizontal-m"
              radius="m"
              onClick={async () => {
                await Logger.setLogs(['test'])
                console.log('Set logs successfully')
              }}
            >
              Logger.setLogs
            </Button>
            <br />
            <Button
              className="margin-vertical-l margin-horizontal-m"
              radius="m"
              onClick={async () => {
                const logs = await Logger.getLogs()
                console.log('获取所有日志成功:', logs)
              }}
            >
              Logger.getLogs (All)
            </Button>
            <Button
              className="margin-vertical-l margin-horizontal-m"
              radius="m"
              onClick={async () => {
                const today = new Date()
                const logs = await Logger.getLogs(today)
                console.log('获取今日日志成功:', logs)
              }}
            >
              Logger.getLogs (Today)
            </Button>
            <Button
              className="margin-vertical-l margin-horizontal-m"
              radius="m"
              onClick={async () => {
                await Logger.clearLogs()
                console.log('Clear logs successfully')
              }}
            >
              Logger.clearLogs (All)
            </Button>
            <Button
              className="margin-vertical-l margin-horizontal-m"
              radius="m"
              onClick={async () => {
                const today = new Date()
                await Logger.clearLogs(today)
                console.log(`Clear logs for ${today.toISOString().split('T')[0]} successfully`)
              }}
            >
              Logger.clearLogs (Today)
            </Button>
            <Button
              className="margin-vertical-l margin-horizontal-m"
              radius="m"
              onClick={async () => {
                const result = await Logger.uploadLogs(upload)
                console.log(`Result:`, result)
              }}
            >
              Logger.uploadLogs
            </Button>
          </div>
        </Card>
      </Layout.Main>
    </Layout>
  )
}
