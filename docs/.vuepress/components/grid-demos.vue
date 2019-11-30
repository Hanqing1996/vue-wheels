<template>
    <div>
        <g-row>
            <g-col span="9">
                <!-- g-col 统一靠左-->
                <g-row align="left">
                    <g-col>1</g-col><g-col>2</g-col>
                </g-row>
            </g-col>
            <!-- g-col 统一靠右-->
            <g-col span="15">
                <g-row align="right">
                    <g-col>3</g-col>
                    <g-col>4</g-col>
                    <g-col>5</g-col>
                </g-row>
            </g-col>
        </g-row>

        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>
    import Row from '../../../src/row'
    import Col from '../../../src/col'

    export default {
        name: "grid-demos",
        components:{
            'g-row':Row,
            'g-col':Col
        },
        data(){
            return{
                content:`
                <g-row>
                    <g-col span="9">
                        <!-- g-col 统一靠左-->
                        <g-row align="left">
                            <g-col>1</g-col><g-col>2</g-col>
                        </g-row>
                    </g-col>
                    <!-- g-col 统一靠右-->
                    <g-col span="15">
                        <g-row align="right">
                            <g-col>3</g-col>
                            <g-col>4</g-col>
                            <g-col>5</g-col>
                        </g-row>
                    </g-col>
                </g-row>
                `
            }
        }
    }
</script>