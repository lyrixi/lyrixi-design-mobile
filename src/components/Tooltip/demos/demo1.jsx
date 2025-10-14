import React from 'react'
import { Tooltip } from 'lyrixi-design-mobile'

export default () => {
  return (
    <>
      <Tooltip
        content={<p>123412341234</p>}
        onOpen={() => {
          console.log('visible:', true)
        }}
        onClose={() => {
          console.log('visible:', false)
        }}
      >
        <div style={{ margin: 100 }}>点击</div>
      </Tooltip>
    </>
  )
}
