import React, { useRef, useEffect } from 'react'
import { Page, VideoPlayer, Button } from 'lyrixi-design-mobile'

export default () => {
  const videoPlayerRef = useRef(null)
  return (
    <Page>
      <Page.Main>
        <VideoPlayer
          ref={videoPlayerRef}
          poster={'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png'}
          src={'https://player.alicdn.com/video/aliyunmedia.mp4'}
          autoPlay={false}
          headerRender={() => (
            <div
              className="videoplayer-header-close"
              onClick={() => {
                alert('close')
              }}
            ></div>
          )}
        />
      </Page.Main>
      <Page.Footer>
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
      </Page.Footer>
    </Page>
  )
}
