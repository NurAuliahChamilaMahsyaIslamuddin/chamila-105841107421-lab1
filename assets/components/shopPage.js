import { View, Text } from 'react-native'
import React from 'react'

const shopPage = () => {
  return (
    <View>
      <Image source={require('../img/hero.png')} style={{widht:300,height:300, resizMode:'contain'}} />
    </View>
  )
}

export default shopPage