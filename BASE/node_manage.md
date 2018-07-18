# node 服务管理模块<sup>shine</sup>

在Linux系统下要以服务运行node可使用简单命令：

```
$ nohup app.js &
$ nohup app.js > 1.log &  #运行并打日志
```
当然我们希望它同时能在windows下运行，甚至做更多事情，那就使用以下插件吧。

>另：windows下还可以使用mssn

开发环境用：nodemon、supervisor
线上用：
    forever 管理多个站点，每个站访问量不大，不需要监控。（相对稳定）
    pm2 网站访问量比较大，需要完整的监控界面。（杀了进程仍占端口）

## nodemon 基本配置与使用

#### nodemon 的安装：

```
npm install -g nodemon
```

安装完 nodemon 后，就可以用 nodemon 来代替 node 来启动应用：
```
$ nodemon ./app.js //相当于 node ./app.js
```
如果没有在应用中指定端口，可以在命令中指定：
```
nodemon ./app.js localhost 8080
```
可以运行 debug 模式：
```
nodemon --debug ./app.js 80
```
查看帮助，帮助里面有很多选项都是一目了然：
```
nodemon -h 或者 nodemon -help
```
#### nodemon.json个解释

```
{
  "restartable": "rs",
  "ignore": [
    ".git",
    "node_modules/**/node_modules"
  ],
  "verbose": true,
  "execMap": {
    "": "node"
    "js": "node --harmony"
  },
  "events": {
    "restart": "osascript -e 'display notification \"App restarted due to:\n'$FILENAME'\" with title \"nodemon\"'"
  },
  "watch": [
    "test/fixtures/",
    "test/samples/"
  ],
  "env": {
    "NODE_ENV": "development",
    "PORT": "3000"
  },
  "ext": "js json",
  "legacy-watch": false
}

```

- restartable:rs

	重启的命令，默认是 rs ，可以改成你自己喜欢的字符串。当用 nodemon 启动应用时，可以直接键入 rs 直接重启服务。除了字符串值外，还可以设置 false 值，这个值的意思是当 nodemon 影响了你自己的终端命令时，设置为 false 则不会在 nodemon 运行期间监听 rs 的重启命令。

- ignore

	忽略的文件后缀名或者文件夹，文件路径的书写用相对于 nodemon.json 所在位置的相对路径，下同。nodemon 会默认忽略一些文件，默认忽略的文件有：.git, node_modules, bower_components, .sass-cache，如果这些文件想要加入监控，需要重写默认忽略参数字段 ignoreRoot，比如加入："ignoreRoot": [".git", "bower_components", ".sass-cache"]，然后在 watch 中将 node_modules 文件路径加入监控，那么 node_modules 内的文件也加入了监控了。

- verbose：true

	是否输出详细启动与重启信息

- execMap

	运行服务的后缀名和对应的运行命令，"js": "node --harmony" 表示用 nodemon 代替 node  --harmony 运行 js 后缀文件；"" 指 www 这些没有后缀名的文件；默认的 defaults.js 配置文件会识别一些文件：py: 'python',rb: 'ruby'。

- events

	这个字段表示 nodemon 运行到某些状态时的一些触发事件，总共有五个状态：

    start - 子进程（即监控的应用）启动

    crash - 子进程崩溃，不会触发 exit

    exit - 子进程完全退出，不是非正常的崩溃

    restart - 子进程重启

	config:update - nodemon 的 config 文件改变

状态后面可以带标准输入输出语句，比如 mac 系统下设置： "start": "echo 'app start'"，那么启动应用时会输出 app start 信息，其他类似命令如 ls，ps 等等标准命令都可以在这里定义。

- watch

	监控的文件夹路径或者文件路径。

- env

	运行环境 development 是开发环境，production 是生产环境。port 是端口号。

- ext

	监控指定后缀名的文件，用空格间隔。默认监控的后缀文件：.js, .coffee, .litcoffee, .json。但是对于没有文件后缀的文件，比如 www 文件，我暂时找不到怎么用 nodemon 去监控，就算在 watch 中包含了，nodemon 也会忽略掉。

- legacy-watch：nodemon

	使用  Chokidar 作为底层监控系统，但是如果监控失效，或者提示没有需要监控的文件时，就需要使用轮询模式（polling mode），即设置 legacy-watch 为 true，也可以在命令行中指定：

```
$ nodemon --legacy-watch 
$ nodemon -L # 简写
```


## forever安装使用

### forever介绍：

forever是一个简单的命令式nodejs的守护进程，能够启动，停止，重启App应用。forever完全基于命令行操作，在forever进程之下，创建node的子进程，通过monitor监控node子进程的运行情况，一旦文件更新，或者进程挂掉，forever会自动重启node服务器，确保应用正常运行。

- forever安装：

```
$ npm install -g forever 
```

- 查看forever帮助

```
$ forever -h
```

### forever命令行的中文解释

- 子命令actions：

```
start:启动守护进程
stop:停止守护进程
stopall:停止所有的forever进程
restart:重启守护进程
restartall:重启所有的foever进程
list:列表显示forever进程
config:列出所有的用户配置项
set <key> <val>: 设置用户配置项
clear <key>: 清楚用户配置项
logs: 列出所有forever进程的日志
logs <script|index>: 显示最新的日志
columns add <col>: 自定义指标到forever list
columns rm <col>: 删除forever list的指标
columns set<cols>: 设置所有的指标到forever list
cleanlogs: 删除所有的forever历史日志
```

- 配置参数options：

