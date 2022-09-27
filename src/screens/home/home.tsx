import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from "./home.styles"

export default function Home() {
  return (
    <View style={styles.container}>
       <Image source={require("../../../assets/favicon.png")}/>
      <Text>Home</Text>
    </View>
  )
}