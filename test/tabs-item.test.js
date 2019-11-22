import Vue from 'vue'
import TabsItem from '../src/tabs-item'

const expect = chai.expect;

Vue.config.productionTip = false
Vue.config.devtools = false


describe('TabsItem', () => {

    it('存在.', () => {
        expect(TabsItem).to.exist
    })

    describe('props', () => {
        it('接收 name', () => {

            const Constructor = Vue.extend(TabsItem)
            const vm = new Constructor({
                propsData: {
                    name: 'testName',
                }
            }).$mount()

            // 不要测vm.name,要测试DOM元素
            expect(vm.$el.getAttribute('data-name')).to.eq('testName');
        })
        it('接收 disabled', () => {
            let callback=sinon.fake()
            const Constructor = Vue.extend(TabsItem)
            const vm = new Constructor({
                propsData: {
                    disabled:true
                }
            }).$mount()
            // 测试　disabled 的　class
            expect(vm.$el.classList.contains('disabled')).to.equal(true)
            // 测试　disabeld 的item 无法被点击
            vm.$on('click',callback)
            vm.$el.click()
            expect(callback).to.have.not.been.called
        })

    })
})
