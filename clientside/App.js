/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { StyleSheet, Text, View } from 'react-native';
 import Map from './Components/Map';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import SearchBar23 from './Components/SearchBar23';
 import Marker from './Components/Marker';
 import TestMap from './Components/TestMap';
 //import TestMap from './Components/TestMap'


 
 export default class App extends React.Component{
   render(){
     return(
       <View>
        <Map></Map>
        <SearchBar23></SearchBar23>
       </View>

     );
   }
 }