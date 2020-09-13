import React from 'react';
import {StyleSheet, Text, Image, Button, ScrollView, View} from 'react-native';
import {useSelector} from 'react-redux';

const ProductDetailScreen = (props) => {
  const {productId, productTitle} = props.route.params;
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );

  props.navigation.setOptions({title: productTitle});

  return (
    <View>
      <Text>{selectedProduct.title}</Text>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({});
