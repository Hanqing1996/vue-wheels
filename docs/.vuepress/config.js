const path = require('path')
module.exports = {
    base:'/vue-wheels/',
    title: 'Wheels',
    description: 'Just playing around',
    themeConfig: {
        sidebar: [
            {
                title:'入门',
                collapsable: false,
                children:['/install/','/get-started/']
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
                    '/components/tabs',
                    '/components/cascader',
                    '/components/collapse',
                    '/components/popover',
                    '/components/slides',
                    '/components/nav',
                    '/components/pager',
                    '/components/validator',
                    '/components/table',
                    '/components/sticky',
                    '/components/uploader',
                ]
            },
            {
                title: '总结',
                collapsable: false,
                children:['/组件需求分析/','/API设计原则/','/单元测试总结/','/vue-cli/','/vue-summary/','/开发流程/','/开发规范/']
            }
        ]
    },
    scss:{
        includePaths: [path.join(__dirname, '../../styles')]
    }
}