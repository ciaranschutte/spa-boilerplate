import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import routes from '../routes.js';

export default class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        { routes }
      </BrowserRouter>
    )
  }
}