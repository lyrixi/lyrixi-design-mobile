const params = require('./../../package.json')
const path = require('path')
const assets = path.resolve(`./../assets/locale`)
const serverFolderPathStr = `p/lyrixi/h5/locale/${params.name}/${params.version}`
// 上传到阿里云 OSS
const upload = require('./utils/uploadToOSS/index.js')
upload(assets, serverFolderPathStr)
