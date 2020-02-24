<template>
    <div class="demo">
        <h2>基本用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div>
            <div class="g-wrapper">
                <g-uploader
                        action="https://zhq-node-server.herokuapp.com/upload"
                        :parseResponse="parseResponse"
                        :fileList.sync="fileList">
                    <div style="padding: 10px;text-align: center">
                        <g-button icon="upload">上传</g-button>
                    </div>
                </g-uploader>
            </div>
            <div>
                <p>
                    <strong>代码</strong>
                </p>

                <div class="code-content" style="height: 0;">
                    <div class="code-content-height">
                        <pre><code class="html">{{codeStr}}</code></pre>
                    </div>
                </div>
                <div class="lock-code" @click="showCode(0)" ref="xxx">
                    <g-icon class="icon-down" :name="isShow[0] === false ? 'down' : 'up'"></g-icon>
                    <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import GUploader from "../../../src/components/uploader/uploader";
    import GButton from '../../../src/components/button/button'
    import GIcon from '../../../src/components/button/icon'

    import mixin from '../mixin'

    export default {
        name: "uploader-demo",
        mixins: [mixin],
        components: {GUploader, GButton,GIcon},
        data() {
            return {
                fileList:[],
                codeStr: `
<g-uploader
        action="https://zhq-node-server.herokuapp.com/upload"
        name="uploadFile"
        :parseResponse="parseResponse"
        :fileList.sync="fileList">
    <div style="padding: 10px;text-align: center">
        <g-button icon="upload">上传</g-button>
    </div>
</g-uploader>
`.replace(/^ {8}/gm, '').trim(),
            }
        },
        methods: {
            // 以指定格式解析后端传回的数据
            parseResponse(response) {
                // response 为一串ID
                let id = response
                let url = `https://zhq-node-server.herokuapp.com/preview/${id}`
                return url
            }
        }
    }
</script>

<style lang="scss" scoped>
    .g-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    svg{
        width: 25px;
        height: 25px;
    }
</style>