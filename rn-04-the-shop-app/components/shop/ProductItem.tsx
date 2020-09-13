import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import {color} from 'react-native-reanimated';
import Colors from '../../constants/Colors';

const ProductItem = (props: any) => {
  return (
    <View style={styles.product}>
      <Image style={styles.image} source={{uri: props.image}} />
      <View style={styles.detail}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>{props.price.toFixed(2)} R$</Text>
      </View>
      <View style={styles.actions}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={props.onViewDetail}>
            <Text style={styles.textButton}>Mais Detalhes</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={props.onAddToCart}>
            <Text style={styles.textButton}>Carrinho</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 8, //FOR ANDROID
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 15,
    overflow: 'hidden',
  },
  buttonContainer: {
    width: '45%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: Colors.title,
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: '60%',
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.title,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 20,
  },
  price: {fontSize: 14, color: '#888'},
  detail: {
    alignItems: 'center',
    height: '15%',
    padding: 10,
  },
});
