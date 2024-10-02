import { StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { Button, Input } from '@rneui/themed'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/track/locationContext'
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {
    const locationContext = useContext(LocationContext);
    const {state, changeTrackName, startRecording, stopRecording} = locationContext;

    const [saveTrack] = useSaveTrack();

    return (
    <>
        <Spacer>
            <Input
                value={state.trackName}
                onChangeText={changeTrackName}
                placeholder='Track name'
            />
            {
              state.recording ?  
                <Button title="Stop" onPress={stopRecording} />
                 : <Button title="Start" onPress={startRecording} />
            }
        </Spacer>
        <Spacer>
           {
            !state.recording && state.locations.length ?  
              <Button title="Save Track" onPress={saveTrack} /> 
              : null
           }
        </Spacer>
    </>
  )
}

export default TrackForm

const styles = StyleSheet.create({})