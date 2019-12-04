export default {

    bind: function (el,binding) {

        let eventHandler = (event) => {

            if (!el.contains(event.target)) {
                binding.value()
            }
        }
        document.addEventListener('click', eventHandler)
    }
}