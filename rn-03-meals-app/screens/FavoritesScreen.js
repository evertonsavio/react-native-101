import React from 'react';
import MealList from '../components/MealList';
import {useSelector} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';

const FavoritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  console.log(favMeals);

  if (favMeals == 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <Text>Não há favoritos ainda =(</Text>
      </View>
    );
  }

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
