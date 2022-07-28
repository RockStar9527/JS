跨域

1.怎样的行为属于跨域（发生在ajax中）

​    协议、域名、端口号 有一个不同就属于跨域

例如：http://www.example.com/dir/page.html

协议是：http://

域名是：www.example.com

端口是：`80`（默认端口可以省略）

它的同源情况如下。

- `http://www.example.com/dir2/other.html`：同源
- `http://example.com/dir/other.html`：不同源（域名不同）
- `http://v2.www.example.com/dir/other.html`：不同源（域名不同）
- `http://www.example.com:81/dir/other.html`：不同源（端口不同）

题1：关于Ajax跨域描述正确的是（CD）

· A、http://www.example.com/dir/page.html和http://www2.example.com/dir/page.html同源

· B、跨域是服务器决定的，和浏览器没有关系

· C、JSONP的本质是使用script 标签发起请求

· D、http://www.baidu.com 和https://www.baidu.com不同源

2.怎样解决跨域

   ```html
1.CORS
  在服务端进行设置
添加一个响应头，设置允许的域名

代码：res.set("Access-Control-Allow-Origin","http://192.168.22.50")

Access-Control-Allow-Origin: http://localhost:8080   # 允许前面页面的域名是http://localhost:8080，才能跨域

代码：res.set("Access-Control-Allow-Origin","*");
Access-Control-Allow-Origin：*  # 允许所有的域名都可以跨域

      
2.JSONP（JSONP就是利用script标签的跨域能力来发送请求的。）

     script 会把响应到的内容作为 js 代码执行

实现基础：
	利用 script 标签也可以发送请求，天然支持跨域， script 会把响应到的内容作为 js 代码执行

实现步骤：（前端）
	1. 创建 script 标签
	2. 指定 script 标签的 src 属性值，src 的属性值就是请求地址， 把函数名通过url中的查询字符串传给后端
	3. 把 script 标签添加到 body 中
	4. 再把 script 标签从 body 中移除
	5. 定义获取数据的函数，该函数会被后端响应的内容调用，把数据传进来
	注意： 在 script 添加到 body 中的瞬间，发起请求，接收响应，调用了函数
	
	
实现步骤：（后端）
	1. 从 url 中的查询字符串里取出函数名
	2. 响应体内容是 js 代码，调用函数的js代码，把数据变为json格式作为函数的参数
	3. 做出响应
	
jsonp 缺点:只支持 GET 请求
(前端代码)
<button id="btn">请求数据</button>
<script>
        // 获取按钮元素
        var btn = document.querySelector('#btn');
        // 点击按钮 发起jsonp的请求
        btn.onclick = function(){
            // 创建 script 标签
            var script = document.createElement('script');
            // 指定 script 的src属性， 请求地址
            script.src = 'http://127.0.0.1:8080/product-data?cb=getData';
            // 把 script 标签添加到body 中
            document.body.appendChild(script);
            // 把 script 标签从body 中删除
            document.body.removeChild(script);
        }
        function getData(data){
            // 接收数据
            console.log(data);
        }
    </script>
（后端代码）
const express = require('express');
const fs = require('fs');
const urlTool = require('url');

// 创建 express 实例
const app = express();

app.get('/product', (req, res) => {
    fs.readFile('./02-jsonp解决跨域.html', (err, data) => {
        res.end(data);
    });
});
app.get('/product-data', (req, res) => {
        // 定义数据
        let users = [
            {name:'安妮', age:90, address:'上海'},
            {name:'安妮1', age:90, address:'上海'},
            {name:'安妮2', age:90, address:'上海'},
            {name:'安妮3', age:90, address:'上海'},
            {name:'安妮4', age:90, address:'上海'}
        ];

        // 从 url 中得到函数名
        let method = urlTool.parse(req.url, true).query.cb;
        // urlTool.parse(req.url, true)第二个参数设置为true,query属性就是一个对象，方便对接收的数据进行处理。req.url，query都是对象，cb为query的属性

        // 定义响应体 js 代码
        let body = `${method}(${JSON.stringify(users)})`;
        // body其实为  getData(data) 函数调用

        res.end(body)
});
// 开启服务
app.listen(8080, () => {
    console.log('HTTP服务启动成功，端口号 8080');
})


3.代理服务器

  

   ```

