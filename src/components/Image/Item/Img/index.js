import React, { useState, useEffect } from 'react'

// 内库使用-start
import AssetUtil from './../../../../utils/AssetUtil'
// 内库使用-end

/* 测试使用-start
import { AssetUtil } from 'lyrixi-design-mobile'
测试使用-end */

// 图片显示
const Img = ({ src }) => {
  const [backgroundImage, setBackGroundImage] = useState('')

  useEffect(() => {
    setBackGroundImage('')
    AssetUtil.loadImage(src, {
      onSuccess: () => {
        setBackGroundImage(src)
      },
      onError: () => {
        setBackGroundImage('error')
      }
    })
  }, [src])

  return (
    <div
      className={`image-item-img${backgroundImage === 'error' ? ' error' : ''}`}
      style={{ backgroundImage: backgroundImage === 'error' ? '' : `url(${backgroundImage})` }}
    ></div>
  )
}

export default Img
