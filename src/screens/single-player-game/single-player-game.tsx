import { SafeAreaView, TouchableOpacity } from 'react-native'
import React, { ReactElement } from 'react'
import styles from "./single-player-game.styles"
import { GradientBackground } from "../../components"
import { Board } from "../../components"
import Text from "../../components/text/text"

export default function Game(): ReactElement {
  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <Board
          onCellPressed={(idx) => alert(idx)}
          state={['x', 'o', null, 'x', 'o', null, 'x', 'o', null]}
          size={300}
        />
      </SafeAreaView>
    </GradientBackground>
  )
}