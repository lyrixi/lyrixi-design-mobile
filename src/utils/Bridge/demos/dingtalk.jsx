import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

// 内库使用-start
import { Layout, Divider } from 'lyrixi-design-mobile'
// 内库使用-end

export default () => {
  return (
    <Layout className="full">
      <Layout.Main>
        <Divider>钉钉选择照片(结果不同)</Divider>
        <SyntaxHighlighter
          language="javascript"
          customStyle={{
            overflowX: 'auto' // 抵消 padding
          }}
          style={a11yDark}
          showLineNumbers // 显示行号（可选）
          wrapLongLines // 自动换行（可选
        >
          {`Bridge.chooseImage({
  count: 5,
  sizeType: ['compressed'],
  sourceType: ['album', 'camera'],
  success: async (res) => {
    // Difference is result => res.localFiles
  }
})`}
        </SyntaxHighlighter>
        <Divider>钉钉上传(类似微信小程序上传)</Divider>
        <SyntaxHighlighter
          language="javascript"
          customStyle={{
            overflowX: 'auto' // 抵消 padding
          }}
          style={a11yDark}
          showLineNumbers // 显示行号（可选）
          wrapLongLines // 自动换行（可选
        >
          {`Bridge.uploadImage({
  url: window.origin + ownServerUrl,
  localFile: localFile, // { fileType: '', filePath: '' }
  header: {
    'Content-Type': 'multipart/form-data',
    Cookie: document.cookie,
    Authorization:  \`Bearer \${localStorage.getItem('xxx-token')}\` // 上传需要单独处理cookie
  },
  formData: {
    file1: localFile.filePath,
    uploadPath: formatUploadDir(uploadDir),
    // other formData
  },
  success: function (result) {
    // Own server return result
  },
  fail: function (error) {
    // error
  }
})`}
        </SyntaxHighlighter>
      </Layout.Main>
    </Layout>
  )
}
