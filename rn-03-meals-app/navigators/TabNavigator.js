import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {HomeStackScreen, FavoritesStackScreen} from './StackNavigator';
import {MaterialCommunityIcons} from '@expo/vector-icons';
//import Ionicons from 'react-native-vector-icons/Ionicons';
//const Tab = createBottomTabNavigator();

const TabMaterial = createMaterialBottomTabNavigator();

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

export default TabScreen;

// IOS NAVIGATOR

{
  /* <Tab.Navigator
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
          <Tab.Screen name="Home" component={TabScreen} />
          <Tab.Screen name="Favorites" component={filterStackScreen} />
        </Tab.Navigator> */
}
