import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';


import store from './store';

ReactDOM.render(
  <HashRouter>
    <Provider store={ store }>
      <App />
    </Provider>
  </HashRouter>, document.getElementById('root')
);
serviceWorker.unregister();