import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import Spacer from './Spacer';
import { Button, Input, Text, } from '@rneui/themed';

const AuthForm = ({errMsg, submitAction, link, formTitle}) => {
    const [signUp, setSignUp] = useState({
        email: '', password: ''
    });

    const onSumbit = async () => {
        await submitAction(
            signUp.email, 
            signUp.password, 
        )
    }
  return (
    <View style={styles.formContainer}>
        <Spacer>
            <Text h3>{formTitle}</Text>
        </Spacer>
        <Spacer>
        {errMsg && <Text style={styles.errMsg}>{errMsg}</Text>}
        </Spacer>
        <Input
            label="Email" 
            value={signUp.email} 
            onChangeText={(val) => setSignUp(prev => ({...prev, email: val}))} 
            autoCapitalize='none'
            autoCorrect={false}
        />
       <Spacer/>
        <Input
            label="Pasword" 
            value={signUp.password} 
            onChangeText={(val) => setSignUp(prev => ({...prev, password: val}))}
            autoCapitalize='none'
            autoCorrect={false} 
            secureTextEntry
        />
        <Spacer>  
            <Button buttonStyle={{width: "100%"}} title='Sign Up' onPress={onSumbit} />
        </Spacer>

        {link}
    </View> 
  )
}

export default AuthForm

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 200
    },
    errMsg: {
        color: "red"
    },

})