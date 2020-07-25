import React, {useState, useCallback, useEffect} from 'react';
import {StyleSheet, Text, View, Switch} from 'react-native';
import {useDispatch} from 'react-redux';
import {setFilters} from '../store/actions/mealsAction';

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        /* {trackColor={{true: 'purple'}}
          thumbColor="purple"} */
        value={props.value}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = () => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setVegan] = useState(false);
  const [isVegetarian, setVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };

    dispatch(setFilters(appliedFilters));
  }, [isVegetarian, isGlutenFree, isLactoseFree, isVegan]);

  useEffect(() => {
    saveFilters();
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters /Restrictions</Text>
      <FilterSwitch
        label="Gluten-Free"
        value={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      ></FilterSwitch>
      <FilterSwitch
        label="Lactose-Free"
        value={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      ></FilterSwitch>
      <FilterSwitch
        label="Vegan"
        value={isVegan}
        onChange={(newValue) => setVegan(newValue)}
      ></FilterSwitch>
      <FilterSwitch
        label="Vegetarian"
        value={isVegetarian}
        onChange={(newValue) => setVegetarian(newValue)}
      ></FilterSwitch>
    </View>
  );
};

export default FiltersScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    margin: 10,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
});
