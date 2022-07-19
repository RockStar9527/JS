# `Node.JS` 

## 一、`Node.JS`概述

### 1.1、目标

前端开发人员 ：将页面以更加合理友好的形式展现给用户。需要调用后端开发人员提供的接口。

后端开发人员：提供数据接口，供前端调用。接口的作用是对数据库进行基本的增删改查操作。

数据库：dba.

服务器：电脑。一台服务器可以提供若干种服务，站点服务只是其中之一。

​	http://www.baidu.com: 域名进行解析。

端口号：http://www.baidu.com:9080/home.html

```shell
域名==》IP==>服务器==》端口号==》服务（站点服务）
	生成服务流程：
		1、开发人员将项目开发完毕之后，会将项目进行打包，生成一个文件夹。
		2、将项目生成的文件夹放置在服务器。
		3、创建一个站点服务：指定项目文件夹。 指定端口号。 
			http请求，端口号默认是80，https访问 ，端口号默认是443.
			可以选择通过NODE.JS来创建站点服务。 NODE是一个运行JAVASCRIPT的环境，可以创建站点，操作文件。中间层服务。反向代理。 

开发模式：
	1、前后端混合模式：php java c# 
		输入网址-》锁定文件-》文件直接对数据库进行操作-》将数据库的内容生成页面--》响应给浏览器-》渲染。
	2、前后端分离
		前端项目
		后端项目
```

> * 可以和后端开发人员进行有效沟通。
>
>   ```shell
>   # 后端人员提供接口，前端调用接口。学完NODE.js之后，你不仅可以调用接口，还会自己生成接口。
>   # 前端是无法直接操作数据库。所以需要借助服务端提供接口，通过接口操作数据库。
>   ```
>
> * 可以快速开发全栈应用，加强对项目的整体认知。
>
>   ```shell
>   # 自己创建站点
>   # 自己提供API服务。
>   # 自己调用API服务。
>   ```

### 1.2、`Node.js`是什么

> * `Node.js` 是一个基于 `Chrome V8` 引擎的 JavaScript 运行环境。`Node.js`不是一种独立语言，是一个可以让JavaScript在服务器端运行的平台。  
>
>   ```shell
>   # js 之前是在浏览器中运行。学习完Node.js之后，JS也可以在NODE环境当中运行
>   # Node.js不是编程语言，而是运行环境。Node.js不是编程语言，而是运行环境。Node.js不是编程语言，而是运行环境。
>   ```
>
> * 简单来讲，`Node.js`就是一个使用JavaScript写服务器的代码环境。 
>
>   ```shell
>   # 可以通过NODE.JS提供站点服务。 （
>   # 1、开发人员可以购买一台服务器，
>   # 2、在服务器当中安装Node.js,
>   # 3、然后在服务上放置一个文件夹，
>   # 4、文件夹内放置一个index.htm
>   # 5、根据文件夹创建一个站点，指定端口号
>   # 6、远在他乡的她（他）就可以浏览该网页。）
>   ```
>
> * `Node.js`的特性其实就是JavaScript的特性
>
>   - 异步非阻塞的I/O
>
>   ```shell
>   # 异步与同步
>   # I/0 :input/output (输入输出)。 比如对文件读写
>   const fs = require("fs");
>   fs.readFile(__dirname+"/1-异步与同步的问题.html",function (err,result) {
>       console.log(1111111111,result.toString());
>   })
>   console.log(222222222);
>   ```
>
>   - 事件驱动
>
>   ```shell
>   # 当用户请求一个网站地址，如果站点是通过PHP.JAVA.C#,服务器会创建一个连接池。每创建一个连接池需要花费2M内存。如果内存是8个G，理论上而言，同时支持4000个访问者。
>   # node:当用户请求一个网址，会创建一个事件，通过事件执行相对应的服务。
>   ```
>
> * `Node.js`历史 — 为性能⽽生 并发处理
>
>   >  Ryan Dahl,他的工作是用C/C++写高性能Web服务。对于高性能，异步IO、事件驱动是基本原则，但是用C/C++写就太痛苦了。于是这位仁兄开始设想用高级语言开发Web服务。他评估了很多种高级语言，发现很多语言虽然同时提供了同步IO和异步IO，但是开发人员一旦用了同步IO，他们就再也懒得写异步IO了，所以，最终，Ryan瞄向了JavaScript。
>   >
>   >  因为JavaScript是单线程执行，根本不能进行同步IO操作，所以，JavaScript的这一“缺陷”导致了它只能使用异步IO。
>   >
>   >  选定了开发语言，还要有运行时引擎。这位仁兄曾考虑过自己写一个，不过明智地放弃了，因为`V8`就是开源的JavaScript引擎。让Google投资去优化`V8`，咱只负责改造一下拿来用，还不用付钱，这个买卖很划算。
>   >
>   >  于是在2009年，Ryan正式推出了基于JavaScript语言和`V8`引擎的开源Web服务器项目，命名为`Node.js`。虽然名字很土，但是，Node第一次把JavaScript带入到后端服务器开发，加上世界上已经有无数的JavaScript开发人员，所以Node一下子就火了起来。
>   >
>   >  在Node上运行的JavaScript相比其他后端开发语言有何优势？
>   >
>   >  最大的优势是借助JavaScript天生的事件驱动机制加`V8`高性能引擎，使编写高性能Web服务轻而易举。
>   >
>   >  其次，JavaScript语言本身是完善的函数式语言，在前端开发时，开发人员往往写得比较随意，让人感觉JavaScript就是个“玩具语言”。但是，在Node环境下，通过模块化的JavaScript代码，加上函数式编程，并且无需考虑浏览器兼容性问题，直接使用最新的`ECMAScript 6`标准，可以完全满足工程上的需求。

