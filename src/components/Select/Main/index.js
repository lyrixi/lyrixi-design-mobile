import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import _ from 'lodash'

// 内库使用-start
import Result from './../../Result'
import List from './../../List'
// 内库使用-end

/* 测试使用-start
import { Result, List } from 'lyrixi-design-mobile'
测试使用-end */

// Main
const Main = forwardRef(
  (
    {
      // Modal
      visible = true,

      // Main
      value,
      multiple,
      allowClear,
      onChange,

      list,
      checkable = true,
      checkbox,
      checkboxProps,
      checkboxPosition,
      ...props
    },
    ref
  ) => {
    // Expose
    const mainRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        mainDOM: mainRef.current,
        getMainDOM: () => mainRef.current
      }
    })

    return (
      <div
        {...props}
        className={`select-main${props?.className ? ' ' + props.className : ''}`}
        ref={mainRef}
      >
        {_.isEmpty(list) && <Result className="select-main-result" status="empty" />}

        {/* 列表 */}
        <List
          allowClear={allowClear}
          multiple={multiple}
          value={value}
          list={list}
          onChange={onChange}
          checkable={checkable}
          checkbox={checkbox}
          checkboxProps={checkboxProps}
          checkboxPosition={checkboxPosition}
        />
      </div>
    )
  }
)

export default Main
