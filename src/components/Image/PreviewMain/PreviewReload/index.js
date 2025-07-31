import React from 'react'

const PreviewReload = ({ onReUpload }) => {
  return (
    <div
      className="image-preview-main-reload"
      onClick={(e) => {
        e.stopPropagation()
        onReUpload && onReUpload()
      }}
    >
      <div className="image-preview-main-reload-icon">
        <div className="image-preview-main-reload-icon-fail"></div>
      </div>
    </div>
  )
}

export default PreviewReload
