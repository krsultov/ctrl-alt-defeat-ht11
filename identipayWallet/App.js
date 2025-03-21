import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CustomButton from './components/customButton';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartingScreen from './screens/startingScreen';
import ScanQR from './screens/scanQr';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={StartingScreen}/>
          <Stack.Screen name="Scan QR code" component={ScanQR}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}