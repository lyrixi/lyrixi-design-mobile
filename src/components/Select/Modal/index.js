import React, { useState, forwardRef } from 'react'
import formatValue from './formatValue'
import Main from './../Main'

// 内库使用-start
import ToolBar from './../../../components/ToolBar'
import List from './../../../components/List'
import SelectModal from './../../../components/Modal/SelectModal'
// 内库使用-end

/* 测试使用-start
import { ToolBar, List, Modal } from 'lyrixi-design-mobile'
const SelectModal = Modal.SelectModal
测试使用-end */

// Modal
const Modal = forwardRef(
  (
    {
      // Modal
      portal,
      value,
      header,

      // Main
      list,

      // List config
      wrapper,
      layout,
      checkable,
      checkbox,
      checkboxPosition,

      ...props
    },
    ref
  ) => {
    // 没有设置header的情况下, 大于15项显示搜索
    const [keyword, setKeyword] = useState('')
    let searchHeader =
      Array.isArray(list) && list.length > 15
        ? () => {
            return (
              <ToolBar invert>
                <ToolBar.Search
                  value={keyword}
                  onSearch={(newKeyword) => {
                    setKeyword(newKeyword)
                  }}
                />
              </ToolBar>
            )
          }
        : null
    let searchHeaderVisible = header !== undefined ? false : searchHeader

    return (
      <SelectModal
        ref={ref}
        {...props}
        header={searchHeaderVisible ? searchHeader : header}
        main={props?.main || Main}
        mainProps={{
          ...props?.mainProps,
          list: searchHeaderVisible ? List.searchList(list, keyword) : list,
          // List config
          wrapper,
          layout,
          checkable,
          checkbox,
          checkboxPosition
        }}
        portal={portal}
        value={formatValue(value)}
        className={`select-modal${props.className ? ' ' + props.className : ''}`}
      />
    )
  }
)

export default Modal
