import React from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Comecar novo Jogo!</Text>
      <Card
        style={{
          width: 350,
          maxWidth: '90%',
          alignItems: 'center',
        }}
      >
        <Text>Selecione um Numero</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" onPress={() => {}} color={Colors.accent} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={() => {}} color={Colors.primary} />
          </View>
        </View>
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
  title: {
    fontSize: 20,
    marginVertical: 10, //Replace marginBottom or margintop
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 120,
  },
});

export default StartGameScreen;
