import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState ('');
  const [confirmed, setConfirmed] = useState (false);
  const [selectedNumber, setSelectedNumber] = useState ();

  const numberInputHandler = inputText => {
    setEnteredValue (inputText.replace (/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue ('');
    setConfirmed (false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt (enteredValue);
    if (isNaN (chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert ('Invalid Number', 'Number has to be between 1 to 99', [
        {text: 'Okay', style: 'destructive', onPress: resetInputHandler},
      ]);
      return;
    }
    setConfirmed (true);
    setSelectedNumber (parseInt (enteredValue));
    setEnteredValue (''); //This will be queue by React and just resolve next render,
    //so its possible to access the value of enteredValue before it got empty string.
    Keyboard.dismiss ();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainner}>
        <Text>Numero escolhido:</Text>
        <NumberContainer> {selectedNumber}</NumberContainer>
        <Button
          title="Start Game"
          onPress={() => props.onStartGame (selectedNumber)}
        />
      </Card>
    );
  }

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
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
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
  summaryContainner: {
    marginTop: 20,
  },
});

export default StartGameScreen;
