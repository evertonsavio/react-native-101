import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
//https://react-native-elements.github.io/react-native-elements/docs/icon.html
import MainButton from '../components/MainButton';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import BodyText from '../components/BodyText';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil (min);
  max = Math.floor (max);
  const rndNum = Math.floor (Math.random () * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween (min, max, exclude);
  } else {
    return rndNum;
  }
};

//SCROLLVIEW
/* const renderListItem = (value, numOfRound) => (
  <View key={value} style={styles.listItem}>
    <BodyText>#{numOfRound}</BodyText>
    <BodyText>{value}</BodyText>
  </View>
);
 */
//FLATLIST
const renderListItem = (listLength, itemData) => (
  <View style={styles.listItem}>
    <BodyText>#{listLength - itemData.index}</BodyText>
    <BodyText>{itemData.item}</BodyText>
  </View>
);

const GameScreen = props => {
  const initialGuess = generateRandomBetween (1, 100, props.userChoice);

  //////////////////INICIOSTATE////////////////////////////////////
  const [currentGuess, setCurrentGuess] = useState (initialGuess);
  const [pastGuesses, setPastGuesses] = useState ([initialGuess.toString ()]);
  const [deviceWidth, setDeviceWidth] = useState (
    Dimensions.get ('window').width
  );
  const [deviceHeight, setDeviceHeight] = useState (
    Dimensions.get ('window').height
  );

  useEffect (() => {
    const updateLayout = () => {
      setDeviceHeight (Dimensions.get ('window').height);
      setDeviceWidth (Dimensions.get ('window').width);
    };
    Dimensions.addEventListener ('change', updateLayout);
    return () => {
      Dimensions.removeEventListener ('change', updateLayout);
    };
  });

  /* const [rounds, setRounds] = useState(0); */
  ////////////////////FIMSTATE/////////////////////////////////////

  ///////////////////INICIOREFS/////////////////////
  const currentLow = useRef (1);
  const currentHigh = useRef (100);
  ////////////////////FIMREFS///////////////////////

  ///////////////////INICIOHOOKS////////////////////
  const {userChoice, onGameOver} = props;

  useEffect (
    () => {
      if (currentGuess === userChoice) {
        onGameOver (pastGuesses.length);
      }
    },
    [currentGuess, onGameOver, userChoice]
  );
  ////////////////////FIMHOOKS//////////////////////

  ///////////////////FUNCOES////////////////////////
  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < props.userChoice) ||
      (direction === 'greater' && currentGuess > props.userChoice)
    ) {
      Alert.alert ('Não minta!', 'Que mentira!', [
        {text: 'Desculpa =(', style: 'cancel'},
      ]);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween (
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess (nextNumber);
    setPastGuesses (curPastGuesses => [
      nextNumber.toString (),
      ...curPastGuesses,
    ]);
    /* setRounds((curRounds) => curRounds + 1); */
  };

  let listContainerStyle = styles.listContainer;

  if (deviceWidth < 350) {
    listContainerStyle = styles.listContainerBig;
  }
  if (deviceHeight < 500) {
    return (
      <View style={styles.screen}>
        <Text>Celular adivinhou o numero:</Text>
        <View style={styles.controls}>
          <MainButton onPressProp={nextGuessHandler.bind (this, 'lower')}>
            <Ionicons name="md-remove" size={24} color="white" />
          </MainButton>
          <NumberContainer>{currentGuess}</NumberContainer>
          <MainButton onPressProp={nextGuessHandler.bind (this, 'greater')}>
            <Ionicons name="md-add" size={24} color="white" />
          </MainButton>
        </View>
        <View style={styles.listContainer}>
          {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) =>
            renderListItem(guess, pastGuesses.length - index)
          )}
        </ScrollView> */}
          <FlatList
            keyExtractor={item => item}
            data={pastGuesses}
            renderItem={renderListItem.bind (this, pastGuesses.length)}
            contentContainerStyle={styles.list}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Text>Celular adivinhou o numero:</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card
        style={
          Dimensions.get ('window').height > 600
            ? styles.buttonContainer
            : styles.buttonContainerSmall
        }
      >
        <MainButton onPressProp={nextGuessHandler.bind (this, 'lower')}>
          <Ionicons name="md-remove" size={24} color="white" />
        </MainButton>
        <MainButton onPressProp={nextGuessHandler.bind (this, 'greater')}>
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) =>
            renderListItem(guess, pastGuesses.length - index)
          )}
        </ScrollView> */}
        <FlatList
          keyExtractor={item => item}
          data={pastGuesses}
          renderItem={renderListItem.bind (this, pastGuesses.length)}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create ({
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    width: Dimensions.get ('window').width > 350 ? '80%' : '90%',
  },
  listItem: {
    borderColor: '#ccc',
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  list: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: Dimensions.get ('window').height > 600 ? 20 : 5,
    width: 400,
    maxWidth: '90%',
  },
  buttonContainerSmall: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: Dimensions.get ('window').height > 600 ? 20 : 5,
    width: 300,
    maxWidth: '90%',
  },
});

export default GameScreen;
