import React from 'react';
import {Provider} from 'react-redux';

import store from './src/store';
import Navigator from './src/routes';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}
