import { Text, StyleSheet, View } from 'react-native'
import { FlatList, ScrollView, SectionList } from 'react-native-web'


export default function FlatListScreen() {
    const data=[
      {id: '1', nombre:'manzana'},
      {id: '2', nombre:'platano'},
      {id: '3', nombre:'naranja'},
      {id: '4', nombre:'uva'},
      {id: '5', nombre:'fresa'},
      {id: '6', nombre:'sandia'},
    ]
    const secciones=[
      {titulo: 'Frutas',
        data:[
          {nombre: 'Manzana'},
          {nombre: 'Platano'},
          {nombre: 'Naranja'},
          {nombre: 'Uva'},
        ]
      },
      {titulo: 'Verduras',
        data:[
          {nombre: 'Zanahoria'},
          {nombre: 'Lechuga'},
          {nombre: 'Tomate'},
          {nombre: 'Brocoli'},
        ]
      },
    ]
    return (
      <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.titulo}>FLATLIST</Text>

        <FlatList
          data={data}
          keyExtractor={(item)=>item.id}
          renderItem={({item})=>(
            <View style={styles.elementos}>
              <Text style={styles.text}> {item.nombre}</Text>
            </View>
            
          )}
          scrollEnabled={false}
          ItemSeparatorComponent={()=> <View style={styles.separador}/>}
        ></FlatList>


        <Text style={styles.titulo2}>Ejemplo de SectionList</Text>

        <SectionList
        sections={secciones}
          keyExtractor={(item, index) => item.nombre + index}
          renderItem={({item}) =>(
            <View style={styles.itemSection}>
              <Text style={styles.textItem}>{item.nombre}</Text>
            </View>
          )}
          renderSectionHeader={({section: {titulo}})=>(
            <View style={styles.encabezado}>
              <Text style={styles.tituloSeccion}> {titulo}</Text>
            </View>
          )}
          scrollEnabled={false}
          stickySectionHeadersEnabled={false}
        >
        </SectionList>
        
      </View>
      </ScrollView>
    )
  
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#a3d5f4ff'
  },
  content:{
    padding:20,
    paddingBottom:40,
  },
  titulo:{
    fontSize:30,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
    color: '#0c1688ff',
  },
  titulo2:{
    fontSize:30,
    fontWeight: 'bold',
    marginBottom: 20,
     textAlign: 'center',
    color: '#0c1688ff',
  },
  elementos:{
    width: '100%',
    height: 80,
    backgroundColor: '#c5f4b0ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 15,
    shadowColor: '#88f1e6ff',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  text:{
    fontFamily: 'Times New Roman',
    fontSize: 20,
    color:'#0a6a2fff',
    fontWeight: '900',
    textDecorationLine: 'underline',
  },
  separador:{
    height: 10,
  },
  encabezado:{
    backgroundColor: '#d6c6faff',
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 10,
    shadowcolor: '#fff',
    shadowOffset: {
      width:0,
      height: 2,
    },
    elevation: 5,
    shadowRadius: 3.84,
    shadowOpacity: 0.25,
  },

tituloSeccion:{
  fontSize: 22,
  fontWeight: 'bold',
  color: '#61155cff',
  textAlign: 'center',
  fontFamily: 'Times New Roman',
},
itemSection:{
  padding: 15,
  marginVertical: 5,
  borderRadius: 10,
  backgroundColor: '#8997d4ff',
  marginLeft:10,
  shadowcolor:'#4265abff',
  shadowOffset:{
    width:0,
    height:2,
  },
  elevation: 3,
  shadowRadius: 2,
  shadowOpacity: 0.2,
},
textItem:{
  fontSize: 18,
  fontWeight: '700',
  color:'#4f1a70ff',
  fontFamily:'Times New Roman',
},

})