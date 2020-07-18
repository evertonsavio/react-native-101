import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const CategoryMealsScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>Hello from Meals Screen</Text>
      <View style={styles.button}>
        <Button
          title="Details"
          onPress={() => navigation.navigate('Details')}
        ></Button>
      </View>
      <View style={styles.button}>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '90%',
    marginVertical: 5,
  },
});
