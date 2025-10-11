import React, { useEffect, forwardRef, useState, useRef, useImperativeHandle } from 'react'
import NavBarModal from './../NavBarModal'

// Modal
const Modal = forwardRef(
  (
    {
      // Combo Transfer Props
      getComboDOM,
      value,
      allowClear,
      multiple,
      onChange,

      // Modal render
      animation = 'slideUp',

      // 遮罩
      portal,
      maskClassName,
      maskStyle,
      maskClosable = true,

      // 标题
      title,
      titleClassName,
      titleStyle,

      // 确定按钮
      ok,
      onOk,
      okClassName,
      okStyle,

      // 取消按钮
      cancel,
      onCancel,
      cancelClassName,
      cancelStyle,

      open,
      onClose,
      onOpen,

      // Main Render
      mainRender,

      // Header and Footer
      headerRender,
      footerRender,

      // 纯渲染时不渲染Main
      children,
      ...props
    },
    ref
  ) => {
    // 当前标题，如日期
    let [currentTitle, setCurrentTitle] = useState(undefined)

    // 当前选中项, 默认不能为value, 因为子组件Main先执行, Cascader.DistrictCombo中: 无值update同步加载, 有值在update异步加载, 先有值再无值会导致setList的顺序先set无值, 再set有值
    const currentArgumentsRef = useRef(null)
    let [currentValue, setCurrentValue] = useState(undefined)

    // 主体的open, 若不加此变量, 主体(子节点)会先执行open, 导致里面拿到的value是上次的
    let [currentOpen, setCurrentOpen] = useState(undefined)

    // 节点
    const modalRef = useRef(null)
    const mainRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        modalDOM: modalRef?.current?.modalDOM,
        getModalDOM: () => modalRef?.current?.modalDOM,
        ok: handleOk,
        ...mainRef.current
      }
    })

    // 必须等NavBarModal组件更新完成后触发
    useEffect(() => {
      if (typeof currentOpen !== 'boolean') return
      if (currentOpen) {
        onOpen && onOpen()
      } else {
        onClose && onClose()
      }
      // eslint-disable-next-line
    }, [currentOpen])

    // 没有传入标题时, 需要动态更新标题（如果日期）
    function updateTitle() {
      if (title === undefined && mainRef?.current?.getTitle) {
        // Main渲染完成后取标题, 否则将会取到上次的值
        setTimeout(() => {
          currentTitle = mainRef?.current?.getTitle?.()
          setCurrentTitle(currentTitle)
        }, 100)
      }
    }

    // 事件
    async function handleOk(newValue) {
      if (newValue !== undefined) {
        currentValue = newValue
      }

      // 更新选中的值
      if (mainRef?.current?.getValue) {
        currentValue = mainRef.current.getValue()
      }

      if (onOk) {
        let goOn = await onOk(currentValue, currentArgumentsRef.current)
        if (goOn === false) return
      }

      // 点击确定按钮时触发 onClose
      setCurrentOpen(false)
    }

    function handleOkClick(e) {
      e.stopPropagation()

      handleOk(currentValue)
    }

    return (
      <NavBarModal
        ref={modalRef}
        // Modal fixed properties
        open={open}
        onClose={() => {
          // 点击行为时才触发 onClose
          setCurrentOpen(false)
        }}
        onOpen={() => {
          updateTitle()
          try {
            if (JSON.stringify(value) !== JSON.stringify(currentValue)) {
              setCurrentValue(value)
            }
          } catch (error) {
            console.log('SeedsUI SelectModal: ', error)
            setCurrentValue(value)
          }
          setCurrentOpen(true)
        }}
        // Modal: display properties
        animation={animation}
        maskClassName={maskClassName}
        maskStyle={maskStyle}
        title={title || currentTitle}
        titleClassName={titleClassName}
        titleStyle={titleStyle}
        // 单选且不允许清空时, 修改即关闭
        ok={ok === undefined ? multiple !== false : ok}
        onOk={handleOkClick}
        okClassName={okClassName}
        okStyle={okStyle}
        cancel={cancel}
        onCancel={onCancel}
        cancelClassName={cancelClassName}
        cancelStyle={cancelStyle}
        maskClosable={maskClosable}
        {...props}
        portal={portal || document.getElementById('root') || document.body}
      >
        {/* 头部 */}
        {typeof headerRender === 'function'
          ? headerRender({ open, value: currentValue, ok: handleOk })
          : null}

        {/* 分割线 */}
        {/* <div className="modal-header-divider"></div> */}

        {/* 纯渲染 */}
        {children}
        {/* 主体 */}
        {!children && typeof mainRender === 'function'
          ? mainRender({
              mainRef,
              open: currentOpen,
              value: currentValue,
              allowClear,
              multiple,
              onChange: async (newValue, newArguments) => {
                currentArgumentsRef.current = newArguments

                // 无标题时更新标题
                updateTitle()

                // 单选: 修改即关闭
                if (multiple === false) {
                  handleOk(newValue)
                  return
                }

                // 多选: 自定义关闭
                if (typeof onChange === 'function') {
                  let goOn = await onChange(newValue, {
                    ...newArguments,
                    ok: () => {
                      handleOk(newValue, newArguments)
                    }
                  })
                  if (goOn === false) return
                }

                // 修改值
                setCurrentValue(newValue)
              }
            })
          : null}

        {/* 底部 */}
        {typeof footerRender === 'function'
          ? footerRender({ open, value: currentValue, ok: handleOk })
          : null}
      </NavBarModal>
    )
  }
)

export default Modal