### 1.3、为什么学习`Node.js`

> - 前端框架`Vue`，`React`，都是建立在`Node.js`的基础上发展起来的。 
> - 前端自动化、模块化打包工具gulp、`webpack`也是基于`Node.js`开发和使用的。 
> - 前端开发中占比最大的编辑器`VScode`也是在`Node.js`的基础上开发出来的。
> - 在前端招聘中通常会对`Node.js`有一定的要求，特别对于高级前端开发工程师，更是必不可少的技能：  
>
> <font color=red>对于后端开发者来讲，Node并不是那么重要，但是对于前端开发者来讲，Node必然是进阶路上的重要一环。 </font>

### 1.4、相关概念

#### 1.4.1、同步和异步

> - 判断标准：调用者是否主动等待被调用者的返回结果
> - 同步
>   - 理论说明：任务A的执行过程中调用了任务B。任务A对任务B发起调用后，主动等待调用结果。
>   - 生活举例：你去书店问老板，是否有《操作系统》这本书，老板说：稍等，我查一下。然后开始查啊查，等查好了，告诉你结果（主动等待被调用方返回结果）。
> - 异步
>   - 理论说明：任务A的执行过程中调用了任务B。任务A对任务B发起调用后，继续执行后续工作。任务B完成后通过状态、通知来通知调用者。
>   - 生活举例：你去书店问老板，是否有《操作系统》这本书，查好了打电话给你，然后直接挂电话了（此时被调用方不返回结果）。过了几天，查好了，老板主动打电话给你（被调用方回调调用方，告知结果）。

#### 1.4.2、阻塞和非阻塞

> - 判断标准：调用方在等待被调用方的返回结果时，是否可以做其他事（是否被挂起）
> - 阻塞
>   - 理论说明：任务A对任务B发起调用后，任务B需要执行一段时间才可返回结果，任务A选择等待任务B的返回结果（暂时挂起）。
>   - 生活举例：你去书店问老板，是否有《操作系统》这本书，你会一直把自己挂起，什么都不干，一直在那等，直到得到返回结果。
> - 非阻塞
>   - 理论说明：任务A对任务B发起调用后，与此同时，任务A在任务B执行的过程中去完成别的工作，等待任务B结果返回后再继续（不挂起，而是继续执行自己的任务）。
>   - 生活举例：你去书店问老板，是否有《操作系统》这本书，不管老板有没有告诉你，你自己都先去玩了（继续执行自己的任务而不是干等），但是也要偶尔也要check一下老板是否有了结果。

