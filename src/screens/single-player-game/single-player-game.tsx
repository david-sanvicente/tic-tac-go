import { SafeAreaView, TouchableOpacity } from 'react-native'
import React, { ReactElement, useEffect, useState } from 'react'
import styles from "./single-player-game.styles"
import { GradientBackground } from "../../components"
import { Board } from "../../components"
import Text from "../../components/text/text"
import { getBestMove, printFormattedBoard, isEmpty, isFull, getAvailableMoves, isTerminal, BoardState } from '../../utils'

export default function Game(): ReactElement {
  const [state, setState] = useState<BoardState>(
    [
      null, null, null,
      null, null, null,
      null, null, null,
    ])

  const [turn, setTurn] = useState<"HUMAN" | "BOT">(Math.random() < 0.5 ? 'HUMAN' : 'BOT')

  const [isHumanMaximizing, setIsHumanMaximizing] = useState<boolean>(true)

  const gameResult = isTerminal(state)

  // console.log('getBestMove', getBestMove(state, true))
  // printFormattedBoard(state);
  // console.log(isTerminal(state))

  const insertCell = (cell: number, symbol: "x" | "o"): void => {
    const stateCopy: BoardState = [...state]

    if (stateCopy[cell] || isTerminal(state)) return;

    stateCopy[cell] = symbol
    setState(stateCopy)
  }

  const handleOnCellPressed = (cell: number): void => {
    if (turn !== 'HUMAN') return;
    insertCell(cell, isHumanMaximizing ? 'x' : 'o')
    setTurn("BOT")
  }

  useEffect(() => {
    if (gameResult) {
      // handle game finished
      alert("Game Over")
    } else {
      if (turn === 'BOT') {
        if (isEmpty(state)) {
          const centerAndCorners = [0, 2, 6, 8, 4]
          const firstMove =
            centerAndCorners[Math.floor(Math.random() * centerAndCorners.length)]
          insertCell(firstMove, 'x')
          setIsHumanMaximizing(false)
          setTurn("HUMAN")
        } else {
          const best = getBestMove(state, !isHumanMaximizing, 0, -1)
          insertCell(best, isHumanMaximizing ? 'o' : 'x')
          setTurn('HUMAN')
        }
      }
    }
  }, [state, turn])

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <Board
          disabled={Boolean(isTerminal(state)) || turn !== 'HUMAN'}
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