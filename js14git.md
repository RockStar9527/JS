## Git 介绍

Git 是一款开源免费的分布式的版本控制系统，是一个应用程序。

## 作用

版本控制系统在项目开发中作用重大，主要的功能有以下几点

- 代码备份
- 版本回退
- 协作开发
- 权限控制

## 下载安装

下载地址 <https://git-scm.com/>

安装方式与 QQ 安装相同，一路下一步，中间可以设置软件的安装路径。

## Linux 常用命令

Linux 是一套开源免费的操作系统。与系统的交互通常用命令来实现，常用的命令有：

- <span style="color:red">ls</span>         查看当前文件夹下的文件 （list 单词的缩写）   

  ```shell
  $ ls
  a.html  b.html  c.html  d.html  index.html  my.txt  one/
  # 注意：结尾有/,说明是文件夹
  ```

- <span style="color:red">cd</span>       进入某一个文件夹内 （change directory 缩写）

  ```shell
  cd one  # 进入到one文件夹
  cd ..   # 返回上一级
  cd /f   # 进入到f盘根目录
  cd f:   # 进入到f盘根目录
  cd /d/210415/Lession16/code/2-git  
  ```

- `clear`   清屏（也可以使用 <span style="color:red">ctrl + l </span> 快捷键）

  ```shell
  clear 
  ```

- `mkdir`  创建文件夹（make directory），创建多个文件夹用空格分割。

  ```shell
  mkdir my # 创建文件夹my
  mkdir a b c d # 创建多个文件夹 a、b、c、d
  ```

- `touch`   创建一个文件，创建多个文件用空格分割

  ```shell
  touch index.html    # 帮你创建一个名字为index.html的文件 
  touch a.html b.html c.html d.html #创建多个文件，文件之间用空格分割。
  ```

- `rm`    删除文件或者目录 。如果要删除多个用空格分割

  -  -r选项：  将目录及以下文件全部删除 

  ```shell
  rm inde.html              # 删除一个文件 
  rm a.html b.html c.html   # 删除多个文件 
  rm one -r                 # 删除目录（空目录，目录当中有内容）
  ```

- `rmdir`  删除一个空的目录 

  ```shell
  rmdir one  #删除空目录one
  rmdir two three # 删除空目录two three
  ```

- `mv test.html  t.html `  移动文件，重命名  move 缩写

  ```shell
  mv my.txt two/a.txt   # 将my.txt移动到two目录并重命名为a.txt
  mv b.txt c.txt        # 重命名
  mv c.txt two/         # 将c.txt移动到two目录当中
  ```

- `cat   test.html`  查看文件内容

  ```shell
  cat index.html   #查看文件内容
  ```

- `ctrl + c` 取消命令 (cancel)

  ```shell
  #当命令执行过程中，需要等待。不想继续等待
  ```

- `ctrl + 拖动滚轮` 对文字进行放大或缩小

- `Tab` 自动补齐路径

- <span style="color:red">上下方向键</span>，可以查看命令历史 (history 查看所有的历史命令)

Vim 是一款命令行下的文本编辑器，编辑方式跟图形化编辑器不同

* `vim test.html`  编辑文件（文件不存在则创建）
* i    进入编辑模式(i  insert)
* `ESC` + `:wq` 保存并退出
* `ESC` + `:q!` 不保存并退出

![img](D:\BaiduNetdiskDownload\03阶段张培跃\3阶段js高级&jquery&pc项目\Day17-git\Lession17-2\课件\assets\vim-vi-workmodel.png)

## Git 使用

### 起始配置

git version:查看git版本

第一次使用 Git 的时候，会要求我们配置用户名和邮箱，用于表示开发者的信息

```shell
# 配置开发者信息
git config --global user.name "Your Name" 
git config --global user.email "email@example.com" 
# 查看开发者的名字
git config --global user.name
# 查看开发者的邮箱
git config --global user.email
# 查看配置列表
git config -l
```

> 注意命令之间的空格

可以使用 `git config -l `命令来查看配置信息

### 基本操作

Git 的起始操作包括以下几个步骤

1. 创建并进入空文件夹
2. 右键 -> 点击 Git Bash Here 启动命令行
3. `git init` 仓库初始化
4. 创建一个初始化文件 index.html
5. `git add index.html` 将文件加入到暂存区
6. `git commit -m '注释'`   提交到仓库  m 是 message 单词的缩写

