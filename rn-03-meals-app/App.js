import React, {useState} from 'react';
import {Text, View} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMealsScreen from './screens/CategoryMealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createStackNavigator();

//////////////////////////////FONTS ASYNC LOAD//////////////////////////////
const fetchFonts = () => {
  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};
///////////////////////////END OF FONTS ASYNC LOAD///////////////////////////

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  ///////////////////Fetch FONTS//////////////
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={CategoriesScreen}
          options={{title: 'Meals'}}
        />
        <Stack.Screen name="Meals" component={CategoryMealsScreen} />
        <Stack.Screen name="Details" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
