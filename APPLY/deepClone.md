# 对象深克隆（拷贝）<sup>shine</sup>

### 什么是深克隆?

js对象是复合类型，存储于堆里。当多个变量指向同一对象时，任意一个变量修改了此对象，其他变量都是返回已经被修改过的对象。深克隆就是：把一个对象里的东西一模一样地复制到另一个对象里，因这两个对象分别放在内存的不同地方，所以修改时互不影响。如果没有完全分开地复制一个对象叫浅克隆。比如`Object.assign`就是一个浅克隆方法。

### 深克隆常用方法

####　jQuery.extend()方法

 >代码省略
 >
####　简易方法

```
function deepClone(obj){
    let objClone = Array.isArray(obj)?[]:{};
    if(obj && typeof obj === "object"){
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                let val = obj[key];
                objClone[key] = val && typeof val === "object" ? deepClone(val):val;
            }
        }
    }else{
        return obj;
    }
    return objClone;
}

```

####　JSON方法

```
let obj = {};
let objClone = JSON.parse(JSON.stringify(obj)); //天生就是深克隆的料
```

---

### 深克隆使用浏览器API实现方法

#### MessageChannel（消息）

```
(async function(){
    function structuralClone(obj) {
        return new Promise(resolve => {
            const {port1, port2} = new MessageChannel();
            port2.onmessage = ev => resolve(ev.data);
            port1.postMessage(obj);
        });
    }
    const obj = {a:[1,2]};
    const clone = await structuralClone(obj);
}())
```

#### history API（历史）

```
function structuralClone(obj) {
    const oldState = history.state;
    history.replaceState(obj, document.title);
    const copy = history.state;
    history.replaceState(oldState, document.title);
    return copy;
}
const obj = {a:[2,3]};
const clone = structuralClone(obj);
```

#### Notification API（通知）

```
function structuralClone(obj) {
    return new Notification('', {data: obj}).data;
}
const obj = {a:[2,3]};
const clone = structuralClone(obj);
```
