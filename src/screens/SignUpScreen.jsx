import { StyleSheet } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import { Context as AuthContext } from "../context/auth/authContext"
import AuthForm from '../components/AuthForm'
import { useNavigation } from '@react-navigation/native'
import LinkInfo from '../components/LinkInfo'

const SignUpScreen = ({navigation}) => {
    const authContext = useContext(AuthContext);

    const { signUp, state, tryLogin} = authContext;

    const _navigation = useNavigation();
    
    useLayoutEffect(() => {
        _navigation.setOptions({
            header: () => null
        });
    });

  return (
    <>
        <AuthForm 
            formTitle="Sign Up for Tracker"
            submitAction={signUp} 
            errMsg={state.errMsg} 
            link={
                <LinkInfo to="SignIn" title="Aleady have an account ? Sign In" />
            }
        />
    </>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({

});