# CANVAS画布学习<sup>shine</sup>

### canvas.getContext("2d") 属性

- canvas: canvas // HTMLCanvasElement对象
- fillStyle: "#ffff00" // 填充样式
- filter: "none" // 滤镜属性
- font: "10px sans-serif"
- textAlign: "start" // 对齐方式center|end|left|right|start
- textBaseline: "alphabetic" //基线对齐方式 alphabetic|top|hanging|middle|ideographic|bottom
- globalAlpha: 1 // 设置图形和图片透明度的属性
- globalCompositeOperation: "source-over" // 设置或返回源图像与目标图像的绘制模式(见下面)
- imageSmoothingEnabled: true // 设置或返回图片是否平滑
- imageSmoothingQuality: "low" // 设置或返回图片质量 low|medium|high
- lineCap: "butt" //线帽　butt(默认)平直 round圆形 square正方形
- lineDashOffset: 0 //设置虚线偏移量的属性 与setLineDash相关
- lineJoin: "miter" //线条交汇边角样式　bevel斜角　round圆角　miter尖角(默认)
- lineWidth: 1 //设置图形轮廓线宽度
- miterLimit: 10 //最大斜接长度(只有当lineJoin="miter"时有效)为了避免斜接长度过长
- shadowBlur: 0 //阴影模糊度
- shadowColor: "rgba(0, 0, 0, 0)" //阴影颜色样式
- shadowOffsetX: 0 //阴影x轴偏移量
- shadowOffsetY: 0 //阴影y轴偏移量
- strokeStyle: "#ff0000" //设置图形轮廓线的颜色样式

- save() 	//保存当前环境的状态
- restore() 	//返回之前保存过的路径状态和属性

```javascript
    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.shadowBlur = 10; //阴影的模糊级别
    ctx.shadowColor = "#ddd"; //阴影的颜色
    ctx.shadowOffsetX = 20;　//阴影与形状的水平距离
    ctx.shadowOffsetY = 20; //阴影与形状的垂直距离
    ctx.fillStyle = "red";　//设置填充的颜色、渐变或模式[color|gradient|pattern]
    ctx.fillRect(20, 20, 100, 80); //填充的矩形
```

```javascript
//设置线性渐变，可以水平或者垂直
let my_gradient = ctx.createLinearGradient(0,0,0,170);
my_gradient.addColorStop(0,"black");
my_gradient.addColorStop(1,"white");
ctx.fillStyle = my_gradient;
```

```javascript
//设置放射状/圆形渐变进行填充
let grd = ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");
```

```javascript
//在水平和垂直方向重复图像
let img = document.getElementById("lamp");
let pat = ctx.createPattern(img,"repeat");//支持repeat、repeat-x、repeat-y、no-repeat
ctx.fillStyle = pat;
```

```javascript
ctx.beginPath();//起始一条路径，或重置当前路径
ctx.lineWidth = 10; //线条宽度
ctx.lineCap = "round"; //线帽　butt(默认)平直 round圆形 square正方形
ctx.lineJoin = "round"; //线条交汇边角样式　bevel斜角　round圆角　miter尖角(默认)
ctx.miterLimit = 5;//最大斜接长度(只有当lineJoin="miter"时有效)为了避免斜接长度过长
ctx.moveTo(20,20);//把路径移动到画布中的指定点，不创建线条
ctx.lineTo(20,200);//添加一个新点，然后在画布中创建从该点到最后指定点的线条。
ctx.closePath();//创建从当前点到开始点的闭合路径，可选。如果使用fill()没闭合会自动执行闭合路径
ctx.stroke(); // 绘制已定义的路径
```

```javascript
//文本
context.fillText(text,x,y,maxWidth); // 在画布上绘制“被填充的”文本
context.strokeText(text,x,y,maxWidth); // 在画布上绘制文本（无填充）
context.measureText(text).width; // 返回包含指定文本宽度的对象
```

