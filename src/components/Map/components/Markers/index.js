import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import _ from 'lodash'
import createMarkerIcon from './createMarkerIcon'
import defaultMarkerIcons from './../../utils/markerIcons'
import filterCoords from './../../utils/filterCoords'
import addMarkers from './addMarkers'
import clearMarkers from './clearMarkers'

// 批量标注
const Markers = forwardRef(
  (
    {
      map,
      points,
      // Options
      icon,
      onClick
    },
    ref
  ) => {
    // Marker layer
    const layersRef = useRef(null)

    // Default Icon
    const markerIcons = window?.APILoaderConfig?.markerIcons || defaultMarkerIcons

    // 过滤错误的点位
    // eslint-disable-next-line
    points = filterCoords(points)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        redraw: () => {
          draw()
        }
      }
    })

    useEffect(() => {
      // Marker common layer and canvas layer init
      layersRef.current = {
        canvasLayer: window.L.canvasIconLayer({}).addTo(map.leafletMap),
        layer: window.L.layerGroup().addTo(map.leafletMap)
      }

      return () => {
        clearMarkers(layersRef.current)
      }
      // eslint-disable-next-line
    }, [])

    useEffect(() => {
      if (_.isEmpty(points)) {
        clearMarkers(layersRef.current)
        return
      }
      draw()
      // eslint-disable-next-line
    }, [JSON.stringify(points)])

    function draw() {
      if (_.isEmpty(points)) {
        return
      }
      clearMarkers(layersRef.current)
      addMarkers(
        points,
        {
          onClick: onClick,
          icon: createMarkerIcon(icon || markerIcons?.markerIcon)
        },
        layersRef.current
      )
    }

    return <></>
  }
)

export default Markers
