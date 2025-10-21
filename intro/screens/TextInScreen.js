import { Text, StyleSheet, View, Button, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'

export default function TextInScreen(){
  const[nombre, setNombre]=useState('');
  const[password, setPassword]=useState('');
  const[telefono, setTelefono]=useState('');

  const mostrarAlerta=()=>{
    if(nombre.trim()=== '' || password.trim()==='' || telefono.trim()===''){
      Alert.alert("Error favor de llenar todods los campos (móvil)");
      alert("Error favor de llenar todods los campos (web)");
    }else{
      //Alerta para movil
      Alert.alert('Datos ingresados \n'+
              `Nombre: ${nombre}\nPassword: ${password}\nTelefono: ${telefono}`
      );
      //alert para web
      alert('Datos ingresados \n'+
              `Nombre: ${nombre}\nPassword: ${password}\nTelefono: ${telefono}`
      );
    }
  }
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>TextInput & Alert</Text>
        <Text style={styles.etiquetas}>Nombre: </Text>
        <TextInput
          style={styles.input}
          placeholder='Escribe tu nombre aquí'
          value={nombre}
          onChangeText={setNombre}
        />

         <Text style={styles.etiquetas}>Password: </Text>
        <TextInput
          style={styles.input}
          placeholder='Escribe tu password aquí'
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

         <Text style={styles.etiquetas}>Telefono: </Text>
        <TextInput
          style={styles.input}
          placeholder='Escribe tu telefono aquí'
          keyboardType='phone-pad'
          value={telefono}
          onChangeText={setTelefono}
        />
  
        <Button 
                color= {'#1e8fc0ff'}
                title='Mostrar Alerta'
                onPress={mostrarAlerta}/>
      </View>
    )
  
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#c6fde1ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontfamily: 'Time New Roman',
    fontSize:32,
    color: '#706f6fff',
    fontWeight:'bold',
    textDecorationLine: 'underline',
    marginBotton:20,
  },
  etiquetas:{
    fontsize:16,
    fontfamily:'Courier',
    color: '#706f6fff',
    marginBottom: 5,
    margingTop: 10,

  },
  input:{
    width:'50%',
    borderWidth:2,
    borderColor:'#d0d0d0ff',
    borderRadius:8,
    padding:10,
    marginBottom:10,
    backgroundColor: '#ece9e9ff',
  }
})