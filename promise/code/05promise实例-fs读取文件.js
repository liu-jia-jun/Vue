// 引入 fs 模块
const fs = require("fs");



// 回调函数形式
fs.readFile("../resource/cotent.txt", (err,data) => {
    // 如果出错则抛出错误
    if (err) {
        throw err;
    }

    console.log(data.toString())
})


// promise形式

let p = new Promise((resolve, reject) => {
    fs.readFile("../resource/content.txt", (err, data) => {
        if (err) {
            //如果出错 调用出错时的回调函数
            reject(err);
        } else {
            resolve(data);
        }
    })
})

p.then((value) => {
    console.log(value.toString())
}, (reason) => {
    console.log("出错了"+err)
  
})