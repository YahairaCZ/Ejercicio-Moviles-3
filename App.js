import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from './src/screens/HomeScreens.js';
import DetailScreens from './src/screens/DetailScreens.js';
import Third from './src/screens/Third.js';



constDrawer = createDrawerNavigator ();
const Drawer = createDrawerNavigator ();

//llamada de screens
function App() {
  return (
    
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name='Home' component ={HomeScreens}/>
        <Drawer.Screen name='Details' component ={DetailScreens}/>
        <Drawer.Screen name='Third' component = {Third}/>
        </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;


  