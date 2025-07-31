import React, { useRef, forwardRef, useImperativeHandle } from 'react'

import Preview from './Preview'
import Choose from './Choose'

// 地图标注
const Main = forwardRef(
  (
    {
      // 显示类型: preview、choose
      visible,
      allowClear,

      config,
      autoLocation = true,
      getLocation,
      getAddress,
      // 值: {latitude: '纬度', longitude: '经度', value: '地址'}
      value,
      onChange,

      id,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const mainRef = useRef(null)
    const mapRef = useRef(null)

    useImperativeHandle(ref, () => {
      return {
        mainDOM: mainRef.current,
        getMainDOM: () => mainRef.current,
        ...mapRef.current
      }
    })

    return (
      <div
        id={id}
        style={style}
        className={`map-main${className ? ' ' + className : ''}`}
        ref={mainRef}
      >
        <div className="map-main-map">
          {visible === 'preview' && (
            <Preview ref={mapRef} config={config} value={value} {...props} />
          )}
          {visible === 'choose' && (
            <Choose
              ref={mapRef}
              config={config}
              autoLocation={autoLocation}
              getLocation={getLocation}
              getAddress={getAddress}
              value={value}
              onChange={(newValue) => {
                onChange && onChange(newValue)
              }}
              {...props}
            />
          )}
        </div>
      </div>
    )
  }
)

export default Main
