---
nav:
  title: 设计
  order: -1
group:
  title: 设计
  order: 1
title: 注意
order: 2
toc: content
---

## 不要改组件样式

错误用法:

```css
.seed-input {
  height: 40px;
}
```

正确用法

```jsx
import { Input } from 'lyrixi-design-mobile'

export default () => <Input.Text style={{ height: '40px' }} />
```

## 属性不要用动态 props 定义

错误定义:

```jsx
return (
  <header
    {...props}
    className={`layout-header${props.className ? ' ' + props.className : ''}`}
    ref={rootRef}
  >
    {children}
  </header>
)
```

正确用法

```jsx
return (
  <header
    style={style}
    className={`layout-header${className ? ' ' + className : ''}`}
    ref={rootRef}
  >
    {children}
  </header>
)
```
