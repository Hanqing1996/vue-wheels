import Vue from 'vue'
import Input from '../src/input'

const expect = chai.expect;

Vue.config.productionTip = false
Vue.config.devtools = false


/**
 * 注意以下操作的inputElement不是index.html里的元素g-input，而是input.vue的template里的元素input
 * 所以 inputElement.value 对应的是<input type="text" :value=value />
 *     inputElement.disabled 对应的是<input type="text" :disabled="disabled"/>
 */


describe('Input', () => {

    it('存在.', () => {
        expect(Input).to.exist
    })

    describe('props', () => {


        const Constructor = Vue.extend(Input)

        let vm = new Constructor({})
        afterEach(() => {
            vm.$destroy()
        })

        it('接收 value', () => {
            vm = new Constructor({
                propsData: {
                    value: 'input的value'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')

            expect(inputElement.value).to.equal('input的value')
        })
        it('接收 disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')

            expect(inputElement.disabled).to.equal(true)
        })
        it('接收 readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
        })
        it('接收 error', () => {
            const vm = new Constructor({
                propsData: {
                    error: 'something wrong'
                }
            }).$mount()
            // 检测 icon
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            // 检测 errorMessage
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerText).to.equal('something wrong')
        })
    })

    describe('事件', () => {
        const Constructor = Vue.extend(Input)

        let vm = new Constructor({})
        afterEach(function () {
            vm.$destroy()
        })

        it('支持 change/input/focus/blur 事件', () => {
            ['change', 'input', 'focus', 'blur']
                .forEach((eventName) => {
                    vm = new Constructor({}).$mount()
                    const callback = sinon.fake();

                    // 为vue实例添加监听事件，注意这与index.html中有无为input添加事件无关
                    vm.$on(eventName, callback)

                    //触发input的change 事件，index.html 中的 input 没有添加 change,focus,blur 事件
                    let event = new Event(eventName);

                    // /**
                    //  * 触发input的change事件后,会按照input.vue内容执行emit('change',$event),即触发父组件的change事件，且回调参数为event
                    //  * 我们接下来验证回调参数为event
                    //  */
                    // expect(callback).to.have.been.calledWith(event)


                    // input 支持双向绑定后,input.vue 内容为 $emit('blur/focus/input', $event.target.value)"  因此 expect 中回调函数参数应该为 event.target.value

                    // 这个 event.target.value 是我们伪造的
                    Object.defineProperty(
                        event, 'target', {
                            value: {value: 'hi'}, enumerable: true
                        }
                    )

                    let inputElement = vm.$el.querySelector('input')
                    inputElement.dispatchEvent(event)
                    expect(callback).to.have.been.calledWith(event.target.value)
                })
        })
    })
})

