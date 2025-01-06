import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from './screens/Welcome';
import HealthConcerns from './screens/HealthConcerns';
import SunExposure from './screens/SunExposure';
import DietSelection from './screens/DietSelection';
import Allergies from './screens/Allergies';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="HealthConcerns" component={HealthConcerns} />
          <Stack.Screen name="SunExposure" component={SunExposure} />
          <Stack.Screen name="DietSelection" component={DietSelection} />
          <Stack.Screen name="Allergies" component={Allergies} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
