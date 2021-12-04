import * as React from 'react';
import { Text, View,StyleSheet, FlatList } from 'react-native';


export default function ResultScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headTxtContainer} >
        <Text style={styles.headTxt}>Results</Text>
      </View>
      <View style={styles.contentContainer}>
        <FlatList 
          data={[
            {key:'Green colour open at 1:00 AM '},
            {key:'Red colour open at 3:00 PM'},
            {key:'Blue colour open at 5:00 PM'},

          ]}
          renderItem={({item}) => <Text style={styles.items}>{item.key}</Text>}
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
  },
  headTxtContainer:{
    width:"45%",
    backgroundColor:'#16161d',
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center',
  },
  headTxt:{
    color:'#d8ffdb',
    fontSize:28,
    fontWeight:'bold',
    paddingBottom:'2px',
    textAlign:'center'
  },
  contentContainer:{
    width:"90%",
    backgroundColor:'#16161d',
    borderRadius:30,
    justifyContent:'space-around',
    alignItems:'center',
    marginTop:20
  },
  items:{
    fontSize:18,
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    color:'#d8ffdb',
    textAlign:'center'
  }
});