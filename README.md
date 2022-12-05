# Template React Dev Container | react 项目模版【vscode的dev container容器版】

![Template](./doc/Template.png)

使用VScode在容器中编程的模板 团队统一环境 而性能无太大影响

## 环境

- docker

注意：window下使用基于wsl2的docker引擎模式，否则影响性能体验。

## 初始工作

容器里的git用户名密码需要重新设置

- git config user.email
- git config user.name

## 引擎盖下

- 使用Docker 有一个本地“命名卷”的概念，把node-module被移到容器里 提供更好的性能【关键】
  - 注意：自动以文件夹名称命名该卷，如果文件夹名称相同则所用卷也相同，会互相污染。可以手动指定`devcontainer.json`的mount参数。
- crlf换行问题
- 一些好用的插件

## Reference

- [Improve container performance](https://code.visualstudio.com/remote/advancedcontainers/improve-performance#_use-a-targeted-named-volume)
- [Visual Studio Code Remote Development Troubleshooting Tips and Tricks](https://code.visualstudio.com/docs/remote/troubleshooting#_resolving-git-line-ending-issues-in-wsl-resulting-in-many-modified-files)

