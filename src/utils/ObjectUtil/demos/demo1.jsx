import React from 'react'
import vconsole from 'vconsole'

import { ObjectUtil, Divider, Layout } from 'lyrixi-design-mobile'

new vconsole()

export default () => {
  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>ObjectUtil</Divider>
        {ObjectUtil.isEmpty({}) ? '{} is empty' : '{} is not empty'}
        {ObjectUtil.isEmpty(new Date()) ? 'new date is empty' : 'new date is not empty'}
      </Layout.Main>
    </Layout>
  )
}
