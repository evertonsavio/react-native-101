import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';

const CategoryMealsScreen = ({route, navigation}) => {
  const catId = route.params.category;

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  navigation.setOptions({title: selectedCategory.title});

  //console.log(selectedCategory);
  return (
    <View style={styles.screen}>
      <Text>{selectedCategory.title}</Text>
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
