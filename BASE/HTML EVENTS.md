# HTML事件<sup>shine</sup>

    HTML DOM(Document Object Model)事件允许JavaScript在HTML文档的元素上添加不同的事件处理。
    事件通常与功能（functions）结合使用， 事件没有发生功能就不能动作。如：如果没有点击按钮，将不执行功能。
    注：W3C在DOM level 2中正式把事件模型标准化。

- 鼠标事件

|事件|说明|DOM|
|--|--|:--:|
|onclick|用户点击元素时触发onClick事件|2|
|oncontextmenu|用户在元素上点击右键时打开一个右键菜单|3|
|ondblclick|用户在元素上双击时触发的事件|2|
|onmousedown|用户在元素上按下鼠标键时触发的事件|2|
|onmouseenter|当鼠标点移动到元素上时触发的事件|2|
|onmouseleave|当鼠标离开元素时触发的事件|2|
|onmousemove|当鼠标在元素上移动时触发的事件|2|
|onmouseover|当鼠标进入到元素上或者元素的子元素上时触发的事件|2|
|onmouseout|当鼠标离开元素，或者元素的子元素时触发的事件|2|
|onmouseup|当用户在元素上释放鼠标按钮时触发的事件|2|

- 键盘事件

|事件|说明|DOM|
|--|--|:--:|
|onkeydown|用户正在按下键盘键时触发的事件|2|
|onkeypress|用户按下键盘键时触发的事件|3|
|onkeyup|用户按下键盘键时触发的事件|2|

- 帧/对象 事件

|事件|说明|DOM|
|--|--|:--:|
|onabort|正在下载的资源中断时触发的事件|2|
|onbeforeunload|即将卸载文档前触发的事件|2|
|onerror|正在加载外部文件出现错误时触发的事件|2|
|onhashchange|URL的锚点发生变化时触发的事件|3|
|onload|下载完一个对象后触发的事件|2|
|onpageshow|用户定位到一个网页时触发的事件|3|
|onpagehide|用户从一个网页离开时触发的事件|3|
|onresize|文档视窗大小发生变化时触发的事件|2|
|onscroll|元素的滚动条正在滚动时触发的事件|2|
|onunload|页面已经卸载后触发的事件（用于body元素）|2|

- 表单事件

|事件|说明|DOM|
|--|--|:--:|
|onblur|用户从聚焦的元素离开时触发的事件|2|
|onchange|表单元素的内容、选框状态发生变化时触发的事件|2|
|onfocus|聚焦于一个元素时触发的事件|2|
|onfocusin|聚焦于一个元素时触发的事件|2|
|onfocusout|离开一个元素时触发的事件|2|
|oninput|用户输入信息时触发的事件|3|
|oninvalid|input元素内的值为无效值时触发的事件|3|
|onreset|清空表单时触发的事件|2|
|onsearch|用户按了“ENTER”键或者点击了search类型的input元素上的“x”时触发的事件|3|
|onselect|元素的内容被选择时触发的事件|2|
|onsubmit|表单提交时触发的事件|

- 拖动事件

|事件|说明|DOM|
|--|--|:--:|
|ondrag|拖动元素或者选中文字时触发的事件|3|
|ondragend|拖动完毕或者选中文字后触发的事件|3|
|ondragenter|拖拽的元素进入放置范围内时触发的事件|3|
|ondragleave|拖动元素离开放置范围时触发的事件|3|
|ondragover|拖动元素来到放置领域上面时触发的事件|3|
|ondragstart|用户开始拖拽元素时触发的事件|3|
|ondrop|拖动元素放置后触发的事件|3|

- 剪切板事件

|事件|说明|
|--|--|
|oncopy|复制元素的内容时触发的事件|
|oncut|用户剪切元素的内容时触发的事件|
|onpaste|用户给元素粘贴内容时触发的事件|

- 打印事件

|事件|说明|DOM|
|--|--|:--:|
|onafterprint|开始打印或者打印对话框已经关闭时触发的事件|3|
|onbeforeprint|即将打印或者打印对话框打开之前触发的事件|3|

