import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useAppStore from '../store';

const DietSelection = ({}) => {
  const navigation = useNavigation();
  const [diets, setDiets] = useState<string[]>([]);
  const {addDiet} = useAppStore(state => state);

  const dietOptions: string[] = [
    'None',
    'Vegan',
    'Vegetarian',
    'Pescatarian',
    'Strict Paleo',
    'Ketogenic',
    'Plant based',
  ];

  const toggleDiet = (diet: string) => {
    if (diets.includes(diet)) {
      setDiets(diets.filter(d => d !== diet));
    } else {
      setDiets([...diets, diet]);
    }
  };

  const handleNextPress = () => {
    diets.map(name => {
      addDiet(name);
    });
    navigation.navigate('Allergies');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Select the diets you follow</Text>
      {dietOptions.map(diet => (
        <TouchableOpacity
          key={diet}
          style={[
            styles.concernItem,
            diets.includes(diet) && styles.concernItemSelected,
          ]}
          onPress={() => toggleDiet(diet)}>
          <Text>{diet}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.button} onPress={handleNextPress}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  concernItem: {
    padding: 15,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  concernItemSelected: {
    backgroundColor: '#d1e7dd',
    borderColor: '#0f5132',
  },
});

export default DietSelection;
