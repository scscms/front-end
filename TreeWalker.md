# Javascript基础教程<sup>shine</sup>

## DOM 中 TreeWalker 对象的详解

TreeWalker对象是DOM2中提供的一个强大的工具，可以用来过滤文档中的节点，以便于产生自定义的节点集合。这听起来没有什么太大的用处，但是如果你需要处理诸如遍历DOM树这样的问题时，了解一下TreeWalker对象会带来很大的帮助。你可能已经很熟悉如何在Web页面中查找具有某个CSS样式名称的节点集合，如何在XML文件中查找某个属性为特定值的脚本写法。借助TreeWalker，仅需少量的工作也可以完成类似功能。在本文中，我将向你介绍TreeWalker对象，需要注意的是，TreeWalker对象已经在Firefox/Opera8+中支持，但是IE6、IE7尚不支持。（注：Chrome、Safari这些基于WebKit内核的浏览器也支持TreeWalker对象，IE9+也已经支持）

另外，和TreeWalker关系紧密的另外一个对象NodeIterator，也会在本文档中涵盖。TreeWalker是NodeIterator的升级版。

### document.createTreeWalker()方法

对于某些人来说，TreeWalker对象开起来有点儿神秘并且很复杂。实际上，要想使用TreeWalker对象，只需一个方法：document.createTreeWalker()。此方法有4个参数，可以完成大部分的常见需求，例如在文档中查找某种类型或者具有某个属性的节点。对于此方法简单介绍如下：
```javascript
    document.createTreeWalker(root, nodesToShow, filter, entityExpandBol);
```

来了解一下这4个参数：

    root：文档树搜索的起始节点
    nodesToShow：TreeWalker对象要访问的节点类型
    filter(or null)：用来过滤返回结果的自定义函数，null表示不使用自定义的过滤函数
    entityExpandBol：布尔值，表示是否需要扩展实体引用

对于NodeFilter参数可以有下列这些常量或其组合的取值：

- 1、NodeFilter.SHOW_ALL：搜索所有节点；
- 2、NodeFilter.SHOW_ELEMENT：搜索元素节点；
- 3、NodeFilter.SHOW_ATRRIBUTE：搜索特性节点；
- 4、NodeFilter.SHOW_TEXT：搜索文本节点；
- 5、NodeFilter.SHOW_ENTITY_REFERENCE：搜索实体引用节点；
- 6、NodeFilter.SHOW_ENTITY：搜索实体节点；
- 7、NodeFilter.SHOW_PROCESSING_INSTRUCTION：搜索PI节；
- 8、NodeFilter.SHOW_COMMENT：搜索注释节点；
- 9、NodeFilter.SHOW_DOCUMENT：搜索文档节点；
- 10、NodeFilter.SHOW_DOCUMENT_TYPE：搜索文档类型节点；
- 11、NodeFilter.SHOW_DOCUMENT_FRAGMENT：搜索文档碎片节节；
- 12、NodeFilter.SHOW_NOTATION：搜索记号节点；

虽然有如此多的常量可以用来限制TreeWalker返回的节点，但是在实际应用中，可能常用的也就是其中的少数几个常量。

我们先从一个最基本的示例开始：

```html
    <div id="contentarea">
        <p>Some <span>text</span></p>
        <b>Bold text</b>
    </div>
```
```javascript
    var rootnode = document.getElementById("contentarea");
    var walker = document.createTreeWalker(rootnode, NodeFilter.SHOW_ELEMENT, null, false);
```
在这个示例中，createTreeWalker方法的root参数为ID是contentarea的元素，让TreeWalker对象以这个节点为根开始进行遍历。第二个参数限制TreeWalker只遍历根节点下的“元素”节点（例如忽略文本节点和注释节点）。第三个参数设置为null表示不需要引入自定义的过滤器。第四个参数，用来控制实体引用是否被展开，这里我们设置为false。这段代码执行完毕之后，walker对象指向了包含DIV自己在内的以及DIV下的所有子元素节点（P, SPAN, B）。
TreeWalker的遍历方法

使用document.createTreeWalker()方法创建了过滤后的节点列表，然后可以使用TreeWalker的遍历方法对这些节点进行遍历：

|方法|描述|
|:------|:------|
|firstChild() 	|返回当前节点的第一个子节点|
|lastChild() 	|返回当前节点的最后一个子节点|
|nextNode() 	|返回过滤后的节点列表中的下一个节点|
|nextSibling() 	|返回当前节点的下一个兄弟节点|
|parentNode() 	|返回当前节点的父节点|
|previousNode() 	|返回过滤后的节点列表中的上一个节点|
|previousSibling() 	|返回当前节点的上一个兄弟节点|

currentNode:返回TreeWalker对象的当前位置或者当前节点。这是一个可读/写属性，可以通过设置此属性，让TreeWalker指向某个特定的节点。

不要把上述的这些方法和属性和标准DOM元素的方法和属性混淆，以上的方法只用在TreeWalker对象中，以实现遍历过滤后的节点集合的能力。

还是使用上面的示例代码，这次，我们加入一些代码来遍历TreeWalker返回的节点列表：
```javascript
    //接上面的代码
    alert(walker.currentNode.tagName); //alerts DIV (with id=contentarea)

    //遍历，显示所有的子节点
    while (walker.nextNode())
        alert(walker.currentNode.tagName); // P, SPAN, B.

    //重置TreeWalker的指向，让它指向根节点
    walker.currentNode = rootnode
    alert(walker.firstChild().tagName); // P
```

