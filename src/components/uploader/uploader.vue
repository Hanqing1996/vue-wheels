<template>
    <div class="g-uploader">
        <div @click="onClickUpload" ref="trigger">
            <slot></slot>
        </div>

        <slot name="tips"></slot>
        <div ref="temp" style="height: 0;width: 0;overflow: hidden"></div>
        <img :src="url" alt="">
    </div>
</template>

<script>
    // http://localhost:3000/upload
    export default {
        name: "uploader",
        data() {
            return {
                url: 'about:blank'
            }
        },
        props: {
            // 文件名
            name: {
                type: String,
                required: true
            },
            // 服务器地址
            action: {
                type: String,
                required: true
            },
            // 请求方式
            method: {
                type: String,
                default: 'POST'
            },
            // 解析函数
            parseResponse: {
                type: Function,
                required: true
            }
        },
        methods: {
            onClickUpload() {
                let input = document.createElement('input')
                input.type = "file"
                input.name = "uploadFile"
                this.$refs.temp.appendChild(input)
                input.addEventListener('change', () => {
                    let file = input.files[0]
                    input.remove()

                    let formData = new FormData()
                    formData.append('uploadFile', file)

                    let xhr = new XMLHttpRequest()
                    xhr.open(this.method, this.action)
                    xhr.send(formData)
                    xhr.onload = () => {
                        let img = document.querySelector('img')
                        this.url =this.parseResponse(xhr.response)
                    }
                })
                input.click()
            }
        }
    }
</script>

<style scoped lang="scss">
    .g-uploader {
        border: 1px solid red;
    }
</style>