![1621733849283](D:\BaiduNetdiskDownload\03阶段张培跃\3阶段js高级&jquery&pc项目\Day17-git\Lession17-2\课件\assets\Git 步骤情况介绍.jpg)

### .git 目录

![1576587724690](D:\BaiduNetdiskDownload\03阶段张培跃\3阶段js高级&jquery&pc项目\Day17-git\Lession17-2\课件\assets\1621733849283.png)

* hooks 目录包含客户端或服务端的钩子脚本，在特定操作下自动执行
* info 信息文件夹. 包含一个全局性排除文件，可以配置文件忽略
* logs 保存日志信息
* objects <span style='color:red'>目录存储所有数据内容</span>,本地的版本库存放位置
* refs 目录存储指向数据的提交对象的指针（分支）
* config 文件包含项目特有的配置选项
* description 用来显示对仓库的描述信息
* HEAD 文件指示目前被检出的分支
* index 暂存区文件，是一个二进制文件  (git ls-files)

> 切记： <span style="color:red">不要手动去修改 .git 文件夹中的内容</span>

### <span style="color:red">版本库的三个区域</span>

* 工作区（代码编辑区）
* 暂存区（修改待提交区）
* 仓库区（代码保存区）

![img](D:\BaiduNetdiskDownload\03阶段张培跃\3阶段js高级&jquery&pc项目\Day17-git\Lession17-2\课件\assets\1572510141663.png)



### 常用命令

* <span style="color:red">git status</span> 版本状态查看 
* <span style="color:red">git add -A</span> 添加所有新文件到暂存区
* <span style="color:red">git commit -m '注释 '</span> 提交修改并注释

```shell
# ****************添加****************************
touch one.html #创建one.html
git ls-files   #查看暂存区的文件列表
git add one.html # 将工作区的one.html提交到暂存区
git ls-files   # 查看暂存区文件列表，已经包含了one.html

git status # 查看文件状态
		   # 绿色的文字：工作区与暂存区都存在该文件 ，但是该文件 还未提交至仓库
		   # 红色的文字：工作区有，暂存区没有。
git rm --cached one.html # 从暂存区中删除one.html
git ls-files # 查看暂存区文件列表，列表中没有文件（通过上面那行代码把one.html移除掉了）


git add one.html  # 将工作区的one.html提交到暂存区
git add a.html b.html # 将工作区的a.html与b.html提交到暂存区
git add --all  # 将暂存区中没有的的文件提交到暂存区
git add -A     # 同上。-A是--all的简写

git status # 查看状态
git rm --cached one.html # 从暂存区中删除一个文件  。如果要删除多个文件用空格分隔。

git commit -m "add a.html b.html c.html one.html" # 将暂存区未提交至仓库的文件提交至仓库当中。

#练习：添加
cd .. 
mkdir 2-git
cd 2-git
git init
touch a.html b.html c.html d.html
git add -A
git commit -m "add a.html b.html c.html d.html";	
# *****************************修改***************************
# 将修改以后的文件，恢复到暂存区当中保存的位置 
修改了a.html  # 后悔修改工作区文件 了
git status 
git restore a.html # 将暂存区当中的a.html替换掉工作区当中的a.html
git checkout a.html # 将暂存区当中的a.html替换掉工作区当中的a.html

修改了a.html # 修改完毕之后，直接提交至暂存区，提交至仓库
git status
git add -A
git status
git commit -m "up a.html"

修改了a.html # 修改完毕之后，提交至暂存区。后悔提交至暂存区？
git status
git add -A
git status
git restore --staged  a.html  # 将add的行为进行了撤销
# *********************************删除************************
rm c.html # 删除c.html
git restore c.html # 将删除的c.html恢复

rm c.html # 删除c.html
git checkout c.html # 将删除的c.html恢复

rm c.html
git add -A
git commit -m "delete c.html"
```

* `git diff`  查看工作区与暂存区的差异（不显示新增文件） 显示做了哪些修改
* `git diff --cached` 查看暂存区与仓库的差异

```shell
touch home.html
git diff # 查看工作区与暂存区的差异(因为home是新增加的，无差)
git add -A
git commit -m "add home.html"

修改了home.html aaaaaaaaaaa
git diff
		#绿字 说明工作区新增加的
		#红字 说明删除
		#白字 说明未变化
git add -A
git diff --cached  #查看暂存区与仓库的差异

修改home.html 回车 bbbbbbbbbbbb
git diff
git add -A
git diff --cached
```





