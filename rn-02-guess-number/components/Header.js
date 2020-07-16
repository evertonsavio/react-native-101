import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';

import Colors from '../constants/colors';
import TitleText from './TitleText';

const Header = (props) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <TitleText>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: Platform.OS === 'android' ? '#ccc' : 'transparent',
  },
  headerIOS: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: Platform.OS === 'android' ? '#ccc' : 'transparent',
  },
  headerAndroid: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: Platform.OS === 'android' ? '#ccc' : 'transparent',
  },
});

export default Header;
