import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';
import CategoryGrid from '../components/CategoryGrid';

const CategoriesScreen = (props) => {
  //console.log(props); ({navigation}) ao inves de (props)
  const renderGridItem = (itemData) => {
    //console.log(itemData.item);
    return (
      <CategoryGrid
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate('Meals', {category: itemData.item.id});
        }}
      ></CategoryGrid>
    );
  };
  return (
    <FlatList
      /* keyExtractor={(item, index)=> item.id} OLD VERSION JS*/
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