#### 1.4.3、同步异步阻塞非阻塞小阅读

> ```md
> 隔壁王大爷（不是隔壁老王，hhhhh~~）有个水壶，王大爷经常用它来烧开水。
> 
> 1.王大爷把水壶放到火上烧，然后啥也不干在那等，直到水开了王大爷再去搞别的事情。???
> 2.王大爷觉得自己有点憨，不打算等了。把水壶放上去之后大爷就是去看电视，偶尔来瞅一眼有没有开。 ???
> 3.王大爷去买了个响水壶，他把响水壶放在火上，然后也是等着水开，水开的时候水壶会发出声响。???
> 4.王大爷又觉得自己有点憨，他把响水壶放在火上然后去看电视，这时他不用偶尔y来瞅一眼，因为水开的时候水壶会发出声音通知大爷。???
> ```

### 1.5、`Node.js`有什么特点

#### 1.5.1、 优点

> - 异步的非阻塞的I/O（I/O线程池）
>
> - 异步事件驱动 
>
> - 单线程 （这里指主线程） 
>   - 跨平台
>
> ![img](D:\BaiduNetdiskDownload\03阶段张培跃\3阶段js高级&jquery&pc项目\Day19-node\课件\assets\007S8ZIlgy1ghiofsh7mdj319w0o274x.jpg)

#### 1.5.2、缺点

> - 回调函数嵌套太多、太深（俗称回调地狱）
>
> - 可靠性低，一旦代码某个环节崩溃，整个系统都崩溃 
>
> - 不适合CPU密集型应用

### 1.6、应用场景

> * `APP` 接口服务
> * 网页聊天室。
> * 动态网站, 个人博客, 论坛, 商城等
> * 后端的Web服务，例如服务器端的请求（爬虫），代理请求（跨域）
>
> * 前端项目打包(`webpack`, gulp)
> * 作为中间层使用。

### 1.7、`Node.js`的安装

> `Node.js` 安装包及源码下载地址为：https://nodejs.org/en/download/。 
>
> 你可以根据不同平台系统选择你需要的 `Node.js` 安装包。
>
> <span style="color:red">我们选择 LTS 版本（长期维护版本 long term service）</span>
>
> `Node.js` 历史版本下载地址：https://nodejs.org/zh-cn/download/releases/
>
> ![1572676490692](D:\BaiduNetdiskDownload\03阶段张培跃\3阶段js高级&jquery&pc项目\Day19-node\课件\assets\1572676490692.png)
>
> 双击打开安装文件，一路下一步即可😎，默认的安装路径是 `C:\Program Files\nodejs`
>
> 安装完成后，在 `CMD` 命令行窗口下运行 `node -v`，如显示版本号则证明安装成功，反之安装失败，重新安装：
>
> ![1606610487668](D:\BaiduNetdiskDownload\03阶段张培跃\3阶段js高级&jquery&pc项目\Day19-node\课件\assets\1606610487668.png) 

### 1.8、初体验

> * 交互模式
>
>   >  在命令行下输入命令 `node`，这时进入 nodejs 的交互模式（环境）

![1606610639327](D:\BaiduNetdiskDownload\03阶段张培跃\3阶段js高级&jquery&pc项目\Day19-node\课件\assets\1606610639327.png)

> * 文件执行
>
>   > 创建文件 `hello.js` ，并写入代码` console.log('hello world')`，命令行运行 `node hello.js`
>   >
>   > ```shell
>   > node hello.js  # 运行当前目录下的hello.js
>   > node code/hello.js # 运行当前目录下的code文件夹下的hello.js
>   > node hello # .扩展名可以省略
>   > ```
>
>  >快速启动命令行的方法
>  >
>  >* 在文件夹上方的路径中，直接输入 `cmd` 即可
>  >* 使用 `webstorm` 和` vscode `自带的命令行窗口
>
> ![1572680753835](D:\BaiduNetdiskDownload\03阶段张培跃\3阶段js高级&jquery&pc项目\Day19-node\课件\assets\1572680753835.png)
>
> * `VScode` 插件运行
>
>   > 安装插件 『code Runner』, 文件右键 -> run code
>
> ![1593782861500](E:/201130/资料/课件/assets/1593782861500.png)

