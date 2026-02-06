import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer, NavigationContainerRefContext} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/screen/HomeScreen';
import { SecondScreen } from './src/screen/SecondScreen';


type RootStackParamList = {
  Home: undefined;
  Second: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
        <Stack.Screen name="Second" component={SecondScreen} options={{ title: 'Segunda' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





