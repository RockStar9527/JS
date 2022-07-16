## 六、对象的扩展

### 6.1、对象的简写（重点）

> ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。
>
> ```js
> {
> 	// es5
> 	let userName = "zhangsan";
> 	let obj = {
>   		userName:userName,
>  		 run:function () {
>       		console.log(this.userName);
>   		}
> 	}
> 	console.log(obj);
> 	obj.run();// zhangsan
> }
> 
> {
> // es6实现简写：
> let userName = "lisi";
> let obj = {
>   // 将变量的名字作为属性名，将变量的值作为属性值
>   userName,
>   // 将:function省略
>   run(){
>       console.log(this.userName);
>   }
> }
> console.log(obj);
> obj.run();
> }
> ```

### 6.2 、属性名表达式

> JavaScript 定义对象的属性，有两种方法：点运算符和中括号运算符
>
> ```js
>  {
>      var obj = {
>          a:1,
>          b:2
>      }
>      // 点运算符
>      obj.c = 3;
>      // 中括号运算符
>      obj["d"] = 4;
>      // []使用场景：1、有特殊字符
>      obj["$%^&*()"] = 5;
> 
>      let e = 100;
>      obj[e] = 3000;
> 
>      console.log(obj);// a b c d $%^&*() 100
>  }
> ```
>
> 但是，如果使用字面量方式定义对象（使用大括号），在 `ES5` 中只能使用标识符，而不能使用变量定义属性。
>
> 也就是说在`ES5`中 key/value key是固定不变的，在`ES6`中，支持属性表达式，支持key发生变化
>
> ```js
> {
>  let userName = "zhangsan";
>  let obj = {
>      // 将变量userName的值作为属性名
>      [userName]:"25",
>      [userName+"abc"]:"36",
>      ["abcdefg"]:78,
>      ["%$^&*()_"]:90
>  }
>  console.log(obj);// {zhangsan:"25",zhangsanabc:"36",abcdefg:78,%$^&*()_:90}
> }
> ```

### 6.3、 对象的扩展运算符 ...

> `ES2018` 将这个运算符引入了对象。
>
> ```js
> {
> // 1、用于对象解构赋值
> const obj = {
>   a:1,
>   b:2,
>   c:3,
>   d:4,
>   f:7
> }
> const {a,b,c,...reset} = obj;
> console.log(a,b,c,reset);// 1 2 3 {d:4,f:7}
> }
> 
> {
> // 2、用于合并对象
> const obj = {
>   a:1,
>   b:2
> }
> const obj2 = {
>   c:3,
>   d:4,
>   a:100
> }
> // 将obj与obj2进行合并，合并之后的值赋值给obj3
> const obj3 = {
>   ...obj,// a:1,b:2
>   ...obj2// c:3,d:4,a:100
> }
> console.log(obj3);// {a:100,b:2,c:3,d:4}
> 
> const obj4 = {
>   userName:"zhangsan",
>   ...obj,// a:1,b:2
>   age:12,
>   ...obj2,// c:3 d:4 a:100
> }
> console.log(obj4);// {userName: "zhangsan", a: 100, b: 2, age: 12, c: 3, d:4}
> }
> {
> // 3、合并 对象的例子
> function run(a,b) {
>    return {
>        a,
>        b
>    }
> }
> function my(c,d) {
>    return {
>        c,
>        d
>    }
> }
> const obj = {
>    ...run(100,200),
>    ...my(300,400)
> }
> console.log(obj);// {a: 100, b: 200, c: 300, d: 400}
> }
> ```

### 6.4 对象新增的方法

#### 6.4.1、`Object.is()`

> 判断对象是否相等 相当于===,修复NaN不等自己的问题
>
> ```js
> console.log(NaN === NaN);// false
> console.log(Object.is(NaN,NaN));// true
> console.log(Object.is({},{}));// false
> console.log(Object.is(1,1));// true
> ```

#### 6.4.2、合并方法`Object.assign()`

