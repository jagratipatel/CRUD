import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './component/home';
import './App.css';
import Writepost from './component/writepost';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="App">
            <Route exact path='/' component={Home}/>
            <Route exact path='/writepost' component={Writepost}/>
        </div>
      </BrowserRouter>
    );
  }
} 

export default App;