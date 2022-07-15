

### 4.2 数组的新方法

#### 4.2.1 Array对象的新方法

> * from：把伪数组转换成数组(可以使用数组的方法)
>
>   ```js
>   {
>       // 可以复制数组.
>       const arr = [1,2,3,4];
>       const arr2 = Array.from(arr);
>       console.log(arr,arr2,arr === arr2);// false
>   }
>   {
>       // 它属于浅复制。
>       const arr = [1,2,[3,4]];
>       const arr2 = Array.from(arr);
>       console.log(arr[2] === arr2[2]); //true
>       arr2[2][0] = 300;
>       console.log(arr); // [ 1, 2, [ 300, 4 ] ]
>   }
>   
>   {
>       // 它属于浅复制2
>       const arr = [{a:1}];
>       const arr2 = Array.from(arr);
>       console.log(arr===arr2);// false
>       console.log(arr[0] === arr2[0]);// true
>   
>       arr2[0].a = 100;
>       console.log(arr[0].a);// 100;
>   }
>   
>   {
>       // 把伪数组转换成数组(可以使用数组的方法)
>       function run() {
>           console.log(Array.from(arguments)); //[ 1, 2, 3, 4 ]
>   
>           Array.from(arguments).forEach(function (item,index) {
>               console.log(item,index);
>           })
>   
>           // for(let key in arguments){
>           //     console.log(key,arguments[key]);
>           // }
>       }
>       run(1,2,3,4)
>   }
>   
>   
>   {
>       const li = document.querySelectorAll("ul li");
>       li.forEach(function (item,index) {
>           console.log(item,index);
>       })
>   
>       const arr = Array.from(li).map(function (item,index) {
>           // console.log(item,index);
>           console.log(item.innerHTML);
>           return item.innerHTML;
>       })
>       console.log(arr);
>   }
>   ```
>
> * of：将一组数字转换成数组 弥补Array的不足
>
>   ```js
>   const {log} = console;
>   log(Array.of(1,2,3,4));
>   log(Array.of("a","b",true,false,function () {
>   }));
>   ```



#### 4.2.2、Array原型上的新增方法  

