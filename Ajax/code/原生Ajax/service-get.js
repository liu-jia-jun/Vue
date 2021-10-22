// 1.引入express
const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装

 

app.get("/service", (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    
    // 在get请求中以 xhr.open("GET", "http://localhost:8000/service?name=刘佳俊&age=21");的形式来进行参数的传递时
    // 可以通过 request.query.name 来获取其中的参数

    console.log(request.query.name+request.query.age);




    response.send("hello world"+request.query.name);
});


// 4.监听端口启动服务

app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中");
});

// 注意  在该终端下按 CTRL  +  C  结束该服务