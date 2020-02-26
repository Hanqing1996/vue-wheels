# 开发流程

## 持续集成
> 使用工具：travis CI
#### 持续集成是什么
1. 持续集成指的是只要代码有变更，就自动运行构建，测试，部署。
2. 持续集成的好处在于，每次代码的小幅变更，就能看到运行结果，从而不断累积小的变更，而不是在开发周期结束时，一下子合并一大块代码。
3. 本项目采用 travis CI 进行持续集成
#### travis CI 踩坑
* test
> 本项目测试框架需要搭配 Karma 使用。在 karma.conf.js 中添加测试覆盖率相关内容后，始终无法通过 pass。检查 log 发现，test 没有自动 exit。于是将 scripts 中的 watch 参数设置为 false，无果。翻阅 Karma 文档，知道了有 命令参数 -- single-run。尝试添加后，成功。 
* deploy
> 使用 travis CI 进行 deploy 需要对 github_token 进行处理，详情可以参考[这里](https://docs.travis-ci.com/user/deployment/pages/#setting-the-github-token)。主要是两个步骤，一是生成 github_token，用于授权给 CI 平台；二是在 travis CI 中进行环境变量设置，以保证 .travis.yml 能读取到 token。

## 测试
> 使用工具：Karma,mocha,chai,sinon（回调测试）
#### Karma
* karma 不是测试框架，它的作用是提供测试所需环境（比如打开浏览器）官网描述如下。
> Karma is not a testing framework, nor an assertion library. Karma just launches an HTTP server, and generates the test runner HTML file you probably already know from your favourite testing framework. So for testing purposes you can use pretty much anything you like. 
* 我们可以配置 karma.conf.js 以指定：
1. 测试框架
2. 测试文件位置/格式
3. 测试覆盖率相关内容
4. 测试模式（single-run/watch）等等

#### mocha
mocha 是一个测试框架，类似的还有 Jasmine,QUnit,Jest 等等

#### chai
断言库，提供 expect,should 等语句


## 在 Github 上部署预览网站 
> 使用工具：vuepress
#### 步骤 
1. 安装 vuepress
2. 在根目录下创建 deploy.sh，内容参考 vuepress 文档
3. 生成预览页面
``` 
vuepress dev docs  
```
4. 打包，生成静态文件
```
vuepress build docs
```
5. 之后更新项目后想要重新部署，只需执行以下命令（已在 script 中完成配置）
```
yarn run docs:build
yarn run deplosh
``` 

## 导出组件
> 使用工具：vue-cli 的 lib 模式
#### 流程
1. 新建 src/index.js,导出所有组件
```
export {default as GSubNav} from './components/nav/sub-nav'
export {default as GNav} from './components/nav/nav'
...
```  
2. build
```
vue-cli-service build --target lib --name myWheel src/index.js
```
3. 此时 dist 目录中存放的就是打包后的文件，包括 umd.js（用于兼容各类模块引用方式）,以及相关 css。注意 vue 不会被打包。


## 发布 npm 包
#### 流程
1. 更新 package.json 的 version
2. 去掉 package.json 里的 "private":"true"
3. 设置 package.json 的 main 值为"dist/myWheel.umd.js"（作为使用库时的默认入口文件）
4. 去 https://www.npmjs.com/ 注册一个账户
5. 确认一下邮箱（必须）
6. 如果时第一次发布，请在项目根目录运行 npm adduser
7. 如果错误提示里面含有 https://registry.npm.taobao.org 则说明你的 npm 源目前为淘宝源，需要更换为 npm 官方源（https://registry.npmjs.org/）
8. 运行 npm publish
    * 报错：You do not have permission to publish "package-demo".说明包重名了，在 package.json 修改 name
    * 报错：You must be logged in to publish packages.
9. 如果之前已经发布过版本，重复以下三件事即可
    * 改版本号
    * yarn build（即使用 vue-cli 的 lib 模式进行打包）
    * npm publish（注意 npm 源）    
