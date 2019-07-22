import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Navigator from './Navigator';
import Onboarding from './pages/Onboarding';
import store from './redux/store'; // Import the store

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
