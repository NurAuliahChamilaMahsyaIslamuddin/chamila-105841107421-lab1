import { StyleSheet, Text, View, TextInput } from "react-native-web";
import React from "react";


const TextInputCustom = ({ name, color}) => {

  return (
      <TextInput
      placeholder={`Masukkan ${name}`}
      style={{
        height: 40,
        width: 200,
        bordeColor: "gray",
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        paddingLeft: 10,
        color: color,
      }}
      />
  )
}
const App = () => {

return (
  <View style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }}>

  <TextInputCustom name="Username" color="black" />
  <TextInputCustom name="Password" color="red" />
  </View>
)
}
export default App