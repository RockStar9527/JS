#### 4.2.6、创建文件夹

```js
// 回顾
console.log(__dirname);// D:\210415\Lession20\code
console.log(__dirname+"/a");// D:\210415\Lession20\code/a
console.log(path.join(__dirname));// D:\210415\Lession20\code
console.log(path.join(__dirname,"/a"));// D:\210415\Lession20\code\a
console.log(path.resolve("/"));//  D:\
console.log(path.resolve("/","./a"));//  D:\a
console.log(path.resolve("/","./a","./b"));//  D:\a
console.log(path.resolve(__dirname,"../a"));// D:\210415\Lession20\a

const fs = require("fs");// 引入内置模块fs。
const path = require("path");
// 1、在当前目录下创建一个名字为a的文件夹
// fs.mkdir(__dirname+"/c",function (err) {
//     if(!err){
//         console.log("创建成功")
//     }else{
//         console.log("错误信息：",err);
//     }
// })

// 2、在当前.JS文件的上一级目录创建一个文件夹a
// fs.mkdir(path.resolve(__dirname,"../a"),function (err) {
//     if(!err){
//         console.log("创建成功")
//     }else{
//         console.log("错误信息：",err);
//     }
// })

// 3、如果目录不存在，那么会创建。如果存在，会报异常,不允许重复创建。
// fs.mkdir(path.resolve(__dirname,"../a"),function (err) {
//     // file already exists, mkdir 'D:\210415\Lession20\a
//     if(!err){
//         console.log("创建成功")
//     }else{
//         console.log("错误信息：",err);
//     }
// })

// 4、创建的文件夹所在的目录如果不存在会报异常
// fs.mkdir(__dirname+"/a/b/c",function (err) {
//     //  no such file or directory, mkdir 'D:\210415\Lession20\code\a\b\c'
//     if(!err){
//         console.log("创建成功")
//     }else{
//         console.log("错误信息：",err);
//     }
// })

// 5、创建多级目录，不考虑文件夹所在的目录是否存在。
// 如果要创建的文件夹，所在的目录不存在，可以通过设置{recursive:true}，会帮你创建。
// fs.mkdir(__dirname+"/a/b/c/d/e",{recursive:true},function (err) {
//     if(!err){
//         console.log("创建成功")
//     }else{
//         console.log("错误信息：",err);
//     }
// })

// 6、同步
// fs.mkdirSync(__dirname+"/d");
// 7、同步创建多级目录
fs.mkdirSync(__dirname+"/d/a/3/y",{recursive:true});
```

#### 4.2.7、删除文件夹

```js
const fs = require("fs");
const path = require("path");
// 1、删除当前目录下的b文件夹（只能是空目录）
// fs.rmdir(path.join(__dirname,"/b"),function (err) {
//     console.log(err);
// })

// 2、只能删除空目录
// fs.rmdir(path.join(__dirname,"/d"),function (err) {
//     console.log(err);// directory not empty, rmdir 'D:\210415\Lession20\code\d'
// })

// 3、删除非空目录
// fs.rmdir(path.join(__dirname,"/d"),{recursive:true},function (err) {
//     console.log(err);
// })

// 4、同步,删除当前目录下的c文件夹
// fs.rmdirSync(__dirname+"/c");

// 5、同步，删除上一级目录当中的c文件夹
// fs.rmdirSync(path.resolve(__dirname,"../c"));

// 6、同步，删除文件夹a,a文件夹有内容
fs.rmdirSync(__dirname+"/a",{recursive:true});
```

#### 4.2.8、读取文件夹

```js
const fs = require("fs");
const path = require("path");
// 1、异步读取目录当中的内容。第一个参数是目录地址，第二个参数是回调函数
// fs.readdir(__dirname,function (err,result) {
//     console.log(err,result);
// })

// 2、读取上一级目录
// fs.readdir(path.resolve(__dirname,"../"),function (err,result) {
//     console.log(err,result);
// })

// 3、同步读取
const result = fs.readdirSync(__dirname);
console.log(result);// 指定目录下的文件或文件夹生成一个数组
```

#### 4.2.9、判断文件或目录是否存在

