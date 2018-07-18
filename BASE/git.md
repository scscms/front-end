# git命令<sup>shine</sup>

- 获取帮助
```
$ git help <verb>
$ git <verb> --help
```

- 配置信息
```
$ git config --list #查看配置
$ git config --global user.name "shine" #配置用户名
$ git config --global user.email shine@example.com #配置邮箱
```

- 获取帮助
```
$ git help <verb>
$ git <verb> --help
```

- 初始化仓库

```
$ git init #在现有目录中初始化仓库
$ git clone https://github.com/scscms/front-end #克隆项目
```

- 添加到索引库

```
$ git add *.c	#指定后缀名批量添加
$ git add *		#批量添加当前目录下所有文件
$ git add LICENSE #单个文件添加，多个文件空格分开
$ git add -u [<path>] #添加除了新添加的文件，即所有被修改过或已删除文件到索引库。省略<path>表示.,即当前目录。
$ git add -A [<path>] #添加所有文件到索引库。省略<path>表示.,即当前目录。
$ git add -i [<path>] #查看<path>中被所有修改过或已删除文件但没有提交的文件，同时进入一个子命令系统。
$ git add . #添加当前目录及以下的所有文件，所有状态到索引库【推荐】
```

- 检查当前文件状态

```
$ git status
$ git status -s			#状态简览
$ git status --short		#状态简览
$ git diff --cached 		#查看已经暂存起来的变化：（--staged 和 --cached 是同义词）
```

- 提交更新

```
$ git commit -m '更新记录'
```

- 跳过使用暂存区域提交

```
$ git commit -a -m 'message' #省略add步骤直接提交【推荐】（注意：不追踪新添加的文件！）
```

- 移除文件

```
$ git rm <path> #删除工作区的指定文件
$ git rm -f <path> #同时删除工作区和缓存区的指定文件
$ git rm --cached <path> #只删除缓存区的指定文件，保留工作区的文件(停止追踪)
$ git rm log/\*.log #正则用法：删除log下所有后缀为log的文件（注意\*）
```

- 移动文件

```
$ git mv <file_from> <file_to> #移动文件(改名)
```

- 查看历史

```
$ git log
$ git log -p -2 #查看最近2次历史的记录差异
$ git log --stat #简略的历史统计信息
$ git log --pretty=oneline #一行一条记录
$ git log --pretty=format:"%h - %an, %ar : %s" #格式化显示
$ git log --since=2.weeks #查看2周内记录
$ git log -S [keyword] --oneline #搜索关键词日志
$ git log --oneline --decorate --graph --all #查看各个分支的指向以及项目的分支分叉情况
```
还有很多参数，请自行学习

- 撤消操作

```
$ git commit --amend
$ git commit --amend --no-edit #撤消且不编辑
$ git commit --amend -m [messge] #改写上次提交信息
$ git push origin HEAD:refs/for/branches #撤消后推到远程合并提交
```

- 远程仓库

```
$ git remote add origin git@github.com:scscms/front-end.git #关联远程仓库
$ git fetch origin #拉取远程仓库
$ git push origin master #推送到远程仓库
$ git remote show [origin] #查看远程仓库
$ git remote -v #查看远程仓库
$ git remote rename <old name> <new name> #重命名仓库（少用）
$ git remote rm <name> #移除某个仓库
```

- 打标签

```
$ git tag #列出标签
$ git tag -l 'v1.*' #有条件列出
$ git tag -a tagname -m 'message' #创建附注标签
$ git tag tagname #创建轻量标签(不推荐)
$ git tag -a tagname 9fceb02 #指定某个版本追加标签（后期打标签）
$ git tag -v tagname #验证标签
$ git push origin tagname #共享某个标签
$ git push origin --tags #共享所有标签
$ git checkout -b [branch-name] [tagname] #检出标签
```

- Git 别名

不推荐使用

- 分支

```
$ git branch [branch-name] #创建分支，但依然停留在当前分支
$ git checkout [branch-name] #切换分支 -f参数是强制切换（会覆盖工作区）
$ git checkout -b [branch-name] #创建并切换到此分支（等于执行了前面两句）
$ git merge [branch-name] #当前分支与指定名称的分支合并
$ git branch -v #查看分支
$ git branch -r #列出所有远程分支
$ git branch -a #列出所有本地和远程分支
$ git branch --merged #查看已经合并的分支
$ git branch --no-merged #查看未合并的分支
$ git branch -d [branch-name] #删除本地分支
$ git branch -track [branch-name] [remote-branch] #新建一个分支，与指定的远程分支建立关系
$ git branch --set-upstream [branch-name] [remote-branch] #本地与远程分支之间建立追踪关系
$ git push --set-upstream [branch-name] [remote-branch] #关联远程分支并推送到远程
$ git push origin --delete [branch-name] #删除远程分支
$ git push origin --dr [remote/branch] #删除远程分支
$ git push origin [remote-branch] #同步远程分支
$ git push -f #强制同步（解决冲突）
$ git rebase [branch-name] #变基分支(少用)
```

- 分支

```
$ git reset HEAD^ #撤回上一次提交（不影响工作区）
$ git reset --hard HEAD^ #撤回上一次提交并覆盖工作区内容（危险）
```

- 比对文件

```
git diff
git diff --cached #与缓存区比对
$ git diff --base -b #去除空白比对文件变动
$ git rerere diff #显示解决方案的当前状态
```

- 打包

	>打包的意义在于当没网络时，用移动存储设备复制给其他人共享。

```
$ git bundle create XX.bundle HEAD master #打包
$ git bundle verify XX.bundle #检验包
$ git clone XX.bundle <folder> #克隆包
```

### 后记
如果错误请雅正。