### 1.9、global

> <span style="color:red">在 nodejs 环境下，不能使用 BOM 和 DOM ，也没有全局对象 window，全局对象的名字叫 global</span>
>
> ```js
> console.log(window);// window is not defined
> console.log(document);//  document is not defined
> ```
>
> - `Browser`（全局对象是window）中`js`的组成： 将JS嵌入在html页面中执行。
>   - `DOM `--> document 用来操作文档
>   - `BOM` --> window 用来操作浏览器（控制浏览记录、读取浏览器的信息...）
>
> * `Nodejs`（全局对象是Global）中`js`的组成：将JS通过NODE命令执行。
>   * `DOM`(完全没有)
>   * `BOM`(干掉了绝大部分，只保留少部分)
>     * `console.log`、`setInterval`、`setTimeout`、`clearInterval`、`clearTimeout`
>
> ```js
> console.log(global);
> /*
> 输出global的结果：
> Object [global] {
>   global: [Circular],
>   clearInterval: [Function: clearInterval],
>   clearTimeout: [Function: clearTimeout],
>   setInterval: [Function: setInterval],
>   setTimeout: [Function: setTimeout] { [Symbol(util.promisify.custom)]: [Function] },
>   queueMicrotask: [Function: queueMicrotask],
>   clearImmediate: [Function: clearImmediate],
>   setImmediate: [Function: setImmediate] {
>     [Symbol(util.promisify.custom)]: [Function]
>   }
> }
> * */
> console.log(global.global.global === global);// true
> ```
>
> `queueMicrotask`:通过该函数可以创建微任务
>
> ```js
> {
>     // 执行顺序：先执行同步，再执行异步回调。（异步当中微任务优先执行）
>     // 1 3 2
>     setTimeout(()=>{
>         console.log(2);
>     })
>     // 通过该函数可以创建微任务函数。
>     queueMicrotask(()=>{
>         console.log(3);
>     })
>     console.log(1);
> }
> ```
>
> ```js
> {
> 
>     // queueMicrotask(()=>{console.log("微任务")});
>     // let timer = setImmediate(()=>{console.log(2)});
>     // clearImmediate(timer);// 清除
>     // console.log(3);
> 
>     queueMicrotask(()=>{console.log("微任务")});
>     setTimeout(()=>console.log("setTimeout"));
>     setImmediate(()=>{console.log("setImmediate")})
> }
> ```

## 二、Buffer 缓冲器（了解）

### 2.1、Buffer是什么?

> Buffer是一个和数组类似的对象，不同是Buffer是专门用来保存二进制数据的(数据储存为二进制数据，性能是最好的)。
>
> ``` js
> // 二进制
> console.log(12);// 二进制为1100
> // 12转为二进制。 除2倒取余。
> /*
> * 12/2 = 6  余 0
> * 6/2= 3    余 0
> * 3/2 = 1   余 1
> * 1/2 = 0   余 1
> * */
> 
> // 1100 转为10进制
> // 1*2的3次方+1*2的2次方 = 8 + 4 = 12
> ```

### 2.2、Buffer特点

> 1. 大小固定：在创建时就确定了，且无法调整
> 2. 性能较好：直接对计算机的内存进行操作
> 3. 每个元素大小为1字节.

### 2.3、Buffer的创建

