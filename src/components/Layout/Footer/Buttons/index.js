import React from 'react'
import Tab from './Tab'
import Button from './Button'

// 废弃: 使用FooterBar代替
export default function Buttons({ buttons, onChange }) {
  return (
    <>
      {buttons &&
        buttons.map((button, index) => {
          if (button.type === 'tab' || button.children) {
            return (
              <Tab
                key={button?.id || index}
                disabled={button?.disabled}
                icon={button?.icon}
                type={button?.type}
                id={button?.id}
                name={button?.name}
                childrenList={button?.children}
                onChange={onChange}
              />
            )
          }
          return (
            <Button
              key={button?.id || index}
              disabled={button?.disabled}
              type={button?.type}
              id={button?.id}
              name={button?.name}
              primary={button?.primary}
              onChange={onChange}
            />
          )
        })}
    </>
  )
}