```js
const fs = require("fs");
// 异步，查看当前目录当中是否包含名字为2的文件夹
// fs.exists(__dirname+"/2",function (isHas) {
//     console.log(isHas);// 是一个布尔值，true存在，false不存在
// })

// 2、异步，查看当前目录当中是否包含名字为1-创建文件夹1.js的文件
// fs.exists(__dirname+"/1-创建文件夹1.js",function (isHas) {
//     console.log(isHas);// 是一个布尔值，true存在，false不存在
// })

// 3、同步
const result = fs.existsSync(__dirname+"/1");
console.log(result);
```

#### 4.2.10、判断是文件还是文件夹

```js
const fs = require("fs");
// 1、异步，提供的是一个目录地址
// fs.stat(__dirname+"/1",function (err,result) {
//     console.log(result.isFile());//false 布尔值，true代表为文件，false不是
//     console.log(result.isDirectory()); //true 布尔值，true代表为目录，false不是
// })

// 2、异步，提供的是一个文件地址
// fs.stat(__dirname+"/1-创建文件夹.js",function (err,result) {
//     console.log(result.isFile());//true 布尔值，true代表为文件，false不是
//     console.log(result.isDirectory()); //false 布尔值，true代表为目录，false不是
// })

// 3、同步
const result = fs.statSync(__dirname);
console.log(result.isFile());// false
console.log(result.isDirectory());// true
```

### 4.3、`url`

