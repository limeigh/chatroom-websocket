const express = require('express')
const WebSocket = require('ws')

// 使用websocket协议监听8080端口
const wss = new WebSocket.Server({
  port: 8080 // 指定端口号
})

// on是用来注册事件的
// 'click' 对应是的点击事件
// 'connections', 对应的是有客户端连接到服务器的事件
wss.on('connection', (client) => {
  // 参数 client代表，连接的客户端!
  // 'message', 是客户端发消息给服务器时触发的事件
  client.on('message', (data) => {
    // 当有消息过来时，我们服务器其他所有的客户端发同样消息
    // wss.clients  是个数组，包含了所有通过websockt连接到服务器的客户端对象
    wss.clients.forEach(client => {
      client.send(data)
    })
  })
})

const app = express()
app.use(express.static('www'))
// http监听3000端口
app.listen(3000, (err) => {
  if (err) {
    return console.log('error')
  }
  console.log('ok:3000')
})
