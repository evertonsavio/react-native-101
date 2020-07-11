import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const GameOver = props => {
  return (
    <View style={styles.screen}>
      <Text>Game Over Screen</Text>
      <Text>Number of Rounds: {props.roundsNumber}</Text>
      <Text>Number was {props.userNumber}</Text>
      <Button title="New Game" onPress={props.onRestart} />
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
