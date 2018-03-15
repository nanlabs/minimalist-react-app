import React from 'react';
import CustomComponent from './CustomComponent';

import logo from '../assets/logo.svg';

const App = () => (
  <div>
    <h1>Minimalist React Webapp</h1>
    <img width="50px" height="50px" src={logo} />
    <CustomComponent />
  </div>
);

export default App;
