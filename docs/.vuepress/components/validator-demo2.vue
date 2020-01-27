<template>
    <div class="demo">
        <h2>自定义规则</h2>
        <div class="rules">
            <div>邮箱地址中必须含有数字</div>
        </div>
        <p>
            <strong>预览</strong>
        </p>
        <div>
            <div class="validateClass">
                <g-input v-model="emailValue" placeholder="请输入邮箱地址" class="email"></g-input>
                <div v-if="errors.email" style="color: red">邮箱{{errorInformation}}</div>
                <g-button @click.native="onClick" class="submit">提交</g-button>
            </div>
            <div>
                <p>
                    <strong>代码</strong>
                </p>
                <div>
                    <pre><code>{{codeStr}}</code></pre>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import GInput from "../../../src/components/input/input";
    import GButton from "../../../src/components/button/button";

    import plugin from '../../../src/validatorPlugin'
    import Vue from 'vue'

    Vue.use(plugin)

    export default {
        name: "demo",
        components: {GInput, GButton},
        data() {
            return {
                emailValue: '',
                rules: [
                    {key: 'email', hasNumber: true}
                ],
                errors: {},
                codeStr:`
<div class="validateClass">
    <g-input v-model="emailValue" placeholder="请输入邮箱地址" class="email"></g-input>
    <div v-if="errors.email" style="color: red">邮箱{{errorInformation}}</div>
    <g-button @click.native="onClick" class="submit">提交</g-button>
</div>

rules: [
    {key: 'email', hasNumber: true}
],

hasNumber(value) {
    if (!/\\d/.test(value)) {
        return '必须含有数字'
    }
},

onClick() {
    this.errors = this.$validate({
        data: this.InputData, rules: this.rules
    })
}

mounted() {
    this.$addRule('hasNumber', this.hasNumber)
}
                `
            }
        },
        computed: {
            InputData() {
                return {'email': this.emailValue}
            },
            errorInformation() {
                let type = Object.keys(this.errors)[0];
                let e2 = this.errors[type]
                let t2 = Object.keys(e2)[0];
                return e2[t2]
            }
        },
        methods: {
            hasNumber(value) {
                if (!/\d/.test(value)) {
                    return '必须含有数字'
                }
            },
            onClick() {
                this.errors = this.$validate({
                    data: this.InputData, rules: this.rules
                })
            }
        },
        mounted() {
            this.$addRule('hasNumber', this.hasNumber)
        }
    }
</script>

<style lang="scss" scoped>
    .validateClass {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .email, .submit {
            margin: 5px;
        }
    }
</style>