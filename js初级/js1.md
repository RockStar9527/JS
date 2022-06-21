说一下浏览器缓存策略，强缓存和协商缓存的区别？

浏览器缓存策略分为两种 **强缓存**（本地缓存） 和 **协商缓存**（弱缓存）

浏览器在发请求前，先检查强缓存，若没有需要的内容（未命中），则发起请求判断是否需要用弱缓存。

**强缓存**是不发起请求，直接使用缓存内的内容的。浏览器将`js`、`css`、`image`、`font-family`等存到内存(存小文件)或者磁盘（存大文件）中，下次用户再访问的时候就从内存中取，以便提升性能。
 **协商缓存**需要往后台发请求， 通过判断来决定是使用协商缓存。如果请求内容没发生变化，则请求返回304（服务器收到请求，但内容无变化），浏览器就用缓存内的内容。

实现一个左右两侧固定，中间自适应宽的的三列布局

![image-20220520193845755](C:\Users\RockStar\AppData\Roaming\Typora\typora-user-images\image-20220520193845755.png)

## 1 JavaScript 概述

#### ① JavaScript 的特点

JavaScript 是一门**动态的**，**弱类型**的，**解释型**的，**基于对象**的**脚本**语言。

**动态的：** 数据类型无需提前指定，如: JavaScript、Python等。  **静态的：** 数据类型需要提前指定，如C、C++、Java 等。

**弱类型： ** 数据类型可以自动转换，如JavaScript、PHP等。  **强类型：** 数据乐西无法自动转换，如C、C++、Python等

**解释型：** 边编译，边运行，如JavaScript、PHP、Python等。  **编译型：** 先编译后运行，如C、C++、Java。

**脚本语言：** 可以嵌入其他计算机语言中执行，如 JavaScript、PHP、Python 等。

#### ② javaScript 的运行环境

编程语言的运行环境负责把该编程语言编译为计算机可以识别的机器语言。编译型语言的运行环境叫编译器，解释型语言的运行环境叫解释器。

JavaScript的运行环境：

* 浏览器
* Node.js

#### ② 客户端浏览器上的 JavaScript 组成部分

* ECMAScript  —— JavaScript的语法
* BOM             —— 浏览器对象模型
* DOM            —— 文档对象模型



## 2 JavaScript 基本语法

### 2.1 JavaScript 在 HTML 中使用的三种方式

####  ① 行内式

```html
<button onlick="JS代码.."></button>
<div ondblclick="js代码.."></div>
```

#### ② 内嵌式

```html
<script>
	JS代码...
</script>
```

> **注意：** 建议 script 放在其他元素的后面！

#### ③ 外链式

```html
<script src="js文件的地址"></script>
```

> **注意：** 外链式与内嵌式不能合在一起，要分别使用各自的 script 标签。

### 2.2 JavaScript 注释

```js
// 单行注释

/*
   多行注释
   多行注释
*/
```

### 2.3 JavaScript 语法特点

* 每条语句的后面需要指令结束符，指令结束符可以是分号也可以是换行。
* JavaScript 中严格区分大小写。

### 2.4 JavaScript 中输出内容

#### ① 输出到弹框

```js
alert(内容);
```

#### ② 输出到页面中

```js
document.write(内容)
```

#### ③ 输出到控制台

```js
console.log(内容)
```

typeof(对象)			判断内容的数据类型。

对象.toString(数值)    

JS底层保存标识符时实际上是采用的Unicode编码

在JS中，一共有六种数据类型：
String 字符串；
Number 数值；JS中可以表示的数字的最大值Number.MAX_VALUE 若超过，返回Infinity 表示无穷 ；NaN是一个特殊的数字，表示Not A Number
Boolean 布尔值；
Null 空值；
Undefined 未定义；
Object 对象；