// 单点入口文件 
// koa实例化  端口启动后端

const Koa = require('koa');   // 引入koa
const cors = require('koa-cors');   // koa-cors 解决跨域问题  允许跨域访问的中间件
const app = new Koa();
const router = require('./routers/index');    // 路由引入

// 组件， 中间件 middleware
// const main = ctx => {     // 响应函数    ctx: 响应式 上下文环境
//     ctx.response.body = 'Hello World!';     // ctx.response给用户返回相应的信息
// }

// app.use(main);    // 交给koa使用
app.use(cors({    // 启用cors  配置cors
    origin: 'http://localhost:3000',   // 允许的端口
    exposeHeaders: ['WWW-Autherticate', 'Server-Authenticate'],    //允许访问授权
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET','POST'],   // 允许访问方法
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']   // 允许访问的http头部
}));  
app.use(router.routes());    // 路由的挂载  

app.listen(3006);    // 运行起来   监听某个端口 把应用启动起来
console.log('app started at port  3006...');
