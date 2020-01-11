import chai from 'chai'
import {mount} from '@vue/test-utils'
const {expect} = chai;
import Vue from 'vue'

import Row from '../../src/components/grid/row'
import Col from '../../src/components/grid/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row and Col', () => {

    it('存在.', () => {
        expect(Row).to.exist
        expect(Col).to.exist

    })

    describe('props', () => {

        it('row 接收 gutter', (done) => {
            Vue.component('g-col',Col)
            const wrapper = mount(Row, {
                attachToDocument:true,
                propsData: {
                    gutter: 20
                },
                slots: {
                    default: {template: `<g-col></g-col>`},
                }
            })
            let row= wrapper.find('.row').element
            Vue.nextTick(()=>{
                expect(row.style.marginLeft).to.eq('-10px')
                done()
            })
        })

        it('row 接收 align', () => {
            const wrapper = mount(Row, {
                attachToDocument:true,
                propsData: {
                    align: 'left',
                }
            })
            expect(getComputedStyle(wrapper.vm.$el).justifyContent).to.eq('flex-start')
        })

        it('col 接受 span,offset',()=>{
            const wrapper = mount(Col, {
                attachToDocument:true,
                propsData: {
                    span: 1,
                    offset:1
                }
            })
            expect(wrapper.classes().includes('col-1')).to.eq(true)
            expect(wrapper.classes().includes('offset-1')).to.eq(true)
        })

        it('col 接受 pc',()=>{
            const wrapper = mount(Col, {
                attachToDocument:true,
                propsData: {
                    pc:{span:1,offset:1}
                }
            })
            expect(wrapper.classes().includes('col-pc-1')).to.eq(true)
            expect(wrapper.classes().includes('offset-pc-1')).to.eq(true)
        })
    })
})

