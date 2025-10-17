import React, { forwardRef } from 'react'

import Search from './../Search'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import LocaleUtil from './../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, LocaleUtil } from 'lyrixi-design-mobile'
测试使用-end */

const SearchBar = ({ className, style, onCancel, searchProps, ...props }, ref) => {
  return (
    <div className={DOMUtil.classNames(`toolbar-search-bar`, className)} style={style}>
      {/* 文本框 */}
      <Search
        ref={ref}
        autoFocus
        {...props}
        {...searchProps}
        className={DOMUtil.classNames(`active`, searchProps?.className)}
      />

      {/* 取消按钮 */}
      <span
        className="toolbar-search-button-cancel"
        onClick={(e) => {
          onCancel && onCancel()
        }}
      >
        {LocaleUtil.locale('取消', 'SeedsUI_cancel')}
      </span>
    </div>
  )
}

export default forwardRef(SearchBar)
