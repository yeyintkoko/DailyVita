import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useAppStore from '../store';

const Allergies = ({}) => {
  const navigation = useNavigation();
  const [allergies, setAllergies] = useState('');
  const {addAllergy} = useAppStore(state => state);

  const handleNextPress = () => {
    addAllergy({id: 1, name: allergies});
    navigation.navigate('SunExposure');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Write any specific allergies or sensitivity towards specific things
      </Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., Milk, Wheat"
        value={allergies}
        onChangeText={setAllergies}
      />

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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});

export default Allergies;
