import needsSafeArea from './needsSafeArea'
// import onResize from './onResize'

// Set global safe area
function autoSafeArea({ className = 'auto-safe-area-children', isSafeArea, debug } = {}) {
  if (typeof isSafeArea === 'function') {
    window.seedsIsSafeArea = isSafeArea
  }
  if (debug) {
    document.documentElement.classList.add(className)
    document.documentElement.style.setProperty('--safe-area-inset-top', '44px')
    document.documentElement.style.setProperty('--safe-area-inset-bottom', '34px')
    return
  }
  if (needsSafeArea()) {
    document.documentElement.classList.add(className)
  } else {
    document.documentElement.classList.remove(className)
  }
}

function init(config) {
  autoSafeArea(config)
  // 监听路由变化时根据分辨率适配安全区, 屏幕宽高频繁变化(viewport不统一导致, 例如入口是contain里面是cover)
  // onResize(() => {
  //   autoSafeArea(config)
  // })
}

export default init
