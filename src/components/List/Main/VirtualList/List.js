import React, { forwardRef } from 'react'
import Item from './../../Item'
import GroupTitle from './../../GroupTitle'

const itemAbsoluteStyle = {
  position: 'absolute',
  left: 0,
  right: 0
}
// 普通列表
const List = (
  {
    allowClear,
    multiple,
    value,
    list,
    onChange,
    // List config
    wrapper,
    layout,
    checkable,
    checkbox,
    checkboxProps,
    checkboxPosition,
    // virtual config
    height
  },
  ref
) => {
  return (
    // 滚动占位元素
    <div
      ref={ref}
      style={{
        position: 'relative',
        flex: 'none',
        height: height
      }}
    >
      {/* 可见项容器 */}
      {(list || []).map((item) => {
        if (item.virtualData.type === 'group') {
          return (
            <GroupTitle
              key={item.id || item.virtualData.index}
              anchor={item.anchor}
              title={item.name}
              description={item.description}
              // Virtual style
              style={{
                ...item?.style,
                ...itemAbsoluteStyle,
                top: item.virtualData.top
              }}
            />
          )
        }
        return (
          <Item
            key={item.id || item.virtualData.index}
            // Custom Wrapper or Item
            wrapper={wrapper}
            // Display Item
            title={item.name}
            // Other Item
            {...item}
            // Item Data
            itemData={item}
            // Global Config
            layout={layout}
            checkable={checkable}
            checkbox={item.checkbox || checkbox}
            checkboxProps={multiple ? checkboxProps : { icon: 'tick', ...checkboxProps }}
            checkboxPosition={item.checkboxPosition || checkboxPosition}
            checked={value?.findIndex?.((valueItem) => valueItem?.id === item.id) >= 0}
            onChange={(checked) => {
              let newValue = null
              // 多选
              if (multiple) {
                if (!checked) {
                  newValue = value.filter((valueItem) => valueItem?.id !== item.id)
                } else {
                  newValue = [...(value || []), item]
                }
              }
              // 单选
              else {
                if (!checked) {
                  newValue = allowClear ? null : [item]
                } else {
                  newValue = [item]
                }
              }
              onChange && onChange(newValue, { checked: checked, item: item })
            }}
            // Virtual style
            style={{
              ...item?.style,
              ...itemAbsoluteStyle,
              top: item.virtualData.top
            }}
          />
        )
      })}
    </div>
  )
}

export default forwardRef(List)
