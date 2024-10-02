import { SafeAreaView, StyleSheet } from 'react-native'
import { useContext, useEffect, useLayoutEffect } from 'react'
import { Context as AuthContext } from "../context/auth/authContext"
import { useNavigation } from '@react-navigation/native'
import { Button } from '@rneui/themed'

const SelectUserTypeScreen = ({navigation}) => {
    const authContext = useContext(AuthContext);

    const { tryLogin } = authContext;

    const _navigation = useNavigation();
    
    useLayoutEffect(() => {
        _navigation.setOptions({
            header: () => null
        });
    });

    useEffect(() => {
        // tryLogin();
    }, []);

    //Lets check to see if user type is a visitor, admin, employee

  return (
    <SafeAreaView>
        <Button title="Visitor" onPress={() => navigation.navigate("Visitor")} />
        <Button title="Employee" onPress={() => navigation.navigate("Employee")}/>
        <Button title="Administrator" onPress={() => navigation.navigate("Admin")}/>
    </SafeAreaView>
    )
}

export default SelectUserTypeScreen

const styles = StyleSheet.create({

});