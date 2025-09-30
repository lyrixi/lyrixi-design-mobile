import React from 'react'

import Page from './../../Page'
import Paragraph from './../components/Paragraph'
import Tabs from './../components/Tabs'

const Detail = ({ animated, divider, listLength = 2, paragraphLength = 10, ...props }) => {
  return (
    <Page {...props}>
      <Page.Main className="overflow-hidden">
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
      </Page.Main>
    </Page>
  )
}

export default Detail
