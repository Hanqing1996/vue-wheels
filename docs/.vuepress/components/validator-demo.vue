<template>
    <div class="demo">
        <h2>基本用法</h2>
        <p>
            <strong>规则</strong>
        </p>
        <div class="rules">
            <div>1. 邮箱地址必填</div>
            <div>2. 邮箱地址长度不得少于6位</div>
            <div>3. 邮箱地址中@前后必须有字符</div>
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
    import GInput from "../../../src/components/input/input";
    import GButton from "../../../src/components/button/button";
    import GIcon from '../../../src/components/button/icon'

    import mixin from '../mixin'

    import plugin from '../../../src/validatorPlugin'
    import Vue from 'vue'

    Vue.use(plugin)

    export default {
        name: "demo",
        mixins: [mixin],
        components: {GInput, GButton,GIcon},
        data() {
            return {
                emailValue: '',
                rules: [
                    {key: 'email', pattern: 'email', required: true, minLength: 6}
                ],
                errors: {},
                codeStr:`
<div class="validateClass">
    <g-input v-model="emailValue" placeholder="请输入邮箱地址" class="email"></g-input>
    <div v-if="errors.email" style="color: red">邮箱{{errorInformation}}</div>
    <g-button @click.native="onClick" class="submit">提交</g-button>
</div>

rules: [
    {key: 'email', pattern: 'email', required: true, minLength: 6}
],

onClick() {
    this.errors = this.$validate({
        data: this.InputData, rules: this.rules
    })
}
                `.replace(/^ {8}/gm, '').trim(),
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
            onClick() {
                this.errors = this.$validate({
                    data: this.InputData, rules: this.rules
                })
            }
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