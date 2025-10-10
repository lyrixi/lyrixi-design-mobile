import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react'
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
      titleProps,

      // 确定按钮
      ok,
      onOk,
      okProps,

      // 取消按钮
      cancel,
      onCancel,
      cancelProps,

      visible,
      onVisibleChange,

      // Modal current properties
      onSelect,

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

    // 主体的visible, 若不加此变量, 主体(子节点)会先执行visible, 导致里面拿到的value是上次的
    let [currentVisible, setCurrentVisible] = useState(false)

    // 节点
    const modalRef = useRef(null)
    const mainRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        modalDOM: modalRef?.current?.modalDOM,
        getModalDOM: () => modalRef?.current?.modalDOM,
        triggerOk: handleChange,
        ...mainRef.current
      }
    })

    // 不能加此更新, 因为Cascader组件会改原对象, 加isLeaf, 导致每次改动都会触发
    // useEffect(() => {
    //   setCurrentValue(value)
    //   // eslint-disable-next-line
    // }, [JSON.stringify(value)])

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
    async function handleChange(newValue) {
      if (newValue !== undefined) {
        currentValue = newValue
      }

      // 更新选中的值
      if (mainRef?.current?.getValue) {
        currentValue = mainRef.current.getValue()
      }

      if (onChange) {
        let goOn = await onChange(currentValue, currentArgumentsRef.current)
        if (goOn === false) return
      }

      onVisibleChange && onVisibleChange(false)
      setCurrentVisible(false)
    }

    function handleOkClick(e) {
      if (onOk) onOk(e)
      handleChange(currentValue)
    }

    return (
      <NavBarModal
        ref={modalRef}
        // Modal fixed properties
        visible={visible}
        onVisibleChange={(visible) => {
          // 显示弹窗，更新标题和显示值
          if (visible) {
            updateTitle()
            try {
              if (JSON.stringify(value) !== JSON.stringify(currentValue)) {
                setCurrentValue(value)
              }
            } catch (error) {
              console.log('SeedsUI SelectModal: ', error)
              setCurrentValue(value)
            }
          }

          onVisibleChange && onVisibleChange(visible)
          setCurrentVisible(visible)
        }}
        // Modal: display properties
        animation={animation}
        maskClassName={maskClassName}
        maskStyle={maskStyle}
        title={title || currentTitle}
        titleProps={titleProps}
        // 单选且不允许清空时, 修改即关闭
        ok={ok === undefined ? multiple !== false : ok}
        onOk={handleOkClick}
        okProps={okProps}
        cancel={cancel}
        onCancel={onCancel}
        cancelProps={cancelProps}
        maskClosable={maskClosable}
        {...props}
        portal={portal || document.getElementById('root') || document.body}
      >
        {/* 头部 */}
        {typeof headerRender === 'function'
          ? headerRender({ visible, value: currentValue, triggerOk: handleChange })
          : null}

        {/* 分割线 */}
        {/* <div className="modal-header-divider"></div> */}

        {/* 纯渲染 */}
        {children}
        {/* 主体 */}
        {!children && typeof mainRender === 'function'
          ? mainRender({
              mainRef,
              visible: currentVisible,
              value: currentValue,
              allowClear,
              multiple,
              onChange: async (newValue, newArguments) => {
                currentArgumentsRef.current = newArguments

                // 无标题时更新标题
                updateTitle()

                // 单选: 修改即关闭
                if (multiple === false) {
                  handleChange(newValue)
                  return
                }

                // 多选: 自定义关闭
                if (typeof onSelect === 'function') {
                  let goOn = await onSelect(newValue, {
                    ...newArguments,
                    onOk: () => {
                      handleChange(newValue, newArguments)
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
          ? footerRender({ visible, value: currentValue, triggerOk: handleChange })
          : null}
      </NavBarModal>
    )
  }
)

export default Modal
