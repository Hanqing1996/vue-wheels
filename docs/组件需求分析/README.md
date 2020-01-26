---
sidebarDepth: 2
---
# 组件需求分析

## input
1. 支持 input,focus,blur,change 事件
2. 存在 error,disabled,readOnly 等状态

## popover
1. 用户可能在 popover 的容器元素上添加 click事件,然后希望点击 button 后能触发容器元素的 click 事件(利用事件冒泡机制),所以 popover 的内部元素的 click 不能用 stop 修饰符
2. 点击按钮后显示 content-wrapper,然后点击其它位置隐藏 content-wrapper;
3. 点击显示出来的 content-wrapper 不隐藏 content-wrapper (因为浏览网站者可能有复制文本内容的需求)
4. 显示出来的 content-wrapper 有一个关闭键,点击关闭 content-wrapper
5. button 支持 click,hover 两种事件

## slides
1. 不采用有缝轮播（无法直接从3到1，不好）
2. 支持点击 dot 切换 slide-item
3. 支持 mouseenter 暂停动画；mouseouter 继续播放
4. 支持自动播放
5. 支持移动端（touch 事件）

## nav
1. navs 默认单选
2. nav 如何获取 popover 里面的 nav-item=>通过依赖注入（root）实现跨级调用
3. "数据接口"要知道自己后代中的"期货数据"被选中了，这样才能在子级导航栏关闭后"数据接口"呈现被选中的样子
4. 由于多级导航栏的存在，"选中"和"打开"是两个概念。可能选中不打开（因为没有子级导航栏），也可能打开不选中（刚打开子级导航栏）
5. sub-nav的title 是不能被选中的，只能被打开
6. 点击 sub-nav,nav-item 以外的其他位置，关闭 sub-nav,nav-item（用clickOutside指令实现）

## pager
1. 第一页显示，最后一页显示，当前页与前后两页显示，共7页
2. 如果总页数<7,则全部显示
3. 用户可以选择当前页的前一页/后一页，可以选择指定页
4. 每页选择多少条不由pager负责
5. 当前页不可点击

## validation
1. 两种验证方式
    * 即时验证:邮箱格式不对
    * 异步验证:用户名被占用（需要后端查验）
2. 邮箱验证
    * @前后不用验证
    * 正则:/.+@.+/  
3. 手机验证
    * 1开头,接10个数字
4. errors 优先级
    * required 最高。即不会出现 errors={required:'必填',pattern:'格式不正确',...}
    * pattern,minLength 同级。即可能出现 errors={pattern:'格式不正确',minLength:'太短'}   
5. 如果 pattern 正确，那么 errors['email']['pattern']应该是 undefiend(即不存在)，而不应该是{}   
6. 如果 email 正确，那么 errors['email']应该是 undefiend，而不应该是{} 
6. 没有任何错误的情况下，errors 应该为{}  
7. 不存在的规则,报错
8. 用户可以自定义规则
9. 提供向validator添加公共方法的接口
    
      
