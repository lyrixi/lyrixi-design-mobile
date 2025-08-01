import React, { useRef, useEffect } from 'react'
import { Layout, VideoPlayer, Button } from 'lyrixi-design-mobile'

export default () => {
  const videoPlayerRef = useRef(null)
  return (
    <Layout className="full">
      <Layout.Main>
        <VideoPlayer
          ref={videoPlayerRef}
          poster={'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png'}
          src={'https://player.alicdn.com/video/aliyunmedia.mp4'}
          autoPlay={false}
          header={
            <div
              className="videoplayer-header-close"
              onClick={() => {
                alert('close')
              }}
            ></div>
          }
        />
      </Layout.Main>
      <Layout.Footer>
        <Button
          onClick={() => {
            videoPlayerRef.current.play()
          }}
        >
          Play
        </Button>
        <Button
          onClick={() => {
            videoPlayerRef.current.pause()
          }}
        >
          Pause
        </Button>
      </Layout.Footer>
    </Layout>
  )
}
