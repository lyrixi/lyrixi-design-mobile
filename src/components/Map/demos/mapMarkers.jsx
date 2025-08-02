import React, { useRef, useState, useEffect } from 'react'

// 内库使用
import { Layout, Map } from 'lyrixi-design-mobile'

// 测试使用
// import Map from 'library/components/Map'

// 生成随机点
const { APILoader, MapMarkers, LocationControl, Circles, coordsToWgs84 } = Map
import getPoints from './getPoints'

// 随机生成点, 用于测试性能
const currentPoints = coordsToWgs84(
  getPoints({
    center: {
      latitude: 39.907783490367706,
      longitude: 116.39120737493609
    },
    // 半径5000000米
    radius: 1000,
    // 生成点数
    count: 101
  })
)

// This coordsToWgs84 just example, no practical use
const points = coordsToWgs84([
  {
    address: '国家广告产业园北区',
    latitude: 31.981827992209773,
    longitude: 118.73498038509915,
    type: 'gcj02'
  },
  {
    latitude: 31.990433909567244,
    longitude: 118.7376115295504,
    type: 'gcj02',
    address: '南京烽火科技',
    icon: {
      html: '<div style="width:100px;background-color:red;">南京烽火科技</div>'
    }
  },
  {
    latitude: 31.98768,
    longitude: 118.751785,
    type: 'gcj02',
    address: '小行'
  },
  {
    address: '国家广告产业园北区',
    latitude: 31.981827992209773,
    longitude: 118.73498038509915,
    type: 'gcj02'
  }
])

export default () => {
  const mapRef = useRef(mapRef)
  // const [points, setPoints] = useState(null)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setPoints(currentPoints)
  //   }, 5000)
  // }, [])

  return (
    <Layout className="full">
      <Layout.Main>
        <APILoader
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
          onSuccess={() => {
            console.log('地图加载成功')
          }}
          // onError={(errMsg) => {
          //   console.log('地图加载失败:', errMsg)
          //   return '错误地址'
          // }}
        >
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <MapMarkers
              ref={mapRef}
              // 转换为wgs84坐标
              ZoomControlProps={{
                style: { bottom: '20px' }
              }}
              // 标注
              markers={points}
              // 折线
              polyline={points}
              PolylineProps={{
                color: '#ff8800'
              }}
              // 圆圈
              circles={[
                {
                  latitude: 31.981827992209773,
                  longitude: 118.73498038509915,
                  type: 'gcj02',
                  radius: 500
                  // color: '#ff8800'
                }
              ]}
              CirclesProps={{
                color: '#ff8800'
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
                e.setIcon(newMarkerIcon, { multiple: true })
              }}
              // onMarkerClick={(e) => {
              //   console.log('点击marker:', e)
              //   // e.remove()
              //   let newMarkerIcon = window.L.icon({
              //     active: true,
              //     iconUrl: `https://lyrixi.github.io/lyrixi-design-mobile/assets/plugin/leaflet/images/marker-icon.bak.png`,
              //     iconRetinaUrl: `https://lyrixi.github.io/lyrixi-design-mobile/assets/plugin/leaflet/images/marker-icon.bak.png`,
              //     shadowUrl: `https://lyrixi.github.io/lyrixi-design-mobile/assets/plugin/leaflet/images/marker-shadow.png`,
              //     shadowRetinaUrl: `https://lyrixi.github.io/lyrixi-design-mobile/assets/plugin/leaflet/images/marker-shadow.png`,
              //     shadowSize: [33, 33],
              //     iconSize: [20, 33],
              //     iconAnchor: [10, 16]
              //   })
              //   e.setIcon(newMarkerIcon, { multiple: false })

              //   console.log(mapRef.current.leafletMap)
              //   let popup = window.L.popup()
              //     .setLatLng([e.latitude, e.longitude])
              //     .setContent('I am a standalone popup.')
              //     .openOn(mapRef.current.leafletMap)
              // }}
              onLoad={(map) => {
                let currentZoom = map.getZoom()
                map.setZoom(currentZoom - 1)
              }}
            >
              <LocationControl
                style={{ bottom: '20px' }}
                onChange={(result) => {
                  mapRef.current.panTo(result)
                }}
              />
            </MapMarkers>
          </div>
        </APILoader>
      </Layout.Main>
    </Layout>
  )
}