> ```js
> // assign:合并对象。
> // 第一个参数为目标对象，从第二个参数开始都是源对象。assigin会将obj进行返回。
> // 将源对象合并到目标对象当中，最后将目标对象返回
> var obj = {
>  	a:1
> }
> var obj2 = {
>  	b:2,
>  	c:3
> }
> var obj3 = {
>  	d:100,
>  	f:1000
> }
> let result = Object.assign(obj,obj2,obj3);
> console.log(obj,obj2,obj3);// {a: 1, b: 2, c: 3, d: 100, f: 1000} {b: 2, c: 3} {d: 100, f: 1000}
> console.log(result);// {a: 1, b: 2, c: 3, d: 100, f: 1000}
> console.log(result === obj);// true
> 
> // 应用：
> {
> function Box() {
>  
> }
>  // Box.prototype.run = function () {
>  //
>  // }
>  // Box.prototype.setUserName = function () {
>  //
>  // }
>  
> // 上方为原型对象增加方法可以写成如下代码
>  Object.assign(Box.prototype,{
>    run(){
>    
>   },
>      setUserName(){
>    
>   }
>    })
>  const box = new Box();
>  console.log(box.run,box.setUserName);
>  
> }
> ```



## 七、Math的扩展

### 7.1、指数运算符

> - 在Math中提供了 pow的方法 用来计算一个值的n次方
>
>   ```js
>    {
>        console.log(Math.pow(2,3));// 8   相当于 2*2*2
>        console.log(Math.pow(7,5));// 16807   相当于 7*7*7*7*7
>    }
>   ```
>
> - `ES11` 提出了新的方法求一个值的n次方 那就是 ** 操作符
>
>   ```js
>   {
>       console.log(2**3);// 8   相当于 2*2*2
>       console.log(7**5);// 16807   相当于 7*7*7*7*7
>     
>       // 注意1：** 可以与= 组合成一个新的赋值运算符
>       let a = 2;
>       a **= 3;//相当于 a = a*a*a;
>       console.log(a);
>     
>       let b = 3;
>       b **= 4;// b = b*b*b*b;  3*3*3*3
>       console.log(b);// 81
>     
>       //  注意2：** 自右向左依次运算
>       console.log(2**2**4);//65536  相当于 2**(2**4)  ==> 2*16
>       console.log(Math.pow(2,16));// 65536
>     
>   }
>   ```



### 7.2、进制写法

> - `ES6` 提供了二进制和八进制数值的新的写法，分别用前缀`0b`和`0o`表示。
>
> ```js
> let n2 = 0b110;// 二进制
> let n8 = 0o761;// 八进制
> let n16 = 0xabc;// 十六进制
> console.log(n2,n8,n16);// 6 497 2748
> ```



### 7.3、Math的新增方法

> - `Math.trunc()`方法会将数字的小数部分去掉，只保留整数部分
>
>   ```js
>    {
>        console.log(Math.floor(10.38));// 10
>        console.log(Math.ceil(10.38));// 11
>        console.log(Math.trunc(10.38));// 10
>   
>        console.log(Math.floor(-1.23));// -2
>        console.log(Math.ceil(-1.23));// -1
>        console.log(Math.trunc(-1.23));// -1
>    }
>   ```
>
> - `Math.sign()` 判断一个数字的正数还是负数 还是0 或者是`NaN`
>
>   ```js
>   {
>       console.log(Math.sign(100));// 1
>       console.log(Math.sign(-100));// -1
>       console.log(Math.sign(0));// 0
>       console.log(Math.sign(NaN));// NaN
>       console.log(Math.sign(1+undefined));// NaN
>   }
>   ```
>
> - `Math.sqrt()`平方根
>
>   ```js
>   console.log(Math.sqrt(4));// 2
>   console.log(Math.sqrt(9));// 3
>   console.log(Math.sqrt(100));// 10
>   ```
>
> - `Math.cbrt()`立方根
>
>   ```js
>   console.log(Math.cbrt(27));// 3
>   console.log(Math.cbrt(64));// 4
>   ```
>
> - `Math.hypot()` 求所有参数平方和的平方根
>
>   ```js
>   console.log(Math.hypot(3,4));// 5    相当于Math.sqrt(3*3+4*4)
>   console.log(Math.hypot(3,4,5));// 7.0710678118654755
>   console.log(Math.sqrt(3**2+4**2+5**2));// 7.0710678118654755
>   ```



# 八、Number的扩展

