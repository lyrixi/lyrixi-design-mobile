import globalMessageId from './globalMessageId'

// 移除Message Modal
function destroy(mask) {
  if (!mask) {
    // eslint-disable-next-line
    mask = document.getElementById(globalMessageId)
  }
  if (mask) {
    // 动画移除
    mask.classList.remove('active')
    mask.querySelector('.message-modal').classList.remove('active')

    // DOM移除
    if (mask.timeout) window.clearTimeout(mask.timeout)
    mask.timeout = setTimeout(() => {
      mask?.parentNode?.removeChild?.(mask)
    }, 300)
  }
}

export default destroy