import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Platform,
  TouchableNativeFeedback,
  ImageBackground,
} from 'react-native';

const CategoryGrid = (props) => {
  let TouchableComponent = TouchableHighlight;
  /* if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  } */
  return (
    <View style={styles.gridItem}>
      <TouchableComponent activeOpacity={0.6} onPress={props.onSelect}>
        <ImageBackground
          source={require('../assets/cake.jpg')}
          style={styles.image}
          resizeMode="cover"
          fadeDuration={300}
        >
          <View style={styles.textContainer}>
            <Text style={styles.text} numberOfLines={2}>
              {props.title}
            </Text>
          </View>
        </ImageBackground>
      </TouchableComponent>
    </View>
  );
};

export default CategoryGrid;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 5,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 30, // FOR ANDROID WORKS
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 5,
    overflow: 'hidden',
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: '100%',
  },
  text: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'right',
    color: 'white',
  },
});
