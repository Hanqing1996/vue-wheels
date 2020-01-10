<template>
    <div>
        <g-button>默认按钮</g-button>
        <g-button icon="settings">默认按钮</g-button>
        <g-button :loading="true">默认按钮</g-button>
        <g-button disabled>默认按钮</g-button>
        <g-button-group>
            <g-button icon="left">上一页</g-button>
            <g-button>更多</g-button>
            <g-button icon="right" icon-position="right">下一页</g-button>
        </g-button-group>

        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>
    import Button from '../../../src/components/button/button'
    import ButtonGroup from '../../../src/components/button/button-group'

    export default {
        components:{
            'g-button':Button,
            'g-button-group':ButtonGroup
        },
        data(){
            return{
                content:`
                <g-button>默认按钮</g-button>
                <g-button icon="settings">默认按钮</g-button>
                <g-button :loading="true">默认按钮</g-button>
                <g-button disabled>默认按钮</g-button>
                <g-button-group>
                    <g-button icon="left">上一页</g-button>
                    <g-button>更多</g-button>
                    <g-button icon="right" icon-position="right">下一页</g-button>
                </g-button-group>
                `
            }
        }
    }
</script>