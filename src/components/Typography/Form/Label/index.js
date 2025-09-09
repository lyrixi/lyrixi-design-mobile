import React, { useImperativeHandle, forwardRef, useRef, useContext } from 'react'
import FormContext from './../FormContext'
import Div from './../../Letter/Base'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
import Toast from './../../../Toast'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Toast } from 'lyrixi-design-mobile'
测试使用-end */

const FormLabel = forwardRef(
  ({ help, span, ellipsis, required, children, className, ...props }, ref) => {
    // 获取全局配置
    const { layout, labelCol } = useContext(FormContext)

    const rootRef = useRef(null)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    const { span: globalSpan, ellipsis: globalEllipsis, ...labelColProps } = labelCol || {}

    const isEmpty = !children && !help

    return (
      <div
        {...labelColProps}
        {...props}
        className={DOMUtil.classNames(
          'seed-form-item-label',
          className,
          isEmpty ? 'hide' : '',
          layout === 'horizontal' ? ` col col-${span || globalSpan || 8}` : ''
        )}
        ref={rootRef}
      >
        {children && (
          <Div className="seed-form-item-label-text" ellipsis={ellipsis || globalEllipsis}>
            {children}
          </Div>
        )}

        {help && (
          <i
            className="seed-form-item-help"
            onClick={() => {
              Toast.show({ content: help })
            }}
          ></i>
        )}
        {required && <span className="seed-form-item-required">*</span>}
      </div>
    )
  }
)

export default FormLabel
