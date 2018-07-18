# emmet语法 <sup>shine</sup>

	Emmet is a plugin for many popular text editors which greatly improves HTML & CSS workflow

官网:[https://emmet.io/](https://emmet.io/)

## 基础用法

注意：输完缩写按 `tab` 键生成。缩写之间不能有空格！

`WebStorm` 中可按 `ctrl+j` 键查看所有 `html Emmet` 语法提示。

- 1.1 生成html初始文档

`!`		生成html5文档的初始结构

`html:5`	生成html5文档的初始结构

`html:xt` 生成html4过渡型

`html:4s` 生成html4严格型

- 1.2 生成带有id,class的HTML标签

`div#a`

生成:

```html
<div id="a"></div>
```

`div.a`
	
生成:
```html
<div class="a"></div>
```

- 1.3 生成后代 `>`

`div.a>ul>li`

生成:

```html
<div class="a">
	<ul>
		<li></li>
	</ul>
</div>
```

- 1.4 生成兄弟

`div+p+dp`

生成:

```html
<div></div>
<p></p>
<dp></dp>
```

- 1.5 生成上级元素 `^`

上级 （Climb-up）元素是指结束当前标签，跳到上一级标签继续写下去。可以使用多个^循环跳到上级。

`div>ul>li^span`

生成:

```html
<div>
    <ul>
        <li></li>
    </ul>
    <span></span>
</div>
```

`div>ul>li^^span`

生成:

```html
<div>
    <ul>
        <li></li>
    </ul>
</div>
<span></span>
```

- 1.6重复生成多份 `*`

`ul>li*5`

生成:

```html
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

- 1.7生成分组()

使用分组可避免使用上级标签 `^`

`div>(header>ul>li>a)+footer>p`

`div>header>ul>li>a^^^+footer>p`

都生成：

```html
<div>
    <header>
        <ul>
            <li><a href=""></a></li>
        </ul>
    </header>
    <footer>
        <p></p>
    </footer>
</div>
```

但含有重复 `*` 时上级标签 `^` 就无法替代，比如 `div>(header>ul>li*2>a)+footer>p`

- 1.8生成自定义属性[attr\]

`a[href="http://www.baidu.com" title="前端"]`

生成：

```html
<a href="http://www.baidu.com" title="前端"></a>
```

- 1.9生成内容编号 `$`

`ul>li.item$*5`

生成：

```html
<ul>
    <li class="item1"></li>
    <li class="item2"></li>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
</ul>
```

`ul>li.item$$$*5`

生成：

```html
<ul>
    <li class="item001"></li>
    <li class="item002"></li>
    <li class="item003"></li>
    <li class="item004"></li>
    <li class="item005"></li>
</ul>
```

我们也可以在 `$` 后面增加 `@-` 来实现倒序排列。还可以使用 `@N` 指定开始的序号。

`ul>li.item$@-*5`

生成：

```html
<ul>
    <li class="item5"></li>
    <li class="item4"></li>
    <li class="item3"></li>
    <li class="item2"></li>
    <li class="item1"></li>
</ul>
```

`ul>li.item$@3*5`

`ul>li.item$@-3*5`

生成：(你猜)

- 2.0生成文本内容 `{}`

`a[href="www.google.com"]{click me}`

 或者
 
 `a[href="www.google.com"]>{click me}`

生成：

```html
<a href="www.google.com">click me</a>
```

### 隐式标记名称

有些时间我们可以省略标签名，`emmet` 会自动分析应该是什么标签。

`.wrap>.content` 自动转换	`div.wrap>div.content`
`em>.info` 自动转换	`em>span.info`
`ul>.item*3` 自动转换	`ul>li.item*3`
`table>#row$*4>[colspan=2]` 自动转换	`table>tr#row$*4>td[colspan=2]`

### 随机假文

有时标签不能为空，需要一些假文数据填充。

`ul.generic-list>lorem10.item*4`

表示每个li里随机生成10单词的假文填充。

### CSS 缩写

详细参见[https://github.com/emmetio/emmet/blob/master/lib/snippets.json](https://github.com/emmetio/emmet/blob/master/lib/snippets.json)css缩写规则。假如：

`t:1` 生成 `top:1px`

`mt:1` 生成 `margin-top:1px`

### 高级教程

#### 扩展缩写（Wrap with Abbreviation）

一个非常强大的功能，在当前HTML代码的基础上添加缩写，将向外扩展代码，比如这段代码，光标在p标签上或者外部:
```html
    <div id="page">  
        <p>Hello world</p>  
    </div>  
```
再按`shift+ctrl+g`，弹出：Enter Wrap Abbreviation（输入扩展缩写），在其中输入：`.wrapper>h1{Title}+.content`

将得到：

```html
<div id="page">  
    <div class="wrapper">  
        <h1>Title</h1>  
        <div class="content">  
            <p>Hello world</p>  
        </div>  
    </div>  
</div> 
```

**特别说明：** `webStorm` 软件是按 `ctrl+alt+t` 弹出菜单选择 `Emmet`

#### 把文本转换成HTML标签

当客户给我们提供了一个文本文档，把标题复制过来，比如：

    首页   
    公司简介   
    公司动态   
    关于我们   
    联系我们
    
选择所有文本，再按 `shift+ctrl+g`，弹出：Enter Wrap Abbreviation（输入扩展缩写），在其中输入：`nav>ul.nav>li.nav-item$*>a`

将得到：

```html
<nav>  
    <ul class="nav">  
        <li class="nav-item1"><a href="">首页</a></li>  
        <li class="nav-item2"><a href="">公司简介</a></li>  
        <li class="nav-item3"><a href="">公司动态</a></li>  
        <li class="nav-item4"><a href="">关于我们</a></li>  
        <li class="nav-item5"><a href="">联系我们</a></li>  
    </ul>  
</nav> 
```

#### 删除文本中的列表标记

word文档中的文本很多都是列表块，比如：

    1.首页   
    2.公司简介   
    3.公司动态   
    4.关于我们   
    5.联系我们  

在编写HTML代码又不需要，`Emmet` 让我们可以删除文本中的标记，在上一功能的缩写的基础代码的后面添加 `|t` 就可以删除文本中的标记:

`nav>ul.nav>li.nav-item$*>a|t`

最终得到的HTML代码与上面的效果是一样的，你可以试试！

#### 控制文本的输出位置

默认情况下，用Emmet把文本转换为HTML代码时，使用 `$#` 操作符 `Emmet` 可以将文本输出到多个元素中，而 `$#` 平上 `Emmet` 缩写语法中的一部分，所以得将 `$#` 放在属性值 `[\]` 或文本 `{\}` 操作符中。

以上面的导航文本为例，在Enter Wrap Abbreviation中输入：

`ul>li[title=$#]*>{$#}+img[alt=$#]`

将得到：

```html
    <ul>  
        <li title="首页">首页<img src="" alt="首页"></li>  
        <li title="公司简介">公司简介<img src="" alt="公司简介"></li>  
        <li title="公司动态">公司动态<img src="" alt="公司动态"></li>  
        <li title="关于我们">关于我们<img src="" alt="关于我们"></li>  
        <li title="联系我们">联系我们<img src="" alt="联系我们"></li>  
    </ul>
```