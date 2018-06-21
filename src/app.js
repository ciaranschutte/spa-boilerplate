import React from 'react';
import ReactDOM from 'react-dom';
import Root from './pages/root.js';

const App = () => (
  <Root/>
);

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

module.hot.accept();