import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

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
    <View>
      <Text>App</Text>
    </View>
  )
}




const styles = StyleSheet.create({})
