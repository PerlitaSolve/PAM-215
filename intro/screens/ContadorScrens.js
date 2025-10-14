
//1. imports: zona de las im.portaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

//2. Main: Zona de componentes
export default function App() {

  const[contador, setContador]=useState(0);

  return (

    <View style={styles.container}>

      <Text style={styles.texto}>Contador: </Text>
      <Text style={styles.texto2}>{contador}</Text>

      <View style={styles.contenedorbotones}>
      <Button color= "#0b9089ff" title='Incrementar' onPress={()=>setContador(contador+1)}></Button>
      <Button color= "#7db138ff" title='Quitar' onPress={()=>setContador(contador-1)}></Button>
      <Button color= "#996a20ff" title='Reiniciar' onPress={()=>setContador(0)}></Button>
      </View> 
      <StatusBar style="auto" />
    
      </View> 
  );
}

//3. Estilos:Zona de estilos y posicionamiento.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center', //start=izq, center=centro, end=derecha// eje x
    justifyContent: 'center', //eje y
  },
  texto:{
    fontFamily: "Times New Roman",
    fontSize:30,
    color: '#a0e4c2ff',
    fontWeight: 'bold', //negrita
    fontStyle: 'italic',// letra inclinada
    textDecorationLine: 'line-through', //tachar con linea
  },
  texto2:{
    fontFamily: "Courier",
    fontSize:40,
    color: '#969adbff',
    fontWeight: '400', //negrita
    textDecorationLine: 'underline', //tachar con linea
  },
  contenedorbotones:{
    marginTop: 20,
    flexDirection: "row",
    gap: 15,
  },
});
