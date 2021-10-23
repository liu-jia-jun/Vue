module.exports = {
    pages:{
        index:{
            entry:"src/main.js"
        }
    },
    lintOnSave:false,//关闭语法检查
    // 代理
    devServer:{
        proxy:"http://localhost:5000"
    }
}