import React from 'react';
import {Text, View} from 'react-native';

export default function App () {
  return (
    <View
      style={{
        padding: 20,
        marginTop: 50,
        flexDirection: 'row',
        width: '80%',
        height: 300,
        alignSelf: 'center',
        justifyContent: 'space-around',
        alignItems: 'center' /* alignItems: 'stretch', VALOR PADRAO*/,
        /* Axis Y e setado no parent. ISSO TB SIGNIFICA QUE a altura e com base no item interno */
        borderWidth: 1,
      }}
    >
      <View
        style={{
          backgroundColor: 'red',
          flex: 1 /* Ocupa o espaco de 1x com base no width do parent */,
          /* Axis X e setado no child */
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          flex: 2 /* Ocupa o espaco de 2x com base no width do parent */,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}
