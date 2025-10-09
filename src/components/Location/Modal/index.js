import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import Main from './../Main'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import SelectModal from './../../Modal/SelectModal'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Modal, SafeArea } from 'lyrixi-design-mobile'
const SelectModal = Modal.SelectModal
测试使用-end */

// Modal
const LocationModal = forwardRef(
  (
    {
      // Modal
      visible,
      value,

      // Main
      config,
      getLocation,
      getAddress,
      ...props
    },
    ref
  ) => {
    const modalRef = useRef(null)

    useImperativeHandle(ref, () => {
      return modalRef.current
    })

    return (
      <SelectModal
        ref={modalRef}
        title={
          visible === 'choose'
            ? LocaleUtil.locale('选择地址', 'SeedsUI_choose_address')
            : LocaleUtil.locale('查看地址', 'SeedsUI_view_address')
        }
        {...props}
        mainRender={({ mainRef, visible, value, allowClear, multiple, onChange }) => {
          return (
            <Main
              ref={mainRef}
              visible={visible}
              value={value}
              allowClear={allowClear}
              multiple={multiple}
              onChange={onChange}
              config={config}
              getLocation={getLocation}
              getAddress={getAddress}
            />
          )
        }}
        ok={visible === 'choose' ? '' : null}
        visible={visible}
        value={value}
        className={`map-modal${props.className ? ' ' + props.className : ''}`}
      />
    )
  }
)

export default LocationModal
