import React, { useImperativeHandle, forwardRef, useRef, useContext } from 'react'
import FormContext from './../FormContext'
import Div from './../../Letter/Base'

// 内库使用-start
import Toast from './../../../Toast'
// 内库使用-end

/* 测试使用-start
import { Toast } from 'lyrixi-design-mobile'
测试使用-end */

const FormLabel = forwardRef(({ help, span, ellipsis, required, children, ...props }, ref) => {
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

  return (
    <div
      {...labelColProps}
      {...props}
      className={`form-item-label${props.className ? ' ' + props.className : ''}${
        layout === 'horizontal' ? ` col col-${span || globalSpan || 8}` : ''
      }`}
      ref={rootRef}
    >
      <Div className="form-item-label-text" ellipsis={ellipsis || globalEllipsis}>
        {children}
      </Div>

      {help && (
        <i
          className="form-item-help"
          onClick={() => {
            Toast.show({ content: help })
          }}
        ></i>
      )}
      {required && <span className="form-item-required">*</span>}
    </div>
  )
})

export default FormLabel
