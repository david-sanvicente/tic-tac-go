import { View, Text, SafeAreaView } from 'react-native'
import React, { ReactElement } from 'react'
import styles from "./single-player-game.styles"
import { GradientBackground } from "../../components"

export default function Game(): ReactElement {
  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <Text>Game</Text>
      </SafeAreaView>
    </GradientBackground>
  )
}