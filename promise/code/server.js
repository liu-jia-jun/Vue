//  通过安装 express 框架来书写和使用服务端

// 现在最外层文件夹中初始化  npm init --yes


// npm i express  安装 express 框架


//  npm install -g nodemon  当service.js 保存时自动重启当前服务



// 1.引入express
const { response } = require("express");
const express = require("express");
const { request } = require("http");

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装


// promise 请求

app.all("/promise", (request, response) => {
      response.setHeader("Access-Control-Allow-Origin", "*");
  var data = { username: "刘佳俊", userage: 20 };

  data = JSON.stringify(data);
  response.send(data);
})











// Jquery 请求
app.all("/jquery-server", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  var data = { username: "刘佳俊", userage: 20 };

  data = JSON.stringify(data);
  setTimeout(function () {
    response.send(data);
  }, 3000);
});

app.get("/jquery-server/get", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  var data = { username: "刘佳俊", userage: 20 };

  data = JSON.stringify(data);
  response.send(data);
});

app.post("/jquery-server/post", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  var data = { username: "刘佳俊", userage: 20 };

  data = JSON.stringify(data);
  response.send(data);
});

// axios请求
app.all("/axios-server", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  var data = { username: "刘佳俊", userage: 20 };

  data = JSON.stringify(data);
  setTimeout(function () {
    response.send(data);
  }, 3000);
});

app.get("/axios-server/get", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  response.setHeader("Access-Control-Allow-Method", "*");
  var data = { username: "刘佳俊", userage: 20 };

  data = JSON.stringify(data);
  response.send(data);
});

app.post("/axios-server/post", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  var data = { username: "刘佳俊", userage: 20 };

  data = JSON.stringify(data);
  response.send(data);
});

// 4.监听端口启动服务

app.listen(8000, () => {
  console.log("服务已经启动，8000端口监听中");
});

// 注意  在该终端下按 CTRL  +  C  结束该服务
