import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListaDeuda from '../screen/ListaDeuda';
import Registro from '../screen/Registro';
import Login from '../screen/Login';

const Stack = createNativeStackNavigator();
const Index = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='Login'
                    screenOptions={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#04244B'
                        },
                        headerTintColor: '#FFF',
                        headerTitleStyle: {
                            fontWeight: 'bold'
                        }
                    }}
                >
                    <Stack.Screen name='Registro' component={Registro} options={{ headerShown: false }} />
                    <Stack.Screen name='Listado' component={ListaDeuda} options={{headerTitle:'Listado'}} />
                    <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Index