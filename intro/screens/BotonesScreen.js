import { Text, StyleSheet, View, Button, Switch } from 'react-native'
import React,{useState} from 'react';

export default function BotonesScreen(){
const [esEncendido, cambiarEncendido] = useState (false);
const [color, cambiarColor] = useState('yellow')


    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>CONTROL DE LUZ</Text>

        {/*Operador Tenario: {Condicional ? valorTrue : valorFalse}*/}
        <Text style={[styles.luz, {color: esEncendido ? color:'white'}]}>
          {esEncendido ? 'Luz Encendida': 'Luz Apagada'}
        </Text>

        <Switch
        value = {esEncendido}
        onValueChange = {()=> cambiarEncendido(!esEncendido)}
        trackColor={{true: 'blue', false: 'gray'}}
        ></Switch>

        <View style={styles.cajaBotones}>
        <Button color= '#858202ff' title='Amalilo' onPress={()=> esEncendido && cambiarColor('yellow')}/>
        <Button color= '#137f9dff' title='Achul' onPress={()=> esEncendido && cambiarColor ('blue')}/>
        <Button color= '#8d1111ff'title='Rojo' onPress={()=> esEncendido && cambiarColor('red')}/>
        </View>

      </View>
    )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#060000f5',
    alignItems: 'center', 
    justifyContent: 'center', 
  },
 cajaBotones:{
    marginTop: 20,
    flexDirection: "row",
    gap: 15,
  },
  titulo:{
    color: 'white',
    fontSize:35,
    marginBottom: 20,
    fontWeight:'bold',
  },
  luz:{
    marginBottom: 15,
    fontsize:30,
  },
})