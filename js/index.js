require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';

import Registration from './components/registration';
document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(
      <Registration title="Registration Form" />, document.getElementById('app'))
);