### 历史版本回滚

#### 回滚

查看历史记录

```shell
git log
git log --oneline
```

> 如果内容偏多， 需要使用方向键上下滚动， 按 `q` 退出

根据版本号进行回滚   (版本切换)

```shell
git reset --hard  b815fd5a6ae655b521a31a9
```

> 进行版本回退时，不需要使用完整的哈希字符串，前七位即可
>
> <span style="color:red">版本切换之前，要提交当前的代码状态到仓库</span>

#### 找不到版本号的情况

查看所有的操作记录

```sh
git reflog
```

### <span style="color:red">配置忽略文件</span>

##### 仓库中没有提交该文件

项目中有些文件不应该存储到版本库中，Git 中需要创建一个文件 『.gitignore』 配置忽略，一般与 .git 目录同级。

常见情况有：

1. 临时文件.  
2. 多媒体文件，如音频，视频
3. 编辑器生成的配置文件
4. npm安装的第三方模块

```sh
# 忽略所有的 .idea 文件夹
.idea
# 忽略所有以 .test 结尾的文件
*.test
# 忽略 node_modules 文件和文件夹
/node_modules
```

> .gitignore 项目根目录
>
> ```shell
> home.html  # 项目忽略名字为home.html的文件 
> /my.html   # 只忽略根目录下的my.html
> /one/my.html # 只忽略one目录下的my.html
> /*.html   # 忽略根目录下所有的扩展名为html的文件
> *.html    # 忽略所有的html文件 
> /*/*.html # 忽略.html文件（在目录下的）
> ```

##### 仓库中已经提交该文件

已经加入到版本库的文件，再次进行忽略配置是不起作用的。

```shell
touch 404.html
git add -A
git commit -m "add 404.html"

// 将404.html配置为忽略文件
修改404.html的内容
git status # 发现忽略配置无效

#解决问题。
git rm --cached 404.html  #将暂存区中的404.html 删除掉
git commit -m "del 404.html" #将仓库当中的404也删除掉。（生成一个新的版本，该版本当中没有404.html）

git status
```



1. 对于已经加入到版本库的文件，可以在暂存区中删除该文件

   ```sh
   git rm --cached .idea 
   ```

2. commit提交，在版本库中删除该文件

   ```shell
   git commit -m "del.idea"
   ```

3. 然后在 .gitignore 中配置忽略

   ```sh
   .idea
   ```

### <span style="color:red">分支</span>

分支是 Git 重要的功能特性之一，开发人员可以在主开发线的基础上分离出新的开发线。branch

#### 基本操作

##### 创建分支

name 为分支的名称

```sh
git branch name   
```

查看分支

```sh
git branch
```

##### 切换分支

```sh
git checkout name
```

##### 合并分支

```sh
git merge name
```

##### 删除分支

```sh
git branch -d name
```

##### 创建并切换分支

```sh
git checkout -b name
```

> 注意:  <span style="color:red;font-weight:bold">每次在切换分支前 提交一下当前分支</span>

#### <span style="color:red">冲突</span>

当多个分支修改同一个文件后，合并分支的时候就会产生冲突。冲突的解决非常简单，『将内容修改为最终想要的结果』，然后继续执行 git add 与 git commit 就可以了。

