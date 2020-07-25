import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const HomeStack = createStackNavigator();
const MealsStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const FavoritesStack = createStackNavigator();
const FiltersStack = createStackNavigator();

import DefaultOptions from '../constans/DefaultOptions';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButtom';

export const HomeStackScreen = (props) => (
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
            </HeaderButtons>
          ),
        },
      }}
    />
  </HomeStack.Navigator>
);

export const FavoritesStackScreen = (props) => (
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
            </HeaderButtons>
          ),
        },
      }}
    />
  </FavoritesStack.Navigator>
);

export const filterStackScreen = (props) => {
  return (
    <FiltersStack.Navigator>
      <FiltersStack.Screen
        name="Filtros"
        component={FiltersScreen}
        options={{
          ...DefaultOptions,
          ...{
            title: 'Filtros',
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Filtros"
                  iconName="ios-menu"
                  onPress={() => {
                    props.navigation.toggleDrawer();
                  }}
                />
              </HeaderButtons>
            ),
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Favorites"
                  iconName="ios-save"
                  onPress={() => {
                    console.log('Save');
                  }}
                />
              </HeaderButtons>
            ),
          },
        }}
      />
    </FiltersStack.Navigator>
  );
};
