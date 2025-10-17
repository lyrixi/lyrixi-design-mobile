import React, { forwardRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import LocaleUtil from './../../../utils/LocaleUtil'
import Input from './../../Input'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, LocaleUtil, Input } from 'lyrixi-design-mobile'
测试使用-end */

const Search = ({ placeholder, ...props }, ref) => {
  return (
    <Input.Search
      ref={ref}
      leftIcon={<i className="toolbar-search-input-left-icon" />}
      {...props}
      className={DOMUtil.classNames(`toolbar-search-input`, props?.className)}
      placeholder={placeholder || LocaleUtil.locale('搜索', 'SeedsUI_search')}
    />
  )
}

export default forwardRef(Search)