```shell
cd ..
mkdir 4-git
cd 4-git
git init

# 开辟一个分支
touch a.html b.html c.html
git add -A
git commit -m "add a.html b.html c.html"
git branch # 查看本地分支
git branch -a # 查看所有分支 （本地以及远程分支）
git branch dev # 创建一个名字为dev的分支

git checkout dev # 切找到名字dev的分支当中
touch home.html
git add -A
git commit -m "add home.html" # 在dev分支当中增加的页面
git checkout master # 切回到master主分支，发现主分支是没有dev分支当中的home.html

#注意：如果新建一个文件，并没有将其放置至分支中，那么不管你当前处于哪个分支都会看到该文件 。
git checkout dev
touch car.html
git checkout master # 也会看到car.html 原因：在dev分支中创建了一个文件car.html,但是并未将其放置到分支仓库。
git checkout dev
git add -A
git commit -m "add car.html"
git checkout master # 查看:看不到car.html

#*****************************************
git checkout master # 将分支切换到主分支。

git branch home # 创建一个名字为home的分支
git checkout home # 切换到home分支。
#上方两行命令，可以通过以下一行命令完成
git checkout -b zhang  # 创建分支zhang,并切换至zhang分支。

# 删除分支:不能删除当前所在的分支。
git checkout master
git branch -b zhang # 删除分支zhang

#合并分支：将dev分支当中的两个文件，合并到主分支
git checkout master
git merge dev

# 删除问题
git checkout dev
#dev 分支添加或修改或删除
git add -A;
git commit -m "up";
git checkout master
git branch -d dev #The branch 'dev' is not fully merged.(dev分支当中还有未合并的内容)
	# 1、强制删除
	git branch -D dev
	# 2、先合并再删除
	git checkout home
	touch my.html
	git add -A
	git commit -m "add my.html"
	git merge home
	git branch -d home
# 合并问题
```



## GitHub

### 介绍

GitHub 是一个 Git 仓库管理网站。可以创建远程中心仓库，为多人合作开发提供便利。

### 使用流程

#### <span style="color:red">免登陆</span>

    1、打开cmd
    2、执行以下命令：
        ssh-keygen -t rsa -C "tydtea@163.com"
    3、打开：C:\Users\zhangpeiyue/.ssh/id_rsa.pub.
    4、将文件的内容得到到github上：
        头部最右侧头像-》 settings ->SSH and GPG keys->SSH keys:->new ssh key
         粘贴

GitHub 远程仓库使用流程较为简单，主要有以下几种场景：

#### <span style="color:red">本地有仓库</span>

1. 注册并激活账号

2. 创建仓库

3. 获取仓库的地址

4. 本地配置远程仓库的地址

   ```shell
   git remote add origin https://github.com/tydtea/test1.git
   ```

5. 本地提交

6. 将本地仓库内容推送到远程仓库

   ```shell
   git push -u origin master
   ```

```shell
# 创建本地仓库
mkdir 5-git
cd 5-git
git init
touch README.md # 在该文件内增加一些内容  
git add -A
git commit -m "add README.md";

# 本地仓库与远程仓库创建关联
# origin:存储远程仓库地址的变量。
git remote add origin https://github.com/tydtea/20210415.git
git remote -v #查看远程地址列表
# origin  https://github.com/tydtea/20210415.git (fetch) 获取
# origin  https://github.com/tydtea/20210415.git (push)  推送
git remote remove origin2  # 删除远程地址origin2
git remote rename origin3 origin300 # 将远程地址存储的变量origin3更名为origin300
git remote # 查看当前的存储地址的变量列表


git push -u origin master



#免密码推送
git remote add origin git@github.com:tydtea/20210415.git
git push -u origin master  # -u origin master  第一次需要指明，后续可以省略  git push。

```

C:\Windows\System32\drivers\etc  -->host



```shell
# GitHub Start
140.82.112.4 github.com
199.232.69.194 github.global.ssl.fastly.net
185.199.108.153 assets-cdn.github.com
185.199.110.153 assets-cdn.github.com
185.199.111.153 assets-cdn.github.com
# GitHub End
```





#### <span style="color:red">本地没有仓库</span>

1. 注册并激活账号

2. 克隆仓库

   ```shell
   git clone https://github.com/tydtea/test1.git 
   ```

3. 增加和修改代码

4. 本地提交

   ```shell
   git add -A
   git commit -m 'message'
   ```

5. 推送到远程

   ```shell
   git push -u origin master
   ```

> 克隆代码之后， 本地仓库会默认有一个远程地址的配置， 名字为 origin
>
> ```shell
> # 创建远程分支
> git checkout -b dev
> touch home.html
> # home.html 增加内容
> git add -A
> git commit -m "add home.html"
> git push -u origin dev
> 
> # 问题1：当有人在你的远程仓库中新增加了文件。而你本地仓库与远程仓库的版本就不一样
> ```
>
> ![1624451530391](D:\BaiduNetdiskDownload\03阶段张培跃\3阶段js高级&jquery&pc项目\Day17-git\Lession17-2\课件\assets\1624451530391.png)

