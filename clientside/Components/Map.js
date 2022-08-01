import React, { Component, useState } from 'react'
import {View, StyleSheet} from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import Api_handler from './Api_handler';

const styles  = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 700,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
});

// const [region,setRegion] = useState({
//     latitude:51.5079145,
//     longitude:-0.0899163,
//     latitudeDelta:0.01,
//     longitudeDelta: 0.01,
// });

export default class Map extends Component{
    constructor(props) {
        super(props);
        this.state={};
    }
    render(){

        return(
            <View style = {styles.container}>
                <MapView provider={PROVIDER_GOOGLE}
                style={styles.map}
                zoomEnabled={true}
                showsUserLocation
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                  }}
                // region={{
                //     latitude: 42.882004,
                //     longitude: 74.582748,
                //     latitudeDelta: 0.0922,
                //     longitudeDelta: 0.0421,
                // }}
                // onRegionChangeComplete={(region)=setRegion(region)}
                >
                </MapView>
            </View>
        );
    }
}