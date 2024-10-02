import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Spacer from './Spacer'
import { Text } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const LinkInfo = ({title, to}) => {
  const navigation = useNavigation();
  
  return (
    <Spacer>
        <TouchableOpacity onPress={() => navigation.navigate(to)}>
            <Text style={styles.navLink}>{title}</Text>
        </TouchableOpacity>
    </Spacer>
  )
}

export default LinkInfo

const styles = StyleSheet.create({
    navLink: {
        color: "blue"
    }
})