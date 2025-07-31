import React from 'react'
import { Request, Toast } from 'lyrixi-design-mobile'

export default () => {
  async function handleClick() {
    let response = await Request.get(
      'https://res.waiqin365.com/p/platform/district/zh_CN/86.json.info'
    )
    console.log(response)
  }
  return (
    <>
      <div onClick={handleClick}>Request get</div>
    </>
  )
}
