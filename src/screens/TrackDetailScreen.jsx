import { StyleSheet, View } from 'react-native';
import React from 'react';
import MapView, { Polyline } from 'react-native-maps';
import { Text } from 'react-native-elements';

const TrackDetailScreen = ({route}) => {
  const track = route.params;
  
  return (
    <View>
      <Text h3>{track.name}</Text>
      <MapView 
        style={styles.map}
        initialRegion={{
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
          ...track.locations[0].coords
        }}
      >
        <Polyline coordinates={track.locations.map(l => l.coords)}/>
      </MapView>
    </View>
  )
}

export default TrackDetailScreen

const styles = StyleSheet.create({
   map: {
        height: 300,
    }
})