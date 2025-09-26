import React from 'react'
import MoreWrapper from './../MoreWrapper'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

// 图文组合
export default function FooterBarTab({ disabled, name, iconRender, more, onClick, ...props }) {
  const hasMore = Array.isArray(more) && more.length

  // 获取图标节点
  function getIconNode() {
    if (typeof iconRender === 'function') {
      return iconRender({ name, ...props })
    }

    // 默认图标
    if (hasMore) {
      return <i className="footerbar-tab-icon-more"></i>
    }

    return null
  }
  const IconNode = getIconNode()

  const tab = (
    <div
      {...props}
      className={DOMUtil.classNames('footerbar-tab', props?.className, disabled ? 'disabled' : '')}
    >
      <span className={`footerbar-tab-icon`}>
        {IconNode}
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