当你使用TreeWalker的遍历方法时，TreeWalker不仅依次返回过滤后的节点，同时它还移动了当前指向节点的指针，所以，在使用while (walker.nextNode())完成遍历之后，还要使用walker.currentNode=rootnode重置它的当前节点指向根节点，以便获取到第一个子元素。

再来一个示例加深一下对TreeWalker遍历的理解：
```html
    <p id="essay">George<span> loves </span> <b>JavaScript!</b></p>
```
```javascript
    var rootnode = document.getElementById("essay");
    var walker = document.createTreeWalker(rootnode, NodeFilter.SHOW_TEXT, null, false);

    walker.firstChild(); //Walk to first child node (the text "George")
    var paratext = walker.currentNode.nodeValue;

    while (walker.nextSibling()){ //Step through each sibling of "George"
        paratext += walker.currentNode.nodeValue;
    }

    alert(paratext); // "George loves JavaScript!"
```

在这个示例中，我们遍历了根节点下所有的文本节点以获取它完整的文本字符串。

在遍历TreeWalker的返回结果时，你也可以使用标准DOM元素的属性和方法。因为TreeWalker的返回值不仅仅返回了过滤后的节点，还包括这些节点在整个文档中的关系。比如下面这个示例：

```html
    <ul id="mylist">
        <li>List 1</li>
        <li>List 2</li>
        <li>List 3</li>
    </ul>
```
```javascript
    var rootnode = document.getElementById("mylist");
    var walker = document.createTreeWalker(rootnode, NodeFilter.SHOW_ELEMENT, null, false);

    alert(walker.currentNode.childNodes.length); //alerts 7 (includes text nodes)
    alert(walker.currentNode.getElementsByTagName("*").length); //alerts 3
```

这个示例中，使用TreeWalker查找UL节点下的所有元素。你可能会误以为alert(walker.currentNode.childNodes.length)会返回3，因为UL只有3个LI子元素。但是实际上计算上文本节点的话，UL元素就包含7个子元素了，这就是为什么上面的代码会返回7。

了解了如何遍历TreeWalker的返回节点列表之后，下面将介绍如何自定义过滤器。还记得document.createTreeWalker()函数的第三个参数吗？我们将这个参数指向一个自定义的函数来完成自定义过滤器的功能。
在document.createTreeWalker()中使用过滤器

TreeWalker对象的本质是提供一种在文档中过滤节点的能力。在前面的内容中，我们已经看到了可以使用NodeFilter的各种常量（例如NodeFilter.SHOW_ELEMENT）来完成最基本的过滤功能。但是在实际的场景中，这些常量可能还不足以支持你完成你的需求。这就需要用到document.createTreeWalker()函数的第三个参数，这个参数允许你自定义一个过滤函数来完成自定义的过滤，也就是说，对于第二个参数所指定的常量产生的结果再次进行过滤。

    document.createTreeWalker(root, nodesToShow, filter, entityExpandBol)

"filter"参数指向一个函数，例如：
```javascript
    function myfilter(node){
        if (node.tagName == "DIV" || node.tagName == "IMG") //只保留DIV和IMG元素
            return NodeFilter.FILTER_ACCEPT;
        else
            return NodeFilter.FILTER_SKIP;
    }
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, myfilter, false);
    while (walker.nextNode())
        walker.currentNode.style.display = "none"; //隐藏页面中所有的DIV和IMG元素
```
在上面的示例代码中，我们定义了一个叫做myfilter的函数，这个函数将仅保留DIV和IMG元素，而把其他的元素排除在外。作为过滤器的函数只接收一个参数，就是TreeWalker在遍历整个文档时当前所指向的节点。在过滤器函数中，你可以使用不同的返回值来实现接受、拒绝还是跳过当前的节点：

    NodeFilter.FILTER_ACCEPT
    NodeFilter.FILTER_REJECT
    NodeFilter.FILTER_SKIP

不言自明，FILTER_ACCEPT就是表示接受这个节点，将其包含到返回的结果中。但是FILTER_REJECT和FILTER_SKIP的含义可能会有些不那么明显了。对于FILTER_REJECT，TreeWalker将拒绝当前节点以及其所有的后代节点，也就是说，当你的过滤器函数返回FILTER_REJECT的时候，TreeWalker将不再遍历该节点下的所有后代节点。如果你需要仅仅过滤掉当前节点，并且也希望TreeWalker继续遍历该节点下的所有后代节点，那么请使用NodeFilter.FILTER_SKIP。例如对于上面的例子中，如果把 FILTER_SKIP 改为 FILTER_REJECT：

```javascript
    function myfilter(node){
        if (node.tagName=="DIV" || node.tagName=="IMG") //filter out DIV and IMG elements
            return NodeFilter.FILTER_ACCEPT;
        else
            return NodeFilter.FILTER_REJECT;
    }
```

这样的会导致返回的结果中可能并没有包含文档中全部的DIV和IMG元素，因为如果一个IMG元素作为一个P元素的子元素的话，那么由于P元素被返回了FILTER_REJECT，那么P元素下的IMG元素也不会被TreeWalker遍历。

组合使用NodeFilter常量

在前面的内容中我们已经了解到NodeFilter提供了很多常量来让我们获取某种类型的节点，这些常量也可以组合使用，例如：

    OR 操作：NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT
    AND 操作：NodeFilter.SHOW_TEXT + NodeFilter.SHOW_COMMENT
    NOT 操作：~NodeFilter.SHOW_COMMENT (获取所有的非注释节点)

只遍历所有的元素节点和文本节点：
```javascript
    document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, entityExpandBol);
```
这就是DOM2中提供的TreeWalker对象。请记住，并不是所有的浏览器都支持此对象。