> * `copyWithin`：数组实例的`copyWithin()`方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组
>
> 它接受三个参数:
>
> ```js
> * target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
> * start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。
> * end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。
> {
>     const arr = [1,2,3,4,5,6,7,8];
>     console.log(arr.copyWithin(3,0));// 1, 2, 3, 1, 2, 3, 4, 5]
> }
> 
> {
>     const arr = [1,2,3,4,5,6,7,8];
>     console.log(arr.copyWithin(4,5,7));// [1,2,3,4,6,7,7,8]
> }
> 
> {
>     const arr = [1,2,3,4,5,6,7,8];
>     console.log(arr.copyWithin(0,3,6));// [4,5,6,4,5,6,7,8]
> }
> 
> {
>     const arr = [1,2,3,4,5,6,7,8];
>     console.log(arr.copyWithin(1,3));// [1,4,5,6,7,8,7,8]
> }
> 
> {
>     const arr = [1,2,3,4,5,6,7,8];
>     console.log(arr.copyWithin(1));// [1,1,2,3,4,5,6,7]
> }
> 
> {
>     const arr = [1,2,3,4,5,6,7,8];
>     console.log(arr.copyWithin(-1));// [1,2,3,4,5,6,7,1]
> }
> 
> {
>     const arr = [1,2,3,4,5,6,7,8];// -1 8
>     console.log(arr.copyWithin(-3,-1));// [1,2,3,4,5,8,7,8]
> }
> 
> {
>     const arr = [1,2,3,4,5,6,7,8];// 3
>     console.log(arr.copyWithin(3));// [1,2,3,1,2,3,4,5] 
>     console.log(arr.copyWithin(3,0,8));// [1,2,3,1,2,3,1,2]
> }
> ```
>
> * fill：使用固定值填充数组
>   * `fill`方法用于空数组的初始化非常方便。数组中已有的元素，会被全部抹去。
>     * `fill`方法还可以接受第二个(默认0)和第三个参数（默认数组的长度），用于指定填充的起始位置和结束位置。
>
>
> ```js
> {
>     const arr = [1,2,3,4];
>     arr.fill(5);
>     console.log(arr);// [5,5,5,5]
> }
> {
>     const arr = [1,2,3,4];// 起始位置从0开始，结束位置从1开始 计数
>     arr.fill(5,1,2);
>     console.log(arr);// [1,5,3,4]
> }
> {
>     const arr = [1,2,3,4];// 起始位置从0开始，结束位置从1开始 计数
>     arr.fill(5,1,4);
>     console.log(arr);// [1,5,5,5]
> }
> {
>     const arr = [1,2,3,4];// 起始位置从0开始，结束位置从1开始 计数
>     arr.fill("abc",1,4);
>     console.log(arr);// [1,"abc","abc","abc"]
> }
> ```
>
>  * `entries()`，`keys()`和`values()`
>
> >  `ES6` 提供三个新的方法——`entries()`，`keys()`和`values()`——用于遍历数组。它们都返回一个遍历器对象,可以用`for...of`循环进行遍历，唯一的区别是`keys()`是对键名的遍历、`values()`是对键值的遍历，`entries()`是对键值对的遍历。
> >
> >  ```js
> >  {
> >    // es5
> >    let arr = [1,2,3,4];
> >    for(let i = 0;i<arr.length;i++){
> >        console.log(i,arr[i]);
> >    }
> >  
> >    arr.forEach(function (item,index) {
> >        console.log(index,item);
> >    })
> >   // in 
> >    for(let i in arr){
> >        console.log(i,arr[i]);
> >    }
> >  }
> >  {
> >    // es6  of
> >    let arr = [1,2,3,4];
> >    for(let item of arr){
> >        console.log(item); // 1 2 3 4
> >    }
> >  
> >     for(let item of arr.entries()){
> >         console.log(item); //[ 0, 1 ] [ 1, 2 ] [ 2, 3 ] [ 3, 4 ]
> >     }
> >  
> >    for(let [index,value] of arr.entries()){
> >        console.log(index,value);//0 1	1 2		2 3 	3 4
> >    }
> >  
> >    for(let index of arr.keys()){
> >        console.log(index);// 0 1 2 3
> >    }
> >  
> >    for(let value of arr.values()){
> >        console.log(value); // 1 2 3 4
> >    }
> >  
> >  }
> >  ```
>
>    * find 和 `findIndex`
>
> > 数组实例的`find`方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为`true`的成员，然后返回该成员。如果没有符合条件的成员，则返回`undefined`
> >
> > ```js
> > const arr = [1,2,3,4];
> > {
> >  // find:查找符合条件的第一个元素，如果找不到返回undefined
> >  const result = arr.find(function (item,index) {
> >      console.log(11111111111,item,index);
> >      return item === 100;// 返回的值是一个布尔值。
> >  })
> >  console.log(result);
> > }
> > {
> >  // findIndex:查找符合条件的元素所在的下标，如果找不到返回-1
> >  const result = arr.findIndex(function (item,index) {
> >      console.log(11111111111,item,index);
> >      return item === 100;// 返回的值是一个布尔值。
> >  })
> >  console.log(result);
> > }
> > ```
>
> * includes：
>
> >  `includes`方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的`includes`方法类似
> >
> >  ```js
> >  var arr = [1,2,3,4];
> >  console.log(arr.includes(1));// true
> >  console.log(arr.includes(100));// false
> >  ```
>
> - flat
>   - 数组的成员有时还是数组，`Array.prototype.flat()`用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。
>   - `flat()`默认只会“拉平”一层，如果想要“拉平”多层的嵌套数组，可以将`flat()`方法的参数写成一个整数，表示想要拉平的层数，默认为1
>   - 如果不管有多少层嵌套，都要转成一维数组，可以用`Infinity`关键字作为参数
>
> ```js
> {
>     var arr = [1,2,3,4];
>     console.log(arr.flat());//[1,2,3,4]
> }
> {
>     var arr = [1,2,3,4,[5,6]];
>     console.log(arr.flat());//[1,2,3,4,5,6]
> }
> {
>     var arr = [1,2,3,4,[5,6,[7,8,9]]];
>     console.log(arr.flat());//[1,2,3,4,5,6,[7,8,9]]
> }
> {
>     var arr = [1,2,3,4,[5,6,[7,8,9]]];
>     // console.log(arr.flat().flat());//[1, 2, 3, 4, 5, 6, 7, 8, 9]
>     console.log(arr.flat(2));//[1, 2, 3, 4, 5, 6, 7, 8, 9]
> }
> {
>     // 如果不管有多少层嵌套，都要转成一维数组，可以用`Infinity`关键字作为参数
>     var arr = [1,2,3,4,[5,6,[7,8,9,[10,11]]]];
>     // console.log(arr.flat(3));//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
>     console.log(arr.flat(Infinity));//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
> }
> ```



## 五、函数的扩展

### 5.1、 函数参数默认值

#### 5.1.1、`ES5`默认参数

