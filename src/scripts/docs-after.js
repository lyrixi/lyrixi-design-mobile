const fs = require('fs')

// 删除目录
function deleteFolder(folder) {
  if (fs.existsSync(folder)) {
    try {
      fs.rmSync(folder, { recursive: true })
      console.log('successfully deleted' + folder)
    } catch (error) {
      console.error('delete was an error:', error.message)
    }
  }
}
// 创建目录
function createFolder(folder) {
  try {
    fs.mkdirSync(folder)
    console.log('successfully create' + folder)
  } catch (error) {
    console.error('create was an error:', error.message)
  }
}
// 复制目录
function copyFolder(current, target, cb) {
  fs.cp(current, target, { recursive: true }, (err) => {
    if (err) {
      console.error(err)
      return
    }

    cb && cb()
  })
}

// 复制src/externalAssets到src/docs/assets
const currentLocaleFolder = `./externalAssets`
const targetLocaleFolder = `./docs/assets`
deleteFolder(targetLocaleFolder)
createFolder(targetLocaleFolder)
copyFolder(currentLocaleFolder, targetLocaleFolder)