> - `Number.isFinite(i) `:  用来检查一个数值是否为有限
>
>   ```js
>   {
>       console.log(Number.isFinite(0));// true
>       console.log(Number.isFinite(7/1));// true
>       console.log(Number.isFinite(7/0));// false
>       console.log(Number.isFinite("12345"));// false
>   }
>   ```
>
> - `Number.isNaN(i)` : 判断是否是`NaN`
>
>   ```js
>   {
>       console.log(Number.isNaN(1));// false
>       console.log(Number.isNaN(2+undefined));// true
>       console.log(Number.isNaN(true));// false
>       console.log(Number.isNaN(false));// false
>       console.log(Number.isNaN(undefined));// false
>       console.log(Number.isNaN(123+undefined));// true
>   }
>   ```
>
> - `Number.isInteger(i) `: 判断是否是整数
>
>   ```js
>   {
>       console.log(Number.isInteger(1));// true
>       console.log(Number.isInteger(-1));// true
>       console.log(Number.isInteger(0));// true
>       console.log(Number.isInteger(1.11));// false
>       console.log(Number.isInteger("1"));// false
>   }
>   ```
>
> - `Number.parseInt(str) `: 将字符串转换为对应的数值
>
>   ```js
>   {
>       console.log(window.parseInt === Number.parseInt);// true
>       console.log(Number.parseInt("123"));// 123
>       console.log(Number.parseInt(12+"abc"));// 12
>       console.log(Number.parseInt("12abc"));// 12
>       console.log(Number.parseInt(true));// NaN
>       console.log(window.parseFloat === Number.parseFloat);// true
>   }
>   ```

## 九、新增数据类型

### 9.1、Symbol

#### 9.1.1、什么是Symbol

> ES5 的对象属性名都是字符串，这容易造成属性名的冲突。比如，你使用了一个他人提供的对象，但又想为这个对象添加新的方法，新方法的名字就有可能与现有方法产生冲突。如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是 ES6 引入`Symbol`的原因。
>
> ```js
> // 当引入其它人提供的对象时，如果你要增加属性的话，采用Symbol可以避免冲突。
> const obj = {
>  userName:"zhangsan",
>  age:12,
>  run(){
> 
>  }
> }
> obj.run = function(){
>  // 会将之前的给覆盖掉。
> }
> obj.userName = "zzzz";
> ```
>
> ES6 引入了一种新的原始数据类型`Symbol`，表示独一无二的值。它是 JavaScript 语言的第七种数据类型

#### 9.1.2、Symbol的使用

> - Symbol 值通过`Symbol`函数生成。
>
>   ```js
>   // 1
>   let s1 = Symbol();
>   let s2 = Symbol();
>   console.log(s1,s1===s2,typeof s1);//false symbol
>   
>   // 2
>   let s4 = Symbol("尚硅谷");
>   let s5 = Symbol("尚硅谷");
>   console.log(s4,s5,typeof s4,typeof s5,s4 === s5);// Symbol(尚硅谷) Symbol(尚硅谷) "symbol" "symbol" false
>   
>   // 3
>   let s6 = Symbol.for("尚");
>   let s7 = Symbol.for("尚");
>   console.log(typeof s6,typeof s7,s6 === s7);// symbol symbol true
>   ```
>
> - 这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突
>
>   ```js
>   // 如果要将Symbol作为你的属性名，一般要与常量结合使用。
>   // 在做项目时：如果引入的是第三方的功能模块时，要增加属性时，可以采用Symbol
>   const userName = Symbol("userName");
>   obj[userName] = "lisi";
>   console.log(obj[userName])
>     // 在自己定义模块时，可以采用Symbol，避免其它人将你的属性进行重置 。
>     // 注意：自己定义模块时，如果采用Symbol,一般为自己模块当中的私有属性。
>     const run = Symbol("run");
>     var myObj = {
>         [run]:function () {
>             console.log("我自己定义的函数")
>         },
>         run(){
>             // 逻辑
>             this[run]();
>             // 逻辑
>         }
>     }
>     myObj[run]();
>   ```
>
>
> 

#### 9.1.3、Symbol表示独一无二的值

> ```js
> let s1 = Symbol();
> let s2 = Symbol();
> console.log(s1 === s2);// false
> 
> let s3 = Symbol("尚硅谷");
> let s4 = Symbol("尚硅谷");
> console.log(s3 === s4);// false
> ```

#### 9.1.4、Symbol的注意事项

