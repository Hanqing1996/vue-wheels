import Vue from 'vue'
import Toast from '../src/toast'

const expect = chai.expect;

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {

    it('存在.', () => {
        expect(Toast).to.exist
    })

    describe('props', () => {

        it('toast 接受 autoClose　属性', (done) => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: 1
                }
            }).$mount(div)

            // 确保在vm.execAutoClose执行后再去判断vm.$el是否被移出document.body
            setTimeout(()=>{
                // 判断vm.$el是否被移出document.body
                expect(document.body.contains(vm.$el)).to.equal(false)
                done()
            },vm.autoClose*1000)

        })

        it('toast 接受 position　属性', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose:1,
                    position:'middle'
                }
            }).$mount(div)


            console.log(getComputedStyle(vm.$el).top);

            // setTimeout(()=>{
            //     console.log(getComputedStyle(vm.$el).top);
            //
            //     done()
            // },vm.autoClose*1000)


        })







    })
})

