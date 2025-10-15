import { Text, StyleSheet, View, Button} from 'react-native';
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';
import TextInScreen from './TextInScreen';
import ImageScreen from './ImageScreen';
import ScrollViewScreen from './ScrollViewScreen';
import ActivityScreen from './ActivityScreen';
import FlatListScreen from './FlatListScreen';
import ModalScreen from './ModalScreen';
import BottonSScreen from './BottonSScreen';

export default function MenuScreen() {
    const[screen, setScreen]=useState('menu');

    switch(screen){
        case 'Contador':
            return <ContadorScreen />;
        case 'Botones':
            return <BotonesScreen />;
        case 'Text Input':
            return <TextInScreen />;
        case'ImageBackgroud':
            return <ImageScreen />;
        case 'ScrollView':
            return <ScrollViewScreen />;
        case 'ActivityIndicator':
            return <ActivityScreen />;
        case 'FlatList':
            return <FlatListScreen />;
        case 'Modal':
            return <ModalScreen />;
        case 'Botton Sheet':
            return <BottonSScreen />;
        case 'menu':
            default:
                
                return (
                    <View style={styles.container}>
                    <Text style={styles.texto}>Menu de practicas</Text>

                    <View style={styles.botones}>
                    <Button color='#843110ff' onPress={()=>setScreen('Contador')} title='Práctica: Contador'/>
                    <Button color='#843110ff' onPress={()=>setScreen('Botones')} title='Práctica: Buttons'/>
                    <Button color='#843110ff' onPress={()=>setScreen('Text Input')} title='Práctica: Text Input'/>
                    <Button color='#843110ff' onPress={()=>setScreen('ImageBackgroud')} title='Práctica: ImageBackgroud'/>
                    <Button color='#843110ff' onPress={()=>setScreen('ScrollView')} title='Práctica: ScrollView'/>
                    <Button color='#843110ff' onPress={()=>setScreen('ActivityIndicator')} title='Práctica: ActivityIndicator'/>
                    <Button color='#843110ff' onPress={()=>setScreen('FlatList')} title='Práctica: FlatList'/>
                    <Button color='#843110ff' onPress={()=>setScreen('Modal')} title='Práctica: Modal'/>
                    <Button color='#843110ff' onPress={()=>setScreen('Botton Sheet')} title='Práctica: Botton Sheet'/>
                    </View>
                    </View>
                );
                
            
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#cfcfcfff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto:{
        fontFamily: 'Times New Roman',
        fontSize:  20,
        color: '#000000ff',
        fontWeight: 'bold',
    },
    botones:{
        marginTop: 20,
        flexDirection: "column",
        gap: 10,
    },

});