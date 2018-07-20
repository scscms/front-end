# 其他对象<sup>shine</sup>

### JavaScript Navigator对象(Navigator Object)
    
    Navigator对象内容纳了浏览器的信息。
    注：W3C没有把Navigator对象纳入标准化，但是各大主流浏览器都支持。

- Navigator对象的属性

|属性|说明|
|--|--|
|appCodeName|返回浏览器的代码名称|
|appName|返回浏览器的名称|
|appVersion|返回浏览器的版本信息|
|cookieEnabled|确定是否启动浏览器的cookies|
|geolecation|返回用于定位用户位置的Geolocation对象|
|language|返回浏览器的语言版本|
|onLine|返回布尔值，表示浏览器是在线工作还是离线工作|
|platform|返回浏览器被编译的平台|
|product|返回浏览器的引擎名称|
|userAgent|返回由浏览器向服务器发送的用户代理头文件|

### JavaScript Screen对象(Screen Object)
    
    Screen对象内容纳了关于屏幕的信息。
    注：W3C没有把Screen对象纳入标准化，但是各大主流浏览器都支持。
    
- Screen对象的属性

|属性|说明|
|--|--|
|availHeight|返回屏幕的高度（不包括窗口的任务栏）|
|availWidth|返回屏幕的宽度（不包括窗口的任务栏）|
|colorDepth|返回屏幕陈列图像时的颜色深度|
|height|返回屏幕的总体高度|
|pixelDepth|返回屏幕的彩色分辨率|
|width|返回屏幕的总体宽度|

### JavaScript Location对象(Location Object)

    Location对象内容纳了当前文档URL的信息。
    Location对象是Window对象的一部分，可以通过window.location属性访问。
    注：W3C没有把location对象纳入标准化，但是各大主流浏览器都支持

- Location对象的属性

|属性|说明|
|--|--|
|hash|设置或返回以#开头的URL的部分锚点|
|host|设置或返回URL的主机名和端口号|
|hostname|设置或返回URL的主机名|
|href|设置或返回URL的整体|
|origin|返回URL的协议，主机名和端口号|
|pathname|设置或返回URL的路径|
|port|设置或返回URL使用的服务器端口号|
|protocol|设置或返回当前文档URL的协议|
|search|设置或返回当前文档URL的查询字符串部分|

- Location对象的方法

|方法|说明|
|--|--|
|assign()|下载一个新文档|
|reload()|刷新当前文档|
|replace()|下载新文档覆盖当前文档|