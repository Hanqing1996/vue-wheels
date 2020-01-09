import Vue from 'vue'
import popOver from '../../src/components/popover/popover'

const expect = chai.expect;

Vue.config.productionTip = false
Vue.config.devtools = false


describe('popOver', () => {

    it('存在.', () => {
        expect(popOver).to.exist

    })

    describe('props', () => {

        it('popover 可以设置 position', () => {

            Vue.component('g-popover', popOver)
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
            <g-popover position="bottom" ref="a">
                <template slot="content">
                弹出内容
                </template>
                <button>点我</button>
            </g-popover>
                    `
            const vm = new Vue({
                el: div
            })
            // vm是一个vue实例,vm.$refs.a才是组件popOver的实例
            const {contentWrapper}=vm.$refs.a.$refs
            expect(contentWrapper.classList.contains('position-bottom')).to.eq(true)
        })

        // click测试成功，但是操淡的mousenter无法测试成功
        xit('popover 可以测试 trigger', (done) => {

            Vue.component('g-popover', popOver)
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
            <g-popover trigger="hover" ref="a">
                <template slot="content">
                弹出内容
                </template>
                <button>点我</button>
            </g-popover>
                    `
            const vm = new Vue({
                el: div
            })

            const popOver=vm.$refs.a

            // console.log(popOver.$el)

            // mouseenter没法像click一样直接button.click()
            let event = new Event('mouseenter');
            const button=popOver.$el.querySelector('button')

            button.dispatchEvent(event) // 触发mouseenter
            setTimeout(()=>{
                // console.log(popOver.$el)
                done()
            },0)
        })
    })
})

