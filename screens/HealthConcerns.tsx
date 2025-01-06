import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useAppStore from '../store';

const HealthConcerns = ({}) => {
  const navigation = useNavigation();
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);
  const {addHealthConcern} = useAppStore(state => state);

  const concerns = [
    'Sleep',
    'Immunity',
    'Stress',
    'Joint Support',
    'Digestion',
    'Mood',
    'Energy',
    'Hair, Skin, Nails',
    'Weight Loss',
    'Fitness',
    'Special Medical Condition',
  ];

  const toggleConcern = (concern: string) => {
    if (selectedConcerns.includes(concern)) {
      setSelectedConcerns(selectedConcerns.filter(c => c !== concern));
    } else if (selectedConcerns.length < 5) {
      setSelectedConcerns([...selectedConcerns, concern]);
    }
  };

  const handleNextPress = () => {
    selectedConcerns.map((name, id) => {
      addHealthConcern({id: id + 1, name, priotity: id + 1});
    });
    navigation.navigate('DietSelection');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select the top health concerns (up to 5)</Text>
      <FlatList
        data={concerns}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.concernItem,
              selectedConcerns.includes(item) && styles.concernItemSelected,
            ]}
            onPress={() => toggleConcern(item)}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={handleNextPress}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
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

export default HealthConcerns;
