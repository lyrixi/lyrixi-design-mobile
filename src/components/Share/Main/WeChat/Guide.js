import React from 'react'
import { createPortal } from 'react-dom'

function Guide({ portal, open, maskClassName, maskStyle, onClose }) {
  const handlerClick = (e) => {
    e.stopPropagation()
    if (onClose) onClose()
  }

  return createPortal(
    <div
      className={`mask share-mask${maskClassName ? ' ' + maskClassName : ''}${
        open ? ' active' : ''
      }`}
      style={maskStyle}
      onClick={handlerClick}
    >
      <div className="share-tip-arrow"></div>
      <div className={`share-tip`}>
        <div className="share-tip-text">1.点击右上角</div>
        <div className="share-tip-text">
          2.点击
          <div className="share-tip-wechat-friend"></div>
          发送给朋友或
          <div className="share-tip-wechat-moment"></div>
          分享给朋友圈
        </div>
      </div>
    </div>,
    portal || document.getElementById('root') || document.body
  )
}

export default Guide
