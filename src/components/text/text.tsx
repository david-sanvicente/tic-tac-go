import React, {ReactNode, ReactElement} from 'react'
import { Text as NativeText, TextProps as NativeTextProps } from 'react-native'

type TextProps = {
    weight: "400"
    children: ReactNode
} & NativeTextProps

const defaultProps = {
    weight: "400"
}

export default function Text({children, style, weight, ...props}: TextProps) : ReactElement {
    let fontFamily;
    if(weight === "400") fontFamily = "Dokdo_400Regular"
  return (
      <NativeText {...props} style={[{fontFamily},style]}>{children}</NativeText>
  )
}

Text.defaultProps = defaultProps