# `ES6`

## 一、`ES6`相关介绍

> <font color="red">  ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等等，而 ES2015 则是正式名称，特指该年发布的正式版本的语言标准  </font>

### 1.2、学前必知词汇

> <font color="red">语法糖：又称糖衣语法，指不改变语言的本质功能，只是使编程变的更加简洁。</font>而本课程后续所学习的很多`ES6`的新特性大多也都是由一粒粒语法糖所构成，所以`ES6`的一些新特性并不是真的“新”，只是试图简化语法而已。简言之：`ES6`是一大盒语法糖，解决了以前`ES5`很多难受的地方。

> <font color="red">`Babel`</font>：`Babel`是一个广泛使用的`ES6`转码器，可以将`ES6`代码转为`ES5`代码，从而在现有环境执行。这意味着，你可以用`ES6`的方式编写程序，又不用担心现有环境是否支持。

### 1.3、为什么要学习`ES6`

>* `ES5`语言先天不足，通过学习`ES6`可以将其很多丑陋的部分进行隐藏。
>* 包含了很多超棒的新特性，可以简化很多复杂的操作，从而大大提高开发效率。
>* 为后面学习`vue`、`reac`t以及小程序做好充足准备。
>* <font color="red">目前大部分公司的项目都在使用`ES6`，它是前端发展的趋势，就业必备技能之一。</font>

## 二、关键字扩展

### 2.1、let和块级作用域

#### 2.1.1、函数作用域

>  在`ES5`中，`JS`的作用域分为全局作用域和局部作用域。通常是用函数区分的，函数内部属于局部作用域。 
>
>  `ES5` 只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景 
>
>  - 内层变量可能会覆盖外层变量。
>
>    ```js
>    var a = 1;
>    if(a === 1){
>        var a = 2;
>    }
>    console.log(a);// 2
>    ```
>
>  - 用来计数的循环变量泄露为全局变量。
>
>    ```js
>    for(var i=0;i<=100;i++){
>    	// 逻辑代码
>    }
>    console.log(i);//101
>    ```

#### 2.1.2、块级作用域

> - 在`ES6`中新增了块级作用域的概念，使用{}扩起来的区域叫做块级作用域
>
>   ```js
>   // es5:
>   if(1===1){
>       var a = 1;
>   }
>   console.log(a);// 1
>   ```
>
> - let关键字声明变量，实际上为 JavaScript 新增了块级作用域。
>
>   ```js
>   // es6
>   if(1===1){
>       let a = 1;
>       console.log(a);// 1
>   }
>   console.log(a);// ReferenceError: a is not defined
>   ```
>
> - 块作用域由 { } 包括，if语句和for语句里面的{ }也属于块作用域。
>
>   ```js
>   {
>   	// 块级
>   }
>   
>   if(1===1){
>       // 块级
>   }
>   ```
>
> - 在块内使用let声明的变量，只会在当前的块内有效。

#### 2.1.3、let关键字

> `ES6`新增了`let`命令，用来声明变量。它的用法类似于`var`，但是所声明的变量，只在`let`命令所在的代码块内有效，也就是增加了块级作用域。
>
> ```js
> // es5 声明变量
> {
>  var a = 1;
> }
> console.log(a);// 1
> // es6 声明变量
> {
> let a = 1;  
> }
> console.log(a);// 异常
> ```
>
> - 使用块级作用域（let定义的变量属于块级作用域） 防止全局变量污染
>
>   ```js
>   // 全局变量污染:块级当中的userName,污染了全局当中userName.
>   var userName = "zhangsan";
>   {
>       var userName = "lisi";
>   }
>   console.log(userName);// lisi
>   // 如果使用let 定义变量，可以避免该问题的发生
>   var userName = "zhangsan";
>   {
>       let userName = "lisi";
>   }
>   console.log(userName);// zhangsan
>   ```
>
>   - 块级作用域可以任意嵌套
>
>   ```js
>   {
>       {
>           {
>               let userName = "wangwu";
>               console.log(userName);
>           }
>           console.log(userName);// 
>       }
>   }
>   ```
>
>    - for循环的计数器，就很合适使用let命令
>
>      ```js
>      // let声明的变量，并没有作为全局的变量
>      for(let i=0;i<3;i++){
>          setTimeout(function () {
>              console.log(i);// 0 1 2
>          })
>      }
>      // 上方代码，可以理解为如下运行：
>      (function () {
>          var i = 0;
>          setTimeout(function () {
>              console.log(i);// 0
>          })
>      })();
>      
>      (function () {
>          var i = 1;
>          setTimeout(function () {
>              console.log(i);// 0
>          })
>      })();
>      
>      (function () {
>          var i = 2;
>          setTimeout(function () {
>              console.log(i);// 0
>          })
>      })();
>      ```
>
>   - 变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量
>
>     > 你可能会问，如果每一轮循环的变量i都是重新声明的，那它怎么知道上一轮循环的值，从而计算出本轮循环的值？这是因为 JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量i时，就在上一轮循环的基础上进行计算
>
> - for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域
>
>   ```js
>   // for(let i = 1;i<3;i++){
>   //     setTimeout(function(){
>   //         console.log(i);
>   //     })
>   // }
>       
>   {
>       let i = 1;
>       {
>           (function () {
>               console.log(i);
>           })();
>       }
>   }
>   {
>       let i = 2;
>       {
>           (function () {
>               console.log(i);
>           })();
>       }
>   }
>   ```
>
>   - 练习
>
> ```js
> //练习1：
> var a = [];
> for (var i = 0; i < 10; i++) {
>    a[i] = function () {
>        console.log(i);
>    };
> }
> a[6]();// 10
> 
> 
> // 练习2:
> var a = [];
> for (let i = 0; i < 10; i++) {
>   a[i] = function () {
>       console.log(i);
>   };
> }
> a[6]();//6
> 
> ```

