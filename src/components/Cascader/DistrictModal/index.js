import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import { formatType, compareType } from './../DistrictMain/utils'
import findDistrictLeafIndex from './../DistrictMain/utils/findDistrictLeafIndex'
import DistrictMain from './../DistrictMain'

// 内库使用-start
import SelectModal from './../../Modal/SelectModal'
// 内库使用-end

/* 测试使用-start
import { Modal } from 'lyrixi-design-mobile'
const SelectModal = Modal.SelectModal
测试使用-end */

// 级联选择
const DistrictModal = forwardRef(
  (
    {
      // Filter useless props to protect the feature
      multiple,

      // Modal
      value,

      searchVisible,
      visible,
      min = '',
      ok,

      // Main
      startType,
      type = 'street', // 'country', 'province', 'city', 'district', 'street'
      loadCountries,
      loadCountryRegions,
      loadStreets,
      editableOptions,
      ...props
    },
    ref
  ) => {
    // eslint-disable-next-line
    type = formatType(type)

    // 是否显示右上角确认按钮
    let [okVisible, setOkVisible] = useState(null)

    // Expose api
    const modalRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        ...modalRef.current
      }
    })

    // useEffect(() => {
    //   if (visible) {
    //     updateOkVisible(value)
    //   }
    //   // eslint-disable-next-line
    // }, [visible])

    // 根据min判断是否显示确定按钮
    function updateOkVisible(tabs) {
      // 没有值或者没有最小值限制, 则需要一直选到叶子节点, 不显示确定按钮
      if (!Array.isArray(tabs) || !tabs.length || !min) {
        setOkVisible(false)
        return
      }

      let newOkVisible = false

      // 比较类型, 判断是否显示确定按钮
      let currentTypes = tabs[tabs.length - 1]?.type
      if (currentTypes) {
        for (let currentType of currentTypes) {
          if (compareType(currentType, min) >= 0) {
            newOkVisible = true
            break
          }
        }
      }

      setOkVisible(newOkVisible)
    }

    // 加载完成后, 会更新value的值, 再更新Ok按钮显示状态
    function handleLoad() {
      updateOkVisible(value)
    }

    // 下钻根据min更新Ok按钮显示状态
    function handleDrillDown(tabs) {
      updateOkVisible(tabs)
    }

    return (
      <SelectModal
        ref={modalRef}
        visible={visible}
        value={value}
        {...props}
        mainRender={({ mainRef, visible, value, allowClear, multiple, onChange }) => {
          return (
            <DistrictMain
              ref={mainRef}
              visible={visible}
              value={value}
              allowClear={allowClear}
              multiple={multiple}
              onChange={(newValue, newArguments) => {
                handleDrillDown(newValue)
                onChange(newValue, newArguments)
              }}
              searchVisible={searchVisible}
              startType={startType}
              type={type}
              loadCountries={loadCountries}
              loadCountryRegions={loadCountryRegions}
              loadStreets={loadStreets}
              editableOptions={editableOptions}
              onLoad={handleLoad}
            />
          )
        }}
        changeClosable={(newValue, newArguments, { triggerOk }) => {
          if (!Array.isArray(newValue) || !newValue.length) return
          const leafIndex = findDistrictLeafIndex(newValue, type)
          if (typeof leafIndex === 'number') {
            triggerOk(newValue)
            return true
          }
        }}
        ok={ok ? ok : okVisible ? '' : null}
        className={`cascader-modal${props.className ? ' ' + props.className : ''}`}
      />
    )
  }
)

export default DistrictModal
