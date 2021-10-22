### 服务器
- url
- 本地地址
127.0.0.1 
192.168.96.2 （局域）

例如： 接口地址
http://192.168.96.2:8001/users/signIn


### 端口
- port
8001

### 数据地址
1. 注册 
+ 地址
http://192.168.96.2:8001/users/createAccount
/users/createAccount
+ 方式
post
+ 参数
```
name
account
password

账号 10086
密码 123123


```
2. 登录
+ 地址
/users/signIn
+ 方式 
post
+ 参数
```
name
account
password
vcode
```

3. 验证码
+ 地址
/vcode
+ 方式 
get
+ 参数(无)


4. 图片列表
+ 地址
http://192.168.96.2:8001/today/test
/today/test
+ 方式 
get
+ 参数(无)

5. 指定ID图片信息（课堂练习）
+ 地址
http://192.168.96.2:8001/today/showInfo
/today/showInfo
+ 方式 
get
+ 参数
id

### 数据状态码
- 4001  信息输入错误
- 4002  该数据不存在
- 4003  验证码错误
- 5001  数据库查询数据出错
- 5002  数据库插入数据出错
- 5003  数据库删除数据出错
- 2000  数据正常访问
- 2001  用户已经存在
- 2002  用户未登录


