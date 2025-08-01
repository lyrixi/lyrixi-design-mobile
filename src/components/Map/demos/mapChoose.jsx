import React, { useRef, useState } from 'react'

// 内库使用
import { Layout, Map, Loading } from 'lyrixi-design-mobile'

// 测试使用
// import Map from 'library/components/Map'

const { APILoader, MapChoose, coordsToWgs84 } = Map
import CustomChild from './CustomChild'

// 生成随机点
// import getPoints from './getPoints'
// const points = getPoints()

export default () => {
  const mapRef = useRef(null)
  // Bridge.debug = true
  let [value, setValue] = useState({
    // address: '美国白宫',
    // latitude: 38.8976763,
    // longitude: -77.0365298,
    // type: 'wgs84'
    // latitude: 34.007479447064824,
    // longitude: -118.5000352126432,
    // type: 'wgs84',
    // address: '太平洋公园'
    // latitude: 39.909187,
    // longitude: 116.397451,
    // type: 'gcj02',
    // address: '天安门'
    // latitude: 39.907783490367706,
    // longitude: 116.39120737493609,
    // type: 'wgs84',
    // address: '天安门'
    latitude: 31.990374883871525,
    longitude: 118.73769931504451,
    type: 'gcj02',
    address: '南京烽火科技'
  })
  /*
  useState()
  useState({
    latitude: 39.907783490367706,
    longitude: 116.39120737493609,
    address: '天安门'
  })
  */

  return (
    <Layout className="full">
      <Layout.Main>
        <APILoader
          loading={<Loading content="Loading..." />}
          config={{
            key: '7b6e260fc45a67b31a265e22575f1c5e',
            type: 'bmap',
            markerIcons: {
              centerMarkerIcon: {
                iconUrl: `//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-custom-shop.png`,
                iconRetinaUrl: `//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-custom-shop.png`,
                shadowUrl: `//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-shadow.png`,
                shadowRetinaUrl: `//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-shadow.png`
              },
              markerIcon: {
                iconUrl: `//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-icon.png`,
                iconRetinaUrl: `//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-icon-2x.png`,
                shadowUrl: `//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-shadow.png`,
                shadowRetinaUrl: `//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-shadow.png`
              }
            }
          }}
          // config={{
          //   key: '',
          //   type: 'google'
          // }}
          onSuccess={() => {
            console.log('地图加载成功')
          }}
          // onError={(error) => {
          //   console.log('地图加载失败', error)
          //   return <div>{error.errMsg}</div>
          // }}
        >
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <MapChoose
              ref={mapRef}
              // readOnly
              // autoLocation={false}
              zoom={16}
              value={coordsToWgs84(value)}
              onChange={(newValue) => {
                console.log('newValue:', newValue)
                setValue(newValue)
              }}
              onMarkerClick={(e) => {
                console.log('点击marker:', e)
                console.log(mapRef.current)
                // e.remove()
                let newMarkerIcon = window.L.icon({
                  active: true,
                  iconUrl: `https://lyrixi.github.io/lyrixi-design-mobile/assets/plugin/leaflet/images/marker-icon.bak.png`,
                  iconRetinaUrl: `https://lyrixi.github.io/lyrixi-design-mobile/assets/plugin/leaflet/images/marker-icon.bak.png`,
                  shadowUrl: `https://lyrixi.github.io/lyrixi-design-mobile/assets/plugin/leaflet/images/marker-shadow.png`,
                  shadowRetinaUrl: `https://lyrixi.github.io/lyrixi-design-mobile/assets/plugin/leaflet/images/marker-shadow.png`,
                  shadowSize: [33, 33],
                  iconSize: [20, 33],
                  iconAnchor: [10, 16]
                })
                e.setIcon(newMarkerIcon, { multiple: false })
              }}
              // getLocation={(data) => {
              //   console.log(data)
              //   return { latitude: 35.689487, longitude: 139.691706 }
              // }}
              // getAddress={(data) => {
              //   return new Promise((resolve) => {
              //     setTimeout(() => {
              //       resolve({
              //         ...data,
              //         province: '江苏省',
              //         provinceNumber: 100010,
              //         address: '江苏省11'
              //       })
              //     }, 1000)
              //   })
              // }}
              // queryNearby={({ map, keyword, longitude, latitude, radius }) => {
              //   console.log('搜索附近:', map, keyword, longitude, latitude, radius)
              //   return [
              //     {
              //       address: '上海市南京东路831号',
              //       latitude: 31.237415229632834,
              //       longitude: 121.47015544295395,
              //       name: '市百一店'
              //     },
              //     {
              //       address: '上海市南京东路832号',
              //       latitude: 31.237415229632834,
              //       longitude: 121.47015544295395,
              //       name: '市百二店'
              //     }
              //   ]
              // }}
              // 生成随机点
              // queryNearby={() => points}
            />
          </div>
        </APILoader>
      </Layout.Main>
    </Layout>
  )
}
