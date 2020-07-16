import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';

const GameOver = props => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>Seu telefone Rocks! Parabens! =D </TitleText>
        <View style={styles.imageContainer}>
          <Image
            source={require ('../assets/success.png')}
            fadeDuration={300}
            /* source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8APTSEvPDgOYZYh-4aiNXCZ2ftSrw_HwCVg&usqp=CAU',
          }} */
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <BodyText
          style={
            Dimensions.get ('window').height < 400
              ? {width: '80%', fontSize: 18}
              : {width: '85%', fontSize: 20}
          }
        >
          Seu telefone precisou de{' '}
          <Text style={styles.highligth}>{props.roundsNumber}</Text>
          {' '}
          rodadas para
          adivinhar o numero{' '}
          <Text style={styles.highligth}>{props.userNumber}</Text>.
        </BodyText>
        <Button title="Começar novo jogo" onPress={props.onRestart} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create ({
  highligth: {
    color: Colors.primary,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  imageContainer: {
    width: Dimensions.get ('window').width * 0.7,
    height: Dimensions.get ('window').width * 0.7,
    borderRadius: Dimensions.get ('window').width * 0.7 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'black',
    marginVertical: Dimensions.get ('window').height / 40,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default GameOver;
