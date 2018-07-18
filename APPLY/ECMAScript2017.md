# ECMAScript2017新特性<sup>shine</sup>

##什么是ES8?

	ES8 是 ECMA-262 标准第 8 版的简称，从 ES6 开始每年发布一个版本，以年份作为名称，因此又称 ECMAScript 2017，简称 ES2017。

### 1. String padding

新增了 `String.prototype.padStart` 和 `String.prototype.padEnd` 两个函数，用于在字符串开头或结尾添加填充字符串。函数的声明如下：

```
String.prototype.padStart( maxLength [ , fillString ] )
String.prototype.padEnd( maxLength [ , fillString ] )
```

其中第一个参数是目标长度；第二个参数是填充字符串，默认是空格。示例：

```
'scs'.padStart(2);          // 'scs'
'scs'.padStart(5);          // '  scs'
'scs'.padStart(6, 'woof');  // 'wooscs'
'scs'.padStart(14, 'wow');  // 'wowwowwowwoscs'
'scs'.padStart(7, '0');     // '0000scs'

'scs'.padEnd(2);          // 'scs'
'scs'.padEnd(5);          // 'scs  '
'scs'.padEnd(6, 'woof');  // 'scswoo'
'scs'.padEnd(14, 'wow');  // 'scswowwowwowwo'
'scs'.padEnd(7, '6');     // 'scs6666'
```

典型的应用场景:

使用 padStart 进行时间格式化。

```
'8:00'.padStart(5, '0');  // '08:00'
'18:00'.padStart(5, '0');  // '18:00'
'12'.padStart(10, 'YYYY-MM-DD'); // "YYYY-MM-12"
'09-12'.padStart(10, 'YYYY-MM-DD'); // "YYYY-09-12"
```

### 2. Object.values & Object.entries

这两个静态方法是对原有的 `Object.keys()` 方法的补充。

```
const obj = {
    x: 'xxx',
    y: 1
};
Object.keys(obj); // ['x', 'y']
```

- 2.1 Object.values

静态方法 `Object.values()` 获取对象的所有可遍历属性的值，返回一个数组。示例如下：

```
// 基本用法
const obj = {
    x: 'xxx',
    y: 1
};
Object.values(obj); // ['xxx', 1]

// 数组可以看做键为下标的对象
// ['e', 's', '8'] -> { 0: 'e', 1: 's', 2: '8' }
const obj = ['e', 's', '8'];
Object.values(obj); // ['e', 's', '8']

// 字符串可以看做键为下标的对象
// 'es8' -> { 0: 'e', 1: 's', 2: '8' }
Object.values('es8'); // ['e', 's', '8']

// 如果是纯 number 型的键值，则返回值顺序根据键值从小到大排列
const obj = { 10: 'xxx', 1: 'yyy', 3: 'zzz' };
Object.values(obj); // ['yyy', 'zzz', 'xxx']
```

- 2.2 Object.entries

静态方法 `Object.entries` 获取对象的虽有可遍历属性的键值对，以 [key, value] 数组的形式返回，顺序和 Object.values() 一致。 

```
// 基本用法
const obj = {
    x: 'xxx',
    y: 1
};
Object.entries(obj); // [['x', 'xxx'], ['y', 1]]

// 数组可以看做键为下标的对象
// ['e', 's', '8'] -> { 0: 'e', 1: 's', 2: '8' }
const obj = ['e', 's', '8'];
Object.entries(obj); // [['0', 'e'], ['1', 's'], ['2', '8']]

// 字符串可以看做键为下标的对象
// 'es8' -> { 0: 'e', 1: 's', 2: '8' }
Object.entries('es8'); // [['0', 'e'], ['1', 's'], ['2', '8']]

// 如果是纯 number 型的键值，则返回值顺序根据键值从小到大排列
const obj = { 10: 'xxx', 1: 'yyy', 3: 'zzz' };
Object.entries(obj); // [['1', 'yyy'], ['3', 'zzz'], ['10': 'xxx']]
```

知识点展开：`for...in` 和 `for...of` 循环
上述的 `Object.keys()`, `Object.values()`, `Object.entries()` 通常用来遍历一个对象，除了这三个方法外，常用的还有 `for...in` 和 `for...of + Object.keys()` 循环

使用 for...in 遍历

```
const obj = {
    x: 'xxx',
    y: 1
};
for (let key in obj) {
    console.log(key);
}
```

使用 for...of + Object.keys() 遍历

```
const obj = {
    x: 'xxx',
    y: 1
};
for (let key of Object.keys(obj)) {
    console.log(key);
}
```

上述例子中两种遍历方式等价。但在更复杂的情况下，这两种方式的结果会不一样。`for...in` 循环会遍历对象的可枚举属性，包括原型链上继承的属性，而 Object.keys() 不会遍历继承的属性。

### 3. Object.getOwnPropertyDescriptors

静态方法 `Object.getOwnPropertyDescriptors` 用于获取对象的属性描述符，该属性必须是对象自己定义而不是继承自原型链。结果中包含的键可能有 configurable、enumerable、writable、get、set 以及 value。

```
const obj = { es8: 'hello es8' };
Object.getOwnPropertyDescriptor(obj, 'es8');
// {
//   configurable: true,
//   enumerable: true,
//   value: "hello es8"
//   writable: true
// }
```

### 4. Trailing commas in function

ES8 标准中允许函数参数列表与调用中的尾部逗号，该特性允许我们在定义或者调用函数时添加尾部逗号。

```
function fun(var1, var2, var3,) {
    // do something
}
fun(10, 20, 30,);
```

### 5. Async functions

为解决异步调用引入的 `async` 函数，由于 Babel 和 Nodejs 很早就支持 `async` 和 `await` 关键字，这个特性应该是最众望所归、最应用广泛的 ES8 特性了。

```
function otherAsyncFunc(){
    return Promise.resolve(123);
}
async function asyncFunc() {
    const result = await otherAsyncFunc();
    console.log(result);
}

// 等价于:
function asyncFunc() {
    return otherAsyncFunc().then(result => {
        console.log(result);
    });
}
```