> - Symbol中传入的字符串没有任何意义，只是用来描述Symbol
>
>   ```js
>   // 为Symbol传递的参数只是用于描述。
>   let s1 = Symbol();// 独一无二的
>   let s2 = Symbol("userName");// 独一无二的
>   ```
>
> - Symbol不能使用New调用
>
>   ```js
>   // TypeError: Symbol is not a constructor
>   const s1 = new Symbol();
>   ```
>
> - 类型转换的时候，不能转数字
>
>   ```js
>    const s1 = Symbol();
>   console.log(String(s1));// Symbol()
>   console.log(Boolean(s1));// true
>   
>   // 异常：TypeError: Cannot convert a Symbol value to a number
>   // console.log(Number(s1));
>   
>   // TypeError: Cannot convert a Symbol value to a number
>   // console.log(s1+1);
>   
>   // Cannot convert a Symbol value to a string
>   //console.log(s1+"abcdefg");
>   ```
>
> - 如果把Symbol当作一个对象的属性和方法的时候，一定要用一个变量来储存，否则定义的属性和方法没有办法使用
>
>   ```js
>    const userName = Symbol("userName")
>    let obj = {
>        [Symbol()]:"zhangsan",
>        [Symbol()]:function () {
>   
>        },
>        [userName]:"laowang"
>    }
>    console.log(obj[Symbol()]);// undefined
>   console.log(obj[userName]);// laowang
>   ```
>
> - for in 不能遍历出来，可以使用`Object.getOwnPropertySymbols`方法来拿;
>
>   ```js
>   function getKey() {
>       return "a";
>   }
>   const userName = Symbol("userName");
>   const age = Symbol("age");
>   let obj = {
>       a:1,
>       b:2,
>       [userName]:"laowang",
>       [age]:80
>   }
>   for(let key in obj){
>       console.log(key,obj[key]);// 不会输出symbol的属性名，以及值
>   }
>   console.log(Object.getOwnPropertySymbols(obj));// 得到的是一个数组
>   console.log("key:",Object.getOwnPropertySymbols(obj)[0])
>   console.log("value:",obj[Object.getOwnPropertySymbols(obj)[0]]);
>   console.log(obj.a);// 1
>   console.log(obj["a"]);// 1
>   console.log(obj[getKey()]);// 1
>   
>   // 如果查看数据时，在__proto__当中拥有属性Symbol(Symbol.iterator)时，可以使用for of
>   for(let key of Object.getOwnPropertySymbols(obj)){
>       console.log(key,obj[key]);
>   }
>   ```

### 9.2、`BigInt`

> - JavaScript 所有数字都保存成 64 位浮点数，这给数值的表示带来了两大限制。一是数值的精度只能到 53 个二进制位（相当于 16 个十进制位），大于这个范围的整数，JavaScript 是无法精确表示的，这使得 JavaScript 不适合进行科学和金融方面的精确计算。二是大于或等于2的1024次方的数值，JavaScript 无法表示，会返回`Infinity`。
>
>   ```js
>   console.log(Math.pow(2,53));//9007199254740992
>   console.log(Math.pow(2,53)+1); //9007199254740992
>   console.log(Math.pow(2,53) === Math.pow(2,53)+1);// true
>   console.log(Math.pow(2,1024));// Infinity
>   ```
>
> - 引入了一种新的数据类型 BigInt（大整数），来解决这个问题。BigInt 只用来表示整数，没有位数的限制，任何位数的整数都可以精确表示。
>
>   ```js
>   {
>       let a = 9887765443;
>       let b = 9887765543;
>       console.log(a*b);// 97767906444561530000 结果不准确
>   }
>   // BigInt:整数后增加n
>   {
>       let a = 9887765443n;
>       let b = 9887765543n;
>       console.log(a*b,typeof a,typeof b);// 97767906444561530549n "bigint" "bigint"
>   }
>   // number转bigInt
>   {
>       let a = 10000;
>       let an = BigInt(a);
>       console.log(an,typeof an);// 10000n "bigint"
>   }
>   // bigInt转为number
>   {
>       let an = 999n;
>       let a = Number(an);
>       console.log(a,typeof a);// 999 "number"
>   }
>   
>   ```
>
> - 为了与 Number 类型区别，BigInt 类型的数据必须添加后缀`n`。
>
>   ```js
>   let numN = 123n;
>   console.log(typeof numN);// "bigint"
>   ```
>
> - BigInt 与普通整数是两种值，它们之间并不全等。
>
>   ```js
>   {
>       let num = 1000;
>       let numN = 1000n;
>       console.log(num == numN);// true
>       console.log(num === numN);// false
>   }
>   ```
>
> - `typeof`运算符对于 BigInt 类型的数据返回`bigint`。
>
>   ```js
>   {
>       let n2 = 0b111;
>       let n8 = 0o765;
>       let n16 = 0xabc;
>       console.log(n2,n8,n16);// 7 501 2748
>       console.log(BigInt(n2));// 7n
>       console.log(BigInt(n8));// 501n
>       console.log(BigInt(n16));// 2748n
>   
>       console.log(BigInt("12"));// 12n
>       console.log(BigInt("0xabc"));// 2748n
>   }
>   ```

