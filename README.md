#####一个shop商城 
>* 运行:  ```npm run serve     ```

#####使用的包
+ vant , vue, vuex , vue-router, axios
+ rap2(在线mock数据),
+ postcss-px-to-viewport  

#####包含模块
+ 商品列表展示
+ 商品详情展示
  + 商品详情
  + 购物车模块
  + 评论模块
  + 店铺模块
+ 订单管理
    + 购物车列表模块
	+ 支付模块
+ 用户模块
 + 用户登录
 + 个人信息管理
 
#####程序构成
+ /public  - 封装本地请求的json文件
+ /src -vue项目文件
 + /api  -vue文件中请求数据接口
 + /assets -公共css 资源
 + /components -业务组件和公共组件
 + /router -路由
 + /store -包含product, user, shop module
 + /utils  -封装的axios, 请求地址，cookies
 + /views 页面布局组件和业务组件
 + /App
 + /main.js -入口文件
+ jsconfig.json  -vscode 方便显示文件路径
+ vue.config.js - webpack 打包配置项


           
