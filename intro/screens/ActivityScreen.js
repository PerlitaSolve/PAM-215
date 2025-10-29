import { Text, StyleSheet, View, Button, ActivityIndicator } from 'react-native'
import React, { useState} from 'react'

export default function ActivityScreen() {
  const [loading, setLoading]=useState(false);
  const startLoading=()=>{setLoading(true);
    setTimeout(()=>setLoading(false), 3000)
  };

  if(loading){
    return(
    <View style={styles.container}>
      <View style={styles.loaderContainer}>
        <ActivityIndicator
        size="large"
        color="#865dabff"
        animating={true}
        hidesWhenStopped={true}        
        />
        <Text style={styles.texto}>Cargando...</Text>
      </View>
    </View>
    );
  }
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>ActivityIndicator</Text>
      <Button color='#353ef5ff' title="Carga de datos" onPress={startLoading}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#34083dff"
  }, 
  texto:{
    color:"#89e9ceff",
  },
  titulo:{
    justifyContent:'center',
    alignContent:'center',
    marginBottom:20,
    fontSize:20,
    color:"#f4a6ebff"
  },
  loaderContainer:{
    alignContent:'center',
  }
})