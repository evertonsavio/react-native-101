import React, {useState} from 'react';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMealsScreen from './screens/CategoryMealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import DefaultOptions from './constans/DefaultOptions';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from './components/HeaderButtom';
import FavoritesScreen from './screens/FavoritesScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {MaterialCommunityIcons} from '@expo/vector-icons';

//////////////////////////////FONTS ASYNC LOAD//////////////////////////////
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

////////////////////////////////APP////////////////////////////////////////
enableScreens();
const HomeStack = createStackNavigator();
const MealsStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const TabMaterial = createMaterialBottomTabNavigator();
///////////////////////////////////////////////////////////////////////////
const HomeStackScreen = () => (
  <HomeStack.Navigator initialRouteName="Home">
    <HomeStack.Screen
      name="Home"
      component={CategoriesScreen}
      options={{
        ...DefaultOptions,
        ...{title: 'Meus Bolinhos e Tortas <3'},
      }}
    />
    <MealsStack.Screen
      name="Meals"
      component={CategoryMealsScreen}
      options={DefaultOptions}
    />
    <DetailsStack.Screen
      name="Details"
      component={MealDetailScreen}
      options={{
        ...DefaultOptions,
        ...{
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Favorite"
                iconName="ios-star"
                onPress={() => {
                  console.log('Mark as favorite');
                }}
              />
              <Item
                title="Favorite2"
                iconName="ios-star-outline"
                onPress={() => {
                  console.log('Mark as favorite');
                }}
              />
            </HeaderButtons>
          ),
        },
      }}
    />
  </HomeStack.Navigator>
);

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 255, 255)',
  },
};

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
    <>
      <NavigationContainer theme={myTheme}>
        {/*<TabMaterial.Navigator
          activeColor="#e91e63"
          style={{backgroundColor: 'tomato'}}
        >
          <TabMaterial.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <TabMaterial.Screen
            name="Favorites"
            component={FavoritesScreen}
            options={{
              tabBarLabel: 'Favorites',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="bell" color={color} size={26} />
              ),
            }}
          />
        </TabMaterial.Navigator> */}
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-restaurant'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Favorites') {
                iconName = focused ? 'ios-star' : 'ios-star-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Favorites" component={FavoritesScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
