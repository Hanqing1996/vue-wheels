module.exports = {
    base:'/vue-wheels/',
    title: 'Wheels',
    description: 'Just playing around',
    themeConfig: {
        sidebar: [
            {
                title:'入门',
                collapsable: false,
                children:['/install/','get-started/']
            },
            {
                title: '组件',
                collapsable: false,
                children:[
                    '/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/toast',
                    '/components/tabs'
                ]
            }
        ]
    }
}