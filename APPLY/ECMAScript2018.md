# ECMAScript2018新特性<sup>shine</sup>

### 1. 共享内存和原子

这是一个高级特性，是 JS 引擎的核心增强。

主要的想法是将某种多线程特性引入到 JavaScript 中，让 JS 开发人员可以自己管理内存，编写高性能的并发程序。

这是通过一个叫作 `SharedArrayBuffer` 的全局对象来实现的，这个对象实质上将数据存储在共享内存中。因此，这些数据可以在主 JS 线程和 Web 工作线程之间共享。

### 2. 移除了标记模板字面量限制

首先，我们需要澄清`标记模板字面量`是什么，以便更好地理解这个特性。

在 ES2015+ 中，有一个叫作标记模板字面量的特性，允许开发人员自定义字符串的插值方式。

```js
function greet(hardCodedArray,...replacementArray){
    console.log(hardCodedArray) //['12 ','!']
    console.log(replacementArray) //['abc']
}
let a = 'abc'
let b = greet `12 ${a}!`
```

见以上代码，`hardCodedArray`的值就是标记模板字符串以`${}`为标志分割成的数组，值为\['12 ','!']，而`replacementArray`就是所有`${}`值组成的数组，在此是\['abc']

- 标记字符串字面量的问题

问题是 ES2015 和 ES2016 规范不允许使用转义字符，如“\u”（unicode）、“\x”（十六进制），除非它们看起来像\u00A9或\u{2F804}或\xA9 这样。

如果你有一个标记函数在内部使用了其他领域的规则（如终端的规则），可能需要使用类似\ubla123abla 这样的字符，那么你将会得到一个语法错误。

在 ES2018 中，规则有所放宽，只要标记函数通过一个具有“cooked”属性（无效字符为“undefined”）和“raw”属性（你想要的东西）的对象来返回值，可以允许这种无效的转义字符。

```js
function myTagFunc(str) { 
 return { "cooked": "undefined", "raw": str.raw[0] }
} 

var str = myTagFunc `hi \ubla123abla` //call myTagFunc

console.log(str) // { cooked: "undefined", raw: "hi \\unicode" }
```

### 3. 正则表达式的“.”标志
### 4. RegExp 命名组捕获

有关ES2018正则介绍请见[这里](https://github.com/scscms/RegExp#ecmascript-2018%E6%AD%A3%E5%88%99%E7%9B%B8%E5%85%B3%E6%89%A9%E5%B1%95)

### 5. 对象的剩余属性

剩余运算符...（三个点）允许我们提取尚未提取的 Object 属性。

```js
let {firstName, age, ...remaining } = {
  firstName: 'john',
  lastName: 'smith',
  age: 20,
  height: '174',
  race: 'martian'
}

console.log(firstName) //提取某个属性
console.log(remaining) //提取排除后的属性
```

### 6. 对象的延展属性

延展属性看起来与剩余属性…有点像，不同之处在于，你用它来创建新对象。

提示：延展运算符被用在等号的右侧，而剩余运算符被用在等号的左侧。

```js
let a = {
  firstName: 'john',
  lastName: 'smith'
}
let b = {
  age: 20,
  height: '174'
}

let person = {...a, ...b}
```

### 7. RegExp 后行断言
### 8. RegExp Unicode 属性转义

同样请参见[这里](https://github.com/scscms/RegExp)

### 9. Promise.prototype.finally()

`finally()` 是 Promise 新增的一个实例方法，允许在 resolve 或 reject 之后运行回调，以便清理相关资源。finally 回调没有任何参数，而且无论如何都会被执行。跟try的finally类似。

### 10. 异步迭代

这是一个非常有用的特性。基本上，它让我们可以更轻松地创建异步代码循环！

这个特性添加了一个新的“for-await-of”循环，允许我们在循环中调用返回 promise（或 promise 数组）的异步函数。循环在执行下一步之前会等待每个 Promise 完成。

```js
const promises = [
  new Promise(resolve => resolve(1)),
  new Promise(resolve => resolve(2)),
  new Promise(resolve => resolve(3)),
]

async function test(){
  for await (const obj of promises){
    console.log(obj)
  }
}
test()
```

for后面有没有await是有区别的。