- 媒体事件

|事件|说明|DOM|
|--|--|:--:|
|onabort|加载声频、视频过程中，因出错而中断时触发的事件|3|
|oncanplay|浏览器可以播放声频、视频时触发的事件|3|
|oncanplaythrough|当浏览器可以在不因缓冲而停顿的情况下播放时触发的事件|3|
|ondurationchange|当声频、视频的时长已经更改时，即：duration属性的值变更时触发的事件|3|
|onemptied|初始化元素时触发的事件|3|
|onended|目前的播放列表结束时触发的事件|3|
|onerror|加载声频、视频出错时触发的事件|3|
|onloadeddata|当浏览器加载声频、视频当前帧结束后触发的事件|3|
|onloadedmetadata|当浏览器已加载声频、视频的元数据（播放时间、视频宽、高等）时触发的事件|3|
|onloadstart|当开始读入媒体数据时触发的事件|3|
|onpause|声频、视频暂停时触发的事件|3|
|onplay|声频、视频开始播放时触发的事件|3|
|onplaying|声频、视频在暂停或者因缓冲被迫停止后又开始播放时触发的事件|3|
|onprogress|浏览器正在下载媒体数据时触发的事件|3|
|onratechange|媒体播放速度发生变化时触发的事件|3|
|onseeked|用户改变播放位置后触发的事件|3|
|onseeking|用户开始改变播放位置时触发的事件|3|
|onstalled|浏览器下载媒体数据被意外中断了时触发的事件|3|
|onsuspend|浏览器刻意不获取媒体数据时触发的事件|3|
|ontimeupdate|目前播放位置已经更改后触发的事件|3|
|onvolumechange|更改了音量时触发的事件|3|
|onwaiting|视频因为需要下载下一帧而停止时触发的事件|3|

- 动画事件

|事件|说明|DOM|
|--|--|:--:|
|animationstart|开始播放css动画时触发的事件|3|
|animationend|css动画完成后触发的事件|3|
|animationiteration|重复播放css动画时触发的事件|3|

- 过渡事件

|事件|说明|DOM|
|--|--|:--:|
|transitionend|css过渡完成时触发的事件|3|

- 服务器发送事件

|事件|说明|DOM|
|--|--|:--:|
|onerror|事件发生源发生错误时触发的事件| |
|onmessage|收到来自信息源的信息时触发的事件| |
|onopen|与服务器建立了连接时触发的事件| |

- 触摸事件

|事件|说明|DOM|
|--|--|:--:|
|ontouchcancel|触摸中断时触发的事件| |
|ontouchend|手指离开触摸屏时触发的事件| |
|ontouchmove|手指在触摸屏上拖动时触发的事件| |
|ontouchstart|手指放到触摸屏上时触发的事件| |

- 其他事件

|事件|说明|DOM|
|--|--|:--:|
|onmessage|接收到信息或者从一个对象（WebSocket, Web Worker, 事件源、上级window、子frame）接收到信息时触发的事件|3|
|onmousewheel|已过时不用了，使用onwheel事件代替| |
|ononline|浏览器启动联机工作时触发的事件|3|
|onoffline|浏览器开始脱机工作时触发的事件|3|
|onpopstate|当窗口的历史记录发生更改时触发的事件|3|
|onshow|点击右键，出现右键菜单时触发的事件|3|
|onstorage|Web存储区更新时触发的事件|3|
|ontoggle|用户打开或关闭details元素时触发的事件|3|
|onwheel|鼠标在元素上上下滚动时触发的事件|3|

### 事件对象

- 常量

|常量|说明|DOM|
|--|--|:--:|
|CAPTURING_PHASE|当前事件阶段为捕获阶段时(1)|1|
|AT_TARGET|当前事件在目标阶段，即：正在事件目标评价时(2)|2|
|BUBBLING_PHASE|当前事件正在冒泡阶段(3)|3|

-属性

