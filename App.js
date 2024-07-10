import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPages from '././assets/components/LoginPages';
import SignUpPages from './assets/components/SignUpPages';
import ForgotPasswordPages from './assets/components/ForgotPasswordPages';

function HomeScreen({navigation}) {
    return (
        <View style={{ flex:1, alignItems: "center", justifyContent: "center"}}>
            <Text>Home Screen</Text>
            <Button title='Ke Halaman SignUp' onPress={() => navigation.navigate('SignUp')} />
                
        </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='SignUp' component={SignUpPages} />
                <Stack.Screen name='Login' component={LoginPages} />
                <Stack.Screen name='Forgot' component={ForgotPasswordPages} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;