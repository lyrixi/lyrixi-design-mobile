import React from 'react'

const PreviewClose = ({ onVisibleChange }) => {
  return (
    <div
      className="image-preview-main-close"
      onClick={(e) => {
        e.stopPropagation()
        onVisibleChange && onVisibleChange(false)
      }}
    ></div>
  )
}

export default PreviewClose
