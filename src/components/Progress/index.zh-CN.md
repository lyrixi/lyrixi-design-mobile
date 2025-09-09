---
group:
  title: 数据展示
  order: 2
order: 1
title: Progress
toc: content
---

# Progress

一个基于 SVG 的环形进度组件，支持百分比显示和自定义内容。

### 特性

- 🎯 基于 SVG 绘制，支持完美缩放
- 🎨 支持 CSS 变量自定义颜色
- 📊 支持 0-100 的百分比进度
- 🎪 支持垂直居中的自定义内容
- ⚡ 平滑的动画过渡效果
- 📱 响应式设计，支持不同尺寸

### API

#### Props

| 参数      | 说明                   | 类型          | 默认值 |
| --------- | ---------------------- | ------------- | ------ |
| percent   | 进度百分比，范围 0-100 | number        | 0      |
| children  | 垂直居中的内容         | ReactNode     | -      |
| size      | 组件尺寸（宽高相等）   | number        | 50     |
| className | 自定义类名             | string        | -      |
| style     | 自定义样式             | CSSProperties | -      |

#### CSS 变量

| 变量名                             | 说明       | 默认值  |
| ---------------------------------- | ---------- | ------- |
| --seed-progress-fill-color         | 进度条颜色 | #1890ff |
| --seed-progress-bg-color           | 背景色     | #f0f0f0 |
| --seed-progress-track-width        | 轨道宽度   | 4       |
| --seed-progress-animation-duration | 动画时长   | 0       |
| --seed-progress-animation-timing   | 动画效果   | 无      |

## Progress.Circle 环形进度组件

### 基础用法

<code src="./demos/circleBasic.jsx"></code>

### 动画用法

<code src="./demos/circleAnimated.jsx"></code>

## Progress.Bar 进度组件

### 基础用法

<code src="./demos/barBasic.jsx"></code>

### 动画用法

<code src="./demos/barAnimated.jsx"></code>
