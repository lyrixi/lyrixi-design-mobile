import React from 'react'
import Wrapper from './Wrapper'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Checkbox from './../../Checkbox'
// 内库使用-end

/* 测试使用-start
import { DOMUtil,Checkbox } from 'lyrixi-design-mobile'
测试使用-end */

const Item = ({
  // Custom Wrapper or Item
  wrapper,

  // Display Item
  disabled,
  image,
  avatar,
  title,
  description,
  note,
  content,
  action,

  // Item Data
  itemData,

  // GLobal Config
  layout,
  checkable,
  checkbox,
  checkboxProps,
  checkboxPosition = 'left',
  checked,
  onChange,

  // Item Style
  className,
  style
}) => {
  // 获取checkbox
  function getCheckboxNode() {
    if (!checkable) return null

    if (typeof checkbox === 'function') {
      let newCheckBox = checkbox({ ...(itemData || {}), checked, checkboxProps })
      if (newCheckBox !== undefined) return newCheckBox
    }

    return <Checkbox checked={checked} {...checkboxProps} />
  }

  // 获取note
  function getNoteNode() {
    let Note = null
    if (typeof note === 'function') {
      Note = note({ ...(itemData || {}), checked })
    } else if (typeof note === 'string') {
      Note = note
    } else {
      Note = note
    }

    return <div className="list-item-meta-note">{Note}</div>
  }

  // 渲染图片
  function getImageNode() {
    if (!image) return null

    if (typeof image === 'function') {
      return image({ ...(itemData || {}), checked })
    }
    if (typeof image === 'string') {
      return (
        <div className={`list-item-meta-image`}>
          <img
            alt=""
            src={image}
            onError={(e) => {
              e.target.parentNode.classList.add('fail')
            }}
            onLoad={(e) => {
              e.target.parentNode.classList.add('success')
            }}
            className="avatar"
          />
        </div>
      )
    }
    return image
  }

  // 渲染头像
  function getAvatarNode() {
    if (!avatar) return null

    if (typeof avatar === 'function') {
      return avatar({ ...(itemData || {}), checked })
    }
    if (typeof avatar === 'string') {
      return (
        <div className={`list-item-meta-avatar`}>
          <img
            alt=""
            src={avatar}
            onError={(e) => {
              e.target.parentNode.classList.add('fail')
            }}
            onLoad={(e) => {
              e.target.parentNode.classList.add('success')
            }}
            className="avatar"
          />
        </div>
      )
    }
    return avatar
  }

  // 获取action
  function getActionNode() {
    if (typeof action === 'function') {
      return action({ ...(itemData || {}), checked })
    }

    return null
  }

  // 获取item节点
  function getItemNode() {
    return (
      <div
        style={wrapper ? undefined : style}
        className={DOMUtil.classNames(
          'list-item',
          wrapper ? undefined : className,
          disabled ? 'disabled' : '',
          checked ? 'active' : '',
          layout ? layout : ''
        )}
        onClick={(e) => {
          e.stopPropagation()
          onChange && onChange(!checked)
        }}
      >
        {/* Left Checkbox */}
        {checkboxPosition !== 'right' && getCheckboxNode(checked)}

        {/* Main */}
        <div className="list-item-main">
          {/* Meta */}
          <div className="list-item-meta">
            {getImageNode()}

            {getAvatarNode()}

            <div className="list-item-meta-content">
              <div className="list-item-meta-title">{title}</div>
              {description && <div className="list-item-meta-description">{description}</div>}
            </div>

            {getNoteNode()}
          </div>

          {/* Content */}
          {content && <div className="list-item-content">{content}</div>}

          {/* Action */}
          {action && <div className="list-item-action">{getActionNode()}</div>}
        </div>

        {/* Right Checkbox */}
        {checkboxPosition === 'right' && getCheckboxNode(checked)}
      </div>
    )
  }

  // Custom Wrapper or Item
  if (wrapper) {
    let WrapperNode = Wrapper
    if (typeof wrapper === 'function') {
      return wrapper({
        checked,
        onChange,
        // data
        itemData,
        // config
        layout,
        checkable,
        checkbox,
        checkboxProps,
        checkboxPosition,
        // Node
        children: getItemNode(),
        // Item style
        style: style,
        className: className
      })
    }

    if (React.isValidElement(wrapper)) {
      WrapperNode = wrapper
    }

    return (
      <WrapperNode
        checked={checked}
        checkboxProps={checkboxProps}
        onChange={onChange}
        // data
        itemData={itemData}
        // config
        layout={layout}
        checkbox={checkbox}
        checkboxPosition={checkboxPosition}
        // Item style
        style={style}
        className={className}
      >
        {getItemNode()}
      </WrapperNode>
    )
  }

  return getItemNode()
}

export default Item
