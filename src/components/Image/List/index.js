import React from 'react'
import Item from './../Item'

// 照片视频预览
const List = ({
  list, // [{id: '', name: '', thumb: '', src: '', status: 'choose|uploading|fail|success'}]
  uploading,
  visibleCount,
  allowClear,
  // Events
  onChange,
  onReUpload,
  onPreview // 是否支持单击预览, readOnly为true时才生效
  // ...props
}) => {
  // Delete
  function handleDelete(item, index) {
    let newList = list.filter((photo, photoIndex) => {
      return photoIndex !== index
    })
    onChange && onChange(newList, { action: 'delete' })
  }

  return (
    <>
      {/* 图片列表 */}
      {list && list.length > 0
        ? list.map((item, index) => {
            if (visibleCount && index + 1 > visibleCount) return null
            return (
              <Item
                key={index}
                remainCount={
                  visibleCount && index === visibleCount - 1 ? list.length - visibleCount : null
                }
                item={item}
                index={index}
                uploading={uploading}
                onDelete={typeof onChange === 'function' && allowClear ? handleDelete : null}
                onReUpload={onReUpload}
                onPreview={(e) => {
                  onPreview && onPreview(item, index)
                }}
              />
            )
          })
        : null}
    </>
  )
}

export default List
