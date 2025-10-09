import SafeArea from './SafeArea'

SafeArea.debug = () => {
  document.documentElement.style.setProperty('--seed-safe-area-inset-top', '44px')
  document.documentElement.style.setProperty('--seed-safe-area-inset-bottom', '34px')
}

export default SafeArea