```
-m MAX: 运行指定脚本的次数
-l LOGFILE: 输出日志到LOGFILE
-o OUTFILE: 输出控制台信息到OUTFILE
-e ERRFILE: 输出控制台错误在ERRFILE
-p PATH: 根目录
-c COMMAND: 执行命令，默认是node
-a, –append: 合并日志
-f, –fifo: 流式日志输出
-n, –number: 日志打印行数
–pidFile: pid文件
–sourceDir: 源代码目录
–minUptime: 最小spinn更新时间(ms)
–spinSleepTime: 两次spin间隔时间
–colors: 控制台输出着色
–plain: –no-colors的别名，控制台输出无色
-d, –debug: debug模式
-v, –verbose: 打印详细输出
-s, –silent: 不打印日志和错误信息
-w, –watch: 监控文件改变
–watchDirectory: 监控顶级目录
–watchIgnore: 通过模式匹配忽略监控
-h, –help: 命令行帮助信息
```

- 开发环境执行

```
$ forever -p . -l ./logs/access.log -e ./logs/error.log -a -w start app.js
```

## PM2 介绍

[pm2](https://github.com/Unitech/pm2) 是一个带有负载均衡功能的Node应用的进程管理器.
当你要把你的独立代码利用全部的服务器上的所有CPU，并保证进程永远都活着，0秒的重载， PM2是完美的。

#### 主要特性：

内建负载均衡（使用Node cluster 集群模块）
后台运行
0秒停机重载，我理解大概意思是维护升级的时候不需要停机.
具有Ubuntu和CentOS 的启动脚本
停止不稳定的进程（避免无限循环）
控制台检测
提供 HTTP API
远程控制和实时的接口API ( Nodejs 模块,允许和PM2进程管理器交互 )

测试过Nodejs v0.11 v0.10 v0.8版本，兼容CoffeeScript,基于Linux 和MacOS.

- 安装

```
npm install -g pm2
```

- 用法

```
$ npm install pm2 -g # 命令行安装 pm2
$ pm2 start app.js -i 4 #后台运行pm2，启动4个app.js
                                # 也可以把'max' 参数传递给 start
                                # 正确的进程数目依赖于Cpu的核心数目
$ pm2 start app.js --name my-api # 命名进程
$ pm2 list # 显示所有进程状态
$ pm2 monit # 监视所有进程
$ pm2 logs # 显示所有进程日志
$ pm2 stop all # 停止所有进程
$ pm2 restart all # 重启所有进程
$ pm2 reload all # 0秒停机重载进程 (用于 NETWORKED 进程)
$ pm2 stop 0 # 停止指定的进程
$ pm2 restart 0 # 重启指定的进程
$ pm2 startup # 产生 init 脚本 保持进程活着
$ pm2 web # 运行健壮的 computer API endpoint (http://localhost:9615)
$ pm2 delete 0 # 杀死指定的进程
$ pm2 delete all # 杀死全部进程
```

- 运行进程的不同方式：

```
$ pm2 start app.js -i max # 根据有效CPU数目启动最大进程数目
$ pm2 start app.js -i 3 # 启动3个进程
$ pm2 start app.js -x #用fork模式启动 app.js 而不是使用 cluster
$ pm2 start app.js -x -- -a 23 # 用fork模式启动 app.js 并且传递参数 (-a 23)
$ pm2 start app.js --name serverone # 启动一个进程并把它命名为 serverone
$ pm2 stop serverone # 停止 serverone 进程
$ pm2 start app.json # 启动进程, 在 app.json里设置选项
$ pm2 start app.js -i max -- -a 23 #在--之后给 app.js 传递参数
$ pm2 start app.js -i max -e err.log -o out.log # 启动 并 生成一个配置文件
$ pm2 list  #列出由pm2管理的所有进程信息，还会显示一个进程会被启动多少次，因为没处理的异常。
$ pm2 monit  #监视每个node进程的CPU和内存的使用情况。
```

你也可以执行用其他语言编写的app ( fork 模式):

```
$ pm2 start my-bash-script.sh -x --interpreter bash
$ pm2 start my-python-script.py -x --interpreter python
```

### windows-server服务实现开机自启动

npm官网: https://www.npmjs.com/package/node-windows

github官网: https://github.com/coreybutler/node-windows

- 1.项目代码: express或koa等node应用
- 2.在项目中下载node-windows模块 :  `npm install node-windows --save`
- 3.在项目根目录创建nw.js文件，代码如下:

```js
const name = 'NodeScscms';//服务名称
let Service = require('node-windows').Service;
let EventLogger = require('node-windows').EventLogger;
let log = new EventLogger(name);
let svc = new Service({
    name,//服务名称
    description: 'vue-scscms',
    script: require('path').join(__dirname,'server-entry.js'),
    wait: 2,//程序重启的时间间隔
    grow: .5, //程序重启的时间增长值
    maxRetries: 40 //60秒内最大重启次数
});

svc.on('install',function(){
    svc.start();
    log.info('install complete.');
});

svc.on('uninstall',function(){
    log.info('Uninstall complete.');
    log.warn('The service exists: ',svc.exists);
});

svc.on('alreadyinstalled',()=>{
    log.error('This service is already installed.');
});

if(svc.exists) return svc.uninstall();

svc.install();
```

进入项目根目录, 运行 `nmp` 命令  `node nw.js`　就可以像普通的windows-server服务一样操作了。重复执行 `node nw.js` 会轮流执行服务关闭和重启。

**注意** ：安装了360或安全管家等软件可能会阻止，请退出或者放行。