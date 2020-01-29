---
sidebarDepth: 2
---
# API设计原则
1. 易懂
> 比如 multiple 就易懂，simple 就不知所云
2. 反向默认
> 比如 nav 默认水平排布，那么就设计 vertical的default 值为false 
```
// 水平排布
<g-nav></g-nav>

// 垂直排布
<g-nav vertical></g-nav>
```
3. 合并
> 比如 toast 的自动关闭与自动关闭时间可以设计成一个API
```
autoClose: {
    type: [Boolean,Number],
    default: 5,
    validator: function (value) {
        return (value===false|| typeof value === 'number')
    }
}
```
```
// 不自动关闭
<toast :autoClose="false"></toast>
// 自动关闭且希望设置关闭时间为10秒后
<toast :autoClose="10"></toast>
```
4. 按更新频率分离
> 比如 table 的 columns 一般不改变，而 sort 可能经常改变（由于交互）。所以二者不可以混合在一起
```
// 错误写法：导致 columns 做了不必要的更新

```
```
// 正确写法

```
 