#### 2.1.4、let关键字特点

> * 没有声明提升
>
>   ```js
>   // es5
>   console.log(userName);// undefined
>   var userName = "zhangsan";
>   // es6:变量必须要先定义再使用
>   console.log(sex);// ReferenceError: Cannot access 'sex' before initialization
>   let sex = "男";
>   ```
>
> * 不允许重复声明
>
> > let 只能声明一次而var 可以声明多次。
>
> ```js
> // es5
> var userName = "zhangsan";
> var userName = "lisi";
> console.log(userName);// lisi
> 
> // es6
> let age = 12;
> let age = 13;
> console.log(age);//  SyntaxError: Identifier 'age' has already been declared
> ```
>
> * 块级作用域的出现，实际上使得获得广泛应用的匿名立即执行函数表达式（匿名 IIFE）不再必要了
>
> > let 是在代码块内有效，var 是在全局范围内有效
>
> ```js
> // 通过立即执行函数，让其拥有作用域
> (function (win) {
>      var a = 12;
> })(window)
> console.log(a);// ReferenceError: a is not defined
> 
> // 使用块级作用域
> {
>     let a = 12;
> }
> console.log(a);// ReferenceError: a is not defined
> ```
>
> * 不影响作用域链
>
> > let与var都拥有作用域链。
> >
> > 作用域链： 如果在当前作用域中没有查到值，就会向上级作用域去查，直到查到全局作用域，这么一个查找过程形成的链条就叫做作用域链。 
>
> ```js
> // es5
> // var a = 1;
> // function fn() {
> //     var a = 2;
> //     function _run() {
> //         console.log(a);//
> //     }
> //     _run();
> // }
> // fn();
> 
> // es6
> let a = 1;
> function fn() {
>     let a = 2;
>     function _run() {
>     	console.log(a);//
>     }
>     _run();
> }
> fn();
> ```
>
> * 不再是顶层全局对象的属性
>
> >  使用var定义的全局变量相当于直接挂载在window对象上， 而let不会。
>
> ```js
> // es5
> var userName = "zhangsan";
> console.log(userName);// zhangsan
> console.log(window.userName);// zhangsan
> console.log(this.userName);// zhangsan
> console.log(this === window);// true
> 
> // es6
> let age = 12;
> console.log(age);// 12
> console.log(window.age);// undefined
> console.log(this.age);// undefined
> ```
>
> * 暂时性死区:通过let或const定义变量之前，无法调用该变量。
>
> > 暂时性死区即：只要一进入当前作用域，所要使用的变量就已经存在，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。 
> >
> > ```js
> > console.log(userName);
> > function fn(){
> >  console.log(userName);
> > }
> > let userName = "zhangsan";
> > console.log(userName);
> > fn();
> > ```

### 2.2、`const` 关键字

> 常量：不会变化的数据，有些时候有的数据是不允许修改的，所以需要定义常量。
>
> * 声明一定要赋初始值:一旦声明变量，就必须立即初始化，不能留到以后赋值
>
>   >  `const` 声明一个只读变量，声明之后不允许改变。意味着，一旦声明必须初始化，否则会报错。
>
> >```js
> >const a = 1;// 在使用const 关键字声明常量必须要赋初始值
> >console.log(a);// 可以读取
> >a = 2;// typeError: Assignment to constant variable.
> >```
>
> * 值不允许修改
>
>   ```js
>   const a = 100;
>   a = 1000;// 值不允许修改。会报错
>   ```
>
>   > <font color="red">const 其实保证的不是变量的值不变，而是保证变量指向的内存地址不允许改动。所以 使用 const 定义的对象或者数组，其实是可变的。 </font>
>   >
>   > ```js
>   > const obj = {a:1};
>   > obj.a = 100;// 因为没有改变obj的值所以不会报异常
>   > obj = {a:1};// 因为改变了obj的值，会报异常
>   > ```
>
>
>   - `const`只在声明所在的块级作用域内有效。（与let相同）
>
>     ```js
>     // const 也是有块级作用域的
>     {
>         const a = 1;
>     }
>     console.log(a);// 异常
>     ```
>
>   - `const`命令声明的常量也是不提升
>
>     ```js
>     // ReferenceError: Cannot access 'userName' before initialization
>     console.log(userName);
>     const userName = "zhangsan";
>     console.log(userName);
>     ```
>
> - `const`声明的常量，也与`let`一样不可重复声明
>
>   ```js
>   // SyntaxError: Identifier 'a' has already been declared
>   const a = 1;
>   const a = 2;
>   ```
>
> - let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。也就是说，从 ES6 开始，全局变量将逐步与顶层对象的属性脱钩
>
>   ```js
>   const userName = "zhangsan";
>   console.log(window.userName);// undefined
>   ```
>
>   > <font color="red">const使用的两点建议：</font>
>   >
>   > <font color="red">1、被多次使用且不允许更改的数据建议通过const定义;</font>
>   >
>   > <font color="red">2、项目全局常量建议大写，单词之间用-分隔；</font>
>   >
>   > ```js
>   > // src:开发环境
>   > //    config.js :配置文件，一般存储的是全局常量
>   > const SITE_COLOR = "red";
>   > ```

