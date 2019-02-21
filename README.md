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
    git clone 远程仓库地址 122222333333333
