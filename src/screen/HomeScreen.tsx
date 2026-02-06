import React from "react";
import { View ,Text ,StyleSheet, Button} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {Home: undefined;Second: undefined;};
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conteúdo da tela inicial</Text>
      <Button title="Ir para a segunda tela" onPress={() => navigation.navigate("Second")} 
        
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});