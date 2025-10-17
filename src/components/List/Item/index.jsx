import React from 'react'
import ItemWrapper from './Wrapper'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Checkbox from './../../Checkbox'
// 内库使用-end

/* 测试使用-start
import { DOMUtil,Checkbox } from 'lyrixi-design-mobile'
测试使用-end */

const Item = ({
  multiple,
  // Custom ItemWrapper or Item
  itemRender,

  // Display Item
  disabled,
  imageRender,
  imageUrl,
  avatarUrl,
  avatarRender,
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
      let newCheckBox = checkbox({ ...(itemData || {}), checked })
      if (newCheckBox !== undefined) return newCheckBox
    }

    return <Checkbox checked={checked} />
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
    if (typeof imageRender === 'function') {
      return imageRender({ ...(itemData || {}), checked })
    }
    if (typeof imageUrl === 'string') {
      return (
        <div className={`list-item-meta-image`}>
          <img
            alt=""
            src={imageUrl}
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
    return null
  }

  // 渲染头像
  function getAvatarNode() {
    if (typeof avatarRender === 'function') {
      return avatarRender({ ...(itemData || {}), checked })
    }
    if (typeof avatarUrl === 'string') {
      return (
        <div className={`list-item-meta-avatar`}>
          <img
            alt=""
            src={avatarUrl}
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
    return null
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
        style={style}
        className={DOMUtil.classNames(
          'list-item',
          className,
          multiple ? 'multiple' : '',
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

  // Custom ItemWrapper or Item
  if (itemRender) {
    let ItemWrapperNode = ItemWrapper
    if (typeof itemRender === 'function') {
      return itemRender({
        checked,
        onChange,
        // data
        itemData,
        // config
        layout,
        checkable,
        checkbox,
        checkboxPosition,
        // Node
        children: getItemNode(),
        // Item style
        style: style,
        className: className
      })
    }

    return (
      <ItemWrapperNode
        checked={checked}
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
      </ItemWrapperNode>
    )
  }

  return getItemNode()
}

export default Item
