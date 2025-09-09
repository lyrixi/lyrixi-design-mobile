// Toolbar转换成参数
function closeAllDropdown({ visibleRef } = {}) {
  for (let dropdownRef of window.dropdownRefs || []) {
    if (visibleRef.current && visibleRef.current === dropdownRef.current) {
      continue
    }
    if (dropdownRef?.current?.close) {
      dropdownRef.current.close()
    }
  }
}

export default closeAllDropdown