> ES6 之前，不能直接为函数的参数指定默认值，只能采用变通的方法。
>
> ```js
> function run(a,b,c) {
>  if(typeof c === "undefined"){
>      c = 100;
>  }
>  console.log(a,b,c);
> }
> run(1,2,3);// 1 2 3
> run(1,2);// 1 2 100
> ```

#### 5.1.2、`ES6` 默认参数

> ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。
>
> ```js
> function run(a=100,b=200,c=300) {
>  console.log(a,b,c);
> }
> run(1,2,3);// 1 2 3
> run(1,2);// 1 2 300
> run(1);// 1 200 300
> run();// 100 200 300
> ```

### 5.2 rest参数

> - `ES6` 引入 rest 参数（形式为`...变量名`），用于获取函数的多余参数，这样就不需要使用`arguments`对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
>
>   ```js
>   {
>       function run(...rest) {
>           // rest参数与arguments的区别：rest是真数组,arguments是一个伪数组
>           console.log(rest);// [1,2,3,4,5,6]
>       }
>       run(1,2,3,4,5,6);
>   }
>   {
>       function run(a,b,...rest) {
>           console.log(a,b,rest);// 1 2 [3,4,5,6]
>       }
>       run(1,2,3,4,5,6);
>   }
>   ```
>
> - 和普通参数混合使用的时候，需要放在参数的最后
>
>   ```js
>   {
>       // 正确写法
>       function run(a,b,...rest) {
>           console.log(a,b,rest);// 1 2 [3,4,5,6]
>       }
>       run(1,2,3,4,5,6);
>   }
>   
>    {
>        // 会报语法错误： Rest parameter must be last formal parameter
>        function run(...rest,a,b) {
>            console.log(a,b,rest);
>        }
>        run(1,2,3,4,5,6);
>    }
>   ```
>
> - 函数的`length`属性，不包括 rest 参数
>
>   ```js
>   {
>       function run(a,b,c,d,e,f,g,...rest) {
>   
>       }
>       console.log(run.length);// 形参的个数 7, 不包含rest参数
>       console.log(run.name);// run
>   }
>   ```

### 5.3 箭头函数（重点）

#### 5.3.1、什么是箭头函数

> ES6 允许使用“箭头”（`=>`）定义函数。
>
> ```js
> {
>  // 1
>  // es5:
>  function one(){
> 
>  }
>  // es6:
>  const one6 = () => {}
> 
>  // 2
>  // es5
>  let two = function (a,b) {
>      return a+b;
>  }
>  // es6
>  let two6 = (a,b) => {
>      return a+b;
>  }
> 
> 
>  // 3
>  // es5
>  var obj = {
>      three:function () {
> 
>      }
>  }
>  // es6
>  var obj6 = {
>      three:() => {
> 
>      }
>  }
> 
>  // 4
>  // es5
>  (function (a,b) {
>      console.log(a,b);
>  })(1,2);
>  // es6
>  ((a,b) => {
>      console.log(a,b);
>  })(1,2);
> 
> 
>  // 5
>  // es5
>  setTimeout(function () {
> 
>  },1000)
>  // es6
>  setTimeout(() => {
> 
>  })
> }
> ```

#### 5.3.2、箭头函数的写法

