import React, { useEffect, useState, useRef } from 'react'
import { Toast, Page, Divider, Bridge, Button, Upload } from 'lyrixi-design-mobile'
import uploadItem from './browser/uploadItem'

export default () => {
  const uploadRef = useRef(null)
  const [list, setList] = useState([
    {
      name: '1',
      src: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png',
      status: 'fail'
    },
    {
      name: '2',
      src: 'https://res.waiqin365.com/d/waiqin365_h5/seedsui/assets/images/logo.png'
    }
  ])

  const [customList, setCustomList] = useState([])

  useEffect(() => {
    Bridge.ready(() => {
      console.log('加载桥接')
    })
  }, [])

  // 异步上传
  async function handleAsyncUpload() {
    let isOK = Upload.validateListStatus(list)
    if (isOK !== true) {
      Toast.show({ content: isOK })
      let result = await uploadRef.current.uploadList()
      console.log('上传结果：', result)
      return
    }
  }

  function handleBeforeChoose() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, 2000)
    })
  }

  return (
    <Page className="full bg-white">
      <Page.Main>
        <Divider>Default Upload</Divider>
        <Upload
          // upload={(...params) => {
          //   console.log(...params)
          //   return <div>上传</div>
          // }}
          ref={uploadRef}
          reUpload={false}
          // async
          allowChoose
          allowClear
          uploadPosition="start"
          maxSize={300 * 1024 * 1024}
          list={list}
          count={9}
          onFileChange={async ({ fileName, fileSize, fileURL, fileData }) => {
            await handleBeforeChoose()
            // 待传文件
            return [
              {
                sourceType: 'local',
                status: 'choose',
                name: fileName,
                size: fileSize,
                uploadDir: 'uploadDir/202504',
                src: fileURL,
                path: '',
                fileData: fileData
              }
            ]
          }}
          onChange={(newList) => {
            console.log('修改:', newList)
            setList(newList)
          }}
          onUpload={uploadItem}
        />
        <Divider>Custom Upload</Divider>
        <Upload
          className="custom-upload"
          reUpload={false}
          // async
          allowChoose
          allowClear
          uploadPosition="start"
          maxSize={300 * 1024 * 1024}
          list={customList}
          count={9}
          onFileChange={({ fileName, fileSize, fileURL, fileData }) => {
            // 待传文件
            return [
              {
                sourceType: 'local',
                status: 'choose',
                name: fileName,
                size: fileSize,
                uploadDir: 'uploadDir/202504',
                src: fileURL,
                path: '',
                fileData: fileData
              }
            ]
          }}
          onChange={(newList) => {
            console.log('修改:', newList)
            setCustomList(newList)
          }}
          onUpload={uploadItem}
        >
          {Array.isArray(customList) && customList.length ? (
            <Upload.List
              list={customList}
              onPreview={() => {
                console.log('preview')
                return false
              }}
            />
          ) : (
            'Custom Upload Render'
          )}
        </Upload>
      </Page.Main>
      <Page.Footer>
        <Button className="flex" color="primary" onClick={handleAsyncUpload}>
          Sync Upload
        </Button>
      </Page.Footer>
    </Page>
  )
}
