import React from 'react'
import { Layout, Progress, Divider, Card } from 'lyrixi-design-mobile'

const BasicDemo = () => {
  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>基础用法</Divider>
        <Card>
          <Progress.Circle percent={75}>
            <span>75%</span>
          </Progress.Circle>
        </Card>

        <Divider>Size</Divider>
        <Card>
          <Progress.Circle percent={60} size={50}>
            <span>60%</span>
          </Progress.Circle>

          <Progress.Circle
            percent={60}
            size={80}
            style={{
              '--seed-progress-track-width': '8px'
            }}
          >
            <span className="font-size-xl">60%</span>
          </Progress.Circle>

          <Progress.Circle
            percent={60}
            size={100}
            style={{
              '--seed-progress-track-width': '10px'
            }}
          >
            <span className="font-size-xxl">60%</span>
          </Progress.Circle>
        </Card>

        <Divider>Color</Divider>
        <Card>
          <Progress.Circle
            percent={80}
            style={{
              '--seed-progress-fill-color': '#722ed1',
              '--seed-progress-bg-color': '#f9f0ff'
            }}
          >
            <span>80%</span>
          </Progress.Circle>

          <Progress.Circle
            percent={45}
            style={{
              '--seed-progress-fill-color': '#fa8c16',
              '--seed-progress-bg-color': '#fff7e6'
            }}
          >
            <span>45%</span>
          </Progress.Circle>

          <Progress.Circle percent={100} className="success">
            <span className="color-success">Ok</span>
          </Progress.Circle>

          <Progress.Circle percent={100} className="danger">
            <span className="color-danger">Error</span>
          </Progress.Circle>
        </Card>
      </Layout.Main>
    </Layout>
  )
}

export default BasicDemo
