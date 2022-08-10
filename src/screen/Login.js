import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions, Image, TextInput } from 'react-native';

const Login = ({ navigation }) => {
    const login = () => {
        navigation.navigate('Registro');
    }
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.containerImage}>
                    <Image
                        style={styles.image}
                        source={require('../assets/iniciarSesion.png')}
                    />
                </View>
                <Text style={styles.title}>Iniciar Sesión</Text>
                <View style={styles.separador}>
                    <Text style={styles.label}>Usuario:</Text>
                    <TextInput style={styles.input}
                        keyboardType='default'
                        textAlign='center'
                    />
                </View>
                <View style={styles.separador}>
                    <Text style={styles.label}>Contraseña:</Text>
                    <TextInput style={styles.input}
                        keyboardType='visible-password'
                        textAlign='center'
                    />
                </View>
                <View style={styles.containerLogin}>
                    <TouchableOpacity onPress={login} style={styles.buttonLogin}>
                        <Text style={{ textTransform: 'uppercase', fontSize: 23, textAlign:'center', color: '#FFF' }}>Iniciar</Text>
                    </TouchableOpacity>
                </View>

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
        backgroundColor: '#fff',
        flexDirection: 'column',
        borderRadius: 5,
        paddingLeft: 10,
        margin: 10,
        width: Dimensions.get('window').width - 20,
        height: Dimensions.get('window').height - 40,
        padding: 10,
        top: 10,
        alignContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: '500',
        textTransform: 'uppercase',
        bottom: 30
    },
    image: {
        width: 100,
        height: 100,
    },
    containerImage: {
        alignItems: 'center',
        marginVertical: 70
    },
    buttonLogin: {
        backgroundColor: '#5D6D7E',
        width: 150,
        height: 50,
        borderRadius: 5,
        margin: 10,
        padding: 10,
        alignItems: 'center'
    },
    containerLogin: {
        alignItems: 'center',
        flexDirection: 'column-reverse',
        flex: 2,
        marginVertical:80,
    },
    label: {
        fontSize: 25,
        fontWeight: '700',
        textAlign: 'left',
        bottom: 10
    },
    input: {
        backgroundColor: '#154360',
        borderRadius: 5,
        borderColor: '#000',
        height: 45,
        width: Dimensions.get('window').width - 40,
        color: '#FFF',
        fontSize: 20,
        justifyContent: 'center'
    },
    separador: {
        paddingVertical: 10
    },
})
export default Login;
