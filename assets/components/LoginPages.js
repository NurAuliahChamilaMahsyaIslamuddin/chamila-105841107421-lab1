import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useFonts } from "expo-font";


const TextInputCustom = ({ name, color}) => {
  return (
      <TextInput
      placeholder={` ${name}`}
      style={{
        height: 40,
        width: '90%',
        bordeColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        borderRadius: 20,
        color: color,
        fontFamily:'MetroSemiBold'
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
        fontFamily:'MetroMedium'
      }}>{text}
      </Text>
    </View>
  )
}

const LoginPages = ({navigation}) => {
  const [fontLoaded, notFound] = useFonts ({
    'MetroBold' : require('../fonts/Metropolis-Bold.otf'),
    'MetroMedium' : require('../fonts/Metropolis-Medium.otf'),
    'MetroLight' : require('../fonts/Metropolis-Light.otf'),
    'MetroSemiBold' : require('../fonts/Metropolis-SemiBold.otf'),
    'MetroBlack' : require('../fonts/Metropolis-Black.otf'),
  })
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
        padding:30,
        top:8,
        fontSize:30,
        fontWeight: 'bold',
        fontFamily:'MetroBold'
      }}>Login</Text>
    </View>

  <View style={{
    flex: 1,
    justifyContent: "center",
    alignItems:'center',
    bottom:30,

  }}>
  <TextInputCustom name="Email" color="#222222" />
  <TextInputCustom name="Password" color="#222222" />
  </View>

<TouchableOpacity style={{
  flex: 1,
  alignSelf: 'flex-end',
  buttom:  50,
  right: 20,
}}onPress={() => navigation.navigate('Forgot')}>
  <Text Style={{
      color: '#222222',
      fontSize: 15,
      buttom: 50,
      right: 12,
      fontFamily: "metroMedium"
    }}>Forgot Password ?</Text>
</TouchableOpacity>

<View style={{
  justifyContent:'flex-end',
  alignItems:'center',
  width:'100%',
  height:50,
  bottom:80,
 }}>
  <ButtonCustom color="red" text="Login" />
 </View>

 <View style={{
  justifyContent:'flex-end',
  alignItems:'center',
  bottom:50
 }}>
  <Text style={{
    fontFamily:'MetroLight'
  }}>Or sign up with social account</Text>
 </View>

 <View style={{
  flexDirection:'row',
  alignSelf:'center',
  columnGap:20,
  bottom:35
 }}>

  <View style={{
    backgroundColor:'white',
    borderRadius:10,
    padding:10,
  }}>
    <Image source={require('../img/google.png')}
    style={{
      width:30,
      height:30,
      resizeMode:'contain'
    }}
      />
  </View>
  <View style={{
    backgroundColor:'white',
    borderRadius:10,
    padding:10,
  }}>
    <Image source={require('../img/facebook.png')}
    style={{
      width:30,
      height:30,
      resizeMode:'contain'
    }}
      />
  </View>
 </View>
  </View>
)
}

export default LoginPages;