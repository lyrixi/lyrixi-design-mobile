import React from 'react'
import { Request, Toast } from 'lyrixi-design-mobile'

export default () => {
  async function handleClick() {
    let response = await Request.get(
      'https://res.waiqin365.com/p/platform/district/en_US/86.json',
      null,
      {
        cacheKey: '0'
      }
    )
    console.log(response)
  }
  return (
    <>
      <div onClick={handleClick}>Request by cacheKey</div>
    </>
  )
}