> ```shell
> # 解决问题：
> git pull # 获取（拉取）远程内容，会进入到vim模式 --》 ：wq
> git push
> #通过该问题得知：在push之前，最好pull
> 
> # 问题2：当你修改一个文件 my.txt ，其它人也修改某my.txt并提交了。而你在修改之前没有拉取代码，进行提交。冲突问题
> git pull
> # 手动合并代码
> git add -A
> git commit -m "up my.txt";
> git push
> 
> 
> #练习：团队练习。
> #负责人：
> 	# 1、在github上新建一个仓库。
> 	# 2、在本地新建一个仓库。在仓库中放置一个名字为README.md的文件
> 	git init
> 	touch README.md
> 	git add -A
> 	git commit -m "add Readme.md";
> 
> 	git remote add origin xxxxxxxxxxxx;
> 	git push -u origin master
> 
> 	让组员拥有操作仓库的权限：settings---》Manage access
> 
> #组员：
> 	# 在本地的硬盘中新建一个文件 夹，进入到文件 夹执行git
> 	git clone xxxxxxxxxxxx;
> 	# 修改 readme.md --> 写上自己的名字，然后提交
> 	git add -A
> 	git commit -m "zhang up readme.md";
> 	git push -u origin master
> 组员：
> 	新建一个以自己名字命名的文件。 zhangpeiyue.txt
> 
> 
> 提高：clone时默认只能获得master分支，如果想同时获取多个可以:
> 	git checkout -b dev origin/dev  :创建一个新分支dev ,来自远程origin/dev
> 
> ```
>
> 

```SHELL
# 提交至本地仓库
git init
touch a.html
git add -A
git commit -m "我完成了"
# 如何对其进行修改，删除，添加。
git restore index.html
git checkout index.html
# 忽略
# 回滚
# 差异
# 分支
git branch dev
git checkout dev
git checkout -b home
git branch -M XX
git branch -D xx

# 远程仓库
1、仓库在本地
	1、在远程创建一个空的仓库
	2、将本地仓库推送到远程仓库
		git remote add origin 仓库地址
		git remote add origin2 仓库地址
		
		git push -u origin master
		#对文件进行操作（添加，修改，删除）
		git add -A
		git commit -m "xxx";
		git push #将本地仓库推送到远程仓库
		
		git pull # 从远程仓库拉取内容
2、仓库在远程
	git clone 地址    # 默认的分支是master,默认会创建一个与项目同名的文件夹，内容存储在该文件 夹内的。
	git branch -a # 查看所有分支，包含远程分支
	git branch dev origin/dev
	git checkout -b dev origin/dev
	
	git clone -b dev 地址  # 复制远程仓库当中的dev
	git clone 地址   home # 将克隆的项目放置在home文件内。
```

码云：https://gitee.com/

#### <span style="color:red">多人合作</span>

##### 账号仓库配置

GitHub 团队协作开发也比较容易管理，可以创建一个组织

- 首页 -> 右上角 `+` 号-> new Organization
- 免费计划
- 填写组织名称和联系方式（不用使用中文名称）
- 邀请其他开发者进入组织（会有邮件邀请）

* 点击组织右侧的 settings 设置
* 左侧 Member privileges
* 右侧 Base permissions 设置 write 👌

##### 协作流程

第一次

* 得到 Git 远程仓库的地址和账号密码

* 将代码克隆到本地（地址换成自己的）

  ```shell
  git clone https://github.com/tydtea/test1.git
  ```

* 切换分支

  ```
  git checkout -b dev
  ```

* 开发代码

* 本地提交

  ```shell
  git add -A
  git commit -m '注释内容'
  ```

* 合并分支

  ```shell
  git checkout master
  git merge dev
  ```

* 更新本地代码

  ```shell
  git pull
  ```

* 提交代码

  ```shell
  git push 
  ```

##### 工作流程

第二次流程

1. 更新代码

   ```
   git checkout master
   git pull
   ```

2. 切换并合并分支

   ```
   git checkout dev
   git merge master
   ```

3. 开发功能

4. 提交

   ```
   git add -A
   git commit -m '注释'
   ```

5. 合并分支

   ```
   git checkout master
   git merge dev
   ```

6. 更新代码

   ```
   git pull
   ```

7. 推送代码

   ```
   git push
   ```

##### 冲突解决

同分支冲突一样的处理，将代码调整成最终的样式，提交代码即可。

