import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Tab = createBottomTabNavigator();

const CategoriesScreenNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeNav" component={CategoriesScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
};

export default CategoriesScreenNavigation;
