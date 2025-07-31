---
group: 全局样式
title: 文案
order: 7
toc: content
---

# 语言语气

页面入口文案和二级页 Title 文案要相关一致，不能毫无关联

<img class="preview-img no-padding" style="margin-bottom: 20px;" src="https://res.waiqin365.com/d/qince-design/content/1.png">

不同场景描述同一事物的词汇需要统一。

<img class="preview-img no-padding" style="margin-bottom: 20px;" src="https://res.waiqin365.com/d/qince-design/content/2.png">

统计文案格式：数字+单位+动词/名词。

<img class="preview-img no-padding" style="margin-bottom: 20px;" src="https://res.waiqin365.com/d/qince-design/content/3.png">

操作文案格式：动词+名词。

<img class="preview-img no-padding" style="margin-bottom: 20px;" src="https://res.waiqin365.com/d/qince-design/content/4.png">

精简语句，减轻用户理解负担。

<img class="preview-img no-padding" style="margin-bottom: 20px;" src="https://res.waiqin365.com/d/qince-design/content/5.png">

报错时，告知用户原因。

<img class="preview-img no-padding" style="margin-bottom: 20px;" src="https://res.waiqin365.com/d/qince-design/content/6.png">

### 中英文排版

中英文之间需要加空格。

<img class="preview-img no-padding" style="margin-bottom: 20px;" src="https://res.waiqin365.com/d/qince-design/content/7.png">

中文与链接之间增加空格。

<img class="preview-img no-padding" style="margin-bottom: 20px;" src="https://res.waiqin365.com/d/qince-design/content/8.png">

## 数据格式

### 日期与时间

| 类别           | 描述      | 中文示例        | 英文示例           |
| :------------- | :-------- | :-------------- | :----------------- |
| 年             | –         | 2020–1–15       | Jan 15, 2020       |
| 时:分          | 24 小时制 | 17:20           | 17:20              |
| 年–月–日 时:分 | 24 小时制 | 2020–1–15 17:20 | Jan 15, 2020 17:20 |

### 列表中的数字、金额

| 类别     | 描述                                                                        |        示例 |
| :------- | :-------------------------------------------------------------------------- | ----------: |
| 金额     | 右对齐                                                                      |          23 |
| 数字     | 右对齐                                                                      |        1234 |
| 数字分节 | 四位以上使用千分撇进行分节：整数部分每三位一组，以“,”分节，小数部分不分节。 | 31,234.7765 |

### 数据脱敏规则

<table>
  <thead>
    <tr>
      <th style="width: 15%; text-align: left;">类别</th>
      <th style="width: 60%; text-align: left;">规则</th>
      <th style="width: 25%; text-align: left;">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>身份证</td>
      <td>将身份证号码的第 7 到 14 位（出生日期码）替换为固定字符</td>
      <td>320106********1234</td>
    </tr>
    <tr>
      <td>手机号</td>
      <td>一般会把手机号的第 4 到第 7 位数字替换为字符，这样既能保留手机号的归属地等部分信息，又隐藏了关键的个人识别部分</td>
      <td>182****8643</td>
    </tr>
    <tr>
      <td>密码</td>
      <td>加密显示时全部用字符显示</td>
      <td>******</td>
    </tr>
    <tr>
      <td>银行卡</td>
      <td>一般会保留银行卡号的前 6 位和后 4 位，中间的数字用 符号 代替</td>
      <td>622202******01234</td>
    </tr>
    <tr>
      <td>姓名</td>
      <td>保留姓氏，将名字中的一个或多个字用特定字符替换</td>
      <td>诸＊亮</td>
    </tr>
  </tbody>
</table>
