// 使用lokijs 的API模拟数据库的使用
// lokijs可以实例化
// db 配置，初始化，连接及数据查询
// db 句柄  代表着数据库 数据库名（一个项目一个库）-> collections(table数据表的别称) -> rows(数据记录) -> columns(列名)
// sql查询，是典型的异步操作，用promise封装  为什么是异步：连接数据库、查询、返回结果以及路上过程中都需要时间

import Loki from 'lokijs';

export const db = new Loki('notes', {
    autoload: true,
    autoloadCallback: databaseInitialize,
    autosave: true,
    autosaveInterval: 3000,
    persistenceMethod: 'localStorage'
})

function databaseInitialize(){       // 初始化一个数据库   相当于建表
    const notes = db.getCollection(notes);      // getCollection数据表集合
    if(notes === null){     // 如果没有notes这个表 就新建一个
        db.addCollection('notes');
    }
}

export function loadCollection(collection){     // 加载数据表
    return new Promise(resolve => {       // 数据库的增删改查操作都是异步的
        db.loadDatabase({}, () => {
            const _collection = db.getCollection(collection) || db.addCollection(collection);    // getCollection()  lokijs的一个API  查询数据表
            resolve(_collection);
        })
    })
}