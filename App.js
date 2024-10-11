import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from './src/screens/HomeScreens.js';
import DetailScreens from './src/screens/DetailScreens.js';
import Third from './src/screens/Third.js';

// Configuración del navegador
const Stack = createNativeStackNavigator();


//llamada de screens
function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home" 
        component={HomeScreens} />
        
        
        <Stack.Screen 
          name="Details" 
          component={DetailScreens}
          initialParams={{ screenText: 'Pantalla de Detalles', buttonText: 'Ir a Tercer pantalla' }} 
        />
        
        <Stack.Screen 
        name="Third" 
        component={Third} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;


