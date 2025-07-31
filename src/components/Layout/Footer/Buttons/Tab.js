import React, { useState } from 'react'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

// 内库使用-start
import ActionSheet from './../../../ActionSheet'
// 内库使用-end

/* 测试使用-start
import { ActionSheet } from 'lyrixi-design-mobile'
测试使用-start */

// 图文组合
export default function Tab({ disabled, icon, type, id, name, childrenList, onChange }) {
  // ActionSheet
  const [visible, setVisible] = useState(false)
  function handleClick() {
    if (Array.isArray(childrenList) && childrenList.length) {
      setVisible(true)
      return
    }
    onChange && onChange({ type, id, name })
  }

  // 获取选中状态的Node
  function getIconNode() {
    if (typeof icon === 'string') {
      return <i className={icon} />
    }
    if (typeof icon === 'function') {
      return icon({ type, id, name })
    }
    if (React.isValidElement(icon)) {
      return icon
    }

    return <i className={`layout-footer-tab-icon-more`} />
  }

  return (
    <>
      <div
        className={DOMUtil.classNames('layout-footer-tab', disabled ? 'disabled' : '')}
        onClick={handleClick}
      >
        <span className={`layout-footer-tab-icon`}>{getIconNode()}</span>
        <div className="layout-footer-tab-name">{name}</div>
      </div>

      {Array.isArray(childrenList) && childrenList.length ? (
        <ActionSheet.Modal
          visible={visible}
          list={childrenList}
          onChange={(newValue) => {
            onChange && onChange(newValue)
            setVisible(false)
          }}
          onVisibleChange={setVisible}
        />
      ) : null}
    </>
  )
}
