// 判断是否显示展开收起按钮
function getEllipsisOverflow({ rows, rowHeight, containerDOM }) {
  if (!containerDOM || !rows) {
    return false
  }

  // 显示复制的容器, 隐藏原容器,
  const containerDuplicate = containerDOM.cloneNode(true)
  containerDOM.parentNode.insertBefore(containerDuplicate, containerDOM.nextElementSibling)
  containerDOM.classList.add(`hide`)

  // Force line clamp
  containerDuplicate.classList.add(`typography-ellipsis`)
  containerDuplicate.style.webkitLineClamp = rows
  containerDuplicate.style.height = rows * (rowHeight || 20) + 'px'

  // Judge if the content is overflow
  let isOverflow = false
  if (containerDuplicate.scrollHeight > containerDuplicate.clientHeight) {
    isOverflow = true
  }

  // 还原容器
  containerDuplicate.parentNode.removeChild(containerDuplicate)
  containerDOM.classList.remove(`hide`)

  return isOverflow
}

export default getEllipsisOverflow
