#### 6.2、设置响应

```js
const http = require("http");
const url = require("url");
// 解决问题：中文乱码
http.createServer(function (req,res) {
    const pathname = url.parse(req.url).pathname.toLowerCase();
    if(pathname === "/"){
        // 当用户直接输入http://127.0.0.1:8081 时，响应的内容为 home
        res.end("home");
    }else if(pathname === "/user"){
        // 当用户直接输入http://127.0.0.1:8081/user 时，响应的内容为 user
        res.end("user");
    }else if(pathname === "/my"){
        // 当用户直接输入http://127.0.0.1:8081/my 时，响应的内容为 个人中心
        /*******************************1********************************************/
        // // 响应行，响应头，响应体
        //
        // // 1、更改状态码
        // res.statusCode = 202;
        //
        // // 2、更改状态码描述
        // res.statusMessage = "my love me"
        //
        // // 3、响应头:第一个参数是响应头的名字，第二个参数是响应头的值
        // // 响应体的类型为text/html：是一个HTML文件 ，浏览器会识别里面的标签。
        // // res.setHeader("content-type","text/html;charset=utf-8;");
        // // 响应体的类型为text/plain:是一个文档，文档中拥有HTML标签的话，不会被 浏览器识别
        // res.setHeader("content-type","text/plain;charset=utf-8;");
        // // 4、响应体
        // res.end("<h1>个人中心</h1>");

        /******************************2***********************************************/
        // 第一个参数设置状态码，第二个参数设置状态码描述，第三个参数设置响应头。
        res.writeHead(202,"i love you",{
            "content-type":"text/html;charset=utf-8"
        })
        // 响应体：要将响应体的内容设置为<h1>个人中心</h1>
        res.write("<h1>个人中心</h1>");// write 可以设置响应的内容。而不会代表响应结束。
        res.write("123");// write可以在响应结束前执行多次。并将参数都会放置到响应体。 而end只有一次。
        res.end();//end响应结束，结束之后后面再次响应不会有作用。
        res.end("over");//
    }else{
        // 当用户输入的地址不满足上面的三个条件时，响应的内容为404
        res.end("404");
    }
    // console.log(req.url);
    // res.end();
}).listen(8081,function () {
    console.log("success")
})
```

## 六、json数据格式

> JSON: **J**ava**S**cript **O**bject **N**otation(JavaScript 对象表示法) 
>
> JSON 是存储和交换文本信息的语法，类似 XML。
>
> JSON 比 XML 更小、更快，更易解析。
>
> json与js对象本质的区别：JSON是数据格式，JS对象是一种数据类型。
>
> json数据用途：作为前后端通过的数据格式。
>
> ```js
> // 普通JS对象
> const obj = {a:1,b:21};
> // JSON字符串
> const jsonStr = '{"a":1,"b":2}';
> // JSON对象
> const jsonObj = {"a":1,"b":2}
> 
> // 与对象相比不同：
> // 1、json数据格式可以用{}，也可以使用[],属性名必须要使用双引号。
> // 2、最后一个属性值的末尾不允许写逗号。
> // 3、属性值不允许写undefined,NaN,不支持函数,表达式
> // 4、json数据常用于前后端的通讯。前端可以发送JSON,也可以接收服务端响应的JSON数据。
> 
> // JSON字符串与JS对象之间的转换
> let obj = {
>  userName:"zhangsan",
>  age:12
> }
> // 将JS对象转为JSON字符串. 场景：前端要发送数据
> console.log(JSON.stringify(obj));// {"userName":"zhangsan","age":12}
> // 将JSON字符串转为对象。 场景：前端接收服务端返回的数据
> let str = '{"userName":"zhangsan","age":12}';
> console.log(JSON.parse(str));// { userName: 'zhangsan', age: 12 }
> ```

## 七、模块化（重点）

### 7.1、模块化介绍

> Node 应用由模块组成，采用 CommonJS 模块规范。每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类（class），都是私有的，对其他文件不可见。在服务器端，模块的加载是运行时同步加载的； 

### 7.2、模块化特点

> - 所有代码都运行在模块作用域，不会污染全局作用域。
> - 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。
> - 模块加载的顺序，按照其在代码中出现的顺序。

### 7.3、模块化基本语法

> - 暴露模块：`module.exports = value`或`exports.xxx = value`
> - 引入模块：`require(xxx)`,如果是第三方模块，xxx为模块名；如果是自定义模块，xxx为模块文件路径.

### 7.4、模块化的具体使用

* 基本使用

  ```js
  // 导出： 导出的内容其实是module.exports的值,初始值是{}
  // mo-->my.js
  let userName = "zhangsan";
  // 通过module.exports进行暴露（导出）数据
  module.exports.userName = userName;
  module.exports.age = 12;
  // mo->one.js
  module.exports = 2;
  
  // 引入
  // index.js
  const mo = require("./mo/my.js");// 写模块地址
  console.log(mo);// { userName: 'zhangsan', age: 12 }
  
  const one = require("./mo/one.js");
  console.log(one);// 2
  ```

