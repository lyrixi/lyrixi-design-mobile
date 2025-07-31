function getEllipsisVisibleContent({ content, rows, rowHeight, containerDOM }) {
  if (!rows || typeof rows !== 'number' || typeof content !== 'string' || !containerDOM) {
    return content
  }

  // 显示复制的容器, 隐藏原容器,
  const containerDuplicate = containerDOM.cloneNode(false)
  containerDOM.parentNode.insertBefore(containerDuplicate, containerDOM.nextElementSibling)
  containerDOM.classList.add(`hide`)

  // Force line clamp
  containerDuplicate.classList.add(`typography-ellipsis`)
  containerDuplicate.style.webkitLineClamp = rows
  containerDuplicate.style.height = rows * (rowHeight || 20) + 'px'

  // If scrollHeight > clientHeight, Intercept the content
  let visibleContent = ''
  let words = content.split('')
  for (let word of words) {
    visibleContent += word
    containerDuplicate.innerHTML = visibleContent
    if (containerDuplicate.scrollHeight > containerDuplicate.clientHeight) {
      // 为...留空间
      visibleContent = visibleContent.slice(0, visibleContent.length - 4)
      break
    }
  }

  // If expandable, Keep intercepting the content
  if (visibleContent?.length !== content?.length) {
    visibleContent = visibleContent.slice(0, visibleContent.length - 4)
    visibleContent += '...'
  }

  // 还原容器
  containerDuplicate.parentNode.removeChild(containerDuplicate)
  containerDOM.classList.remove(`hide`)

  return visibleContent
}

export default getEllipsisVisibleContent
