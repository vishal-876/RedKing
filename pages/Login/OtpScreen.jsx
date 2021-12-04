import React, { useState,useContext,useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput,Snackbar } from 'react-native-paper';
import { AuthContext } from "../../Context";

export default function OtpScreen({navigation,route}) {
  const [number, setNumber] = useState('');
  const [otp, setOtp] = useState('')
  const [visible, setVisible] = useState(false);
  const {signIn} = useContext(AuthContext)
  useEffect(() => {
    setNumber(route.params.mobileNum)
  }, [])
  const onPressButton = (num,otpEnter) =>{
    if(otpEnter){
      signIn(num,otpEnter);
    }else{
      setVisible(!visible);
    }
  }

  const onDismissSnackBar = () => setVisible(false);
  return (
    <View style={styles.container}>
      <View style={styles.main}>
          <View style={styles.headTxtContainer} >
            <Text style={styles.headTxt}>Verification OTP sent at
                 +91-{number}
            </Text>
          </View>
          <View style={styles.countContainer}>
            <TextInput
              style={styles.input}
              activeUnderlineColor={"powderblue "}
              onChangeText={(e)=>setOtp(e)}
              value={otp}
              placeholder="Enter Otp"
              keyboardType="numeric"
              maxLength={4}
            />
          </View>
          <View style={styles.btnBox}>
            <TouchableOpacity
            style={styles.buttonContainer}
            onPress={()=>onPressButton(number,otp)}
            disabled={visible}
            >
            <Text style={styles.txt}>Enter</Text>
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
  headTxtContainer:{
    width:"100%",
    height:60,
    backgroundColor:'#16161d',
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:20
  },
  headTxt:{
    color:'#d8ffdb',
    fontSize:18,
    fontWeight:'bold',
    paddingBottom:'2px',
    textAlign:'center'
  },
  main:{
    width:'100%',
    justifyContent: "center",
    alignItems:'center',
  },
  txt:{
    fontSize:18,
    color: "#d8ffdb",
    fontWeight: "600",
    alignItems:'center'
  },
  btnBox:{
    width:'60%',
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
    borderRadius:30,
    backgroundColor: "#16161d",
  },
  });