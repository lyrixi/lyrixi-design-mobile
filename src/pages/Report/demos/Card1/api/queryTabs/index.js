// 第三方库导入

// 项目内部模块导入

// 样式图片等资源文件导入

// 获取tabs
function queryTabs() {
  return new Promise((resolve) => {
    resolve({
      data: [
        { id: 'id1', name: 'Type1' },
        { id: 'id2', name: 'Type2' }
      ]
    })
  })
}

export default queryTabs
