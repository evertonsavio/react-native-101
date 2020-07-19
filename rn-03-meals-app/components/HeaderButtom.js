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
      iconSize={30}
      color={Platform.OS === 'android' ? 'whitesmoke' : Colors.primaryColor}
    />
  );
};

export default CustomHeaderButtom;
