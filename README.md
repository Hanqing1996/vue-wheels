# 我造的轮子们

## 流程 
1. 需求分析/UI设计
2. [LICENSE选择](http://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html)
    * 最开放：MIT
3. 选择第三方工具
    * npm
4. 选择底层代码
    * vue    
5. [选择不要上传的文件（.idea,node_modules等等，第一次就不要push）](https://github.com/Hanqing1996/blog/blob/master/github%E7%9B%B8%E5%85%B3/README.md)    
6. 选择构建工具 
    * webpack
    * parcel
7.     
 
## 安装
使用本框架前，请在 css 中开启 border-box
```
*{box-sizing: border-box;}
```
    
#### 经验
* 字体不要设置固定 font-size ,应该用变量
* 应该在完成一个阶段后 commit ,而不是频繁 commit  
* 如果一个包是给用户使用的
```
npm i vue
```
* 如果一个包是给开发者使用的（-D表示给 developer 使用）
```
npm install -D parcel-bundler
``` 
    


