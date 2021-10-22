# josn-server的简单搭建

1. 全局安装json-server 
``` 
 npm install -g json-server
 ```

 2. 创建db.json,并在db.json中书写访问时需要的数据
 ```js
 示例:
 {
    "posts": [
        {
            "id": 1,
            "title": "json-server",
            "author": "typicode"
        }
    ],
    "comments": [
        {
            "id": 1,
            "body": "some comment",
            "postId": 1
        }
    ],
    "profile": {
        "name": "typicode"
    }
}
```

3. 在db.json文件所在文件夹下启动服务，否则会找不到db.json文件
```
json-server --watch db.json
```

4. 设置json-server的延时响应
```
json-server --watch db.json -d + 时间

示例
json-server --watch db.json -d 2000
```