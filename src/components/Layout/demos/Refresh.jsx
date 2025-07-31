import React from 'react'
import { Layout, List } from 'lyrixi-design-mobile'
import { Swiper, SwiperSlide } from 'swiper/react'

const list = []
for (let i = 0; i < 100; i++) {
  list.push({
    id: i,
    name: '测试数据' + i
  })
}

export default () => {
  function handleTopRefresh() {
    console.log('onTopRefresh')
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('自定义提示')
      }, 1000)
    })
  }
  function handleBottomRefresh() {
    console.log('底部加载')
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, 1000)
    })
  }
  return (
    // <div id="root" style={{ height: '300px', position: 'relative' }}>
    <Layout safeArea className="full">
      <Layout.Header style={{ height: 50, backgroundColor: 'white' }}>Header</Layout.Header>
      <Layout.Main
        onTopRefresh={handleTopRefresh}
        onBottomRefresh={handleBottomRefresh}
        touchStopPropagation={false}
      >
        <Swiper
          spaceBetween={50}
          style={{ height: '200px' }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
        {list.map((item, index) => {
          return (
            <div key={index} style={{ height: 40 }}>
              {item.name}
            </div>
          )
        })}
        <List.InfiniteScroll />
      </Layout.Main>
      <Layout.Footer
        onChange={(newValue) => {
          console.log(newValue)
        }}
        buttons={[
          {
            id: 'ok',
            name: 'Ok',
            primary: true
          }
        ]}
      />
    </Layout>
    // </div>
  )
}
