import React from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';

const Registro = ({ navigation }) => {

    const widthWindow = Dimensions.get('window').width;
    const heightWindow = Dimensions.get('window').height;

    const heightScreen = Dimensions.get('screen').height;
    const widthScreen = Dimensions.get('screen').width;

    const sigPage = () => {
        navigation.navigate("Listado")
    }

    //console.log('WINDOW WIDTH', widthWindow, 'WINDOW HEIGHT', heightWindow, 'SCREEN WIDTH', widthScreen, 'SCREEN HEIGHT', heightScreen);

    return (
        <>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.viewIcon}>
                        <Image style={styles.icon} source={require("../assets/dinero.png")} />
                    </View>
                    <View style={styles.box}>
                        <View style={styles.monto}>
                            <View style={styles.separador}>
                                <Text style={styles.label}>Ingrese Monto!</Text>
                                <TextInput style={styles.input}
                                    keyboardType='numeric'
                                    textAlign='center'
                                />
                            </View>

                            <View style={styles.separador}>
                                <Text style={styles.label}>Descripción</Text>
                                <TextInput style={styles.input}
                                    keyboardType='default'
                                    textAlign='center'
                                />
                            </View>

                            <View style={styles.separador}>
                                <TouchableOpacity style={styles.button}
                                    onPress={sigPage}
                                >
                                    <Text style={styles.textButton}>Registrar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View >
                </View>
            </TouchableWithoutFeedback>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9F9 ',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    box: {
        width: Dimensions.get('window').width - 20,
        height: 500,
        margin: 10,
        marginVertical: 150,
        borderRadius: 10,
        alignContent: 'center',
        justifyContent: 'center',
    },
    monto: {
        alignItems: 'center',
        flexDirection: 'column',
        padding: 10,
        backgroundColor: '#FFF',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        bottom: 130
    },
    label: {
        fontSize: 25,
        fontWeight: '700',
        textAlign: 'left',
        color: '#34495E',
    },
    input: {
        backgroundColor: '#154360',
        borderRadius: 5,
        borderColor: '#000',
        height: 45,
        width: Dimensions.get('screen').width - 50,
        top: 10,
        color: '#FFF',
        fontSize: 20,
        justifyContent: 'center'
    },
    separador: {
        paddingVertical: 25
    },
    button: {
        backgroundColor: '#154360',
        width: 200,
        alignItems: 'center',
        borderRadius: 5,
        padding: 10
    },
    textButton: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '700',
        alignItems: 'center',
        textTransform: 'uppercase'
    },
    icon: {
        height: 100,
        width: 100,
        justifyContent: 'center'
    },
    viewIcon: {
        alignItems: 'center',
        borderRadius: 5,
        top: 40
    }
});

export default Registro;
