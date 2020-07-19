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
import FiltersScreen from './screens/FiltersScreen';

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
const FavoritesStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const TabMaterial = createMaterialBottomTabNavigator();
const FiltersStack = createStackNavigator();
///////////////////////////////////////////////////////////////////////////
const TabScreen = () => {
  return (
    <TabMaterial.Navigator
      activeColor="#e91e63"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: 'white'}}
      shifting={true}
    >
      <TabMaterial.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarColor: 'lightgrey',
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <TabMaterial.Screen
        name="Favorites"
        component={FavoritesStackScreen}
        options={{
          tabBarColor: 'whitesmoke',
          tabBarLabel: 'Favorites',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="star" color={color} size={26} />
          ),
        }}
      />
    </TabMaterial.Navigator>
  );
};

const FavoritesStackScreen = (props) => (
  <FavoritesStack.Navigator initialRouteName="Favorites">
    <FavoritesStack.Screen
      name="Home"
      component={CategoriesScreen}
      options={{
        ...DefaultOptions,
        ...{title: 'Tartes et Gâteaux'},
      }}
    />
    <FavoritesStack.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{
        ...DefaultOptions,
        ...{
          title: 'Tartes et Gâteaux',
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Favorites"
                iconName="ios-menu"
                onPress={() => {
                  props.navigation.toggleDrawer();
                }}
              />
              {/*{' '}
            <Item
              title="Favorite2"
              iconName="ios-star-outline"
              onPress={() => {
                console.log('Mark as favorite');
              }}
            />{' '}
            */}
            </HeaderButtons>
          ),
        },
      }}
    />
  </FavoritesStack.Navigator>
);

const HomeStackScreen = (props) => (
  <HomeStack.Navigator initialRouteName="Home">
    <HomeStack.Screen
      name="Home"
      component={CategoriesScreen}
      options={{
        ...DefaultOptions,
        ...{
          title: 'iCake',
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Favorites"
                iconName="ios-menu"
                onPress={() => {
                  props.navigation.toggleDrawer();
                }}
              />
              {/*{' '}
              <Item
                title="Favorite2"
                iconName="ios-star-outline"
                onPress={() => {
                  console.log('Mark as favorite');
                }}
              />{' '}
              */}
            </HeaderButtons>
          ),
        },
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
                title="Favorites"
                iconName="ios-star"
                onPress={() => {
                  console.log('Mark as favorite');
                }}
              />
              {/*{' '}
              <Item
                title="Favorite2"
                iconName="ios-star-outline"
                onPress={() => {
                  console.log('Mark as favorite');
                }}
              />{' '}
              */}
            </HeaderButtons>
          ),
        },
      }}
    />
  </HomeStack.Navigator>
);

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
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={TabScreen} />
          <Drawer.Screen name="Filter" component={FiltersScreen} />
        </Drawer.Navigator>
        {/* <Tab.Navigator
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
        </Tab.Navigator> */}
      </NavigationContainer>
    </>
  );
}
