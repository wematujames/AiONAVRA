import { SafeAreaView, StyleSheet } from 'react-native'
import { useContext, useEffect, useLayoutEffect } from 'react'
import { Context as AuthContext } from "../context/auth/authContext"
import { useNavigation } from '@react-navigation/native'
import { Text } from 'react-native-paper'

const SplashScreen = () => {
    const authContext = useContext(AuthContext);

    const { tryLogin } = authContext;

    const _navigation = useNavigation();
    
    useLayoutEffect(() => {
        _navigation.setOptions({
            header: () => null
        });
    });

    useEffect(() => {
        tryLogin();
    }, []);

    //Lets check to see if user type is a visitor, admin, employee

  return (
    <SafeAreaView>
        <Text> Splash screen </Text>
    </SafeAreaView>
    )
}

export default SplashScreen

const styles = StyleSheet.create({

});