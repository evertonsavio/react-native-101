import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import {BlurView} from 'expo-blur';
import color from '../constants/Colors';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';

const Stack = createStackNavigator();

const StackApp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: 'Produtos',
          headerTransparent: false,
          headerStyle: {
            backgroundColor: color.background,
          },
          headerTintColor: color.title,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          /* headerBackground: () => (
            <BlurView
              tint="light"
              intensity={100}
              style={StyleSheet.absoluteFill}
            />
          ), */
        }}
        name="Home"
        component={ProductsOverviewScreen}
      />
      <Stack.Screen name="Detail" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};

export default StackApp;
