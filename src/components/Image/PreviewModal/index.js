import React, { useEffect, forwardRef } from 'react'
import { createPortal } from 'react-dom'
import PreviewMain from './../PreviewMain'

// 内库使用-start
import SelectModal from './../../Modal/NavBarModal'
// 内库使用-end

/* 测试使用-start
import { Modal } from 'lyrixi-design-mobile'
const SelectModal = Modal.NavBarModal
测试使用-end */

const PreviewModal = forwardRef(
  (
    {
      visible,
      type, // video | image
      // list, // 需要预览的资源列表{src: '图片或视频的地址', thumb: '封面地址', type: 'video|image, 默认image', children: node}
      current, // 当前显示的资源序号或者当前资源的src链接

      onVisibleChange,

      // Style
      allowChoose = false,
      allowClear = false,
      modal, // page
      portal,

      // Config
      count,
      sourceType = ['album', 'camera'],
      sizeType = ['compressed'], // ['original', 'compressed']
      maxWidth,
      list, // 需要预览的资源列表{src: '图片或视频的地址', thumb: '封面地址', type: 'video|image, 默认image', children: node}

      // Events
      onBeforeChoose,
      onChoose,
      onFileChange,
      onUpload,
      onChange,

      modalProps,
      mainProps
    },
    ref
  ) => {
    // 在预览页面, 列表被删除完成时, 隐藏modal
    useEffect(() => {
      if (!list || !list.length || !list[0].src) {
        if (visible) {
          onVisibleChange && onVisibleChange(false)
        }
      }
      // eslint-disable-next-line
    }, [list])

    // 图片单击隐藏, 视频单击无反应, 显示不能触发
    function handleVisibleChange(visible) {
      if (!visible) {
        if (onVisibleChange) onVisibleChange(false)
      }
    }

    if (modal === 'page') {
      return createPortal(
        <PreviewMain
          safeArea={true}
          {...mainProps}
          ref={ref}
          visible={visible}
          type={type}
          list={list}
          current={current}
          // Style
          className="image-preview-main-page"
          allowClose={true}
          allowChoose={allowChoose}
          allowClear={allowClear}
          // Config
          count={count}
          sourceType={sourceType}
          sizeType={sizeType}
          maxWidth={maxWidth}
          // Events
          onBeforeChoose={onBeforeChoose}
          onChoose={onChoose}
          onFileChange={onFileChange}
          onUpload={onUpload}
          onChange={onChange}
          onVisibleChange={onVisibleChange}
        />,
        portal || document.getElementById('root') || document.body
      )
    }

    return (
      <SelectModal
        {...modalProps}
        visible={visible}
        animation="slideUp"
        className="image-preview-modal"
        onVisibleChange={handleVisibleChange}
        ok={false}
      >
        <PreviewMain
          {...mainProps}
          ref={ref}
          visible={visible}
          type={type}
          list={list}
          current={current}
          // Style
          allowClose={false}
          allowChoose={allowChoose}
          allowClear={allowClear}
          // Config
          count={count}
          sourceType={sourceType}
          sizeType={sizeType}
          maxWidth={maxWidth}
          // Events
          onBeforeChoose={onBeforeChoose}
          onChoose={onChoose}
          onFileChange={onFileChange}
          onUpload={onUpload}
          onChange={onChange}
          onVisibleChange={onVisibleChange}
        />
      </SelectModal>
    )
  }
)

export default PreviewModal
