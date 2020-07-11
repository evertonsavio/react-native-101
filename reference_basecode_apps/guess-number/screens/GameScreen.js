import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil (min);
  max = Math.floor (max);
  const rndnumber = Math.floor (Math.random () + (max - min)) + min;
  if (rndnumber === exclude) {
    return generateRandomBetween (min, max, exclude); //Recursion
  } else {
    return rndnumber;
  }
};

const GameScreen = props => {
  const [currentGuess, setcurrentGuess] = useState (
    generateRandomBetween (1, 100, props.userChoise)
  );
  return (
    <View style={styles.screen}>
      <Text>Opponent`s Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="Lower" onPress={() => {}} />
        <Button title="Greater" onPress={() => {}} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create ({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
});

export default GameScreen;
