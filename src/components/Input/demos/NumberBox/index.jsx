import React, { useState } from 'react'
import { Layout, MathUtil, Divider, Card, Input } from 'lyrixi-design-mobile'

export default () => {
  const [value, setValue] = useState('2.10')
  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>Size XS</Divider>
        <Card className="padding-horizontal-l padding-vertical-l">
          <Input.NumberBox
            className="xs"
            placeholder="Size xs"
            value={value}
            onChange={setValue}
            precision={2}
            maxLength={8}
            min={0.1}
            trim={true}
            allowClear
          />
        </Card>

        <Divider>Size S</Divider>
        <Card className="padding-horizontal-l padding-vertical-l">
          <Input.NumberBox
            className="s"
            placeholder="Size s"
            value={value}
            onChange={setValue}
            precision={2}
            maxLength={8}
            min={0.1}
            trim={true}
            allowClear
          />
        </Card>

        <Divider>Size M</Divider>
        <Card className="padding-horizontal-l padding-vertical-l">
          <Input.NumberBox
            className="radius-m"
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
            //   console.log('得到的值:', val)
            //   setValue(val)
            // }}
          />
        </Card>

        <Divider>Size L</Divider>
        <Card className="padding-horizontal-l padding-vertical-l">
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
        </Card>

        <Divider>Size XL</Divider>
        <Card className="padding-horizontal-l padding-vertical-l">
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
        </Card>
      </Layout.Main>
    </Layout>
  )
}
