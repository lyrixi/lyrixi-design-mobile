import React from 'react'
import { DOMUtil } from 'lyrixi-design-mobile'

export default () => {
  function handleClick() {
    console.log(
      DOMUtil.classNames(undefined, null, ' ', 'className1', 'className2', 'className3 className4')
    )
  }
  return (
    <>
      <div onClick={handleClick}>Generate class</div>
    </>
  )
}
