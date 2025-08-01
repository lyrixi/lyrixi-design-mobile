// 内库使用-start
import GeoUtil from './../../../../utils/GeoUtil'
// 内库使用-end

/* 测试使用-start
import { GeoUtil } from 'lyrixi-design-mobile'
测试使用-end */

// 单个点转换
function getPoint(point, type) {
  if (!point?.longitude || !point?.latitude) {
    console.error('MapContainer coordsToWgs84 invalid parameter:', point)
    return null
  }
  // 没有坐标类型无法转换
  if (!point.type && !type) return point

  let newPoint = GeoUtil.coordtransform(
    [point.longitude, point.latitude],
    point.type || type,
    'wgs84'
  )
  return {
    ...point,
    type: 'wgs84',
    longitude: newPoint[0],
    latitude: newPoint[1]
  }
}

// 转成wgs84坐标
function coordsToWgs84(points, type) {
  if (Array.isArray(points) && points.length) {
    return points.map((point) => {
      return getPoint(point, type)
    })
  } else if (toString.call(points) === '[object Object]') {
    return getPoint(points, type)
  }
  return null
}

export default coordsToWgs84
