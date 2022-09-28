import React, { ReactElement } from 'react'
import { View, TouchableOpacity } from 'react-native'
import Text from "../text/text";

type Cell = "x" | "o" | null

type BoardProps = {
    state: [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell]
    size: number,
    onCellPressed: (index: number) => void
}

export default function Board({ state, size, onCellPressed }: BoardProps): ReactElement {
    return (
        <View style={{
            width: size,
            height: size,
            // backgroundColor: "green",
            flexDirection: "row",
            flexWrap: "wrap"
        }}>
            {state.map((cell, idx) => {
                return (
                    <TouchableOpacity
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