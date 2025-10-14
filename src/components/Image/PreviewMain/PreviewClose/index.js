import React from 'react'

const PreviewClose = ({ onClose }) => {
  return (
    <div
      className="image-preview-main-close"
      onClick={(e) => {
        e.stopPropagation()
        onClose && onClose()
      }}
    ></div>
  )
}

export default PreviewClose
