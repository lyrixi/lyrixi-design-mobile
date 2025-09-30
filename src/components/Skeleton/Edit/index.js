import React from 'react'

import Page from './../../Page'
import Paragraph from './../components/Paragraph'

const Edit = ({ animated, divider, listLength = 8, paragraphLength = 6, ...props }) => {
  return (
    <Page {...props}>
      <Page.Main className="overflow-hidden">
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
      </Page.Main>
    </Page>
  )
}

export default Edit
