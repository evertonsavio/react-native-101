import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CategoriesScreen = (props) => {
  //console.log(props); ({navigation}) ao inves de (props)
  return (
    <View style={styles.screen}>
      <Text>CategoriesScreen</Text>
      <Button
        title="Go to Details"
        onPress={() => props.navigation.push('Meals')}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
