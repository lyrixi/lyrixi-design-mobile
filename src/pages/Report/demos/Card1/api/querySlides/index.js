// 第三方库导入

// 项目内部模块导入

// 样式图片等资源文件导入

// 获取滑块
function querySlides() {
  return new Promise((resolve) => {
    resolve({
      data: [
        {
          id: 'week',
          name: 'Week'
        },
        {
          id: 'month',
          name: 'Month'
        }
      ]
    })
  })
}

export default querySlides
