import { StyleSheet } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import { Context as AuthContext } from "../context/auth/authContext"
import AuthForm from '../components/AuthForm'
import { useNavigation } from '@react-navigation/native'
import LinkInfo from '../components/LinkInfo'

const SignInScreen = ({ navigation }) => {
    const authContext = useContext(AuthContext);

    const { signIn, state } = authContext;

    const _navigation = useNavigation();
    
    useLayoutEffect(() => {
        _navigation.setOptions({
            header: () => null
        });
    });

  return (
    <AuthForm 
        formTitle="Sign In to Tracker"
        submitAction={signIn} 
        errMsg={state.errMsg} 
        link={<LinkInfo to="SignUp" title="Don't have an account ? Sign Up" />}
    />
  )
}

export default SignInScreen

const styles = StyleSheet.create({

});