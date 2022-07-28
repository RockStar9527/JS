# Web Storage 

 >Web Storage是`HTML5`中新增的除Canvas元素以外，非常非常重要的功能！顾名思义，其就是在Web端存储数据的功能，当然这里的存储只是针对客户端本地而言的，不会被保存在服务器上

## 一、Web Storage的优缺点：

> ###### 优点：
>
> * 存储空间更大。在IE下每个独立存储空间为`10M`，其它浏览器存储空间略有不同，但可以肯定的是至少要比cookie要大很多。
> * 存储内容不会与服务器发生任何交互，数据仅仅单纯地存储在本地。不用担心对服务器数据的影响！
> * 独立的存储空间，每个域都有自己独立的存储空间，各个存储空间又完全是独立的，所以不会对数据造成混乱。
>
> ###### 缺点：
>
> * 存储在本地的数据未加密且永远不会过期，容易造成隐私泄漏！
>
> * 存储的数据类型只能是字符串！
>
>   查看storage:控制台===》application==>storage

## 二、`localStorage`与`sessionStorage`

> * `localStorage`与`sessionStorage`是Web Storage提供的两种存储在客户端的方法。
>   * `localStorage`：没有时间限制的存储方式。存储的时间可以是一天，二天，几周或几十年！关闭浏览器数据不会随着消失，当再次打开浏览器时，数据依然可以访问！也就是说除非你主动删除数据，否则数据是永远不会过期的。
>   * `sessionStorage`：保存在session对象当中。用来保存的时间为用户与浏览器的会话时间。即从浏览页面到关闭浏览器为一个会话时间。关闭浏览器，所有的 session数据也会消失！
>
> * `localStorage`是永久保存数据，`sessionStorage`是暂时保存数据，这是两者之间的重要区别！

### 2.1、`sessionStorage`设置和获取数据:只有在同一进程当中才可以共享内容。

```js
// 为sessionStorage设置数据
window.sessionStorage.userNames = "sessionUserName";
sessionStorage.setItem("ages",13);
sessionStorage["hobbys"]="学习"

// 读取sessionStorage
console.log(sessionStorage.getItem("userNames"))
console.log(sessionStorage.getItem("ages"))
console.log(sessionStorage.getItem("hobbys"))

console.log(sessionStorage["userNames"])
console.log(sessionStorage["ages"])
console.log(sessionStorage["hobbys"])

console.log(sessionStorage.userNames)
console.log(sessionStorage.ages)
console.log(sessionStorage.hobbys)

// length:长度
console.log(sessionStorage.length);
// 遍历 
for(let i = 0;i<sessionStorage.length;i++){
    console.log(sessionStorage.key(i),sessionStorage.getItem(sessionStorage.key(i)))
}
```

### 2.2、`localStorage`设置和获取数据

```js
// 为localStorage设置数据
window.localStorage.userName = "zhangsan";
localStorage.setItem("age",12);
localStorage["hobby"] = "象棋";

// 读取数据
console.log(localStorage.getItem("userName"))
console.log(localStorage.getItem("age"))
console.log(localStorage.getItem("hobby"))

console.log(localStorage.userName)
console.log(localStorage.age)
console.log(localStorage.hobby)

console.log(localStorage["userName"])
console.log(localStorage["age"])
console.log(localStorage["hobby"])

 // key(index)
console.log(localStorage.key(0))
console.log(localStorage.key(1))
console.log(localStorage.key(2))

// length:长度
console.log(localStorage.length)
// 遍历
for(let i=0;i<localStorage.length;i++){
    console.log(localStorage.key(i),localStorage.getItem(localStorage.key(i)));
}

// 根据KEY进行删除
// localStorage.removeItem("userName");

// 删除所有
localStorage.clear();
```

### 2.3、Storage是window对象的子对象

```js
window.localStorage
window.sessionStorage
```

### 2.4、length

> `localStorage.length`或`sessionStorage.length`为相应的数据条数

### 2.5、key

> 接受一个数值 n 作为参数，返回存储对象第 n 个数据项的键名 

### 2.6、`removeItem`

> `removeItem("key")`:删除指定的key

### 2.7、clear

> clear()：清除所有数据

### 2.8、storage事件

>  当存储区域的内容发生改变（包括增加、修改、删除数据）时，就会自动触发 storage 事件 