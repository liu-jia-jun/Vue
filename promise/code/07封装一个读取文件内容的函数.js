/**
 * 封装一个函数 mineReadFile 读取文件内容
 * 参数： path 文件路径
 * 返回一个： promise 对象
 */


function mineReadFile(path) {
    return new Promise((resolve, reject) => {
        // 读取文件
        require("fs").readFile(path, (err, data) => {
            if (err) {// 失败回调
                reject(err)
            } else {// 成功回调
                resolve(data)
            }
        })
    })
}
// mineReadFile 返回 promise 对象
mineReadFile("../resource/content.txt").then((value) => {
    console.log(value.toString())
}, reason => {
    console.log(reason)
})