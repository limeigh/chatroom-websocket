## websocket
> 是Html5中新技术
> 客户端与服务器只需要建立一次连接，然后服务器端能够随时给客户端发消息
> window.WebSocket
> 也是一个新协议: http协议
> 并不能让浏览器与浏览器之前直接发消息，还是需要借助于服务器的

> websocket是用来做实时通讯!
> 在线聊天就是实时通讯
> 一定是需要后端配合!（一定要后端也是支持websocket）

wesocket与服务器通信就是打电话
// 电话打通了之后，随时可以聊天

http://11
探监狱:

探监者是浏览器!
被探者是服务器!

## 使用步骤
1.与服务器端建立连接(打通电话)
2.一旦连接建立成功了之后，就可以给服务器发消息了
3.并且服务器也可以在任何时候给客户端发消息.(前题是连接没有断开)

node 中需要使用 `ws` 模块与浏览器的websocket进行通信

## 聊天的网站
http ajax实现聊天


`net模块`这个是node的内置模块
任何两个电脑，可以使用它来直接通信!
net模块发消息，什么都可以发，[发什么就是什么]

http: 我发一个 你好吗 ? ,除了你好吗，还有请求头也被发给后端!

https: 