# JavaScript Window对象(Window Object)<sup>shine</sup>

Window对象代表浏览器打开的一个窗口。

如果文档内含义框架iframe元素，浏览器会为HTML文档创建一个window对象， 同时为框架创建一个Window对象。

注：W3C没有把Window对象纳入标准化，但是各大主流浏览器都支持。

### Window对象的属性

|属性|说明|
|--|--|
|closed|返回布尔值，表示窗口是否关闭|
|defaultStatus|设置或返回浏览器下方状态栏中的默认文本|
|document|返回window的文档对象（详细参照|DOM参考手册）|
|frameElement|返回当前窗口中插入的iframe元素|
|frames|返回当前文档中代表iframe元素的类似矩阵的对象|
|history|返回窗口的历史对象（详细参照|History对象）|
|innerHeight|返回窗口内容领域内高度|
|innerWidth|返回窗口内容领域内宽度|
|length|返回当前文档中iframe元素的数量|
|location|返回window的Location对象（详细参照|Location对象）|
|name|设置或返回窗口的名称|
|navigator|返回窗口的Navigator对象|
|opener|返回创建窗口的基准|
|outerHeight|返回窗口的高度，包括窗口界面上的所有元素|
|outerWidth|返回窗口的宽度，包括窗口界面上的所有元素|
|pageXOffset|返回当前文档滚动条在水平方向上的滚动距离|
|pageYOffset|返回当前文档滚动条在垂直方向上的滚动距离|
|parent|返回当前窗口的上级窗口|
|screen|返回window的Screen对象（详细参照|Screen对象）|
|screenLeft|回窗口相对于屏幕的x坐标|
|screenTop|回窗口相对于屏幕的y坐标|
|screenX|返回窗口相对于屏幕的x坐标|
|screenY|返回窗口相对于屏幕的y坐标|
|scrollX|与pageXOffset相同|
|scollY|与pageYOffset相同|
|self|返回当前窗口|
|status|设置或返回浏览器下端窗口状态栏中显示的信息|
|top|返回当前窗口的最上级窗口|

### Window对象的方法

|方法|说明|
|--|--|
|alert()|显示警告对话窗口|
|atob()|使用base64的形式解码|
|blur()|从当前窗口删除聚焦|
|btoa()|使字符编码成base64的形式|
|clearInterval()|清除使用setInterval()方法设置的计时器|
|clearTimeout()|清除使用setTimeout()方法设置的计时器|
|close()|关闭当前浏览器窗口|
|confirm()|显示带有自定义信息、ok、取消按钮的确认对话框|
|focus()|聚焦到当前窗口|
|moveBy()|相对于窗口当前坐标位置,根据指定距离移动窗口|
|moveTo()|根据指定距离移动窗口|
|open()|打开新的浏览器窗口|
|print()|打印当前窗口中的内容|
|prompt()|显示带有输入框的提示对话框|
|resizeBy()|在当前窗口尺寸上追加指定的宽度和高度|
|resizeTo()|指定窗口的宽度和高度|
|scrollBy()|移动窗口滚动条到指定的位置|
|scrollTo()|窗口滚动条移动到指定的坐标|
|setInterval()|调用一个函数或者指定时间间隔计算表达式|
|setTimeout()|调用一个函数或者指定时间计算表达式|