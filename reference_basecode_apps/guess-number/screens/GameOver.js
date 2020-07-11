import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GameOver = () => {
  return (
    <View style={styles.screen}>
      <Text>Game Over Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create ({
  screen: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default GameOver;
