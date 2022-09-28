import { View, ScrollView, Image } from 'react-native'
import React, { ReactElement } from 'react'
import styles from "./home.styles"
import { StackNavigationProp } from "@react-navigation/stack"
import { StackNavigatorParams } from "../../config/navigator"
import { GradientBackground, Button } from "../../components/"

type HomeProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Home">
}

export default function Home({ navigation }: HomeProps): ReactElement {
  return (
    <GradientBackground >
      <ScrollView contentContainerStyle={styles.container}>
        <Image style={styles.logo} source={require("../../../assets/logo.png")} />
        <View style={styles.buttons}>
          <Button onPress={() => {
            navigation.navigate("SinglePlayerGame")
          }} style={{ marginBottom: 20 }} title="Single Player" />
          <Button style={{ marginBottom: 20 }} title="Multiplayer" />
          <Button style={{ marginBottom: 20 }} title="Login" />
          <Button title="Settings" />
        </View>
      </ScrollView>
    </GradientBackground>
  )
}