## 十、新增数据结构

### 10.1、Set

#### 10.1.1、什么是Set

> - ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
>
>   ```js
>   const s3 = new Set([1,2,3,4,5,6,4,2,1]);
>   console.log(s3);// 1 2 3 4 5 6
>   ```
>
> - `Set`本身是一个构造函数，用来生成 Set 数据结构。
>
>   ```js
>    const s1 = new Set();
>   ```
>
> - `Set`函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化
>
>   ```js
>   const s2 = new Set([1,2,3,4,5]);
>   console.log(s2);// 1 2 3 4 5
>   ```

#### 10.1.2、 Set的属性及方法

> - size 返回Set的长度
> - add 添加某个值，返回 Set 结构本身。
> - delete 删除某个值，返回一个布尔值，表示删除是否成功。
> - has 返回一个布尔值，表示该值是否为`Set`的成员
> - clear 清除所有成员，没有返回值。
> - `keys()`：返回键名的遍历器,由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以`keys`方法和`values`方法的行为完全一致。
> - `values()`：返回键值的遍历器
> - `entries()`：返回键值对的遍历器
> - `forEach()`：使用回调函数遍历每个成员
>
> ```js
> const s1 = new Set([1,2,3,4,5,6,7,8,8]);
> // 1、size
> console.log(s1.size);// 8
> // 2-add
> s1.add(10);
> s1.add(6);// 如果添加的内容，之前元素已经包含，那么不会添加。
> console.log(s1.size);// 9
> // 3-delete
> s1.delete(6);
> console.log(s1);// 1,2,3,4,5,7,8,10
> // 4- has
> console.log(s1.has(6));// false
> console.log(s1.has(10));// true
> // 5-clear
> // s1.clear();
> // console.log(s1.size);// 0
> 
> // 6- for of
> // for(let key of s1){
> //     console.log(key);// 1 2 3 4 5 7 8 10
> // }
> 
> // 7-values
> // for(let value of s1.values()){
> //     console.log(value);//  1 2 3 4 5 7 8 10
> // }
> 
> // 8-entries
> // for(let [value] of s1.entries()){
> //     console.log(value);// 1 2 3 4 5 7 8 10
> // }
> 
> // 9-keys
> // for(let key of s1.keys()){
> //     console.log(key);// //  1 2 3 4 5 7 8 10
> // }
> 
> // 10-forEach
> s1.forEach((item,index,s)=>{
>     console.log(item,index,s);
> })
> ```

#### 10.1.3、Set的其他使用

