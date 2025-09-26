import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'
import SpinFade from './../SpinFade'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-design-mobile'
测试使用-start */

const Loading = forwardRef(
  ({ portal, visible = true, maskClassName, maskStyle, iconRender, content, children, ...props }, ref) => {
    const rootRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => {
          return rootRef.current
        }
      }
    })

    // render icon
    function getIconNode() {
      if (typeof iconRender === 'function') {
        return iconRender()
      }
      return <SpinFade />
    }

    const IconNode = getIconNode()

    // 组合Node
    let Node = (
      <div
        className={`loading-mask mask ${visible ? ' active' : ''}${
          maskClassName ? ' ' + maskClassName : ''
        }`}
        style={maskStyle}
        ref={rootRef}
      >
        {children !== undefined ? (
          children
        ) : (
          <div className="loading" {...props}>
            <div className="loading-icon">{IconNode}</div>
            <div className="loading-content">
              {content || `${LocaleUtil.locale('加载中', 'SeedsUI_refreshing')}...`}
            </div>
          </div>
        )}
      </div>
    )

    if (portal) {
      return createPortal(Node, portal)
    }
    return Node
  }
)

export default Loading
