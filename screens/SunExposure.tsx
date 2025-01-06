import React from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import selected from '../assets/images/selected.jpg';
import unselected from '../assets/images/unselected.jpg';
import useAppStore from '../store';
import {useNavigation} from '@react-navigation/native';

const SunExposure = ({}) => {
  const {
    health_concerns,
    diets,
    is_daily_exposure,
    is_somke,
    alchol,
    allergies,
    toggleDailyExposure,
    toggleSmoke,
    setAlchol,
  } = useAppStore(state => state);
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Is your daily exposure to sun limited?</Text>
      <TouchableOpacity style={styles.optButton} onPress={toggleDailyExposure}>
        <Image
          source={is_daily_exposure ? selected : unselected}
          style={styles.optIcon}
        />
        <Text>Yes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optButton} onPress={toggleDailyExposure}>
        <Image
          source={is_daily_exposure ? unselected : selected}
          style={styles.optIcon}
        />
        <Text>No</Text>
      </TouchableOpacity>

      <Text style={styles.title}>
        Do you currently smoke (tobacco or marijuana)?
      </Text>
      <TouchableOpacity style={styles.optButton} onPress={toggleSmoke}>
        <Image
          source={is_somke ? selected : unselected}
          style={styles.optIcon}
        />
        <Text>Yes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optButton} onPress={toggleSmoke}>
        <Image
          source={is_somke ? unselected : selected}
          style={styles.optIcon}
        />
        <Text>No</Text>
      </TouchableOpacity>

      <Text style={styles.title}>
        On average, how many alcoholic beverages do you have in a week?
      </Text>
      <TouchableOpacity
        style={styles.optButton}
        onPress={() => setAlchol('0-1')}>
        <Image
          source={alchol === '0-1' ? selected : unselected}
          style={styles.optIcon}
        />
        <Text>0 - 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optButton}
        onPress={() => setAlchol('2-5')}>
        <Image
          source={alchol === '2-5' ? selected : unselected}
          style={styles.optIcon}
        />
        <Text>2 - 5</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optButton}
        onPress={() => setAlchol('5+')}>
        <Image
          source={alchol === '5+' ? selected : unselected}
          style={styles.optIcon}
        />
        <Text>5+</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Alert.alert('Thank you for submitting your details!');
          console.log(
            JSON.stringify(
              {
                health_concerns,
                diets,
                is_daily_exposure,
                is_somke,
                alchol,
                allergies,
              },
              null,
              4,
            ),
          );
          navigation.navigate('Welcome');
        }}>
        <Text style={styles.buttonText}>Get my personalized vitamin</Text>
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
    fontSize: 18,
    marginBottom: 10,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  optButton: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  optIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});

export default SunExposure;
