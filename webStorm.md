# webStorm快捷键<sup>shine</sup>

IDE就是程序员的武器，而武器不在多而在精。webStorm前端开发神器你值得拥有。

- Ctrl + Shift + A	快速查找并使用编辑器所有功能（强记！）
- Ctrl + Shift + N 	通过文件名快速查找工程内的文件（必记）
- Ctrl + Shift + Alt + N 	通过一个字符快速查找位置（必记）
- Ctrl + Alt + L	格式化代码（常用）
- Shift+ F6         重构-重命名（常用）
- F2 或 Shift + F2 	高亮错误或警告快速定位
- Ctrl + ←/→      以单词作为边界跳光标位置（常用）
- Ctrl + W 		    选中单词（常用）多按一次W将选择整块代码
- ctrl + ]/[ 	    光标到代码块的前面或后面
- Ctrl + E 	        最近打开的文件（常用）
- Ctrl + Alt + L 	格式化代码（常用）
- Ctrl + P 		    方法参数提示
- Ctrl + Shift + U 	切换大小写
- Ctrl + Delete 	删除至下一个边界符
- Ctrl + Backspace 	删除至上一个边界符
- Shift + Delete	删除整行
- ctrl + Y 	删除一行
- Ctrl + X 	剪切行（也起删除整行作用）
- Ctrl + D 	复制行
- Ctrl + G 	查找行
- Ctrl + R 	替换文本
- Ctrl + F 	查找文本
- Ctrl + Shift + R 	指定目录内代码批量替换
- Ctrl + Shift + F 	指定目录内代码批量查找
- F3 		    查找下一个
- Shift + F3 	查找上一个
- Alt + F1 	    查找代码在其他界面模块的位置，颇为有用
- Ctrl + G 	    到指定行的代码
- Ctrl + Alt + T  	使用if, else, try, catch, for, etc等来围绕选中的代码（必记）
- Ctrl + /          添加//注释（常用）
- Ctrl + Shift + / 	添加/\*…\*/注释（常用）
- Ctrl + Shift + Up 	代码向上移动
- Ctrl + Shift + Down 	代码向下移动
- 写代码，按Tab生成代码
- Tab 	        扩大缩进
- Shift + Tab 	减少缩进
- Ctrl + B或Ctrl + 鼠标单击 	快速打开光标处的类或方法（NB的功能）
- Ctrl + Alt + B    跳转方法实现处
- Ctrl + Shift + I 	打开定义快速查找
- Alt + Up 	    跳转到上一个方法
- Alt + Down 	跳转到下一个方法
- Alt + F1 	    查找代码所在位置
- Alt + Shift + F 	将当前文件加入收藏夹
- Ctrl + Alt + S 	打开配置窗口
- Shift + Enter 	重新开始一行（无论光标在哪个位置）
- Ctrl + E 	        弹出最近打开的文件
- F11 	            切换标记（书签）
- Ctrl + Shift + F12 	切换最大化编辑器
- Alt + Shift + F 	    添至收藏夹

界面操作
- Alt + \[0-9\] 	快速拆合功能界面模块
- Alt + Shift + F 	将当前文件加入收藏夹
- Ctrl + Alt + S 	打开配置窗口
- Ctrl + Tab 	切换代码选项卡
- Ctrl + F4 	关闭当前代码选项卡
- Alt + ←/→ 	切换代码选项卡

## 函数注解：

愿你的代码不再是只有你和上帝能看懂，写写注解吧。
- @param {*}        任意类型参数
- @param {T}        泛类参数（即暂没指定的某一种类型）
- @param {...}      不定项参数（需要使用arguments或ES2015的扩展符参数获取）
- @param {string}   字符串参数
- @param {number}   数值参数
- @param {array}    数组参数
- @param {symbol}   符号参数
- @param {boolean}  布尔值参数
- @param {function} 函数值参数
- @param {Node}     DOM节点参数
- @param {function(...)}    函数值参数
- @param {!Array}    类数组参数（类似数组对象）
- @param {!Object}   类对象参数
- @param {Array.<string>}   以字符串组成的数组参数
- @param {string|number}    字符串或者数字参数
- @param {string=}    可选默认参数（即不传此值将使用默认值）
- @param {?Object}    可选参数（需要判断此值是否有效）
- @return {?String}   返回字符串，可能为空
- @suppress {uselessCode}