> - `Buffer.alloc(size,[fill])：` 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
>
>   ```js
>   // 1、alloc  在内存中创建一个Buffer，初始值为0
>   const b1 = Buffer.alloc(10);
>   console.log(b1);// <Buffer 00 00 00 00 00 00 00 00 00 00>
>   
>   // 2、allc 在内存中创建一个Buffer，用61添充。61是十六进制
>   const b2 = Buffer.alloc(5,"a");
>   console.log(b2);// <Buffer 61 61 61 61 61>
>   ```
>
> - `Buffer.allocUnsafe(size)：` 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据
>
>   ```js
>   // alloc会在内存中找一块空间，并将该空间清空。而allocUnsafe会找一块空间，但不会将该空间的内容清空。
>   const b3 = Buffer.allocUnsafe(10);
>   console.log(b3);
>   ```
>
> - `Buffer.from(string)：` 返回一个被 string 的值初始化的新的 Buffer 实例
>
>   ```js
>   // 可以将字符串转换为Buffer
>   let str = "iloveyou";
>   console.log(Buffer.from(str));// <Buffer 69 6c 6f 76 65 79 6f 75>
>   ```

### 2.4、Buffer的使用

> ```js
> let buf = Buffer.alloc(10);
> // 返回的是一个布尔值，作用：验证是否为Buffer
> console.log(Buffer.isBuffer(buf));// true
> console.log(Buffer.isBuffer(1));// false
> 
> // 每一个元素是用16进制表示，最高为ff,如果超出了，舍弃高位
> // 第二个参数如果为数字，会将数字转为16进制，作为其元素
> let buf = Buffer.alloc(10,256);
> console.log(buf);
> 
> // 中文会占用3个元素
> let buf = Buffer.from("中")
> console.log(buf)
> 
> 
> let buf = Buffer.from("abcdefg");
> console.log(buf);
> console.log(buf[0]);// 将buf当中下标为0的元素进行输出（转为十进制）
> console.log(buf.toString());// abcdefg 将buffer转为字符串
> // buffer 可以遍历输出
> buf.forEach(function (item) {
>  console.log(item);
> })
> ```

### 2.5、关于单位换算

> `1Bit` 对应的是 1 个二进制位
>
> 8 Bit = 1 字节（Byte）
>
> `1024Byte` = `1KB `
>
> `1024KB` = `1MB`
>
> `1024MB` = `1GB`
>
> `1024GB` = `1TB`
>
> 平时所说的网速 `10M 20M 100M` 这里指的是 Bit ，所以理论下载速度 除以 8 才是正常的理解的下载速度

## 三、node的内置常量``__dirname``和``__filename``

>内置的意思就是不需要额外去定义它
>
>* `__dirname`：当前文件（你用node运行的文件）所在的**文件夹地址**
>
>  ```js
>  console.log(__dirname);// D:\210415\Lession19\code
>  ```
>
>* `_filename`：当前文件的**完整地址**（精确到你所运行的那个`j`s文件）
>
>  ```js
>  console.log(__filename);// D:\210415\Lession19\code\9-内置常量.js
>  ```

## 四、内置模块

```shell
# 模块：在NOde.js 每一个JS文件即是一个模块。内置模块：Node提供的模块。
# 模块分为三类：1、内置模块  2、自定义模块 3、第三方模块。  
```

### 4.1 、path

