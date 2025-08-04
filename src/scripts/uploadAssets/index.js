const path = require('path')
const assets = path.resolve(__dirname, './assets')
const serverFolderPathStr = 'p/lyrixi/h5/common/'

// md5文件名
// const md5 = require('./md5')
// md5(assets)

// 上传到阿里云 OSS
const upload = require('./utils/upload')
upload(assets, serverFolderPathStr)
