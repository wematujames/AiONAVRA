import { SafeAreaView, StyleSheet } from 'react-native'
import React, { useCallback, useContext } from 'react'
import { Text } from '@rneui/themed'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/track/locationContext'
import useLocation from '../hooks/useLocation'
import { useIsFocused } from '@react-navigation/native'
import TrackForm from '../components/TrackForm'
const CreateTrackScreen = () => {
  const locationContext = useContext(LocationContext);

  const {addLocation, state} = locationContext;
 
  const isFocused = useIsFocused();
  
  const callback = useCallback((loc) => {
    addLocation(loc, state.recording) 
  }, [state.recording]);

  const [err] = useLocation(isFocused || state.recording, callback);

  return (
    <SafeAreaView>
      {err && <Text>Please allow location permission</Text>}
      <Text h2>Create a Track</Text>
      <Map />
      <TrackForm />
    </SafeAreaView>
  )
}

export default CreateTrackScreen

const styles = StyleSheet.create({})