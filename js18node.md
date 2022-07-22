* 关于module.exports 与 exports

  ```js
  // 导出: module.exports与exports的引用地址是相同的。
  // mo->index.js
  // module.exports =1
  exports.a = 1;
  exports.b = 2;
  console.log(module.exports === exports);// true
  // exports在使用时不要重置其引用地址
  function Box(){
      this.userName = "zhangsan"
  }
  exports = new Box();
  
  
  // 引入：index.js
  const index = require("./mo");
  console.log(index);// { a: 1, b: 2 }
  ```

## 八、NPM

### 8.1、`npm`介绍

> `npm` 有两层含义:
>
> * Node的开放式模块登记和管理系统：https://www.npmjs.com
>
> * Node默认的模块管理器 (node package manager)，是一个命令行下的应用程序，用来安装和管理Node包。

### 8.2、Node包管理器介绍

> 全称：Node Package Manager , Node 的包管理器，也是一个应用程序。

### 8.3、包是什么

> <font color=red>`Node.js` 的包遵循` CommonJS` 规范，将一组相关的模块组合在一起，形成一个完整的工具，该工具称为包。</font>

### 8.4、作用

> Node的包管理器(`npm`)，功能极其强大：<font color=red>通过 `npm` 可以对 `Node` 的工具包进行搜索、下载、安装、删除、上传。借助别人写好的包，可以让我们的开发更加方便。</font>
>
> 常见的使用场景有以下3种：
>
> - 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
> - 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
> - 允许用户将自己编写的包上传到NPM服务器供别人使用。

### 8.5、安装

> `npm`不需要单独安装。在安装Node的时候，会连带一起安装`npm`。可以通过以下命令来检测是否成功安装：
>
> ```shell
> npm -v
> ```

### 8.6、常用命令

#### 8.6.1、`npm search`

>  `npm search`命令用于搜索`npm`仓库 
>
>  ```shell
>  npm search jquery
>  npm s jquery
>  ```
>
>  该命令使用频率不高，一般在搜索工具包的时候，会到 https://npmjs.org 搜索

#### 8.6.2、`npm init`

> <font color=red>需要使用npm的话,首先干的事：先执行npm init</font>
>
> `npm init`用来初始化生成一个新的`package.json`文件。它会向用户提问一系列问题，如果你觉得不用修改默认配置，一路回车就可以了。
>
> 如果使用了`-y`（代表yes），则跳过提问阶段，直接生成一个新的`package.json`文件。
>
> ```sh
> npm init
> npm init --yes
> npm init -y
> ```
>
> 运行后会创建 `package.json` 文件 :
>
> ```json
> {
> 	"name": "zhangpeiyue",     #包的名字
> 	"version": "1.0.0",        #包的版本
> 	"main": "index.js",        #包的入口文件
> 	"scripts": {               #脚本配置
> 		"test": "echo \"Error: no test specified\" && exit 1"
> 	},
> 	"keywords": [],            #关键字
> 	"author": "",              #作者
> 	"license": "ISC",          #版权声明
> 	"description": ""          #包的描述
> }
> ```
>
> * 注意生成的包名不能使用中文，大写 ！！！
>
> 关于开源证书扩展阅读
>
> <http://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html>

#### 8.6.3、`npm install`

> `npm install`命令用来安装模块到`node_modules`目录(如果目录不存在，会创建一个)。 
>
> ```sh
> npm install <packageName>
> ```
>
> 以下实例，我们使用 npm 命令安装常用的 Node.js web框架模块 **express**: 
>
> ```shell
> npm install express
> ```
>
> 安装好之后，express 包就放在了工程目录下的 node_modules 目录中，因此在代码中只需要通过 **require('express')** 的方式就好，无需指定第三方包路径。 
>
> ```js
> var express = require('express');
> ```

#### 8.6.4、依赖包写入package.json

>  不在`package.json`的包要写入，使用--save 或者--save-dev 
>
>  ```shell
>  # 将该模块写入dependencies属性
>  npm install express --save  # 完整写法    
>  npm i express -S			# 简写
>  
>  #将该模块写入devDependencies属性
>  npm install express --save-dev   # 完整写法    
>  npm i express -D                 # 简写
>  ```
>
>  6 版本的 npm ，安装包时会自动保存在 dependencies 中，可以不用写 --save

#### 8.6.5、 全局安装

> 全局安装命令在任意的命令行下, 都可以执行
>
> ```shell
> npm install less -g
> npm install nodemon -g 
> ```
>
> 全局安装一般用于安装全局工具，如 cnpm，yarn，webpack ，gulp等，全局命令的安装位置
>
> ```
> C:\Users\你的用户名\AppData\Roaming\npm
> ```

