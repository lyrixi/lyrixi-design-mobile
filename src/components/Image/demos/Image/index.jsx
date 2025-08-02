import React, { useEffect, useState, useRef } from 'react'
import { SafeArea, HistoryUtil, Toast, Layout, Divider, Bridge, Button, Image } from 'lyrixi-design-mobile'
import uploadItem from './browser/uploadItem'
// import VConsole from 'vconsole'
// new VConsole()
export default () => {
  const imageUploaderRef = useRef(null)
  const watermarkRef = useRef(null)

  const [list, setList] = useState([
    {
      id: '1',
      thumb: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
      src: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
      status: 'fail'
    },
    {
      id: '2',
      thumb: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
      src: 'https://www.wilsoncomm.com.hk/image/cache/catalog/product-3566/6ca91b2b19a3d19b6cbe4f618a028e65-850x850.jpg'
      // status: 'uploading'
    },
    {
      id: '3',
      thumb: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
      thumb: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png'
    },
    {
      id: '4',
      thumb: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
      src: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png'
    }
  ])

  const [customList, setCustomList] = useState([])

  useEffect(() => {
    Bridge.ready(() => {
      console.log('加载桥接')
    })
    // SafeArea.autoSafeArea({ debug: true })
  }, [])

  // 异步上传
  async function handleAsyncUpload() {
    let isOK = Image.validateListStatus(list)
    if (isOK !== true) {
      Toast.show({ content: isOK })
      let result = await imageUploaderRef.current.uploadList()
      console.log('上传结果：', result)
      return
    }
  }

  function handleBeforeChoose() {
    watermarkRef.current = null
    return new Promise((resolve) => {
      setTimeout(() => {
        watermarkRef.current = ['watermark line1']
        resolve(true)
      }, 2000)
    })
  }

  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>Default Image</Divider>
        <Image
          // async
          // reUpload={false}

          // Default
          allowClear
          allowChoose
          uploadPosition="start"
          sizeType={['compressed']}
          sourceType={['camera', 'album']}
          list={list}
          count={9}
          onFileChange={async ({ fileURL, fileData }) => {
            await handleBeforeChoose()
            // 待传文件
            return [
              {
                status: 'choose',
                localId: fileURL,
                fileData: fileData,
                thumb: fileURL,
                src: fileURL,
                watermark: watermarkRef.current,
                path: ``
              }
            ]
          }}
          onChange={(newList) => {
            console.log('修改:', newList)
            setList(newList)
          }}
          onUpload={uploadItem}
        />

        <Divider>Preview Operate</Divider>
        <Image
          ref={imageUploaderRef}
          // Preview operate: start
          upload={<div style={{ width: '100%', height: '100%', backgroundColor: 'ref' }}>1</div>}
          allowChoose={list?.length ? false : true}
          visibleCount={1}
          style={{
            '--cell-width': '32px',
            '--cell-height': '32px',
            '--cell-radius': '6px',
            '--count-font-size': '12px',
            '--choose-icon-size': '12px'
          }}
          preview={{
            modal: 'page',
            allowChoose: true,
            allowClear: true,
            mainProps: {
              style: {
                zIndex: 1000
              }
            },
            onVisibleChange: (visible) => {
              if (!visible) {
                HistoryUtil.back()
              }
            }
          }}
          onPreview={(item, index) => {
            HistoryUtil.navigate('imagePreview=1', {
              onBack: () => {
                imageUploaderRef.current?.setPreviewVisible?.(null)
              }
            })
            return 'browser'
          }}
          // Preview operate: end
          sizeType={['compressed']}
          sourceType={['camera', 'album']}
          list={list}
          count={9}
          onFileChange={async ({ fileURL, fileData }) => {
            await handleBeforeChoose()
            // 待传文件
            return [
              {
                status: 'choose',
                localId: fileURL,
                fileData: fileData,
                thumb: fileURL,
                src: fileURL,
                watermark: watermarkRef.current,
                path: ``
              }
            ]
          }}
          onChange={(newList) => {
            console.log('修改:', newList)
            setList(newList)
          }}
          onUpload={uploadItem}
        />
      </Layout.Main>
      <Layout.Footer>
        <Button className="flex primary" onClick={handleAsyncUpload}>
          Sync Upload
        </Button>
      </Layout.Footer>
    </Layout>
  )
}
