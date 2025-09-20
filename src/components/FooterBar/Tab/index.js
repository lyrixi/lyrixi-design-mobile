import React from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import MoreWrapper from './../MoreWrapper'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

// 图文组合
export default function FooterBarTab({ disabled, name, icon, more, onClick, ...props }) {
  const hasMore = Array.isArray(more) && more.length
  const defaultIcon = hasMore ? 'footerbar-tab-icon-more' : ''

  const tab = (
    <div
      {...props}
      className={DOMUtil.classNames(
        'footerbar-tab',
        props?.className,
        disabled ? 'disabled' : ''
      )}
    >
      <span className={`footerbar-tab-icon`}>
        {DOMUtil.getIconNode(icon || defaultIcon, { name, ...props })}
      </span>
      <div className="footerbar-tab-name">{name}</div>
    </div>
  )

  if (more) {
    return (
      <MoreWrapper more={more} onClick={onClick}>
        {tab}
      </MoreWrapper>
    )
  }

  return React.cloneElement(tab, { onClick })
}
