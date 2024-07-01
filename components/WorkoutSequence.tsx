import { useLocalSearchParams } from "expo-router"
import { useState } from "react"
import Timer from "./Timer"
import { Text, useTheme } from "react-native-paper"
import { Pressable, View } from "react-native"
import { NativeSearchBarCommands } from "react-native-screens"
import { playWellDoneSound } from "@/constants/Sounds"

export type Sequence = {
    sequenceName: string
    sequenceTimers: Array<SequenceTimer>
}

type SequenceTimer = {
    seconds: number
    label: string
    startSound?: ()=>Promise<void>
}

type WorkoutProps = {
    sequence: Sequence
    onEnd?: any

}


export default function WorkoutSequence({ sequence, onEnd }: WorkoutProps) {

    const [currentTimer, setCurrentTimer] = useState(0)
    const [started, setStarted] = useState(false)
    const theme = useTheme()

    const { seconds, label, startSound } = sequence.sequenceTimers[currentTimer]
    return (
        started ? (
            <Timer key={currentTimer} duration={seconds} label={label} onStart={startSound} onEnd={() => {
                if (currentTimer + 1 < sequence.sequenceTimers.length) {
                    setCurrentTimer(currentTimer + 1)
                } else {
                    setCurrentTimer(0)
                    setStarted(false)
                    if (onEnd !== undefined) onEnd()

                }
            }}></Timer>
        ) :
            (

                <Pressable onPress={() => setStarted(true)} >
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Text variant="displayLarge" style={{ color: theme.colors.primary }}> {sequence.sequenceName}</Text>
                        <Text variant="displaySmall" style={{ color: theme.colors.primary }}> TAP TO START </Text>
                    </View>

                </Pressable>
            )
    )

}