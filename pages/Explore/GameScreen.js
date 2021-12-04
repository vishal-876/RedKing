import * as React from 'react';
import { Text, View,StyleSheet, FlatList } from 'react-native';


export default function GameScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headTxtContainer} >
        <Text style={styles.headTxt}>Game Rules</Text>
      </View>
      <View style={styles.contentContainer}>
        <FlatList 
          data={[
            {key:'Add certain money and apply for Bid with minimun 10 rupees'},
            {key:'Click on start game and Randmon colour will be appear on screen'},
            {key:'Count least appeared colour and select that at the end'},
            {key:'You will be rewarded If its correct'}
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
    width:"60%",
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
  },
  contentContainer:{
    width:"90%",
    backgroundColor:'#16161d',
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center',
    marginTop:20
  },
  items:{
    fontSize:18,
    padding:10,
    color:'#d8ffdb',
    textAlign:'center'
  }
});