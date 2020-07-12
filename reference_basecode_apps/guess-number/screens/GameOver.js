import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>Seu telefone Rocks! Parabens! =D </TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/success.png')}
          fadeDuration={300}
          /* source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8APTSEvPDgOYZYh-4aiNXCZ2ftSrw_HwCVg&usqp=CAU',
          }} */
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <BodyText style={{width: '80%', fontSize: 18}}>
        Seu telefone precisou de{' '}
        <Text style={styles.highligth}>{props.roundsNumber}</Text> rodadas para
        adivinhar o numero{' '}
        <Text style={styles.highligth}>{props.userNumber}</Text>.
      </BodyText>
      <Button title="Começar novo jogo" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  highligth: {
    color: Colors.primary,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'black',
    marginVertical: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default GameOver;
