import React, { useState } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

// 内库使用-start
import ActionSheet from './../../ActionSheet'
// 内库使用-end

/* 测试使用-start
import { ActionSheet } from 'lyrixi-design-mobile'
测试使用-start */

// 图文组合
export default function FooterBarTab({ disabled, name, icon, more, onClick, ...props }) {
  // ActionSheet
  const [visible, setVisible] = useState(false)
  function handleClick(e) {
    onClick && onClick(e)
    if (Array.isArray(more) && more.length) {
      setVisible(true)
    }
  }

  let hasMore = Array.isArray(more) && more.length
  let defaultIcon = hasMore ? 'footerbar-tab-icon-more' : ''

  return (
    <>
      <div
        {...props}
        className={DOMUtil.classNames(
          'footerbar-tab',
          props?.className,
          disabled ? 'disabled' : ''
        )}
        onClick={handleClick}
      >
        <span className={`footerbar-tab-icon`}>
          {DOMUtil.getIconNode(icon || defaultIcon, { name, ...props })}
        </span>
        <div className="footerbar-tab-name">{name}</div>
      </div>

      {hasMore ? (
        <ActionSheet.Modal visible={visible} list={more} onVisibleChange={setVisible} />
      ) : null}
    </>
  )
}
