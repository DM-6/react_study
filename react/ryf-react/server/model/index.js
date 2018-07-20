//  负责数据库连接  

const Sequelize = require('sequelize');   // 引入sequelize
// 数据库  语言：sql 
// koa 熟悉的语言：数据json obj 
const sequelize = new Sequelize('antd', 'root', '123456', {   // 实例化  请来数据库小助手     数据库名 数据库账户  数据库密码
    host: 'localhost',     // 连接数据库的位置（本地）
    dialect: 'mysql',
    operatorsAliases: true,
    pool: {         // 连接池
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: false
    }
}) 

sequelize
    .authenticate()
    .then(() => {    // 连接成功
        console.log('Connection has been established successfully.');
    })
    .catch(err => {     // 连接失败
        console.error('Unable to connect to the database:', err);
    })

module.exports = sequelize