# 规范总览

## 开发工具

- 使用`vscode`

## 格式化

- 使用`prettier`格式化代码，并开启 vscode 中保存格式化功能（防止忘记格式化）

## 注释

### 方法注释

```javascript
/**
 * 功能，如：保存
 * @param {Object} params // 如果文档齐全，入参简单描述一下就行
 * @document http://172.31.3.113:8080/workspace/myWorkspace.do?projectId=150##4951 // 文档地址
 * @returns {Promise} 返回描述
 */
function saveData(params) {
  return new Promise()
}
```

### 注释上方空一行

```javascript
const a = 1

// 注释
const b = 2
```

## 不使用使用 zustand 或 redux

使用 useCacheState, 可以不破坏原有的代码风格, 也豪无学习成本

## 不要过多使用子路由，一般不超过两层

返回不刷新依然可以使用 useCacheState, 传持久化参数, 能够不破坏可读性且能达到相同的效果

## 严禁地址栏直接传递中文

无数次惨痛的教训告诉我们地址栏传递中文需要遵循如下规则： 1.尽量不要在地址栏传递中文 2.如一定要中文，请编码两次，是两次

## 不要重复造轮子

优先使用公共库

## 不要使用 es 方式引入

```javascript
import Layout from 'lyrixi-design-mobile/lib/Layout'
```

使用：

```javascript
import { Layout } from 'lyrixi-design-mobile'
```

## 不要使用私有属性

百度地图的私有属性是经常变的，比如下面的代码 r.Cr，这里的 Cr 没过多久就去掉了，一定要用

```javascript
let local = new BMap.LocalSearch(self.mapUtil.map, {
  renderOptions: { map: map },
  onSearchComplete: function (r) {
    callback && callback(r?.Cr || [])
  }
})
```

## 不要使用实验室功能

例如: [装饰器](https://github.com/tc39/proposal-decorators)

## 不要改组件（需要授权）

- 手机端组件（library）需要修改找柱子
- WEB 端组件（componets、utils）需要修改找健健

## 不要使用 rest 风格路由/:id

- 使用传统的?id=，而不是/id 这种 rest 风格的传参（这种传参顺序还有子路由会产生极大的影响，并且也不方便阅读）

- 参数一定要有非常清晰地注释

```
{/* 宴席申请新增与编辑, 参数: ?planId=方案id&planType=方案类型id&activityId=编辑活动id*/}
<Route path={`/edit`} element={<Edit />} />
```

- 参数越少越好

## 中文必须包裹 locale

中文一律使用`locale('中文')`包裹

## 缩进

缩进一律使用`空格:2`，禁止使用其它空格数缩进

## 页面书写顺序

### import 顺序

1. React 相关，例如`import React from 'react'`

2. 工具:

```bash
1.node_modules工具，例如`import { useUpdateEffect } from 'ahooks'`

2.公共工具, 例如`import Logger from 'utils/Logger'`

3.内部工具，例如`import Logger from './Logger'`
```

3. 组件:

```bash
1.node_modules组件，例如`import { Form } from 'antd'`

2.公共组件，例如`import Search from 'components/Search'`

3.内部组件，例如`import Search from './Search'`
```

4. 样式

- 示例

```bash
import React from 'react'

// 工具
import { useUpdateEffect } from 'ahooks'
import Logger from 'utils/Logger'

// 组件
import { Form } from 'antd'
import Search from './Search'

// 样式
import '/main.less'
```

### 实现体顺序

1. 声明和变量，例如：const state = useState(null)
2. 生命周期，例如：useEffect
3. 事件/普通方法

#### 分支

- 分支以版本号命名，子分支上线当天合到主分支
- 非特殊情况不要在两个分支上改相同的代码（改问题在一个分支上改，通过合并的方式解决）

## 数据规范

- 保存时间一律使用`YYYY-MM-DD hh:mm:ss`的格式保存
- 详情数据不要通过列表带入, 而是通过 id 获取
- web 端下页带入筛选条件，一律通过 top.window.唯一 key 透传
- 最近 7 天要传 6: dayjs().subtract(6, 'day')
- 后台返回数据要求: {message:'', code: '1/0', data: ..}
- 列表性能限制要求: {message:'', code: '1/0', data: .., pagination: {limit: 5000, url: '查询总条数接口地址, 若无则不支持点击查询总条数'}}

## 命名

### 路由目录和页面一致

routes、页面路径必须一致，并使用下钻式的规范，如下：

```bash
路由：/salesManage/salesSwapOrder/edit?menuId=xx
页面：/SalesManage/SalesSwapOrder/Edit/index.js
```

### 常用页面名称

页面命名：List（列表）、Record（明细）、Edit（编辑）、Detail（详情）

### 常用组件名称

头部 Header、底部 Footer、中间 Main、侧边过滤 Filter 或 Query

### 页面及请求目录命名

```
页面名
├─utils
├─api
│ ├─queryData(查询数据)
│ │ ├─localData
│ │ ├─index.js
│ ├─saveData(保存数据)
│ │ ├─serverData
│ │ ├─index.js
│ ├─deleteData(删除数据)
├─Component1
├─Component2
├─index.js
```

### class 名称防止全局污染

class 全名：组件为全局样式、业务需要加上业务标识，例如：merp-或者 dms-等

### 事件命名

`onXX`，实现事件`handleXX`：例如`onChange`对应`handleChange`。如果包含名词，将名词放中间：例如`onVisibleChange`对应`handleVisibleChange`

### 方法命名

初始化`loadData`

### ref 命名

`xxRef`，例如`rootRef`，获取的实体 dom 元素`xxEl`，例如`rootEl`

### 属性命名

- 启禁用属性：动词在前 enableXX、disableXX。
- 显隐属性：visible，如果 visible 不能表现，visible 在后面，xxVisible

## GIT

### 不要 stash、pop, 风险大

若想切分支, 先提交代码

### 每天 pull、commit、push

为防止出现代码还原的情况

### 每天 merge

不合代码问题非常严重, 会导致上个版本修复的问题下个版本又出现了

### push 完等一会再切分支

### 常用命令

```bash
// 查看当前用户名
git config user.name

// 修改当前用户名
git config --global user.name 'xx'

// 修改当前登录密码
git config --global user.password 'xx'

// 查看当前用户名
git config user.email

// 修改当前用户名
git config --global user.email 'xx@qince.com'
```

### 不要用工具提供代码, 风险大

### Git commit 规范

git commit 格式如下：

```
git commit -m '<type>(<scope>): subject'
```

示例:

```bash
git commit -m 'feat(core): new nx starter'
```

格式说明:

👉 type 主要有以下几种类型：

- feat: 一个新特性
- fix: 修复 bug
- docs: 文档修改
- style: 不影响代码含义的更改（空格、格式、缺少分号等）
- refactor: 代码重构
- perf: 优化性能
- test: 测试用例修改
- chore: 对构建过程或辅助工具和库的更改，例如文档生成

👉 scope：可以是影响范围的任何内容。

👉 subject：包含对更改的简洁描述，规则：

- 使用陈述语句
- 第一个字母不要大写
- 末尾没有点 (.)

### 危急处理

还原到某个提交记录

- git reset --hard 指定版本号
- copy src 到本地
- git reset --hard 最新版本号
- 临时文件夹覆盖本地
- git add .
- git commit -m '还原<指定版本号>'
- git push
