# HEAD

[![CC0](https://img.shields.io/badge/license-CC0-green.svg)](https://creativecommons.org/publicdomain/zero/1.0/)
[![Contributors](https://img.shields.io/github/contributors/joshbuchea/head.svg)](https://github.com/joshbuchea/HEAD/graphs/contributors)

一份关于任何\*可以\*写入到你的文档中 `<head>` 部分的清单。

## 目录

- [最小推荐](#最小推荐)
- [网页元素](#网页元素)
- [Meta 标签](#meta-标签)
- [链接](#链接)
- [网站图标](#网站图标)
- [社交](#社交)
  - [Facebook Open Graph](#facebook-open-graph)
  - [Twitter Card](#twitter-card)
  - [Google+ / Schema.org](#google--schemaorg)
  - [Facebook Instant Articles](#facebook-instant-articles)
  - [OEmbed](#oembed)
- [浏览器 / 平台](#浏览器--平台)
  - [Apple iOS](#apple-ios)
  - [Apple Safari](#apple-safari)
  - [Google Android](#google-android)
  - [Google Chrome](#google-chrome)
  - [Google Chrome Mobile (只针对 Android)](#google-chrome-mobile只针对-android)
  - [Microsoft Internet Explorer](#microsoft-internet-explorer)
- [国内的浏览器](#国内的浏览器)
  - [360 浏览器](#360-浏览器)
  - [QQ 移动浏览器](#qq-移动浏览器)
  - [UC 移动浏览器](#uc-移动浏览器)
- [应用链接](#应用链接)
- [注意](#注意)
  - [性能](#性能)
- [其他资源](#其他资源)
- [相关项目](#相关项目)
- [其他格式](#其他格式)
- [翻译](#翻译)
- [贡献](#贡献)
  - [贡献者](#贡献者)
- [作者](#作者)
- [许可](#许可)

## 最小推荐

下面是基本的、最低限度的网站基本标签：

```html
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<!-- 以上 3 个 meta 标签 *必须* 放在 head 的最前面；其他任何的 head 内容必须在这些标签的 *后面* -->
<title>页面标题</title>
```

**[⬆ 返回顶部](#目录)**

## 网页元素

有效的 `<head>` 元素包括 `meta`、`link`、`title`、`style`、`script`、`noscript` 和 `base`。

``` html
<!-- Meta 标签提供了文档如何被其他技术（如，机器、搜索引擎、浏览器等）理解和渲染的信息。 -->
<meta charset="utf-8">

<!-- 设置文档标题 -->
<title>页面标题</title>

<!-- 基本 URL 作用于文档中所包含的所有相对 URL -->
<base href="https://example.com/page.html">

<!-- 链接外部 CSS 文件 -->
<link rel="stylesheet" href="styles.css">

<!-- 用于文档内的 CSS -->
<style>
  /* ... */
</style>

<!-- JavaScript & No-JavaScript 标签 -->
<script>
  // function(s) go here
</script>
<noscript>
  <!--无 JS 时显示-->
</noscript>
```

**[⬆ 返回顶部](#目录)**

## Meta 标签

``` html
<!-- 设置文档的字符编码 -->
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge"><!-- † -->
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<!-- 
  以上 3 个 meta 标签 *必须* 放在 head 的最前面；其他任何的 head 内容必须在这些标签的 *后面*

  † 如果您的项目必须支持 Internet Explorer 11 之前的版本，请使用 content="ie-edge" 标签。
  
 -->

<!-- 允许控制资源的过度加载 -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'">
<!-- 尽早地放置在文档中 -->
<!-- 仅应用于该标签下的资源 -->

<!-- Web 应用的名称（仅当网站被用作为一个应用时才使用）-->
<meta name="application-name" content="应用名称">

<!-- 针对页面的简短描述（限制 150 字符）-->
<!-- 在*某些*情况下，该描述是被用作搜索结果展示片段的一部分 -->
<meta name="description" content="一个页面描述">

<!-- 控制搜索引擎的抓取和索引行为 -->
<meta name="robots" content="index,follow"><!-- 所有搜索引擎 -->
<meta name="googlebot" content="index,follow"><!-- 仅对 Google 有效 -->

<!-- 告诉 Google 不显示网站链接的搜索框 -->
<meta name="google" content="nositelinkssearchbox">

<!-- 告诉 Google 不提供此页面的翻译 -->
<meta name="google" content="notranslate">

<!-- 验证网址所有权 -->
<meta name="google-site-verification" content="verification_token"><!-- Google Search Console -->
<meta name="yandex-verification" content="verification_token"><!-- Yandex Webmasters -->
<meta name="msvalidate.01" content="verification_token"><!-- Bing Webmaster Center -->
<meta name="alexaVerifyID" content="verification_token"><!-- Alexa Console -->
<meta name="p:domain_verify" content="code from pinterest"><!-- Pinterest Console -->
<meta name="norton-safeweb-site-verification" content="norton code"><!-- Norton Safe Web -->

<!-- 确定用于构建页面的软件（如 - WordPress、Dreamweaver）-->
<meta name="generator" content="program">

<!-- 关于你的网站主题的简短描述 -->
<meta name="subject" content="你的网站主题">

<!-- 基于网站内容给出一般的年龄分级 -->
<meta name="rating" content="General">

<!-- 允许控制 referrer 信息如何传递 -->
<meta name="referrer" content="no-referrer">

<!-- 禁用自动检测和格式化可能的电话号码 -->
<meta name="format-detection" content="telephone=no">

<!-- 通过设置为 "off" 完全退出 DNS 预取 -->
<meta http-equiv="x-dns-prefetch-control" content="off">

<!-- 在客户端存储 cookie，web 浏览器的客户端识别 -->
<meta http-equiv="set-cookie" content="name=value; expires=date; path=url">

<!-- 指定要显示在一个特定框架中的页面 -->
<meta http-equiv="Window-Target" content="_value">

<!-- 地理标签 -->
<meta name="ICBM" content="latitude, longitude">
<meta name="geo.position" content="latitude;longitude">
<meta name="geo.region" content="country[-state]"><!-- 国家代码 (ISO 3166-1): 强制性, 州代码 (ISO 3166-2): 可选; 如 content="US" / content="US-NY" -->
<meta name="geo.placename" content="city/town"><!-- 如 content="New York City" -->
```

- 📖 [Google 可以识别的 Meta 标签](https://support.google.com/webmasters/answer/79812?hl=zh-Hans)
- 📖 [WHATWG Wiki: Meta 拓展](https://wiki.whatwg.org/wiki/MetaExtensions)
- 📖 [ICBM - 维基百科](https://en.wikipedia.org/wiki/ICBM_address#Modern_use)
- 📖 [地理标记 - 维基百科](https://en.wikipedia.org/wiki/Geotagging#HTML_pages)

**[⬆ 返回顶部](#目录)**

## 链接

``` html
<!-- 指向外部 CSS 样式表 -->
<link rel="stylesheet" href="https://example.com/styles.css">

<!-- 有助于防止出现内容重复的问题 -->
<link rel="canonical" href="https://example.com/2010/06/9-things-to-do-before-entering-social-media.html">

<!-- 之前用于包含 icon 的链接，但目前已被废弃 -->
<link rel="shortlink" href="https://example.com/?p=42">

<!-- 链接到当前文档的一个 AMP HTML 版本 -->
<link rel="amphtml" href="https://example.com/path/to/amp-version.html">

<!-- 链接到一个指定 Web 应用程序“安装”凭据的 JSON 文件 -->
<link rel="manifest" href="manifest.json">

<!-- 链接到关于页面所有者的信息 -->
<link rel="author" href="humans.txt">

<!-- 指向一个适用于链接内容的版权申明 -->
<link rel="license" href="copyright.html">

<!-- 给出可能的你的另一种语言的文档位置参考 -->
<link rel="alternate" href="https://es.example.com/" hreflang="es">

<!-- 提供了关于作者或其他人的信息 -->
<link rel="me" href="https://google.com/profiles/thenextweb" type="text/html">
<link rel="me" href="mailto:name@example.com">
<link rel="me" href="sms:+15035550125">

<!-- 链接到一个描述历史记录、文档或其他具有历史意义的材料的集合的文档 -->
<link rel="archives" href="https://example.com/archives/">

<!-- 链接到层次结构中的顶级资源 -->
<link rel="index" href="https://example.com/">

<!-- 提供了自我引用 - 当文档有多个可能的引用时非常有用 -->
<link rel="self" type="application/atom+xml" href="https://example.com/atomFeed.php?page=3">

<!-- 分别是在一系列文件中的第一个、下一个、上一个和最后一个 -->
<link rel="first" href="https://example.com/atomFeed.php">
<link rel="next" href="https://example.com/atomFeed.php?page=4">
<link rel="prev" href="https://example.com/atomFeed.php?page=2">
<link rel="last" href="https://example.com/atomFeed.php?page=147">

<!-- 当使用第三方服务来维护博客时使用 -->
<link rel="EditURI" href="https://example.com/xmlrpc.php?rsd" type="application/rsd+xml" title="RSD">

<!-- 当另一个 WordPress 博客链接到你的 WordPress 博客或文章时形成一个自动化的评论 -->
<link rel="pingback" href="https://example.com/xmlrpc.php">

<!-- 当你在自己的页面上链接到一个 url 时通知它 -->
<link rel="webmention" href="https://example.com/webmention">

<!-- 启用通过 Micropub 客户端发布你的域名 -->
<link rel="micropub" href="https://example.com/micropub">

<!-- 加载一个外部的 HTML 文件到当前页面 -->
<link rel="import" href="/path/to/component.html">

<!-- 打开搜索 -->
<link rel="search" href="/open-search.xml" type="application/opensearchdescription+xml" title="Search Title">

<!-- Feeds -->
<link rel="alternate" href="https://feeds.feedburner.com/example" type="application/rss+xml" title="RSS">
<link rel="alternate" href="https://example.com/feed.atom" type="application/atom+xml" title="Atom 0.3">

<!-- 预取，预载，预浏览 -->
<link rel="dns-prefetch" href="//example.com/">
<link rel="preconnect" href="https://www.example.com/">
<link rel="prefetch" href="https://www.example.com/">
<link rel="prerender" href="https://example.com/">
<link rel="preload" href="image.png" as="image">
<!-- 更多信息：https://css-tricks.com/prefetching-preloading-prebrowsing/ -->
```

**[⬆ 返回顶部](#目录)**

## 网站图标

``` html
<!-- 针对 IE 10 及以下版本 -->
<!-- 如果将 `favicon.ico` 放在根目录下，则无需标签 -->

<!-- 对于 IE 11、Chrome、Firefox、Safari 和 Opera -->
<link rel="icon" type="image/png" sizes="16x16" href="/path/to/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/path/to/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/path/to/favicon-96x96.png">
<!-- 更多信息: https://bitsofco.de/all-about-favicons-and-touch-icons/ -->
```

- 📖 [所有关于网站图标（和触摸图标）的信息](https://bitsofco.de/all-about-favicons-and-touch-icons/)
- 📖 [网站图标对照表](https://github.com/audreyr/favicon-cheat-sheet)

**[⬆ 返回顶部](#目录)**

## 社交

### Facebook Open Graph

``` html
<meta property="fb:app_id" content="123456789">
<meta property="og:url" content="https://example.com/page.html">
<meta property="og:type" content="website">
<meta property="og:title" content="Content Title">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:description" content="Description Here">
<meta property="og:site_name" content="Site Name">
<meta property="og:locale" content="en_US">
<meta property="article:author" content="">
```

- 📖 [Facebook 的 Open Graph 的标记](https://developers.facebook.com/docs/sharing/webmasters#markup)
- 📖 [Open Graph 协议](https://ogp.me/)
- 🛠 [页面验证 - Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

### Twitter Card

``` html
<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@site_account">
<meta name="twitter:creator" content="@individual_account">
<meta name="twitter:url" content="https://example.com/page.html">
<meta name="twitter:title" content="Content Title">
<meta name="twitter:description" content="Content description less than 200 characters">
<meta name="twitter:image" content="https://example.com/image.jpg">
```

- 📖 [名片入门指南 - Twitter 开发者](https://dev.twitter.com/cards/getting-started)
- 🛠 [页面验证 - Twitter Card Validator](https://cards-dev.twitter.com/validator)
### Google+ / Schema.org

``` html
<link href="https://plus.google.com/+YourPage" rel="publisher">
<meta itemprop="name" content="内容标题">
<meta itemprop="description" content="内容描述少于 200 个字符">
<meta itemprop="image" content="https://example.com/image.jpg">
```

### Pinterest

根据他们的[帮助中心](https://help.pinterest.com/en/articles/prevent-people-saving-things-pinterest-your-site)可知，Pinterest 允许你禁止他人保存你网站里的内容。`description` 为可选。

``` html
<meta name="pinterest" content="nopin" description="Sorry, you can't save from my website!">
```

### Facebook Instant Articles

``` html
<meta charset="utf-8">
<meta property="op:markup_version" content="v1.0">

<!-- 你的文章的 Web 版网址 -->
<link rel="canonical" href="https://example.com/article.html">

<!-- 用于该文章的样式 -->
<meta property="fb:article_style" content="myarticlestyle">
```

- 📖 [创建文章 - Instant Articles](https://developers.facebook.com/docs/instant-articles/guides/articlecreate)
- 📖 [代码示例 - Instant Articles](https://developers.facebook.com/docs/instant-articles/reference)

### OEmbed

``` html
<link rel="alternate" type="application/json+oembed"
  href="https://example.com/services/oembed?url=http%3A%2F%2Fexample.com%2Ffoo%2F&amp;format=json"
  title="oEmbed Profile: JSON">
<link rel="alternate" type="text/xml+oembed"
  href="https://example.com/services/oembed?url=http%3A%2F%2Fexample.com%2Ffoo%2F&amp;format=xml"
  title="oEmbed Profile: XML">
```

- 📖 [oEmbed 格式](https://oembed.com/)

**[⬆ 返回顶部](#目录)**

## 浏览器 / 平台

### Apple iOS

``` html
<!-- 智能应用 Banner -->
<meta name="apple-itunes-app" content="app-id=APP_ID,affiliate-data=AFFILIATE_ID,app-argument=SOME_TEXT">

<!-- 禁用自动检测和格式化可能的电话号码 -->
<meta name="format-detection" content="telephone=no">

<!-- 添加到主屏幕 -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="应用标题">

<!-- 触摸图标 -->
<!-- 在大多数情况下，在 `<head>` 中，一个 180×180px 触摸图标就已经足够了 -->
<link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png">

<!-- 启动画面（已无效） -->
<link rel="apple-touch-startup-image" href="path/to/startup.png">

<!-- iOS 应用深层链接 -->
<meta name="apple-itunes-app" content="app-id=APP-ID, app-argument=http/url-sample.com">
<link rel="alternate" href="ios-app://APP-ID/http/url-sample.com">
```

- 📖 [Apple Meta 标签](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html)

### Apple Safari

```html
<!-- 固定网站 -->
<link rel="mask-icon" href="path/to/icon.svg" color="red">
```

### Google Android

``` html
<meta name="theme-color" content="#E64545">

<!-- 添加到主屏幕 -->
<meta name="mobile-web-app-capable" content="yes">
<!-- 更多信息：https://developer.chrome.com/multidevice/android/installtohomescreen -->
```

### Google Chrome

``` html
<link rel="chrome-webstore-item" href="https://chrome.google.com/webstore/detail/APP_ID">

<!-- 禁用翻译提示 -->
<meta name="google" content="notranslate">
```

### Google Chrome Mobile (只针对 Android)

从 Chrome 31 开始，你可以设置你的 Web 应用为“app mode”，如 Safari。

``` html
<!-- 链接到一个 manifest 并定义 manifest 的元数据 -->
<!-- manifest.json 中的例子也可以通过以下链接找到 -->
<link rel="manifest" href="manifest.json">

<!-- 定义你的网页为 Web 应用 -->
<meta name="mobile-web-app-capable" content="yes">

<!-- 主屏幕图标 -->
<link rel="icon" sizes="192x192" href="/path/to/highres-icon.png">
```

- 📖 [Google 开发者](https://developer.chrome.com/multidevice/android/installtohomescreen)

### Microsoft Internet Explorer

``` html
<meta http-equiv="x-ua-compatible" content="ie=edge">
<meta name="skype_toolbar" content="skype_toolbar_parser_compatible">

<!-- IE10: 禁用链接点击高亮 (https://blogs.windows.com/buildingapps/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10/) -->
<meta name="msapplication-tap-highlight" content="no">

<!-- 固定网站 (https://msdn.microsoft.com/en-us/library/dn255024(v=vs.85).aspx) -->
<meta name="application-name" content="Sample Title">
<meta name="msapplication-tooltip" content="A description of what this site does.">
<meta name="msapplication-starturl" content="https://example.com/index.html?pinned=true">
<meta name="msapplication-navbutton-color" content="#FF3300">
<meta name="msapplication-window" content="width=800;height=600">
<meta name="msapplication-task" content="name=Task 1;action-uri=https://host/Page1.html;icon-uri=https://host/icon1.ico">
<meta name="msapplication-task" content="name=Task 2;action-uri=https://microsoft.com/Page2.html;icon-uri=https://host/icon2.ico">
<meta name="msapplication-badge" value="frequency=NUMBER_IN_MINUTES;polling-uri=https://example.com/path/to/file.xml">
<meta name="msapplication-TileColor" content="#FF3300">
<meta name="msapplication-TileImage" content="path/to/tileimage.jpg">

<meta name="msapplication-config" content="https://example.com/browserconfig.xml">
<meta name="msapplication-notification" content="frequency=60;polling-uri=https://example.com/livetile;polling-uri2=https://example.com/livetile2">
<meta name="msapplication-task-separator" content="1">
```

**[⬆ 返回顶部](#目录)**

## 国内的浏览器

### 360 浏览器

``` html
<!-- 选择渲染引擎 -->
<meta name="renderer" content="webkit|ie-comp|ie-stand">
```

### QQ 移动浏览器

``` html
<!-- 在指定方向上锁定屏幕（锁定横/竖屏） -->
<meta name="x5-orientation" content="landscape/portrait">
<!-- 全屏显示此页面 -->
<meta name="x5-fullscreen" content="true">
<!-- 页面将以“应用模式”显示（全屏等）-->
<meta name="x5-page-mode" content="app">
```

### UC 移动浏览器

``` html
<!-- 在指定方向上锁定屏幕（锁定横/竖屏） -->
<meta name="screen-orientation" content="landscape/portrait">

<!-- 全屏显示此页面 -->
<meta name="full-screen" content="yes">

<!-- 即使在“文本模式”下，UC 浏览器也会显示图片 -->
<meta name="imagemode" content="force">

<!-- 页面将以“应用模式”显示（全屏、禁止手势等） -->
<meta name="browsermode" content="application">

<!-- 在此页面禁用 UC 浏览器的“夜间模式” -->
<meta name="nightmode" content="disable">

<!-- 简化页面，减少数据传输 -->
<meta name="layoutmode" content="fitscreen">

<!-- 禁用的 UC 浏览器的功能，“当此页面中有较多文本时缩放字体” -->
<meta name="wap-font-scale" content="no">
```

- 📖 [UC 浏览器文档](https://www.uc.cn/download/UCBrowser_U3_API.doc)

**[⬆ 返回顶部](#目录)**

## 应用链接

``` html
<!-- iOS -->
<meta property="al:ios:url" content="applinks://docs">
<meta property="al:ios:app_store_id" content="12345">
<meta property="al:ios:app_name" content="App Links">

<!-- Android -->
<meta property="al:android:url" content="applinks://docs">
<meta property="al:android:app_name" content="App Links">
<meta property="al:android:package" content="org.applinks">

<!-- 页面回退 -->
<meta property="al:web:url" content="https://applinks.org/documentation">
```

- 📖 [应用链接文档](https://applinks.org/documentation/)

**[⬆ 返回顶部](#目录)**

## 注意

### 性能

当启用 GZIP 时，移动 `href` 属性到该元素的开头以提高压缩，因为 `href` 属性被用于 `a`、`base` 和 `link` 标签。

示例:

``` html
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">
```

**[⬆ 返回顶部](#目录)**

## 其他资源

- 📖 [HTML5 样板文档：HTML 标签](https://github.com/h5bp/html5-boilerplate/blob/master/dist/doc/html.md)
- 📖 [HTML5 样板文档：扩展和定制](https://github.com/h5bp/html5-boilerplate/blob/master/dist/doc/extend.md)

**[⬆ 返回顶部](#目录)**

## 相关项目

- [Atom HTML Head 片段](https://github.com/joshbuchea/atom-html-head-snippets) - Atom `HEAD` 片段包
- [Sublime Text HTML Head 片段](https://github.com/marcobiedermann/sublime-head-snippets) - Sublime Text `HEAD` 片段包
- [head-it](https://github.com/hemanth/head-it) - `HEAD` 片段的 CLI 接口
- [vue-head](https://github.com/ktquez/vue-head) - 在 Vue.js 中操作 `HEAD` 标签的 meta 信息

**[⬆ 返回顶部](#目录)**

## 其他格式

- 📄 [PDF](https://gitprint.com/joshbuchea/HEAD/blob/master/README.md)

**[⬆ 返回顶部](#目录)**

## 翻译

- 🇺🇸 [英语/English](https://github.com/joshbuchea/HEAD)
- 🇨🇳 [简体中文/Chinese (Simplified)](https://github.com/Amery2010/HEAD)
- 🇧🇷 [巴西葡萄牙语/Brazilian Portuguese](https://github.com/Webschool-io/HEAD)
- 🇮🇹 [意大利语/Italian](https://github.com/Fakkio/HEAD)
- 🇯🇵 [日语/Japanese](https://coliss.com/articles/build-websites/operation/work/collection-of-html-head-elements.html)
- 🇰🇷 [韩语/Korean](https://github.com/Lutece/HEAD)
- 🇷🇺 [俄罗斯语/Russian/Русский](https://github.com/Konfuze/HEAD)
- 🇹🇷 [土耳其语/Turkish/Türkçe](https://github.com/mkg0/HEAD)

**[⬆ 返回顶部](#目录)**

## 贡献

**开启一个 issue 或一个 pull 请求来提出修改或补充。**

### 指南

** HEAD ** 仓库由两个分支组成：

#### 1、`master`

对该分支包含的 `README.md` 文件的修改会自动反映在 [gethead.info](https://gethead.info/) 网站上。 所有对照表内容的更改都应该针对此文件。

请按照下列步骤 pull 请求：

- 只修改一个标签，或一次一组相关的标签
- 对属性使用双引号
- 请不要在自我闭合的元素中使用斜线 —— 即便 HTML5 规范中说，他们是可选的
- 考虑在文档中加入链接以支持你所提到的变化

#### 2. `gh-pages`

该分支负责 [gethead.info](https://gethead.info/) 网站。我们使用 [Jekyll](https://jekyllrb.com/) 通过 [GitHub Pages](https://pages.github.com/) 服务来部署 `README.md` Markdown 文件。所有网站相关的修改必须集中在这里。

你可能需要通过 [Jekyll 文档](https://jekyllrb.com/docs/home/) 来了解 Jekyll 是如何在该分支上工作的。

### 贡献者

列出所有超级棒的 [贡献者们](https://github.com/joshbuchea/HEAD/graphs/contributors).

## 作者

**[Josh Buchea](https://joshbuchea.com/)**

### 翻译者

**[子丶言](https://xiangfa.org/)**

## 协议

![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png "CC0")

**[⬆ 返回顶部](#目录)**
