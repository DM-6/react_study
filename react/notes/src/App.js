import React, { Component } from 'react';           // ,{} 解构
import Notes from './components/Notes';
import 'semantic-ui-css/semantic.min.css'
import './App.css';    // style

// vue .vue文件： template js style
// react .js文件： 负责输出组件类， 继承的概念 template=jsx语法->render
class App extends Component {
  render() {     // render()方法  必需
    return (
      <Notes/>
    );
  }
}

export default App;
