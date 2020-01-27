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
                <g-input v-model="emailValue" placeholder="请输入邮箱地址" value="" class="email"></g-input>
                <div v-if="errors.email" style="color: red">邮箱{{errorType}}</div>
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
    import Validator from "../../../src/components/validator/validator";

    export default {
        name: "demo",
        components: {GInput, GButton},
        data() {
            let validator = new Validator()
            let rules = [
                {key: 'email', required: true, pattern: 'email', minLength: 6}
            ]
            return {
                emailValue: '',
                validator,
                rules,
                errors: {},
                codeStr: `
<div class="validateClass">
    <g-input v-model="emailValue" placeholder="请输入邮箱地址" value="" class="email"></g-input>
    <div v-if="errors.email" style="color: red">邮箱{{errorType}}</div>
    <g-button @click.native="onClick" class="submit">提交</g-button>
</div>

let rules = [
    {key: 'email', required: true, pattern: 'email', minLength: 6}
]

methods: {
    onClick() {
        this.errors = this.validator.validate(this.InputData, this.rules);
    }
}
`,
            }
        },
        computed: {
            InputData() {
                return {'email': this.emailValue}
            },
            errorType() {
                let type = Object.keys(this.errors)[0];
                let e2 = this.errors[type]
                let t2 = Object.keys(e2)[0];
                return e2[t2]
            }
        },
        methods: {
            onClick() {
                this.errors = this.validator.validate(this.InputData, this.rules);
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