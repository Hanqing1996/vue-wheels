var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
    console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
    process.exit(1)
}

var server = http.createServer(function(request, response){
    var parsedUrl = url.parse(request.url, true)
    var pathWithQuery = request.url
    var queryString = ''
    if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
    var path = parsedUrl.pathname
    var query = parsedUrl.query
    var method = request.method

    /******** 从这里开始看，上面不要看 ************/
    if(path==='/main'){
        response.setHeader('Content-Type', 'application/javascript;charset=utf-8')
        response.end('console.log(1)')
    }else if(path === '/1.html'){
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.end(`
    <!DOCTYPE html>
    <head>
    <script src="/main"></script>
    </head>
    <h1>你好</h1>
    `)
    }

    /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请打开 http://zhq.com:' + port)