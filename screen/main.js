    import React, { Component } from 'react';
    import {
    StyleSheet,
    View,
    Text,
    resizableMode,
    Image}
    from 'react-native';
    import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
    import App from './../App.js';

    const Main =(navigate)=>{
        return(
            <View style={style.card}>

                <View style={[style.box, style.box1]}>
                    <Image
                        source={require('./../assets/taco.jpeg')} 
                        style={{width:'100%', height:'25%'}}
                        resizableMode='stretch'
                    />
                </View>

                <View style={[style.box, style.box2]}>
                    
                    <View style={[]}>   
                        <Text style={[]}>
                            titulo, hola como estas
                        </Text>

                        <Text>
                            Subtitulo
                        </Text>
                    </View>
                    <View style={[style.cont]}>
                        <Text style={style.text2}>
                            prueba 1
                        </Text>
                        <Text style={style.text2}>
                            prueba 2
                        </Text>
                    </View>
                    <View style={[style.cont]}>
                    <Image
                        source={require('./../assets/coment.png')} 
                        style={{width:'20%', height:'100%'}}
                        resizableMode='stretch'
                    />
                        <Text>
                            Comentarios
                        </Text>
                    </View>
            </View>                
            </View>
        
        );
    }
    

    const style = StyleSheet.create({
        card:{
            flexDirection:'row',
            backgroundColor: '#FBB4AB',
            flex:1,
            padding:1,
            paddingTop:1,
            paddingBottom:1,
            margin:1,
            marginTop:2,
            marginBottom:5,
            height:200,
        
            
        },
        box:{
            flex:1,
            alignItems: 'center'
        },
        box1:{
            flex:7,
            padding:5,
            paddingTop:10,
            paddingBottom:10,
            margin:5,
            marginTop:5,
            marginBottom:5
        },
        text:{
            fontWeight: 'bold',
            fontSize:15,
            paddingBottom:5
        },
        text2:{
            padding:5,
            margin:5,
            backgroundColor:'#aaaa',
            borderRadius:7
        },
        cont:{
            flexDirection:'row',
            paddingTop:15,
        },
        box2:{

            flex:8,
            padding:10,
            paddingTop:10,
            paddingBottom:5,
            margin:5,
            marginTop:5,
            marginBottom:5
        }
    })
    export default Main;