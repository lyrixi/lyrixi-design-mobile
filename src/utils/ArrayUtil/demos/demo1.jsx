import React from 'react'
import { Clipboard, Toast } from 'lyrixi-design-mobile'

export default () => {
  function handleClick() {
    Clipboard.copy('https://res.waiqin365.com/d/waiqin365_h5/seedsui/', {
      onSuccess: () => {
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
