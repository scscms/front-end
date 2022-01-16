# Web worker封装()<sup>shine</sup>

在此我们不讲worker基础知识，如果仍不了解worker的可以参考[Web Worker 使用教程](http://www.ruanyifeng.com/blog/2018/07/web-worker.html)
现在我们项目基本都是单品页面，对于使用worker有一定的难度，因为worker文件需要独立建立，这对引用和管理都不方便。因此本文件主要就是通过Blob结合URL.createObjectURL生成内存blob链接，避免worker文件建立问题。

```js
function asyncWorker(fun, data) {
    return new Promise((resolve, reject) => {
        if (typeof fun !== 'function') {
            return reject('worker必须是函数')
        }
        const entire = fun.toString()
        const body = entire.substring(entire.indexOf('{') + 1, entire.lastIndexOf('}'))
        const url = window.URL.createObjectURL(new Blob([body]))
        const worker = new Worker(url)
        worker.onmessage = function (e) {
            resolve(e.data)
            worker.terminate()
        }
        worker.onerror = function (e) {
            reject(e)
            worker.terminate()//关闭worker
        }
        worker.postMessage(data)
    })
}

// 调用示例
asyncWorker(function () {
    self.addEventListener('message', e => {
        setTimeout(() => {
            postMessage(`耗时计划返回：${e.data}`)
            self.close() //适时关闭worker进程
        }, Math.randoms() * 2000)
    }, false)
}, 123).then(d => {
    console.log(d)
}).catch(e => {
    console.error(e)
})
```

以上示例对于一次性耗时计算，想借用web worker能力已经基本足够了。但是有些时间我们需要反复提供数据反复计算结果，并在页面退出时能手动关闭web worker能力。

```js
class ClassWorker {
    constructor(fun, callBack) {
        if (typeof fun !== 'function') {
            throw Error('worker必须是函数')
        }
        if (typeof callBack !== 'function') {
            throw Error('callBack必须是函数')
        }
        const entire = fun.toString()
        const body = entire.substring(entire.indexOf('{') + 1, entire.lastIndexOf('}'))
        this._w = new Worker(window.URL.createObjectURL(new Blob([body])))
        this._s = 'working'
        this._c = callBack
        this._w.onmessage = e => {
            this._c(null, e.data)
        }
        this._w.onerror = e => {
            this._c(e)
            this._s = 'error'
            this._w.terminate()
        }
    }

    postMsg(data) {
        this._s === 'working' ? this._w.postMessage(data) : this._c(new Error(this._s))
    }

    close() {
        this._s = 'closed'
        this._w.terminate()
    }
}

// 调用示例
const worker = new ClassWorker(function () {
    self.addEventListener('message', e => {
        setTimeout(() => {
            postMessage(`耗时计划返回：${e.data}`)
        }, Math.randoms() * 2000)
    }, false)
}, (err, data) => {
    if (err) {
        console.log(err.message)
    } else {
        console.info(data)
    }
});
worker.postMsg([1,2]); // 可反复更新数据
worker.close(); // 适时关闭
```
