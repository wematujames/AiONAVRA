import { FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { Context as TrackContext } from '../context/track/trackContext'
import { ListItem } from '@rneui/themed'

const TrackListScreen = ({navigation}) => {
  const isFocused = useIsFocused()

  const {getTracks, state} = useContext(TrackContext)

  console.log("state", state.tracks.map(t=> t.name))

  useEffect(() => {
    getTracks()
  }, [isFocused]);

  return (
    <>
       <FlatList 
        keyExtractor={i => i._id}
        data={state.tracks}
        renderItem={({item}) => {
          return <TouchableOpacity onPress={() => navigation.navigate("TrackDetail", item)}>
            <ListItem bottomDivider chevron title={item.name} >
              <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron/>
            </ListItem>
          </TouchableOpacity>
        }}
       />
    </>
  )
}

export default TrackListScreen

const styles = StyleSheet.create({
 
})