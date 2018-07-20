// model模块  负责数据管理  
// user.js   将数据表om化  

const Sequelize = require('sequelize');
const sequelize = require('./index');      // 引入

// 数据表跟对象的映射
const User = sequelize.define('user', {     // 数据模型
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, unique: true },
    username: { type: Sequelize.STRING },
    age: { type: Sequelize.INTEGER },
    address: { type: Sequelize.STRING },
    isdelete: { type: Sequelize.INTEGER, allowNull: true }
})

module.exports = User;