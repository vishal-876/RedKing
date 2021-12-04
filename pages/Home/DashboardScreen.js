import * as React from 'react';
import { Text,Image, View ,StyleSheet} from 'react-native';


export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.headerTxt}>Music</Text>
      </View> */}
      <View style={styles.imgContainer}>
        <Image 
          style={styles.tinyLogo}
          source={require('../../assets/Images/Aces.jpg')}
        />
        <Image 
          style={styles.tinyLogo}
          source={require('../../assets/Images/Aces.jpg')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:'10%'
  },
  imgContainer:{
    width:'100%',
    height:'100%',
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
  tinyLogo:{
    width: "100%",
    height: '33%',
    borderRadius:10
  },
  header:{
    width:'100%',
    flexDirection:'row',
    marginTop:'5%'
  },
  headerTxt:{
    fontSize:18,
    fontWeight:'bold'
  },
})