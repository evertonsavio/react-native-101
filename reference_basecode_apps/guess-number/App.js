import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App () {
  const [useNumber, setUseNumber] = useState ();

  const startGameHandler = selectedNumber => {
    setUseNumber (selectedNumber);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (useNumber) {
    content = <GameScreen userChoice={useNumber} />;
  }

  return (
    <View style={styles.screen}>
      <Header title={'Adivinhe um Numero'} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create ({
  screen: {
    flex: 1,
  },
});
