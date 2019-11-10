import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

const expect = chai.expect;

Vue.config.productionTip = false
Vue.config.devtools = false


describe('Row and Col', () => {

    it('存在.', () => {
        expect(Row).to.exist
        expect(Col).to.exist

    })

    describe('props', () => {


        it('接收 gutter 属性', (done) => {
            Vue.component('g-row',Row)
            Vue.component('g-col',Col)
            const div=document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML=`
                <g-row gutter="20">
                    <g-col></g-col>
                    <g-col></g-col>
                </g-row>
                `
            const vm=new Vue({
                el:div
            })

            /**
             * 由于 $mount 是异步执行的，所以我们要使用异步的 setTimeout 来查看 $mount() 后的 col 的 paddingLeft
             * done() 表示异步结束,之后的代码为同步代码
             **/
            setTimeout(()=>{

                // 测试 row
                const row= vm.$el.querySelector('.row')
                expect(getComputedStyle(row).marginLeft).to.eq('-10px')

                // 测试 col
                const col= vm.$el.querySelector('.col')
                expect(getComputedStyle(col).paddingLeft).to.eq('10px')
                div.remove()
                vm.$el.remove()
                vm.$destroy()
                done()

            },1500)

        })

        it('接收 align 属性', () => {

            const div=document.createElement('div')
            document.body.appendChild(div)

            const Constructor = Vue.extend(Row)
            const vm = new Constructor({
                propsData: {
                    align: 'left',
                }
            }).$mount(div)

            const row= vm.$el
            expect(getComputedStyle(row).justifyContent).to.eq('flex-start')
            div.remove()
            vm.$destroy()
        })
    })
})
