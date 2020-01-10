import sinon from "sinon";
import chai from 'chai'
import {mount} from '@vue/test-utils'

const {expect} = chai;
import Vue from 'vue'

import Row from '../../src/components/grid/row'
import Col from '../../src/components/grid/col'
import popOver from "../../src/components/popover/popover";

Vue.config.productionTip = false
Vue.config.devtools = false


describe('Row and Col', () => {

    it('存在.', () => {
        expect(Row).to.exist
        expect(Col).to.exist

    })

    describe('props', () => {


        it('row 和 col 接收 gutter', (done) => {

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
            let col= wrapper.find('.col').element

            Vue.nextTick(()=>{
                expect(row.style.marginLeft).to.eq('-10px')
                done()
            })
        })

        it('row 接收 align', () => {

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

        it('col 接受 span,offset',()=>{

            const div=document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Col)
            const vm = new Constructor({
                propsData: {
                    span: 1,
                    offset:1
                }
            }).$mount(div)
            const col=vm.$el
            expect(col.classList.contains('col-1')).to.eq(true)
            expect(col.classList.contains('offset-1')).to.eq(true)
            div.remove()
            vm.$destroy()
        })

        it('col 接受 pc',()=>{

            const div=document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Col)
            const vm = new Constructor({
                propsData: {
                    pc:{span:1,offset:1}
                }
            }).$mount(div)
            const col=vm.$el
            expect(col.classList.contains('col-pc-1')).to.eq(true)
            expect(col.classList.contains('offset-pc-1')).to.eq(true)
            div.remove()
            vm.$destroy()


        })


    })
})

