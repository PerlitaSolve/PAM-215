import {View, Text, StyleSheet, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

  

export default function profile({navigation}){
    return(
        <View style={styles.container}>

            <View style={styles.iconRow}>
                <Ionicons name="person-outline" size={28} color="green"/>
                <Text style={styles.title}>Perfil de usuario</Text>
            </View>

            <Pressable
                style={styles.button} onPress={() => navigation.navigate('Detalles')}>
                <Text style={styles.buttonText}>Detalles del usuario</Text>
            </Pressable>

        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent:'center',
        padding: 20,
    },
    iconRow:{
        flexDirection:'column',
        alignItems:'center',
    },
    title:{
        fontSize: 22,
        fontWeight:'bold',
        marginLeft:10,
        color:'green',
    },
    button:{
        marginTop:30,
        backgroundColor:'#a1f0a5ff',
        padding:15,
        borderRadius:10,
    },
    buttonText:{
        color:'#fff',
        fontSize:18,
        textAlign:'center'
    }
});