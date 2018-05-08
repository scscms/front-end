# ESLint语法检查<sup>shine</sup>

>ESLint是一个用来识别 ECMAScript 并且按照规则给出报告的代码检测工具，使用它可以避免低级错误和统一代码的风格。

### 普通应用
ESLint有两种安装模式：全局或局部。全局安装时依赖的模块也必须全局安装，配置也是全局配置，针对非团队合作时可以考虑。在此我们推荐局部安装，以下讲解也是局部安装内容！

- 局部安装

```
$ npm install eslint --save-dev
```

- 配置

```
$ node_modules\.bin\eslint --init
? How would you like to configure ESLint? (Use arrow keys)
  Answer questions about your style
❯ Use a popular style guide #选择并回车
  Inspect your JavaScript file(s)
? Which style guide do you want to follow? (Use arrow keys)
  Google
  Airbnb
❯ Standard #选择并回车
? What format do you want your config file to be in? (Use arrow keys)
❯ JavaScript #选择并回车
  YAML
  JSON
```

然后会自动安装5个依赖包。并自动生成`.eslintrc.js`文件

- 添加node执行命令

在package.json文件里添加：
```
"scripts": {
    ...
    "lint": "eslint --ext .js src/",
    "lint-fix": "eslint --fix --ext .js src/"
}
```
```
$ npm run lint #语法检查
$ npm run lint-fix #语法检查并尝试修正
```

### Vue应用

在上面安装的基础上再执行以下操作

- 安装依赖包

```
$ npm install babel-eslint eslint-loader eslint-plugin-html eslint-friendly-formatter --save-dev
```

- 修改`.eslintrc.js`文件

```
module.exports = {
  "extends": "standard",
  "plugins": [
    "html"
  ],
  "parser": "babel-eslint",
  "rules": {
    "no-console": "off",
  }
};
```
- 修改package.json文件：
```
"scripts": {
    ...
    "lint": "eslint --ext .js --ext .vue src/",
    "lint-fix": "eslint --fix --ext .js --ext .vue src/"
}
```

- 添加预处理功能
在`build/webpack.base.conf.js`里添加，目的是让`webpack`自动执行语法检查。

```
 {
    test: /\.(vue|js|jsx)$/,
    loader: 'eslint-loader',
    include:[path.resolve(__dirname, '../src')],
    options: {
      formatter: require('eslint-friendly-formatter')
    },
    enforce: 'pre'
}
```

## 使用内联注释禁用规则

- 可以在你的文件中使用以下格式的块注释来临时禁止规则出现警告：
```
/* eslint-disable */

alert('foo');

/* eslint-enable */

```

- 你也可以对指定的规则启用或禁用警告:

```
/* eslint-disable no-alert, no-console */

alert('foo');
console.log('bar');

/* eslint-enable no-alert, no-console */
```

- 如果在整个文件范围内禁止规则出现警告，将 /* eslint-disable */ 块注释放在文件顶部：

```
/* eslint-disable */

alert('foo');
```

- 你也可以对整个文件启用或禁用警告:

```
/* eslint-disable no-alert */

// Disables no-alert for the rest of the file
alert('foo');
```

- 可以在你的文件中使用以下格式的行注释或块注释在某一特定的行上禁用所有规则：

```
alert('foo'); // eslint-disable-line

// eslint-disable-next-line
alert('foo');

/* eslint-disable-next-line */
alert('foo');

alert('foo'); /* eslint-disable-line */
```

- 在某一特定的行上禁用某个指定的规则：

```
alert('foo'); // eslint-disable-line no-alert

// eslint-disable-next-line no-alert
alert('foo');

alert('foo'); /* eslint-disable-line no-alert */

/* eslint-disable-next-line no-alert */
alert('foo');
```

- 在某个特定的行上禁用多个规则：

```
alert('foo'); // eslint-disable-line no-alert, quotes, semi

// eslint-disable-next-line no-alert, quotes, semi
alert('foo');

alert('foo'); /* eslint-disable-line no-alert, quotes, semi */

/* eslint-disable-next-line no-alert, quotes, semi */
alert('foo');
```

### 验证规则

请查阅[官网验证规则](http://eslint.cn/docs/rules/)


### 后记

建议开发中关闭语法检查，因为反复检查语法比较耗时。`eslint-friendly-formatter`格式化插件可不使用，显示信息比较全，但占地方。

开发过程中我比较适应`webStorm`的缩进4个空格，同时可以使用`console.log`，所以`.eslintrc.js`添加上：
```
  "rules": {
    "no-console": "off",
    "indent": ["error", 4], //4个空格缩进
  }
```