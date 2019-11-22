import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

const expect = chai.expect;

Vue.config.productionTip = false
Vue.config.devtools = false

Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)
describe('Tabs', () => {

    it('存在.', () => {
        expect(Tabs).to.exist
    })

    describe('props', () => {

        it('接收 selected', (done) => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML=`
        <g-tabs selected="military">
            <g-tabs-head>
                <g-tabs-item name="military">
                    军事
                </g-tabs-item>
                <g-tabs-item name="finance">财经</g-tabs-item>
                <g-tabs-item name="sports">体育</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="military">军事新闻</g-tabs-pane>
                <g-tabs-pane name="finance">财经新闻</g-tabs-pane>
                <g-tabs-pane name="sports">体育新闻</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
                `
            const vm=new Vue({
                el:div
            })

            // active是异步的,不下面这样拿不到active
            setTimeout(()=>{

                expect(vm.$el.getElementsByClassName('active')[0].textContent.trim()).to.be.equal('军事');
                done()

            },0)


        })
    })



})

