import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

const title = 'home changed page';
const App = () => (
  <div>{title}</div>
);

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('app')
);

module.hot.accept();