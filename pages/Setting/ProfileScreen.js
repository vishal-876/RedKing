import React ,{useState,useContext, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
  } from 'react-native';
import { AuthContext } from '../../Context';

export default  function ProfileScreen() {
  
  const [mobile, setMobile] = useState('+91 9636963696')
  const [location, setLocation] = useState('Indore')
  const [name, setName] = useState('Your Name')
  const {signOut} = useContext(AuthContext)
  useEffect(() => {
    let mounted = true
    if (mounted) {
      setName("vishal")
    }
    return function cleanup() {
        mounted = false
    }
  }, [])
  
  const handleSignOut = () =>{
    signOut()
  }
  return (
     <View style={styles.container}>
        <View style={styles.box}>
            <View style={styles.img}>
                <Image style={styles.avatar} source={require('../../assets/Images/ProfileImg.png')}/>
            </View>
            <View style={styles.body}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.info}>{mobile} / {location}</Text>
                <View style={styles.btnBox}>
                    <TouchableOpacity onPress={()=>handleSignOut()} style={styles.buttonContainer}>
                      <Text style={styles.txt}>Sign Out</Text>  
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        marginTop:10,
        alignSelf:'center'
    },
    box:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    btnBox:{
        width:'100%',
        alignItems:'center',
        paddingHorizontal:10,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
    },
    body:{
      marginTop:30,
      alignItems: 'center',
      justifyContent:'center'
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
    txt:{
        fontSize:18,
        color: "#ebffea",
        fontWeight: "600",
        alignItems:'center'
      },
    info:{
      fontSize:16,
      color: "#00BFFF",
      marginTop:10
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:'80%',
      borderRadius:30,
      backgroundColor: "#16161d",
    },
  });