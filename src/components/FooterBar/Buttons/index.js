import React, { forwardRef } from 'react'
import FooterBarButton from './../Button'
import FooterBarTab from './../Tab'

const Buttons = forwardRef(({ buttons }, ref) => {
  return (
    <>
      {buttons.map((button, index) => {
        const { disabled, icon, id, name, more, onClick, ...buttonProps } = button
        if (button.type === 'tab') {
          return (
            <FooterBarTab
              key={button?.id ?? index}
              disabled={disabled}
              more={more}
              icon={icon}
              id={id}
              name={name}
              onClick={onClick}
            />
          )
        }
        return (
          <FooterBarButton
            key={button?.id ?? index}
            disabled={disabled}
            onClick={onClick}
            {...buttonProps}
          >
            {button.name}
          </FooterBarButton>
        )
      })}
    </>
  )
})

export default Buttons
