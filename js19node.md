## 九、Express

### 9.1、Express是什么

> Express 是一个基于 Node.js 平台的极简、灵活的 web 应用开发框架，它提供一系列强大的特性，帮助你快速创建各种 Web 和移动设备应用。
>
> 简单来说Express就是运行在node中的用来搭建服务器的模块。(第三方模块 ) 

### 9.2、Express的使用

#### 9.2.1 下载

>  安装express并添加到依赖项
>
>  ```shell
>  cnpm i express --save
>  ```

#### 9.2.2 第一个服务器

> ```js
> //引入express模块
> var express = require('express')
> //创建应用对象
> var app = express()
> //配置静态资源
> app.use(express.static(__dirname));//中间件
> //开启服务器，监听3000端口
> app.listen(3000,function () {
>  console.log("success");
> })
> ```

### 9.3、路由（Route)

#### 9.3.1、Route是什么 

> Route是当接收到客户端发来的HTTP请求，会根据请求的URL，来找到相应的映射函数，然后执行该函数，并将函数的返回值发送给客户端。 
>
> 我们可以将路由定义为三个部分：
>
> 第一部分：HTTP请求的方法（get或post）
>
> 第二部分：URL路径
>
> 第三部分: 回调函数 

#### 9.3.2、Route的实现

> Express中提供了一系列函数，可以让我们很方便的实现路由：
>
> ```shell
> app.<method>(path，callback) 
> 语法解析：
> method指的是HTTP请求方法，比如：
> app.get()
> app.post()
> path指要通过回调函数来处理的URL地址
> callback参数是应该处理该请求并把响应发回客户端的请求处理程序
> ```

#### 9.3.3、Route的运行流程

> 当Express服务器接收到一个HTTP请求时，它会查找已经为适当的HTTP方法和路径定义的路由
>
> 如果找到一个，Request和Response对象会被创建，并被传递给路由的回调函数
>
> 我们便可以通过Request对象读取请求，通过Response对象返回响应
>
> Express中还提供了all()方法，可以处理两种请求。

### 9.4、Request对象

#### 9.4.1、Request对象是什么

> Request对象是路由回调函数中的第一个参数，代表了用户发送给服务器的请求信息
>
> 通过Request对象可以读取用户发送的请求包括URL地址中的查询字符串中的参数，和post请求的请求体中的参数。

#### 9.4.2、Request对象属性和方法

> | 属性/方法         | 描述                                                 |
> | ----------------- | ---------------------------------------------------- |
> | request.query     | 获取get请求查询字符串的参数，拿到的是一个对象        |
> | request.params    | 获取get请求参数路由的参数，拿到的是一个对象          |
> | request.body      | 获取post请求体，拿到的是一个对象（要借助一个中间件） |
> | request.get(xxxx) | 获取请求头中指定key对应的value                       |

### 9.5、Response对象

#### 9.5.1、Response对象是什么

> Response对象是路由回调函数中的第二个参数，代表了服务器发送给用户的响应信息。
>
> 通过Response对象可以设置响应报文中的各个内容，包括响应头和响应体。

#### 9.5.2 Response对象的属性和方法

> | 属性/方法                  | 描述                                       |
> | -------------------------- | ------------------------------------------ |
> | response.send()            | 给浏览器做出一个响应                       |
> | response.end()             | 给浏览器做出一个响应（不会自动追加响应头） |
> | response.download()        | 告诉浏览器下载一个文件                     |
> | response.sendFile()        | 给浏览器发送一个文件                       |
> | response.redirect()        | 重定向到一个新的地址（url）                |
> | response.set(header,value) | 自定义响应头内容                           |
> | res.status(code)           | 设置响应状态码                             |

### 9.6、中间件

#### 9.6.1、中间件简介

> Express 是一个自身功能极简，完全是由路由和中间件构成一个的 web 开发框架：从本质上来说，一个 Express 应用就是在调用各种中间件。
>
> 中间件（`Middleware`） 是一个函数，它可以访问请求对象（request）, 响应对象（response）, 和 web 应用中处于请求-响应循环流程中的中间件，一般被命名为 next 的变量。

#### 9.6.2、中间件功能

> 1) 执行任何代码。:用户发送请求，服务端可以接收请求信息，并给予响应。在请求与响应之间开发人员可以根据需要写相对应的逻辑程序。
>
> 2) 操作请求和响应对象。: request 请求对象 response响应对象 
>
> 3) 终结请求-响应循环。：response.end   response.json response.send
>
> 4) 调用堆栈中的下一个中间件。
>
> ```js
> app.get("/user",function(req,res,next){
>     next();    
> })
> ```
>
> 如果当前中间件没有终结请求-响应循环，则必须调用 next() 方法将控制权交给下一个中间件，否则请求就会挂起。 

#### 9.6.3、中间件的分类

> 1) 应用级中间件（过滤非法的请求，例如身份验证）
>
> ```js
> app.get("/user",function(){});
> app.post("/user",function(){});
> app.all("/user",function(){});
> app.use("/user",function(){});
> ```
>
> 2) 第三方中间件（通过npm下载的中间件，例如body-parser）
>
> 3) 内置中间件（express内部封装好的中间件）
>
> ```js
> // 将指定的目录作为静态资源。当用户请求该站点时，该中间件会验证用户输入的文件是否在指定的目录中，如果存在，直接将该文件进行响应，如果不存在，继续向下查找（next）
> app.use(express.static(__dirname));
> ```
>
> 4) 路由器中间件 （Router）
>
> ```js
> const express = require("express");
> const userRouter = express.Router();
> userRouter.get("/",function(req,res){})
> ```

### 9.7、Router路由器   (router->路由器    route->路由)

#### 9.7.1、Router是什么

> Router 是一个完整的中间件和路由系统，也可以看做是一个小型的app对象。

#### 9.7.2、为什么使用Router

>  为了更好的分类管理route

### 10、EJS模板

#### 10.1、EJS是什么

> EJS是一个高效的 JavaScript 模板引擎。
>
> 模板引擎是为了使用户界面与业务数据（内容）分离而产生的。
>
> 简单来说，使用EJS模板引擎就能动态渲染数据。（服务器端渲染）

#### 10.2、EJS的使用

> 1) 下载安装
>
> ```shell
> npm i ejs --save
> ```
>
> 2) 将默认文件夹`views`更改为当前目录下的`html`文件夹
>
> ```js
> app.set("views",__dirname+"/html");
> ```
>
> 3) 将`html`通过`ejs`的解析数据方法来使用
>
> ```js
> app.engine("html",ejs.renderFile);
> ```
>
> 4) 使用模板，通过response来渲染模板
>
> ```js
> response.render(‘模板名称’, 数据对象)
> ```



