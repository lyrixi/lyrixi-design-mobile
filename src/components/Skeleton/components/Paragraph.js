import React from 'react'
import Block from './Block'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, LocaleUtil, SafeArea } from 'lyrixi-design-mobile'
测试使用-end */

const Paragraph = ({
  length,
  animated = true,
  avatarProps,
  divider = 'card',
  titleProps = {},
  itemProps = {},
  oddProps = {},
  evenProps = {},
  ...props
}) => {
  return (
    <div {...props} className={DOMUtil.classNames('skeleton-paragraph', divider, props?.className)}>
      {avatarProps && (
        <Block
          animated={animated}
          {...avatarProps}
          className={`skeleton-avatar${avatarProps.className ? ' ' + avatarProps.className : ''}`}
        />
      )}

      <div className="skeleton-paragraph-content">
        {/* Title */}
        {titleProps && (
          <Block
            animated={animated}
            {...titleProps}
            className={`skeleton-title${titleProps.className ? ' ' + titleProps.className : ''}`}
          />
        )}

        {/* Items */}
        {Array.from({ length: length ?? 2 }).map((_, index) => {
          let currentItemProps = { ...itemProps, ...((index + 1) % 2 === 0 ? evenProps : oddProps) }

          return (
            <Block
              animated={animated}
              key={index}
              {...currentItemProps}
              className={`skeleton-item${props.className ? ' ' + props.className : ''}`}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Paragraph
