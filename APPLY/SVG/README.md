# SVG可缩放矢量图<sup>shine</sup>

    SVG 是一种基于 XML 语法的图像格式，全称是可缩放矢量图（Scalable Vector Graphics）。其他图像格式都是基于像素处理的，SVG 则是属于对图像的形状描述，所以它本质上是文本文件，体积较小，且不管放大多少倍都不会失真。

矩形
```xml
<rect x="20" y="20" rx="20" ry="20" width="250" height="250"
 style="fill:blue;stroke:pink;stroke-width:5;opacity:0.9"/>
```
    rx 和 ry 属性可使矩形产生圆角

圆
```xml
<circle cx="100" cy="50" r="40" stroke="black"
stroke-width="2" fill="red"/>
```

椭圆
```xml
<ellipse cx="300" cy="150" rx="200" ry="80"
style="fill:rgb(200,100,50);stroke:rgb(0,0,100);stroke-width:2"/>
```

线条
```xml
<line x1="0" y1="0" x2="300" y2="300"
style="stroke:red;stroke-width:2"/>
```

图形(多边形)
```xml
<polygon points="220,100 300,210 170,250"
style="fill:#cccccc;stroke:#000000;stroke-width:1"/>
```

直线形状
```xml
<polyline points="0,0 0,20 20,20 20,40 40,40 40,60"
style="fill:white;stroke:red;stroke-width:2"/>
```

    与前者区别是首尾不会自动连接

路径
```xml
<path d="M250 150 L150 350 L350 350 Z" />
```
参考：https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths

- M = moveto 将画笔移动到指定的坐标位置
- L = lineto 画直线到指定的坐标位置
- H = horizontal lineto 画水平线到指定的X坐标位置
- V = vertical lineto 画垂直线到指定的Y坐标位置
- C = curveto 三次贝赛曲线
- S = smooth curveto 平滑三次贝赛曲线
- Q = quadratic Belzier curve 二次贝齐尔曲线
- T = smooth quadratic Belzier curveto 平滑二次贝齐尔曲线
- A = elliptical Arc 椭圆弧
- Z = closepath 关闭路径

`注释：以上所有命令均允许小写字母。大写表示绝对定位，小写表示相对定位。`

文本

参考：https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Texts
```xml
<svg width="100" height="100">
    <path id="my_path" d="M 20,20 C 40,40 80,40 100,20" />
    <text x="10" y="50">
        <tspan font-weight="bold" fill="red">This is bold and red</tspan>
        <tspan id="my_path" x="20" y="70" dx="10,20,20" rotate="30" font-weight="bold" fill="red">This</tspan>
        <textPath xlink:href="#my_path" fill="red">This text follows a curve.</textPath>
    </text>
</svg>
```
### SVG 滤镜

高斯模糊
```xml
<svg width="400" height="400">
    <defs>
        <filter id="Gaussian_Blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3"/>
        </filter>
    </defs>
    <ellipse cx="200" cy="150" rx="70" ry="40"
             style="fill:#ff0000;stroke:#000000;stroke-width:2;filter:url(#Gaussian_Blur)"/>
</svg>
```

线性渐变
```xml
<svg width="400" height="400">
    <defs>
        <linearGradient id="orange_red" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1"/>
            <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1"/>
        </linearGradient>
    </defs>
    <ellipse cx="200" cy="190" rx="85" ry="55" style="fill:url(#orange_red)"/>
</svg>
```
`由坐标决定制作的是水平、垂直还是角度渐变`

放射性渐变
```xml
<svg width="400" height="400">
    <defs>
        <radialGradient id="grey_blue" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style="stop-color:rgb(200,200,200);stop-opacity:0"/>
            <stop offset="100%" style="stop-color:rgb(0,0,255);stop-opacity:1"/>
        </radialGradient>
    </defs>
    <ellipse cx="230" cy="200" rx="110" ry="100" style="fill:url(#grey_blue)"/>
</svg>
```
`cx、cy 和 r 属性定义渐变圆，而 fx 和 fy 定义圆心`

