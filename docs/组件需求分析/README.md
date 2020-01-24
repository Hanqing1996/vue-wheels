---
sidebarDepth: 2
---
# 组件需求分析

## input 需求分析
1. 支持 input,focus,blur,change 事件
2. 存在 error,disabled,readOnly 等状态

## popover 需求分析
1. 用户可能在 popover 的容器元素上添加 click事件,然后希望点击 button 后能触发容器元素的 click 事件(利用事件冒泡机制),所以 popover 的内部元素的 click 不能用 stop 修饰符
2. 点击按钮后显示 content-wrapper,然后点击其它位置隐藏 content-wrapper;
3. 点击显示出来的 content-wrapper 不隐藏 content-wrapper (因为浏览网站者可能有复制文本内容的需求)
4. 显示出来的 content-wrapper 有一个关闭键,点击关闭 content-wrapper
5. button 支持 click,hover 两种事件

## slides 需求分析
1. 不采用有缝轮播（无法直接从3到1，不好）
2. 支持点击 dot 切换 slide-item
3. 支持 mouseenter 暂停动画；mouseouter 继续播放
4. 支持自动播放
5. 支持移动端（touch 事件）

## nav 需求分析
1. navs 默认单选
2. nav 如何获取 popover 里面的 nav-item=>通过依赖注入（root）实现跨级调用
3. "数据接口"要知道自己后代中的"期货数据"被选中了，这样才能在子级导航栏关闭后"数据接口"呈现被选中的样子
4. 由于多级导航栏的存在，"选中"和"打开"是两个概念。可能选中不打开（因为没有子级导航栏），也可能打开不选中（刚打开子级导航栏）
5. sub-nav的title 是不能被选中的，只能被打开
6. 点击 sub-nav,nav-item 以外的其他位置，关闭 sub-nav,nav-item（用clickOutside指令实现）

## pager需求分析
1. 第一页显示，最后一页显示，当前页与前后两页显示，共7页
2. 如果总页数<7,则全部显示
3. 用户可以选择当前页的前一页/后一页，可以选择指定页
4. 每页选择多少条不由pager负责
5. 当前页不可点击

