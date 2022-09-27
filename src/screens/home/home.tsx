import { View, Text, Image, Button } from 'react-native'
import React, { ReactElement } from 'react'
import styles from "./home.styles"
import { StackNavigationProp } from "@react-navigation/stack"
import { StackNavigatorParams } from "../../config/navigator"

type HomeProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Home">
}

export default function Home({ navigation }: HomeProps): ReactElement {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/favicon.png")} />
      <Text>Home</Text>
      <Button
        title="Game"
        onPress={() => {
          navigation.navigate("Game", { gameId: '777' })
        }} />
    </View>
  )
}