#### 8.6.6、安装依赖

> 根据 package.json 中的依赖声明， 安装工具包
>
> ```shell
> npm i
> npm install
> ```

#### 8.6.7、移除包

> ```shell
> npm remove jquery
> npm uninstall jquery
> ```

#### 8.6.8、下载指定版本：如果不指版本，默认安装最新的。

> ```shell
> npm install jquery@3.3.1      # 当前目录下安装jquery版本3.3.1
> npm install nodemon@2.0.7 -g  # 全局安装nodemon的版本2.0.7
> ```

#### 8.6.9、更新包

> ```shell
> npm update jquery
> ```

#### 8.6.10、查看安装包信息

> ```shell
> npm list    #查看本地安装包信息
> npm list -g  #查看全局安装包信息
> npm list express #查看某个安装包信息
> npm ls    #npm list简写
> npm ls nodemon -g # 查看全局安装包nodemon的信息
> ```

命令如下：

```js
npm -v  #查看版本
npm init # 生成 package.json    不要在中文下生成。包的名字不允许写中文，也不允许写npm,也不要大写
npm init --yes  # 使用默认项生成 package.json
npm init -y     # -y是--yes的简写。使用默认项生成 package.json

# 更改镜像到淘宝，否则速度比较慢
npm config set registry https://registry.npm.taobao.org
# 查看是否更改完成
npm config get registry

# 下载本地安装
npm install jquery # 安装一个包
npm install jquery ejs # 安装多个包
npm remove jquery # 删除一个包
npm uninstall ejs  # 删除一个包

npm i jquery ejs # i是install的简写
npm uninstall jquery ejs #删除多个包

npm install jquery --save  #将该模块写入dependencies属性
npm install ejs -S         #将该模块写入dependencies属性
npm remove jquery ejs

npm install jquery --save-dev #将该模块写入devDependencies属性
npm install ejs -D   # -D 是 --save-dev简写 #将该模块写入devDependencies属性

npm install jquery@3.3 # 安装指定版本
npm update jquery  # 升级jquery包

# 先将node_modules删除。
npm i 或 npm install  # 安装package.json中指定的包

# 全局安装
npm install nodemon -g   # 全局安装nodemon.全局安装之后可以在任何目录下使用命令。
npm install nodemon@2.0.7 -g # 全局安装nodemon,并指定版本
npm uninstall nodemon -g   # 删除安装的全局包nodemon

npm list    #查看本地安装包信息
npm list -g  #查看全局安装包信息
npm list express #查看某个安装包信息
npm ls    #npm list简写
npm ls nodemon -g # 查看全局安装包nodemon的信息

```

### 8.7、使用流程

> 团队开发时使用流程
>
> 1. 从仓库中拉取仓库代码
> 2. ==运行 npm install 安装相关依赖==        npm   i 
> 3. 运行项目，继续开发

### 8.8、封装 NPM 包

#### 8.8.1、提交

