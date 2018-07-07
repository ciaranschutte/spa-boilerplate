import React from 'react';

import './Main.scss';

const Main = ({ children }) => (
  <div className='Main'>
    <h1>Main</h1>
    { children }
  </div>
)

export default Main;