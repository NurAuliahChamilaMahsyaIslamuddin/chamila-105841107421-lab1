import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from "react";


const TextInputCustom = ({name, color}) => {
    return (
            <TextInput placeholder={`${name}`}
            style={{
                width:'90%',
                height: 40,
                borderWidth: 1,
                borderColor: color,
                paddingLeft: 10,
                marginBottom: 10,
                margin: 10,
            }}
            />
        )
    }
    const ButtonCustom = ({text, color}) => {
        return (
            <View style={{
                width:'90%',
                height: 40,
                backgroundColor: color,
                justifyContent: "center",
                borderRadius: 20,
                marginLeft: 10,
                alignSelf: "center",
                alignItems: "center",
                marginBottom: 10,
            }}>
                <Text style={{
                    textAlign: "flex-start",
                    color: "white",
                    fontSize: 14,
                    fontWeight:'bold'
                }}>
                    {text}
                </Text>
            </View>
        )
    }
    
    const LoginPage = () => {
    return (
        <View style={{
            flex:1,
            backgroundColor:'#F5F5F5'

        }}>
        <View>
            <Text style={{
                fontSize: 34,
                fontWeight:'bold',
                marginBottom: 10,
                marginTop: 70,
                marginLeft: 10,
                left:10,
                bottom:30
            }}>
                Login
            </Text>
            <View style={{
                flex:1,
                justifyContent:'center',
                width:'100%',
                alignItems:'center',
                alignSelf:'center'
            }}>
            <TextInputCustom name="Username" color="black" />
            <TextInputCustom name="Password" color="black" />

            </View>
            <Text style={{
                fontSize: 12,
                marginTop: 20,
                marginRight:30,
                marginBottom: 40,
                alignSelf: "flex-end",
            }}>
                Forgot your Password?
            </Text>
            <View style={{
                alignSelf:'center',
                alignItems:'center',
                width:'100%'
            }}>
            <ButtonCustom text="Login" color="red" />

            </View>
            <Text style={{
                marginTop: 70,
                textAlign: "center",
            }}>
                Or Sign Up With Social account
            </Text>
            <View style={{
                flexDirection: "row",
                marginTop: 20,
                justifyContent: "flex-end",
                marginHorizontal: 8,
                alignSelf:'center'
            }}>
                <Image source={require('./assets/img/google.png')} 
                style={{
                    width: 30,
                    height: 30,
                    borderRadius: 10,
                    marginRight: 20,
                }}/>
                
                <Image source={require('./assets/img/facebook.png')}
                style={{
                    width: 30, 
                    height: 30,
                    borderRadius: 10,
                marginRight: 20
            }}>
            </Image>
            </View>
        </View>
        </View>
    )
}

export default LoginPage;