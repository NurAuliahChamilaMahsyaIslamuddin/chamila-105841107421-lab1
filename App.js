import { StyleSheet, Text, View, Image } from "react-native"
import React from "react"
// import ButtonCustom from './componen/button/button'
const App = () => {
      const ButtonCustom = ({ color, text }) => {
            return (
                  <View style={{
                        backgroundColor: color , width: 150, height: 30,
                        justifyContent: "center",
                        borderRadius: 20,
                        marginBottom: 20,
                        }}>
                              <Text style={{ 
                              fontSize: 15, color: "RoyalBlue",
                              textAlign: "center",
                        }}>
                    {text}
                  </Text>
                  </View>
            )
      }
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
        marginBottom: 85,}}/>
</View>
<View style={{
      flex: 1,
      alignItems: "center", //baris
      justifyContent: "center", //kolom
      marginBottom: 70,
      }}>
            <ButtonCustom color='royalblue' text='E-mail' />
            <ButtonCustom color='royalblue' text='Pasword'/>
            <ButtonCustom color='royalblue' text='Masuk' />
</View>
</View>
)}
export default App