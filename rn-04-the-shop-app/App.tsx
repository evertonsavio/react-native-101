import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import productsReducer from './store/reducers/products';
import StackApp from './navigation/StackNavigation';

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackApp />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
