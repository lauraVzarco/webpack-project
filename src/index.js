import React from 'react-dom';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App.jsx';

ReactDOM.render(
  <App/>, document.getElementById('root')
);
serviceWorker.unregister();