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

        // 这个测试中,vm.$el不需要放入文档
        it('toast 接受 closeButton　属性', () => {

            const callback= sinon.fake()

            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: '测试text',
                        callback // sionon的callback,方便expect
                    },
                }
            }).$mount()

            const closeButton=vm.$el.querySelector('.close')

            expect(closeButton.textContent.trim()).to.equal('测试text')

            //触发 closeButton 的 click 事件,相当于closeButton.click()
            let event = new Event('click');
            closeButton.dispatchEvent(event)

            expect(callback).to.have.been.called
        })





    })
})

