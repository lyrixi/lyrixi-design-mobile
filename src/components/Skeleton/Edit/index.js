import React from 'react'

import Layout from './../../Layout'
import Paragraph from './../components/Paragraph'

const Edit = ({ animated, divider, listLength = 8, paragraphLength = 6, ...props }) => {
  return (
    <Layout className="full" {...props}>
      <Layout.Main className="overflow-hidden">
        {Array.from({ length: listLength }).map((_, index) => (
          <Paragraph
            key={index}
            divider={divider}
            length={paragraphLength}
            animated={animated}
            titleProps={{
              style: {
                width: '75px'
              }
            }}
            oddProps={{ style: { width: '106px', marginTop: '16px' } }}
          />
        ))}
      </Layout.Main>
    </Layout>
  )
}

export default Edit
