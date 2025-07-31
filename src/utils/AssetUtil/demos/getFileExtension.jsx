import React from 'react'
import { AssetUtil } from 'lyrixi-design-mobile'

export default () => {
  return (
    <>
      <div>
        {AssetUtil.getFileExtension(
          '//colaboy.github.io/lyrixi-design-mobile/assets/plugin/leaflet/js/leaflet.js'
        )}
      </div>
      <div>{AssetUtil.getFileExtension('leaflet.pdf')}</div>
      <div>
        {AssetUtil.getFileExtension(
          '//colaboy.github.io/lyrixi-design-mobile/assets/plugin/leaflet/js/leaflet.image'
        )}
      </div>
      <div>
        {AssetUtil.getFileExtension(
          '//colaboy.github.io/lyrixi-design-mobile/assets/plugin/leaflet/js/leaflet.'
        ) || 'No Extension'}
      </div>
      <div>{AssetUtil.getFileExtension('leaflet. a') || 'No Extension'}</div>
    </>
  )
}
