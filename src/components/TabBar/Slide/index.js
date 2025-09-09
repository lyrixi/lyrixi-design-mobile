import React, { forwardRef, useRef, useImperativeHandle, Fragment } from 'react'
import getContextNode from './../utils/getContextNode'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

const Slide = forwardRef(
  (
    {
      separator,
      value,
      list = [],
      /*
      [
        {
          icon: Node,
          name: string,
          description: string,
          disabled
          content: Node,
        }
      ]
      */
      className,
      disabled,
      descriptionPosition,
      onChange,
      ...props
    },
    ref
  ) => {
    const rootRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => {
          return rootRef.current
        }
      }
    })

    // 根据value判断此项是否为选中状态
    function getIsChecked(item) {
      if (item?.id !== undefined && value?.id !== undefined) {
        return item.id === value.id
      }
      return false
    }

    // 内容DOM
    function getGroup() {
      if (!Array.isArray(list)) {
        console.log('SeedsUI TabBar: Parameter list is wrong')
        return null
      }

      // 遍历
      return list.map((item, index) => {
        const { name, description, placeholder, props: tabProps = {} } = item
        let checked = getIsChecked(item)
        return (
          <Fragment key={index}>
            <div
              className={DOMUtil.classNames(
                description
                  ? descriptionPosition === 'top'
                    ? 'tabbar-slide-tab-description top'
                    : 'tabbar-slide-tab-description bottom'
                  : '',
                'tabbar-slide-tab-wrapper',
                item?.disabled ? ' disabled' : '',
                checked ? ' active' : ''
              )}
              data-index={index}
              {...tabProps}
              onClick={(e) => {
                e.stopPropagation()
                onChange && onChange(item)
              }}
            >
              <div className="tabbar-slide-tab">
                {typeof item.icon === 'function' ? item.icon({ checked: checked }) : item.icon}
                {description && descriptionPosition === 'top' ? (
                  <div className={`tabbar-slide-tab-description`}>{description}</div>
                ) : null}
                {name && <div className={`tabbar-slide-tab-name`}>{name}</div>}
                {!name && placeholder ? (
                  <div className={`tabbar-tabs-tab-placeholder`}>{placeholder}</div>
                ) : null}
                {description && descriptionPosition !== 'top' ? (
                  <div className={`tabbar-slide-tab-description`}>{description}</div>
                ) : null}
                {getContextNode(item.content, { ...item, checked: checked })}
              </div>
            </div>
            {index < list.length - 1 && separator && (
              <div className="tabbar-group-separator">{separator}</div>
            )}
          </Fragment>
        )
      })
    }

    return (
      <div
        {...props}
        className={DOMUtil.classNames('tabbar-slide', className)}
        disabled={disabled}
        ref={rootRef}
      >
        {getGroup()}
      </div>
    )
  }
)

export default Slide
