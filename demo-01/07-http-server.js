// 1.加载 http 模块
const http = require('http')

// 2.创建一个 http 服务对象
const server = http.createServer()

// 3.监听用户的请求事件( request事件 )
/* 
    request 对象包含了用户请求报文中的所有内容, 通过 req 对象可以获取用户提交过来的数据
    response 对象用来向用户响应一些数据, 当服务器要向客户端响应数据的时候必须使用response对象
*/
server.on('request', (req, res) => {
    res.write('hello world')
    res.end()
})

// 4.启动服务
server.listen(3600, () => {
    console.log(`服务器启动了, 请访问 http://localhost:3600`);
    
})
