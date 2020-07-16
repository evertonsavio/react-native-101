import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const ObjetivosInput = (props) => {
  const [textodigitado, setTextoDigitado] = useState('');

  const inputHandler = (textoDigitado) => {
    setTextoDigitado(textoDigitado);
  };

  const objetivoHandler = () => {
    props.onAddObjetivo(textodigitado);
    setTextoDigitado('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Curso de R3actN@tiv3"
          style={styles.input}
          onChangeText={inputHandler}
          value={textodigitado}
        />
        <View style={styles.divDeBtns}>
          <View style={styles.btn}>
            <Button title="Adicionar" onPress={objetivoHandler} />
          </View>
          <View style={styles.btn}>
            <Button title="Cancelar" color="red" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

{
  /* IMPORTANTE: props.onAddObjetivo(textodigitado) iria ser excutado assim que e rederizado 
Opcao 1 e passar como Anonymous function () => props.onAddObjetivo(textodigitado)
Nao sera executado quando o componente for executado, registrado como To be.
Opcao 2 configurar como JS bind, para que eventualmente a funcao seja executada
props.onAddObjetivo.bind(this, textodigitado) 
// this referencia para esse, 2-> parametro que a funcao que sera executada e esta e TO BE. 
*/
}

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  divDeBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  btn: {
    flex: 1,
    padding: 5,
  },
  input: {
    height: '8%',
    borderRadius: 5,

    width: '80%',
    borderColor: 'purple',
    borderWidth: 1,
    marginBottom: 10,
  },
});

export default ObjetivosInput;
