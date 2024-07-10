import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

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
        fontFamily:'MetroMedium'
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
        fontFamily:'MetroBold'
      }}>{text}
      </Text>
    </View>
  )
}

const App = () => {
  const [fontLoaded, notFound] = useFonts ({
    'MetroBold' : require('../fonts/Metropolis-Bold.otf'),
    'MetroMedium' : require('../fonts/Metropolis-Medium.otf'),
    'MetroLight' : require('../fonts/Metropolis-Light.otf'),
    'MetroSemiBold' : require('../fonts/Metropolis-SemiBold.otf'),
    'MetroBlack' : require('../fonts/Metropolis-Black.otf'),
  })
  if(!fontLoaded) return <View>
      <Text>Font tidak ditemukan</Text>
    </View>
return (
  <View style={{
    flex:1, backgroundColor:'#F5F5F5',
  }}>

    <View style={{
      flex:1,
      justifyContent:'flex-start',
      alignItems:'flex-start',
      fontFamily:'MetroLight'
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
      <Text style={{
        fontFamily:'MetroMedium'
      }}>Please, enter your email address. You will receive a link to create a new password via email.</Text>
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