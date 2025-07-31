// 内库使用-start
import Toast from './../../../Toast'
// 内库使用-end

/* 测试使用-start
import { Toast } from 'lyrixi-design-mobile'
测试使用-end */

// 上传文件
async function uploadItem(item, { onUpload }) {
  if (typeof onUpload !== 'function') {
    Toast.show({
      content: `没有onUpload入参, 无法上传`
    })
  }

  // 已经上传成功, 无需要再次上传(钉钉本地照片开头为https://resource/)
  if (item?.src?.startsWith?.('http') && !item?.src?.startsWith?.('https://resource/')) {
    item.status = 'success'
    return item
  }

  // 开始上传
  let result = await onUpload(item)

  // 上传失败
  if (typeof result === 'string') {
    Toast.show({
      content: result
    })
    item.status = 'fail'
    return item
  }

  // 更新状态
  return { ...item, status: 'success', ...result }
}

export default uploadItem
