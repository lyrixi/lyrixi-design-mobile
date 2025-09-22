import React from 'react'
import Uploading from './../Uploading'
import DOMUtil from './../../../utils/DOMUtil'

// 上传按钮
const Choose = ({
  className,
  type,

  // file框属性
  sourceType,

  // 上传DOM和状态
  upload,

  // 上传中
  uploading,

  // Events
  onBeforeChoose,
  onChoose,
  onFileChange
}) => {
  // 选择文件
  function handleFileChange(e) {
    onFileChange && onFileChange(e)
  }

  // 点击选择框
  async function handleUploadClick(e) {
    // Fix react 16 sync events lost issues
    if (e.persist && typeof e.persist === 'function') e.persist()
    let target = e.currentTarget
    e.stopPropagation()

    // 前置校验
    if (typeof onBeforeChoose === 'function') {
      let isOk = await onBeforeChoose(e)
      if (isOk === false) return
    }

    // 点击的是input框
    if (onFileChange) {
      // 防止选择重复图片时不触发
      let inputDOM = target.querySelector('input')
      inputDOM.value = ''
      inputDOM.click()
      return
    }

    // 触发选择
    onChoose && onChoose(e)
  }

  // 上传node
  function getUploadNode() {
    if (typeof upload === 'function') {
      return upload({ uploading })
    }
    if (React.isValidElement(upload)) {
      return upload
    }
    return null
  }

  const uploadNode = getUploadNode()

  if (!onChoose && !onFileChange) return null

  // 判断是否仅相册或者仅拍照
  let fileProps = {}
  if (sourceType.length === 1 && sourceType[0] === 'camera') {
    fileProps = {
      capture: 'camera'
    }
  }
  // file框不支持仅相册
  // else if (sourceType.length === 1 && sourceType[0] === 'album') {
  //   fileProps = {
  //     capture: 'album'
  //   }
  // }

  return (
    <div
      className={DOMUtil.classNames('image-item', 'image-choose', className)}
      data-type="upload"
      onClick={handleUploadClick}
    >
      {/* 拍照或者视频图标 */}
      <div className={DOMUtil.classNames('image-choose-icon', type === 'video' ? 'video' : null)}></div>
      {/* 启用file框 */}
      {onFileChange && (
        <input
          type="file"
          className="image-choose-input-file"
          onChange={handleFileChange}
          accept="image/*"
          // 以下的属性值会导致: 部分安卓机会不显示拍照
          // accept="image/jpg,image/jpeg,image/png,image/gif,image/bmp"
          onClick={(e) => {
            e.stopPropagation()
          }}
          // file框属性
          {...(fileProps || {})}
        />
      )}
      {uploadNode && uploadNode}
      {/* 上传中 */}
      <Uploading uploading={uploading} />
    </div>
  )
}

export default Choose
