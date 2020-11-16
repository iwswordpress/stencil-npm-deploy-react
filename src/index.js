import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import web components
import { defineCustomElements } from 'iwswordpress-web/loader';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

//hook up custom elements to app
defineCustomElements(window);
