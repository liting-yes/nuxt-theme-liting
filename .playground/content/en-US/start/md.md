#  文本编辑

## 注意事项

- 本主题所有文档内容都是遵循最基础的**MarkDown**语法编辑的，当然，会有一个简单的**MDC**语法拓展

## MarkDown基础语法

### 标题

用 __#__ 来标记标题

```md
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

### 斜体

用一对 **\*** 或 **\_** 来包裹目标文本

```md
*斜体*
_斜体_
```

### 强调

用两对 **\*** 或 **\_** 来包裹目标文本

```md
**粗体**
__粗体__
```

### 引用

用 **>** 来标记块引用

```md
> 块引用
>> 嵌套引用
```

### 代码块

用 **```** 三个反引用来包裹代码块

在第一行的 **```** 后可加上编程语言的缩写，在一些场景中可依此支持高亮

```md
_```js
  console.log('Hello, nuxt-theme-liting')
_```
```

### 无序列表
 
用 **\*** 、 **\_** 或 **\+** 加上一个空格来描述无序列表

```md
* 一二三
* 四五六

- 一二三
- 四五六
```

### 有序列表

用数字加上 **.** 来描述有序列表

```md
1. 一二三
2. 四五六
```

### 分割线

用三个连续的 **\*** 、**\-** 或 **\_** 来描述分割线

```md
***
---
___
```

### 链接

用 **[ ]** 和 **( )** 的组合来描述链接

```md
[Nuxt-Theme-Liting](https://nuxt-theme.liting.ink)
```

### 图片

和上文一样用 **[ ]** 和 **( )** 的组合来描述，不过多了一个 **!**

```md
[!头像](/avatar.jpg)
```

### 标记

用一对反引号 **`** 来描述标记

```md
`标记`
```

### 转义

当你想在 MarkDown 中使用特殊字符，如 **\*** 时，可用反斜杠 **\\** 进行转义

```md
\#
```

## MarkDown高级语法

### 表格

用 **|** 来分隔单元格，用 **-** 来分隔表头和其他行，用 **:** 来设置内容对齐方式

```md
|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |

| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |
```

## MDC语法

**MDC** 语法拓展了MarkDown文件对 [Vue.js](https://cn.vuejs.org/) 组件的支持

### 使用单文件组件

用一对 **::** 可描述一个单文件组件的引入

如下：引入了组件 **HelloLayout**，并向该组件的默认插槽传入了文本 `Hello, Nuxt Theme Liting`
```md
::HelloLayout
Hello, Nuxt Theme Liting
::
```

尤其是，组件可嵌套使用

```md
::App
  ::HelloLayout
    Hello, Nuxt Theme Liting
  ::
::
```

### 内连单文件组件

当不需要向组件传值时，可用 **:** 描述内连单文件组件
```md
:HelloLayout
```

### 组件传Props

上述两种组件引入方法都支持传入组件**Props**

```md
::HelloLayout{type="info"}
::

::HelloLayout
---
type: info
---
::
```

### 元素属性拓展

可以利用 **{}** 包裹类名，用 **[]** 包裹对应文版来为文本新增类名样式

```md
[Nuxt Theme Liting]{.bg-primary-400}
```