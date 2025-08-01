import React, { forwardRef } from 'react'
import Navigation from './Navigation'

// 内库使用-start
import LocaleUtil from './../../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-design-mobile'
测试使用-end */

// 当前位置
function Current({ map, value, readOnly, onChange }, ref) {
  return (
    <div
      className={`map-nearbyControl-item`}
      onClick={(e) => {
        map?.panTo?.({ longitude: value.longitude, latitude: value.latitude, type: value.type })
        if (!readOnly) {
          onChange && onChange(value)
        }
      }}
      ref={ref}
    >
      <div className="map-nearbyControl-item-content">
        <div className="map-nearbyControl-item-content-title">
          <div className="flex-1">
            {value?.name || LocaleUtil.locale('当前位置', 'SeedsUI_current_location')}
          </div>
          <Navigation
            map={map}
            type={value?.type}
            longitude={value?.longitude}
            latitude={value?.latitude}
            address={value?.address}
          />
        </div>
        <div className="map-nearbyControl-item-content-description">
          <div className="flex-1">{value?.address || ''}</div>
          {/* <div className="map-nearbyControl-item-checkbox">
            {!readOnly && (
              <Checkbox
                checked={
                  active?.latitude &&
                  active?.latitude === value?.latitude &&
                  active?.longitude === value?.longitude
                }
              />
            )}
          </div> */}
        </div>
      </div>
    </div>
  )
}
export default forwardRef(Current)
