import sinon from "sinon";
import chai from 'chai'
import {createLocalVue, mount} from '@vue/test-utils'

const {expect} = chai;
import Vue from 'vue'

import Slides from '../../src/components/slides/slides'
import SlidesItem from '../../src/components/slides/slides-item'

import sinonChai from 'sinon-chai'
chai.use(sinonChai)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Slides', () => {
    it('存在.', () => {
        expect(Slides).to.exist
    })

    describe('props', () => {

        it('接受 slides-item', (done) => {
            const localVue = createLocalVue()
            localVue.component('g-slides-item',SlidesItem)

            const wrapper = mount(Slides, {
                attachToDocument:true,
                slots: {
                    default: `            
            <g-slides-item name="1">
                <div class="box1">1</div>
            </g-slides-item>`
                },
                localVue
            })
            setTimeout(() => {
                expect(wrapper.find('.box1').exists()).to.eq(true)
                done()
            })
        })

        it('接受 selected', () => {
            const localVue = createLocalVue()
            localVue.component('g-slides-item',SlidesItem)

            const wrapper = mount(Slides, {
                attachToDocument:true,
                propsData:{
                    autoPlay: false,
                    selected:"1"
                },
                slots: {
                    default: `            
            <g-slides-item name="1">
                <div class="box1">1</div>
            </g-slides-item>
            <g-slides-item name="2">
                <div class="box1">2</div>
            </g-slides-item>`
                },
                localVue
            })
            expect(wrapper.find('.box1')).to.exist
        })
    })

    describe('事件', () => {
        it('点击第几个就展示第几个', (done) => {
            Vue.component('GSlidesItem', SlidesItem)
            const wrapper = mount(Slides, {
                propsData: {
                    autoPlay: false,
                    selected: '1'
                },
                slots: {
                    default: `
              <g-slides-item name="1">
                <div class="box1">1</div>
              </g-slides-item>
              <g-slides-item name="2">
                <div class="box2">2</div>
              </g-slides-item>
              <g-slides-item name="3">
                <div class="box3">3</div>
              </g-slides-item>
            `
                },
                listeners: {
                    'update:selected': (x) => {
                        expect(x).to.eq('1')
                        done()
                    }
                }
            })
            wrapper.find('[data-index="1"]').trigger('click')
        })

        it('会自动播放', (done) => {
            Vue.component('GSlidesItem', SlidesItem)
            const callback = sinon.fake();
            const wrapper = mount(Slides, {
                propsData: {
                    autoPlay: true,
                    autoPlayDelay: 20,
                    selected: '2'
                },
                slots: {
                    default: `
          <g-slides-item name="1">
            <div class="box1">1</div>
          </g-slides-item>
          <g-slides-item name="2">
            <div class="box2">2</div>
          </g-slides-item>
          <g-slides-item name="3">
            <div class="box3">3</div>
          </g-slides-item>
        `
                },
                listeners: {
                    'update:selected': callback
                }
            })
            setTimeout(() => {
                expect(callback).to.have.been.calledWith('2')
                done()
            }, 21)
        }),
        it('可以点击下一张', (done) => {
            Vue.component('GSlidesItem', SlidesItem)
            const callback = sinon.fake();
            const wrapper = mount(Slides, {
                propsData: {
                    autoPlay: true,
                    autoPlayDelay: 20,
                    selected: '1'
                },
                slots: {
                    default: `
      <g-slides-item name="1">
        <div class="box1">1</div>
      </g-slides-item>
      <g-slides-item name="2">
        <div class="box2">2</div>
      </g-slides-item>
      <g-slides-item name="3">
        <div class="box3">3</div>
      </g-slides-item>
    `
                },
                listeners: {
                    'update:selected': callback
                }
            })
            setTimeout(() => {
                wrapper.find('[data-action="next"]').trigger('click')
                expect(callback).to.have.been.calledWith('3')
                done()
            }, 21)
        })
    })
})