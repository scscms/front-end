# Javascript基础教程<sup>shine</sup>

##  第十六章 HTML5脚本编程

### 16.1 跨文档消息传递

跨文档消息传送（cross-document messaging），有时候简称XDM，指的是在来自不同域的页面间传递消息。

### 16.2 原生拖放
#### 16.2.1 拖放事件

拖动某元素时，将一次触发下列事件：

- （1）dragstart
- （2）drag
- （3）dragend

上述三个事件的目标都是被拖动的元素。

当某个元素被拖动到一个有效的放置目标上时，下列事件会依次发生：

- （1）dragenter
- （2）dragover
- （3）dragleave或drop

#### 16.2.2 自定义放置目标

可以把任何元素变成有效的放置目标，方法是重写dragenter和dragover事件的默认行为。
#### 16.2.3 dataTransfer对象

为了在拖放操作时实现数据交换，IE5引入了dataTransfer对象，它是事件对象的一个属性，用于从被拖动元素向放置目标传递字符串格式的数据。因为它是事件对象的属性，所以只能在拖放的事件处理程序中访问dataTransfer对象。
#### 16.2.4 dropEffect与effectAllowed

通过dataTransfer对象还可以确定被拖动的元素以及作为放置目标的元素能够接收什么操作。通过dataTransfer对象的两个属性dropEffect和effectAllowed来确定。

通过dropEffect属性可以知道被拖动的元素能够执行哪种放置行为。要使用dropEffect属性，必须在ondragenter事件处理程序中针对放置目标来设置它。

dropEffect属性只有搭配effectAllowed属性才有用。effectAllowed属性表示允许拖动元素的哪种dropEffect。必须在ondragstart事件处理程序中设置effectAllowed。
#### 16.2.5 可拖动

默认情况下，图像、链接和文本是可以拖动的。文本只有在被选中的情况下才能拖动，而图像和链接在任何时候都可以拖动。

HTML5为所有HTML元素规定了一个dragable属性，表示元素是否可以拖动。
#### 16.2.6 其他成员

HTML5规范规定dataTransfer对象还应该包含下列方法和属性：

- （1）addElement(element)：为拖动操作添加一个元素。添加这个元素只影响数据（即增加作为拖动源而响应回调的对象），不会影响拖动操作时页面元素的外观。
- （2）clearData(format)：清除以特定格式保存的数据。
- （3）setDragImage(element,x,y)：指定一幅图像，当拖动发生时，显示在光标下方。
- （4）types：当前保存的数据类型。
### 16.3 媒体元素
#### 16.3.1 属性

\<video>和\<audio>元素都提供了完善的JavaScript接口。

|属性|数据类型|说明|
|:---|:------:|:---|
|autoplay|布尔值|取得或设置autoplay标志|
|buffered|时间范围|表示已下载的缓冲的时间范围的对象|
|bufferedBytes|字节范围|表示已下载的缓冲的字节范围的对象|
|bufferedingRate|整数|下载过程中每秒钟平均接收到的位数|
|bufferingThrottled|布尔值|表示浏览器是否对缓冲进行了节流|
|controls|布尔值|取得或设置controls属性，用于显示或隐藏浏览器内置的控件|
|currentLoop|整数|媒体文件已经循环的次数|
|currentSrc|字符串|当前播放的媒体文件的URL|
|currentTime|浮点数|已经播放的秒数|
|defaultPlaybackRate|浮点数|取得或设置默认的播放速度。默认值为1.0秒|
|duration|浮点数|媒体的总播放时间|
|ended|布尔值|表示媒体文件是否播放完成|
|loop|布尔值|取得或设置媒体文件在播放完成后是否再从头开始播放|
|muted|布尔值|取得或设置媒体文件是否静音|
|networkState|整数|表示当前媒体的网络连接状态：0表示空，1表示正在加载，2表示正在加载元数据，3表示已经加载了第一帧，4表示加载完成|
|paused|布尔值|表示播放器是否暂停|
|playbackRate|浮点数|取得或设置当前的播放速度。用户可以改变这个值，让媒体播放速度变快或变慢，这与defaultPlaybackRate只能由开发人员修改不同|
|played|时间范围|到目前为止已经播放的时间范围|
|readyState|整数|表示媒体是否已经就绪（可以播放了）。0表示数据不可用，1表示可以显示当前帧，2表示可以开始播放，3表示可以从头到尾播放|
|seekable|事件范围|可以搜索的事件范围|
|seeking|布尔值|表示播放器是否正移动到媒体文件中的新位置|
|src|字符串|媒体文件的来源。任何时候都可以重写这个属性|
|start|浮点数|取得或设置媒体文件中开始播放的位置，以秒表示|
|totalBytes|整数|当前资源所需的总字节数|
|videoHeight|整数|返回视频（不一定是元素）的高度，只适用于video|
|videoWidth|整数|返回视频（不一定是元素）的宽度度，只适用于video|
|volume|浮点数|取得或设置当前的音量，值为0.0或1.0|

#### 16.3.2 事件

|事件|触发时机|
|:---|:-------|
|abort|下载中断|
|canplay|可以播放时；readyState的值为2|
|canplaythrough|播放可继续，而且应该不会中断；readyState的值为3|
|canplayshowcurrentframe|当前帧已下载完成；readyState的值为1|
|dataunavailable|因为没有数据而不能播放；readyState值为0|
|durationchange|duration属性的值改变|
|emptied|网络连接关闭|
|empty|发送错误阻止了媒体下载|
|ended|媒体已播放到末尾，播放停止|
|error|下载期间发生了网络错误|
|load|所有媒体已加载完成。这个事件可能会被废弃，建议使用canplaythrough|
|loadeddata|媒体的第一帧已加载完成|
|loadedmetadata|媒体的元数据已加载完成|
|loadstart|下载已开始|
|pause|播放已暂停|
|play|媒体已接收到指令开始播放|
|playing|媒体已实际开始播放|
|progress|正在下载|
|ratechange|播放媒体的速度改变|
|seeked|搜索结束|
|seeking|正移动到新位置|
|stalled|浏览器尝试下载，但未接收到数据|
|timeupdate|currentTime被以不合理或意外的方式更新|
|valumechange|volume属性值或muted属性值已改变|
|waiting|播放暂停，等待下载更多数据|

#### 16.3.3 自定义媒体播放器
#### 16.3.4 检测编解码器的支持情况

 这两个媒体元素都有一个canPlayType()方法，该方法接收一种格式/编码器字符串，返回”probably”、”maybe”或””（空字符串）。空字符串是假值。

#### 16.3.5 Audio类型

audio元素还有一个原生的JavaScript构造函数Audio，可以在任何时候播放音频。

### 16.4 历史状态管理

history 对象包含用户（在浏览器窗口中）访问过的 URL。
history 对象是 window 对象的一部分，可通过 window.history 属性对其进行访问。

- 1、history.length 	history 列表长度。
- 1、history.back() 	加载 history 列表中的前一个 URL。
- 2、history.forward() 	加载 history 列表中的下一个 URL。
- 3、history.go(n) 	加载 history 列表中的某个具体页面。

HTML5通过更新history对象为管理历史状态提供了方便。

- pushState方法

	pushState()有三个参数:state对象，标题(现在是被忽略，未作处理)，URL(可选)。

- replaceState()方法

	此方法参数与pushState一样，只是不像pushState新增加历史记录，而是替换当前记录。

- popstate事件

	当history实体被改变时，popstate事件将会发生。

[返回上一篇](javascript_05.md)