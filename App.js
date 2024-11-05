import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './components/Welcome';
import Sub from './components/Sub';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Welcome" 
          component={Welcome} 
          options={{ headerTitleAlign: 'center' }} 
        />
        <Stack.Screen 
          name="Subscribe" 
          component={Sub} 
          options={{ headerTitleAlign: 'center' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
