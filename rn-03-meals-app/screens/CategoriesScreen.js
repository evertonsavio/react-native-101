import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';

const renderGridItem = (itemData) => {
  return (
    <View style={styles.gridItem}>
      <Text>{itemData.item.title}</Text>
    </View>
  );
};

const CategoriesScreen = (props) => {
  //console.log(props); ({navigation}) ao inves de (props)
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
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    alignItems: 'center',
  },
});
