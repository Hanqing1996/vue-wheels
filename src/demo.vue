<template>
    <div class="g-wrapper">
        <g-uploader
                action="https://zhq-node-server.herokuapp.com/upload"
                name="uploadFile"
                :parseResponse="parseResponse"
                :fileList.sync="fileList">
            <div style="padding: 10px;text-align: center">
                <g-button icon="upload">上传</g-button>
            </div>
        </g-uploader>
    </div>
</template>

<script>
    import GUploader from "./components/uploader/uploader";
    import GButton from './components/button/button'

    export default {
        name: "demo",
        components: {GUploader, GButton},
        data() {
            return {
                fileList:[]
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