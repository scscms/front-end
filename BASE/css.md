# 不常用但实用css<sup>shine</sup>
- `content-visibility` 是chrome85今年新增的特性，可解决长列表渲染性能问题，相关知识`contains-intrinsic-size`。
- `pointer-events` 属性可指定元素是否响应鼠标事件，设为`none`时等于故意要点穿（穿透）。可用于水印图层。
- `-webkit-line-clamp` 指定多行显示，超出后最后一行显示"..."
```css
div{
    display: -webkit-box; /*值必须为-webkit-box或者-webkit-inline-box*/
    -webkit-box-orient: vertical; /*值必须为vertical*/
    -webkit-line-clamp: 2; /*值为数字，表示一共显示几行*/
    overflow: hidden;
}
```
- `all: unset` 将除却 unicode-bidi 与 direction 之外的所有属性重设至其初始值，或继承值。
- `caret-color` 用来定义插入光标（caret）的颜色。
- `clip-path / shape-outside`  clip-path 属性使用裁剪方式创建元素的可显示区域。shape-outside 裁剪方式排版。
- `object-fit / object-position` 设置可替换元素如何适应高宽和对方方式。注: 其中可替换元素有 iframe，video，embed，img，option，audio，canvas，object
- `font-stretch` 为字体定义一个正常或经过伸缩变形的字体外观，它仅仅意味着当有多种字体可供选择时，会为字体选择最适合的大小。
```js
/*
normal 默认字体
semi-condensed, condensed, extra-condensed, ultra-condensed 小于默认字体
semi-expanded, expanded, extra-expanded, ultra-expanded 大于默认字体
* */
```
- `font-variant-caps`  可以控制大写字母特殊字符的使用。
```js
/*
 normal 关闭一切特殊字符变体的使用。
 small-caps 允许小型大写字母的使用（OpenType 特性：smcp）。小型大写字母指使用大写形式，但尺寸与对应小写字母相同的字母。
 all-small-caps 将大小写字母全部转化为小型大写字母。（OpenType 特性: c2sc, smcp）。
 petite-caps 允许特小型大写字母的使用（OpenType 特性: pcap）。
 all-petite-caps 将大小写字母全部转化为小型大写字母。（OpenType 特性: c2pc, pcap）。
 unicase 允许将大写字母转化为小型大写字母与普通小写字母的混用 （OpenType 特性: unic）。
 titling-caps 允许首字母大写（OpenType 特性: titl）。大写字母变体字符通常被设计成用于小写字母。在标题序列中，如果均使用大写字母，可能会带来过于强烈的视觉效果。首字母大写即用来应对这种情况。
* */
```
- `max-content / min-content / fill-available / fit-content` 这几个值都可用在 width, height, min-width, min-height, max-width 和 max-height 属性上。display 必须为 inline-block 或者 block，否则上面的值不起作用。
- `max() / min() / clamp()`  max 在两者这件取最大; min 函数在两者之间取最小; clamp 三者取中间值
- `scroll-behavior`  当用户通过 API 触发滚动操作时，CSS 属性 scroll-behavior 为一个滚动框指定滚动行为， 平滑到达还是立即到达
- conic-gradient()  在渐变中我们知道
- :out-of-range / :in-range
- writing-mode
