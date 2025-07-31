import React from 'react'

// Convert node to a React element
function getTextNode(
  text,
  {
    // Add base class when node is string
    className,
    style,
    // When node is function
    ...params
  } = {}
) {
  if (typeof text === 'function') {
    let newNode = text({ className, style, ...params })
    if (newNode !== undefined) return newNode
  }

  if (React.isValidElement(text)) {
    return text
  }

  if (typeof text === 'string' && (className || style)) {
    return (
      <div className={className} style={style}>
        {text}
      </div>
    )
  }

  if (typeof text === 'string') {
    return text
  }

  return null
}

export default getTextNode
