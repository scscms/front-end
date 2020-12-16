# 纯CSS3统计饼图、圆环图<sup>shine</sup>

```html
<div class="pie" data-pre="89"></div>
<div class="pie" data-ring data-pre="30"></div>
```
```css
.pie {
    --high-color: #06d9f5;
    --bg-color: #9e9696;
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: var(--bg-color);
    background-image: linear-gradient(to right, transparent 50%, var(--high-color) 0);
}

.pie::before {
    content: '';
    display: block;
    margin-left: 50%;
    height: 100%;
    border-radius: 0 100% 100% 0/50%;
    background-color: var(--bg-color);
    transform-origin: left;
}

.pie::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "" attr(data-pre) "%";
    height: 80%;
    width: 80%;
    margin: 10%;
    border-radius: 50%;
    vertical-align: middle;
    font-size: 40px;
    color: red;
    line-height: 230px;
    text-align: center;
}

.pie[data-ring]::after {
    background-color: #fff;
}
```
为了避免加入大量css代码，使用js脚本注入样式
```js
    let s = document.styleSheets[0]
    for (let i = 0; i <= 100; i++) {
        s.addRule('.pie[data-pre="' + i + '"]::before', 'background-color: var(--' + (i > 50 ? 'high' : 'bg') + '-color);transform: rotate(' + (i % 50 * 3.6).toFixed(0) + 'deg)');
    }
```
