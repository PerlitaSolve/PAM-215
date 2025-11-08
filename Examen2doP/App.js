import {StyleSheet, Text, View, Animated,ScrollView, ImageBackground, Easing, Button, Switch  } from 'react-native';
import React, { useState, useEffect } from 'react';


export default function App() {
  const scrollRef=useRef();
  const [completada, cambiarCompletada]= useState(false);
  // const[cargando, setCargando]=React.useState(true);
  // const desvanecido= new Animated.Value(1);

  // useEffect(()=>{
  //   const timer=setTimeout(()=>{
  //     Animated.timing(desvanecido,{
  //       toValue:0,
  //       duration:800,
  //       easing: Easing.out(Easing.ease),
  //       useNativeDriver:true,
  //     }).start(()=>setCargando(false));
  //   },2000);
  //   return()=>clearTimeout (timer);
  // }, []);

  // if (cargando){
  //   return(
  //     <Animated.View style={[styles.splashContainer,{opacity: desvanecido}]}>
  //       <Text>NUEVO DIA, NUEVO COMIENZO, EMPIEZA HOY</Text>
  //     </Animated.View>
  //   );
  // }

  return (
    <ImageBackground
    source={require('./assets/Exa.jpg')}
    style={styles.background}
    resizeMode="cover"
    >
    <View>

        <View>
          <Text>MIS DEBERES</Text>
        </View>

        <View>
          <Text>Fecha=07/ Noviembre/2025</Text>
        </View>

    </View>
     

      <ScrollView
      ref={scrollRef}
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={true}
      >


        <View style={styles.categoria1}>
          <Text>CATEGORIAS</Text>
          <Text style={styles.sub}>HOGAR</Text>
          <View>
    
          <Text>1. Recoger cuarto</Text>
          <Text>Ordenar recamara principal</Text>
          <Text>Ordenar recamara principal</Text>
          </View>
          <Switch>
            <Text>{cambiarCompletada ? 'Completada' : 'Pendiente'}</Text>
          </Switch>
          
          <View>

          <Text>2. Lavar ropa</Text>
          <Text>Ordenar recamara principal</Text>
          <Text>Ordenar recamara principal</Text>
          </View>
          
          <Switch>
            <Text>{cambiarCompletada ? 'Completada' : 'Pendiente'}</Text>
          </Switch>
          </View>
        


         <View style={styles.categoria2}>
          <Text style={styles.sub}>ESCUELA</Text>
        </View>

         <View style={styles.categoria3}>
          <Text style={styles.sub}>PERSONAL</Text>
        </View>

      </ScrollView>

      

    </ImageBackground>
   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background:{
    alignContent:'center',
    flex:1,
    justifyContent:'center',
    width:'100%',
    height:'100%',
  },
  // splashContainer:{
  //   flex:1,
  //   justifyContent:'center',
  //   alignItems:'center',
  //   backgroundColor:'#f8c6ecff',
  //   padding:50,
  // },
  titulo:{
    fontFamily: 'Times New Roman',
    fontSize: 40,
    color: '#050b8eff',
  },
  sub:{
    fontSize: 16,
    fontFamily:'Courier',
    color: '#7b7b7bff',
    fontWeight: '900', 
  },
  categoria:{
    backgroundColor:'#ca9af7bb',
    width: '100%',
    height: 100,
    borderRadius:10,
    marginVertical:10,
  },
  content:{
    padding: 20,
    paddingBottom: 40,
  },
});
