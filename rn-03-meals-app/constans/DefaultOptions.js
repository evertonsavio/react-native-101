import React from 'react';
import {Image} from 'react-native';

const DefaultOptions = {
  headerBackground: () => (
    <Image
      style={{width: '100%', height: '100%'}}
      source={require('../assets/brigadeiro.jpg')}
    />
  ),
  /* headerStyle: {
    backgroundColor: Platform.OS === 'android' ? 'purple' : 'ff6f00',
  }, */
  headerTintColor: 'whitesmoke',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 26,
  },
};

export default DefaultOptions;
