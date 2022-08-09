import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native';

const Login = ({ navigation }) => {
    const login = () => {
        navigation.navigate('Registro');
    }
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text>Login</Text>
                <TouchableOpacity onPress={login}>
                    <Text>Press Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2E4053',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    box: {
        //marginHorizontal: 50,
        //marginVertical: 50,
        backgroundColor: '#fff',
        flexDirection: 'column',
        borderRadius: 5,
        paddingLeft: 10,
        margin: 10,
        width: Dimensions.get('window').width - 20,
        height: Dimensions.get('window').height - 40,
        padding: 10,
        top: 10
    }
})
export default Login;