### 2.3 、块级作用域的函数声明

> 函数声明一般常用的是两种，一种是function声明，一种是函数表达式。
>
> ```js
> // function声明
> function run(){
> 
> }
> // 函数表达式
> var run = function(){
> 
> }
> ```
>
> 函数能不能在块级作用域之中声明？这是一个相当令人混淆的问题。
>
> - ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。
>
>   ```js
>   // 在顶层作用域声明函数
>   function fn() {
>       // 在函数作用域之中声明函数
>       function _run() {
>   
>       }
>   }
>   // 块级作用域中声明（尽量避免）
>   {
>       function my() {
>           console.log("1")
>       }
>   }
>   my();// my is not defined
>   ```
>
> - ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。ES6 规定，块级作用域之中，函数声明语句的行为类似于`let`，在块级作用域之外不可引用。
>
>   ```js
>   {
>       function my(){
>   
>       }
>       // 上面定义的MY函数相当于：
>       let my = function(){
>   
>       }
>   }
>   ```
>
> - ES6 规定，浏览器的实现可以不遵守上面的规定，有自己的行为方式
>
> - 考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。
>
>   ```js
>   // 建议，不要进行如下的编码:不要在块级作用域当中通过function定义函数。
>   if(a === 1){
>       function fn(){
>       
>       }
>       fn();
>   }
>       
>   // 如果要在块级当中声明函数，建议：
>   if(a === 1){
>       const fn = function(){
>       
>       }
>       fn();
>   }
>   ```

## 三、变量的解构赋值

```js
var a = 1;
let b = 2;
const c = 3;
```

### 3.1、什么是变量的解构赋值：解构（分解结构）

> `ES`6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构。
>
> ```js
> // 数组  结构
> let arr = [1,2,3];
> // 对象
> let obj = {a:1,b:2}
> ```
>
> 解构赋值本质就是赋值，把结构解散重构然后赋值 其实是一种模式的匹配，关键要掌握一一对应关系。
>
> 解构赋值是对赋值运算符=的一种扩展。
>
> 在代码书写上简洁且易读，语义更加清晰明了；也方便了复杂对象中数据字段获取。

### 3.2、引入

> >  在`ES5`中，开发者们为了从对象和数组中获取特定数据并赋值给变量，编写了许多看起来同质化的代码 
> >
> >  ```js
> >  function tag(options){
> >    // 以下代码多次用到options.index.
> >    // console.log(options.index);// 1
> >    // options.index ++;
> >    // console.log(options.index);
> >  
> >    // 由于每次都要书写options,一般可以将options.index,赋值给一个变量
> >    // let index = options.index;
> >    // console.log(index);
> >    // index++;
> >    // console.log(index);
> >  
> >    // 如果参数比较多，我需要一一赋值(同质化的代码 )
> >    // let index = options.index;
> >    // let ele = options.ele;
> >    // let colorArr = options.colorArr;
> >  
> >    // 通过对象解构赋值：
> >    let {index,ele,colorArr} = options;
> >  
> >  }
> >  tag({
> >    colorArr:["red","green","blue"],
> >    index:1,
> >    ele:"#app"
> >  });
> >  ```

### 3.3、解构赋值语法

> 解构的目标 = 解构源;
>
> 解构目标：定义的常量或变量
>
> 解构源：待解构的数组或对象

### 3.4、对象解构赋值

> *  对象解构赋值基本语法
>
> > 对象的语法形式是在一个赋值操作符左边放置一个对象字面量 
> >
> > ```js
> > // 声明了二个变量a与b,a的值为右侧对象a的属性值。b的值是右侧对象b的属性值
> > let {a,b} = {a:1,b:2}
> > console.log(a,b);//1,2
> > 
> > // 先声明对象然后再解构
> > let obj = {
> >  userName:"zhangsan",
> >  age:12
> > }
> > let {userName,age} = obj;
> > ```
>
> * 顺序不用一一对应
>
> ```js
> let {userName,age} = {age:12,userName:"laoli"};
> console.log(userName,age);
> 
> let {a,b,c,d,e,f} = {f:1,d:3,a:5,b:4,c:9,e:100};
> console.log(a,b,c,d,e,f);// 5 4 9 3 100 1
> ```
>
> 
