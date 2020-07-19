import React from 'react';

import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = ({route, navigation}) => {
  const catId = route.params.category;

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  navigation.setOptions({title: selectedCategory.title});

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  //console.log(selectedCategory);
  return <MealList listData={displayMeals} navigation={navigation} />;
};

export default CategoryMealsScreen;
