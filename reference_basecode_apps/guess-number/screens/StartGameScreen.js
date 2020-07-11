import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState ('');

  const numberInputHandler = inputText => {
    setEnteredValue (inputText.replace (/[^0-9]/g, ''));
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss ();
      }}
    >
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
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Reset" onPress={() => {}} color={Colors.accent} />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={() => {}}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
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
  input: {
    width: 50,
    textAlign: 'center',
  },
});

export default StartGameScreen;