> `url`模块用于URL处理与解析。  使用 `url `的 parse 方法:
>
> ​		parse 方法需要两个参数： 第一个参数是地址   第二个参数是 true 的话表示把 get 传值转换成对象  
>
> * `url.parse`
>
> ```js
> const url = require("url");// 引入了url模块，该模块负责对地址（url）进行解析。
> const urlStr = "http://admin:123456@www.zhangpeiyue.com:8090/a/b/c?one=1&two=2&three=3#my";
> //  第一个参数是地址   第二个参数是 true 的话表示把 get 传值转换成对象
> const result = url.parse(urlStr);
> console.log(result);
> // Url {
> //    protocol: 'https:',  // 协议
> //    slashes: true,       // 是否拥有斜杠（true有，null 无）
> //    auth: 'admin:123456',// 身份（用户名：密码）
> //    host: 'www.zhangpeiyue.com:8090', // 主机名+端口号
> //    port: '8090", // 端口号
> //    hostname: 'www.zhangpeiyue.com',// 主机名
> //    hash: '#my', // 哈希值（片段） 以#开头
> //    search: '?one=1&two=2&three=3', # 带问号的查询字符串
> //    query: 'one=1&two=2&three=3', # 查询字符串
> //    pathname: '/a/b/c',# 站点下的资源目录
> //    path: '/a/b/c?one=1&two=2&three=3', # 资源目录+查询字符串
> //    href: 'https://admin:123456@www.zhangpeiyue.com/a/b/c?one=1&two=2&three=3#my' #完整地址
> // }
> 
> 
> const result2 = url.parse(urlStr,true);// 第二个参数设置为true,query属性是一个对象，方便对接收的数据进行处理。
> // console.log(result2);
> // Url {
> //     protocol: 'http:',
> //     slashes: true,
> //     auth: 'admin:123456',
> //     host: 'www.zhangpeiyue.com:8090',
> //     port: '8090',
> //     hostname: 'www.zhangpeiyue.com',
> //     hash: '#my',
> //     search: '?one=1&two=2&three=3',
> //     query: [Object: null prototype] { one: '1', two: '2', three: '3' },
> //     pathname: '/a/b/c',
> //     path: '/a/b/c?one=1&two=2&three=3',
> //     href: 'http://admin:123456@www.zhangpeiyue.com:8090/a/b/c?one=1&two=2&three=3#my'
> // }
> 
> // result2.query对象没有原型：undefined
> // console.log(result2.query.__proto__);// undefined
> 
> // 可以对其进行转换，让其拥有原型。
> // 将对象转为json字符串:
> console.log(JSON.stringify(result2.query))
> // 将JSON字符串转为JSON对象
> console.log(JSON.parse(JSON.stringify(result2.query)));
> 
> console.log(result2.query.one);// 1
> console.log(result2.query.two);// 2
> console.log(result2.query.three);// 3
> ```
>
> 例子：将 a=1&b=2&c=3 转换为{a:1,b:2,c:3}
>
> ```js
> function searchToObj(str){
>     const arr = str.split("&");
>     let obj = {};
>     arr.forEach(item=>{
>         const arr2 = item.split("=");
>         obj[arr2[0]] = arr2[1]
>     })
>     return obj;
> }
> const str = "a=1&b=2&c=3";
> console.log(searchToObj(str));// { a: '1', b: '2', c: '3' }
> ```
>
> 例子：将对象转为a=1&b=2&c=3
>
> ```js
> function objToSearch(obj) {
>     // 1
>     // var arr = [];
>     // for(let key in obj){
>     //     arr.push(key+"="+obj[key])
>     // }
>     // return arr.join("&")
> 
>     // 2
>     return Object.keys(obj).map(key=>key+"="+obj[key]).join("&");
>     // var arr = Object.keys(obj).map(key=>key+"="+obj[key]).join("&");
>     // console.log(arr);
> }
> console.log(objToSearch({a:1,b:2,c:3}));// "a=1&b=2&c=3"
> ```
>
> * `new Url`
>
> ```js
> const urlStr = "http://admin:123456@www.zhangpeiyue.com:8090/a/b/c?one=1&two=2&three=3#my";
> const result = new URL(urlStr);
> // console.log(result)
> // URL {
> //     href: 'http://admin:123456@www.zhangpeiyue.com:8090/a/b/c?one=1&two=2&three=3#my', #完整地址
> //     origin: 'http://www.zhangpeiyue.com:8090', # 请求的协议+主机名+端口号
> //     protocol: 'http:', # 协议
> //     username: 'admin', # 用户名
> //     password: '123456',# 密码
> //     host: 'www.zhangpeiyue.com:8090', # 主机名+端口号
> //     hostname: 'www.zhangpeiyue.com', # 主机名
> //     port: '8090', # 端口号
> //     pathname: '/a/b/c', # 资源目录
> //     search: '?one=1&two=2&three=3, # 带？的查询字符串
> //     searchParams: URLSearchParams { 'one' => '1', 'two' => '2', 'three' => '3' }, # 类似于MAP
> //     hash: '#my' # 哈希（片断）
> // }
> 
> // 可以通过get获得参数值。
> // console.log(result.searchParams.get("one"));// 1
> // console.log(result.searchParams.get("two"));// 2
> // console.log(result.searchParams.get("three"));// 3
> 
> // has:判断是否拥有指定的属性。
> // console.log(result.searchParams.has("one"));// true
> // console.log(result.searchParams.has("one1"));// false
> 
> // delete:删除指定的属性
> // result.searchParams.delete("one");
> // console.log(result.searchParams.get("one"));
> 
> // set:设置,如果有属性four,那么为修改操作，如果没有，为添加
> // result.searchParams.set("four",4);
> // result.searchParams.set("four",5);
> // console.log(result.searchParams.get("four"));// 4
> // console.log(result)
> 
> // append:追加，如果之前有该属性，不会覆盖
> result.searchParams.append("five",5);
> result.searchParams.append("five",6);
> // console.log(result.searchParams.get("five"));
> console.log(result.searchParams.getAll("five"));// 得到的是一个数组
> console.log(result)
> ```
>
> * 注意：
>
>   ```js
>   const url = require("url");
>   const urlStr = "/a/b/c?one=1&two=2&three=3#my";
>   // 1、使用url模块
>   // console.log(url.parse(urlStr));
>   // Url {
>   //        protocol: null,
>   //         slashes: null,
>   //         auth: null,
>   //         host: null,
>   //         port: null,
>   //         hostname: null,
>   //         hash: '#my',
>   //         search: '?one=1&two=2&three=3',
>   //         query: 'one=1&two=2&three=3',
>   //         pathname: '/a/b/c',
>   //         path: '/a/b/c?one=1&two=2&three=3',
>   //         href: '/a/b/c?one=1&two=2&three=3#my'
>   // }
>   
>   // 2、使用new URL:是一个完整的URL,否则无法解析
>   console.log(new URL(urlStr));
>   ```

### 4.4、`querystring`

> `querystring`是`Node.js`当中的内置模块 。作用可以将`urlencoded`转为对象。
>
> ```js
> const querystring = require("querystring");
> const urlStr = "a=1&b=2&c=3";
> const query = querystring.parse(urlStr);
> console.log(query);// [Object: null prototype] { a: '1', b: '2', c: '3' }
> console.log(query.a);// 1
> console.log(query.b);// 2
> console.log(query.c);// 3
> 
> 
> // 模拟
> const myquerystirng = {
>  parse(str){
>      const arr = str.split("&");
>      let obj = {};
>      arr.forEach(item=>{
>          const arr2 = item.split("=");
>          obj[arr2[0]] = arr2[1]
>      })
>      return obj;
>  }
> }
> console.log(myquerystirng.parse(urlStr));// { a: '1', b: '2', c: '3' }
> ```

