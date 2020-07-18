import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {MEALS} from '../data/dummy-data';

const MealDetailScreen = ({route, navigation}) => {
  const {mealId} = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  navigation.setOptions({title: selectedMeal.title});

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button title="Go back" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
