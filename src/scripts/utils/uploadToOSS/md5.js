const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

/**
 * 计算文件的 MD5 hash，取前 length 位
 */
function calculateMd5HashPrefix(filePath, length = 8) {
  const buffer = fs.readFileSync(filePath)
  const hash = crypto.createHash('md5')
  hash.update(buffer)
  return hash.digest('hex').slice(0, length)
}

/**
 * 重命名为 xxx.hash.js 格式
 */
function renameFileWithHash(filePath) {
  const dir = path.dirname(filePath)
  const ext = path.extname(filePath)
  const originalName = path.basename(filePath, ext)

  // 如果原始名里包含版本信息如 `.min.js`，提取基础名
  // 如 ahooks.1.8.0.min.js → ahooks
  const baseName = originalName.split('.')[0]
  const hash = calculateMd5HashPrefix(filePath)

  const newFileName = `${baseName}.${hash}.js`
  const newFilePath = path.join(dir, newFileName)

  fs.renameSync(filePath, newFilePath)
  console.log(`✅ 重命名: ${path.basename(filePath)} → ${newFileName}`)
}

/**
 * 遍历目录，重命名所有 .js 文件
 */
function processJsFilesInDir(dirPath) {
  const files = fs.readdirSync(dirPath)

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file)
    const stat = fs.statSync(fullPath)

    if (stat.isFile() && path.extname(file) === '.js') {
      renameFileWithHash(fullPath)
    }
  })
}

module.exports = processJsFilesInDir
