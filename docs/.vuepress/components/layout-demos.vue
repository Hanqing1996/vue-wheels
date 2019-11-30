<template>
    <div>
        <g-layout>
            <g-sider>sider</g-sider>
            <g-layout>
                <g-header>header</g-header>
                <g-content>content</g-content>
                <g-footer>footer</g-footer>
            </g-layout>
        </g-layout>

        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>
    import Layout from '../../../src/layout'
    import Sider from '../../../src/sider'
    import Content from '../../../src/content'
    import Header from '../../../src/header'
    import Footer from '../../../src/footer'

    export default {
        components:{
            'g-layout':Layout,
            'g-sider':Sider,
            'g-header':Header,
            'g-footer':Footer,
            'g-content':Content
        },
        data(){
            return{
                content:`
                <g-layout>
                    <g-sider>sider</g-sider>
                    <g-layout>
                        <g-header>header</g-header>
                        <g-content>content</g-content>
                        <g-footer>footer</g-footer>
                    </g-layout>
                </g-layout>
                `
            }
        }
    }
</script>
<style>
</style>
