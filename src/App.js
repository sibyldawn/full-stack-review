import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import routes from './routes';



class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Header/>
        <Navigation/>
        {routes()}


      </div>
    );
  }
}

export default App;
