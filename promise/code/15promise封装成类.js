
class Promise {
    // 构造方法
    constructor(executor) {

        // 给自定义的promise 添加属性
        this.PromiseState = "pending"
        this.PromiseResult = null
        this.callbacks = []
        // 保存实例对象的this 的值，
        // 确保在promise 内定义的函数的this 指向的是Promise而不是Window
        const self = this

        // 定义resolve 函数
        function resolve(data) {

            // 在执行该函数之前需要判断promise 的状态是否更改过
            // 因为需要设置promise 的状态只能修改一次

            if (self.PromiseState !== "pending") return

            // 1.修改对象的状态(即promiseState 的值)
            self.PromiseState = "resolved"
            // 2.设置对象的结果值(即promiseResult的值)
            self.PromiseResult = data


            // 3.在then 方法执行时调用成功的回调函数
            setTimeout(() => {
                self.callbacks.forEach(item => { item.onResolved() })
            });

        }
        // 定义reject 函数
        function reject(data) {

            // 在执行该函数之前需要判断promise 的状态是否更改过
            // 因为需要设置promise 的状态只能修改一次

            if (self.PromiseState !== "pending") return

            // 1.修改对象的状态(即promiseState 的值)
            self.PromiseState = "reject"
            // 2.设置对象的结果值(即promiseResult的值)
            self.PromiseResult = data

            // 3.在then 方法执行时调用成功的回调函数

            setTimeout(() => {
                self.callbacks.forEach(item => { item.onReject() })
            });

        }

        try {
            // 同步调用[执行器函数]
            executor(resolve, reject)
        } catch (e) {
            // 修改promise 对象为失败
            reject(e)
        }


        // 3.在then 方法执行时调用成功的回调函数
        self.callbacks.forEach(item => { item.onReject() })

    }

    // then 方法
    then(onResolved, onReject) {

        const self = this

        // 判断回调函数参数
        if (typeof onReject !== 'function') {
            onReject = reason => {
                throw reason
            }
        }

        if (typeof onResolved !== 'function') {
            onResolved = value => value
        }

        // 因为promise.then() 方法返回的是一个新的promise 对象
        return new Promise((resolve, reject) => {

            function callback(type) {
                try {
                    // 判断在回调函数中返回的是什么类型的值
                    let result = type(self.PromiseResult)
                    // 如果是promise 需要根据该对象的成功还是失败来决定新的对象的状态和值
                    if (result instanceof Promise) {
                        result.then(v => {
                            resolve(v)
                        }, r => {
                            reject(r)
                        })
                    } else {
                        // 如果不是promise 对象那么就默认为成功,将result 作为新对象的值
                        resolve(result)
                    }
                } catch (error) {
                    reject(error)
                }

            }

            if (this.PromiseState === "resolved") {

                setTimeout(() => {
                    callback(onResolved)
                });

            }
            if (this.PromiseState === "reject") {
                setTimeout(() => {
                    callback(onReject)
                });

            }



            // 考虑到promise支持链式编程
            // 并且在异步任务时需要在promise 对象状态改变之后才会调用回调函数
            // 解决方法: 把promise.then() 中的回调方法放在一个数组中

            if (this.PromiseState === "pending") {
                this.callbacks.push({
                    onResolved: function () {
                        callback(onResolved)
                    },
                    onReject: function () {

                        callback(onReject)
                    }

                })
            }
        })
    }

    // catch 方法
    catch(onRejectd) {
        return this.then(undefined, onRejectd)
    }

    // resolve 方法  
    static resolve(value) {
        return new Promise((resolve, reject) => {
            if (value instanceof Promise) {
                value.then(v => {
                    resolve(v)

                }, r => { reject(r) })
            } else {
                resolve(value)
            }
        })
    }


    // all 方法
    static all(promises) {
        //返回结果为promise对象
        return new Promise((resolve, reject) => {
            //声明变量
            let count = 0;
            let arr = [];
            //遍历
            for (let i = 0; i < promises.length; i++) {
                //
                promises[i].then(v => {
                    //得知对象的状态是成功
                    //每个promise对象 都成功
                    count++;
                    //将当前promise对象成功的结果 存入到数组中
                    arr[i] = v;
                    //判断
                    if (count === promises.length) {
                        //修改状态
                        resolve(arr);
                    }
                }, r => {
                    reject(r);
                });
            }
        });
    }
    // race 方法
    static race(promises) {
        return new Promise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(v => {
                    //修改返回对象的状态为 『成功』
                    resolve(v);
                }, r => {
                    //修改返回对象的状态为 『失败』
                    reject(r);
                })
            }
        });
    }
}

