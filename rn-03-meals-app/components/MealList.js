import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import MealItem from './MealItem';

const MealList = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate('Details', {mealId: itemData.item.id});
        }}
      ></MealItem>
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        /* keyExtractor={(item, index)=>item.id} */
        style={{width: '95%'}}
        data={props.listData}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
