import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react'
import NavBarModal from './../NavBarModal'

// Modal
const Modal = forwardRef(
  (
    {
      // 无用的属性
      getComboDOM,

      // Modal fixed properties
      portal,
      animation = 'slideUp',

      // 遮罩
      maskProps,
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
      changeClosable,
      onBeforeChange,
      onBeforeChecked,

      // Main
      main: MainNode,
      mainProps,

      // Main properties
      value,
      allowClear,
      multiple,
      onChange,

      // Header and Footer
      header,
      footer,

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

      // 修改前校验
      if (typeof onBeforeChange === 'function') {
        let goOn = await onBeforeChange(currentValue, currentArgumentsRef.current)
        if (goOn === false) return

        // 修改值
        if (typeof goOn === 'object') {
          currentValue = goOn
        }
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
              console.log('Lyrixi SelectModal: ', error)
              setCurrentValue(value)
            }
          }

          onVisibleChange && onVisibleChange(visible)
          setCurrentVisible(visible)
        }}
        // Modal: display properties
        animation={animation}
        maskProps={maskProps}
        title={title || currentTitle}
        titleProps={titleProps}
        // 单选且不允许清空时, 修改即关闭
        ok={ok ?? multiple !== false}
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
        {typeof header === 'function'
          ? header({ visible, value: currentValue, triggerOk: handleChange })
          : header}

        {/* 分割线 */}
        {/* <div className="modal-header-divider"></div> */}

        {/* 纯渲染 */}
        {children}
        {/* 主体 */}
        {!children && MainNode ? (
          <MainNode
            ref={mainRef}
            {...(mainProps || {})}
            visible={currentVisible}
            value={currentValue}
            allowClear={allowClear}
            multiple={multiple}
            onChange={async (newValue, newArguments) => {
              currentArgumentsRef.current = newArguments

              // 无标题时更新标题
              updateTitle()

              // 自定义关闭
              if (typeof changeClosable === 'function') {
                let isClose = await changeClosable(newValue, newArguments, {
                  triggerOk: handleChange
                })
                if (isClose === true) return
              }

              // 修改即关闭; 单选且不允许清空时, 修改即关闭
              if (changeClosable === true || multiple === false) {
                handleChange(newValue)
                return
              }

              // 修改前校验
              if (typeof onBeforeChecked === 'function') {
                let goOn = await onBeforeChecked(newValue, newArguments)
                if (goOn === false) return

                // 修改值
                if (typeof goOn === 'object') {
                  // eslint-disable-next-line
                  newValue = goOn
                }
              }

              // 修改值
              setCurrentValue(newValue)

              // 有些业务需要监听每次修改, 并不是关闭页面后修改, 例:handleDrillDown
              mainProps?.onChange && mainProps.onChange(newValue, newArguments)
            }}
          />
        ) : null}

        {/* 底部 */}
        {typeof footer === 'function'
          ? footer({ visible, value: currentValue, triggerOk: handleChange })
          : footer}
      </NavBarModal>
    )
  }
)

export default Modal
