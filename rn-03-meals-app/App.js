import React, {useState} from 'react';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMealsScreen from './screens/CategoryMealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import DefaultOptions from './constans/DefaultOptions';

//////////////////////////////FONTS ASYNC LOAD//////////////////////////////
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};
////////////////////////////////APP////////////////////////////////////////
enableScreens();
const Stack = createStackNavigator();

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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={CategoriesScreen}
          options={{...DefaultOptions, ...{title: 'Meus Bolinhos e Tortas <3'}}}
        />
        <Stack.Screen
          name="Meals"
          component={CategoryMealsScreen}
          options={DefaultOptions}
        />
        <Stack.Screen
          name="Details"
          component={MealDetailScreen}
          options={DefaultOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
