import React, {useEffect, useCallback} from 'react';
import {StyleSheet, Image, Text, View, Button, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {toggleFavorite} from '../store/actions/mealsAction';
import DefaultOptions from '../constans/DefaultOptions';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButtom';

const ListItem = (props) => {
  return (
    <View style={styles.ListItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetailScreen = ({route, navigation}) => {
  const MEALS = useSelector((state) => state.meals.meals);
  const {mealId} = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  navigation.setOptions({title: selectedMeal.title});

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    navigation.setOptions({
      ...DefaultOptions,
      ...{
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Favorites"
              iconName="ios-star"
              onPress={toggleFavoriteHandler}
            />
          </HeaderButtons>
        ),
      },
    });
  }, [selectedMeal]);

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
