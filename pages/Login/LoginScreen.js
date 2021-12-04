import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput,Snackbar } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

export default function LoginScreen({navigation}) {
  const [number, setNumber] = useState('');
  
  const [visible, setVisible] = useState(false);

  const onPress = () =>{
    const regexExp = /^[6-9]\d{9}$/gi;
    if(regexExp.test(number)){
      navigation.navigate('Otp',{mobileNum:number})
    }else{
      setVisible(!visible);
    }
  }

  const onDismissSnackBar = () => setVisible(false);
  return (
    <View style={styles.container}>
      <View style={styles.main}>
      <View style={styles.countContainer}>
        <FontAwesome name="phone-square" size={35} color="black" />
        <TextInput
          style={styles.input}
          underlineColor={"white"}
          activeUnderlineColor={"powderblue "}
          onChangeText={(e)=>setNumber(e)}
          value={number}
          placeholder="Enter Your Number"
          keyboardType="numeric"
          minLength={10}
          maxLength={10}
        />
      </View>
      <View style={styles.btnBox}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={onPress}
        disabled={visible}
      >
        <Text style={styles.txt}>LOGIN</Text>
      </TouchableOpacity>
      </View>
      </View>
      
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Clear',
          onPress: () => {
            setNumber('')
          },
        }}>
        Invalid Number
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:'center',
    paddingHorizontal: 10
  },
  main:{
    width:'100%',
    justifyContent: "center",
    alignItems:'center',
  },
  txt:{
    fontSize:18,
    color: "#ebffea",
    fontWeight: "600",
    alignItems:'center'
  },
  btnBox:{
    width:'100%',
    alignItems:'center',
  },
  countContainer:{
    height:40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:'50%',
    borderRadius:30,
    flexDirection:'row',
  },
  input: {
    height: 40,
    margin: 15,
    borderRadius:15,
    padding: 10,
    width:'100%',
    fontSize:18,
    textAlign:'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:'80%',
    borderRadius:10,
    backgroundColor: "#16161d",
  },
  });