```javascript
context.rect(x,y,width,height);//创建矩形
context.fillRect(x,y,width,height);//绘制"被填充"的矩形 fillStyle设置填充色
context.strokeRect(x,y,width,height);//绘制矩形（无填充） strokeStyle设置样式
context.clearRect(x,y,width,height);//在给定的矩形内清除指定的像素
context.quadraticCurveTo(cpx,cpy,x,y);//创建二次贝塞尔曲线
context.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);//创建三次贝塞尔曲线
context.arc(x,y,r,sAngle,eAngle,counterclockwise);//创建弧/曲线（用于创建圆形或部分圆）
context.isPointInPath(x,y);//判断指定的点是否在当前路径范围内
context.scale(scalewidth,scaleheight);//缩放当前绘图至更大或更小
context.translate(x,y);//重新映射画布上的原点 (0,0) 位置
context.transform(a,b,c,d,e,f);//替换绘图的当前转换矩阵(累加式）
context.setTransform(a,b,c,d,e,f);//替换绘图的当前转换矩阵(非累加式）
/*
a 	水平缩放绘图。
b 	水平倾斜绘图。
c 	垂直倾斜绘图。
d 	垂直缩放绘图。
e 	水平移动绘图。
f 	垂直移动绘图。
*/

```
```javascript
//图像
context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height); //向画布上绘制图像、画布或视频
/*
参数    描述
img     规定要使用的图像、画布或视频。
sx      可选。开始剪切的 x 坐标位置。
sy      可选。开始剪切的 y 坐标位置。
swidth 	可选。被剪切图像的宽度。
sheight 可选。被剪切图像的高度。
x       在画布上放置图像的 x 坐标位置。
y       在画布上放置图像的 y 坐标位置。
width 	可选。要使用的图像的宽度。（伸展或缩小图像）
height 	可选。要使用的图像的高度。（伸展或缩小图像）
*/
context.createImageData(width,height); //建新的 ImageData 对象
context.createImageData(imageData);//创建与指定的另一个 ImageData 对象尺寸相同的新 ImageData 对象（不会复制图像数据）
context.getImageData(x,y,width,height);//返回 ImageData 对象，该对象为画布上指定的矩形复制像素数据
context.putImageData(imgData,x,y,dirtyX,dirtyY,dirtyWidth,dirtyHeight);//把图像数据（从指定的 ImageData 对象）放回画布上
/*
参数          描述
imgData 	  规定要放回画布的 ImageData 对象。
x             ImageData 对象左上角的 x 坐标，以像素计。
y 	          ImageData 对象左上角的 y 坐标，以像素计。
dirtyX 	      可选。水平值（x），以像素计，在画布上放置图像的位置。
dirtyY 	      可选。水平值（y），以像素计，在画布上放置图像的位置。
dirtyWidth 	  可选。在画布上绘制图像所使用的宽度。
dirtyHeight   可选。在画布上绘制图像所使用的高度。
*/
canvas.toDataURL(type, encoderOptions); //保存为图片
/*
参数              描述
type             可选  图片格式，默认为 image/png
encoderOptions   可选  在指定图片格式为 image/jpeg 或 image/webp的情况下，可以从 0 到 1 的区间内选择图片的质量。如果超出取值范围，将会使用默认值 0.92。其他参数会被忽略。 
*/
```

### context.globalCompositeOperation
设置或返回源图像与目标图像的绘制模式

[在线示例](http://www.w3school.com.cn/tiy/t.asp?f=html5_canvas_globalcompop_all)

|:---:|---|
|值|描述|
|source-over|默认。在目标图像上显示源图像。|
|source-atop|在目标图像顶部显示源图像。源图像位于目标图像之外的部分是不可见的。|
|source-in|	在目标图像中显示源图像。只有目标图像内的源图像部分会显示，目标图像是透明的。|
|source-out|在目标图像之外显示源图像。只会显示目标图像之外源图像部分，目标图像是透明的。|
|destination-over|在源图像上方显示目标图像。|
|destination-atop|在源图像顶部显示目标图像。源图像之外的目标图像部分不会被显示。|
|destination-in|在源图像中显示目标图像。只有源图像内的目标图像部分会被显示，源图像是透明的。|
|destination-out|在源图像外显示目标图像。只有源图像外的目标图像部分会被显示，源图像是透明的。|
|lighter|显示源图像+目标图像。|
|copy|显示源图像。忽略目标图像。|
|xor|使用异或操作对源图像与目标图像进行组合。|
