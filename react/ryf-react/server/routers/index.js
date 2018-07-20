const router = require('koa-router')();         // 引用 koa-router
const koaBody = require('koa-body');    // 引用 koa-body   是一个中间件  
const User = require('../model/user');    // 引用用户模块--提供用户有关的数据管理

router.get('/', async(ctx) => {        // 得到路由对象，配置路由数组   路由由路由对象提供，由路由中间件提供服务
    ctx.body = '首页';
});

router.get('/users', async(ctx) => {      //  get get访问
    const user = await User.findAll({    // 查找所有
        where: {       // 查询条件
            isdelete: 0      // 没有被删除的
        }
    })
    ctx.body = user;
});

router.post('/user', koaBody(), async(ctx) => {      //  post访问
    // 后端要拿到前端传来的数据
    // console.log(ctx.request.body);
    const user = await User.build(ctx.request.body).save();    // 异步的  时间花在连接数据库上（通信过程） 
    ctx.body = user;
});

module.exports = router;     
