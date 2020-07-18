import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

import {CATEGORIES, MEALS} from '../data/dummy-data';

const CategoryMealsScreen = ({route, navigation}) => {
  const catId = route.params.category;

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  navigation.setOptions({title: selectedCategory.title});

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  const renderMealItem = (itemData) => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    );
  };

  //console.log(selectedCategory);
  return (
    <View style={styles.screen}>
      <FlatList
        /* keyExtractor={(item, index)=>item.id} */

        data={displayMeals}
        renderItem={renderMealItem}
      />
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