> 创建自己的 NPM 包可以帮助代码进行迭代进化，使用步骤也比较简单
>
> 1、修改为官方的地址 (
>
> 设置数据源： npm config set registry https://registry.npmjs.org/  
>
> 获得数据库源：npm config get registry
>
> 2、创建文件夹，并创建文件 index.js， 在文件中声明函数，使用 module.exports 暴露
>
> 3、npm 初始化工具包，package.json 填写包的信息
>
> 4、账号注册（激活账号）,==完成邮箱验证==
>
> 5、命令行下 『npm login』 填写相关用户信息
>
> ```
> Username: zhangpeiyue100
> Password:
> Email: (this IS public) 348467295@qq.com
> Logged in as zhangpeiyue100 on https://registry.npmjs.org/.
> ```
>
> 6、命令行下『 npm publish』 提交包 👌
>
> ```
> npm notice
> npm notice package: zhangpeiyue-1020@1.0.1
> npm notice === Tarball Contents ===
> npm notice 688B index.js
> npm notice 280B package.json
> npm notice === Tarball Details ===
> npm notice name:          zhangpeiyue-1020
> npm notice version:       1.0.1
> npm notice package size:  703 B
> npm notice unpacked size: 968 B
> npm notice shasum:        515af8e43f48c3219419aca9583de9408d7f3f4c
> npm notice integrity:     sha512-JmwJTToOf50Zh[...]VxNkr7g5gslSQ==
> npm notice total files:   2
> npm notice
> + zhangpeiyue-1020@1.0.1
> ```
>
> > npm 有垃圾检测机制，如果名字简单或做测试提交，很可能会被拒绝提交
> >
> > ==可以尝试改一下包的名称来解决这个问题==

#### 8.8.2、升级

> 升级 NPM 包，需要修改 package.json 中的版本号修改，只需要执行『npm publish』就可以能提交
>
> 1. 修改包代码
> 2. 修改 package.json 中版本号
> 3. npm publish 提交

#### 8.8.3、删除

> 删除npm包：
>
> ```shell
> npm unpublish 包名 --force
> ```

### 8.9、CNPM

#### 8.9.1、介绍

> cnpm 是淘宝对国外 npm 服务器的一个完整镜像版本，也就是淘宝 npm 镜像，网站地址<http://npm.taobao.org/>

#### 8.9.2、安装

> * 安装命令：
>
>   ```shell
>   npm install cnpm -g --registry=https://registry.npm.taobao.org
>   ```
>
> * 查看版本
>
>   ```shell
>   cnpm -v
>   ```
>
>   <font color=red>注：cnpm 跟 npm 用法完全一致，只是在执行命令时将 npm 改为 cnpm</font>

### 8.10、npm 配置镜像地址

> ```sh
> //淘宝镜像
> npm config set registry https://registry.npm.taobao.org
> //官方镜像   
> npm config set registry https://registry.npmjs.org
> 
> 查看当前镜像地址
> npm config get registry
> ```
>
> > 在发布工具的时候, 一定要将仓库地址, 修改为官方的地址

### 8.11、Yarn

> #### 介绍
>
> yarn 是 Facebook 开源的新的包管理器，可以用来代替 npm。
>
> #### 特点
>
> yarn 相比于 npm 有几个特点
>
> * 本地缓存。安装过的包下次不会进行远程安装
> * 并行下载。一次下载多个包，而 npm 是串行下载
> * 精准的版本控制。保证每次安装跟上次都是一样的
>
> #### 安装
>
> ##### yarn 安装
>
> 只需要一行命令即可安装 yarn
>
> ```sh
> npm install yarn -g
> ```
>
> ##### msi 安装包安装
>
> <https://classic.yarnpkg.com/en/docs/install#windows-stable>
>
> #### 相关命令
>
> yarn 的相关命令
>
> 1)  yarn -v
>
> 2)  yarn init  //生成package.json   
>
> 3)  yarn global add  package (全局安装)
>
> ​	全局安装路径 `C:\Users\你的用户名\AppData\Local\Yarn\bin`
>
> 4)  yarn global remove less (全局删除)
>
> 5)  yarn add package (局部安装)
>
> 6)  yarn add package --dev (相当于npm中的--save-dev)
>
> 7)  yarn remove package
>
> 8)  yarn list //列出已经安装的包名 用的很少
>
> 9)  yarn info packageName //获取包的有关信息  几乎不用
>
> 10)  yarn //安装package.json中的所有依赖 
>
> > npm 5 引入离线缓存，提高了安装速度，也引入了 package-lock.json 文件增强了版本控制
>
> yarn 修改仓库地址
>
> ```sh
> yarn config set registry https://registry.npm.taobao.org
> ```
>
> ### CYarn
>
> 跟 npm 与 cnpm 的关系一样，可以为 yarn 设置国内的淘宝镜像，提升安装的速度
>
> ```sh
> npm install cyarn -g --registry "https://registry.npm.taobao.org"
> ```
>
> 配置后，只需将yarn改为cyarn使用即可
>
> ### 附录
>
> #### 关于版本号
>
> 版本格式：主版本号.次版本号.修订号
>
> * "^3.0.0" ：锁定主版本，以后安装包的时候，保证包是3.x.x版本，x默认取最新的。
> * "~3.2.x" ：锁定小版本，以后安装包的时候，保证包是3.1.x版本，x默认取最新的。
> * "3.1.1" ：锁定完整版本，以后安装包的时候，保证包必须是3.1.1版本。
>
> 安装指定版本的工具包
>
> ```shell
> yarn add jquery@1.11.2
> ```
>
> #### npm 清除缓存
>
> ```
> npm cache clean --force
>  关闭所有的cmd，重新打开再次下载 
> ```

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
> ```js
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

#### 9.3.4、示例

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
> | response.send()            | 给浏览器做出一个响应、自动追加响应头       |
> | response.end()             | 给浏览器做出一个响应（不会自动追加响应头） |
> | response.download()        | 告诉浏览器下载一个文件                     |
> | response.sendFile()        | 给浏览器发送一个文件                       |
> | response.redirect()        | 重定向到一个新的地址（url）                |
> | response.set(header,value) | 自定义响应头内容                           |
> | res.status(code)           | 设置响应状态码                             |

