const OSS = require('ali-oss')
const path = require('path')
const fs = require('fs')
const recursive = require('recursive-readdir')
// md5文件名
const md5File = require('./md5File')

// 配置 OSS 客户端
const client = new OSS({
  region: '', // 根据你的存储桶地域修改
  accessKeyId: '',
  accessKeySecret: '',
  endpoint: '',
  bucket: '', // 根据你的存储桶地域修改
  timeout: '300s'
})

async function uploadDirectory(localFolderPath, serverFolderPathStr) {
  try {
    // 获取文件夹所有文件路径
    const files = await recursive(localFolderPath)

    for (const file of files) {
      // 计算相对路径
      const relativePath = path.relative(localFolderPath, file)
      // OSS 对象路径
      const ossObjectPath = path.join(serverFolderPathStr, relativePath).replace(/\\/g, '/')

      // 增加文件内容md5, 用于客户端本地js对比阿里云js内容是否变化
      let fileContentMd5 = md5File(file)
      console.log(`🌍 开始上传 ${relativePath}: ${fileContentMd5}`)

      // 上传文件
      await client.put(ossObjectPath, file, {
        headers: {
          // 关键：添加自定义元数据头
          'x-oss-meta-origin-md5': fileContentMd5
        }
      })
      console.log(`✅ 上传成功: https://res.lyrixi.com/${ossObjectPath}`)
    }

    console.log('🎉 所有文件上传完成！')
  } catch (err) {
    console.error('❌ 上传失败:', err)
  }
}

// 执行上传
// uploadDirectory()

module.exports = uploadDirectory
