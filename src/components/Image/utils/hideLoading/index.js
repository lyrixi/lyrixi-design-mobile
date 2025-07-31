// 内库使用-start
import Loading from './../../../Loading'
// 内库使用-end

/* 测试使用-start
import { Loading } from 'lyrixi-design-mobile'
测试使用-end */

function hideLoading(rootDOM, { failIndexes } = {}) {
  if (!rootDOM) return
  // 根节点遮罩
  rootDOM.classList.remove('uploading')
  // 新增按钮遮罩
  let chooseDOM = rootDOM.querySelector('[data-type="upload"]')
  if (chooseDOM) chooseDOM.classList.remove('uploading')
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

export default hideLoading
