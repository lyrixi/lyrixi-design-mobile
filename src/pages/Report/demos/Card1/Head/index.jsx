// 第三方库导入
import React from 'react'
import { ToolBar, TabBar } from 'lyrixi-design-mobile'

// 项目内部模块导入

// 样式图片等资源文件导入

// 头部
const Head = ({ title, tabs, tab, slides, slide, onTabChange, onSlideChange }) => {
  return (
    <>
      {/* Title and Tabs */}
      <div
        className="flex flex-middle flex-between border-b"
        style={{
          height: 20,
          margin: '0 var(--seed-space-l)',
          padding: 'var(--seed-space-xl) 0'
        }}
      >
        {title && <div className="font-size-l flex-none bold">{title}</div>}
        {tabs && (
          <ToolBar.List
            right={12}
            value={tab ? [tab] : null}
            list={tabs}
            comboClassName="auto-fit nowrap1"
            comboStyle={{
              display: 'flex',
              maxWidth: 'initial',
              marginLeft: 'var(--seed-space-xl)'
            }}
            onChange={onTabChange}
          />
        )}
      </div>

      {/* Slides */}
      {slides && (
        <div style={{ margin: 'var(--seed-space-m) var(--seed-space-xl)' }}>
          <TabBar.Slide value={slide} list={slides} onChange={onSlideChange} />
        </div>
      )}
    </>
  )
}

export default Head
