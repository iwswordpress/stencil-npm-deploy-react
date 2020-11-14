import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { defineCustomElements } from 'iwswordpress-test/loader';
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

defineCustomElements(window);