## 五、`http`协议

### 1.1、HTTP协议是什么

> - HTTP（hypertext transport protocol）协议也叫<font color=red>超文本传输协议</font>，是一种基于 `TCP/IP`(transmission control protocol internet protocol) 的应用层通信协议，这个协议详细规定了浏览器和万维网（`WWW:World Wide Web`）服务器之间互相通信的规则。 
>
> - HTTP就是一个通信规则，这个规则规定了客户端发送给服务器的报文格式，也规定了服务器发送给客户端的报文格式。实际我们要学习的就是这两种报文。
>   - 客户端发送给服务器的称为“请求报文”。
>   - 服务器发送给客户端的称为“响应报文”。 

### 1.2、HTTP工作原理

> HTTP协议定义Web客户端如何从Web服务器请求Web页面，以及服务器如何把Web页面传送给客户端。HTTP协议采用了请求/响应模型。客户端向服务器发送一个请求报文，请求报文包含请求的方法、URL、协议版本、请求头部和请求数据。服务器以一个状态行作为响应，响应的内容包括协议的版本、成功或者错误代码、服务器信息、响应头部和响应数据。
>
> 以下是 HTTP 请求/响应的步骤：
>
> 1. HTTP客户端连接到Web服务器端口
> 2. 发送HTTP请求
> 3. 服务器接受请求并返回HTTP响应
> 4. 释放连接
> 5. 客户端浏览器解析HTML内容
>
> ```shell
> # 当用户输入网址，按下回车发生了什么？
> # 1、DNS(domain name system)会将你的域名进行解析，解析为IP.
> # 2、连接服务端，发送请求。
> # 3、服务端接收请求报文当中的内容。
> # 4、服务端响应相对应的报文
> # 5、释放连接
> # 6、浏览器渲染响应报文当中的响应体内容。
> ```

### 1.2、请求报文（浏览器发起的报文）

HTTP 请求报文包括四部分

* 请求行
* 请求头
* 空行
* 请求体

```http
# 请求行
* GET https://www.baidu.com/ HTTP/1.1
	# 请求方式：GET
	# 请求地址：https://www.baidu.com/
	# 协议及版本号：HTTP/1.1
# 请求头
Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
	# 指定客户端（浏览器）可以接收的媒体类型（文档类型）。 q代表的是喜好度。默认为1
Accept-Encoding: gzip, deflate, br
	# 客户端可以接收的压缩格式。
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8
	# 接收的语言。中文与英文。
Cache-Control: no-cache
	# 不进行缓存。 http1.0
Connection: keep-alive
	# 保持连接
Cookie: BIDUPSID=A79696F4EEB4808A9FD2A
	# 实现前后端通讯的。
* Host: www.baidu.com
	# 主机名
Pragma: no-cache
	# 不进行缓存。 http1.1
sec-ch-ua: "Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"
	# 浏览器信息。中间层是不可以得到相对应的浏览器信息的。可以替代User-Agen
sec-ch-ua-mobile: ?0
	# 是否使用手机 ？0false ?1 true
Sec-Fetch-Dest: document
	# 请求的目标：document.
Sec-Fetch-Mode: navigate
	# 请求的模式：这次请求是通过页面切换发送的
Sec-Fetch-Site: none
	# 请求的site: none说明用户是通过刷新或直接输入网网址的形式打开的。
Sec-Fetch-User: ?1
	# ？1：表明是用户打开的页面。 ？0采用其它方式打开的页面。
Upgrade-Insecure-Requests: 1
	# 希望可以通过https的形式访问服务端所有的资源。
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36
	# 用户代理 。用户所使用的系统信息以及浏览器版本。
* Content-Type: application/x-www-form-urlencoded
	# 请求体的格式。
Content-Length: 4305
	# 请求体的长度。
# 空行
    # 说明请求头结束，空行后面是请求体
# 请求体
staticpage=https%3A%2F%2Fwww.baidu.com%2Fcache
```

### 1.3、响应报文 （服务端回应的报文）

HTTP 响应报文也包括四个部分

- 响应行
- 响应头
- 空行
- 响应体

