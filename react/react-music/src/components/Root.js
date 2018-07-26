import React, { Component } from 'react';
import { Provider } from 'react-redux';    // 提供单一状态树
import store from '../redux/store';
import App from './App';    // 将store提供给APP用

class Root extends Component{
    render(){
        return(
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}

export default Root;