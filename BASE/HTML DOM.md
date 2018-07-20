# HTML DOM(Document Object Model) 参考手册<sup>shine</sup>

### HTML DOM 节点的概念
HTML DOM(Document Object Model)文件对象模型中，所有的元素都是一个独立的节点：概念如下：

- 文件(document)本身是一个文书节点
- 所有的HTML元素称为元素节点
- 所有的HTML属性称为属性节点
- 文本文件里的HTML元素称为文本文件节点
- 注释称为注释节点

### 什么是元素对象(Element Object)？

HTML DOM中，元素对象（Element Object）代表了一个HTML元素。

元素对象可以是（元素节点、文件节点、属性节点、注释节点）的子节点。

一个容纳了子节点的文件列表对象像是HTML元素的收集器，代表了一个列表节点。

元素可以有属性，属性为属性节点。详细请参照属性部分。

### 文件对象的属性

  能够在HTML元素上使用的属性

- `element.accessKey`: 设置或返回元素的accessKey属性
- `element.attributes`: 返回指定节点的属性的集合
- `element.childElementCount`: 返回元素的子元素的数量
- `element.childNodes`: 返回元素的子节点（包括文本节点和注释节点）的集合
- `element.children`: 返回元素的子元素的集合
- `element.classList`: 作为DOMTokenList对象返回元素的class值
- `element.className`: 设置或返回元素的class属性
- `element.clientHeight`: 返回元素的可见高度（包括padding）
- `element.clientLeft`: 返回元素的左边线框的宽度
- `element.clientTop`: 返回元素的上边线框的宽度
- `element.clientWidth`: 返回元素的可见宽度（包括padding）
- `element.contentEditable`: 设置或返回元素是否可以编辑
- `element.dir`: 设置或返回元素dir属性的值（文字方向）
- `element.firstChild`: 返回节点的第一个子节点
- `element.firstElementChild`: 返回元素的第一个子元素
- `element.id`: 设置或返回元素的id属性的值
- `element.innerHTML`: 设置或返回HTML文档中元素的内容
- `element.isContentEditable`: 判断元素是否可编辑
- `element.lang`: 设置或返回元素的lang属性的值
- `element.lastChild`: 返回节点的最后一个子节点
- `element.lastElementChild`: 返回节点的最后一个子元素
- `element.nameSpaceURI`: 返回元素的空间名称URI
- `element.nextElementSibling`: 返回指定元素之后的下一个兄弟元素
- `element.nextSibling`: 返回指定节点之后的下一个兄弟节点
- `element.nodeName`: 返回节点的名称
- `element.nodeType`: 返回节点的类型
- `element.nodeValue`: 设置或返回节点的值
- `element.offsetHeight`: 返回元素的可见高度（包括padding、border、滑动条）
- `element.offsetWidth`: 返回元素的可见宽度（包括padding、border、滑动条）
- `element.offsetLeft`: 返回元素的左边起始位置
- `element.offsetParent`: 返回一个最近的包含该当元素的基准元素
- `element.offsetTop`: 返回元素的上边起始位置
- `element.offsetWidth`: 返回元素的可见宽度（包括padding、border、滑动条）
- `element.ownerDocument`: 返回节点的根元素
- `element.parentElement`: 返回元素的母元素节点
- `element.parentNode`: 返回节点的母节点
- `element.previousElementSibling`: 返回指定元素的前一个兄弟元素
- `element.previousSibling`: 返回指定节点的前一个兄弟节点
- `element.querySelector`: 使用指定的css选择器获取与之对应的指定元素的第一个子元素
- `element.scrollHeight`: 返回元素的高度，包括padding
- `element.scrollLeft`: 设置或返回元素的水平滑动条距离左边的位置
- `element.scrollTop`: 设置或返回元素的垂直滑动条距离上边的位置
- `element.scrollWidth`: 返回元素的宽度，包括padding
- `element.style`: 设置或返回元素的style属性的值
- `element.tagName`: 返回标签名称
- `element.textContent`: 设置或返回节点及其子节点的文本内容
- `element.title`: 设置或返回元素的title属性

### 文件对象的方法

  能够在HTML元素上使用的方法
  
- `element.addEventListener()`: 给元素添加一个事件处理程序
- `element.appendChild()`: 在指定的节点后面添加子节点
- `element.blur()`: 取消定位某个可聚焦元素
- `element.click()`: 模拟鼠标点击元素
- `element.cloneNode()`: 从当前文档复制一个节点
- `element.compareDocumentPosition()`: 获得节点之间的位置关系
- `element.contains()`: 如果一个节点是另一个节点的子孙返回true
- `element.focus()`: 定位某个可聚焦元素
- `element.getAttribute()`: 返回元素上的指定的属性的值
- `element.getAttributeNode()`: 返回元素上的指定的属性节点
- `element.getElementsByClassName()`: 据指定的class名，返回其子元素集合
- `element.getElementsByTagName()`: 返回指定的元素的子元素的列表集合
- `element.hasAttribute()`: 判断元素是否带有指定的特定属性
- `element.hasattributes()`: 判断指定的节点是否带有属性
- `element.hasChildNodes()`: 判断指定的节点是否带有子节点
- `element.insertBefore()`: 在指定位置插入子节点
- `element.isDefaultNamespace()`: 判断空间名称URI是否是默认值
- `element.isEqualNode()`: 检查两个元素是否相等
- `element.isSameNode()`: 检查两个元素是否是相同节点
- `element.isSupported()`: 如果元素支持指定的特性，返回true
- `element.normalize()`: 合并相邻文本节点，删除空文本节点
- `element.querySelectorAll()`: 使用指定的CSS选择器获取指定元素中与之匹配的所有子元素
- `element.removeAttribute()`: 删除元素上的指定属性
- `element.removeAttributeNode()`: 删除元素上的指定属性
- `element.removeChild()`: 删除元素上的节点
- `element.removeEventListener()`: 取消给元素添加的事件处理程序
- `element.replaceChild()`: 取代元素子节点
- `element.setAttribute()`: 设置或改变属性及属性的值
- `element.setAttributeNode()`: 设置或改变属性节点

### 节点列表的属性和方法
  节点列表上使用的属性和方法

- `nodelist.length`: 返回节点列表的长度
- `nodelist.item()`: 根据指定的序列号返回节点列表中对应的节点
