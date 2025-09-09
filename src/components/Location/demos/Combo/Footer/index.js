import React from 'react'

// 内库使用-start
import LocaleUtil from './../../../../../utils/LocaleUtil'
import Layout from './../../../../Layout'
import FooterBar from './../../../../FooterBar'
import Button from './../../../../Button'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Layout, Button } from 'lyrixi-design-mobile'
测试使用-end */

// 底部
function Foot({ onOk, onClear }) {
  return (
    <Layout.Footer className="mappage-footer">
      <FooterBar>
        <FooterBar.Button className="primary" onClick={onOk}>
          {LocaleUtil.locale('确定', 'SeedsUI_ok')}
        </FooterBar.Button>
        <FooterBar.Button onClick={onClear}>
          {LocaleUtil.locale('清空标注', 'SeedsUI_empty_marker')}
        </FooterBar.Button>
      </FooterBar>
    </Layout.Footer>
  )
}
export default Foot
