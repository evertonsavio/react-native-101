import React, {useState} from 'react';
import {StyleSheet, View, Button, FlatList} from 'react-native';
import ObjetivosItem from './components/ObjetivosItem';
import ObjetivosInput from './components/ObjetivosInput';

export default function App() {
  const [listaDeObjetivos, setListaDeObjetivos] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false);

  const addObjetivosHandler = (objetivoTitle) => {
    /* Anonymous function prevState, posso chamar tb de objetivosAtuais por exemplo*/
    /* Spread Operator: [...listaDeObjetivos] Pull todos os elementos do array e cria novo elemento*/

    setListaDeObjetivos((prevState) => [
      ...prevState,
      {id: Math.random().toString(), valorDoTexto: objetivoTitle},
    ]);

    setIsAddModal(false);
  };

  const removeObjetivoHandler = (objetivoId) => {
    setListaDeObjetivos((objetivosAtuais) => {
      return objetivosAtuais.filter((obj) => obj.id !== objetivoId);
    });
  };

  const cancelarObjetivoHandler = () => {
    setIsAddModal(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Show Modal" onPress={() => setIsAddModal(true)} />
      <ObjetivosInput
        visible={isAddModal}
        onAddObjetivo={addObjetivosHandler}
        onCancel={cancelarObjetivoHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={listaDeObjetivos}
        renderItem={(itemData) => (
          <ObjetivosItem
            id={itemData.item.id}
            onDelete={removeObjetivoHandler}
            title={itemData}
          />
        )}
      />
    </View>
  );
}

{
  /* 
<FlatView>
  {listaDeObjetivos.map (objetivo => (
    <View key={objetivo} style={styles.list}>
    <Text>{objetivo}</Text>
  </View>))}
</FlatView>
*/
}
{
  /* <Objetivos /> items e um Self Closing Component por eu espero usar props.title apenas. 
Ou seja, nao estou passando nado no Children do componente pra acessar como props.children*/
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 50,
    borderRadius: 5,
  },
});
