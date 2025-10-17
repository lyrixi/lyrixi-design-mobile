import React from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

// 步骤条
const Step = ({
  iconChildren,
  iconRender,
  // 状态： active, finish, error, wait
  status,
  rail,
  title,
  description
}) => {
  // 获取图标节点
  function getIconNode() {
    if (typeof iconRender === 'function') {
      return iconRender({
        children: iconChildren,
        className: 'steps-item-icon-circle',
        status
      })
    }
    return <div className={'steps-item-icon-circle'}>{iconChildren}</div>
  }
  const IconNode = getIconNode()

  return (
    <div className={DOMUtil.classNames('steps-item horizontal center', status)}>
      {/* Icon */}
      <div className="steps-item-icon">
        {IconNode}
      </div>

      {/* 连接线 */}
      {rail && <div className="steps-item-rail"></div>}

      {/* Content */}
      <div className="steps-item-content">
        <div className="steps-item-title">{title}</div>
        <div className="steps-item-description">{description}</div>
      </div>
    </div>
  )
}

export default Step
