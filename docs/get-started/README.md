---
sidebarDepth: 2
---
# 使用
> 直接引入组件及样式即可
```
<template>
    <div id="app">
        <GButton></Gbutton>
    </div>
</template>
<script>
import {GButton} from 'zhq-vue-wheel' 
import zhq-vue-wheel/dist/myWheel.css

export default{
    components:{GButton}
    name:'app'
}
</script>
```