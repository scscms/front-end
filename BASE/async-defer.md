# 浅谈script标签中的async和defer <sup>shine</sup>

直接使用script脚本的话，html会按照顺序来加载并执行脚本，在脚本加载&执行的过程中，会阻塞后续的DOM渲染。

- 普通script
    >浏览器会阻塞DOM来加载脚本，并按顺序执行脚本。
- async: 异步加载
    >浏览器会异步的下载文件并且不会阻塞DOM的渲染。脚本加载完后在允许的情况下立刻执行。与顺序、DOMContentLoaded事件无关。
- defer: 延期执行
    >浏览器会异步的下载文件并且不会阻塞DOM的渲染。defer脚本会在文档渲染完毕后，DOMContentLoaded事件调用前，按照顺序执行所有的脚本。
    
async、defer都适用于文档行内脚本，比如：

```html
<script async>console.log(1)</script>
或者：
<script>
var script = document.createElement('script');
script.innerHTML = "console.log(1)";
document.body.appendChild(script);
</script>
```
但可以这样：
```javascript
var blob = new Blob(["console.log(1)"]);
var script = document.createElement('script');
var url = URL.createObjectURL(blob);
script.onload = script.onerror = function() { URL.revokeObjectURL(url); };
script.src = url;
document.body.appendChild(script);
```

[扩展阅读](https://www.cnblogs.com/jiasm/p/7683930.html)
