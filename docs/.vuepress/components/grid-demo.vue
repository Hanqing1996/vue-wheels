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
                <div class="code-content" style="height: 0;">
                    <div class="code-content-height">
                        <pre><code class="html">{{codeStr2}}</code></pre>
                    </div>
                </div>
                <div class="lock-code" @click="showCode(1)" ref="xxx">
                    <g-icon class="icon-down" :name="isShow[1] === false ? 'down' : 'up'"></g-icon>
                    <span class="lock-code-word">{{isShow[1] === false ? '显示代码' : '隐藏代码'}}</span>
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
            <div class="code-content" style="height: 0;">
                <div class="code-content-height">
                    <pre><code class="html">{{codeStr3}}</code></pre>
                </div>
            </div>
            <div class="lock-code" @click="showCode(2)" ref="xxx">
                <g-icon class="icon-down" :name="isShow[2] === false ? 'down' : 'up'"></g-icon>
                <span class="lock-code-word">{{isShow[2] === false ? '显示代码' : '隐藏代码'}}</span>
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
            <div class="code-content" style="height: 0;">
                <div class="code-content-height">
                    <pre><code class="html">{{codeStr4}}</code></pre>
                </div>
            </div>
            <div class="lock-code" @click="showCode(3)" ref="xxx">
                <g-icon class="icon-down" :name="isShow[3] === false ? 'down' : 'up'"></g-icon>
                <span class="lock-code-word">{{isShow[3] === false ? '显示代码' : '隐藏代码'}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import GCol from '../../../src/components/grid/col'
    import GRow from '../../../src/components/grid/row'
    import GIcon from '../../../src/components/button/icon'

    import mixin from '../mixin'

    export default {
        name: "grid-demo",
        mixins: [mixin],
        components: {GCol, GRow,GIcon},
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
        `.replace(/^ {8}/gm, '').trim(),
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
        `.replace(/^ {8}/gm, '').trim(),
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
</g-row>`.replace(/^ {8}/gm, '').trim(),
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
                `.replace(/^ {8}/gm, '').trim(),
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>