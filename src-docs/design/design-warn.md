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

<p style="font-size:24px;font-weight: bold;">不要改样式</p>

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
