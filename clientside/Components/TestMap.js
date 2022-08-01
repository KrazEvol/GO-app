import MapView, { Marker } from "react-native-maps";
import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'
function TestMap() {
    const region = {
        latitude: 37.78,
        longitude: -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    return <MapView style={styles.map} initialRegion={region}></MapView>
}


export default TestMap; 


const styles  = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 700,
        width: 400,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});