import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import React from "react";

const TextInputCustom = ({ name, color}) => {
  return (
      <TextInput
      placeholder={` ${name}`}
      style={{
        height: 64,
        width: 344,
        bordeColor: "gray",
        borderWidth: 0.2,
        marginBottom: 10,
        paddingLeft: 10,
        color: color,
      }}
      />
  )
}

const ButtonCustom = ({color, text}) => {
  return (
    <View style={{
      flex:1,
      width:'90%',
      borderRadius:20,
      backgroundColor:color,
      justifyContent:'center'
    }}>
      <Text style={{
        textAlign:'center',
        fontSize:15,
        color:'white',
      }}>{text}
      </Text>
    </View>
  )
}

const App = () => {
return (
  <View style={{
    flex:1, backgroundColor:'#F5F5F5',
  }}>

    <View style={{
      flex:1,
      justifyContent:'flex-start',
      alignItems:'flex-start'
    }}>
      <Text style={{
        padding:15,
        top:60,
        fontSize:30,
        fontWeight: 'bold'
      }}>Forgot Password</Text>
    </View>

    <View style={{
      bottom:140,
      alignSelf:'center',
      paddingHorizontal:16
    }}>
      <Text>Please, enter your email address. You will receive a link to create a new password via email.</Text>
    </View>

  <View style={{
    flex: 1,
    justifyContent: "center",
    alignItems:'center',
    bottom:220
  }}>
  <TextInputCustom name="Email" color="#222222" />
  </View>

<View style={{
  justifyContent:'flex-end',
  alignItems:'center',
  width:'100%',
  height:50,
  bottom:280
 }}>
  <ButtonCustom color="red" text="SEND" />
 </View>

  </View>
)
}

export default App