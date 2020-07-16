import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ObjetivosItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.list}>
        <Text>{props.title.item.valorDoTexto}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default ObjetivosItem;
