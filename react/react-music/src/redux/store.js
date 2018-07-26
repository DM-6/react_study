// 1 store 单一状态树
// 单一数据源
// 整个应用的 state 都被储存在一棵树中，并且这棵状态树只存在于唯一一个 store 中。
// Store 用来存放整个应用的 state，并将 action 和 reducer 联系起来。它主要有以下几个职能：
// 存储整个应用的 state
// 提供 getState() 方法获取 state
// 提供 dispatch(action) 方法更新 state
// 提供 subscribe(listener) 来注册、取消监听器

import { createStore } from 'redux';
import reducer from './reducers';      // reducere 一个或多个函数

const store = createStore(reducer);
export default store;
