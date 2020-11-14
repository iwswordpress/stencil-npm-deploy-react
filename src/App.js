import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <my-component
            style={{ color: 'red' }}
            first='Craig'
            last='West'
          ></my-component>
          <app-home
            style={{ color: 'green' }}
            app='UsefulServices.co.uk'
          ></app-home>
          <img src={logo} className='App-logo' alt='logo' />
        </header>
      </div>
    );
  }
}

export default App;