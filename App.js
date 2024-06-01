import { StyleSheet, Text, View, Image } from "react-native"
import React from "react"
const App = () => {
  return (
<View style={{ flex: 1, backgroundColor: "navy"}}>
<Text style={{
        flex: 1, 
        fontSize: 45, color: "royalblue",
        textAlign: "center",
        fontWeight: "bold",
        top: 15,
      }}>
      Drakor.ID 
</Text>
<View style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}>
  <Image 
        source={{uri:`assets/drakor.id.png`}}
        style={{ 
        width:135,
        height: 135,
        marginBottom: 170,}}/>
</View>
<View style={{
      flex: 1,
      alignItems: "center", //baris
      justifyContent: "center", //kolom
      marginBottom: 35,
      }}>
<Text style={{ 
        fontSize: 15, color: "royalblue",
        textAlign: "center",
      }}>
   E-mail
</Text>
<View style={{
      backgroundColor: "royalblue", width: 150, height: 30,
      justifyContent: "center",
      borderRadius: 20,
      }}>
</View>
<Text style={{ 
        fontSize: 15, color: "royalblue",
        textAlign: "center",
      }}>
   Password
</Text>
<View style={{
      backgroundColor: "royalblue", width: 150, height: 30,
      justifyContent: "center",
      borderRadius: 20,
      marginBottom :250,
      }}>
<View style={{
      backgroundColor: "royalblue", width: 150, height: 30,
      justifyContent: "center",
      borderRadius: 20,
      marginTop: 110,
      }}>
<Text style={{
      fontSize: 15, color: "black",
      textAlign: "center"
      }}>
    Masuk
</Text>
</View>
</View>
</View>
</View>
)}
export default App