```http
# 响应行
* HTTP/1.1 200 OK
	# 协议的类型以及版本号：HTTP/1.1
	# 状态码：200
	# 状态码的文字描述：ok
# 响应头
Bdpagetype: 1
	# 百度自定义的响应头
Bdqid: 0x9675dbdb00078275
	# 百度自定义的响应头
Cache-Control: private
	# 不允许中间代理商进行数据缓存。
Connection: keep-alive
	# 保持连接。 
* Content-Type: text/html;charset=utf-8
	# 响应体的文档类型（媒体类型）
Date: Mon, 28 Jun 2021 07:13:54 GMT
	# 响应的时间 
Expires: Mon, 28 Jun 2021 07:13:43 GMT
	# 过期响应时间 
Server: BWS/1.1
	# 响应的服务软件以及对应版本号。
Set-Cookie: BDSVRTM=0; path=/
	# 设置cookie,后面会当作重点讲
Set-Cookie: BD_HOME=1; path=/
	# 设置cookie,后面会当作重点讲
Set-Cookie: H_PS_PSSID=34132_33801
	# 设置cookie,后面会当作重点讲
Strict-Transport-Security: max-age=172800
	# 严格的传输模式，允许以https的形式
Traceid: 1624864434057368167410841813411609150069
	# 日志跟踪ID
X-Ua-Compatible: IE=Edge,chrome=1
	# 使用最新的浏览器版本
Content-Length: 304318
	# 响应体的长度
# 空行
	# 对响应头与响应体的一个分割。
# 响应体
<!DOCTYPE html><!--STATUS OK-->
```

### 1.4、Network面板介绍

#### 1.4.1、响应的内容

> ![1623594144983](D:\BaiduNetdiskDownload\03阶段张培跃\3阶段js高级&jquery&pc项目\Day20\课件\assets\1623594144983.png)

#### 1.4.2、Headers的内容

> ![1623594353970](D:\BaiduNetdiskDownload\03阶段张培跃\3阶段js高级&jquery&pc项目\Day20\课件\assets\1623594353970.png)

#### 1.4.3、查看报文

![网络控制台查看报文的方式](D:\BaiduNetdiskDownload\03阶段张培跃\3阶段js高级&jquery&pc项目\Day20\课件\assets\网络控制台查看报文的方式.png)

### 1.5、响应状态码

> 状态码由三位数字组成，第一位数字表示响应的类型，常用的状态码有五大类如下所示：
>
> * `1xx`：指示信息--表示请求已接收，继续处理。
>
> - `2xx`：成功--表示请求已被成功接收、理解、接受。
> - `3xx`：重定向--要完成请求必须进行更进一步的操作。
> - `4xx`：客户端错误--请求有语法错误或请求无法实现。
> - `5xx`：服务器端错误--服务器未能实现合法的请求。
>
> 常见状态代码、状态描述的说明如下。
>
> - 200 OK：客户端请求成功。
> - 400 Bad Request：客户端请求有语法错误，不能被服务器所理解。
> - 401 Unauthorized：请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用。
> - 403 Forbidden：服务器收到请求，但是拒绝提供服务。
> - 404 Not Found：请求资源不存在，举个例子：输入了错误的URL。
> - 500 Internal Server Error：服务器发生不可预期的错误。
> - 503 Server Unavailable：服务器当前不能处理客户端的请求，一段时间后可能恢复正常

### 1.6、GET 和 POST 的区别  

> GET 和 POST 是 HTTP 协议请求的两种方式
>
> * GET 主要用来获取数据, POST 主要用来提交数据
> * GET 带参数请求是将参数缀到 URL 之后, 在地址栏输入`url`访问网站就是 GET 请求, POST 带参数请求是将参数放到请求体中
> * POST 请求相对 GET 安全一些, 因为在浏览器中参数会暴露在地址栏.
> * GET 请求大小有限制, 一般为 `2k,` 而 POST 请求则没有大小限制
> * GET 类型报文请求方法为 GET , POST 类型报文请求方法为 POST

### 1.7、content-type

