import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput,Snackbar } from 'react-native-paper';

export const Homescreen = ({navigation}) => {
  const [number, setNumber] = useState('');
  
  const [visible, setVisible] = useState(false);

  const onPress = () =>{
    const regexExp = /^[6-9]\d{9}$/gi;
    if(regexExp.test(number)){
      navigation.navigate('Otp')
    }else{
      setVisible(!visible);
    }
  }

  const onDismissSnackBar = () => setVisible(false);
  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <TextInput
          style={styles.input}
          underlineColor={"gray"}
          activeUnderlineColor={"powderblue "}
          onChangeText={(e)=>setNumber(e)}
          value={number}
          placeholder="Enter Your Number"
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        disabled={visible}
      >
        <Text>Click Here</Text>
      </TouchableOpacity>
      
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
  button: {
    alignItems: "center",
    backgroundColor: "#7FF6FF",
    padding: 10,
    height:45,
    width:'80%',
    borderRadius:15
   },
  input: {
    height: 40,
    margin: 15,
    borderRadius:15,
    padding: 10,
    width:'100%'
  },
  });