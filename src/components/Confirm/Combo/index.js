import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import Modal from './../Modal'
import Header from './../Header'
import Main from './../Main'
import Footer from './../Footer'
import Icon from './../Icon'
import Title from './../Title'
import Button from './../Button'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-design-mobile'
测试使用-end */

const ConfirmCombo = forwardRef(
  (
    {
      children,
      icon,
      title,
      content,
      buttons,
      buttonsLayout = '', // vertical
      ...props
    },
    ref
  ) => {
    // 控制Modal显隐
    const [visible, setVisible] = useState(null)

    const comboRef = useRef(null)
    const modalRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        comboDOM: comboRef.current,
        getComboDOM: () => comboRef.current,
        ...modalRef.current,
        close: () => {
          setVisible(false)
        },
        open: () => {
          setVisible(true)
        }
      }
    })

    function handleClick() {
      setVisible(true)
    }

    return (
      <>
        <div
          ref={comboRef}
          {...props}
          className={DOMUtil.classNames('confirm-combo', props.className)}
          onClick={handleClick}
        >
          {children}
        </div>
        <Modal visible={visible} onVisibleChange={setVisible}>
          {(icon || title) && (
            <Header>
              {icon
                ? DOMUtil.getIconNode(icon, {
                    ParentNode: Icon
                  })
                : null}
              {title && <Title>{title}</Title>}
            </Header>
          )}
          <Main>{content}</Main>
          {Array.isArray(buttons) && buttons.length && (
            <Footer layout={buttonsLayout}>
              {buttons.map((button, index) => {
                const { name, onClick, ...buttonProps } = button
                return (
                  <Button
                    key={button?.id ?? index}
                    {...buttonProps}
                    onClick={async (e) => {
                      let newVisible = await onClick(e)
                      if (typeof newVisible === 'boolean') {
                        setVisible(!newVisible)
                      }
                    }}
                  >
                    {name}
                  </Button>
                )
              })}
            </Footer>
          )}
        </Modal>
      </>
    )
  }
)

export default ConfirmCombo
