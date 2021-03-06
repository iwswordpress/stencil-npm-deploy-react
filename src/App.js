import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='container'>
          <div className='info'>
            <h3>Project: Web Components from NPM in React</h3>
            <p>
              This is a React project that uses 4 Web Components that are
              imported from an NPM package.
            </p>
            <p>If you know stock symbol, use in stock price finder.</p>
            <p>
              If you want to find stock price for a company, use lower box,
              enter company name and a list of options will be given. Select
              symbol and this will populate and fire top component.
            </p>
          </div>
          <div>
            <my-component
              style={{ color: 'red', marginBottom: '20px' }}
              first='Component 1:'
              last='Craig West'
            ></my-component>
            <app-home
              style={{ color: 'green' }}
              app='Component 2 : UsefulServices.co.uk'
            ></app-home>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <div className='component'>
                <uc-stock-price stock-symbol='ORCL'></uc-stock-price>
              </div>
              <div className='component' v>
                <uc-stock-finder></uc-stock-finder>
              </div>
            </div>
            <iws-test
              app=' - Component 4'
              style={{ color: 'purple' }}
            ></iws-test>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