> 箭头函数分为以下几种情况
>
> - 只有一个参数 并函数体是一句话的时候
>
>   ```js
>   // es5:
>   {
>       function fn(a) {
>           return a;
>       }
>   }
>   // es6
>   {
>       // 未简化
>       // let fn = (a) => {
>       //     return a;
>       // }
>   
>       // 只有一个参数可以省略（）
>       // let fn = a => {
>       //     return a;
>       // }
>   
>       // 函数体是一句话的时候可以省略{},默认会返回该行语句的结果
>       let fn = a => a;
>       console.log(fn(100));
>   }
>   ```
>
> - 没有参数或者多个参数的时候，参数的括号不能省略
>
>   ```js
>   {
>       // 没有参数,不能省略括号
>       let fn = () => {
>   
>       };
>       // 多个参数，不能省略括号
>       let fn2 = (a,b,c) => {
>   
>       }
>   }
>   ```
>
> - 当函数体不是一句话的时候，花括号 不可以省略 	
>
>   ```js
>   // 因为函数体内有两句语句，所以花括号 不可以省略 	
>   {
>       let fn = (a,b) => {
>           let c = a+b;
>           return c;
>       }
>   }
>   ```
>
> * 如果函数体内只有一行代码，该行代码返回的是对象的话，可以使用括号。
>
>   ```js
>    {
>        // es5
>        function fn() {
>            return {
>                a:1,
>                b:2
>            }
>        }
>   
>        // es6
>        let fn6 = () => ({
>            a:1,
>            b:2
>        })
>   
>        console.log(fn6())
>    }
>   ```
>
> * 应用：
>
>   ```js
>    {
>        var arr = [1,2,3,4];
>        // es5
>        {
>            var result = arr.map(function (item) {
>                return item+1;
>            })
>            console.log(result);// [2,3,4,5]
>        }
>        // es6
>        {
>            const result = arr.map(item => item+1);
>            console.log(result);// [2,3,4,5]
>        }
>        // 通过箭头函数完成数据的渲染
>        {
>            // 方案一
>            // document.querySelector("div").innerHTML = `
>            //     <ul>
>            //         ${arr.map(item=>{
>            //             return `
>            //                 <li>${item}</li>
>            //             `
>            //         }).join("")}
>            //     </ul>
>            // `
>   
>            // 方案二
>            // document.querySelector("div").innerHTML = `
>            //     <ul>
>            //         ${arr.map(item=>`<li>${item}</li>`).join("")}
>            //     </ul>
>            // `
>   
>            // 方案三：建议使用（），（）代码返回的内容。
>            document.querySelector("div").innerHTML = `
>               <ul>
>                   ${arr.map(item=>(`
>                       <div>
>                       	<li>${item}</li>
>                       </div>
>                   `)).join("")}
>               </ul>
>               `
>        }
>    }
>   ```

#### 5.3.3、箭头函数的注意事项

> - 关于this 
>
>   >  箭头函数没有自己的this，箭头函数内部的this并不是调用时候指向的对象,而是定义时指向的对象
>
> ```js
> var userName = "lisi";
> let obj = {
>     userName:"zhangsan",
>     run:function(){
>         console.log(this.userName);// zhangsan
>         console.log(this === obj);// true
>     },
>     fn:()=>{
>         // 箭头函数没有自己的this
>         console.log(this.userName);// lisi
>         console.log(this===window);
>     }
> }
> obj.run();
> obj.fn();
> 
> // 事件：
> const btns = document.querySelectorAll("button");
> btns[0].onclick = function () {
>     console.log(this);// button
> }
> btns[1].onclick = ()=>{
>     console.log(this);// window
> }
> ```
>
> - 箭头函数不能用于构造函数，也就是不能使用new关键字调用
>
> ```js
> {
>     // es5
>     function Box(){
> 
>     }
>     console.log(Box.prototype);
>     var box = new Box();
>     console.log(box);
> }
> {
>     // es6
>     let Box = () =>{
> 
>     }
>     // 箭头函数没有原型对象
>     console.log(Box.prototype);// undefined
>     let box = new Box();// Uncaught TypeError: Box is not a constructor
> }
> ```
>
>  - 箭头函数没有arguments对象
>
> ```js
> {
>     // es5
>     function run() {
>         console.log(arguments);
>     }
>     run(1,2,3,4,5,6);
> }
> {
>     // es6 箭头函数
>     let run = (...rest) => {
>         console.log(rest);
>         // 异常：ReferenceError: arguments is not defined
>         // console.log(arguments);
>     }
>     run(1,2,3,4,5,6);
> }
> ```
>
> * 关于this补充：
>
>   ```js
>       let obj = {
>           run:function () {
>               console.log("run",this);
>               let my = () =>{
>                   console.log(this === obj);// true
>               }
>               my();
>           },
>           fn:() => {
>               console.log("run",this);// window
>               let my = () =>{
>                   console.log(this === window);// true
>               }
>               my();
>           }
>       }
>       obj.run();
>       obj.fn();
>   ```
>
>
>   // this不需要频繁的call apply bind
>   function Tag(){
>       this.ele = document.querySelectorAll("button");
>       this.init();
>   }
>   Tag.prototype.init = function () {
>       this.ele.forEach((item) => {
>           // 1、将箭头函数赋值时，this指向谁，那么箭头函数体内的this就是谁
>           // 2、箭头函数内的this,指向到函数外部的this
>           item.onclick = (e)=>{
>               console.log(this,e.target.innerText);
>           }
>       })
>   }
>   new Tag();
>
>   ```
> * 箭头函数使用call apply bind
> 
>   ```js
>   let obj = {a:1};
>   {
>       // es5
>       function fn() {
>           console.log(this);
>       }
>       fn();// window
>       fn.call(obj);// obj
>       fn.apply(obj);// obj
>       let fn2 = fn.bind(obj);
>       fn2();// obj
>   }
>   {
>       // es6:箭头函数当中使用call,apply无效
>       let fn = () =>{
>           console.log(this);
>       }
>       fn();// window
>       fn.call(obj);// window
>       fn.apply(obj);// window
>       let fn2 = fn.bind(obj);// window
>       fn2();
>   }
>   ```

## 