放射性渐变
```xml
<svg width="400" height="400">
    <defs>
        <linearGradient id="orange_red" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1"/>
            <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1"/>
        </linearGradient>
    </defs>
    <ellipse cx="200" cy="190" rx="85" ry="55" style="fill:url(#orange_red)"/>
</svg>
```
### 动画
translate(x \[,y]) 平移（在原基础上平移x,y坐标）
rotate(a \[,x,y]) 旋转（旋转的角度,中心点可选）
skewX(a) 向x斜切a度
skewY(a) 向y斜切a度
matrix(a,b,c,d,e,f) 变形

```xml
<rect x="20" y="20" width="250" height="250" style="fill:blue">
<animate attributeType="CSS" attributeName="opacity" 
from="1" to="0" dur="5s" repeatCount="indefinite" />
</rect>
```
animate
```xml
<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="50" height="50" fill="blue">
        <animate attributeName="x"
                 calcMode="discrete"
                 values="10;30;150"
                 dur="4s"
                 begin="click"/>
    </rect>
</svg>
```
calcMode属性具有四个属性值，分别如下：
（1）linear：默认属性值，它规定每一个片段平均划分总得动画持续时间，在每一个片段中动画匀速进行。
（2）discrete：此单词翻译成汉语是"非连续"的意思，恰如其名，它同样规定每一个片段平均划分总的动画持续时间，但是并没有动画效果，而是瞬时完成。
（3）paced：(默认值)它规定整个动画效果始终以相同的速度进行，设置keyTimes属性无效。
（4）spline：此属性值能够让我们自定义动画效果，使用keySplines属性来定义各个动画过渡效。

animateMotion
```xml
<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(40,40)">
        <text id="TextElement" x="0" y="0" style="font-family:Verdana;font-size:24px"> It's SVG!
            <animateMotion path="M 0 0 L 100 100" dur="5s" fill="freeze"/>
        </text>
    </g>
</svg>
```

animateTransform
```xml
<svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">
    <polygon points="60,30 90,90 30,90">
        <animateTransform attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          from="0 60 70"
                          to="360 60 70"
                          dur="10s"
                          repeatCount="indefinite"/>
    </polygon>
</svg>
```

### 综合

```xml
<svg width="140" height="64" viewBox="0 0 140 64" xmlns="http://www.w3.org/2000/svg" fill="#fff">
    <g id="hart">
        <path d="M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z" />
    </g>
    <use transform="rotate(-15) scale(0.8 0.8)" x="-40" y="20" xlink:href="#hart">
        <animate attributeName="fill-opacity"
                 begin="0s" dur="1.5s"
                 values="0.5;1;0.5"
                 calcMode="linear"
                 repeatCount="indefinite" />
    </use>
    <use transform="rotate(15) scale(0.8 0.8)" x="70" y="-25" xlink:href="#hart">
        <animate attributeName="fill-opacity"
                 begin="0s" dur="1.5s"
                 values="0.5;1;0.5"
                 calcMode="linear"
                 repeatCount="indefinite" />
    </use>
</svg>
```

### 图形的CSS属性

fill            	设置图形的填充颜色            
fill-opacity        设置图形填充颜色的透明度            
fill-rule           设置图形的填充规则            
marker            	设置这个图形上沿直线（边）使用的marker            
marker-start        设置这个图形上沿直线（边）使用的开始marker            
marker-mid          设置这个图形上沿直线（边）使用的中间marker            
marker-end          设置这个图形上沿直线（边）使用的结束marker            
stroke            	设置图形的描边颜色            
stroke-dasharray    设置使用虚线来对图形进行描边            
stroke-dashoffset   设置图形描边虚线的偏移值            
stroke-linecap      设置描边线条线头的类型。可选择有round, butt 和 square            
stroke-miterlimit   设置描边的斜接限制            
stroke-opacity      设置描边的透明度            
stroke-width        设置描边的宽度            
text-rendering      设置描边的text-rendering属性     

alignment-baseline	设置文本在x和y坐标系中的对齐方式            
baseline-shift      设置文本的基线偏移            
dominant-baseline	设置文本的主导基线            
glyph-orientation-horizontal	设置水平字形取向            
glyph-orientation-vertical	设置垂直字形取向            
kerning    	设置文本的字距调整    

stop-color           设置渐变中stop元素的停止颜色            
stop-opacity         设置渐变中stop元素的停止透明度  

### 在线教程
http://www.softwhy.com/qiduan/SVG_source/index.php
