import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.page}>
      <View style={styles.head}> 
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
      <Image source={require('../assets/images/profile.jpg')}  
      style={{width:50, height:50, borderRadius:80}}
      /> 
      </TouchableOpacity>
      <Ionicons name ="md-notifications-outline" size ={40}/> 
      </View>
      <View style={styles.home}><Text style={{fontSize:35,fontWeight:'bold'}}>Home</Text></View>
      <View style={{height:140, borderTopWidth:3, borderBottomWidth:3,borderColor:'#fafafa'}}>
      <ScrollView 
      horizontal = {true} >
        <View><Image source={require('../assets/images/profile.jpg')} style={{width:140, height:140, borderRadius:140}}  /></View>
        <View><Image source={require('../assets/images/profile.jpg')}  style={{width:140, height:140, borderRadius:140}}/></View>
        <View><Image source={require('../assets/images/profile.jpg')} style={{width:140, height:140, borderRadius:140}} /></View>
        <View><Image source={require('../assets/images/profile.jpg')} style={{width:140, height:140, borderRadius:140}} /></View>
        <View><Image source={require('../assets/images/profile.jpg')} style={{width:140, height:140, borderRadius:140}} /></View>
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page:{
    padding:10,
    flex:1,
    backgroundColor:'white'
  },
  head:{
    height:20,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row'
  },
  home:{
    flexDirection:'row',
    justifyContent:'flex-start',
    paddingVertical:20,
    borderEndColor:'black'
  }

})
