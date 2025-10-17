import React from 'react'

// 内库使用-start
import Card from './../../Card'
// 内库使用-end

/* 测试使用-start
import { Card } from 'lyrixi-design-mobile'
测试使用-end */

const Wrapper = ({ children }) => {
  return <Card className="list-item-wrapper">{children}</Card>
}

export default Wrapper
