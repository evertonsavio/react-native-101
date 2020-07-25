import React, {useState} from 'react';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {enableScreens} from 'react-native-screens';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import TabScreen from './navigators/TabNavigator';
import {filterStackScreen} from './navigators/StackNavigator';

import {createStore, combineReducers} from 'redux';
import mealsReducers from './store/reducers/meals';
import {Provider} from 'react-redux';

enableScreens();

////////////////////////////////REDUX////////////////////////////////////////
const rootReducer = combineReducers({
  meals: mealsReducers,
});

const store = createStore(rootReducer);

//////////////////////////////FONTS ASYNC LOAD//////////////////////////////
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

////////////////////////////////APP////////////////////////////////////////

const Drawer = createDrawerNavigator();

///////////////////////////////////////////////////////////////////////////////

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={TabScreen} />
          <Drawer.Screen name="Filter" component={filterStackScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
