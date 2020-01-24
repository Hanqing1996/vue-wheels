import chai from 'chai'
import {mount} from '@vue/test-utils'

const {expect} = chai;
import Vue from 'vue'

import popOver from '../../src/components/popover/popover'

import sinonChai from 'sinon-chai'
chai.use(sinonChai)

Vue.config.productionTip = false
Vue.config.devtools = false


describe('popOver', () => {

    it('存在.', () => {
        expect(popOver).to.exist

    })

    describe('props', () => {

        // 这里是测试传入的position能否改变popover内部solt的位置
        it('接受 position', (done) => {
            const wrapper = mount(popOver, {
                propsData: {
                    position: 'bottom'
                },
                slots: {
                    default: {template: `<button>点我</button>`},
                    content: '<div>弹出内容</div>'
                }
            })
            // 这里用button触发click，因为在popover的onClick事件中有过滤措施，只有当触发元素为button时才改变visible
            wrapper.find('button').trigger('click')
            setTimeout(()=>{
                expect(wrapper.find('.content-wrapper').classes('position-bottom')).to.eq(true)
                done()
            })
        })

        // 测试 trigger
        it('接受 trigger', (done) => {

            const wrapper = mount(popOver, {
                propsData: {
                    trigger: 'hover'
                },
                slots: {
                    default: {template: `<button>点我</button>`},
                    content: '<div>弹出内容</div>'
                }
            })
            expect(wrapper.find('.content-wrapper').element).to.not.exist
            // 这里用.popover触发mouseenter
            wrapper.trigger('mouseenter')
            setTimeout(()=>{
                expect(wrapper.find('.content-wrapper').element).to.exist
                done()
            })
        })
    })
})

