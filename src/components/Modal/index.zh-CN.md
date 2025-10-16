---
group: 反馈
category: Components
title: Modal
---

# Modal

模态对话框，用于展示重要信息或需要用户确认的内容。

## 何时使用

- 需要用户确认某个操作时
- 需要展示重要信息时
- 需要用户输入信息时
- 需要展示复杂表单时

## 示例

### Modal

<code src="./demos/Modal/demo1.jsx"></code>

### Modal.FilterCombo

<code src="./demos/FilterCombo/index.jsx"></code>

### Modal.FilterModal

<code src="./demos/FilterModal/index.jsx"></code>

### Modal.NavBar

<code src="./demos/NavBar/index.jsx"></code>

### Modal.NavBarModal

<code src="./demos/NavBarModal/index.jsx"></code>

### Message.open 示例 (替代 Modal.alert)

<code src="./demos/alert/index.jsx"></code>

### Message.open 示例 (替代 Modal.confirm)

<code src="./demos/confirm/index.jsx"></code>

## Modal

### 属性

| 属性         | 说明             | 类型                                                                                    | 默认值          |
| ------------ | ---------------- | --------------------------------------------------------------------------------------- | --------------- |
| safeArea     | 安全区域         | `boolean \| object`                                                                     | -               |
| portal       | 渲染容器         | `HTMLElement \| boolean`                                                                | `document.body` |
| animation    | 动画类型         | `'none' \| 'slideLeft' \| 'slideRight' \| 'slideUp' \| 'slideDown' \| 'zoom' \| 'fade'` | `'zoom'`        |
| referenceDOM | 参考元素         | `HTMLElement \| function`                                                               | -               |
| offset       | 偏移量           | `object`                                                                                | -               |
| open         | 是否可见         | `boolean`                                                                               | -               |
| maskClosable | 点击遮罩是否关闭 | `boolean`                                                                               | `true`          |
| onOpen       | 打开时的回调     | `() => void`                                                                            | -               |
| onClose      | 关闭时的回调     | `(e: Event) => void`                                                                    | -               |
| children     | 模态框内容       | `ReactNode`                                                                             | -               |

### Ref

| 属性        | 说明                | 类型                   |
| ----------- | ------------------- | ---------------------- |
| modalDOM    | 模态框 DOM 元素     | `HtmlDivElement`       |
| getModalDOM | 获取模态框 DOM 元素 | () => `HtmlDivElement` |
