# Lighthouse优化<sup>shine</sup>

[url](https://developers.google.com/web/tools/lighthouse/audits/critical-request-chains)

    `Lighthouse`是一个Google开源的自动化工具，主要用于改进网络应用（移动端）的质量。目前测试项包括页面性能、PWA、可访问性（无障碍）、最佳实践、SEO。Lighthouse会对各个测试项的结果打分，并给出优化建议，这些打分标准和优化建议可以视为Google的网页最佳实践。

### 关键请求路径 Critical Request Chains

浏览器处理HTML步骤：将字节`Bytes`转换成字符`Characters`，确定标签`Tokens`，再将标签转换成节点`Nodes`，然后构建`DOM`树。
浏览器处理CSS步骤：将字节`Bytes`转换成字符`Characters`，确定标签`Tokens`，再将标签转换成节点`Nodes`，然后构建`CSSOM`树。

 - 处理`HTML`标记并构建`DOM`树。
 - 处理`CSS`标记并构建`CSSOM`树。
 - 将`DOM`与`CSSOM`合并成一个渲染树。
 - 布局计算每个对象的精确位置和大小。栅格化 Rasterize
 - 最后一步是绘制，使用最终渲染树将像素渲染到屏幕上。

优化关键渲染路径就是指最大限度缩短以上5个步骤耗费的总时间。

### 延期加载非关键样式 Defer unused CSS

检测关键`CSS`：Chrome DevTools的Coverage选项卡可以帮助您发现关键且不重要的CSS，或`puppeteer`的`page.coverage`。
Deferring uncritical CSS延期加载非关键样式：[loadCSS](https://github.com/filamentgroup/loadCSS)
FOUC：无样式内容闪烁、内容样式短暂失效

```html
<link href="style.css" rel="stylesheet">
<link href="style.css" rel="stylesheet" media="all">
<link href="portrait.css" rel="stylesheet" media="orientation:portrait">
<link href="screen.css" rel="stylesheet" media="screen">
<link href="print.css" rel="stylesheet" media="print">
```
### 启用文本压缩 Enable Text Compression

通过 GZIP 压缩文本，而图片运行 GZIP则效果甚微，甚至毫无效果。

 - GZIP 对基于文本的资产的压缩效果最好：CSS、JavaScript 和 HTML。
 - 所有现代浏览器都支持 GZIP 压缩，并且会自动请求该压缩。
 - 您的服务器必须配置为启用 GZIP 压缩。
 - 某些 CDN 需要特别注意以确保 GZIP 已启用。

[检测是否启用GZIP压缩](http://www.whatsmyip.org/http-compression-test/)

### 预计输入响应时间 Estimated Input Latency

提高用户响应时间，最好是100ms，lighthouse建议是50ms。
使用Chrome DevTools Performance录制并分析火焰图。

### 首屏内容绘制 First Contentful Paint（FCP）

加快首屏绘制建议：
 - 最小化页面所依赖的渲染，阻止外部样式表和脚本的数量。
 - 使用HTTP缓存加速重复访问。
 - 压缩资源以加快下载时间。
 - 通过摇树`tree-shaking`或代码拆分优化JavaScript。

### 首次CPU空闲 first cpu idle
### 首次有效渲染 first meaningful paint
### 避免巨大的网络负载 Avoids Enormous Network Payloads

避免使用着陆页重定向
启用压缩功能
改善服务器响应用时
使用浏览器缓存 Cache-Control
缩减资源的大小
优化图片，使用WebP而不是JPEG或PNG。
优化 CSS 发送过程
 - 内嵌较小 CSS 文件的示例
 - 请勿内嵌较大数据 URI
 - 请勿内嵌 CSS 属性
缩减首屏内容的大小
移除会阻止内容呈现的 JavaScript：延期加载及延期执行

### 多页面重定向 Has multiple page redirects

### JavaScript启动耗时过高 JavaScript Bootup Time Is Too High

仅发送用户需要的代码。
缩小代码。
压缩你的代码。
删除未使用的代码
缓存代码以减少网络请求。

### 服务器响应时间慢 Keep Server Response Times Low

优化服务器的应用程序逻辑，以更快地准备页面。
优化服务器查询数据库的方式，或迁移到更快的数据库系统。
升级服务器硬件以获得更多内存或CPU。

### 缩小CSS minify css

压缩文件，精简颜色代码，合并样式

### 屏幕外图像

使用懒加载加载首屏外的图片`IntersectionObserver`
[IntersectionObserver polyfill](https://github
.com/w3c/IntersectionObserver/blob/master/polyfill/intersection-observer.js)

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 600px)">
  <img src="mdn-logo-narrow.png" alt="MDN">
</picture>
```

[图片优化指导](https://images.guide/)

应该搭建自动优化图片工具

### 优化图像 Optimize Images

[jpg、png在线压缩tinypng](https://tinypng.com/) 很多工具，需要申请key

[在线压缩](https://imagecompressor.com/zh/)
建议部分图片转`svg`

### 速度指标 Seeped Index

### 性能预算（保持请求数低且文件小）Performance Budgets (Keep Request Counts Low And File Sizes Small)

### 预加载关键请求 preload key requests

```html
<link rel="preload" href="styles.css" as="style">
```
预加载关键资源

### 减少首屏加载资源 Reduce Render-Blocking Scripts 

Lighthouse 可标识三种类型的阻塞资源：

- \<script\> 标记，其具有以下特征：
    >位于文档的 \<head\> 中。
    没有 defer 属性。
    没有 async 属性。   

- \<link rel="stylesheet"\> 标记，其具有以下特征：
    >没有 disabled 属性。如果具有此属性，则浏览器不会下载样式表。
    没有与用户的设备匹配的 media 属性。

- \<link rel="import"\> 标记，其具有以下特征：
    >没有 async 属性。

### 使用新格式提供图片 Serve Images in Next-Gen Formats

[webP图片](https://developers.google.com/speed/webp/)

判断浏览器是否支持`webP`:
```javascript
var isCanWebP = (function(){
    try{
        return document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0
    }catch(err) {
        return  false
    }
}())
```
或者通过请求头相关字段判断，`Headers.Request Headers.Accept`看是否包含`imgage/webp`字样

```html
<picture>
  <source type="image/webp" srcset="images/butterfly.webp">
  <img src="images/butterfly.jpg" alt="a butterfly">
</picture>
```
```javascript
// check_webp_feature:
//   'feature' can be one of 'lossy', 'lossless', 'alpha' or 'animation'.
//   'callback(feature, result)' will be passed back the detection result (in an asynchronous way!)
function check_webp_feature(feature, callback) {
    var kTestImages = {
        lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
        lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
        alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
        animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
    };
    var img = new Image();
    img.onload = function () {
        var result = (img.width > 0) && (img.height > 0);
        callback(feature, result);
    };
    img.onerror = function () {
        callback(feature, false);
    };
    img.src = "data:image/webp;base64," + kTestImages[feature];
}
```
[判断浏览支持情况](https://modernizr.com/)

[picture标签详细介绍](https://dev.opera.com/articles/responsive-images/)

### 可交互时间 Time to Interactive

### 使用过多的DOM节点 Uses An Excessive DOM Size

最佳DOM树：

- 总文档应该少于1500个节点。
- 文档最大深度为32层节点。
- 每个节点不应该超过60个子节点。

### 缓存静态资源 Uses inefficient cache policy on static assets

Cache-Control: max-age=31557600 （单位：秒）

[定义最佳缓存控制策略](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching#defining_optimal_cache-control_policy)
[缓存控制规范](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9)
[缓存控制](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)


https://developers.google.com/web/fundamentals/performance/resource-prioritization

<link rel="preload"> loadCSS方案

- 预加载
    >\<link rel="preload"\> 强制浏览器优先加载此资源，但资源如果3秒内未被当前页面所使用，将在控制台中警告。使用场景比如预载字体。

- 预连接
    >\<link rel="preconnect" href="https://example.com"\>

- DNS预解析
    >\<link rel="dns-prefetch"\>

- 预提取
    >\<link rel="prefetch" href="page-2.html"\>

[SRI Hash Generator](https://www.srihash.org/) 是一个在线生成 SRI 哈希值的工具。

//http://handlebarsjs.com/  html模板

[内容安全政策](https://developers.google.com/web/fundamentals/security/csp/?hl=zh-cn)

[ServiceWorker](https://developers.google.com/web/fundamentals/primers/service-workers/)
[离线指南](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/)
