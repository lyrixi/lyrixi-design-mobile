import React from 'react'
import { Tooltip } from 'lyrixi-design-mobile'

export default () => {
  return (
    <>
      <Tooltip
        content={<p>123412341234</p>}
        onVisibleChange={(visible) => {
          console.log('visible:', visible)
        }}
      >
        <div style={{ margin: 100 }}>点击</div>
      </Tooltip>
    </>
  )
}
