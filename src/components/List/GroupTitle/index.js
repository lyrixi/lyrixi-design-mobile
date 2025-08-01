import React from 'react'

// 内库使用-start
import IndexBar from './../../IndexBar'
// 内库使用-end

/* 测试使用-start
import { IndexBar } from 'lyrixi-design-mobile'
测试使用-end */

// 获取分组标题
function GroupTitle({ anchor, title, description, ...props }) {
  let TitleNode = (
    <>
      {title && <div className="list-title">{title}</div>}
      {description && <div className="list-description">{description}</div>}
    </>
  )

  if (anchor) {
    return (
      <IndexBar.Anchor className="list-divider" {...(props || {})} name={anchor}>
        {TitleNode}
      </IndexBar.Anchor>
    )
  }

  return (
    <div className="list-divider" {...(props || {})}>
      {TitleNode}
    </div>
  )
}

export default GroupTitle
