// 获取webpack内容("测试用例放在哪里")
var webpackConfig = require('@vue/cli-service/webpack.config.js')

module.exports = function(config) {
    config.set({
        frameworks: ['mocha'],

        files: ['tests/**/*.spec.js'],

        preprocessors: {
            '**/*.spec.js': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,

        reporters: ['spec','coverage'],
        autoWatch: true,

        browsers: ['ChromeHeadless'],

        coverageReporter: {
            dir: './coverage',
            reporters: [{ type: 'lcov', subdir: '.' }, { type: 'text-summary' }]
        }
    })
}