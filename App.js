import React,{useState, useEffect} from "react";
import {StyleSheet, Text, View, TextInput, Button, Image, KeyboardAvoidingView, TouchableOpacity, Animated, Keyboard} from 'react-native'

    const App =()=>{
      const[offset] = useState(new Animated.ValueXY({x:0, y:80}));
      const [opacity] = useState(new Animated.Value(0));
      const[logo]=useState(new Animated.ValueXY({x:130, y:155}));
      useEffect(()=>{
        keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

        Animated.parallel([
          Animated.spring(offset.y,{
            toValue:0,
            speed:4,
            bounciness:30
          }),
          Animated.timing(opacity,{
            toValue: 1,
            duration:200
          })
        ]).start()

      },[]);

      function keyboardDidShow(){
        Animated.parallel([
          Animated.timing(logo.x,{
            toValue:55,
            duration:100,
          }),
          Animated.timing(logo.y,{
            toValue:65,
            duration:100,
          }),
        ]).start();
      }
      function keyboardDidHide(){
        Animated.parallel([
          Animated.timing(logo.x,{
            toValue:130,
            duration:100,
          }),
          Animated.timing(logo.y,{
            toValue:150,
            duration:100,
          })
        ]).start();
      }
      return(
        <KeyboardAvoidingView style={styles.background}>
          <View style={styles.containerLogo}>
          <Animated.Image 
            style={{
              width: logo.x,
              height:logo.y,
            }}
            source={require('./assets/logo-login-1.png')} />
          </View>
          <Text style={styles.textInit}>Inicio de Sesion</Text>

          <Animated.View 
          style={[
            styles.container,
            {
              opacity: opacity,
              transform:[{
                translateY: offset.y
              }]
            }
            ]}
          >
            <TextInput style={styles.input}
              placeholder="Email"
              autoCorrect={false}
              onChangeText={()=>{}}
            ></TextInput>
            <TextInput style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              autoCorrect={false}
              onChangeText={()=>{}}
            ></TextInput>
            <TouchableOpacity style={styles.btnSubmit}>
              <Text style={styles.SubmitText}>
                Ingresar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnRegistrar}>
              <Text style={styles.TextRegistrar}>
                Crea una nueva cuenta
              </Text>
            </TouchableOpacity>
          </Animated.View>

        </KeyboardAvoidingView>
      );
    }

const styles =StyleSheet.create({
    background:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#8BC6C2'
    },
  container:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    width: '90%'
  },
  input:{
    backgroundColor: '#ffff',
    width:"90%",
    marginBottom:15,
    color:'#222',
    fontSize:17,
    borderRadius:7,
    padding:10
  },
  textInit:{
    fontSize:20,
    fontFamily: "Cochin",
    justifyContent:'center',
    alignItems: 'center',
    fontWeight: "bold",
    marginTop:25
  },
  buttonContainer:{
    marginTop: 20,
    borderRadius:10

  },
  containerLogo:{
    flex:1,
    alignContent:'center',
  },
  btnSubmit:{
    backgroundColor:'#35aaff',
    width: "90%",
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 7
  },
  SubmitText:{
    color:'#fff',
    fontSize: 18
  },
  btnRegistrar:{
    marginTop:10
  },
  TextRegistrar:{
    color:'#fff'
  }
})
export default App;