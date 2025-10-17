import React, { forwardRef } from 'react'
import Block from './Block'

const Tabs = ({ length, animated = true, tabClassName, tabStyle, ...props }, ref) => {
  return (
    <div className={`skeleton-tabs`} ref={ref} {...props}>
      {Array.from({ length: length || 4 }).map((_, index) => (
        <Block
          key={index}
          animated={animated}
          style={tabStyle}
          className={`skeleton-tab skeleton-block-darken${
            tabClassName ? ' ' + tabClassName : ''
          }`}
        />
      ))}
    </div>
  )
}

export default forwardRef(Tabs)
