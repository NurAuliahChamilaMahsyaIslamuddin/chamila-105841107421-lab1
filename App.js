// Sign Up
// import { StyleSheet, Text, View, TextInput, Image } from "react-native";
// import React from "react";

// const TextInputCustom = ({ name, color}) => {
//   return (
//       <TextInput
//       placeholder={` ${name}`}
//       style={{
//         height: 64,
//         width: 344,
//         bordeColor: "gray",
//         borderWidth: 0.2,
//         marginBottom: 10,
//         paddingLeft: 10,
//         color: color,
//       }}
//       />
//   )
// }

// const ButtonCustom = ({color, text}) => {
//   return (
//     <View style={{
//       flex:1,
//       width:'90%',
//       borderRadius:20,
//       backgroundColor:color,
//       justifyContent:'center'
//     }}>
//       <Text style={{
//         textAlign:'center',
//         fontSize:15,
//         color:'white',
//       }}>{text}
//       </Text>
//     </View>
//   )
// }

// const App = () => {
// return (
//   <View style={{
//     flex:1, backgroundColor:'#F5F5F5',
//   }}>

//     <View style={{
//       flex:1,
//       justifyContent:'flex-start',
//       alignItems:'flex-start'
//     }}>
//       <Text style={{
//         padding:15,
//         top:60,
//         fontSize:30,
//         fontWeight: 'bold'
//       }}>Sign Up</Text>
//     </View>

//   <View style={{
//     flex: 1,
//     justifyContent: "center",
//     alignItems:'center',
//     bottom:30

//   }}>
//   <TextInputCustom name="Name" color="#222222" />
//   <TextInputCustom name="Email" color="#222222" />
//   <TextInputCustom name="Password" color="#222222" />
//   </View>

//   <View style={{
//     flex:1,
//     right:24,
//     alignSelf:'flex-end',
//     bottom:30
//   }}>
//     <Text>Already have an account?</Text>
//   </View>

// <View style={{
//   justifyContent:'flex-end',
//   alignItems:'center',
//   width:'100%',
//   height:50,
//   bottom:180
//  }}>
//   <ButtonCustom color="red" text="SIGN UP" />
//  </View>

//  <View style={{
//   justifyContent:'flex-end',
//   alignItems:'center',
//   bottom:50
//  }}>
//   <Text>Or sign up with social account</Text>
//  </View>

//  <View style={{
//   flexDirection:'row',
//   alignSelf:'center',
//   columnGap:20,
//   bottom:35
//  }}>

//   <View style={{
//     backgroundColor:'white',
//     borderRadius:10,
//     padding:10,
//   }}>
//     <Image source={require('./assets/img/google.png')}
//     style={{
//       width:30,
//       height:30,
//       resizeMode:'contain'
//     }}
//       />
//   </View>
//   <View style={{
//     backgroundColor:'white',
//     borderRadius:10,
//     padding:10,
//   }}>
//     <Image source={require('./assets/img/facebook.png')}
//     style={{
//       width:30,
//       height:30,
//       resizeMode:'contain'
//     }}
//       />
//   </View>
//  </View>
//   </View>
// )
// }

// export default App

// Login
// import { StyleSheet, Text, View, TextInput, Image } from "react-native";
// import React from "react";

// const TextInputCustom = ({ name, color}) => {
//   return (
//       <TextInput
//       placeholder={` ${name}`}
//       style={{
//         height: 64,
//         width: 344,
//         bordeColor: "gray",
//         borderWidth: 0.2,
//         marginBottom: 10,
//         paddingLeft: 10,
//         color: color,
//       }}
//       />
//   )
// }

// const ButtonCustom = ({color, text}) => {
//   return (
//     <View style={{
//       flex:1,
//       width:'90%',
//       borderRadius:20,
//       backgroundColor:color,
//       justifyContent:'center'
//     }}>
//       <Text style={{
//         textAlign:'center',
//         fontSize:15,
//         color:'white',
//       }}>{text}
//       </Text>
//     </View>
//   )
// }

// const App = () => {
// return (
//   <View style={{
//     flex:1, backgroundColor:'#F5F5F5',
//   }}>

//     <View style={{
//       flex:1,
//       justifyContent:'flex-start',
//       alignItems:'flex-start'
//     }}>
//       <Text style={{
//         padding:15,
//         top:60,
//         fontSize:30,
//         fontWeight: 'bold'
//       }}>Login</Text>
//     </View>

