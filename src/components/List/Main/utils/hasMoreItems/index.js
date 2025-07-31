import getListLength from './getListLength'

// Check list if there are more items to load
function hasMoreItems({ list, currentPage, currentList, pagination }) {
  let totalPages = currentList?.totalPages || pagination?.totalPages
  let totalItems = currentList?.totalItems || pagination?.totalItems
  let rows = currentList?.rows || pagination?.rows
  // 根据单页条数和总条数获取总页数
  if (!totalPages && totalItems && rows) {
    totalPages = Math.ceil(totalItems / rows)
  }

  // 当前页数大于等于总页数, 无下一页
  if (typeof totalPages === 'number' && currentPage >= totalPages) {
    return false
  }
  // 列表数大于总条数, 无下一页
  if (typeof totalItems === 'number' && getListLength(list) >= totalItems) {
    return false
  }
  // 当前页列表数小于页限制条数, 无下一页
  if (typeof rows === 'number' && getListLength(currentList) < rows) {
    return false
  }
  return true
}

export default hasMoreItems
