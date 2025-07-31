import React from 'react'

import Layout from './../../Layout'
import Paragraph from './../components/Paragraph'

const List = ({ animated, divider, listLength = 8, paragraphLength = 2, ...props }) => {
  return (
    <Layout className="full" {...props}>
      <Layout.Main className="overflow-hidden">
        {Array.from({ length: listLength }).map((_, index) => (
          <Paragraph divider={divider} key={index} length={paragraphLength} animated={animated} />
        ))}
      </Layout.Main>
    </Layout>
  )
}

export default List
