import React from 'react';
import {Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {HeaderButton} from 'react-navigation-header-buttons';
//https://reactnavigation.org/docs/header-buttons/

import Colors from '../constans/Colors';

const CustomHeaderButtom = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
    />
  );
};

export default CustomHeaderButtom;
