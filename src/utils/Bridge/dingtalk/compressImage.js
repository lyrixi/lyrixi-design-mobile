// https://open.dingtalk.com/document/isvapp/jsapi-compress-image
// 压缩图片, file: {filePath: '', fileName: '', fileType: ''}
function compressImage(file) {
  return new Promise((resolve) => {
    window.top.dd.compressImage({
      filePaths: [file.filePath],
      compressLevel: 2,
      success: (res) => {
        const { filePaths } = res
        file.filePath = filePaths?.[0] || file.filePath
        resolve(file)
      },
      fail: () => {
        resolve(file)
      }
    })
  })
}

export default compressImage
