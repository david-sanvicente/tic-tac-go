import { SafeAreaView, TouchableOpacity } from 'react-native'
import React, { ReactElement, useState } from 'react'
import styles from "./single-player-game.styles"
import { GradientBackground } from "../../components"
import { Board } from "../../components"
import Text from "../../components/text/text"
import { printFormattedBoard, isEmpty, isFull, getAvailableMoves, isTerminal, BoardState } from '../../utils'
// import { printFormattedBoard } from "../../utils"

export default function Game(): ReactElement {
  const [state, setState] = useState<BoardState>(
    [null, null, null, null, null, null, null, null, null,]
  )

  printFormattedBoard(state);
  console.log(isTerminal(state))

  const handleOnCellPressed = (cell: number): void => {
    const stateCopy: BoardState = [...state]

    if (stateCopy[cell] || isTerminal(state)) return;

    stateCopy[cell] = 'x'
    setState(stateCopy)
  }

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <Board
          disabled={Boolean(isTerminal(state))}
          onCellPressed={(cell) => {
            handleOnCellPressed(cell)
          }}
          state={state}
          size={300}
        />
      </SafeAreaView>
    </GradientBackground>
  )
}