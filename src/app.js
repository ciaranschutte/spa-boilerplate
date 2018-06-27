import React from 'react';
import ReactDOM from 'react-dom';
import Root from './pages/root.js';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <Root/>
  </Provider>
);

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

module.hot.accept();