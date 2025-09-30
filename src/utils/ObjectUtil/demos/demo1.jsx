import React from 'react'
import vconsole from 'vconsole'

import { ObjectUtil, Divider, Page } from 'lyrixi-design-mobile'

new vconsole()

export default () => {
  return (
    <Page className="full">
      <Page.Main>
        <Divider>ObjectUtil</Divider>
        {ObjectUtil.isEmpty({}) ? '{} is empty' : '{} is not empty'}
        {ObjectUtil.isEmpty(new Date()) ? 'new date is empty' : 'new date is not empty'}
      </Page.Main>
    </Page>
  )
}
