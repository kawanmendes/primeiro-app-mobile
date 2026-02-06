import React from "react";
import { View ,Text ,StyleSheet, Button} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {Home: undefined;Second: {mensagem: string};};
type Props = NativeStackScreenProps<RootStackParamList, 'Second'>;

export const SecondScreen = ({ navigation , route}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conteúdo da segunda tela</Text>
      <Text style={styles.message}>{route.params?.mensagem}</Text>
      <Button title="Ir para a tela inicial"
        onPress={() => navigation.navigate("Home")} />
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
  message: {
    fontSize: 18,
    color: "gray",
    textAlign: "center",
  },
});


