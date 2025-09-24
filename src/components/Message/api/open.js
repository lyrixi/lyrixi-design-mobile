import destroy from './destroy'
import showMask from './showMask'
import updateAttribute from './updateAttribute'

// 弹出Message对话框
export default function open({
  portal,

  maskClosable = true,
  onVisibleChange,

  // 遮罩
  maskClassName,
  maskStyle,

  // 图标
  icon,

  // 标题
  title,
  titleClassName,
  titleStyle,

  // 内容
  content,
  contentClassName,
  contentStyle,

  // 底部
  footerClassName,
  footerStyle,

  // 按钮布局: vertical | horizontal
  buttonsLayout = 'horizontal',

  // 按钮数组: [{name: string, onClick: function, className?: string, style?: object}]
  buttons = []
}) {
  let mask = null

  // 点击遮罩
  function handleMaskClick(e) {
    e.stopPropagation()

    // 点击按钮
    if (e.target.classList.contains('message-button')) {
      handleButtonClick(e)
      return
    }

    // 点击遮罩
    if (e.target.classList.contains('mask')) {
      // 读取更新后的属性
      const maskClosable = mask?.maskClosable
      const onVisibleChange = mask?.onVisibleChange

      if (maskClosable) {
        if (onVisibleChange) onVisibleChange(false)
        destroy(e.currentTarget)
      }
    }
  }

  // 点击按钮
  function handleButtonClick(e) {
    const buttonId = e.target.id
    const buttonIndex = parseInt(buttonId.replace('message-button-', ''))
    const buttons = mask?.buttons || []
    const button = buttons[buttonIndex]

    if (button && typeof button.onClick === 'function') {
      const result = button.onClick()
      // 如果onClick返回false，不关闭弹窗
      if (result !== false) {
        const onVisibleChange = mask?.onVisibleChange
        if (onVisibleChange) onVisibleChange(false)
        destroy(e.currentTarget.closest('.message-mask'))
      }
    } else {
      const onVisibleChange = mask?.onVisibleChange
      if (onVisibleChange) onVisibleChange(false)
      destroy(e.currentTarget.closest('.message-mask'))
    }
    e.stopPropagation()
  }

  // 渲染与绑定事件
  mask = showMask({
    portal,
    onMaskClick: handleMaskClick
  })

  // 更新属性
  updateAttribute(mask, {
    portal,

    maskClosable,
    onVisibleChange,

    // 遮罩
    maskClassName,
    maskStyle,

    // 图标
    icon,

    // 标题
    title,
    titleClassName,
    titleStyle,

    // 内容
    content,
    contentClassName,
    contentStyle,

    // 底部
    footerClassName,
    footerStyle,

    // 按钮布局
    buttonsLayout,

    // 按钮数组
    buttons
  })

  return mask
}