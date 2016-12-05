# GitHub README.md 语法<sup>shine</sup>
大标题
===
    大标题类似html中的<h1>第一行写标题，第二行紧跟三个=即可
中标题
---
    大标题类似html中的<h2>第一行写标题，第二行紧跟三个-即可
如果你只输入了等于号=，但其上方无文字，那么就只会显示一条直线。如果上方有了文字，但你又只想显示一条横线，而不想把上方的文字转义成大标题的话，那么你就要在等于号=和文字直接补一个空行。
>补空行：是很常用的用法，当你不想上下两个不同的布局方式交错到一起的时候，就要在两种布局之间补一个空行。
如果你只输入了短横线（减号）-，其上方无文字，那么要显示直线，必须要写三个减号以上。不过与等于号的显示效果不同，它显示出来时虚线而不是实线。同减号作用相同的还有星号*和下划线_，同样的这两者符号也要写三个以上才能显示一条虚横线。

___
---
***

除此以外，关于标题还有等级表示法，分为六个等级，显示的文本大小依次减小。不同等级之间是以井号  #  的个数来标识的。一级标题有一个 #，二级标题有两个# ，以此类推。
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
## 显示空格的小Tip

　　默认的文本行首空格都会被忽略的，但是如果你想用空格来排一下版的话怎么办呢，有个小技巧，那就是把你的输入法由半角改成全角就OK啦。

## 文本块

    使用一个Tab符实现文本块，可以多行哦。
    
>高亮显示

如果你想使一段话中部分文字`高亮显示`，来起到突出强调的作用，那么可以把它用 \`包围起来。注意这不是单引号，而是Tab上方，数字1左边的按键（`注意使用英文输入法`）。
    
>文字超链接

给一段文字加入超链接的格式是这样的 \[ 要显示的文字 \]( 链接的地址 "悬停显示"),其`悬停显示`文本可省略。比如：\[我的网站www.scscms.com](http\://www.scscms.com/ "悬停显示scscms")
[我的网站www.scscms.com](http://www.scscms.com/ "悬停显示scscms")

>插入图片

即 叹号! + 方括号\[ \] + 括号( ) 其中叹号里是图片的URL。如：\!\[scscms\](http\://www.scscms.com/scs_img/logo.png "悬停显示")
![scscms](http://www.scscms.com/scs_img/logo.png "欢迎访问")

>使用GitHub仓库里的图片

有时候我们想显示一个GitHub仓库(或者说项目)里的图片而不是一张其他来源网络图片，因为其他来源的URL很可能会失效。那么如何显示一个GitHub项目里的图片呢？
其实与上面的格式基本一致的，所不同的就是括号里的URL该怎么写。https://github.com/你的用户名/你的项目名/raw/分支名/存放图片的文件夹/该文件夹下的图片。如：https://github.com/scscms/es6/raw/master/img/pic.gif
>插入图片链接

\[\!\[name]](http\://www.scscms.com/   \[name]:http\://www.scscms.com/scs_img/logo.png "欢迎访问"
如果不嫌麻烦直接上html代码即可

```html
<a href="http://www.scscms.com/" target="_blank">
    <img src="http://www.scscms.com/scs_img/logo.png" alt="欢迎访问" />
</a>
```

>特殊字符处理

有一些特殊字符如<,#,[等,只要在特殊字符前面加上转义字符\即可，学编程的你都懂。

## 插入代码片段

我们需要在代码的上一行和下一行用\``` 标记。\``` 不是三个单引号，而是数字1左边，Tab键上面的键。要实现语法高亮那么只要在 \``` 之后加上你的编程语言即可（忽略大小写）。c++语言可以写成c++也可以是cpp。看代码：
```Java
public static void main(String[]args){} //java
```
```javascript
document.getElementById("id").innerHTML = "hello world"; //javascript
```
```php
$str = "hello world";
echo $str;
```
### 圆点列表
* 昵称：果冻虾仁
* 别名：隔壁老王
* 英文名：Jelly
 
###更多圆点
* 编程语言
    * 脚本语言
        * Python
 
### 复选框列表
- [x] C
- [x] C++
- [x] Java
- [x] Qt
- [x] Android
- [ ] C#
- [ ] .NET
 
## 缩进
### 用于列表
> 数据结构
>> 树
>>> 二叉树
>>>> 平衡二叉树
>>>>> 满二叉树

## 插入表格

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell
 
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
 
| Name | Description          |
| ------------- | ----------- |
| Help      | Display the help window.|
| Close     | Closes a window     |
 
| Name | Description          |
| ------------- | ----------- |
| Help      | ~~Display the~~ help window.|
| Close     | _Closes_ a window     |
 
| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |

## EmoJi 表情

[EmoJi 表情](https://gitmoji.carloscuesta.me/)
- :art:         改进结构和代码格式
- :zap: 	    优化性能
- :fire:        移除代码或文件
- :bug:	        修复 bug
- :ambulance:   关键的修复
- :sparkles:    引入新功能
- :memo:	    写文档
- :rocket:	    部署新功能
- :lipstick:    升级 UI 和样式文件
- :sada:        初次提交
- :white_check_mark:	添加测试用例
- :lock:        修复安全问题
- :apple:	    修复 MacOS 下的问题
- :penguin:     修复 Linux 下的问题
- :checkered_flag:  修复 Windows 下的问题
- :bookmark:    发版/版本标签
- :rotating_light:  移除 linter 的警告
- :construction:    工作在进行中
- :green_heart: 修复 CI 构建问题
- :arrow_down:  降级依赖库
- :arrow_up:    升级依赖库
- :construction_worker: 添加 CI 构建系统
- :chart_with_upwards_trend:    添加分析或跟踪代码
- :hammer:      大重构
- :heavy_minus_sign:    删除依赖
- :whale:       Work about Docker
- :heavy_plus_sign:添加依赖
- :wrench:      改变配置文件
- :globe_with_meridians:    国际化和本地化
- :pencil2:     修复拼写错误
- :hankey:      糟糕代码,需要改善
- :rewind:      恢复修改
- :twisted_rightwards_arrows:   合并分支
- :package:     更新包
- :alien:       因外部API变化而修改了代码
- :truck:       移动或重命名文件