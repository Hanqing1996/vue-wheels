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
    import Layout from '../../../src/components/layout/layout'
    import Sider from '../../../src/components/layout/sider'
    import Content from '../../../src/components/layout/content'
    import Header from '../../../src/components/layout/header'
    import Footer from '../../../src/components/layout/footer'

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
