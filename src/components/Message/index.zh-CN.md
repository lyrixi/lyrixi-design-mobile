---
group:
  title: 反馈
  order: 2
order: 1
title: Confirm
toc: content
---

# Confirm

确认对话框组件，用于用户确认操作。

## 何时使用

- 需要用户确认重要操作时
- 需要显示警告信息时
- 需要用户做出选择时
- 需要防止误操作时

## 示例

### Confirm.Modal

<code src="./demos/Modal.jsx"></code>

### Confirm.Combo

<code src="./demos/Combo.jsx"></code>

## Confirm.Modal

### 属性

| 属性            | 说明             | 类型                         | 默认值   |
| --------------- | ---------------- | ---------------------------- | -------- |
| portal          | 渲染容器         | `HTMLElement`                | -        |
| maskClosable    | 点击遮罩是否关闭 | `boolean`                    | -        |
| visible         | 是否可见         | `boolean`                    | -        |
| onVisibleChange | 可见性变化回调   | `(visible: boolean) => void` | -        |
| animation       | 动画类型         | `string`                     | `'zoom'` |
| children        | 对话框内容       | `ReactNode`                  | -        |

### Ref

| 属性        | 说明           | 类型                       |
| ----------- | -------------- | -------------------------- |
| maskDOM     | 遮罩元素       | `HtmlDivElement`           |
| getMaskDOM  | 获取遮罩元素   | () => `HtmlDivElement`     |
| modalDOM    | 模态框元素     | `HtmlSectionElement`       |
| getModalDOM | 获取模态框元素 | () => `HtmlSectionElement` |
