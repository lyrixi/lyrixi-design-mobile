import coordsToFit from './../../utils/coordsToFit'
import createMarkerIcon from './createMarkerIcon'
import clearMarkers from './clearMarkers'
import markerClickLeaflet from './markerClickLeaflet'
import markerClickCanvas from './markerClickCanvas'

// Marker
function addMarkers(points, { icon, onClick = null }, { layer, canvasLayer }) {
  if (!canvasLayer || !layer) return

  // eslint-disable-next-line
  points = coordsToFit(points)
  // eslint-disable-next-line
  points = points.filter((point) => point)
  if (!Array.isArray(points) || points.length === 0) return

  let enableCanvas = points.length > 100

  // Draw markers
  for (let point of points) {
    let marker = window.L.marker(
      [point.latitude, point.longitude],
      // options
      {
        icon: point?.icon ? createMarkerIcon(point.icon) : icon
      }
    )
    if (enableCanvas) {
      canvasLayer.addMarker(marker)
    } else {
      marker.addTo(layer)
    }
  }

  if (!onClick) return
  // Leaflet canvas marker plugin click
  if (enableCanvas) {
    markerClickCanvas({
      points,
      layerGroup: canvasLayer,
      clearMarkers: () => clearMarkers({ layer, canvasLayer }),
      defaultIcon: icon,
      onClick
    })
  } else {
    markerClickLeaflet({
      points,
      clearMarkers: () => clearMarkers({ layer, canvasLayer }),
      layerGroup: layer,
      defaultIcon: icon,
      onClick
    })
  }
}

export default addMarkers
