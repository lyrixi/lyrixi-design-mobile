import React from 'react'

// 图片显示
const RemainCount = ({ count }) => {
  return <div className={`image-item-remain-count`}>+{count + 1}</div>
}

export default RemainCount