>  path 模块提供了一些用于处理文件路径的小工具，我们可以通过以下方式引入该模块： 
>
>  ```js
>  const path = require('path');
>  ```
>
>  常用方法：
>
>  * `path.join([path1][, path2][, ...]) `: 用于连接路径。该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是"`/`"，Windows系统是"`\`"。 
>
>    ```js
>    console.log(path.join("../a/b"));//          ..\a\b
>    console.log(path.join("../a/b","./c"));//    ..\a\b\c
>    console.log(path.join("../a/b","../c"));//   ..\a\c
>    console.log(path.join("../a/b","c"));//      ..\a\b\c
>    console.log(path.join("../a/b","/c"));//     ..\a\b\c
>    console.log(path.join("../a/b","c","d"));//  ..\a\b\c\d
>    ```
>
>  * `path.isAbsolute(path)`: 判断参数 **path** 是否是绝对路径。
>
>    ```js
>    console.log(path.isAbsolute("./a"));// false
>    console.log(path.isAbsolute("../a"));// false
>    console.log(path.isAbsolute("../a/b"));// false
>    console.log(path.isAbsolute("/a"));// true
>    console.log(path.isAbsolute("d:/a"));// true
>    console.log(path.isAbsolute("c:/a"));// true
>    ```
>
>  * `path.dirname(p)`：返回路径中代表文件夹的部分 
>
>    ```js
>    console.log(__dirname);// D:\210415\Lession19\code
>    console.log(__filename);// D:\210415\Lession19\code\10-path.js
>    console.log(path.dirname("/a/b"));// /a
>    console.log(path.dirname(__dirname));// D:\210415\Lession19
>    console.log(path.dirname("D:/210415/Lession19/code"));// D:/210415/Lession19
>    console.log(path.dirname(__filename));// D:\210415\Lession19\code\
>    console.log(path.dirname("../a"));// ..
>    console.log(path.dirname("../a/b/c"));// ../a/b
>    ```
>
>  * `path.basename(p[, ext])`：返回路径中的最后一部分。 
>
>    ```js
>    console.log(__dirname);// D:\210415\Lession19\code
>    console.log(__filename);// D:\210415\Lession19\code\10-path.js
>    console.log(path.basename(__dirname));// code
>    console.log(path.basename(__filename));// 10-path.js
>    console.log(path.basename("../a/b/c"));// c
>    ```
>
>  * `path.extname(p)`：返回路径中文件的后缀名。
>
>    ```js
>    let str = "./a/b/c.txt";
>    console.log(path.extname(str));// .txt
>    console.log(path.extname("my.png"));// .png
>    console.log(path.extname(__filename));// .js
>    console.log(path.extname(__dirname));
>    ```
>
>  * `path.resolve()`：  将路径或者路径片段序列化为绝对路径 
>
>    ```js
>    console.log(__dirname);// D:\210415\Lession19\code
>    console.log(path.resolve("./"));// D:\210415\Lession19\code
>    console.log(path.resolve("/"));// D:\
>    console.log(path.resolve("../"));// D:\210415\Lession19
>    console.log(path.resolve("./a"));// D:\210415\Lession19\code\a
>    console.log(path.resolve("./a","./b"));//D:\210415\Lession19\code\a\b
>    console.log(path.resolve("./a","./b","./c"));//D:\210415\Lession19\code\a\b\c
>    console.log(path.resolve("./a","./b","./c","../d"));//D:\210415\Lession19\code\a\b\d
>    console.log(path.resolve("/code","/a/b/c","../","./c"));// D:\a\b\c
>    ```
>
>    注意：
>
>    ```js
>    // 1-当前JS地址
>    // console.log(__dirname);// 当前JS所在的目录
>    // 2-node运行环境地址:D:\210415\Lession19\code
>    // D:\210415\Lession19\code>node 11-重要概念.js
>        
>    // 1、当前JS所在的目录与NODE运行环境地址无关
>    // console.log(__dirname);//D:\210415\Lession19\code
>        
>    // 2、如果我使用path.resolve, resolve当中相对的是node运行环境地址。
>    // const path = require("path");
>    // 执行： D:\210415\Lession19\code>node 11-重要概念.js
>    // console.log(path.resolve("./"));// D:\210415\Lession19\code
>    // 执行：D:\210415\Lession19>node code/11-重要概念.js
>    // console.log(path.resolve("./"));// D:\210415\Lession19
>        
>    // 3、如果不管你的node运行地址是什么，都要输出一样的内容。（相对的地址都更改为当前JS所在的目录）
>    const path = require("path");
>    console.log(path.resolve(__dirname,"./"));// D:\210415\Lession19\code
>    ```

### 4.2、`fs`文件系统(内置模块)

> 在 `NodeJS` 中，所有与文件操作都是通过 `fs` 核心模块来实现的，包括文件目录的创建、删除、查询以及文件的读取和写入，在 `fs` 模块中，所有的方法都分为同步和异步两种实现，具有 `sync` 后缀的方法为同步方法，不具有 `sync` 后缀的方法为异步方法 。

#### 4.2.1、文件读取

