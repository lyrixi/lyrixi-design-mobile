import getListLength from './getListLength'

// Check list if there are more items to load
function hasMoreItems({ list, currentList, pagination }) {
  let totalPages = pagination?.totalPages
  let totalRows = pagination?.totalRows
  let rows = pagination?.rows
  let page = pagination?.page

  // 根据单页条数和总条数获取总页数
  if (typeof totalPages !== 'number' && totalRows && rows) {
    totalPages = Math.ceil(totalRows / rows)
  }

  // 当前页数大于等于总页数, 无下一页
  if (typeof totalPages === 'number' && page >= totalPages) {
    return false
  }

  // 列表数大于总条数, 无下一页
  if (typeof totalRows === 'number' && getListLength(list) >= totalRows) {
    return false
  }
  // 当前页列表数小于页限制条数, 无下一页
  if (typeof rows === 'number' && getListLength(currentList) < rows) {
    return false
  }
  return true
}

export default hasMoreItems
