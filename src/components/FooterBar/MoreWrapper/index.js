import React, { useState } from 'react'

// 内库使用-start
import ActionSheet from './../../ActionSheet'
// 内库使用-end

/* 测试使用-start
import { ActionSheet } from 'lyrixi-design-mobile'
测试使用-end */

// More功能的包装组件
export default function MoreWrapper({ children, more, onClick, ...props }) {
  const [visible, setVisible] = useState(false)

  function handleClick(e) {
    onClick && onClick(e)
    if (Array.isArray(more) && more.length) {
      setVisible(true)
    }
  }

  const hasMore = Array.isArray(more) && more.length

  return (
    <>
      {React.cloneElement(children, {
        ...props,
        onClick: handleClick
      })}

      {hasMore ? (
        <ActionSheet.Modal visible={visible} list={more} onVisibleChange={setVisible} />
      ) : null}
    </>
  )
}