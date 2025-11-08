import {StyleSheet, Text, View, Animated,ScrollView, ImageBackground,Button, Switch,  } from 'react-native';
import React, { useState, useEffect } from 'react';


export default function App() {
  const scrollRef=useRef();

  return (
    <ImageBackground
    source={require('./assets/Exa.jpg')}
    style={styles.background}
    resizemMode="cover"
    >
    <View>

        <View>
          <Text>MIS DEBERES</Text>
        </View>

        <View>
          <Text>Fecha=07/ Noviembre/2025</Text>
        </View>

      <ScrollView
      ref={scrollRef}
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={true}
      >
        <View style={styles.categoria}>
          <Text style={styles.sub}>HOGAR</Text>
        </View>

         <View style={styles.categoria}>
          <Text style={styles.sub}>ESCUELA</Text>
        </View>

         <View style={styles.categoria}>
          <Text style={styles.sub}>PERSONAL</Text>
        </View>
      </ScrollView>

        
    </View>
    </ImageBackground>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',s
  },
  background:{
    alignContent:'center',
    flex:1,
    justifyContent:'center',
    width:'100%',
    height:'100%',
  },
  titulo:{
    fontFamily: 'Times New Roman',
    fontSize: 40,
    color: '#050b8eff'
  },
  sub:{
    fontSize: 16,
    fontFamily:'Courier',
    color: '#fff',
    fontWeight: '900', 
  },
  categoria:{
    color:'#ca9af7bb',
    width: '100%',
    height: 100,
  },
  content:{
    padding: 20,
    paddingBottom: 40,
  },
});
