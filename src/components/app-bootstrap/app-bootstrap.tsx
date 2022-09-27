import React, { ReactNode, ReactElement } from 'react'
import { useFonts, Dokdo_400Regular } from "@expo-google-fonts/dokdo"
import AppLoading from "expo-app-loading"

type AppBoostrapProps = {
    children: ReactNode
}

export default function AppBootstrap({ children }: AppBoostrapProps): ReactElement {
    const [fontLoaded] = useFonts({
        Dokdo_400Regular
    })

    return (
        fontLoaded ? <>{children}</> : <AppLoading />
    )
}
