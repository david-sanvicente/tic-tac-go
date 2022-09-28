import { SafeAreaView, TouchableOpacity } from 'react-native'
import React, { ReactElement } from 'react'
import styles from "./single-player-game.styles"
import { GradientBackground } from "../../components"
import { Board } from "../../components"
import Text from "../../components/text/text"
import { printFormattedBoard, isEmpty, isFull, getAvailableMoves, BoardState } from '../../utils'
// import { printFormattedBoard } from "../../utils"

export default function Game(): ReactElement {
  const b: BoardState = ['o', 'o', null, 'x', 'x', null, 'x', 'o', null]
  printFormattedBoard(b);
  console.log(isEmpty(b))
  console.log(isFull(b))
  console.log(getAvailableMoves(b))
  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <Board
          onCellPressed={(idx) => alert(idx)}
          state={b}
          size={300}
        />
      </SafeAreaView>
    </GradientBackground>
  )
}