> `Content-Type`实体头部用于指示资源的MIME类型。
>
> 在响应中，Content-Type标头告诉客户端实际返回的内容的内容类型。
>
> MIME类型也叫媒体类型，是一种标准，用来表示文档、文件或字节流的性质和格式。
>
> 重要的MIME类型：
>
> | MIME类型                              | 含义                             |
> | ------------------------------------- | -------------------------------- |
> | **application/octet-stream**          | **应用程序文件**                 |
> | **text/plain**                        | **文本文件**                     |
> | **text/css**                          | **css文件**                      |
> | **text/html**                         | **html文件**                     |
> | **application/javascript**            | **js文件**                       |
> | **image/gif**                         | **GIF** **图片**                 |
> | **image/jpeg**                        | **JPEG/JPG** **图片**            |
> | **image/png**                         | **PNG图片**                      |
> | **image/svg+xml**                     | **SVG图片 (矢量图)**             |
> | **image/x-icon**                      | **icon图片**                     |
> | **application/json**                  | **json文件**                     |
> | **multipart/form-data**               | 上传文件                         |
> | **application/x-www-form-urlencoded** | Form表单格式                     |
> | **audio/webm**                        | **WebM** **音频文件格式**        |
> | **video/webm**                        | **WebM视频文件格式的音视频文件** |

## 六、WEB 服务

使用 `node.js` 创建 HTTP 服务器

```js
// cmd==> 输入 ipconfig ==>查看局域网IP 192.168.22.50
const http = require("http");// 引入http模块
// createServer:创建服务，是一个函数，该函数接收一个回调函数(当用户发送请求时，会执行该回调函数)。返回一个对象
const server = http.createServer(function(request,response){
    // request:请求对象（请求报文对象）
    // response:响应对象（响应报文对象）
    response.end("over");// 响应结束，传入的参数是响应体的内容。参数只能是字符串或buffer。
})
// 第一个参数为端口号，第二个参数为IP,第三个参数为回调函数（当服务创建完成之后会执行该回调。）
// 第二个参数与第三个参数可以省略。
server.listen(8090);
// 通过node运行该JS文件，即可开启服务
```

* 如果你通过cmd执行了以下JS，那么不允许再次执行。
* 如果你的程序修改了，那么需要重新启动你的站点服务。

```js
// 同一个站点，不允许执行多次。
const http = require("http");
const server = http.createServer(function (request,response) {
    response.end("over");
})
server.listen(8091);
```

* 关于设置listen

```js
const http = require("http");
const server = http.createServer(function (req,res) {
    // 回调函数：当用户发送请求后会执行该回调
    res.end("over404");
})
// 端口号最多65536.
// http默认端口号为80.(当用户发起请求时，省略端口号，默认访问的端口号为80)
// 第二个参数指定IP.(ip指的是服务器地址)
// 可以通过三种形式指向服务：
// 1、局域网IP(可以访问其它人以及自己)
// 2、127.0.0.1（代表的是服务器自身）
// 3、localhost（代表的是服务器自身）
// 第三个参数是一个回调函数，该回调函数会在服务创建完成之后执行。
// server.listen(80,"192.168.22.50",function () {
//     console.log("success");
// })

// 只省略IP
server.listen(80,function () {
    console.log("success");
})
```

#### 6.1、获取请求

```js
const http = require("http");
const fs = require("fs");
const qs = require("querystring");
const server = http.createServer((req,res)=>{
    // http://127.0.0.1/abc
    // console.log(req.url);// /abc

    // http://127.0.0.1/favicon.ico
    // console.log(req.url);// /favicon.ico
    if(req.url === "/favicon.ico"){
        // 设置响应头
        res.setHeader("content-type","image/jpg")
        fs.readFile(__dirname+"/images/10.jpg",function (err,result) {
            res.end(result);
        })
    }else{
        // 请求报文：请求行 请求头 空格 请求体
        // console.log("执行了回调函数");
        // http版本号
        console.log(req.httpVersion);// 1.1
        // url
        console.log(req.url);// /abc
        // 请求方式
        console.log(req.method);// GET
        // 获得请求头
        console.log(req.headers);
        let body = "";
        // 请求体. 接收请求体的数据
        req.on("data",function (thunk) {
            // 64k
            body+=thunk;
        })
        req.on("end",function () {
            // 接收完毕
            console.log(body);// body是接收的请求体的内容。是字符串
            // 将接收到的内容转换为对象
            console.log(qs.parse(body));// [Object: null prototype] { age: '1', number: '2' }
            console.log(qs.parse(body).age);// 1
            console.log(qs.parse(body).number);// 2

            const {age,number} = qs.parse(body);
            console.log(age,number);// 1 2
        })
        res.end("over");
    }

})
server.listen(80,function () {
    console.log("success");
})
```

#### 

