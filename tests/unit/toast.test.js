import Vue from 'vue'
import Toast from '../../src/components/toast/toast'

const expect = chai.expect;

Vue.config.productionTip = false
Vue.config.devtools = false

// toast.test.js里的代码和plugin.js是完全分离的，没有任何关系
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
            setTimeout(() => {
                // 判断vm.$el是否被移出document.body
                expect(document.body.contains(vm.$el)).to.equal(false)
                done()
            }, vm.autoClose * 1000)

        })

        // 这个测试中,vm.$el不需要放入文档(取元素是用vm.$el.querySelector)
        it('toast 接受 closeButton', () => {

            const callback = sinon.fake()

            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: '测试text',
                        callback // sionon的callback,方便expect
                    },
                }
            }).$mount()

            const closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.equal('测试text')

            //触发 closeButton 的 click 事件,相当于closeButton.click()
            let event = new Event('click');
            closeButton.dispatchEvent(event)

            expect(callback).to.have.been.called
        })

        it('toast 接受 enableHTML', () => {

            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    enableHTML: true
                }
            })
            vm.$slots.default = ['这是<strong>测试<strong>信息']
            vm.$mount()

            // 能通过文本选择器选到标签,就说明测试成功
            expect(vm.$el.hasChildNodes('strong')).to.equal(true)

        })


        it('toast 接受 position', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    position: 'middle'
                }
            }).$mount()

            // 测试classList包含position-middle即可
            expect(vm.$el.classList.contains('position-middle')).to.equal(true)

        })

    })
})