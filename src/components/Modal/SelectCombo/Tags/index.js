import React, { Fragment } from 'react'
import getClearNode from './getClearNode'
import Tag from './Tag'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, LocaleUtil } from 'lyrixi-design-mobile'
测试使用-end */

// 标签模式
const Tags = ({
  // 分隔符
  separator,
  // 左右图标
  leftIcon,
  rightIcon,
  // 清除按键
  clear,
  className,
  style,
  contentProps,
  placeholder,
  readOnly,
  disabled,
  allowClear,
  value,
  onAdd,
  onEdit,
  onChange
}) => {
  return (
    <>
      <div
        className={DOMUtil.classNames(
          'select-combo-tags',
          className,
          readOnly ? 'readOnly' : '',
          disabled ? ' disabled' : ''
        )}
        style={style}
        onClick={onAdd}
      >
        {typeof leftIcon === 'function' ? leftIcon({ value }) : leftIcon}
        {/* 主体 */}
        <div
          {...contentProps}
          className={`select-combo-tags-content${
            contentProps?.className ? ' ' + contentProps.className : ''
          }`}
        >
          {Array.isArray(value)
            ? value.map((item, index) => {
                return (
                  <Fragment key={item.id || index}>
                    <Tag
                      className={item.className}
                      style={item.style}
                      name={item.name}
                      readOnly={item.readOnly}
                      disabled={item.disabled}
                      allowClear={item.allowClear}
                      onEdit={() => {
                        onEdit && onEdit(item)
                      }}
                      onDelete={() => {
                        let currentValue = value.filter((valueItem) => valueItem.id !== item.id)
                        onChange && onChange(currentValue, { action: 'clickDelete' })
                      }}
                    />
                    {index < value.length - 1 && separator ? separator : null}
                  </Fragment>
                )
              })
            : null}
          {(!Array.isArray(value) || !value?.length) && (
            <div className="select-combo-tags-placeholder">
              {placeholder || LocaleUtil.locale('Please Select', 'SeedsUI_select_placeholder')}
            </div>
          )}
        </div>
        {getClearNode({
          clear,
          allowClear,
          disabled,
          readOnly,
          value,
          onClear: (e) => {
            e && e?.stopPropagation?.()
            typeof onChange === 'function' && onChange('', { action: 'clickClear' })
          }
        })}
        {typeof rightIcon === 'function' ? rightIcon({ value }) : rightIcon}
      </div>
    </>
  )
}

export default Tags
