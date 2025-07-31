import React from 'react'
import { Layout, Typography } from 'lyrixi-design-mobile'

export default () => {
  return (
    <Layout className="full">
      <Layout.Main>
        {Typography.getDisplayValue([
          { id: 'option1', name: 'Option1' },
          { id: 'option2', name: 'Option2' }
        ])}
        <Typography.Amount currencySymbol="¥">1111111.11111</Typography.Amount>
      </Layout.Main>
    </Layout>
  )
}