> ```js
> // 1-数组的去重
> {
>  let arr = [1,2,3,4,4,3,2,1];
>  const s1 = new Set(arr);
>  
>   // 可以通过... 将set转为数组
>  console.log([...s1]);
>  // 可以通过Array.from将set转为数组
>  console.log(Array.from(s1))
> 
>  // 数组去重简写：
>  console.log([...new Set(s1)]);// [1,2,3,4]
> }
> // 2-字符串去重
> {
>  let str = "hello my name";
>  // console.log(new Set(str));
>  console.log([...new Set(str)].join(""));// helo myna
> }
> // 3、两个数组之间的交集
> {
>  let arr = [1,2,3,4,5,6,7,8,8,7,6,4,2,1];
>  let arr2 = [4,5,6,7,8,9,10,9,8,7,6,5];// 4 5 6 7 8
> 
>  // 回顾filter
>  // const result = arr.filter(function (item) {
>  //     return item > 3;
>  // });
>  // console.log(result);// [4,5,6,7,8]
> 
>  // 采用es6:
>  // const result =  arr.filter(item=>item>3);
>  // console.log(result);// [4,5,6,7,8]
> 
>  // 交集：
>  // const result = arr.filter(item=>arr2.includes(item));// [4,5,6,7,8]
>  // console.log(result)
> 
>  // 采用Set进行优化
>  const result = [...new Set(arr)].filter(item=>[...new Set(arr2)].includes(item));
>  console.log(result);// [4, 5, 6, 7, 8]
> 
>  // 将优化的代码解析
>  const s1 = [...new Set(arr)];// 将arr去重
>  const s2 = [...new Set(arr2)];// 将arr2去重
>  const res = s1.filter(item=>s2.includes(item));
>  console.log(res);
> 
>  // 思考：
>  const s3 = [...new Set(arr)];// 将arr去重
>  const s4 = new Set(arr2);// 将arr2去重
>  const res2 = s3.filter(item=>s4.has(item));
>  console.log(res);// [4, 5, 6, 7, 8]
> }
> {
>  // 并集
>  let arr = [1,2,3,4,5,6];
>  let arr2 = [4,5,6,7,8,9];
>  // 合并成一个数组
>  let arr3 = [...arr,...arr2];
>  // 去重
>  let result =[...new Set(arr3)] ;
>  console.log(result);// [1, 2, 3, 4, 5, 6, 7, 8, 9]
> 
>  // 优化：
>  console.log([...new Set([...arr,...arr2])]);//  [1, 2, 3, 4, 5, 6, 7, 8, 9]
> }
> {
>  // 差集：
>  let arr = [1,2,3,4,5,6,7,8,8,7,6,4,2,1];
>  let arr2 = [4,5,6,7,8,9,10,9,8,7,6,5];// 4 5 6 7 8
>  // arr2对arr的差集：
>  // console.log(11111111,arr.filter(item=>!arr2.includes(item)));// 1, 2, 3, 2, 1
>  console.log([...new Set(arr)].filter(item=>!arr2.includes(item)));// 1 2 3
>  // arr与arr2的差集
>  console.log([...new Set(arr2)].filter(item=>!arr.includes(item)));// [9, 10]
> }
> ```

### 10.2、Map

#### 10.2.1、什么是Map

> - JavaScript 的对象（Object），本质上是键值对的集合，但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。
>
>   ```js
>   // 对象的属性都是字符串
>   var box = {
>       a:1
>   }
>   var obj = {
>       userName:"laowang",
>       [box]:"obj"
>   }
>   console.log(obj);// [object Object]: "obj", userName: "laowang"
>   ```
>
> - 为了解决这个问题，ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。
>
> ```js
> // 场景：一般可以用于存储数据。前端的数据缓存。
> // map集合当中的key不限制数据类型
> var box = {
>     a:1
> }
> const m1 = new Map([
>     ["a",1],
>     ["b",2],
>     [box,3]
> ]);
> console.log(m1);
> ```

#### 10.2.2、Map的属性和方法

> - `size`属性返回 Map 结构的成员总数。
> - `set`方法设置键名`key`对应的键值为`value`，然后返回整个 Map 结构。如果`key`已经有值，则键值会被更新，否则就新生成该键。`set`方法返回的是当前的`Map`对象，因此可以采用链式写法。
> - `get`方法读取`key`对应的键值，如果找不到`key`，返回`undefined`。
> - `has`方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。
> - `delete`方法删除某个键，返回`true`。如果删除失败，返回`false`。
> - `clear`方法清除所有成员，没有返回值。
> - `keys()`：返回键名的遍历器。
> - `values()`：返回键值的遍历器。
> - `entries()`：返回所有成员的遍历器。
> - `forEach()`：遍历 Map 的所有成员。
>
> ```js
> const m1 = new Map([["a",1],["b",2]]);
> // 1、size
> console.log(m1.size);// 2
> // 2、set
> let obj = {a:1};
> m1.set("c",12);
> m1.set(obj,13)
> console.log(m1,m1.size);// 4
> 
> // 3、get
> console.log(m1.get("c"));// 12
> console.log(m1.get(obj));// 13
> 
> // 4-has
> console.log(m1.has("a"));// true
> console.log(m1.has("b"));// true
> console.log(m1.has("c"));// true
> console.log(m1.has("d"));// false
> console.log(m1.has(obj));// true
> 
> // 5-delete
> // m1.delete(obj);
> // console.log(m1.has(obj));// false
> 
> // 6-clear
> // m1.clear();
> // console.log(m1.size);// 0
> 
> // 7-for-of
> // console.log(m1);
> // for(let [key,value] of m1){
> //     console.log(key,value);
> // }
> 
> // 8-keys
> // for(let key of m1.keys()){
> //     console.log(key);
> // }
> 
> // 9-values
> // for(let value of m1.values()){
> //     console.log(value);
> // }
> 
> // 10-entries
> for(let [key,value] of m1.entries()){
>     console.log(key,value);
> }
> ```

