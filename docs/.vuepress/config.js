module.exports = {
    base:'/vue-wheels/',
    title: 'Wheels',
    description: 'Just playing around',
    themeConfig: {
        sidebar: [
            {
                title:'入门',
                children:['/install/','get-started/']
            },
            {
                title: '组件',
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