|属性|说明|DOM|
|--|--|:--:|
|bubbles|返回布尔值，显示事件是否是冒泡(bubble)事件|2|
|cancelable|返回布尔值，显示事件是否是可取消事件|2|
|currentTarget|返回元素事件监听触发的事件|2|
|defaultPrevented|检查事件是否调用了preventDefault()方法|3|
|eventPhase|返回冒泡事件在整个冒泡过程中的阶段|2|
|isTrusted|返回布尔值，显示事件是否是可信事件|3|
|target|返回被触发事件的元素|2|
|timeStamp|返回时间戳|2|
|type|返回触发的事件的类型|2|
|view|触发事件后给Window对象返回一个参照|2|

- 事件方法

|方法|说明|DOM|
|--|--|:--:|
|preventDefault()|通知浏览器不执行与事件关联的默认动作|2|
|stopImmediatePropagation()|阻止其他事件处理函数执行，并阻止事件冒泡到DOM树上|3|
|stopPropagation()|阻止事件冒泡到DOM树上|2|

- 鼠标事件对象

|属性|说明|DOM|
|--|--|:--:|
|altKey|返回布尔值，显示触发鼠标事件时是否按下了“ALT”键|2|
|button|返回数值，显示触发鼠标事件时按下的鼠标按钮|2|
|buttons|返回数值，显示触发鼠标事件时按下的鼠标按钮|3|
|clientX|触发鼠标事件时返回鼠标点相对于当前窗口的横坐标值|2|
|clienty|触发鼠标事件时返回鼠标点相对于当前窗口的纵坐标值|2|
|detail|返回同一领域中，短时间内鼠标的点击次数|2|
|metaKey|返回布尔值，显示触发鼠标事件时是否按下了“meta”键|2|
|relatedTarget|返回触发鼠标事件所在的元素|2|
|screenX|触发鼠标事件时返回鼠标点的相对于屏幕的横坐标值|2|
|screenY|触发鼠标事件时返回鼠标点的相对于屏幕的纵坐标值|2|
|shiftKey|返回布尔值，显示触发鼠标事件时是否按下了“shift”键|2|
|which|触发鼠标事件时，返回代表鼠标键的数值|2|

- 键盘事件对象

|属性|说明|DOM|
|--|--|:--:|
|altKey|返回布尔值，显示触发鼠标事件时是否按下了“ALT”键|2|
|ctrlKey|返回布尔值，显示触发鼠标事件时是否按下了“ctrl”键|2|
|location|返回键盘或其他设备上键的位置|3|
|metaKey|返回布尔值，显示触发鼠标事件时是否按下了“meta”键|2|
|shiftKey|返回布尔值，显示触发鼠标事件时是否按下了“shift”键|2|
|which|触发鼠标事件时，返回代表鼠标键的数值|2|

- HashChange事件对象

|属性|说明|
|--|--|:--:|
|newURL|哈希值发生变化时，返回文档的URL| |
|oldURL|返回哈希值发生变化之前文档的URL| |

- 页面转换(PageTransition)事件对象

|属性|说明|DOM|
|--|--|:--:|
|persisted|返回布尔值，表示网页是直接从服务器加载，还是页面缓存。| |

- 聚焦事件(FocusEvent)对象

|属性|说明|DOM|
|--|--|:--:|
|relatedtarget|返回触发鼠标事件所在的元素| |

- 动画事件(AnimationEvent)对象

|属性|说明|DOM|
|--|--|:--:|
|animationName|返回动画名称| |
|elapsedTime|返回播放动画前的迟延时间| |

- 过渡事件(TransitionEvent)对象

|属性|说明|DOM|
|--|--|:--:|
|propertyName|返回适用过渡效果的CSS属性名称| |
|elapsedTime|返回过渡效果运行的时间| |

- 滚轮事件(WheelEvent)对象

|属性|说明|DOM|
|--|--|:--:|
|deltaX|返回鼠标滚轮的水平滚动量|3|
|deltaY|返回鼠标滚轮的垂直滚动量|3|
|deltaZ|返回鼠标滚轮的Z轴方向上的滚动量|3|
|deltaMode|返回一个数值，代表测量到的delta值|3|