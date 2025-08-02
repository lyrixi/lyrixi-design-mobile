import React from 'react'
import { Clipboard, Toast } from 'lyrixi-design-mobile'

export default () => {
  function handleClick() {
    Clipboard.copy('https://lyrixi.github.io/lyrixi-design-mobile/', {
      success: () => {
        Toast.show({ content: 'Copy to clipboard success!' })
      }
    })
  }
  return (
    <>
      <div onClick={handleClick}>Copy to clipboard</div>
    </>
  )
}