## 十一、iterator

### 11.1、什么是iterator

> - JavaScript 原有的表示“集合”的数据结构，主要是数组（`Array`）和对象（`Object`），ES6 又添加了`Map`和`Set`。这样就有了四种数据集合，用户还可以组合使用它们，定义自己的数据结构，比如数组的成员是`Map`，`Map`的成员是对象。这样就需要一种统一的接口机制，来处理所有不同的数据结构。
> - 遍历器（Iterator）就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。
> - Iterator 的作用有三个：一是为各种数据结构，提供一个统一的、简便的访问接口；二是使得数据结构的成员能够按某种次序排列；三是 ES6 创造了一种新的遍历命令`for...of`循环，Iterator 接口主要供`for...of`消费。

### 11.2、iterator

> - 在ES6中，只要一种数据结构具有了Symbol.iterator属性，那么就认为是可以迭代的
>
> ```js
> const arr = [1,2,3,4];
> // arr原型链当中拥有Symbol.iterator属性，属性的类型是一个函数。
> // console.log(arr);
> // console.log(arr[Symbol.iterator]);// 是一个函数
> 
> // iterator本质是一个指针对象(result)。指针初始指向第一个元素。
> // next()函数指向的是第一个元素。如果继续执行next()会指向下一个元素
> const result = arr[Symbol.iterator]();
> console.log(result.next());// {value: 1, done: false}
> console.log(result.next());// {value: 2, done: false}
> console.log(result.next());// {value: 3, done: false}
> console.log(result.next());// {value: 4, done: false}
> console.log(result.next());// {value: undefined, done: true}
> console.log(result.next());// {value: undefined, done: true}
> console.log(result.next());// {value: undefined, done: true}
> console.log(result.next());// {value: undefined, done: true}
> console.log(result.next());// {value: undefined, done: true}
> ```
>
> 让对象拥有for of:
>
> ```js
> Object.prototype[Symbol.iterator] = function () {
>     let index =0;
>     let keys = Object.keys(this);// [a,b]
>     let values = Object.values(this);// [1,2]
>     return {
>         // {value:a,done:false}
>         // {value:b,done:false}
>         // {value:undefined,done:true}
>         next(){
>             return {
>                 value:keys[index],
>                 done:index++>=keys.length?true:false// 3>2?true:false
>             }
>         }
> 
>     }
> }
> const obj = {
>     a:1,
>     b:2
> }
> for(let key of obj){
>     console.log(key);
> }
> ```
>
> 使用：
>
> ```js
> var obj = {
>     arr:["zhangsan","lisi","wangwu","zhaoliu","shenqi"],
>     arr2:["qianba","lijiu"],
>     [Symbol.iterator](){
>         console.log(11111111,this);
>         let index = 0;
>         const arr3 = [...this.arr,...this.arr2];
>         return {
>             next(){
>                 return {
>                     value:arr3[index],
>                     done:index++>=arr3.length?true:false
>                 }
>             }
>         }
>     }
> }
> 
> for(let value of obj){
>     console.log(value)
> }
> ```
>
> 
>
> - 在ES6中，很多数据结构都部署了iterator接口(Array,set,Map,string)
>
> - 应用场景：
>   - 解构赋值的时候默认调用iterator接口
>
>  ```js
> const arr = [1,2,3,4];
> const [a,b,c,d] = arr;
>  ```
>
>   - 扩展运算符使用的时候页默认调用iterator接口
>
>  ```js
> const arr = [1,2,3,4];
> const {a,...b} = arr;
>  ```
>
>   - for of 使用的是iterator接口
>
>  ```js
> var arr = [1,2,3,4];
> for(let value of arr){
>     console.log(value);
> }
>  ```
>
>   - 对象是没有部署Iterator接口
>
>  ```js
> var obj = {a:1};
> for(let key of obj){};// TypeError: obj is not iterable
>  ```
>
> 

## 十一、Promise(后面讲)

## 十二、`ES6`模块化（后面讲）

## 十三、class（后面讲）

