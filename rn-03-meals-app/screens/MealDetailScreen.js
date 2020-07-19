import React from 'react';
import {StyleSheet, Image, Text, View, Button, ScrollView} from 'react-native';
import {MEALS} from '../data/dummy-data';

const ListItem = (props) => {
  return (
    <View style={styles.ListItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetailScreen = ({route, navigation}) => {
  const {mealId} = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  navigation.setOptions({title: selectedMeal.title});

  return (
    <ScrollView>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <View style={styles.details}>
        <Text>{selectedMeal.duration}m</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((item) => (
        <ListItem key={item}>{item}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}

      <Button title="Go back" onPress={() => navigation.popToTop()} />
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {width: '100%', height: 300},
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
  },
  ListItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    padding: 10,
    borderWidth: 1,
  },
});
