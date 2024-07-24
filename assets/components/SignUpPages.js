import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

const TextInputCustom = ({ name, color}) => {
  return (
      <TextInput
      placeholder={` ${name}`}
      style={{
        height: 65,
        width: '90%',
        borderColor: 'gray',
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
        shadowRadius: 1,
        borderRadius: 20,
        color: color,
        fontFamily: 'MetroMedium'
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

const SignUpPages = ({navigation}) => {
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
      alignItems:'flex-start',
      top: 2
    }}>
      <Text style={{
        marginTop: 15,
        fontSize:34,
        left: 15,
        fontWeight: 'bold',
        fontFamily:'MetroBold'
      }}>Sign Up</Text>
    </View>

  <View style={{
    flex: 1,
    justifyContent: "center",
    alignItems:'center',
    bottom:30

  }}>
  <TextInputCustom name="Name" color="#222222" />
  <TextInputCustom name="Email" color="#222222" />
  <TextInputCustom name="Password" color="#222222" />
  </View>

  <TouchableOpacity  style={{
    flex: 1,
    alignSelf: 'flex-end',
    buttom: 20,
    right: 20,
  }}onPress={() => navigation.navigate('Login')}>
    <Text Style={{
      color: '#222222',
      fontSize: 15,
      buttom: 35,
      fontFamily: "metroMedium"
    }}>Already have an account?</Text>
    </TouchableOpacity>
<View style={{
  justifyContent:'flex-end',
  alignItems:'center',
  width:'100%',
  height:50,
  bottom:80,
  
 }}>
  <ButtonCustom color="red" text="SIGN UP" />
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

export default SignUpPages;
