import { StyleSheet } from 'react-native'
import { useContext, useEffect, useLayoutEffect } from 'react'
import { Context as AuthContext } from "../context/auth/authContext"
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
    const authContext = useContext(AuthContext);

    const { tryLogin} = authContext;

    const _navigation = useNavigation();
    
    useLayoutEffect(() => {
        _navigation.setOptions({
            header: () => null
        });
    });

    useEffect(() => {
        tryLogin();
    }, []);

  return null
}

export default SplashScreen

const styles = StyleSheet.create({

});