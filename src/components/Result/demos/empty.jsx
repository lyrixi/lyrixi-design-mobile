import React from 'react'
import { Layout, Result, Button, LocaleUtil } from 'lyrixi-design-mobile'

export default () => {
  return (
    <Layout className="full">
      <Layout.Main>
        <Result className="full" status={'empty'} />
      </Layout.Main>
    </Layout>
  )
}
