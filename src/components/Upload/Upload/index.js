import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import getAccept from './../utils/getAccept'
import fileChoose from './fileChoose'
import choose from './choose'
import UploadBase from './../Base'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import Loading from './../../Loading'
import Toast from './../../Toast'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Loading, Toast } from 'lyrixi-design-mobile'
测试使用-end */

// 文件上传
function Upload(
  {
    // Style
    allowChoose = false,
    allowClear = false,
    uploadPosition,
    upload,
    uploading,

    // Config
    async = false,
    reUpload = true,
    count,
    extension,
    maxSize, // bytes
    list = [], // [{name: '附件名称', src: '全路径', path: '目录/年月/文件名.jpg', status: 'choose|uploading|fail|success', children: node}]

    // Events
    onBeforeChoose,
    onChoose,
    onFileChange,
    onUpload,
    onChange,
    onPreview,
    ...props
  },
  ref
) {
  const uploadRef = useRef(null)

  const onChangeRef = useRef()
  onChangeRef.current = onChange

  // Judge wether to display choose button
  let chooseVisible = allowChoose
  if (typeof count === 'number' && (list || []).length >= count) {
    chooseVisible = false
  }

  useImperativeHandle(ref, () => {
    return {
      ...uploadRef.current,
      chooseFile: _choose,
      choose: _choose,
      uploadList: uploadList,
      showLoading: showLoading,
      hideLoading: hideLoading
    }
  })

  // Expose manual choose
  async function _choose(e) {
    if (!chooseVisible) {
      Toast.show({
        content: LocaleUtil.locale('此控件无上传功能, 请勿调用拍照', 'SeedsUI_no_upload_feature')
      })
      return false
    }
    let uploadDOM = uploadRef.current?.rootDOM?.querySelector?.('.upload-choose')
    if (!uploadDOM) {
      Toast.show({
        content: LocaleUtil.locale('未找到上传按钮, 调用上传失败', 'SeedsUI_no_upload_button')
      })
      return false
    }

    let chooseCallBack = e?.nativeEvent?.target ? handleFileChange : handleChoose
    let chooseOk = await chooseCallBack(e)
    return chooseOk
  }

  // 显隐Loading
  function showLoading({ content, index } = {}) {
    let rootDOM = uploadRef.current?.rootDOM || null
    if (!rootDOM) return
    // 根节点遮罩
    rootDOM.classList.add('uploading')
    // 新增按钮遮罩
    let uploadDOM = rootDOM.querySelector('.upload-choose')
    if (uploadDOM) uploadDOM.classList.add('uploading')
    // 当前项遮罩
    let itemDOM =
      typeof index === 'number' ? rootDOM.querySelector(`[data-index="${index}"]`) : null
    if (itemDOM) {
      itemDOM.classList.remove('fail')
      itemDOM.classList.add('uploading')
    }

    Loading.show(content ? { content } : { className: 'hide' })
  }

  function hideLoading({ failIndexes } = {}) {
    let rootDOM = uploadRef.current?.rootDOM || null
    if (!rootDOM) return
    // 根节点遮罩
    rootDOM.classList.remove('uploading')
    // 新增按钮遮罩
    let uploadDOM = rootDOM.querySelector('.upload-choose')
    if (uploadDOM) uploadDOM.classList.remove('uploading')
    // 当前项遮罩
    let itemsDOM = rootDOM.querySelectorAll(`[data-index]`)
    if (itemsDOM) {
      for (let itemDOM of itemsDOM) {
        let itemIndex = Number(itemDOM.getAttribute('data-index'))
        itemDOM.classList.remove('uploading')
        // 更新失败状态
        if (Array.isArray(failIndexes) && failIndexes.includes(itemIndex)) {
          itemDOM.classList.add('fail')
        }
      }
    }

    Loading.hide()
  }

  // 上传文件
  async function uploadItem(item) {
    if (typeof onUpload !== 'function') {
      Toast.show({
        content: `没有onUpload入参, 无法上传`
      })
    }

    // 已经上传成功, 无需要再次上传
    if (item?.src?.startsWith?.('http')) {
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

  // 上传
  async function uploadList(newList, { action } = {}) {
    if (!newList) {
      // eslint-disable-next-line
      newList = [...list]
    }
    if (!newList) return

    let hasUploaded = false
    // 开始上传
    showLoading({ content: LocaleUtil.locale('上传中', 'SeedsUI_uploading') })
    for (let [index, item] of newList.entries()) {
      // 只上传未上传的文件
      if (item.status === 'choose') {
        newList[index] = await uploadItem(item, index)
        hasUploaded = true
      }
    }
    hideLoading()

    // 不支持重新上传，则过滤上传失败的文件
    if (!reUpload) {
      if (Array.isArray(newList) && newList.length) {
        let failCount = 0
        // eslint-disable-next-line
        newList = newList.filter((photo) => {
          if (
            photo.status === 'fail' ||
            photo.status === 'choose' ||
            photo.status === 'uploading'
          ) {
            failCount++
            return false
          }
          return true
        })
        // 上传失败
        if (failCount) {
          Toast.show({
            content: `${LocaleUtil.locale(
              '网络异常，上传失败',
              'SeedsUI_upload_network_error'
            )}${failCount}`
          })
        }
      }
    }

    if (hasUploaded) {
      onChangeRef.current && onChangeRef.current(newList, { action: action || 'upload' })
    }

    return newList
  }

  // 重新上传
  async function handleReUpload(item, index) {
    let newList = [...list]
    // 开始上传
    showLoading({ index })
    newList[index] = await uploadItem(item, index)
    hideLoading(newList[index].status === 'fail' ? { failIndexes: [index] } : undefined)

    onChangeRef.current && onChangeRef.current(newList, { action: 'reUpload' })
  }

  // 选择文件
  async function handleFileChange(e) {
    showLoading()
    let chooseResult = await fileChoose({
      file: e.nativeEvent.target,
      async,
      maxSize,
      count,
      extension,
      list,
      uploadPosition,
      uploadList,
      onFileChange,
      onChange: onChangeRef.current
    })
    hideLoading()
    return chooseResult
  }

  // 选择文件
  async function handleChoose(e) {
    showLoading()
    let chooseResult = await choose({
      async,
      maxSize,
      count,
      extension,
      list,
      uploadPosition,
      uploadList,
      onChoose,
      onChange: onChangeRef.current
    })
    hideLoading()
    return chooseResult
  }

  // 删除
  function handleDelete(item, index) {
    let newList = list.filter((current, currentIndex) => {
      return currentIndex !== index
    })
    onChangeRef.current && onChangeRef.current(newList, { action: 'delete' })
  }

  return (
    <UploadBase
      ref={uploadRef}
      // Style
      uploadPosition={uploadPosition}
      upload={upload}
      uploading={uploading}
      list={(list || []).map((item) => {
        return {
          ...item,
          src: item.localId || item.src
        }
      })}
      // 文件数量未超时可以选择
      onFileChange={onFileChange && chooseVisible ? handleFileChange : null}
      onChoose={onChoose && chooseVisible ? handleChoose : null}
      onDelete={allowClear ? handleDelete : null}
      onReUpload={handleReUpload}
      onBeforeChoose={
        typeof onBeforeChoose === 'function'
          ? async (e) => {
              showLoading()
              let isOk = await onBeforeChoose(e)
              hideLoading()
              return isOk
            }
          : null
      }
      onPreview={onPreview}
      {...props}
      fileProps={{
        accept: getAccept(extension),
        ...props?.fileProps
      }}
    />
  )
}

export default forwardRef(Upload)
