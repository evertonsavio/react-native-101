import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//TIP: Cada view por default usa FlexBox. So precisa adicionar alignItems e justifycontent.
const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create ({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: '#f7287b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'black',
    height: 40,
  },
});

export default Header;
