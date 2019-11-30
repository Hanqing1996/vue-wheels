<template>
    <div>
        <g-tabs :selected="selectedTab" direction="horizontal">
            <g-tabs-head>
                <template slot="actions">
                    <button>设置</button>
                </template>
                <g-tabs-item name="military">
                    <g-icon name="settings"></g-icon>
                    军事
                </g-tabs-item>
                <g-tabs-item name="finance" :disabled="true">财经</g-tabs-item>
                <g-tabs-item name="sports">体育</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="military">军事新闻</g-tabs-pane>
                <g-tabs-pane name="finance">财经新闻</g-tabs-pane>
                <g-tabs-pane name="sports">体育新闻</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
    </div>

    <pre>
        <code>{{content}}</code>
    </pre>
</template>

<script>
    export default {
        name: "tabs-demos",
        data() {
            return {
                content: `
                <g-tabs :selected="selectedTab" direction="horizontal">
                    <g-tabs-head>
                        <template slot="actions">
                            <button>设置</button>
                        </template>
                        <g-tabs-item name="military">
                            <g-icon name="settings"></g-icon>
                            军事
                        </g-tabs-item>
                        <g-tabs-item name="finance" :disabled="true">财经</g-tabs-item>
                        <g-tabs-item name="sports">体育</g-tabs-item>
                    </g-tabs-head>
                    <g-tabs-body>
                        <g-tabs-pane name="military">军事新闻</g-tabs-pane>
                        <g-tabs-pane name="finance">财经新闻</g-tabs-pane>
                        <g-tabs-pane name="sports">体育新闻</g-tabs-pane>
                    </g-tabs-body>
                </g-tabs>
                `
            }
        }
    }
</script>