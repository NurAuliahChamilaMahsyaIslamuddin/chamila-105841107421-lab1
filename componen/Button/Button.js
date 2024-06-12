import React from 'react'
import { View, Text } from 'react-native'

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

export default ButtonCustom