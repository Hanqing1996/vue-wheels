<template>
    <div>
        <g-input value="默认输入框" disabled></g-input>
        <g-input value="默认输入框" readonly></g-input>
        <g-input value="默认输入框" error="姓名不少于两个字"></g-input>

        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>
    import Input from '../../../src/components/input/input'

    export default {
        components:{
            'g-input':Input
        },
        data(){
            return{
                content:`
                <g-input value="默认输入框" disabled></g-input>
                <g-input value="默认输入框" readonly></g-input>
                <g-input value="默认输入框" error="姓名不少于两个字"></g-input>
                `
            }
        }
    }
</script>