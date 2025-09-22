import updateStyle from './updateStyle'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-design-mobile'
测试使用-start */

// 更新属性
function updateAttribute(
  mask,
  {
    portal,

    maskClosable,
    onVisibleChange,

    // 遮罩
    maskClassName,
    maskStyle,

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

    // 确定, 默认显示确定按钮
    ok,
    onOk,
    okClassName,
    okStyle,

    // 取消, confirm默认显示取消按钮
    cancel,
    onCancel,
    cancelClassName,
    cancelStyle
  }
) {
  // 更新遮罩
  updateStyle(mask, { className: maskClassName, style: maskStyle, baseClassName: 'mask modal-mask' })

  // 更新标题
  let titleDOM = mask.querySelector('.modal-title')
  updateStyle(titleDOM, { className: titleClassName, style: titleStyle, baseClassName: 'modal-title' })
  if (title) {
    titleDOM?.classList?.remove?.('hide')
    titleDOM.innerHTML = title
  } else {
    titleDOM?.classList?.add?.('hide')
  }

  // 更新内容
  let contentDOM = mask.querySelector('.modal-content')
  updateStyle(contentDOM, { className: contentClassName, style: contentStyle, baseClassName: 'modal-content' })
  if (content) {
    contentDOM.innerHTML = content
  } else {
    contentDOM.innerHTML = ''
  }

  // 更新底部
  let footerDOM = mask.querySelector('.modal-footer')
  updateStyle(footerDOM, { className: footerClassName, style: footerStyle, baseClassName: 'modal-footer' })

  // 提交按钮
  let okDOM = mask.querySelector('.modal-ok')
  updateStyle(okDOM, { className: okClassName, style: okStyle, baseClassName: 'modal-ok' })
  okDOM.innerHTML = ok || LocaleUtil.locale('确定', 'SeedsUI_ok')

  // 取消按钮
  let cancelDOM = mask.querySelector('.modal-cancel')
  updateStyle(cancelDOM, { className: cancelClassName, style: cancelStyle, baseClassName: 'modal-cancel' })
  cancelDOM.innerHTML = cancel || LocaleUtil.locale('取消', 'SeedsUI_cancel')

  if (cancel === null) {
    cancelDOM?.classList?.add?.('hide')
  } else {
    cancelDOM?.classList?.remove?.('hide')
  }

  // 更新事件中用到的属性（否则事件中将永远读取到的是闭包中的属性，即上次的属性）
  mask.maskClosable = maskClosable
  mask.onOk = onOk
  mask.onCancel = onCancel
  mask.onVisibleChange = onVisibleChange

  // dom透传
  if (toString.call(portal).indexOf('HTML') !== -1) {
    portal.appendChild(mask)
  } else {
    ;(document.getElementById('root') || document.body).appendChild(mask)
  }
}

export default updateAttribute
