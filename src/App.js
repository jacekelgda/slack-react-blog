import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Conversation from './components/Conversation'
import Option from './components/Option'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Conversation options={[<Option text="Yes" />, <Option text="No" />]} />
      </div>
    );
  }
}

export default App;
