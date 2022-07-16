### 3.4、对象解构赋值

> *  对象解构赋值基本语法
>
> > 对象的语法形式是在一个赋值操作符左边放置一个对象字面量 
> >
> > ```js
> > // 声明了二个变量a与b,a的值为右侧对象a的属性值。b的值是右侧对象b的属性值
> > let {a,b} = {a:1,b:2}
> > console.log(a,b);
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
> *   嵌套对象解构  
>
> >  解构嵌套对象仍然与对象字面量的语法相似，可以将对象拆解以获取想要的信息 
> >
> >  ```js
> >  let obj = {
> >    userName:"wangwu",
> >    hobby:{
> >        one:"学习",
> >        two:"读书"
> >    }
> >  }
> >  let {userName,hobby:{one,two}} = obj;
> >  console.log(userName,one,two);// wangwu 学习 读书
> >  ```
>
> * 可忽略
>
> > 解构目标可以忽略解构源的属性
> >
> > ```js
> > const {a,b,c} = {a:1,b:2,c:3,d:4};
> > console.log(a,b,c);// 1 2 3
> > ```
>
> * 剩余运算符 
>
> > ```js
> > const {a,b,c,...my} = {a:1,d:4,e:5,f:6,b:2,c:3};
> > console.log(a,b,c,my)// 1 2 3 {d: 4, e: 5, f: 6}
> > ```
>
> *  不完全解构：变量名称在对象中不存在 
>
> > 使用解构赋值表达式时，如果指定的变量名称在对象中不存在，那么这个变量会被赋值为undefined 
> >
> > ```js
> > const {a,b,c,d,e} = {a:1,b:2,c:3};
> > console.log(a,b,c,d,e);// 1 2 3 undefined undefined
> > ```
>
> *  解构默认值 
>
> > 当指定的属性不存在时，可以定义一个默认值：在属性名称后添加一个等号(=)和相应的默认值即可 
> >
> > ```js
> > {
> >  const {a,b,c,d=1,e=9} = {a:1,b:2,c:3,e:100};
> >  console.log(a,b,c,d,e);// 1 2 3 1 100
> > }
> > {
> >  // 赋值是自左向右执行的
> >  const {a,b,c,d=1,e=d} = {a:1,b:2,c:3};
> >  console.log(a,b,c,d,e);// 1 2 3 1 1
> > }
> > ```
>
> *  为非同名局部变量赋值 ，可避免命名冲突
>
> >  如果希望使用不同命名的局部变量来存储对象属性的值，`ES6`中的一个扩展语法可以满足需求，这个语法与完整的对象字面量属性初始化程序的很像。
> >
> >  ```JS
> >  const age = 100;
> >  const userName = "laowang";
> >  // 左侧的解析目标：将解构源当中的age属性值赋值给常量myAge,
> >  // 将解构源当中的userName属性值赋值给常量myUserName
> >  const {age:myAge,userName:myUserName} = {age:12,userName:"laoli"};
> >  console.log(myUserName,myAge);
> >  
> >  
> >  const {a,b,c,d,e:age=100} = {a:1,b:2,c:3,d:4}
> >  console.log(age);// 100
> >  ```
>
> * 函数传参数
>
> > 解构赋值表达式的值与表达式右侧(也就是=右侧)的值相等，如此一来，在任何可以使用值的地方都可以使用解构赋值表达式 
> >
> > ```js
> > // 对象解构赋值
> > const {a,b,c} = {a:1,b:2,c:3}
> > 
> > // 函数传参时：
> > {
> >  function run({a,b,c,d}) {
> >      console.log(a,b,c,d);// 1 2 3 4
> >  }
> >  run({a:1,b:2,c:3,d:4});
> > }
> > {
> >  function run({a,b,c,d}) {
> >      console.log(a,b,c,d);// 1 2 undefined undefined
> >  }
> >  run({a:1,b:2});
> > }
> > {
> >  function run({a,b,c=100,d=c}) {
> >      console.log(a,b,c,d);// 1 2 100 100
> >  }
> >  run({a:1,b:2});
> > }
> > {
> >  function run({a,b,c:age,d:num}) {
> >      console.log(a,b,age,num);// 1 2 3 4
> >  }
> >  run({a:1,b:2,c:3,d:4});
> > }
> > {
> >  function run({a,b,c,d,e:age=100}){
> >      console.log(age);// 100
> >  }
> >  run( {a:1,b:2,c:3,d:4});
> > }
> > ```

### 3.5、数组解构赋值

> * 基本使用
>
> >  与对象解构的语法相比，数组解构就简单多了，它使用的是数组字面量，且解构操作全部在数组内完成，而不是像对象字面量语法一样使用对象的命名属性 。
> >
> >  ```js
> >  {
> >    // 未使用数组解构
> >    const arr = [1,2,3,4,5];
> >    const a = arr[0];
> >    const b = arr[1];
> >    const c = arr[2];
> >    const d = arr[3];
> >    const e = arr[4];
> >    console.log(a,b,c,d,e);
> >  }
> >  {
> >    // 使用数组解构
> >    const arr = [1,2,3,5,4];
> >    const [a,b,c,d,e] = arr;
> >    console.log(a,b,c,d,e);// 1 2 3 5 4
> >  }
> >  ```
>
> * 忽略元素
>
> > 在解构模式中，可以直接省略元素，只为感兴趣的元素提供变量名 。
> >
> > ```js
> > // 忽略了右侧解构源当中的元素 1 2 3
> > const [ , , ,d] = [1,2,3,4];
> > console.log(d);// 4
> > ```
>
> *  赋值上下文 
>
> > 数组解构也可用于赋值上下文
> >
> > ```js
> > {
> >   // 数组赋值上下文
> >   let a = 0;
> >   let b = 0;
> >   let c = 0;
> >   let d = 0;
> >   [a,b,c,d] = [1,2,3,4];
> >   console.log(a,b,c,d);// 1 2 3 4
> > }
> > 
> > {
> >   // 对象赋值上下文 
> >  
> > ```
>
> * 变量交换
>
> > 数组解构语法还有一个独特的用例：交换两个变量的值。在排序算法中，值交换是一个非常常见的操作，如果要在`ES5`中交换两个变量的值，则须引入第三个临时变量 
> >
> > ```js
> > {
> >   // 交换变量
> >   let userName = "laoli";
> >   let userName2 = "laozhang";
> >   let _a = userName;
> >   userName = userName2;
> >   userName2 = _a;
> >   console.log(userName, userName2);// laozhang laoli
> > }
> > {
> >  // 交换变量
> >  // let _a = userName;// laoli   laoli laozhang
> >  // let _b = userName2;
> >  // userName2 = _a;// laoli laoli laoli
> >  // userName =  _b;
> >  // console.log(userName2,userName);// laoli laozhang
> > }
> > {
> >  // 交换变量
> >  let a = 100;
> >  let b = 200;
> > 
> >  a = a + b;// 300
> >  b = a - b;// 100
> >  a = a - b;// 200
> >  console.log(a, b);// 200 100
> > }
> > {
> >  // 数组的结构赋值
> >  let a = 1;
> >  let b = 2;
> >  [b,a] = [a,b]
> >  console.log(a,b);// 2 1
> > }
> > ```
>
> *  默认值 
>
> > 也可以在数组解构赋值表达式中为数组中的任意位置添加默认值，当指定位置的属性不存在或其值为undefined时使用默认值 
> >
> > ```js
> > {
> >  let [a,b,c,d,e] = [1,2,3,4];
> >  console.log(a,b,c,d,e);// 1 2 3 4 undefined
> > }
> > {
> >  let [a,b,c,d,e=100] = [1,2,3,4];
> >  console.log(a,b,c,d,e);// 1 2 3 4 100
> > }
> > {
> >  let [a,b,c,d,e=100] = [1,2,3,4,200];
> >  console.log(a,b,c,d,e);// 1 2 3 4 200
> > }
> > {
> >  let [a,b,c,d,e=100] = [1,2,3,4,undefined];
> >  console.log(a,b,c,d,e);// 1 2 3 4 100
> > }
> > ```
>
> *  嵌套数组解构 
>
> >  嵌套数组解构与嵌套对象解构的语法类似，在原有的数组模式中插入另一个数组模式，即可将解构过程深入到下一个层级 
> >
> >  ```js
> >  {
> >    // [c,d]的默认值为[3,4]
> >    let [a,b,[c,d]=[3,4]] = [1,2];
> >    console.log(a,b,c,d);// 1 2 3 4
> >  }
> >  {
> >    let [a,b,c,d] = [1,[2,3],4];
> >    console.log(a,b,c,d);// 1 [2,3] 4 undefined
> >  }
> >  {
> >    // 数组嵌套
> >    let [a,[b,c],d] = [1,[2,3],4];
> >    console.log(a,b,c,d);// 1 2 3 4
> >  }
> >  {
> >    let [a,[b,c,[e,f]]] = [1,[2,3,[4,5]]];
> >    console.log(a,b,c,e,f);// 1 2 3 4 5
> >  }
> >  ```
>
> *  不定元素 
>
> > 函数具有不定参数，而在数组解构语法中有一个相似的概念——不定元素。在数组中，可以通过...语法将数组中的其余元素赋值给一个特定的变量 
> >
> > ```js
> > // 函数具有不定参数
> > function fn(){
> > 
> > }
> > fn(1);
> > fn(1,2);
> > 
> > // 数组当中具有不定元素
> > // ...在解构赋值时也称为剩余运算符。
> > {
> >  let [...num] = [1,2,3,4,5,6,7,8];
> >  console.log(num);// [1,2,3,4,5,6,7,8];
> > }
> > {
> >  let [a,b,...num] = [1,2,3,4,5,6,7];
> >  console.log(a,b,num)// 1 2 [3,4,5,6,7]
> > }
> > ```
>
> *  数组复制 
>
> > 在ES5中，开发者们经常使用concat()方法来克隆数组 
> >
> > ```js
> > // es5下对数组进行复制
> > let arr = [1,2,3,4];
> > // let arr2 = arr;
> > let arr2 = arr.concat();// 当传入参数时为合并数组，不传入参数时为复制数组
> > console.log(arr === arr2);// false
> > 
> > // 通过扩展运算符可以复制数组
> > let arr = [1,2,3,4];
> > let arr2 = [...arr];
> > console.log(arr===arr2);// false
> > ```

### 3.6、混合解构（复杂解构）

> > 可以混合使用对象解构和数组解构来创建更多复杂的表达式，如此一来，可以从任何混杂着对象和数组的数据解构中提取想要的信息 
>
> 练习：
>
> ```js
> //复杂解构
> let wangfei = {
> name: '王菲',
> age: 18,
> songs: ['红豆', '流年', '暧昧', '传奇'],
> history: [
>       {name: '窦唯'},
>       {name: '李亚鹏'},
>       {name: '谢霆锋'}
>     ]
> };
> let {name,age,songs:[one,two,three,four],history:[{name:name1},{name:name2},{name:name3}]} = wangfei;
> //王菲 18 红豆 流年 暧昧 传奇 窦唯 李亚鹏 谢霆锋
> console.log(name,age,one,two,three,four,name1,name2,name3);
> let {songs: [one, two, three], history: [first, second, third]} = wangfei;
> ```

### 3.7、 解构参数 

> > 解构可以用在函数参数的传递过程中，这种使用方式更特别。当定义一个接受大量可选参数的JS函数时，通常会创建一个可选对象，将额外的参数定义为这个对象的属性 
> >
> > ```js
> > // 对象解构赋值
> > {
> > function run({a,b,c}) {
> >   console.log(a,b,c);// 1 2 3
> > }
> > run({a:1,b:2,c:3})
> > }
> > 
> > {
> > function run(num,count,{a,b,c}) {
> >   console.log(a,b,c,num,count);// 1 2 3 100 1000
> > }
> > run(100,1000,{a:1,b:2,c:3})
> > }
> > 
> > // 数组解构赋值
> > {
> > function run([a,b,c]) {
> >   console.log(a,b,c)// 1 2 3
> > }
> > run([1,2,3])
> > }
> > 
> > {
> > function run(num,[a,b,c],count) {
> >   console.log(a,b,c,num,count)// 1 2 3 1000 2000
> > }
> > run(1000,[1,2,3],2000)
> > }
> > ```

### 3.8、 必须传值的解构参数 

> >  解构参数有一个奇怪的地方，默认情况下，如果调用函数时不提供被解构的参数会导致程序抛出错误 
> >
> >  ```js
> >  // undefined与null不允许被解构赋值。
> >  {
> >  // 默认值为一个{}
> >  function run({a,b,c}={}) {
> >      console.log(a,b,c);// undefined undefined undefined
> >  }
> >  run();
> >  }
> >  
> >  {
> >  // 为a b c 增加默认值
> >  function run({a=1,b=2,c=3}={}) {
> >      console.log(a,b,c);//1 2 3 
> >  }
> >  run();
> >  }
> >  ```

### 3.9、默认值

> > 可以为解构参数指定默认值，就像在解构赋值语句中那样，只需在参数后添加等号并且指定一个默认值即可 
> >
> > ```js
> > function fn(a=1){
> > console.log(a);// 1
> > }
> > fn();
> > 
> > 
> > function run([a,b,c]=[]){
> > console.log(a,b,c);// undefined
> > }
> > run();
> > 
> > function run2([a=3,b=2,c=1]=[]){
> > console.log(a,b,c);// 3 2 1
> > }
> > run2();
> > 
> > ```
> >
> > 返回参数的应用
> >
> > ```js
> > {
> > function run(){
> >   return {
> >       a:1,
> >       b:2
> >   }
> > }
> > let {a,b} = run();
> > console.log(a,b);//1 2
> > }
> > 
> > 
> > {
> > function run(){
> >   return [1,2]
> > }
> > let [a,b] = run();
> > console.log(a,b);//1 2
> > }
> > ```

### 3.10、字符串解构  (了解)

> >  字符串也可以解构赋值。这是因为，字符串被转换成了一个类似数组的对象 
> >
> >  ```js
> >  // 字符串也可以解构赋值。这是因为，字符串被转换成了一个类似数组的对象
> >  const str = "你现在还好吗？快乐吗？过的好吗？";
> >  const [a,b,c,d,e,f,g] = str;
> >  console.log(a,b,c,d,e,f,g);// 你 现 在 还 好 吗 ？
> >  ```

### 3.11、数值和布尔值解构(了解)

> >   解构赋值时，如果等号右边是数值和布尔值，则会先转为对象 
> >
> >   ```js
> >   let num = 100;
> >   let bol = true;
> >   
> >   // toString其实是Number.prototype.toString
> >   let {toString:s1} = num;// 相当于  let  {toString:s1} = new Number(num);
> >   // tosString其实是Boolean.prototype.toString
> >   let {toString:s2} = bol;
> >   
> >   console.log(s1 === Number.prototype.toString);// true
> >   console.log(s2 === Boolean.prototype.toString);// true
> >   
> >   console.log(typeof s1.call(100))
> >   console.log(typeof s2.call(true))
> >   
> >   console.log(new Number(100));
> >   console.log(new Boolean(true));
> >   
> >   // null 与 undefined是无法转换为对象，所以 无法使用解构赋值
> >   // let {} = null;
> >   // let {} = undefined;
> >   ```

### 3.12、解构赋值的应用

> - 函数的多个返回值获取
>
>   ```js
>   // 如果要返回多个参数，那么可以将你的数据放置在数组或者是对象中即可
>   {
>       function run(){
>           // 放置在对象中进行返回
>           return {
>               a:1,
>               b:2
>           }
>       }
>       let {a,b} = run();
>       console.log(a,b);
>   }
>   
>   {
>       function run(){
>           // 放置在数组中进行返回
>           return [1,2]
>       }
>       let [a,b] = run();
>       console.log(a,b);
>   }
>   ```
>
> - 函数传参数
>
>   ```js
>   // 略
>   // undefined与null不允许被解构赋值。
>   {
>       // 默认值为一个{}
>       function run({a,b,c}={}) {
>           console.log(a,b,c);// undefined undefined undefined
>       }
>       run();
>   }
>   
>   {
>       // 为a b c 增加默认值
>       function run({a=1,b=2,c=3}={}) {
>           console.log(a,b,c);//1 2 3 
>       }
>       run();
>   }
>   ```
>
> - `json`数据的提取
>
>   ```js
>   // json数据：用于前后端数据通讯的一种数据格式。类似于对象。
>   let jsonData = {
>     "state": 1,
>     "message": "第2页数据,每页15条, 查询成功!",
>   }
>   let {state,message} = jsonData;
>   ```



## 三、字符串的扩展(重点)

### 3.1、模板字符串

> - 传统的 JavaScript 语言，输出模板通常要拼接字符串
>
>   ```js
>   const appDiv = document.querySelector("#app");
>   appDiv.innerHTML = "<div>" + "<button>1</button>" + "<button>2</button>" + "</div>";
>   ```
>
>   模板字符串（template string）是增强版的字符串，用反引号（`）标识。可以嵌套变量，可以换行，可以包含单引号和双引号。
>
> ```js
>  //定义字符串：
>   // es5:定义字符串，可以使用双引号或单引号
>   let str = "三百六十五枝烛光";
>   let str = '三百六十五枝烛光';
>   // es6:可以使用反引号
>   let str = `三百六十五枝烛光`;
> ```
>
>   ```js
> // 可以换行，可以包含单引号和双引号。嵌套变量
> let btnVal = "第三个按钮";
> let btnVal2 = "第四个按钮";
> let str = `
>    <input type="button" value='1'>
>     <input type="button" value="2">
>     <input type="button" value="${btnVal}">
>     <input type="button" value="${btnVal2}">
> `
> const appDiv = document.querySelector("#app");
> appDiv.innerHTML = str;
>   ```
>
> - 它可以当作普通字符串使用，也可以用来定义多行字符串。模板字符串中嵌入变量，需要将变量名写在`${}`之中。
>
>   ```js
>   let num = 1;
>   let str = `有一个女生，有一天上班忘记了化妆，结果记旷工${num}次。  `
>   console.log(str);// 有一个女生，有一天上班忘记了化妆，结果记旷工1次。
>
>
> 
>
>   ```js
> 
>  //大括号内部可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性。
>   var arr = [1,2,3,4,5];
>   var arr2 = ["师","法","魔","级","超"];
>   var obj = {
>        userName:"张天师"
>   }
>    let str = `
>        <div>
>        <p>1</p>
>        <p>${1+1}</p>
>        <p>${arr}</p>
>        <p>${arr.join("")}</p>
>        <p>${arr2.reverse().join("")}</p>
>        <p>${obj.userName}</p>
>        </div>
>    `
>    const appDiv = document.querySelector("#app");
>    appDiv.innerHTML = str;
>    console.log(str);
>    //模板字符串之中还能调用函数。
>    function fn(){
>     return 123;
>   }
> let str = `
>   <div>${fn()}</div>
>    `
> const appDiv = document.querySelector("#app");
> appDiv.innerHTML = str;
>   ```
>
> 
>
>    ```js
> 
> - 模板字符串应用
> 
>   js
>   //应用一:将数组当中的数字用h3包裹，放置到Id为one的div中
>   // 第一种方法
>  var arr = [1,2,3,4];// <h3>1</h3><h3>2</h3><h3>3</h3><h3>4</h3>
>   var str = "";
>  arr.forEach(function (item) {
>       // es5
>       // str += "<h3>"+item+"</h3>";
> 
>       // es6
>       str += `<h3>${item}</h3>`;
>   })
>   document.querySelector("#one").innerHTML = str;
> 
>     // 第二种方法
>   var arr = [1,2,3,4];// ==> ["<h3>1</h3>","<h3>2</h3>","<h3>3</h3>","<h3>4</h3>"]
>   var arr2 = arr.map(function (item) {
>       return `<h3>${item}</h3>`
>   })
>     document.querySelector("#one").innerHTML = arr2.join("");
> 
>   // 应用二
>    var topBarNav=[
>        {
>            url:"http://www.baidu.com",
>            title:"你的订单"
>          },
>        {
>            url:"http://www.baidu.com",
>            title:"我的购物车"
>        },
>        {
>            url:"http://www.baidu.com",
>            title:"我的尚品汇"
>        },
>        {
>            url:"http://www.baidu.com",
>            title:"尚品汇会员"
>        },
>        {
>            url:"http://www.baidu.com",
>            title:"企业采购"
>        },
>        {
>            url:"http://www.baidu.com",
>            title:"关注尚品汇"
>        },
>        {
>            url:"http://www.baidu.com",
>            title:"合作招商"
>        },
>        {
>            url:"http://www.baidu.com",
>            title:"商家后台"
>        }
>    ];
>   document.querySelector("#one").innerHTML = `
>           <nav>
>           ${topBarNav.map(function(item){
>                   return `
>                       <a href="${item.url}">${item.title}</a>
>                       `
>                       }).join("")}
>           </nav>
>   `;
>    ```

### 3.2、字符串的新增方法

> - 去空格
>
>   - `trim()`:删除字符串两端的空白符
>   - `trimStart() `去除首部的空格
>   - `trimEnd()` 去除尾部的空格
>
>   ```js
>    let str = "    一会就放学啦！      ";
>   console.log("正常:","青龙"+str+"白虎");
>   // - `trim()`:删除字符串两端的空白符
>   console.log("trim:","青龙"+str.trim()+"白虎");
>   // - `trimStart() `去除首部(左侧)的空格
>   console.log("trimStart:","青龙"+str.trimStart()+"白虎");
>   // - `trimEnd()` 去除尾部（右侧）的空格
>   console.log("trimEnd:","青龙"+str.trimEnd()+"白虎");
>     
>   // 应用时：（一般在提交表单时，文本框的内容是需要去除左右两侧的空格的）
>   document.querySelector("button").onclick = function () {
>       console.log(document.querySelector("input").value.trim())
>   }
>   ```
>
>   
>
> - 判断
>
>   - `startsWith()`;判断开头有没有包含某个字符串
>   - `endsWith()`;判断结尾有没有包含某个字符串
>   - `includes`判断字符串是否包含某个字符串
>
>   ```js
>   var str = "有一个男生，非常干净，有三十双袜子，每天换一双，一个月之后，发现哪一双较干净换上继续穿！";
>
>   // - `startsWith()`;判断开头有没有包含某个字符串
>   console.log(str.startsWith("有一"));// true
>   console.log(str.startsWith("有一个男生，非常干净，有三十双袜子"));// true
>   console.log(str.startsWith("一"));// true
>   // - `endsWith()`;判断结尾有没有包含某个字符串
>   console.log(str.endsWith("！"));// true
>   console.log(str.endsWith("发现哪一双较干净换上继续穿！"));// true
>   console.log(str.endsWith("穿"));// false
>   // - `includes`判断字符串是否包含某个字符串
>   console.log(str.includes("干净"));// true
>   console.log(str.includes("一个月"));// true
>   console.log(str.includes("一个女生"));// false
>
>   // includes还可以应用于数组
>   var arr = [1,2,3,4];
>   console.log(arr.includes(4));// true
>   console.log(arr.includes(5));// false
>   ```
>
> - `repeat`重复当前的字符串，可以规定次数
>
>   ```js
>    var str = "我要发财!";
>   console.log(str.repeat(3));// 我要发财!我要发财!我要发财!
>   ```
>
> - 补充字符
>
>   - `padStart()`当字符串不够某个长度的时候，在前边补充任意字符
>   - `padEnd()`,//当字符串不够某个长度的时候，在后边补充任意字符
>
>   ```js
>    let str = "2021";
>   // - `padStart()`当字符串不够某个长度的时候，在前边补充任意字符
>   // 指定长度为10，如果str不足10的话，用0补充。
>   console.log(str.padStart(10,"0"));// 0000002021
>   console.log(str.padStart(12,"abc"));// abcabcab2021
>     
>   // - `padEnd()`,//当字符串不够某个长度的时候，在后边补充任意字符
>   console.log(str.padEnd(10,"0"));// 2021000000
>   console.log(str.padEnd(12,"abc"));// 2021abcabcab
>   ```
>
>   应用：
>
>   ```js
>    function getNowTime() {
>           var time = new Date();
>           return `${time.getFullYear()}-${(time.getMonth()+1).toString().padStart(2,"0")}-${time.getDate().toString().padStart(2,"0")} ${time.getHours().toString().padStart(2,"0")}:${time.getMinutes().toString().padStart(2,"0")}:${time.getSeconds().toString().padStart(2,"0")}`
>       }
>       console.log(getNowTime());
>   ```

## 四、数组的扩展

### 4.1、扩展运算符

#### 4.1.1、什么是扩展运算符

> 扩展运算符（spread）是三个点（`...`）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列，目前也可以用来展开数组。
>
> ```js
> // rest 参数:...rest
> function run(...rest) {
>  console.log(rest);
> }
> run(1,2,3,4,5,6,7,8,9,0)
> 
> // 扩展运算符
> var arr = [1,2,3,4];
> function fn(a,b,c,d) {
>  console.log(a,b,c,d);// 1234
> }
> fn(...arr);// fn(1,2,3,4)
> ```
>
> 该运算符常常用于函数调用。

#### 4.1.2、其他应用

> - 复制数组
> - 合并数组
> - 解构赋值
> - 字符串转换为数组
>
> ```js
> // - 复制数组
> {
>     let arr = [1,2,3,4];
>     let arr2 = [...arr];// [1,2,3,4]
>     console.log(arr===arr2);// false
> }
> // - 合并数组
> {
>     let arr = [1,2,3,4];
>     let arr2 = [5,6,7,8];
>     // 将arr与arr2合并
>     let arr3 = [...arr,...arr2];// [1,2,3,4,5,6,7,8]
>     console.log(arr3);//  [1,2,3,4,5,6,7,8]
> 
>     // 为当前的数组增加元素：arr arr2
>     let arr4 = [
>         100,
>         ...arr,
>         99,
>         ...arr2,
>         88
>     ];
>     console.log(arr4);// [100,1,2,3,4,99,5,6,7,8,88]
> }
> // - 解构赋值
> {
>     // 对象的解构
>     const {a,...myNum} = {a:1,b:2,c:3};
>     console.log(a,myNum);// 1 {b:2,c:3}
>     // 数组的解构
>     const [b,...myArr] = [1,2,3,4,5,6];
>     console.log(b,myArr);// 1 [2,3,4,5,6]
> }
> // - 字符串转换为数组
> {
>     let str = "还有十分钟就下课啦！时光过的好快呀！";
>     let arr = [...str];
>     console.log(arr);
>     console.log([..."还有十分钟就下课啦！时光过的好快呀！"]);
> }
> ```

