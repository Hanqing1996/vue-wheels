<template>
    <!--:class="{error:error}的简写，第一个error表示类名，第二个error表示props.error.-->
    <!--error值不为空时，类error有效，对应样式才有效-->
    <div class="wrapper" :class="{error}">
        <input type="text" :value=value :disabled="disabled" :readonly="readonly"
               @change="$emit('change', $event.target.value)"
               @input="$emit('input', $event.target.value)"
               @focus="$emit('focus', $event.target.value)"
               @blur="$emit('blur', $event.target.value)" :placeholder="placeholder"/>

        <template v-if="error">
            <Icon name="error" class="icon-error"></Icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from '../button/icon'

    export default {
        name: "WheelInput",

        components: {Icon},
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            },
            placeholder:{
                type:String
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/var";
    .wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;

        > :not(:last-child) {
            margin-right: .5em;
        }

        > input {
            height: 32px;
            border: 1px solid $border-color;
            border-radius: 4px;
            padding: 0 8px;
            font-size: inherit;

            &:hover {
                border-color: $border-color-hover;
            }

            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }

            &[disabled], &[readonly] {
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;
            }
        }

        &.error {
            > input {
                border-color: $red;
            }
        }

        .icon-error {
            fill: $red;
        }

        .errorMessage {
            color: $red;
        }
    }
</style>