//   <View style={{
//     flex: 1,
//     justifyContent: "center",
//     alignItems:'center',
//     bottom:30

//   }}>
//   <TextInputCustom name="Email" color="#222222" />
//   <TextInputCustom name="Password" color="#222222" />
//   </View>

//   <View style={{
//     flex:1,
//     right:24,
//     alignSelf:'flex-end',
//     bottom:30
//   }}>
//     <Text>Forgot Password?</Text>
//   </View>

// <View style={{
//   justifyContent:'flex-end',
//   alignItems:'center',
//   width:'100%',
//   height:50,
//   bottom:180
//  }}>
//   <ButtonCustom color="red" text="LOGIN" />
//  </View>

//  <View style={{
//   justifyContent:'flex-end',
//   alignItems:'center',
//   bottom:50
//  }}>
//   <Text>Or sign up with social account</Text>
//  </View>

//  <View style={{
//   flexDirection:'row',
//   alignSelf:'center',
//   columnGap:20,
//   bottom:35
//  }}>

//   <View style={{
//     backgroundColor:'white',
//     borderRadius:10,
//     padding:10,
//   }}>
//     <Image source={require('./assets/img/google.png')}
//     style={{
//       width:30,
//       height:30,
//       resizeMode:'contain'
//     }}
//       />
//   </View>
//   <View style={{
//     backgroundColor:'white',
//     borderRadius:10,
//     padding:10,
//   }}>
//     <Image source={require('./assets/img/facebook.png')}
//     style={{
//       width:30,
//       height:30,
//       resizeMode:'contain'
//     }}
//       />
//   </View>
//  </View>
//   </View>
// )
// }

// export default App

// Forgot Password
// import { StyleSheet, Text, View, TextInput, Image } from "react-native";
// import React from "react";

// const TextInputCustom = ({ name, color}) => {
//   return (
//       <TextInput
//       placeholder={` ${name}`}
//       style={{
//         height: 64,
//         width: 344,
//         bordeColor: "gray",
//         borderWidth: 0.2,
//         marginBottom: 10,
//         paddingLeft: 10,
//         color: color,
//       }}
//       />
//   )
// }

// const ButtonCustom = ({color, text}) => {
//   return (
//     <View style={{
//       flex:1,
//       width:'90%',
//       borderRadius:20,
//       backgroundColor:color,
//       justifyContent:'center'
//     }}>
//       <Text style={{
//         textAlign:'center',
//         fontSize:15,
//         color:'white',
//       }}>{text}
//       </Text>
//     </View>
//   )
// }

// const App = () => {
// return (
//   <View style={{
//     flex:1, backgroundColor:'#F5F5F5',
//   }}>

//     <View style={{
//       flex:1,
//       justifyContent:'flex-start',
//       alignItems:'flex-start'
//     }}>
//       <Text style={{
//         padding:15,
//         top:60,
//         fontSize:30,
//         fontWeight: 'bold'
//       }}>Forgot Password</Text>
//     </View>

//     <View style={{
//       bottom:140,
//       alignSelf:'center',
//       paddingHorizontal:16
//     }}>
//       <Text>Please, enter your email address. You will receive a link to create a new password via email.</Text>
//     </View>

//   <View style={{
//     flex: 1,
//     justifyContent: "center",
//     alignItems:'center',
//     bottom:220
//   }}>
//   <TextInputCustom name="Email" color="#222222" />
//   </View>

// <View style={{
//   justifyContent:'flex-end',
//   alignItems:'center',
//   width:'100%',
//   height:50,
//   bottom:280
//  }}>
//   <ButtonCustom color="red" text="SEND" />
//  </View>

//   </View>
// )
// }

// export default App

// Use Fonts
import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

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
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }}>
    <Text style={{
      fontSize:20
    }}>Font Biasa</Text>
    <Text style={{
      fontSize:20,
      fontFamily:'MetroBold'
    }}>Font Metro Bold</Text>
    <Text style={{
      fontSize:20,
      fontFamily:'MetroLight'
    }}>Font Metro Light</Text>
    <Text style={{
      fontSize:20,
      fontFamily:'MetroMedium'
    }}>Font Metro Medium</Text>
    <Text style={{
      fontSize:20,
      fontFamily:'MetroSemiBold'
    }}>Font Metro Semi Bold</Text>
    <Text style={{
      fontSize:20,
      fontFamily:'MetroBlack'
    }}>Font Metro Black</Text>
  </View> 
)
}

export default App