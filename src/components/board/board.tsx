import React, { ReactElement } from 'react'
import { View, TouchableOpacity } from 'react-native'
import Text from "../text/text";
import { BoardState } from '../../utils'

type BoardProps = {
    state: BoardState
    size: number,
    disabled?: boolean,
    onCellPressed: (index: number) => void
}

export default function Board({ state, disabled, size, onCellPressed }: BoardProps): ReactElement {
    return (
        <View style={{
            width: size,
            height: size,
            // backgroundColor: "#81007F",
            flexDirection: "row",
            flexWrap: "wrap"
        }}>
            {state.map((cell, idx) => {
                return (
                    <TouchableOpacity
                        disabled={cell !== null || disabled}
                        onPress={() =>
                            onCellPressed && onCellPressed(idx)
                        }
                        style={{
                            width: "33.33333%",
                            height: "33.33333%",
                            backgroundColor: "#4CBB17",
                            borderColor: "#81007F",
                            borderWidth: 1,
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                        key={idx}
                    >
                        <Text style={{
                            fontSize: size / 4,
                            // color: "#4CBB17",
                            color: "#81007F"
                        }}>{cell}</Text>
                    </TouchableOpacity>
                )
            })}
        </ View>
    )
}
