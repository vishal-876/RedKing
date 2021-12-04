import React ,{useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
  } from 'react-native';

export default  function MoneySrceen() {
  const [amount, setAmount] = useState(1000)
  return (
    <View style={styles.container}>
        <View style={styles.box} >
            <View>
                  <Text style={styles.txt}>{amount}</Text>
            </View>
            <View style={styles.btnBox}>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={{fontWeight:'bold',color:'#ebffea',fontSize:18}}>ADD</Text>  
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={{fontWeight:'bold',color:'#ebffea',fontSize:18}}>WITHDRAW</Text>  
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
    box:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent:"center",
    },
    txt:{
      fontSize:50,
      color: "#696969",
      fontWeight: "600"
    },
    btnBox:{
        width:'100%',
        alignItems:'center',
        justifyContent: 'space-around',
        flexDirection:'row',
        paddingHorizontal:10,
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      marginBottom:20,
      width:'40%',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:10,
      backgroundColor: "#16161d",
    },
  });
