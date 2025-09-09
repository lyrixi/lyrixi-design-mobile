// 判断value中是否有某一项为末级，返回该项的索引（0开始），没有则返回null
function findDistrictLeafIndex(value, type) {
  // 对象
  if (Array.isArray(value?.type) && value.type.includes(type)) {
    return 0
  }

  // 数组
  if (!Array.isArray(value) || value.length === 0) return null

  for (let i = 0; i < value.length; i++) {
    const item = value[i]
    if (item.isLeaf) {
      return i
    }

    if (!item || !item.type) continue
    if (Array.isArray(item.type)) {
      if (item.type.includes(type)) {
        return i
      }
    } else {
      if (item.type === type) {
        return i
      }
    }
  }
  return null
}

export default findDistrictLeafIndex
