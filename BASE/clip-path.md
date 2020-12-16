# clip-path CSS 属性<sup>shine</sup>

clip-path CSS 属性可以创建一个只有元素的部分区域可以显示的剪切区域。区域内的部分显示，区域外的隐藏。
clip-path的属性值可以是以下几种：
###1.inset； 将元素剪裁为一个矩形，

    定义：clip-path: inset(<距离元素上面的距离>,<距离元素右面的距离> ,<距离元素下面的距离>,<距离元素左面的距离>,<圆角边框> ），括号内的值类似于margin、padding值的写法，可以写一个值，也可以写多个值。
    使用：clip-path: inset(2px 2px 20px 20px round 10px);
```css
.divTwo{
   margin: 50px;
   width: 80px;
   height: 80px;
   background-color: red;
   border: 1px solid #000;
   clip-path: inset(2px 2px 20px 20px round 10px);
   }
 ```

###2.　circle；将元素剪裁成一个圆

    定义：clip-path: circle(圆的半径 at 圆心)
    使用：clip-path: circle(40px at 50% 50%)

###3.　ellipse；将元素剪裁成一个椭圆

    定义：clip-path: ellipse(圆的水平半径 圆的垂直半径 at 圆心)
    使用：clip-path: ellipse(20px 40px at 50% 50%)

###4.　polygon；将元素剪裁成一个多边形，这里其实就是描点，多点连线，最少三个点，以距离左上角的长度为单位，跟canvas画布很像，下面以三角形为例

    定义：clip-path: polygon(<距离左上角的X轴长度  距离左上角Y轴的长度>，<距离左上角的X轴长度  距离左上角Y轴的长度>，<距离左上角的X轴长度  距离左上角Y轴的长度>)
    使用：clip-path: polygon(40px 0px, 0px  80px, 80px 80px);

## 应用（五角星）

```css
.star{
      width:18em;
      height:18em;
      clip-path: polygon(9em 0em, 10.76336em 6.57295em,
      17.55951em 6.21885em, 11.85317em 9.92705em,
      14.29007em 16.28115em, 9em 12em,
      3.70993em 16.28115em, 6.14683em 9.92705em,
      0.44049em 6.21885em, 7.23664em 6.57295em);
      background: conic-gradient(#ff0103 0deg 36deg, #fd7776 36deg 72deg, #ff3133 72deg 108deg, #fa5050 108deg 144deg, #fe9496 144deg 180deg, #fe3030 180deg 216deg, #ff8e8e 216deg 252deg, #fd1b1c 252deg 288deg, #ff757a 288deg 324deg, #fab3af 324deg 360deg);
    }
```
