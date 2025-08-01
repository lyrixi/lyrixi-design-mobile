import React, { forwardRef, useRef, useImperativeHandle } from 'react'

// 内库使用-start
import Checkbox from './../../Checkbox'
// 内库使用-end

/* 测试使用-start
import { Checkbox } from 'lyrixi-design-mobile'
测试使用-end */

const Chat = (
  {
    itemData,
    checked,
    checkable,
    checkbox,
    checkboxProps,
    checkboxPosition = 'left',
    // left | right
    position,
    avatar,
    author,
    content,
    ...props
  },
  ref
) => {
  // 节点
  const rootRef = useRef(null)
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current
    }
  })

  // 渲染头像
  function getAvatarNode() {
    if (!avatar) return null

    if (typeof avatar === 'function') {
      return avatar({ ...(itemData || {}), checked })
    }
    if (typeof avatar === 'string') {
      return (
        <div className={`chat-item-avatar`}>
          <img
            alt=""
            src={avatar}
            onError={(e) => {
              e.target.classList.add('fail')
            }}
            onLoad={(e) => {
              e.target.classList.add('success')
            }}
            className="avatar"
          />
        </div>
      )
    }
    return avatar
  }

  // 渲染作者
  function getAuthorNode() {
    if (!author) return null

    if (typeof author === 'function') {
      return author({ ...(itemData || {}), checked })
    }
    if (typeof author === 'string') {
      return <div className={`chat-item-content-author`}>{author}</div>
    }
    return author
  }

  // 获取checkbox
  function getCheckboxNode() {
    if (!checkable) return null

    if (typeof checkbox === 'function') {
      let newCheckBox = checkbox({ ...(itemData || {}), checked, checkboxProps })
      if (newCheckBox !== undefined) return newCheckBox
    }

    return <Checkbox checked={checked} {...checkboxProps} />
  }

  return (
    <div
      {...props}
      className={`chat-item${position ? ' ' + position : ''}${
        props.className ? ' ' + props.className : ''
      }`}
      ref={rootRef}
    >
      {/* Left Checkbox */}
      {checkboxPosition !== 'right' && getCheckboxNode(checked)}

      <div className="chat-item-main">
        {/* Avatar */}
        {getAvatarNode()}

        {/* Meta */}
        <div className={`chat-item-content`}>
          {getAuthorNode()}
          <div className={`chat-item-content-bubble`}>{content}</div>
        </div>
      </div>

      {/* Right Checkbox */}
      {checkboxPosition === 'right' && getCheckboxNode(checked)}
    </div>
  )
}

export default forwardRef(Chat)
