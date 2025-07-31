import React, { useRef, useState, useEffect } from 'react'
import { Bridge, Image } from 'lyrixi-design-mobile'

export default () => {
  useEffect(() => {
    Bridge.ready(() => {
      console.log('加载桥接')
    })
  }, [])

  const videosRef = useRef(null)
  const [list, setList] = useState([
    {
      id: '1',
      thumb: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
      src: 'https://player.alicdn.com/video/aliyunmedia.mp4',
      status: 'success'
    },
    {
      id: '2',
      thumb: 'https://img.zcool.cn/community/01a9a65dfad975a8012165189a6476.jpg',
      src: 'https://player.alicdn.com/video/aliyunmedia.mp4',
      status: 'fail'
    }
  ])

  return (
    <div id="root" className="position-relative" style={{ height: '300px' }}>
      <Image ref={videosRef} type="video" list={list} />
    </div>
  )
}
