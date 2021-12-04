import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect,useMemo} from 'react';
import { StyleSheet, ActivityIndicator, View ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

import HomeScreen from './pages/Home/HomeScreen';
import SettingScreen from './pages/Setting/SettingScreen';
import ExploreScreen from './pages/Explore/ExploreScreen';
import LoginScreen from './pages/Login/LoginScreen';
import OtpScreen from './pages/Login/OtpScreen';
import {AuthContext} from './Context'

export default function App() {
  // const [isSignIn , setIsSignIn ]=useState(false);

  
  const [isLoading, setIsLoading] = useState(true)
  const [userToken, setUserToken] = useState(null)
  
  const initialLoginState = {
    isLoading:false,
    userNumber:null,
    userToken:null,
  }
  const [loginState, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            userNumber:action.id,
            userToken: action.token,
            isLoading:false
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            userNumber:null,
            isLoading:false,
            userToken: null,
          };
      }
    },
    initialLoginState
  );


  const authContext = useMemo(
    () => ({
      signIn: async (number , otp) => {
        let userToken;
        userToken = null;
        if(number == '9630403997' && otp==='1234'){
          try{
            userToken = 'database'
            await AsyncStorage.setItem('userToken', userToken)
          }catch(e){
            console.log(e);
          }
        }
        dispatch({ type: 'SIGN_IN', id:number,token: userToken });
      },
      signOut:async () =>{
        try{
          await AsyncStorage.removeItem('userToken')
        }catch(e){
          console.log(e);
        }
        dispatch({ type: 'SIGN_OUT' })
      } ,
      signUp: async (number , otp) => {
        let userToken;
        userToken = null;
        if(number == '9630403997' && otp==='1234'){
          try{
            userToken = 'database'
            await AsyncStorage.setItem('userToken', userToken)
          }catch(e){
            console.log(e);
          }
        }
        dispatch({ type: 'SIGN_UP', id:number,token: userToken });
      },
    }),[]
  );


  useEffect(() => {
    setTimeout(async()=>{
      let userToken;
      userToken = null;
      try{
        userToken = await AsyncStorage.getItem('userToken', userToken)
      }catch(e){
        console.log(e);
      }
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    },100)
  
}, [])

  if(loginState.isLoading){
    return(
      <View style={styles.container}>
        <ActivityIndicator size={'large'}/>
      </View>
    )
  }

  return (
    <AuthContext.Provider value={authContext}> 
        <NavigationContainer>
          {
            loginState.userToken === null  ? (
              <Stack.Navigator initialRouteName="Login"
              screenOptions={ ({ route }) => ({
                headerStyle: {
                  backgroundColor:'#16161d',
                },
                headerTintColor: '#fff',
                headerTitleStyel:{
                  fontWeight:"bold",
                },
              })}
           >
             <Stack.Screen name="Login" component={LoginScreen}  screenOptions={{headerShown: false}} />
             <Stack.Screen name="Otp" component={OtpScreen} />
           </Stack.Navigator>
            )
            :
            (
              <Tab.Navigator
                initialRouteName="Home"
                screenOptions={ ({ route }) => ({
                  headerStyle: {
                    backgroundColor:'#16161d',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyel:{
                    fontWeight:"bold",
                  },
                  tabBarStyle: { backgroundColor: '#16161d' },
                  tabBarIcon: ({ focused, color, size }) => {
                  
                    if (route.name === 'Home') {
                      return <SimpleLineIcons name="home" size={24} color="white" />
                    } else if (route.name === 'Explore') {
                      return <Ionicons name="ios-game-controller-outline" size={24} color="white" />
                    } else if (route.name === 'Settings') {
                      return <FontAwesome name="money" size={24} color="white" />
                    }
                  
                  },
                })}
                > 
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Explore" component={ExploreScreen} />
                <Tab.Screen name="Settings" component={SettingScreen}   />
              </Tab.Navigator>
            )
          }
        </NavigationContainer>
    </AuthContext.Provider> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
