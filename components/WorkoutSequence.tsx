import { useLocalSearchParams } from "expo-router"
import { useState } from "react"
import Timer from "./Timer"
import { Text, useTheme } from "react-native-paper"
import { Pressable, View } from "react-native"
import { NativeSearchBarCommands } from "react-native-screens"

export type Sequence = {
    sequenceName: string
    sequenceTimers: Array<SequenceTimer>
}

type SequenceTimer = {
    seconds: number
    label: string
}

type WorkoutProps = {
    sequence: Sequence

}


export default function WorkoutSequence({ sequence }: WorkoutProps) {

    const [currentTimer, setCurrentTimer] = useState(0)
    const [started, setStarted] = useState(false)
    const theme = useTheme()

    const { seconds, label } = sequence.sequenceTimers[currentTimer]
    return (
        started ? (
            <Timer key={currentTimer} duration={seconds} label={label} onEnd={() => {
                if (currentTimer + 1 < sequence.sequenceTimers.length) {
                    setCurrentTimer(currentTimer + 1)
                } else {
                    setCurrentTimer(0)
                    setStarted(false)
                }
            }}></Timer>
        ) :
            (

                <Pressable onPress={() => setStarted(true)} >
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Text variant="displayMedium" style={{ color: theme.colors.primary }}> {sequence.sequenceName}</Text>
                        <Text variant="displaySmall" style={{ color: theme.colors.primary }}> TAP TO START </Text>
                    </View>

                </Pressable>
            )
    )

}