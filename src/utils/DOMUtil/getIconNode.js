import React from 'react'
import classNames from './classNames'

// Convert node to a React element
function getIconNode(
  node,
  {
    ParentNode,
    children,
    // Add base class when node is string
    className,
    style,
    // When node is function
    ...params
  } = {}
) {
  let Icon = getIcon(node, {
    children,
    // Add base class when node is string
    className,
    style,
    // When node is function
    ...params
  })

  if (Icon && ParentNode) {
    return <ParentNode>{Icon}</ParentNode>
  }

  return Icon
}

// Generate Icon
function getIcon(
  node,
  {
    children,
    // Add base class when node is string
    className,
    style,
    // When node is function
    ...params
  } = {}
) {
  if (typeof node === 'function') {
    let newNode = node({ children, className, style, ...params })
    if (newNode !== undefined) return newNode
  }

  if (React.isValidElement(node)) {
    return node
  }

  if (node && typeof node === 'string') {
    return (
      <div className={classNames(className, node)} style={style}>
        {children}
      </div>
    )
  }

  return null
}

export default getIconNode
