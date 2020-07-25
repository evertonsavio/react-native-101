import React from 'react';
import {useSelector} from 'react-redux';

import {CATEGORIES} from '../data/dummy-data';
import MealList from '../components/MealList';
import {View, Text, StyleSheet} from 'react-native';

const CategoryMealsScreen = ({route, navigation}) => {
  const catId = route.params.category;

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  navigation.setOptions({title: selectedCategory.title});

  /////////////////////////////////////////////////////////////////////////

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayMeals.length === 0 || !displayMeals) {
    return (
      <View style={styles.content}>
        <Text>Não ha refeições com os filtros selecionados!</Text>
      </View>
    );
  }

  return <MealList listData={displayMeals} navigation={navigation} />;
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