> * 同步读取方法 `readFileSync(path[, options])`
>
>   > `readFileSync` 有两个参数：
>   >
>   > * 第一个参数为读取文件的路径或文件描述符；
>   > * 第二个参数为 encoding（编码，默认为 null);
>
> >```js
> >const fs = require("fs");
> >const path = require("path");
> >// 第一个参数是地址,相对的是NODE运行环境地址。
> >// 读取当前目录下的test.html
> >// const result = fs.readFileSync(__dirname+"/test.html");
> >// console.log(result.toString());
> >
> >// 读取的是当前目录下某个文件夹的test.html
> >// const result = fs.readFileSync(__dirname+"/data/test.html");
> >// console.log(result.toString());
> >
> >// 读取的是上一级目录下的test.html
> >// const result = fs.readFileSync(path.resolve(__dirname,"../test.html"));
> >// console.log(result.toString());
> >// console.log(path.resolve(__dirname,"../test.html"));
> >
> >// 如果读取之后的结果省略.toString(),那么输出的为buffer
> >// const result = fs.readFileSync(path.resolve(__dirname,"../test.html"));
> >// console.log(result);
> >
> >// 如果读取之后的结果省略.toString()，输出的结果不想为buffer,将第二个参数设置为utf-8
> >// buffer指的是数据还未拥有格式。toString()可以让其字符串。
> >const result = fs.readFileSync(path.resolve(__dirname,"../test.html"),"utf-8");
> >console.log(result);
> >```
>
> * 异步读取方法 `readFile(path[, options])`
>
>   > 异步读取方法 `readFile` 与 `readFileSync` 的前两个参数相同，最后一个参数为回调函数，函数内有两个参数 `err`（错误）和 `data`（数据），该方法没有返回值，回调函数在读取文件成功后执行。 
>
>   ```js
>   const fs = require("fs");
>   // 1 判断异常
>   // fs.readFile(__dirname+"/test.html",function (err,result) {
>   //     // console.log(err);// null 代表正常
>   //     // 判断是否有异常
>   //     if(err){// 有异常输出异常信息
>   //         console.log("有异常",err)
>   //     }else {// 无异常输出结果
>   //         console.log(result.toString());
>   //     }
>   // })
>   
>   // 2 判断异常2
>   // fs.readFile(__dirname+"/test.html",function (err,result) {
>   //     if(!err){
>   //         // 正常
>   //         console.log(result.toString())
>   //     }else{
>   //         console.log(err);
>   //     }
>   // })
>   
>   // 3、省略toString,可以设置第二参数为utf-8 或utf8
>   fs.readFile(__dirname+"/test.html","utf-8",function (err,result) {
>       if(!err){
>           // 正常
>           console.log(result)
>       }else{
>           console.log(err);
>       }
>   })
>   ```
>
> * 流式读取 `fs.createReadStream(path[, options])`
>
>   ```js
>   // 流式读取 `fs.createReadStream(path[, options])`
>       
>   const fs = require("fs");
>   const rs = fs.createReadStream(__dirname+"/one.mp4");
>   // on 代表追踪流执行的状态。
>   rs.on("error",function (err) {
>       console.log("当读取异常时",err);
>   })
>   rs.on("open",function () {
>       console.log("当文件打开时")
>   })
>   rs.on("ready",function () {
>       console.log("准备工作完成")
>   })
>   let str = "";
>   rs.on("data",function (chunk) {
>       // 每次64k
>       str+=chunk
>       console.log("开始拿数据",chunk.length)
>   })
>   rs.on("end",function () {
>       console.log("获取数据完毕",str.length)
>   })
>   rs.on("close",function () {
>       console.log("关闭操作文件")
>   })
>   ```
>
> 

#### 4.2.2、文件写入

