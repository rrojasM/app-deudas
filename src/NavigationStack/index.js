import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListaDeuda from '../screen/ListaDeuda';
import Registro from '../screen/Registro';

const Stack = createNativeStackNavigator();
const Index = () => {
    return (
        <>

            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='Registro'
                >
                    <Stack.Screen name='Registro' component={Registro} options={{ headerShown: false }} />
                    <Stack.Screen name='Listado' component={ListaDeuda} />
                </Stack.Navigator>
            </NavigationContainer>

        </>
    )
}

export default Index