* 可以先定义函数，变量等，再导出。如果导出的是对象，可以通过解构赋值的形式来接收。

  ```js
  // 导出： mo1->index.js
  let userName = "zhangsan";
  let age = 12;
  let my = function () {
  }
  let bol = true;
  module.exports = {
      userName,
      age,
      my,
      bol
  }
  
  // 引入：index.js
  const mo1 = require("./mo1/index.js");
  console.log(mo1);// { userName: 'zhangsan', age: 12, my: [Function: my], bol: true }
  const {userName,age,my,bol} = require("./mo1/index.js");
  console.log(userName,age,my,bol);// zhangsan 12 [Function: my] true
  ```

* 直接导出。

```js
// 导出（暴露）：mo2->index.js
// 导出的是一个对象，将数据直接作为对象的属性
// module.exports = {
//     a:1,
//     b:2,
//     c:3
// }

// 由于module.exports本身就是一个对象，所以可以直接增加属性
module.exports.a = 1;
module.exports.b = 2;
module.exports.c = 3;

// 引入（依赖）：
const mo2 = require("./mo2/index.js");
console.log(mo2);// { a: 1, b: 2, c: 3 }
const {a,b,c}  = require("./mo2/index.js");
console.log(a,b,c);// 1 2 3
```

* `json`文件也可以通过require进行引入。引入的`JSON`直接转换为了对象。

  ```js
  // 导出： mo3->my.json
  {
    "userName": "zhangsan",
    "age": 12
  }
  
  // 引入
  // 引入json文件
  const my = require("./mo3/my.json");
  console.log(typeof my);// object
  console.log(my);// { userName: 'zhangsan', age: 12 }
  ```

* 扩展名`.js` `.json` 可以省略

  ```js
  // 导出：
  // mo4->home.js
  module.exports = {
      str:"home.js"
  }
  // mo4->my.json
  {
    "str": "my.json"
  }
  
  // 引入：
  // 扩展名可以省略
  const home = require("./mo4/home");
  const my = require("./mo4/my");
  console.log(home);// { str: 'home.js' }
  console.log(my);// { str: 'my.json' }
  ```

* 如果`JS`文件与`JSON`文件同名，`JS`文件优先级高于`JSON`文件

  ```js
  // 导出：
  // mo4->home.js
  module.exports = {
      str:"home.js"
  }
  // mo4->home.js
  {
    "str": "home.json"
  }
  
  // 引入
  const home = require("./mo4/home");
  console.log(home);// { str: 'home.js' }
  ```

* 如果文件名字为index那么文件名可以省略。 默认调用index.js

  ```js
  // 导出： mo5->index.js
  module.exports.str = "mo5->index.js";
  
  // 引入：
  // index.js 可以省略
  const index = require("./mo5");
  console.log(index);// { str: 'mo5->index.js' }
  ```

* 可以将默认的`index.js`更改为其它文件。

  ```js
  // 导出：mo6->home.js
  module.exports.str = "mo6->home.js"
  
  // 在mo6->package.json。   home.js：将默认文件index.js更改为home.js
  {
    "main":"home.js"
  }
  
  // 引入：
  // 更改默认文件：index.js---->home.js
  const index = require("./mo6");
  console.log(index);// { str: 'mo6->home.js' }
  ```

* 关于引入模块的地址前缀。都是相对的，相对的是当前JS所在的目录与NODE运行目录无关

  ```shell
  // 通过node执行上面的示例：
  D:\210415\Lession21\code\12-模块化>node index.js
  { str: 'mo6->home.js' }
  
  D:\210415\Lession21\code\12-模块化>cd..
  
  D:\210415\Lession21\code>node 12-模块化/index.js
  { str: 'mo6->home.js' }
  ```

* 关于省略文件名的两层含义

```js
// 导出：
// 12-模块化->mo7.js
module.exports.str = "12-模块化->mo7.js"
// 12-模块化->mo7>index.js
module.exports.str = "12-模块化->mo7>index.js"

// 导入：
// 1、引入mo7文件夹内的index.js  2、引入当前目录当中的mo7.js
const mo7 = require("./mo7");
console.log(mo7);// { str: '12-模块化->mo7.js' }
```

* 如果省略前缀，会去名字为node_modules文件夹内查找文件

  ```js
  // 导出：
  // 12-模块化->node_modules->mo8.js
  module.exports.str = "12-模块化->node_modules->mo8.js"
  // 12-模块化->node_modules->mo8>index.js
  module.exports.str = "12-模块化->node_modules->mo8>index.js"
  
  // 引入
  // 省略前缀,会去名字为node_modules文件夹内查找文件. 如果当前目录中没有node_modules,会去上一级查找是否有node_modules。
  // 如果还没有，一直向上查找，找不到报错。
  // 1、去node_modules当中查找mo8目录下的index.js 2、去node_modules当中查找名字为mo8.js(优先级高)
  const mo8 = require("mo8");
  console.log(mo8);// { str: '12-模块化->node_modules->mo88.js' }
  ```

* 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。

  ```js
  // 导出
  // mo9->index.js
  console.log(11111111);// 
  module.exports.str = "mo9->index.js"
  
  
  // 引入:引入了两次，mo9->index.js 只执行一次。
  const mo9 = require("./mo9");
  const mo11 = require("./mo9");
  console.log(mo9,mo11);
  ```

  

