import React from 'react'

import Layout from './../../Layout'
import Paragraph from './../components/Paragraph'
import Tabs from './../components/Tabs'

const Detail = ({ animated, divider, listLength = 2, paragraphLength = 10, ...props }) => {
  return (
    <Layout className="full" {...props}>
      <Layout.Main className="overflow-hidden">
        <Paragraph
          divider={divider}
          titleProps={{
            style: {
              width: '100px'
            }
          }}
          avatarProps={{}}
        />
        <Tabs />
        {Array.from({ length: listLength }).map((_, index) => (
          <Paragraph
            divider={divider}
            key={index}
            length={paragraphLength}
            animated={animated}
            oddProps={{ style: { width: '73px' } }}
          />
        ))}
      </Layout.Main>
    </Layout>
  )
}

export default Detail
