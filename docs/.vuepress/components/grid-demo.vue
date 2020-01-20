<template>
    <div class="demo">
        <h2>基础用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div>
            <div>
                <g-row>
                    <g-col span="8">
                        <div>8</div>
                    </g-col>
                    <g-col span="8">
                        <div>8</div>
                    </g-col>
                    <g-col span="8">
                        <div>8</div>
                    </g-col>
                </g-row>

                <g-row>
                    <g-col span="6">
                        <div>6</div>
                    </g-col>
                    <g-col span="6">
                        <div>6</div>
                    </g-col>
                    <g-col span="6">
                        <div>6</div>
                    </g-col>
                    <g-col span="6">
                        <div>6</div>
                    </g-col>
                </g-row>

                <g-row>
                    <g-col span="4">
                        <div>4</div>
                    </g-col>
                    <g-col span="4">
                        <div>4</div>
                    </g-col>
                    <g-col span="4">
                        <div>4</div>
                    </g-col>
                    <g-col span="4">
                        <div>4</div>
                    </g-col>
                    <g-col span="4">
                        <div>4</div>
                    </g-col>
                    <g-col span="4">
                        <div>4</div>
                    </g-col>
                </g-row>
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

        <h2>设置gutter</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div>
            <div>
                <g-row gutter="6">
                    <g-col span="11">
                        <div></div>
                    </g-col>
                    <g-col span="11">
                        <div></div>
                    </g-col>
                </g-row>

                <g-row gutter="6">
                    <g-col span="5">
                        <div></div>
                    </g-col>
                    <g-col span="5">
                        <div></div>
                    </g-col>
                    <g-col span="5">
                        <div></div>
                    </g-col>
                    <g-col span="5">
                        <div></div>
                    </g-col>
                </g-row>
            </div>
            <div>
                <p>
                    <strong>代码</strong>
                </p>
                <div>
                    <pre><code>{{codeStr2}}</code></pre>
                </div>
            </div>
        </div>

        <h2>设置align</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div>
            <div>
                <g-row align="left">
                    <g-col span="8">
                        <div></div>
                    </g-col>
                    <g-col span="8">
                        <div></div>
                    </g-col>
                </g-row>
                <g-row align="center">
                    <g-col span="8">
                        <div></div>
                    </g-col>
                    <g-col span="8">
                        <div></div>
                    </g-col>
                </g-row>
            </div>

            <g-row align="right">
                <g-col span="8">
                    <div></div>
                </g-col>
                <g-col span="8">
                    <div></div>
                </g-col>
            </g-row>
        </div>
        <div>
            <p>
                <strong>代码</strong>
            </p>
            <div>
                <pre><code>{{codeStr3}}</code></pre>
            </div>
        </div>
        <h2>设置offset</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div>
            <div>
                <g-row>
                    <g-col span="8" offset="8">
                        <div>8</div>
                    </g-col>
                    <g-col span="8">
                        <div>8</div>
                    </g-col>
                </g-row>
                <g-row>
                    <g-col span="6">
                        <div>6</div>
                    </g-col>
                    <g-col span="6">
                        <div>6</div>
                    </g-col>
                    <g-col span="6" offset="6">
                        <div>6</div>
                    </g-col>
                </g-row>
            </div>
        </div>
        <div>
            <p>
                <strong>代码</strong>
            </p>
            <div>
                <pre><code>{{codeStr4}}</code></pre>
            </div>
        </div>
    </div>
</template>

<script>
    import GCol from '../../../src/components/grid/col'
    import GRow from '../../../src/components/grid/row'

    export default {
        name: "grid-demo",
        components: {GCol, GRow},
        data() {
            return {
                codeStr: `
<g-row>
    <g-col span="8">
        <div>8</div>
    </g-col>
    <g-col span="8">
        <div>8</div>
    </g-col>
    <g-col span="8">
        <div>8</div>
    </g-col>
</g-row>

<g-row>
    <g-col span="6">
        <div>6</div>
    </g-col>
    <g-col span="6">
        <div>6</div>
    </g-col>
    <g-col span="6">
        <div>6</div>
    </g-col>
    <g-col span="6">
        <div>6</div>
    </g-col>
</g-row>

<g-row>
    <g-col span="4">
        <div>4</div>
    </g-col>
    <g-col span="4">
        <div>4</div>
    </g-col>
    <g-col span="4">
        <div>4</div>
    </g-col>
    <g-col span="4">
        <div>4</div>
    </g-col>
    <g-col span="4">
        <div>4</div>
    </g-col>
    <g-col span="4">
        <div>4</div>
    </g-col>
</g-row>
        `,
                codeStr2: `
<g-row gutter="6">
    <g-col span="11">
        <div></div>
    </g-col>
    <g-col span="11">
        <div></div>
    </g-col>
</g-row>
<g-row gutter="6">
    <g-col span="5">
        <div></div>
    </g-col>
    <g-col span="5">
        <div></div>
    </g-col>
    <g-col span="5">
        <div></div>
    </g-col>
    <g-col span="5">
        <div></div>
    </g-col>
</g-row>
        `,
                codeStr3: `
<g-row align="left">
    <g-col span="8">
        <div></div>
    </g-col>
    <g-col span="8">
        <div></div>
    </g-col>
</g-row>
<g-row align="center">
    <g-col span="8">
        <div></div>
    </g-col>
    <g-col span="8">
        <div></div>
    </g-col>
</g-row>
</div>
<g-row align="right">
    <g-col span="8">
        <div></div>
    </g-col>
    <g-col span="8">
        <div></div>
    </g-col>
</g-row>`,
                codeStr4:`
<g-row>
    <g-col span="8" offset="8">
        <div>8</div>
    </g-col>
    <g-col span="8">
        <div>8</div>
    </g-col>
</g-row>
<g-row>
    <g-col span="6">
        <div>6</div>
    </g-col>
    <g-col span="6">
        <div>6</div>
    </g-col>
    <g-col span="6" offset="6">
        <div>6</div>
    </g-col>
</g-row>
                `
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>