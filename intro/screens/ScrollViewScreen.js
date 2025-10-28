import { Text, StyleSheet, View, ScrollView, Button } from 'react-native'
import React, { useState, useRef } from 'react'

export default function ScrollViewScreen() {
  const scrollRef=useRef();

  const irAlFinal=()=>{
    scrollRef.current.scrollToEnd({animated: true})
  }

    return (
      <ScrollView 
      ref={scrollRef}
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={true}
      >
        <View>
          <Button 
          color='#6865ffff'
          title='Ir al Final'
          onPress={irAlFinal}
          >
        </Button>
        </View>

        <Text style={styles.titulo}>Práctica: ScrollView</Text>
        <Text style={styles.titulo2}>Ejemplo de desplazamiento</Text>

        <View style={styles.elementos}>
          <Text style={styles.text}>Elemento 1</Text>
        </View>

        <View style={styles.elementos}>
          <Text style={styles.text}>Elemento 2</Text>
        </View>

        <View style={styles.elementos}>
          <Text style={styles.text}>Elemento 3</Text>
        </View>

        <View style={styles.elementos}>
          <Text style={styles.text}>Elemento 4</Text>
        </View>

        <View style={styles.elementos}>
          <Text style={styles.text}>Elemento 5</Text>
        </View>

        <Text style={styles.titulo2}>Ejemplo de desplazamiento horizontal</Text>
        <ScrollView 
        horizontal
        nestedScrollEnabled={true}
        style={styles.scrollhorizontal}
        showsHorizontalScrollIndicator={false}
        >

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro1</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro2</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro3</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro4</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro5</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro6</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro7</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro8</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro9</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro10</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro11</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro12</Text>
        </View>

        </ScrollView>

      </ScrollView>
    )
  
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#f6d5a8ff',
  },

  content:{
    padding:20,
    paddingBottom:40,
  },

  titulo:{
    fontSize:30,
    fontWeight:'bold',
    marginBottom:10,
    color:'#000000ff',
    textAlign:'center',
  },

  titulo2:{
    fontSize:26,
    fontWeight:'bold',
    marginTop:20,
    marginBottom:10,
    textAlign:'center',
  },

  elementos:{
    width:'100%',
    height:100,
    backgroundColor:'#a5ffecff',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:10,
    borderRadius:10,
  },

  elementos2:{
    width:120,
    height:120,
    backgroundColor:'#72b6faff',
    justifyContent:'center',
    alignItems:'center',
    marginRight:10,
    borderRadius:10,
  },

  text:{
    fontSize:16,
    fontFamily:'Courier',
    color: '#000000ff',
    fontWeight:'900',
    textDecorationLine: 'underline',
  },

  scrollhorizontal:{
    marginVertical:10,
    width:'100%',

  },
})