> * 同步写入方法 `writeFileSync(path[, options])`
>
>   > `writeFileSync` 有三个参数：
>   >
>   > 第一个参数为写入文件的路径或文件描述符；
>   > 第二个参数为写入的数据，类型为 String 或 Buffer；
>   > 第三个参数为 options，默认值为 null，其中有 encoding（编码，默认为 `utf8`）、 flag（标识位，默认为 w）也可直接传入 encoding。
>
> >```js
> >const fs = require("fs");
> >// 1、在指定的文件内写入内容。如果指定的文件不存在，那么会创建一个文件。
> >// fs.writeFileSync(__dirname+"/a.txt","你好");
> >
> >// 2、如果指定的文件夹不存在，会报异常。
> >// fs.writeFileSync(__dirname+"/a/b/c.txt","你还好吗？")
> >
> >// 3、写入的内容默认会将之前的覆盖掉。
> >// fs.writeFileSync(__dirname+"/a/b/c.txt","你还好吗？1");
> >
> >// 4、可以追加内容
> >fs.writeFileSync(__dirname+"/a/b/c.txt","你还好吗？1",{flag:"a"});
> >```
>
> * 异步写入方法 `writeFile(path[, options])`
>
>   > 异步写入方法 `writeFile` 与 `writeFileSync` 的前三个参数相同，最后一个参数为回调函数，函数内有一个参数 `err`（错误），回调函数在文件写入数据成功后执行。 
>   >
>   > ```js
>   > const fs = require("fs");
>   > // 1、如果文件不存在，会创建。如果文件夹不存在会报错。
>   > // fs.writeFile(__dirname+"/b.txt","我爱你中国，我亲爱的母亲，我为你流泪，也为你自豪",function (err) {
>   > //     console.log(err);
>   > // })
>   > 
>   > // 2、追加内容
>   > // fs.writeFile(__dirname+"/b.txt","我爱你中国，我亲爱的母亲，我为你流泪，也为你自豪",{flag:"a"},function (err) {
>   > //     console.log(err);
>   > // })
>   > 
>   > // 3、注意：不管是同步写入还是异步写入。内容只能是Buffer或字符串
>   > fs.writeFile(__dirname+"/b.txt",{a:1,b:2},{flag:"a"},function (err) {
>   >  console.log(err);
>   > })
>   > console.log(11111111);
>   > ```
>
> * 流式写入`fs.createWriteStream(path[, options])`
>
>   ```js
>   const fs = require("fs");
>   const ws = fs.createWriteStream(__dirname+"/a.txt");
>   ws.on("open",function () {
>       console.log("打开写入的文件 ")
>   })
>   ws.on("close",function () {
>       console.log("关闭")
>   })
>   ws.write("你还好吗");
>   ws.write("你还好吗");
>   ws.close();// 关闭文件
>   ```

#### 4.2.3、流式读写操作

```js
const fs = require("fs");
// 非流式读写
// fs.readFile(__dirname+"/b.txt",function (err,result) {
//     fs.writeFile(__dirname+"/two.txt",result,function (err) {
//         if(!err) console.log("写入成功");
//         else console.log("写入失败")
//     })
// })

// 流式读写1
// const rs = fs.createReadStream(__dirname+"/one.mp4");
// const ws = fs.createWriteStream(__dirname+"/two.mp4");
// rs.on("data",function (thunk) {
//     ws.write(thunk);
// })
// rs.on("end",function () {
//     console.log("完成")
// })

// 流式读写2
const rs = fs.createReadStream(__dirname+"/one.mp4");
const ws = fs.createWriteStream(__dirname+"/three.mp4");
rs.pipe(ws);
```

#### 4.2.4、文件移动+重命名

```js
const fs = require("fs");
// 第一个参数是要操作的文件，第二个参数为操作后的文件
// 将文件a.txt 重命名为aaaaa.txt
// fs.renameSync(__dirname+"/a.txt",__dirname+"/aaaaa.txt");

// 将当前目录下的aaaaa.txt移动到/a/my.txt
// fs.renameSync(__dirname+"/aaaaa.txt",__dirname+"/a/my.txt");

// 异步
fs.rename(__dirname+"/b.txt",__dirname+"/d.txt",function (err) {
    console.log(err);
})
```

#### 4.2.5、删除文件

```js
const fs = require("fs");
// 同步删除
// fs.unlinkSync(__dirname+"/d.txt");
// 异步删除
fs.unlink(__dirname+"/three.txt",function (err) {
    console.log(err);
})
```
