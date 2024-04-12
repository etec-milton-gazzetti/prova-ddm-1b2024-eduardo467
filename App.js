import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';
import fundo from './assets/fundo.jpg';

function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={fundo} resizeMode='cover' style={{ justifyContent: 'center', flex: 1, width: '100%' }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ marginVertical: 200, fontSize: 24, fontWeight: 'bold', fontStyle: 'italic' }}></Text>

        <TouchableOpacity onPress={() => navigation.navigate('About')} style={{ marginVertical: 10, backgroundColor: 'white', borderRadius: 5 }}>
  <Text style={{ color: 'red',  }}>SOBRE</Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('Historia')} style={{ marginVertical: 15, backgroundColor: 'white', borderRadius: 5 }}>
  <Text style={{ color: 'red',  }}>CONTEUDO</Text>
</TouchableOpacity>

      </View>
    </ImageBackground>
  );
}

function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SOBRE</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

function HistScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>GRECIA ANTIGA</Text>
      <Text>A Grécia Antiga foi uma civilização pertencente ao período da Antiguidade Clássica que compreendeu desde o Período Pré-Homérico terminando com o início da Idade Média. A Grécia Antiga era composta por um conjunto de cidades que partilhavam a língua, os costumes e algumas leis.</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Historia" component={HistScreen} />
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
