import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const names = ['Alice', 'Emily', '曾凯大帝'];
    return (
      <ul>
        {
          names.map((name, index) => {
            return(
              <div key={index}>Hello,{name}</div>
            )
          })  
        }    
      </ul>
    );
  }
}

export default App;
