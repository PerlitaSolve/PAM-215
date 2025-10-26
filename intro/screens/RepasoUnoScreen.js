import { Text, StyleSheet, View, ImageBackground, Button, Switch, TextInput, Alert, Animated, Easing} from 'react-native'
import React, {  useEffect, useState } from 'react'



export default function RepasoUnoScreen() {
  const[nombre, setNombre]=useState('');
  const[correo, setCorreo]=useState('');
  const [acepto, setAcepto] = useState (false);
  const[cargando, setCargando]=React.useState(true);
  const desvanecido= new Animated.Value(1);

  useEffect(()=>{
      const timer= setTimeout(()=>{
        Animated.timing(desvanecido,{
          toValue: 0,
          duration: 800,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start(()=> setCargando(false));
      }, 2000);
      return()=> clearTimeout (timer);
    }, []);
    if(cargando){
      return(
        <Animated.View style={[styles.splashContainer, {opacity: desvanecido}]}>
          <ImageBackground
            source={require('../assets/mariposa.jpeg')}
            style={styles.splashImage}
            resizeMode="contain"
          >
            <Text style={styles.splashText}>Cargando...</Text>
          </ImageBackground>
        </Animated.View>
      );
    }

    const alertas=()=>{

      if(nombre.trim()==='' && correo.trim()===''){
        alert("Por favor complete todos los campos");
      }else if(correo.trim()===''){
        alert("Por favor ingrese el correo");
      }else if(nombre.trim()==='' ){
        alert("Por favor ingrese el nombre");
      }else if(acepto===false){
        alert("Por favor acepte términos y condiciones");
      }else{
        const espacios=correo.trim();
        const regex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(regex.test(espacios)){
          alert('Campos llenados correctamente\n'+`Nombre: ${nombre}\n Correo: ${correo}`);
        }else{
          alert("Correo inválido");
        }
      }
    }

    
    

    return (
      <ImageBackground
        source={require('../assets/FondoPráctica.jpg')}
        style={styles.background}
        resizeMode="cover"
        >
            <View style={styles.rectangulo}>
            <Text style={styles.texto}>REGISTRO DE USUARIO</Text>
            <TextInput
            style={styles.input}
            placeholder='Nombre completo'
            value={nombre}
            onChangeText={setNombre}
            />
            <TextInput
            style={styles.input}
            placeholder='Correo Electronico'
            value={correo}
            onChangeText={setCorreo}
            />

            <Text style={styles.etiqueta}>Aceptar Términos y Condiciones</Text>
            <Switch
            value={acepto}
            onValueChange = {()=> setAcepto(!acepto)}
            trackColor={{true: '#88ebf8ff', false: 'gray'}}
            ></Switch>
              
            <Button style={styles.boton} color='#80afffff' 
            title='Registrarse' onPress={alertas} />
            
            
            </View>
        </ImageBackground>

    );
  
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  etiqueta:{
    fontsize: 20,
    fontfamily:'Courier',
    color: '#c8fc90ff',
    marginBottom: 5,
    margingTop: 10,
  },
  input: {
    bordercolor: '#989696ff',
    backgroundColor: '#d0cfcfff',
    width:'110%',
    borderWidth:2,
    padding: 6,
    borderRadius: 10,
    marginBottom:10,
  },
  texto: {
    fontFamily: 'Times New Roman',
    fontSize:  27,
    color: '#ffffffff',
    fontWeight: 'bold',
    gap:25,
  },
  boton:{
    marginTop: 50,
    gap: 20,
  },
  splashContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    padding:50,
  },
  splashImage:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
  },
  splashText:{
    position: 'relative',
    bottom:60,
    fontsize:80,
    fontWeight: 'bold',
    fontFamily:'times new roman',
    color: '#0e0c80ff',
  },
  rectangulo:{
    backgroundColor: 'rgba(167, 167, 167, 0.4)',
    padding:40,
    borderRadius: 10,
  },
})