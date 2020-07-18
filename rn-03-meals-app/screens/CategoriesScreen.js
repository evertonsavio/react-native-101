import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';

const CategoriesScreen = (props) => {
  //console.log(props); ({navigation}) ao inves de (props)
  const renderGridItem = (itemData) => {
    //console.log(itemData.item);
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() =>
          props.navigation.navigate('Meals', {category: itemData.item.id})
        }
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
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
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    alignItems: 'center',
  },
});
