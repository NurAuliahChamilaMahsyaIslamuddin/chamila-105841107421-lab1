import { StyleSheet, Text, View, TextInput, Image } from "react-native";
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
        fontFamily:'MetroBold'
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

const App = () => {
  const [fontLoaded, notFound] = useFonts ({
    'MetroBold' : require('./assets/fonts/Metropolis-Bold.otf'),
    'MetroMedium' : require('./assets/fonts/Metropolis-Medium.otf'),
    'MetroLight' : require('./assets/fonts/Metropolis-Light.otf'),
    'MetroSemiBold' : require('./assets/fonts/Metropolis-SemiBold.otf'),
    'MetroBlack' : require('./assets/fonts/Metropolis-Black.otf'),
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
      alignItems:'flex-start'
    }}>
      <Text style={{
        padding:15,
        top:60,
        fontSize:30,
        fontWeight: 'bold',
        fontFamily:'MetroBold'
      }}>Login</Text>
    </View>

  <View style={{
    flex: 1,
    justifyContent: "center",
    alignItems:'center',
    bottom:30

  }}>
  <TextInputCustom name="Email" color="#222222" />
  <TextInputCustom name="Password" color="#222222" />
  </View>

  <View style={{
    flex:1,
    right:24,
    alignSelf:'flex-end',
    bottom:30
  }}>
    <Text style={{
      fontFamily:'MetroMedium'
    }}>Forgot Password?</Text>
  </View>

<View style={{
  justifyContent:'flex-end',
  alignItems:'center',
  width:'100%',
  height:50,
  bottom:180
 }}>
  <ButtonCustom color="red" text="LOGIN" />
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
    <Image source={require('./assets/img/google.png')}
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
    <Image source={require('./assets/img/facebook.png')}
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

export default App