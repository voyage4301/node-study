# 在vscode中使用git管理代码
## 配置git全局变量
git config --global user.name "admin"
git config --global user.email "123@163.com"

## 管理项目
### 本地创建新项目
- 创建一个文件夹使用命令 
- 终端命令 git init 使用git管理
- 创建一个新文件, 例如 test.html
- 终端命令 git status 查看当前文件管理状态
    1. 如果是红色, 说明没有暂存, 可以使用 git add 文件名的方式(.=>所有文件夹)暂存到本地仓库, 再次查看就会变成绿色, 说明已经暂存到本地
    2. 如果是绿色, 说明已经暂存过了
- 终端命令 git commit -m logs(提交的说明信息, 引号括起来) 提交暂存区的所有文件到本地仓库
- 提交到远程(服务器)仓库
    1. 没有配置远程仓库的情况
    git push 远程仓库地址
    2. 配置了远程仓库的情况
    git push -u origin master(分支名)
    配置: 
        1. 第一次配置
        git remote add origin 远程仓库地址
        2. 第二次修改
        - 直接修改
        git remote origin set-url 远程仓库地址
        - 先删后加
        git remote rm origin 
        git remote add origin 远程仓库地址
        - 直接修改config文件

### 拉取别人的项目 
    git clone 远程仓库地址 

# node开发

## 在Node.js开发web应用程序和传统的java/php等开发应用程序的区别
- 传统的java/php开发web应用程序时, 需要一个web容器来监听用户的请求(比如Apache)
- node.js开发时, 不需要这个web容器, 因为node.js本身就是基于http协议开发的, 它本身就是一个web容器

## 在node中调试, 打开控制台, 输入node, 即可调试
- node 'js文件名' 

## 文件读写案例
- 使用到的模块 =>  const fs = require('fs')
- process在使用的时候无需通过require()函数来加载模块, 可以直接使用
- fs模块, 在使用的时候, 必须通过require()函数来加载, 方可使用
- process是全局模块, 可以直接使用; fs是非全局模块, 必须先用require()加载, 方可使用

<!-- 写文件 -->
```js
const fs = require('fs')

const msg = 'hello world, 你好世界!'

fs.writeFile('./hello.txt', msg, 'utf-8', err => { // 异步执行的
    // 如果 err == null, 表示写入文件失败
    if (err) console.log(`写文件出错, 错误为: ${err}`);
    else console.log('写入成功');
})
```

<!-- 读文件 -->
```js
// 1. 加载文件模块. fs模块
const fs1 = require('fs')

fs1.readFile('./hello.txt', 'utf-8', (err, data) => {
    // 如果传了第二个参数--编码, 则data是一个字符串
    // 如果没传, data参数是一个buffer对象, 里面保存的是一个一个的字节(理解为字节数组)
    // buffer对象转换成字符串, 调用toString方法, 可以传编码, 不传默认为utf-8
    if (err) throw err
    console.log(typeof data);
    console.log(data.toString('utf-8'));
})
```

## js中的调用栈和队列
